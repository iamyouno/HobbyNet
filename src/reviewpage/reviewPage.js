import React, { useState, useRef } from 'react';
import './reviewPage.css';
import ReviewWrite from './reviewWrite.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartActive } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartInactive } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

function ReviewPage(){
    const [review, setReview] = useState({
        content: '',
        like: 0,
        total: parseFloat(0),
        interest: 0,
        schedule: 0,
        hashtag: [],
        date: "0",
        active: -1
    })

    const [viewContent, setViewContent] = useState([{
        id: 1,
        content: 'hi', 
        like: 2, total: 4.0, interest: 3.0, schedule: 5.0, hashtag: ["surfing", "extreme"], date: "210520", active: -1
        },{
        id: 2,
        content: 'It was really fun :)', 
        like: 3, total: 5.0, interest: 5.0, schedule: 5.0, hashtag: ["guitar"], date: "210411", active: -1
        },{
        id: 3,
        content: "hahahahahahahahahahahahahahaha\nhahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha", 
        like: 3, total: 5.0, interest: 5.0, schedule: 5.0, hashtag: ["guitar"], date: "210411", active: -1
        },{
        id: 3,
        content: "hahahahahahahahahahahahahahaha\nhahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha", 
        like: 3, total: 5.0, interest: 5.0, schedule: 5.0, hashtag: ["guitar"], date: "210411", active: -1  
        },{
        id: 3,
        content: "hahahahahahahahahahahahahahaha\nhahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha", 
        like: 3, total: 5.0, interest: 5.0, schedule: 5.0, hashtag: ["guitar"], date: "210411", active: -1
        },{
        id: 3,
        content: "hahahahahahahahahahahahahahaha\nhahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha", 
        like: 3, total: 5.0, interest: 5.0, schedule: 5.0, hashtag: ["guitar"], date: "210411", active: -1
    }])

    const nextId = useRef(4);

    const addLike = index => e => {
        let newArr = [...viewContent]
        newArr[index].like = newArr[index].like+1;
        newArr[index].active = newArr[index].active * -1
        setViewContent(newArr)
    }

    const delLike = index => e => {
        let newArr = [...viewContent]
        newArr[index].like = newArr[index].like-1;
        newArr[index].active = newArr[index].active * -1
        setViewContent(newArr)
    }

    return(
        <div>
            <div className="header">
                <div className="title">Hobby Net</div>
                <input type="search" className="search" placeholder="search"></input>
            </div>
            <div className="review-container">
                {viewContent.map( (element, index) => 
                    <div className="review-each">
                        <div className="date">{String(element.date).substring(0, 2)}/{String(element.date).substring(2, 4)}/{String(element.date).substring(4, 6)}</div>
                        <div className="review-content" >{element.content}</div>
                        <div className="hashtag-container">
                            {element.hashtag.map( (e) => <span className="hashtag">#{e}</span>)}

                        </div>
                        <div className="score-container">
                            <div className="score">total score: 
                                {element.total %1 == 0 ? <span>{element.total}.0</span> : <span>{element.total}</span>}
                            </div>
                            <div className="score">interest: 
                                {element.total %1 == 0 ? <span>{element.interest}.0</span> : <span>{element.interest}</span>}
                            </div>
                            <div className="score">schedule: 
                                {element.total %1 == 0 ? <span>{element.schedule}.0</span> : <span>{element.schedule}</span>}
                            </div>
                        </div>
                        <div>
                        {element.active == -1 ? 
                            
                                <div className="like"><FontAwesomeIcon icon={faHeartInactive} id="icon" onClick={addLike(index)}/>{element.like}</div>:
                                
                                <div className="like"><FontAwesomeIcon icon={faHeartActive} id="icon" onClick={delLike(index)} style={{color: "#f60000"}}/>{element.like}</div>
                                                
                        }
                        
                    </div></div>
                )}
            
            </div>
            <button className="button-write" onClick={()=>alert("ih")}><FontAwesomeIcon icon={faEdit} id="icon"/>write</button>
            <ReviewWrite/>
        </div>
    )
}

export default ReviewPage;