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
                        <img src={test} alt="test" height="25%" class = "image"/>
                        <div class = "icon">
                            <div class = "icon_text">Hobby test</div>
                        </div>
                    </Link>
                </div>
                <div class = "main_button review">
                    <Link to ='/reviewPage' style={{textDecoration: 'none'}}>
                        <img src={review} alt="test" height="25%" class = "image"/>
                        <div class = "icon">
                            <div class = "icon_text">Review</div>
                        </div>
                    </Link>
                </div>
                <div class = "main_button schedule">
                    <Link to ='/schedule' style={{textDecoration: 'none'}}>
                        <img src={timetable} alt="test" height="25%" class = "image"/>
                        <div class = "icon">
                            <div class = "icon_text">Timetable</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default main;