import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { NavBar } from './ui-components';
import { ProfileCard } from './ui-components';
import { useState } from 'react';

function App({ user, signOut }) {
  const [profileCard, showProfileCard] = useState(false);
  const navBarOverrides = {
    Button: {
      onClick: () => {
        signOut();
      },
    },
      image: {
        src: user?.attributes?.profile
    },
    Profile: {
      onClick: () => {
        showProfileCard(!profileCard);
      },
    },
  };

  return (
    <div className="App">
      <NavBar width={'100%'} overrides={navBarOverrides} />
      <ProfileCard display={profileCard ? 'flex' : 'none'} />
    </div>
  );
}

export default withAuthenticator(App);
