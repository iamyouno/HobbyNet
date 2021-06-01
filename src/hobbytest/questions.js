const questions = [
    {
        questionText: "As soon as you sit down to work, your friends start making noise in the chat room",
        answerOptions: [
            {answerText: "Check your cell phone right away", eori: 1, sorn: 0, torf: 1, jorp: -1},
            {answerText: "Start what you're trying to do as planned", eori: -1, sorn: 0, torf: -1, jorp: 1}
        ]
    },
    {
        questionText: "Assume that you are an office worker. Choose between those two tasks!",
        answerOptions: [
            {answerText: "Organize files by creating folders for different tasks", eori: 0, sorn: 1, torf: 0, jorp: 0},
            {answerText: "Come up with new marketing ideas", eori: 0, sorn: -1, torf: 0, jorp: 0}
        ]
    },
    {
        questionText: "What do you think of self-improvement?",
        answerOptions: [
            {answerText: "It's always fun to be who I am different from yesterday", eori: 0, sorn: 0, torf: 1, jorp: 1},
            {answerText: "It seems boring. I just wanna play!", eori: 0, sorn: 0, torf: -1, jorp: -1}
        ]
    },
    {
        questionText: "There was a secret room murder at the accommodation you stopped by during the trip",
        answerOptions: [
            {answerText: "I'm Sherlock in this area. I'm already trying to find out who is killer", eori: 0, sorn: -1, torf: 1, jorp: 0},
            {answerText: "I stay calm and try to restore mental stability", eori: 0, sorn: 1, torf: -1, jorp: 0},
            {answerText: "I'm trying to find a weapon to protect myself first", eori: 0, sorn: -1, torf: 1, jorp: 0}
        ]
    },
    {
        questionText: "You've been isolated on Mars for two years, and you've been eating only potatoes",
        answerOptions: [
            {answerText: "I'm desperately developing various potato recipes", eori: 0, sorn: 1, torf: 1, jorp: 0},
            {answerText: "I'm worrying about what to do tomorrow", eori: 0, sorn: -1, torf: -1, jorp: 0}
        ]
    },
    {
        questionText: "You got to participate in a team project. What role do you want to play?",
        answerOptions: [
            {answerText: "I'm a good speaker, so I want to be in charge of the presentation :)", eori: 1, sorn: 0, torf: 0, jorp: 0},
            {answerText: "I think preparing presentation material is the easiest one. I want to do it!", eori: -1, sorn: -1, torf: 0, jorp: 0},
            {answerText: "The PPT design should be pretty, so I'll make the PPT", eori: -1, sorn: 1, torf: 0, jorp: 0}
        ]
    },
    {
        questionText: "What do you do when your room is messy?",
        answerOptions: [
            {answerText: "Clean it up as soon as possible", eori: 0, sorn: 0, torf: 0, jorp: 1},
            {answerText: "Put off cleaning until tomorrow", eori: 0, sorn: 0, torf: 0, jorp: -1}
        ]
    },
    {
        questionText: "What is your favorite activity on vacation?",
        answerOptions: [
            {answerText: "Vacation is literally relaxing. I prefer a staycation :)", eori: -1, sorn: 0, torf: 0, jorp: 0},
            {answerText: "I can't live without stimulation. I prefer dynamic activities!", eori: 1, sorn: 1, torf: 0, jorp: 0},
            {answerText: "I want to go around and eat, so I prefer to go sightseeing in the city", eori: 1, sorn: -1, torf: 0, jorp: 0}
        ]
    },
    {
        questionText: "You got your first salary. How would you spend that money?",
        answerOptions: [
            {answerText: "I will save my money for future!", eori: 0, sorn: 0, torf: 1, jorp: 1},
            {answerText: "I will give even a small gift to myself!", eori: 0, sorn: 0, torf: -1, jorp: -1},
        ]
    },
    {
        questionText: "How do you usually relieve stress?",
        answerOptions: [
            {answerText: "I usually sleep", eori: 0, sorn: 1, torf: 0, jorp: 0},
            {answerText: "I enjoy physical activities such as taking a walk or exercise!", eori: 0, sorn: -1, torf: 0, jorp: 0},
            {answerText: "I enjoy contents such as movies and games!", eori: 0, sorn: -1, torf: 0, jorp: 0}
        ]
    },
    {
        questionText: "What do you usually do while taking a shower?",
        answerOptions: [
            {answerText: "Sing or listen to a song", eori: 0, sorn: 1, torf: 0, jorp: 0},
            {answerText: "Lost in thoughts and delusions", eori: 0, sorn: -1, torf: 0, jorp: 0}
        ]
    },
    {
        questionText: "The appointment with your friend was suddenly canceled. What's your reaction?",
        answerOptions: [
            {answerText: "Actually, it was annoying, so I'm OK", eori: -1, sorn: 0, torf: 0, jorp: 0},
            {answerText: "I can't finish my day it like this. Call another friend!", eori: 1, sorn: 0, torf: 0, jorp: 0},
            {answerText: "It's a waste of preparing to go out, so I'll do something else!", eori: 0, sorn: 0, torf: 0, jorp: 0}
        ]
    },
]

export default questions;