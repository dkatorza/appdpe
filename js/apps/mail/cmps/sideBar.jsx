export function SideBar(props) {
    return (
        <nav className={`side-bar flex column align-center ${props.isMobileMenuOpen ? 'menu-open': ''}`}>
            <div className="side-bar-content flex column ">
                <button className="compose-btn" onClick={() => props.openCompose()}><img src="js\apps\mail\assets\compose-icon.png" />Compose</button>
                <section className="side-main-nav flex column space-between align-center">
                    <div className="inbox" onClick={() => props.onChangeSection('income')}>
                        <div className="sidebar-icon"><span><img src="https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png" /> </span></div>
                        <div className="sidebar-sec"> Inbox({props.unreadMailAmount})</div>
                    </div>
                    <div className="starred" onClick={() => props.onChangeSection('starred')}>
                        <div className="sidebar-icon"><span> <i className="fas fa-star"></i> </span></div>
                        <div className="sidebar-sec">Starred</div>
                    </div>
                    <div className="sent" onClick={() => props.onChangeSection('outcome')}>
                        <div className="sidebar-icon"><span> <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/send_black_20dp.png" /> </span></div>
                        <div className="sidebar-sec">Sent</div>
                    </div>
                    <div className="drafts" onClick={() => props.onChangeSection('draft')} >
                        <div className="sidebar-icon"> <span> <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/insert_drive_file_black_20dp.png" /> </span></div>
                        <div className="sidebar-sec"> Drafts</div>
                    </div>
                    <div className="deleted" onClick={() => props.onChangeSection('trash')}>
                        <div className="sidebar-icon"><span> <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/delete_black_20dp.png" /> </span></div>
                        <div className="sidebar-sec">Trash</div>
                    </div>
                </section>
            </div>
        </nav>
    )
}
