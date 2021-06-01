import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./test.css"
import questions from "./questions.js"
import results from "./result.js"
import home from "./pngs/home.png"

function Test(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [prog, setProg] = useState(0);

    const [eori, seteroi] = useState(0);
    const [sorn, setsorn] = useState(0);
    const [torf, settorf] = useState(0);
    const [jorp, setjorp] = useState(0);

    const handleAnswerOptionClick = (selectedeori, selectedsorn, selectedtorf, selectedjorp) => {
        seteroi(eori + selectedeori);
        setsorn(sorn + selectedsorn);
        settorf(torf + selectedtorf);
        setjorp(jorp + selectedjorp);

        const nextQuestion = currentQuestion + 1;
        setProg(prog + 8.33)
        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    }

    const parse = (eori, sorn, torf, jorp) => {
        if(eori >= 0 && sorn >= 0 && torf < 0 && jorp >= 0) return 0; //ESFJ
        if(eori >= 0 && sorn < 0 && torf < 0 && jorp < 0) return 1; //ENFP
        if(eori < 0 && sorn >= 0 && torf < 0 && jorp >= 0) return 2; //ISFJ
        if(eori < 0 && sorn < 0 && torf >= 0 && jorp < 0) return 3; //INTP
        if(eori < 0 && sorn >= 0 && torf < 0 && jorp < 0) return 4; //ISFP
        if(eori < 0 && sorn >= 0 && torf >= 0 && jorp < 0) return 5; //ISTP
        if(eori >= 0 && sorn >= 0 && torf < 0 && jorp < 0) return 6; //ESFP
        if(eori >= 0 && sorn < 0 && torf < 0 && jorp >= 0) return 7; //ENFJ
        if(eori >= 0 && sorn >= 0 && torf >= 0 && jorp >= 0) return 8; //ESTJ
        if(eori >= 0 && sorn >= 0 && torf >= 0 && jorp < 0) return 9; //ESTP
        if(eori < 0 && sorn < 0 && torf < 0 && jorp < 0) return 10; //INFP
        if(eori < 0 && sorn < 0 && torf >= 0 && jorp >= 0) return 11; //INTJ
        if(eori >= 0 && sorn < 0 && torf >= 0 && jorp < 0) return 12; //ENTP
        if(eori >= 0 && sorn < 0 && torf >= 0 && jorp >= 0) return 13; //ENTJ
        if(eori < 0 && sorn < 0 && torf < 0 && jorp >= 0) return 14; //INFJ
        if(eori < 0 && sorn >= 0 && torf >= 0 && jorp >= 0) return 15; //ISTJ
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
                        We recommend you <span class='name'>{results[parse(eori, sorn, torf, jorp)].result}</span>!
                    </div>
                    <div class='result-photo'>
                        <img src={results[parse(eori, sorn, torf, jorp)].photo} alt = "photo" width="20%" height="20%"/>
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
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button class = 'answer' onClick={() => handleAnswerOptionClick(answerOption.eori, answerOption.sorn, answerOption.torf, answerOption.jorp)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                    
                    <div class='left'>
                        <div class="progress">
                            <div class="filter" style={{width: prog + '%'}}></div>
                        </div>
                        <span>{currentQuestion}</span>&nbsp;/&nbsp;{questions.length}
                    </div>
                </>
            )}
        </div>
    )
}

export default Test;