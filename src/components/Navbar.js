export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <a href="/">
                    <div className="flex flex_gap_10 navbar_title">
                        <img src="/static/images/logo.png" className="logo.png" width={50} />
                        <p className="bold navbar_title_name">PhotoFolio</p>
                    </div>
                </a>
            </nav>
        </>
    )
}