import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Seejobs from './pages/seejobs';
import Postjobs from './pages/postjobs';
import Apply from './pages/apply';
import Dashboard from './pages/dashboard';
import Footer from './components/Footer';
import Registration from './pages/register';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/seejobs' component={Seejobs} />
        <Route path='/postjobs' component={Postjobs} />
        <Route path='/apply' component={Apply} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/register' component={Registration} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
