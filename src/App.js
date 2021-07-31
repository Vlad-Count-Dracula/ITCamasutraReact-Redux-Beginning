import './App.css';
import Navbar from './Body/Navbar/Navbar';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './Body/Pages/Home/Home.jsx';
import Reports from './Body/Pages/Reports/Reports.jsx';
import Products from './Body/Pages/Products/Products.jsx';
import Team from './Body/Pages/Team/Team';
import Messages from './Body/Pages/Messages/Messages';

const App = () => {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/reports' component={Reports} />
      <Route path='/products' component={Products} />
      <Route path='/team' component={Team} />
      <Route path='/messages' component={Messages} />
    </Switch>
    </Router>
    </>
  );
};

export default App;
