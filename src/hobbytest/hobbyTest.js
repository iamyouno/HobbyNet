import React from 'react'
import {Link} from 'react-router-dom'
import "./hobbyTest.css"
import timer from "./pngs/chronometer.png"
import ban from "./pngs/ban.png"
import home from "./pngs/home.png"

function hobbyTest(){
    return(
        <div class = "test_main">
            <div class = "home">
                <Link to='/'>
                    <img src={home} alt="home" width="3%" height="3%"/>
                </Link>
            </div>
            <div class = "explanation">
                Take our simple Hobby Test and
                <br/>
                get a hobby that is "exactly" your taste!
            </div>
            <div class = "button">
                <Link to='/test'>
                    <button id = "test_button">Click to test</button>
                </Link>
            </div>
            <div class = "rule">
                <div class = "rule_image">
                    <span class = "timer">
                        <img src={timer} alt="timer" width="150px" height="150px"/>
                    </span>
                    <span class = "honest">
                        <img src={ban} alt="ban" width="150px" height="150px"/>
                    </span>
                </div>
                <div class = "rule_explan">
                    <span class = "timer">
                        It takes about 1-2 minutes
                    </span>
                    <span class = "honest">
                        Modifying your choice is not allowed!
                    </span>
                </div>
            </div>
        </div>
    )
}

export default hobbyTest;