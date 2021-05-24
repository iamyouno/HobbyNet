import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./test.css"
import questions from "./questions.js"
import results from "./result.js"
import home from "./pngs/home.png"

function Test(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    
    const handleAnswerOptionClick = (selected) => {
        setScore(score + selected);
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    }

    return(
        <div>
            <div class = "home">
                <Link to='/'>
                    <img src={home} alt="home" width="3%" height="3%"/>
                </Link>
            </div>
            {showScore?(
                <div class='result'>
                    <div class='result-text'>
                        We recommend you to <span class='name'>{results[parseInt(score/5)].result}</span>!
                    </div>
                    <div class='result-photo'>
                        <img src={results[parseInt(score/5)].photo} alt = "photo" width="20%" height="20%"/>
                    </div>
                    <div class='explana'>
                        <span class="result_like">
                            I like it!
                            <Link to='/reviewPage'>
                                <button class='info'>See review</button>
                            </Link>
                        </span>
                        <span class="result_dislike">
                            I don't like it...
                            <Link to='/hobbytest'>
                                <button class='try'>Try again</button>
                            </Link>
                        </span>
                    </div>
                </div>
            ):(
                <>
                    <div class='question'>
                        <div class='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>

                    <div class='answers'>
                        <span class="agree">Agree</span>
                        <button class='fiv answer' onClick={() => handleAnswerOptionClick(10)}></button>
                        <button class='fou answer' onClick={() => handleAnswerOptionClick(7)}></button>
                        <button class='thr answer' onClick={() => handleAnswerOptionClick(5)}></button>
                        <button class='two answer' onClick={() => handleAnswerOptionClick(3)}></button>
                        <button class='one answer' onClick={() => handleAnswerOptionClick(0)}></button>
                        <span class="disagree">Disagree</span>
                    </div>
                    
                    <div class='left'>
                        <span>Question {currentQuestion+1}</span>/{questions.length}
                    </div>
                </>
            )}
        </div>
    )
}

export default Test;