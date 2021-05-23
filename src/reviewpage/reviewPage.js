import React, { useState, useEffect, useRef } from 'react';
import { Link, BrowserRouter as Router, useHistory } from 'react-router-dom';
import './reviewPage.css';
import './search-bar.css';
import ReviewWrite from './reviewWrite.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartActive, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartInactive } from '@fortawesome/free-regular-svg-icons';
import { faEdit} from '@fortawesome/free-regular-svg-icons';
import Popup from 'reactjs-popup';

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

    const [search, setSearch] = useState({
        hashtag: ""
    })

    const [searchContent, setSearchContent] = useState({
        hashtag: ""
    })

    const [selAlign, setSelAlign] = useState({
        align: "date"
    })  

    const [viewContent, setViewContent] = useState([{
        id: 1,
        content: "It was a very special experience for me, but my weekend is gone", 
        like: 2, total: 4.0, interest: 5.0, schedule: 3.0, hashtag: ["surfing", "extreme"], date: "210525", active: -1
        },{
        id: 2,
        content: 'It was really fun :)', 
        like: 3, total: 4.5, interest: 5.0, schedule: 4.0, hashtag: ["guitar"], date: "210525", active: -1
        },{
        id: 3,
        content: "Someone who rides a skateboard with me~", 
        like: 4, total: 5.0, interest: 5.0, schedule: 5.0, hashtag: ["skateboard", "board", "friend"], date: "210524", active: -1
        },{
        id: 4,
        content: "When I was in middle school, I was in the school band. I played the guitar after a long time and I remembered that time. But it takes too long. Also purchasing new guitar is too expensive. Most guitar academies also require a personal guitar.", 
        like: 12, total: 5.0, interest: 5.0, schedule: 5.0, hashtag: ["guitar"], date: "210319", active: -1  
        },{
        id: 5,
        content: "hahahahahahahahahahahahahahaha\nhahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha", 
        like: 3, total: 5.0, interest: 5.0, schedule: 5.0, hashtag: ["guitar"], date: "210411", active: -1
        },{
        id: 6,
        content: "hahahahahahahahahahahahahahaha\nhahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha", 
        like: 3, total: 5.0, interest: 5.0, schedule: 5.0, hashtag: ["guitar"], date: "210411", active: -1
    }])

    const [dataContent, setDataContent] = useState([viewContent])

    const nextId = useRef(7);

    const getValue = e => {
        const {name, value} = e.target
        setSearch({
            hashtag: value
        })
    }

    const history = useHistory()

    const goSearch = () => {
        setSearchContent({
            hashtag: search.hashtag
        })
        // history.push('/reviewPage/'+search.hashtag)
    }

    useEffect(() => {
        console.log("hi")
        var newArr = []
        if (searchContent.hashtag == ""){
            newArr = [...viewContent]
        }
        else{
            for (let i=0; i<viewContent.length; i++){
                if (viewContent[i].hashtag == searchContent.hashtag){
                newArr.push(viewContent[i])
                }
            }
        }
        setViewContent(newArr)
    }, [searchContent])

    const addLike = index => e => {
        var newArr = [...viewContent]
        newArr[index].like = newArr[index].like+1;
        newArr[index].active = newArr[index].active * -1
        setViewContent(newArr)
    }

    const delLike = index => e => {
        var newArr = [...viewContent]
        newArr[index].like = newArr[index].like-1;
        newArr[index].active = newArr[index].active * -1
        setViewContent(newArr)
    }

    const selectChange = (e) => {

        console.log(e.target.value)
        setSelAlign({
            align: e.target.value
        })
        
        
        var list = [...viewContent]
        if (e.target.value == "date"){
            list.sort(function(a, b){
                return b.date-a.date
            })
        }
        else if (e.target.value == "score"){
            list.sort(function(a, b){
                return b.total-a.total
            })
        }
        else if (e.target.value == "hearts"){
            list.sort( function(a, b) {
                return b.like-a.like
            })
        }
        
        setViewContent(list)
        
    }

    return(
        
        <div className="review-body">
            <div className="header">
                <div className="title">Hobby Net</div>
                <input type="search" className="search" placeholder="search" onChange={getValue}></input>
                <div ><FontAwesomeIcon icon={faSearch} id="icon" className="search-icon" onClick={goSearch}/></div>
            </div>
            
            <div className="review-container">
                <div className="review-header">
                    <div className="search-hashtag">{searchContent.hashtag}   </div>
                    <select className="select" onChange={selectChange}>
                        <option value="date">Upload Date</option>
                        <option value="score">High Score</option>
                        <option value="hearts">Hearts</option>
                    </select>
                </div>
            
                {viewContent.map( (element, index) => 
                    <div className="review-each">
                        <div className="date">{String(element.date).substring(0, 2)}/{String(element.date).substring(2, 4)}/{String(element.date).substring(4, 6)}</div>
                        <div className="review-content" >{element.content}</div>
                        <div className="hashtag-container">
                            {element.hashtag.map( (e) => <span className="hashtag">#{e}</span>)}

                        </div>
                        <div className="review-footer">
                            <div className="score">total score: 
                                {element.total %1 == 0 ? <span>{element.total}.0</span> : <span>{element.total}</span>}
                            </div>
                            <div className="score">interest: 
                                {element.total %1 == 0 ? <span>{element.interest}.0</span> : <span>{element.interest}</span>}
                            </div>
                            <div className="score">schedule: 
                                {element.total %1 == 0 ? <span>{element.schedule}.0</span> : <span>{element.schedule}</span>}
                            </div>
                        
                            
                            {element.active == -1 ? 
                                
                                    <div className="like"><FontAwesomeIcon icon={faHeartInactive} id="icon" onClick={addLike(index)}/>{element.like}</div>:
                                    
                                    <div className="like"><FontAwesomeIcon icon={faHeartActive} id="icon" onClick={delLike(index)} style={{color: "#f60000"}}/>{element.like}</div>
                                                    
                            }
                        </div>
                        
                    </div>
                )}
            
            </div>
            <button className="button-write" onClick={()=>alert("ih")}><FontAwesomeIcon icon={faEdit} id="icon"/>write</button>
            <ReviewWrite/>
        </div>
    )
}

export default ReviewPage;