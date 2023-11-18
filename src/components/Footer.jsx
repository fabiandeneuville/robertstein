function Footer(){

    const year = new Date().getFullYear();

    return (
        <footer className="footer p-5 border-top border-3 d-flex flex-column justify-content-center align-items-center">
            <a className="footer-link" href="mailto:deneuville.fabian@live.fr">Kontakt</a>
            <a className="footer-link" href="mailto:deneuville.fabian@live.fr">Webmaster</a>
            <p>{year}</p>
        </footer>
    )
}

export default Footer;