import { Route, Routes } from 'react-router-dom';
import Followers from './components/Followers';
import Menus from './components/Menus';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import Onboarding from './components/Onboarding';
import Notifications from './components/Notifications';
import { Grid } from '@mui/material';
import Chat from './components/Chat';
function App() {
  return (
    <Grid item xs={12} sx={{ p: 3 }}>
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/menus' element={<Menus />} />
        <Route path='/menus' element={<Menus />} />
        <Route path='/followers' element={<Followers />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </Grid >
  );
}

export default App;
