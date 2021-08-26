const { Link } = ReactRouterDOM
import { mailService } from '../../mail/service/mail-service.js'
import { SideBar } from '../../mail/cmps/sideBar.jsx'


export class MailDetails extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const mailId = this.props.match.params.mailId;
        mailService.getMailById(mailId)
            .then(mail => this.setState({ mail }))
    }

    toggleLongText = () => {
        const isLongTxtShown = !this.state.isLongTxtShown
        this.setState({ isLongTxtShown })
    }

    changeMailSection = (section) => {
        this.props.history.push(`/mail?&section=${section}`)
    }


    render() {
        const mail = this.state.mail
        if (!mail) return <h4>loading...</h4>
        return (
            <div className="mail-details flex scale-in-hor-right">
                <SideBar onChangeSection={this.changeMailSection}></SideBar>
                <div className="mail-data-container">
                    <div className="keep-btn-su-container flex space-between align-center">
                        <h1>{mail.subject}</h1>
                        {/* <Link to={`/keep/mail?&mail=${mail.body}`}>save as note</Link> */}
                    </div>
                    <h3>Sender: {mail.address}</h3>
                    <p>{mail.body}</p>
                    <button className="back-btn" onClick={() => this.props.history.push('/mail')}><i className="fas fa-arrow-left"></i> Back to inbox</button>
                </div>
            </div>
        )
    }
}