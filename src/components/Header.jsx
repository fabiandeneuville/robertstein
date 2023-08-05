import { Navbar } from "react-bootstrap";

function Header(){
    return (
        <header className="d-flex flex-column flex-md-row justify-content-between border-bottom border-3">
            <h1 className="p-2 p-md-3 mb-0 text-center text-md-start">Robert Stein</h1>
            <Navbar className="d-flex flex-column flex-sm-row justify-content-evenly justify-content-md-end">
                <Navbar.Brand className="navbar-brand me-0 me-md-5" href="#biografie">
                    Biografie
                </Navbar.Brand>

                <Navbar.Brand className="navbar-brand me-0 me-md-5" href="#kunst">
                    Kunst
                </Navbar.Brand>
                <Navbar.Brand className="navbar-brand me-0 me-md-5" href="#artikelUndAusstellungen">
                    Artikel und Ausstellungen
                </Navbar.Brand>
            </Navbar>
        </header>
    )
}

export default Header;