import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Title from './Header/Title';
import Home from './Home';
import AreasStructure from './InsideRoom/AreasStructure';
import Store from './Store/Store';

const App = () => {

  

  return (
    <Store>
    <Router>
      <Title />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/room/:id" component={AreasStructure} />
        </Switch>
      </Router>
      </Store>
  );
}

export default App;


