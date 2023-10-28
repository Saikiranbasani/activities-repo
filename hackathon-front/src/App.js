import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { ProfileLogin, ProfileRegistration, ProfileSuccess } from './Components/Loan';

function App() {
  return (
    <div className = 'container-fluid'>
      <div className = 'alert alert-secondary'>
        <h2 className = 'text-center'>Loan Application</h2>
      </div>
      <div>
        <Routes>
          <Route path = '' element = {<ProfileLogin />}></Route>
          <Route path = '/login' element = {<ProfileLogin />}></Route>
          <Route path = '/register' element = {<ProfileRegistration />}></Route>
          <Route path = '/success/:emailId/*' element = {<ProfileSuccesss />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
