const { Link } = ReactRouterDOM
import { mailService } from '../../mail/service/mail-service.js'
import { SideBar } from '../../mail/cmps/sideBar.jsx'


export class MailDetails extends React.Component {

    state = {
        mail: null,
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const mailId = this.props.match.params.mailId;
        mailService.getMailById(mailId)
            .then(mail => this.setState({ mail }))
    }


    moveMailToTrash = (mailId) => {
        mailService.moveMailToTrash(mailId)
            .then(() => {
                this.props.history.push('/mail')
            })
    }

    markedMailasStarred = (mailId, trigger) => {
        mailService.markedMailasStarred(mailId, trigger)
            .then(() => {
                this.loadMail()
            })
    }

    changeMailSection = (section) => {
        this.props.history.push(`/mail?&section=${section}`)
    }


    render() {
        const mail = this.state.mail
        if (!mail) return <h4>loading...</h4> // add here svg loader
        return (
            <div className="mail-details flex scale-in-hor-right ">
                <SideBar onChangeSection={this.changeMailSection}></SideBar>
                <div className="mail-data-container">
                    <div>
                        <h1>{mail.subject}</h1>
                    </div>
                    <h3>Sender: {mail.address}</h3>
                    <p>{mail.body}</p>
                    <button title="Back" className="back-btn" onClick={() => this.props.history.push('/mail')}><i className="fas fa-arrow-left"></i> Back to inbox</button>
                    <button title="Move to trash" onClick={() => this.moveMailToTrash(mail.id)}> <i className="fas fa-trash "></i> </button>
                    <button title="Mark as starred" className="star-btn" onClick={() => this.markedMailasStarred(mail.id, 'toggleStar')}> <i className={`${mail.isStarred ? 'fav-star-starred fas fa-star' : 'fav-star far fa-star'}`} ></i>
                    </button>
                </div>
            </div>
        )
    }
}