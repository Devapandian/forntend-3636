import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import useLogout from "../hooks/useLogout";
import { UserAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "../image/imag.jpg";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const pages = ["Products", "Pricing", "Blog","Shop","Offer"];
  const settings = ["Profile", "Account", "ShoppingCart", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const { logout, user } = UserAuth();
  let navigate = useNavigate();

  const handleLogout = async () => {
    console.log("click");
    sessionStorage.clear();

    let res;
    try {
      res = await signOut;
      console.log(res);
      sessionStorage.clear();
      navigate("/sign-in");
    } catch (e) {
      console.log(e);
    }
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Navbar bg="orange" variant="orange" expand="md" style={{ backgroundColor: "pink", color: "white" }}>
       <img
            src={Image} 
            alt=""
            style={{ height: '65px', marginLeft: '30px' ,backgroundColor: 'transparent', borderRadius: '60%' }} 
          />
      <Container>
        <Navbar.Brand href="/Dashboard">

          <span className="ms-2">Movie</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-appbar" />
        <Navbar.Collapse id="menu-appbar">
          <Nav className="me-auto">
            {pages.map((page, index) => (
              <Nav.Link key={index} as={Link} to={"/" + page}>
              {page}
              </Nav.Link>
              
            ))}
          </Nav>
          <Nav>
            <Dropdown
              onToggle={handleOpenUserMenu}
              show={Boolean(anchorElUser)}
            >
            <Button variant="link" onClick={() => handleLogout()}>
              <FontAwesomeIcon icon={faSignOutAlt} style={{ color: "white" }} />
            </Button>
              <Dropdown.Menu className="mt-3" aria-labelledby="user-dropdown">
                {settings.map((setting, index) => (
                  <Dropdown.Item
                    key={index}
                    as={Link}
                    to={"/" + setting.toLowerCase()}
                  >
                    {setting}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
