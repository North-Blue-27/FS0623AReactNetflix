import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const MyNav = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Passa il termine di ricerca al genitore (App)
  };

  const handleHomeClick = () => {
    setSearchTerm(''); // Resetta il termine di ricerca quando si fa clic su Home
    window.location.reload(); // Ricarica la pagina quando si fa clic su Home
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="mb-4"
      style={{ paddingLeft: '20px', paddingRight: '20px', backgroundColor: '#221f1f' }}
    >
      <Navbar.Brand href="#" onClick={handleHomeClick}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="logo"
          style={{ width: '120px', height: 'auto' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" className="text-white" onClick={handleHomeClick}>Home</Nav.Link>
          <Nav.Link href="#" className="text-white">TV Shows</Nav.Link>
          <Nav.Link href="#" className="text-white">Movies</Nav.Link>
          <Nav.Link href="#" className="text-white">New & Popular</Nav.Link>
          <Nav.Link href="#" className="text-white">My List</Nav.Link>
        </Nav>
        <Form className="d-flex" onSubmit={handleSearch}>
          <FormControl
            type="text"
            placeholder="Search"
            className="me-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit" variant="danger">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;



