import React, { useState, useEffect, useRef } from 'react';
import { Link, BrowserRouter as Router, useHistory } from 'react-router-dom';
import './reviewPage.css';
import './search-bar.css';
import './reviewSearch.css';
import ReviewWrite from './reviewWrite.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartActive, faSearch, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartInactive, faEdit } from '@fortawesome/free-regular-svg-icons';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactStars from "react-rating-stars-component";
import delete_X from "./delete_X.png";

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

    // const [searchShow, setSearchShow] = useState({
    //     html: "searched:&nbsp; &nbsp; &nbsp;{searchContent.hashtag}"
    // })

    const [selAlign, setSelAlign] = useState({
        align: "date"
    })  

    const [viewContent, setViewContent] = useState([{
        id: 2,
        content: 'Wine is becoming a popular hobby. Good wines are being sold at a lower price than your thought. A sip with a simple side dish like cheese or canape with Netflix is a good friend of wine. Drinking alone is also good, and I think it would be good to have a small home party with your close friends. There is also non-alcoholic wine for people who can not drink well.', 
        like: 3, total: 4.5, interest: 5.0, schedule: 4.0, hashtag: ["wine", "winery"], date: "210524", active: -1, limit: 150
        },{
        id: 1,
        content: "Tea is a hobby that you enjoy with various senses. The scent and taste, as well as the beautiful design of teacups and bowls, and the touch of pottery are among the pleasures of this hobby. Both black and green tea have their own charms. Tea is not a expensive hobby anymore. If you look for a little bit, you can easily get a reasonable price of tea.", 
        like: 2, total: 4.5, interest: 4.0, schedule: 5.0, hashtag: ["tea", "green-tea", "black-tea"], date: "210523", active: -1, limit: 150
        },{
        id: 3,
        content: "Looking at the steadily growing plants, you can feel rewarded and decorating the house green is a very pleasant experience. Edible herbs such as rosemary and basil can be harvested and placed on the table. You can cook with them. If it hard to spend time for gardening, I recommend you to start with succulent plant that grows well without much care.", 
        like: 4, total: 3.5, interest: 4.0, schedule: 3.0, hashtag: ["gardening", "succulent"], date: "210523", active: -1, limit: 150
        },{
        id: 5,
        content: "How about baking that you can share good things with good people? It would be great to have an oven, but there are many desserts that can be made without an oven. There are also many inexpensive mini ovens these days. Have a happy hobby with dessert that makes your eyes and mouth happy together!", 
        like: 3, total: 4.5, interest: 4.0, schedule: 5.0, hashtag: ["cooking", "baking", "bread"], date: "210417", active: -1, limit: 150
        },{
        id: 4,
        content: "How about expressing your world in drawings? These days, you can take good online classes at relatively low prices. Painting that you started as a hobby can be a valuable one day. Of course, it is fun to draw, and that's enough.", 
        like: 7, total: 4.0, interest: 4.0, schedule: 4.0, hashtag: ["drawing", "painting"], date: "210411", active: -1, limit: 150  
        },{
        id: 6,
        content: "I recommend playing musical instruments to those who do their best to enjoy the present while still doing their job silently. You'll probably improve soon if you learn a musical instrument. Guitar or ukulele is good, and Kalimba is popular these days, too. There is also a digital piano that doesn't take up much space. It would be fun to take a video of the performance and share it with others or upload it on YouTube.", 
        like: 3, total: 4.0, interest: 5.0, schedule: 3.0, hashtag: ["playing instrument", "instrument", "guitar", "ukulele"], date: "210326", active: -1, limit: 150
        },{
        id: 7,
        content: "I'm sure you've played Jenga or Halli Galli. If you want to compete with strategy and intelligence, I recommend you Splender and Rumicube, and for party, speed quiz that requires quickness is a very good game.", 
        like: 1, total: 4.5, interest: 4.0, schedule: 5.0, hashtag: ["board game", "Jenga", "HalliGalli"], date: "210319", active: -1, limit: 150
        },{
        id: 8,
        content: "Forget the stereotype that you should go to a good place and record it as if you were writing a diary. Do you know that smartphones solve everything from shooting to editing these days? However, pay attention to personal information or portrait rights of others when you post it on the Internet.", 
        like: 6, total: 4.0, interest: 4.0, schedule: 4.0, hashtag: ["Vlog", "Youtube"], date: "210314", active: -1, limit: 150
        },{
        id: 9,
        content: "How about adding yoga to your fixed-routine to train your body and mind? It would be best to learn from professional instructors offline, but many people also train yoga through videos or online classes. With only the will to do it and the yoga mat, you can 'yoga' well.", 
        like: 10, total: 4.5, interest: 4.0, schedule: 5.0, hashtag: ["yoga"], date: "210313", active: -1, limit: 150
        },{
        id: 10,
        content: "Boxing is a good exercise to burn a lot of calories in a short time. It's a misunderstanding if you think it's boring because it's a solo exercise. Do you know the tap ball? If you use the tap ball, which is the most cost-effective toy and exercise equipment, you can find yourself that love boxing.", 
        like: 8, total: 5.0, interest: 5.0, schedule: 4.5, hashtag: ["boxing"], date: "210226", active: -1, limit: 150
        },{
        id: 11,
        content: "Tarot cards, of course, are superstitious, but they are intellectual entertainment with their own depth and fun. The result of the card is determined by probability, but it is up to the person to interpret the result. Use your imagination and storytelling to predict the fate of you and your friends. Enjoying the beautiful design of the card is a bonus.", 
        like: 2, total: 4.5, interest: 4.5, schedule: 5.0, hashtag: ["tarot", "tarot card reading"], date: "210223", active: -1, limit: 150
        },{
        id: 12,
        content: "Plastic model is a hobby that can both inspire creativity and entertainment. Many people would think of figures and Gundam when you hear plastic model. Of course, it's a good choice if you're interested in related content, but there's a more general choice like miniature houses. If you don't experience the sense of accomplishment by making a beautiful place with your own hands, you'll never know. The finished work is perfect for interior accessories.", 
        like: 3, total: 4.0, interest: 4.5, schedule: 3.5, hashtag: ["plastic model", "gundam"], date: "210221", active: -1, limit: 150
        },{
        id: 13,
        content: "It's really good to make a habit of writing. There are many things you can write. Writing a diary is good, and you can run a blog or try a brunch writer or a web novel writer. Even if you don't set specific goals and write for them, writing itself helps you protect your self-esteem and mental health.", 
        like: 11, total: 5.0, interest: 5.0, schedule: 5.0, hashtag: ["writing", "diary", "blog"], date: "210131", active: -1, limit: 150
        },{
        id: 14,
        content: "In a complicated world, let's go for a hobby that's comfortable. There are many fun comics like Marvel, DC comics, and etc. Let's enjoy it together!", 
        like: 8, total: 4.5, interest: 4.5, schedule: 4.5, hashtag: ["comic", "comics", "reading comics"], date: "210124", active: -1, limit: 150
        },{
        id: 15,
        content: "I would like to recommend you to study foreign languages if you don't have too much pressure to study in your spare time. Even if you don't travel abroad or do anything related, understanding the language of other countries helps you a lot in your daily life. For example, it would be useful to watch movies or search the web in that language, right? The view of the world itself also expands.", 
        like: 6, total: 4.5, interest: 4.5, schedule: 4.0, hashtag: ["studying foreign languages", "foreign languages", "languages"], date: "210122", active: -1, limit: 150
        },{
        id: 16,
        content: "It is a hobby recommended to people with concentration and endurance. It's a quite difficult hobby, but the satisfaction with the results is considerable. There's nothing more fun than doing DIY while watching radio or YouTube.", 
        like: 2, total: 4.5, interest: 5.0, schedule: 3.5, hashtag: ["cross stitch", "knitting"], date: "210116", active: -1, limit: 150
        }
    ])

    const [dataContent, setDataContent] = useState([...viewContent])

    const nextId = useRef(17);

    const getValue = e => {
        const {name, value} = e.target
        setSearch({
            hashtag: value
        })
        setValSearch({
            val: value
        })
    }

    const goSearch = () => {
        setSearchContent({
            hashtag: search.hashtag
        })
        console.log("goSearch")
        initSelectChange()
        
    }

    useEffect(() => {
        var newArr = []
        if (searchContent.hashtag == ""){
            newArr = [...dataContent]
        }
        else{
            for (var i=0; i<dataContent.length; i++){
                for (var j=0; j<dataContent[i].hashtag.length; j++)
                if (dataContent[i].hashtag[j] == searchContent.hashtag){
                    newArr.push(dataContent[i])
                }
            }
        }
        setViewContent(newArr)
    }, [searchContent])

    useEffect(() =>{
        initSelectChange()
    }, [])
    
    useEffect(() => {
        initSelectChange()
    }, [dataContent])

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
        allSeeLimit()
    }

    useEffect( () => {
        var list = [...viewContent]
        if (selAlign.align == "date"){
            list.sort(function(a, b){
                return b.date-a.date
            })
        }
        else if (selAlign.align == "score"){
            list.sort(function(a, b){
                return b.total-a.total
            })
        }
        else if (selAlign.align == "hearts"){
            list.sort( function(a, b) {
                return b.like-a.like
            })
        }
        
        setViewContent(list)
        console.log("hii")
    }, [selAlign])
        
    const initSelectChange = () => {
        var list = [...viewContent]
        list.sort(function(a, b){
            return b.date-a.date
        })
        setViewContent(list)
    }

    var pointlist=[0,0,0];
    var comments="";


    const ratingChanged = (index)=>(newRating) => {
    pointlist[index]=newRating;
    let newreview = review;
    newreview.total = pointlist[0];
    newreview.interest = pointlist[1];
    newreview.schedule = pointlist[2];
    setReview(newreview)
    };
    const [hastag,setss]=useState({
    items: [],
    focused: false,
    });
    const [Dayday, setdayday] = useState([{ day:"MON", yes: false, time:[0,0,0,0]},{day:'TUE',yes: false, time:[0,0,0,0] },
    {day:"WED", yes: false,time:[0,0,0,0] },{day:'THU',yes: false, time:[0,0,0,0] },{day:'FRI', yes: false,time:[0,0,0,0] },{day:'SAT', yes: false,time:[0,0,0,0] },
    {day:'SUN',yes: false, time:[0,0,0,0] }])

    const hours=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    const mins=[0,10,20,30,40,50];

    const Submit = (evt)=>{
        let newreview=review;
        let today = new Date()
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let todayDate = today.getDate();  // 날짜
        if (todayDate < 10){
            todayDate = "0" + todayDate
        }
        let showDate = year%100 + "0" +month+todayDate
        newreview.date = showDate
        setReview(newreview)
        // console.log(showDate)
        // setReview({
        //     ...review,
        //     [review.date]: showDate,
        // })
        // console.log(review.date)
        let newRev = {...review}
        var newArr = [...dataContent]

        newArr.push(newRev)
        setSelAlign({
            align: "date"
        })
        // #################################
        setDataContent(newArr)
        setViewContent(newArr)
        setReview({
            content: '',
            like: 0,
            total: parseFloat(0),
            interest: 0,
            schedule: 0,
            hashtag: [],
            date: "0",
            active: -1
        })
        setdayday([{ day:"MON", yes: false, time:[0,0,0,0]},{day:'TUE',yes: false, time:[0,0,0,0] },
{day:"WED", yes: false,time:[0,0,0,0] },{day:'THU',yes: false, time:[0,0,0,0] },{day:'FRI', yes: false,time:[0,0,0,0] },{day:'SAT', yes: false,time:[0,0,0,0] },
{day:'SUN',yes: false, time:[0,0,0,0] }])
        setss({
            items: [],
            focused: false,
            })
            allSeeLimit()
    }

    const handleInputChange=(evt)=> {
    let newVal = hastag
    newVal.input = evt.target.value
    setss(newVal);
    }

    const handleInputKeyDown=(evt)=> {
    if ( evt.keyCode === 13 ) {
    const {value} = evt.target;
    if(value!=""){
    let newreview = review;
    newreview.hashtag = [...hastag.items,value]
    
/*    let today = new Date()
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let todayDate = today.getDate();  // 날짜
    let showDate = year%100 + "0" +month+todayDate
    newreview.date = showDate
    setReview(newreview)
*/
    setss({
        items: [...hastag.items, value],
    });
    evt.target.value="";

    }}
    /*
    if ( hastag.items.length && evt.keyCode === 8 && !hastag.input.length ) {
    setss(hastag => ({
        items: hastag.items.slice(0, hastag.items.length - 1)
    }));
    }*/
    }

    const handleRemoveItem =(index)=> {
    return () => {
    let newreview = review;
    newreview.hashtag = hastag.items.filter((item, i) => i !== index);
    setReview(newreview)
    setss(hastag => ({
        items: hastag.items.filter((item, i) => i !== index)
    }));

    }
    }


    const updateClick= index=>e=> {
    let newArr = [...Dayday];
    newArr[index].yes = !newArr[index].yes;
    setdayday(newArr);
    }

    const updateTime= (index1,index2)=>e=> {
    let newArr = [...Dayday];
    newArr[index1].time[index2] = e.value;
    setdayday(newArr);
    }
    const updatecomment = e=>{
    comments=e.target.value;
    let newreview = review;
    newreview.content = comments;
    setReview(newreview)
    }

    const [searchShow, setSearchShow] = useState({
        show: 0
    })

    const showDel = () => {
        setSearchShow({
            show: 1
        })
    }

    const hideDel = () => {
        setSearchShow({
            show: 0
        })
    }

    const endSearch = () => {
        setSearchContent({
            hashtag: ""
        })
        setSearch({
            hashtag: ""
        })
        setValSearch({
            val:""
        })
        allSeeLimit()
        // setSelAlign({
        //     align: "score"
        // })
        //////////////////////////////////
    }

    const [valSearch, setValSearch] = useState({
        val: ""
    })

    const onKeyPress = (e) => {
        if (e.key=='Enter'){
            goSearch()
        }
    }

    const cateInput = useRef();
    const handleCateEnter=(evt)=> {
        if ( cateInput.current.value != "" ) {
            console.log("wow")
        const {value} = cateInput.current;
        
        let newreview = review;
        newreview.hashtag = [...hastag.items,value]
        console.log(newreview)

        setReview(newreview)
    
        setss({
            items: [...hastag.items, value],
        });
        cateInput.current.value="";
    }}

    // const [limit, setLimit] = useState(150);
    const toggleEllipsis = (str, limit) => {
        return {
            string: str.slice(0, limit),
            isShowMore: str.length > limit
        }
    }

    const seeMore = index => e => {
        var newArr = [...viewContent]
        newArr[index].limit = newArr[index].content.length
        // newArr[index].active = newArr[index].active * -1
        setViewContent(newArr)
        console.log("hi")
    }
    
    const allSeeLimit = () => {
        var newArr = [...viewContent]
        for (let i=0; i<newArr.length; i++){
            newArr[i].limit = 150
        }
        setViewContent(newArr)
    } 


    return(
        
        <div className="review-body">
            <div className="header">
                {/* <div className="title"><Link to ='/hobbynet' style={{textDecoration:'none', color:'inherit', fontWeight:'bold'}}>HobbyNet</Link></div> */}
                <input type="search" className="search" placeholder="search" onChange={getValue} value={valSearch.val} onKeyPress={onKeyPress}></input>
                <div ><FontAwesomeIcon style = {{cursor: 'pointer'}} icon={faSearch} id="icon" className="search-icon" onClick={goSearch}/></div>
            </div>
            
            <div className="review-container">
                <div className="review-header">
                    <div className="search-hashtag" onMouseOver={showDel} onMouseLeave={hideDel}>searched:&nbsp;&nbsp;&nbsp;{searchContent.hashtag}&nbsp;&nbsp;&nbsp;
                    {/* { searchShow.show ? <FontAwesomeIcon style = {{cursor: 'pointer'}} icon={faTimes} onClick={endSearch}/> : <FontAwesomeIcon icon={faTimes} style={{visibility: 'hidden'}}/>} */}
                    <FontAwesomeIcon style = {{cursor: 'pointer'}} icon={faTimes} onClick={endSearch}/>

                    </div>
                    <select style = {{cursor: 'pointer'}} className="select" onChange={selectChange} value={selAlign.align}>
                        <option value="date">Recent Date</option>
                        <option value="score">High Score</option>
                        <option value="hearts">Likes</option>
                    </select>
                </div>
            
                {viewContent.length == 0 ? <div className="noResCon"><div className="noResult">no result</div></div> : viewContent.map( (element, index) => 
                    <div className="review-each">
                        <div className="color-header">{String(element.date).substring(0, 2)} / {String(element.date).substring(2, 4)} / {String(element.date).substring(4, 6)}</div>
                        <div className="date"></div>
                        <div className="hashtag-container">
                            {element.hashtag.map( (e) => <span className="hashtag">#{e}&nbsp;&nbsp;</span>)}

                        </div>
                        <div className="review-content" >
                        {/* {element.content} */}
                        {toggleEllipsis(element.content, element.limit).string}
                        {toggleEllipsis(element.content, element.limit).isShowMore && <span className="review-seeMore" style={{color: '#5594C5'}} onClick={seeMore(index)}>... See more</span>}
                        
                        </div>
                        <div className="review-footer">
                            <div className="score">total score: 
                                {element.total %1 == 0 ? <span>{element.total}.0</span> : <span>{element.total}</span>}
                            </div>
                            <div className="score">interest: 
                                {element.interest %1 == 0 ? <span>{element.interest}.0</span> : <span>{element.interest}</span>}
                            </div>
                            <div className="score">schedule: 
                                {element.schedule %1 == 0 ? <span>{element.schedule}.0</span> : <span>{element.schedule}</span>}
                            </div>
                        
                            
                            {element.active == -1 ? 
                                
                                    <div className="like"><FontAwesomeIcon style = {{cursor: 'pointer'}} icon={faHeartInactive} id="icon" onClick={addLike(index)}/>{element.like}</div>:
                                    
                                    <div className="like"><FontAwesomeIcon icon={faHeartActive} id="icon" onClick={delLike(index)} style={{color: "#f60000", cursor: 'pointer'}}/>{element.like}</div>
                                                    
                            }
                        </div>
                        
                    </div>
                )}
            
            </div>
            <Popup trigger={<button className="button-write"><FontAwesomeIcon icon={faEdit} id="icon"/>write</button>} modal nested>
            {close => (
      <div className="modal1">
        <button className="close" onClick={() => {
                setReview({
                    content: '',
                    like: 0,
                    total: parseFloat(0),
                    interest: 0,
                    schedule: 0,
                    hashtag: [],
                    date: "0",
                    active: -1
                })
                setdayday([{ day:"MON", yes: false, time:[0,0,0,0]},{day:'TUE',yes: false, time:[0,0,0,0] },
  {day:"WED", yes: false,time:[0,0,0,0] },{day:'THU',yes: false, time:[0,0,0,0] },{day:'FRI', yes: false,time:[0,0,0,0] },{day:'SAT', yes: false,time:[0,0,0,0] },
  {day:'SUN',yes: false, time:[0,0,0,0] }])
                setss({
                    items: [],
                    focused: false,
                    })
              console.log('Cancel');
              close();
            }}>
          &times;
        </button>
        <div className="header11"> <FontAwesomeIcon icon={faCircle} className="facircle2" />  HOBBY REVIEW  <FontAwesomeIcon icon={faCircle} className="facircle2" /> </div>
        <div className="content11">
        <div className="bigwrapper11"> 
      <div className = "wrapper11">    
        <div className="full"> 

    <table id ="first">
          <tbody>
    <tr><td className="vert" id="vertical1">    <span><h2>
        Add Hashtags:</h2></span><div>
      <label>
      <input className="cateinput"
                placeholder=" ex)guitar"
              value={hastag.input}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}  ref={cateInput} /><button style = {{cursor: 'pointer'}} id="cateenter" onClick={handleCateEnter}>Enter</button>
          <ul className="container1" >
            {(hastag.items).map((item, i) => 
              <li key={i} className="items" onClick={handleRemoveItem(i)}>
                {item}
                <span>   <FontAwesomeIcon icon={faTimes}/>    </span>
              </li>
            )}
           
          </ul>
        </label>
      </div>
      </td>
              <td id="vertical2"><h2>Comments:<textarea id="hashtagbox" placeholder=" write your comments for the hobby" width ="100%" onInput={updatecomment} ></textarea></h2></td>
              </tr>

    <tr><td className="vert">
        <div id="starbox">
            <table id="startable">
              <tbody>
              <tr>
                  <td className="starhd"><h2>Total</h2></td>
                  <td className="stars">
    <ReactStars
      count={5}
      onChange={ratingChanged(0)}
      size={24}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
            </td>
              </tr>
              <tr>
                  <td className="starhd"><h2>Interest</h2></td>
                  <td className="stars">    <ReactStars
      count={5}
      onChange={ratingChanged(1)}
      size={24}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    /></td>
              </tr>
              <tr>
                  <td className="starhd"><h2>Schedule</h2></td>
                  <td className="stars"><ReactStars
      count={5}
      onChange={ratingChanged(2)}
      size={24}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    /></td>
              </tr>
              </tbody>
            </table>
        </div>
        </td><td>
            <h2 >Time Schedule for the hobby:</h2>
        <div id ="timebox">
            <table> 
              <tbody>
                

            {Dayday.map( (element, index) => <tr>
            <td><h3>{element.day}</h3></td>
            <td><h3><button type="button" onClick={updateClick(index)} className={element.yes?"emptycirbtn":"fullcirbtn"}>NO</button></h3></td>
            <td><h3><button onClick={updateClick(index)} className={element.yes ? "fullcirbtn":"emptycirbtn"}>YES</button></h3></td>
            <td><h3>  from  <select onInput={updateTime(index,0)} className={element.yes?"happy":"greyback"} disabled={!element.yes}><option disabled selected value> -- </option>{hours.map((ele,index)=><option>{ele}</option>)}</select> :  
            <select onInput={updateTime(index,0)} className={element.yes?"happy":"greyback"} disabled={!element.yes}><option disabled selected value> -- </option>{mins.map((ele,index)=><option>{ele}</option>)}</select>
              to  <select onInput={updateTime(index,0)} className={element.yes?"happy":"greyback"} disabled={!element.yes}><option disabled selected value> -- </option>{hours.map((ele,index)=><option>{ele}</option>)}</select> : 
              <select onInput={updateTime(index,0)} className={element.yes?"happy":"greyback"} disabled={!element.yes}><option disabled selected value> -- </option>{mins.map((ele,index)=><option>{ele}</option>)}</select>                
             </h3></td>
                </tr>)}
                </tbody>
            </table>
        </div>
        </td>
        </tr>
        </tbody>
              </table>
      </div>
      </div>
      </div>
        </div>
        <div className="actions">
        <button
            style = {{cursor: 'pointer'}}
            className="button22"
            id="cancel"
            onClick={() => {
                setReview({
                    content: '',
                    like: 0,
                    total: parseFloat(0),
                    interest: 0,
                    schedule: 0,
                    hashtag: [],
                    date: "0",
                    active: -1
                })
                setdayday([{ day:"MON", yes: false, time:[0,0,0,0]},{day:'TUE',yes: false, time:[0,0,0,0] },
  {day:"WED", yes: false,time:[0,0,0,0] },{day:'THU',yes: false, time:[0,0,0,0] },{day:'FRI', yes: false,time:[0,0,0,0] },{day:'SAT', yes: false,time:[0,0,0,0] },
  {day:'SUN',yes: false, time:[0,0,0,0] }])
                setss({
                    items: [],
                    focused: false,
                    })
              console.log('Cancel');
              close();
            }}
          >
            Close
          </button>
          <button
            style = {{cursor: 'pointer'}}
            className="button22"
            id ="accept"
            onClick={() =>{
                if (review.hashtag.length!=0){
                    console.log(review.hashtag)
              Submit()
              console.log('Accept');
              close();}
              else{alert("Add hashtag!")}
            }}
          >
            Accept
          </button>
        </div>
      </div>
    )}
  </Popup>
        </div>
    )
}

export default ReviewPage;
