import Routes from './routes';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const App = () => {
  const userPassword = localStorage.getItem('user-password') || "";
  const isUserLoggedIn = localStorage.getItem('isLoggedIn') || false;
  const [isUserRegistered, setUserRegistered] = useState(!!userPassword);
  
  return (
    <div className="App">
      <Routes isUserRegistered={isUserRegistered} isUserLoggedIn={isUserLoggedIn} />
    </div>
  );
}

export default App;
