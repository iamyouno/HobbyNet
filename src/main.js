import React from 'react';
import { Link } from 'react-router-dom';
import './main.css'
import test from './test.png'
import review from './search.png'
import timetable from './schedule.png'

function main(){
    return(
        <div class = "main">
            HobbyNet
            <div class = "main_buttons">
                <div class = "main_button test">
                    <Link to ='/hobbytest' style={{textDecoration: 'none'}}>
                        <img src={test} alt="test" height="60%" class = "image"/>
                        <div class = "icon_text">
                            <div class = "brief">Hobby Test</div>
                            <div class = "detail">Get a hobby recommendation by a simple hobby test!</div>
                        </div>
                    </Link>
                </div>
                <div class = "main_button review">
                    <Link to ='/reviewPage' style={{textDecoration: 'none'}}>
                        <img src={review} alt="test" height="60%" class = "image"/>
                        <div class = "icon_text">
                            <div class = "brief">Review</div>
                            <div class = "detail">See other’s realistic reviews!</div>
                        </div>
                    </Link>
                </div>
                <div class = "main_button schedule">
                    <Link to ='/schedule' style={{textDecoration: 'none'}}>
                        <img src={timetable} alt="test" height="60%" class = "image"/>
                        <div class = "icon_text">
                            <div class = "brief">Timetable</div>
                            <div class = "detail">Find what hobbies are available when you want!</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default main;