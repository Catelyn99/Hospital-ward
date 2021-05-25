import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Title from './Header/Title';
import AreasStructure from './InsideRoom/AreasStructure';
import Rooms from './RoomsInWard/Rooms';
import Store from './Store/Store';

const App = () => {
  return (
    <Store>
      <Router>
        <Title />
        <Switch>
          <Route exact path="/" component={Rooms} />
          <Route path="/room/:id" component={AreasStructure} />
        </Switch>
      </Router>
    </Store>
  );
}

export default App;


