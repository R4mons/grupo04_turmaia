import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const Menu = ({ children }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
        navigate('/');
    }

    return (
        <>
            <PrivateRoute>
                <Navbar expand="lg" className="bg-primary navbar-dark" sticky="top">
                    <Container>
                        <Navbar.Brand as={Link} to="/main" className="fw-bold">
                            MeuApp
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/main" active={location.pathname === "/main"}>
                                    Home
                                </Nav.Link>
                                <Nav.Link as={Link} to="/sobre" active={location.pathname === "/sobre"}>
                                    Sobre
                                </Nav.Link>
                            </Nav>
                            <Nav className="ms-auto align-items-center">
                                <Nav.Link onClick={handleLogout} className="text-white d-flex align-items-center">
                                    <RiLogoutCircleRLine size={22} className="me-1" /> Sair
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div className="pb-5">
                    {children}
                </div>

            </PrivateRoute>
        </>
    )
};

export default Menu;