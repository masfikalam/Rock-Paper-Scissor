import { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
export const UserContext = createContext();

function App() {
  const [loggedUser, setLoggedUser] = useState({});

  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      {
        loggedUser.email ?
        <Home /> :
        <Login />
      }
    </UserContext.Provider>
  );
}

export default App;