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
            <Route exact path='/hobbynet'><Main/></Route>
            <Route path='/hobbynet/hobbyTest'><HobbyTest/></Route>
            <Route path='/hobbynet/test'><Test/></Route>
            <Route path='/hobbynet/schedule'><Schedule/></Route>
            <Route path='/hobbynet/reviewPage'><ReviewPage/></Route>
        </Router>
    );
}

export default App;
