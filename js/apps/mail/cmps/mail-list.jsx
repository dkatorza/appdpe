import { MailPreview } from '../../mail/cmps/mail-preview.jsx'

export function MailList({ mails, onUpdateMail }) {

    return (<ul className="mail-list clean-list">
        
            {mails && mails.map(mail => <li key={mail.id}>
                    <MailPreview mail={mail} onUpdateMail={onUpdateMail} /></li>)}
    </ul>
    )
}