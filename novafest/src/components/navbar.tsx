import React from 'react';

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">Novafest</a>
                </div>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/program" className="navbar-link">Program</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/events" className="navbar-link">Events</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/contact" className="navbar-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};