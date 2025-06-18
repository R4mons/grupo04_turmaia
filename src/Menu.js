import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logox from './logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const Menu = ({ children }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('auth'); // Remove o item auth do localStorage
        alert("Logout realizado com sucesso!"); // Alerta de sucesso
        navigate('/'); // Redireciona para a página de fipe
    }

    const handleFipe = () => {
        navigate('/fipe'); // Redireciona para a página de fipe
    }
    return (
        <>

            <PrivateRoute>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand> <img className='App-logo' src={logox} width={80} alt=" logo " /> Minha App React  </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link to="/"> Login </Link> </Nav.Link>
                                <Nav.Link> <Link to="/cep"> Cep </Link> </Nav.Link>
                                <Nav.Link onClick={handleFipe}> Fipe</Nav.Link>
                                <Nav.Link> <Link to="/email"> Email </Link> </Nav.Link>
                           
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item> <Link to="/main"> Main </Link> </NavDropdown.Item>
                                    <NavDropdown.Item> <Link to="/footer"> Footer </Link></NavDropdown.Item>
                                </NavDropdown>
                           
                                <Nav.Link onClick={handleLogout}> <RiLogoutCircleRLine color={"#3c44b1"} size={24} /> </Nav.Link>
                           
                           
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                {children} {/* Renderiza o conteudo do componente filho*/}


                <footer className="bg-light text-center text-lg-start">
                    <div className="text-center p-3" style={{ backgroundColor: "lightblue" }}>
                        © 2025 MM:
                        <a className="text-dark" href="https://uniacademia.edu.br" target='_blank' rel="noreferrer" > Desenvolvimento Front End </a>
                    </div>
                </footer>

            </PrivateRoute>

        </>
    )
};

export default Menu;