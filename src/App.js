import './App.css';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component.jsx';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Homepage } />
      </Switch>
    </div>
  );
}

export default App;
