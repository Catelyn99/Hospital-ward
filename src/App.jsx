import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Patient from './AboutPatient/Patient';
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
          <Route exact path="/Hospital-ward" component={Rooms} />
          <Route path="/Hospital-ward/room/:id" component={AreasStructure} />
          <Route path="/Hospital-ward/room/:id/patient/:id" component={Patient} />
        </Switch>
      </Router>
    </Store>
  );
}

export default App;


