import { SideBar } from '../../mail/cmps/sideBar.jsx';
import { mailService } from '../../mail/service/mail-service.js';
import { MailList } from '../../mail/cmps/mail-list.jsx';
import { MailFilter } from '../../mail/cmps/mail-filter.jsx';
import { MailCompose } from '../../mail/cmps/mail-compose.jsx';
import eventBus from '../../../../js/services/event-bus-service.js';


export class MailApp extends React.Component {

  state = {
    mails: [],
    mailsType: '',
    isComposeShown: false,
    unreadMailAmount: '',
    filterBy: '', // if time permits add option to filter also by subject/ body content /date
    filterStatus: 'All'
  }

  componentDidMount() {

    const mailSection = new URLSearchParams(window.location.href).get('section')

    if (mailSection) {
      this.setState({ mailsType: mailSection })
    }
    else {
      this.setState({ mailsType: 'income' })
    }
    this.loadMails();

  }

  loadMails = () => {
    mailService.query()
      .then((mails) => {
        this.setUnreadAmount()
        this.setState({ mails })
      })
  }


  updateMail = (mailId, paramToChange, isUnreadClick) => {
    mailService.updateMail(mailId, paramToChange, isUnreadClick)
      .then(() => {
        if (paramToChange === 'removeMail' && this.state.mailsType === 'trash') {
          // eventBus.emit('notify', { msg: 'Mail have been removed' })
        }
        else if (paramToChange === 'removeMail' && this.state.mailsType !== 'trash') {
          // eventBus.emit('notify', { msg: 'Moved to trash' })
        }
        this.loadMails()

      })

  }

  setFilter = (ev) => {
    if (ev.target.type === 'search') this.setState({ filterBy: ev.target.value })
    if (ev.target.type === 'radio') this.setState({ filterStatus: ev.target.value })
  }

  openCompose = () => {
    this.setState({ isComposeShown: true })
  }

  closeCompose = () => {
    this.setState({ isComposeShown: false })
  }

  moveToDrafts = (draft) => {
    if (!draft.address && !draft.subject && !draft.body) {
      this.closeCompose();
      return
    }

    mailService.moveToDrafts(draft)
      .then(() => {
        this.closeCompose()
        this.loadMails()
      })
  }


  submitCompose = (newMail) => {
    mailService.sendMail(newMail)
      .then(() => {
        this.closeCompose()
        this.loadMails()
      })
  }


  changeMailSection = (section) => {
    this.props.history.push(`/mail?&section=${section}`)
    const mailSection = new URLSearchParams(window.location.href).get('section')
    this.setState({ mailsType: mailSection })

  }

  setMailsToDisplay() {
    const currMails = this.state.mails
    let setMailsToDisplay = currMails.filter(mail => mail.type === this.state.mailsType)
    if (this.state.mailsType === 'starred') setMailsToDisplay = currMails.filter(mail => mail.isStarred)
    if (!setMailsToDisplay) return
    let mails = setMailsToDisplay.filter(mail => mail.address.toLowerCase().includes(this.state.filterBy.toLowerCase()))
    if (this.state.filterStatus === 'newdate') mails = setMailsToDisplay.sort((a, b) => b.sentAt - a.sentAt)
    if (this.state.filterStatus === 'olddate') mails = setMailsToDisplay.sort((a, b) => a.sentAt - b.sentAt)
    if (this.state.filterStatus === 'subject') mails = setMailsToDisplay.sort((a, b) => a.subject.localeCompare(b.subject))


    if (this.state.filterStatus === 'read') {
      mails = setMailsToDisplay.filter(mail => mail.isRead)
    }
    else if (this.state.filterStatus === 'unread') {
      mails = setMailsToDisplay.filter(mail => !mail.isRead)
    }
    return mails;
  }


  setUnreadAmount = () => {
    mailService.countUnreadMails()
      .then(counter => {
        this.setState({ unreadMailAmount: counter })
      })
  }




  render() {
    const mails = this.setMailsToDisplay()
    if (!mails) return <h2> loading...</h2> //add svg loader
    return (
      <section className="main-mail flex">
        <SideBar openCompose={this.openCompose} unreadMailAmount={this.state.unreadMailAmount} onChangeSection={this.changeMailSection} />
        <div className="mails-container">
          <MailFilter filterBy={this.state.filterBy} onSetFilter={this.setFilter} />
          <MailList mails={mails} onUpdateMail={this.updateMail} />
          {this.state.isComposeShown && <MailCompose onCloseCompose={this.closeCompose} onSubmitCompose={this.submitCompose} onSendToDrafts={this.moveToDrafts} />}
        </div>
      </section>
    )
  }


}