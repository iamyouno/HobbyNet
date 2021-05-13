import './App.css';
import Main from './main.js'
import HobbyTest from './hobbytest/hobbyTest.js'
import Schedule from './schedule/schedule.js'
import ReviewPage from './reviewpage/reviewPage.js'
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Route exact path='/'><Main/></Route>
            <Route path='/hobbyTest'><HobbyTest/></Route>
            <Route path='/schedule'><Schedule/></Route>
            <Route path='/reviewPage'><ReviewPage/></Route>
        </Router>

    );
}

export default App;
