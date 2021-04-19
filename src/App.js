import './App.css';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component.jsx';
import Shoppage from './pages/shop/shop.component.jsx';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route path='/shop' component={ Shoppage } />
      </Switch>
    </div>
  );
}

export default App;
