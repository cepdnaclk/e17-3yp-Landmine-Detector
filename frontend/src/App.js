import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import { Route, Router, Link, BrowserRouter } from 'react-router-dom';
import Current from './components/Current/Current';
import OpenStreetMap from './components/OpenStreetMap/OpenStreetMap';
import History from './components/History/History';
import Tasks from './components/Tasks/Tasks';
import Reports from './components/Reports/Reports';

function App() {
  return(
    // <div>
    //   <Profile />
    // </div>
    <BrowserRouter>
    <div>
    <div className='sidebar'>
      <header>Landmine detector</header>
      <ul>
        <li><Link to='/' className='nav-link'>Profile</Link></li>
        <li><Link to='/current' className='nav-link'>Current</Link></li>
        <li><Link to='/history' className='nav-link'>History</Link></li>
        <li><Link to='/tasks' className='nav-link'>Tasks</Link></li>
        <li><Link to='/reports' className='nav-link'>Reports</Link></li>
        <br/>
      </ul>
      </div>
        <section >
        <header>User</header>
        <div style={{paddingLeft:'25%'}}>
          <br/>
          <Route path="/" exact component={OpenStreetMap} />
          <Route path="/current" component={Current} />
          <Route path="/history" component={History} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/reports" component={Reports} />
          {/* <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} /> */}
        </div>
        </section>


      
    </div>









        <div className='container'>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to='/' className='navbar-brand'>ExerciseTracker</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                            <Link to='/' className='nav-link'>Exercises</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/create' className='nav-link'>Create Exercise Log</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/user' className='nav-link'>Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
          <br/>
          <Route path="/" exact component={Current} />
          <Route path="/edit/:id" component={Current} />
          <Route path="/create" component={Current} />
          <Route path="/user" component={Current} />
        </div>
      </BrowserRouter>
  );
}

export default App;
