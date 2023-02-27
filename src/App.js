import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { NavBar } from './ui-components';
import { ProfileCard } from './ui-components';

function App({ user, signOut }) {
  const navBarOverrides = {
    Button: {
      onClick: () => {
        signOut();
      },
    },
  };

  return (
    <div className="App">
      <NavBar width={'100%'} overrides={navBarOverrides} />
      <ProfileCard />
    </div>
  );
}

export default withAuthenticator(App);
