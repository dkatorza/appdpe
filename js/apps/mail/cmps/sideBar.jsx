export function SideBar(props) {
    return (
        <nav className={`${props.isMobileMenuOpen ? 'menu-open': ''} side-bar flex column align-center`}>
            <div className="side-bar-content flex column space-evenely">
                <button className="compose-btn" onClick={() => props.openCompose()}><img src="js\apps\mail\assets\compose-icon.png" />Compose</button>
                <section className="side-main-nav flex column space-between align-center ">
                    <div className="inbox" onClick={() => props.onChangeSection('income')}>
                        <span> <i className="fas fa-inbox"></i> </span>
                    Inbox({props.unreadMailAmount})
                    </div>
                    <div className="starred" onClick={() => props.onChangeSection('starred')}>
                        <span> <i className="fas fa-star"></i> </span>
                    Starred
                </div> 
                    <div className="sent" onClick={() => props.onChangeSection('outcome')}>
                        <span> <i className="fas fa-share-square"></i> </span>
                    Sent
                </div>
                    <div className="drafts" onClick={() => props.onChangeSection('draft')} >
                        <span> <i className="fab fa-firstdraft"></i> </span>
                    Drafts
                </div>
                    <div className="deleted" onClick={() => props.onChangeSection('trash')}>
                        <span> <i className="fas fa-trash"></i> </span>
                    Trash
                </div>
                </section>
            </div>
        </nav>
    )
}

