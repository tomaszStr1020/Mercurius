import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import SalesArea from './SalesArea/SalesArea';
import Help from "./Help/Help";
import EditTabs from '../UI/Tabs/EditTabs/EditTabs';

export enum APP_PAGE {
  HOME = '/',
  HELP = '/help',
  MAINTENANCE = '/maintenance',
  STATISTICS = '/statistics',
  SALES = '/sales',
  EDIT = '/edit',
}

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={APP_PAGE.HOME} component={MainPage} />
        <Route path={APP_PAGE.SALES} component={SalesArea} />
        <Route path={APP_PAGE.HELP} component={Help} />
        <Route path={APP_PAGE.EDIT} component={EditTabs} />
      </div>
    </Router>
  );
}

export default App;