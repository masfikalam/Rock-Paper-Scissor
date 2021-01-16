import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import Game from './Game';
import Navbar from './Navbar';

const Home = () => {
    const [loggedUser] = useContext(UserContext);
    const [photo, setPhoto] = useState('');

    // loading photo
    useEffect(() => {
        fetch(`https://picsum.photos/id/${loggedUser.id}/info`)
        .then(res => res.json())
        .then(data => setPhoto(data.download_url))
    }, [loggedUser]);

    return (
        <main>
            <Navbar name={loggedUser.username} photo={photo} />
            <div className="row align-items-center mx-0 px-md-5 py-1 py-md-5">
                <div className="col-md-4 text-center py-5">
                    <img className="rounded-circle" width="150px" height="150px" src={photo} alt={loggedUser.username} />
                    <h3 className="mt-4 mb-0">{loggedUser.username}</h3>
                    <small className="text-secondary">{loggedUser.email}</small>
                </div>
                <div className="col-md-8 bg-light rounded py-5">
                    <Game name={loggedUser.username} />
                </div>
            </div>
        </main>
    );
};

export default Home;