import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import './App.css';
import Main from './views/Main';
import ShowAll from './views/ShowAll';
import Create from './views/Create';
import {Link} from '@reach/router';
import findRecoveryLogo from './images/findRecoverylogo.png';

function App() {

  return (
    <>
    <nav class="navbar navbar-light bg-dark">
      <a class="navbar-brand"></a>
      <form class="form-inline">
          <Link to="/" className="btn btn-secondary btn-outline-light">Home</Link>
          <Link to="/addMeeting" className="btn btn-secondary btn-outline-light">addMeeting</Link>
          <Link to="/findMeeting" className="btn btn-secondary btn-outline-light">findMeeting</Link>
      </form>
    </nav>

    {/* <div id="header" class="container rounded w-50">
      <div className="d-flex align-items-center justify-content-center">
        <img src={findRecoveryLogo} alt="find recovery logo"/>
        <Link to="/" className="btn btn-secondary btn-outline-light">Home</Link>
        <Link to="/addMeeting" className="btn btn-secondary btn-outline-light">addMeeting</Link>
        <Link to="/findMeeting" className="btn btn-secondary btn-outline-light">findMeeting</Link>
      </div>
    </div> */}
    <div className="container">
      <hr/>
    </div>
    <div className="App">
      <div>
        <Router>
          <Main path="/" />
          <ShowAll path="/findMeeting"/>
          <Create path="/addMeeting" />
        </Router>
      </div>
    </div>
    </>
  );
}



export default App;
