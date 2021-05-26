import './App.css';
import Main from './main.js'
import HobbyTest from './hobbytest/hobbyTest.js'
import Test from './hobbytest/test.js'
import Schedule from './schedule/schedule.js'
import ReviewPage from './reviewpage/reviewPage.js'
import ReviewSearch from './reviewpage/reviewSearch.js'
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Route exact path='/'><Main/></Route>
            <Route path='/hobbyTest'><HobbyTest/></Route>
            <Route path='/test'><Test/></Route>
            <Route path='/schedule'><Schedule/></Route>
            <Route exact path='/reviewPage'><ReviewPage/></Route>
            <Route path='/reviewPage/:hashtag'><ReviewSearch></ReviewSearch></Route>
        </Router>
    );
}

export default App;
