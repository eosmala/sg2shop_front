import {useState} from 'react';
import Login from './Login';
import Profile from './Profile';
import {Switch, Route} from 'react-router-dom';
import Logout from './Logout';


function LoginMain() {
  const [user, setUser] = useState(null);

  return (
    <Switch>
      <Route path="/login/Profile" exact render={() =>
        <Profile user={user} />
      } 
      />
      <Route path="/login" render={() => 
        <Login 
          setUser={setUser}
        />
        }
      />
      <Route path="/logout" render={() => 
        <Logout setUser={setUser} />
      }
      />
    </Switch>
  );
}

export default LoginMain;
