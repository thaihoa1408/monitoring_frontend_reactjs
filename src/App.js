

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import SiteView from './pages/siteview/SiteView';
import SiteKpi from './pages/sitekpi/SiteKpi';
import video1 from './videos/video-1.mp4';
import './App.css';
function App() {
  return (
    <div className="App">
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/site-monitor/siteview' exact component={SiteView} />
            <Route path='/site-monitor/sitekpi' component={SiteKpi} />
          </Switch>
        </Router>
    </div>
    
  );
}

export default App;
