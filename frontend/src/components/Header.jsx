import{ Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import SearchBox from './SearchBox';

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try{
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login');
        } catch(err){
            console.log(err);
        }
    }
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand='lg' collapseOnSelect>
            <Container>
                {/* <LinkContainer to='/'> */}
                    <Navbar.Brand as={Link} to='/'>
                        <img src={logo} alt='eMart'/>
                        eMart
                    </Navbar.Brand>
                {/* </LinkContainer> */}
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <SearchBox/>
                        {/* <LinkContainer to='/cart'> */}
                            <Nav.Link as={Link} to='/cart'><FaShoppingCart/>Cart{
                                cartItems.length > 0 && (
                                    <Badge pill bg='success' style={{marginLeft: '5px'}}>
                                        { cartItems.reduce((a, c) => a+c.qty, 0)}
                                    </Badge>
                                )
                            }</Nav.Link>
                        {/* </LinkContainer> */}
                        {/* <LinkContainer to='/login'> */}
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                {/* <Nav.Link as={Link} to='/profile'> */}
                                    <NavDropdown.Item as={Link} to='/profile'>Profile</NavDropdown.Item>
                                {/* </Nav.Link> */}
                                
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Nav.Link as={Link} to='/login'><FaUser/>Sign In</Nav.Link>
                        )}

                        {userInfo && userInfo.isAdmin && (
                            <NavDropdown title='Admin' id='adminmenu'>
                                <NavDropdown.Item as={Link} to='/admin/productList'>Products</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/admin/userList'>Users</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/admin/orderList'>Orders</NavDropdown.Item>
                            </NavDropdown>
                        )}
                            
                        {/* </LinkContainer> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header