import { Route, Routes } from 'react-router-dom';
import Followers from './components/Followers';
import Menus from './components/Menus';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import Onboarding from './components/Onboarding';
import Notifications from './components/Notifications';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/menus' element={<Menus />} />
        <Route path='/menus' element={<Menus />} />
        <Route path='/followers' element={<Followers />} />
        <Route path='/notifications' element={<Notifications />} />
      </Routes>
    </div >
  );
}

export default App;
