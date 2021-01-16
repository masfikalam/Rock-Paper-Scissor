import React, { useContext } from 'react';
import { UserContext } from '../App';

const Navbar = () => {
    const [, setLoggedUser] = useContext(UserContext);

    // user logout
    const logout = () => {
        setLoggedUser({});
    }
    
    return (        
        <nav className="navbar navbar-light shadow bg-light">
            <h3>Welcome</h3>
            <button onClick={logout} className="btn btn-danger">Logout</button>
        </nav>
    );
};

export default Navbar;