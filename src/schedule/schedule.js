import React, {useRef, useState, useEffect} from 'react';
import home from './Homeicon.png';
import './schedule.css';
import { Link } from 'react-router-dom';
import Modal from './Modal.js';
import Modal2 from './Modal2.js';
import timedist from './Timedist.png'



function Schedule(){
    const [ modalOpen, setModalOpen ] = useState(false);


    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const [ modalOpen2, setModalOpen2 ] = useState(false);


    const openModal2 = () => {
        setModalOpen2(true);
    }
    const closeModal2 = () => {
        setModalOpen2(false);
    }

    const taskRef1 = useRef(false);
    const taskRef2 = useRef(false);
    const taskRef3 = useRef(false);
    const taskRef4 = useRef(false);
    const taskRef5 = useRef(false);
    const taskRef6 = useRef(false);
    const taskRef9 = useRef(null);
    const taskRef10 = useRef(null);
    
    let selectedColor; 
    
    let active;

    //Event Listeners


    // Tasks click  (3)
    const selectTask = (e) =>{
        resetTasks()
        
        let taskColor = e.target.style.backgroundColor;
        switch(e.target.id){
            case 'work':
                activeTask(taskRef1,taskColor);
                //icon = '<i class="fas fa-couch"></i>';
                break
            case 'meal':
                activeTask(taskRef2, taskColor);
               //icon = '<i class="fas fa-dumbbell"></i>';
                break
            case 'sleep':
                activeTask(taskRef3,taskColor);
                //icon = '<i class="fas fa-book"></i>';
                break
            case 'gym':
                activeTask(taskRef4,taskColor);
                //icon = '<i class="fas fa-tv"></i>';
                break
            case 'any':
                activeTask(taskRef5,taskColor);
                //icon = '<i class="fas fa-users"></i>';
                break
            case 'delete':
                activeTask(taskRef6,taskColor);
               // icon = '<i class="fas fa-briefcase"></i>';
                break
        }

    };
    // Active task (1)
    const activeTask=(task,color)=>{
        
        task.current.classList.toggle('selected');

        if(task.current.classList.contains('selected')){
            active = true;
            selectedColor = color;
            
            return selectedColor;
            
        } else {
            active = false;
        }
    }
    
    // Set colors for schedule (4)
    const setColors =(e)=>{
        if(e.target.classList.contains('task') && active === true){
           e.target.style.backgroundColor = selectedColor;
        }
    };

    // Reset tasks (2)
    const resetTasks=()=>{
        const allTasks = document.querySelectorAll('.task__name');

        allTasks.forEach((item)=>{
            item.className = 'task__name';
        })
    }

    // Delete tasks
    const deleteTasks=()=>{
        const tasks = document.querySelectorAll('.task');

        tasks.forEach((item)=>{
            item.innerHTML = '';
            item.style.backgroundColor = 'white';
        })

        closePopup();
    }

    // Open Pop-up
    const openPopup=()=>{
        taskRef9.current.style.display = 'flex';
    }

    // Close Pop-up
    const closePopup=()=>{
        taskRef9.current.style.display = 'none';
    }

    const [ showList, setShowList] = useState(false);

    const showHobbylist = () => {
        setShowList(true);
        closeModal();
    }
    useEffect(()=>{
        
    },[showList])
    const renderCondition = showList
        ? <div className = "shownList">
            <div className ="hobbyinfo">
                <h2><span className="hobbyname">Movie</span></h2><br/>
                <h4><span className="infoname">Average Time : 2 hours</span></h4>
                <br/>
                <h4><span className="infoname">Rating : 4.7 / 5.0 </span></h4>
                <p/><br/>
                <React.Fragment><button className="seereview" onClick={openModal2}>Show Time Distribution</button><p/>
                <Modal2 open={modalOpen2} close={closeModal2} header="Time Distribution" > <img src={timedist} width='570px' height='450px'></img></Modal2> </React.Fragment>

                <Link to = './reviewPage'><button className="seereview">See Reviews</button><p/></Link>
                
            </div>
            <div className ="hobbyinfo">
                <h2><span className="hobbyname">Cooking</span></h2><br/>
                <h4><span className="infoname">Average Time : 1.5 hours</span></h4>
                <br/>
                <h4><span className="infoname">Rating : 4.3 / 5.0 </span></h4>
                <p/><br/>
                <React.Fragment><button className="seereview" onClick={openModal2}>Show Time Distribution</button><p/>
                <Modal2 open={modalOpen2} close={closeModal2} header="Time Distribution" > <img src={timedist} width='570px' height='450px'></img></Modal2> </React.Fragment>

                <Link to = './reviewPage'><button className="seereview">See Reviews</button><p/></Link>
                
            </div>
            <div className ="hobbyinfo">
                <h2><span className="hobbyname">Game</span></h2><br/>
                <h4><span className="infoname">Average Time : 2 hours</span></h4>
                <br/>
                <h4><span className="infoname">Rating : 3.5 / 5.0 </span></h4>
                <p/><br/>
                <React.Fragment><button className="seereview" onClick={openModal2}>Show Time Distribution</button><p/>
                <Modal2 open={modalOpen2} close={closeModal2} header="Time Distribution" > <img src={timedist} width='570px' height='450px'></img></Modal2> </React.Fragment>
                <Link to = './reviewPage'><button className="seereview">See Reviews</button><p/></Link>
               
            </div>
            </div>
        : <div></div>
    return(
        
        <div>
            <div className="home">
                <Link to ='/' >
                    <div className="main33">HobbyNet</div>
                </Link>

            </div>

        <div className="little__container">
            
            <div className="recommend__hobby">

            <React.Fragment>
             <button onClick={openModal} className="findhobbybutton"> <h2>Find Hobby</h2> </button>
             <Modal open={modalOpen} close={closeModal} show={showHobbylist} header="Input Your Freetime" >
             <table>
                 <h3><tr><td className='요일선택'>Mon</td><td className='요일선택'>Tue</td><td className='요일선택'>Wed</td><td className='요일선택'>Thu</td><td className='요일선택'>Fri</td><td className='요일선택'>Sat</td><td className='요일선택'>Sun</td></tr>
                 <tr>
                     <td className='요일선택'><input className='daycheck' type='checkbox'/></td> <td className='요일선택'><input className='daycheck' type='checkbox'/></td> <td className='요일선택'><input className='daycheck' type='checkbox'/></td> <td className='요일선택'><input className='daycheck' type='checkbox'/></td> <td className='요일선택'><input className='daycheck' type='checkbox'/></td> <td className='요일선택'><input className='daycheck' type='checkbox'/></td> <td className='요일선택'><input className='daycheck' type='checkbox'/></td>  </tr>
                     </h3></table>
                 <p></p><br></br>
                 <hr className="line"></hr><br></br>
                 
                 <h3><span className="timetext">Time</span></h3>
                 <p></p><br></br>
                 
                 <h3><span className="startmes">Start :
                 <select className="selectbox_start">

                    <option>08:00</option>
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                    <option>23:00</option>
                 </select>
                 End :
                 <select className="selectbox_end">

                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                    <option>23:00</option>
                    <option>24:00</option>
                 </select>
                 </span> </h3><br></br>
                 <p></p>

                 </Modal>
             </React.Fragment>
             <div>
                    {renderCondition}
                </div>
             

            </div>

            


            <div className="container">
                

            <h1>Select a fixed schedule</h1>
            
            <div className="task__container">

                <div ref={taskRef1} className="task__name" id="work" onClick={selectTask} style={{backgroundColor: "#f68080"}}>Work</div>
                <div ref={taskRef2} className="task__name" id="meal" onClick={selectTask} style={{backgroundColor: "#faae7b"}}>Meal</div>
                <div ref={taskRef3} className="task__name" id="sleep" onClick={selectTask} style={{backgroundColor: "#f7f779"}}>Sleep</div>
                <div ref={taskRef4} className="task__name" id="gym" onClick={selectTask} style={{backgroundColor: "#2a9d8f"}}>Gym</div>
                <div ref={taskRef5} className="task__name" id="any" onClick={selectTask} style={{backgroundColor: "#bdb2ff"}}>Any</div>
                <div ref={taskRef6} className="task__name" id="delete" onClick={selectTask} style={{backgroundColor: "white"}}>Erase</div>
                
                <button className="deleteBtn" onClick={openPopup}>Reset Schedule</button>

                <div ref={taskRef9} className="pop-up__container">
                    <div className="pop-up">
                        <br/><h4>Are you sure you want to delete all the tasks from your schedule?</h4>
                        <div className="btn__container">
                            <div ref={taskRef10} className="btn__answer" id="btn__yes" onClick={deleteTasks}>YES</div>
                            <div ref={taskRef10} className="btn__answer" id="btn__no" onClick={closePopup}>NO</div>
                        </div>
                    </div>
                </div>

            </div>
            <br/>

            <h3>Add your fixed scheule on the table</h3>
            <div className="little__container">

            <div className="schedule__container">
                <div className="days__container">
                    <span className="corner"></span>
                    <div className="day">Mon</div>
                    <div className="day">Tue</div>
                    <div className="day">Wed</div>
                    <div className="day">Thu</div>
                    <div className="day">Fri</div>
                    <div className="day">Sat</div>
                    <div className="day">Sun</div>
                </div>
                <div className="part__day" onClick={setColors}>
                    <span className="time">8am - 9am</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div>      
                <div className="part__day" onClick={setColors}>
                    <span className="time">9am - 10am</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div>           
                <div className="part__day" onClick={setColors}>
                    <span className="time">10am - 11am</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div>  
                <div className="part__day" onClick={setColors}>
                    <span className="time">11am - 12pm</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div>  
                <div className="part__day" onClick={setColors}>
                    <span className="time">12pm - 1pm</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div>  
                <div className="part__day" onClick={setColors}>
                    <span className="time">1pm - 2pm</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div>  
                <div className="part__day" onClick={setColors}>
                    <span className="time">2pm - 3pm</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div>  
                <div className="part__day" onClick={setColors}>
                    <span className="time">3pm - 4pm</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div>                 
                <div className="part__day" onClick={setColors}>
                    <span className="time">4pm - 5pm</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div>                 
                <div className="part__day" onClick={setColors}>
                    <span className="time">5pm - 6pm</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div>                 
                <div className="part__day" onClick={setColors}>
                    <span className="time">6pm - 7pm</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div>  
                <div className="part__day" onClick={setColors}>
                    <span className="time">7pm - 8pm</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div> 
                <div className="part__day" onClick={setColors}>
                    <span className="time">8pm - 9pm</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div> 
                <div className="part__day" onClick={setColors}>
                    <span className="time">9pm - 10pm</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div> 
                <div className="part__day" onClick={setColors}>
                    <span className="time">10pm - 11pm</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div> 
                <div className="part__day" onClick={setColors}>
                    <span className="time">11pm - 12am</span>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div> 
                </div>



            </div>


            </div>
        </div>
        </div>
        
    )
}

export default Schedule;
