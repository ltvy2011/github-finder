import React from 'react';
import { Container } from 'react-bootstrap';
import {
    Link
} from 'react-router-dom';
function Header() {

    return (
        <header className="p-2 mb-4">
            <Container className="d-flex justify-content-between align-items-center text-light">
                <Link to="/" className="m-0 text-light h3">
                    Github Finder
                        </Link>
                <a href="https://github.com/ltvy2011" className="text-light non_hover">Git</a>
            </Container>
        </header>
    );
}

export default Header;
