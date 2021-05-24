import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Title from './Header/Title';
import Home from './Home';
import Room from './RoomsInWard/Room';

const App = () => {

  return (
    <>
    <Router>
      <Title />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/room:id" component={Room} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


