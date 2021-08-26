export function SideBar(props) {
    return (
        <nav class="side-bar flex column align-center">
            <div className="side-bar-content flex column ">
                <button className="compose-btn" onClick={() => props.openCompose()}><img src="js\apps\mail\assets\compose-icon.png" />Compose</button>
                <section className="side-main-nav flex column space-between align-center">
                    <div className="inbox" onClick={() => props.onChangeSection('income')}>
                        <span><img src="https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png"/> </span>
                    Inbox({props.unreadMailAmount})
                    </div>
                    <div className="starred" onClick={() => props.onChangeSection('starred')}>
                        <span> <i className="fas fa-star"></i> </span>
                    Starred
                </div> 
                    <div className="sent" onClick={() => props.onChangeSection('outcome')}>
                        <span> <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/send_black_20dp.png"/> </span>
                    Sent
                </div>
                    <div className="drafts" onClick={() => props.onChangeSection('draft')} >
                        <span> <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/insert_drive_file_black_20dp.png"/> </span>
                    Drafts
                </div>
                    <div className="deleted" onClick={() => props.onChangeSection('trash')}>
                        <span> <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/delete_black_20dp.png"/> </span>
                    Trash
                </div>
                </section>
            </div>
        </nav>
    )
}
