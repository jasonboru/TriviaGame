//define variables 
var gameActive = false;
var correctAnswer = false;
var timeUp = false;
var rightAnsw = 0;
var wrongAnsw = 0;
var gameOver = false;
var gameQues = [];

$(document).ready(function() {

    $("#start-button").click(function() { //clicking the Start button should fade away the start section and fade in the questions section.
        qlist.gameOn(); // run gameOn function 
    })

    getQuestions();
    // if user clicks an answer run gradeAnswer function
    $(".answer").click(function() {       
            qlist.gradeAnswer($(this).data("answer")); //runs gradeAnswer function against the data value of the button the user clicked.
            timerClock.stop();       
    });

    //progress to the next question when user clicks next-question button
    $("#next-question").click(qlist.gameOn);

    //clicking the reset button runs the reset function
    $("#reset").click(reset);
});

function reset() {  //reset function resets the variable to their defaults.
    gameActive = false,
    correctAnswer = false,
    gameOver = false,
    qlist.qnum = 10,
    rightAnsw = 0,
    wrongAnsw = 0,
    gameQues = [];
    timerClock.reset();
    getQuestions(); //then runs getQuestions function to get a new set of 10 questions
    qlist.gameOn(); //then runs gameOn function starting a new round.
}

//questions stored as an array of objects [question, answer array, index number of correct answer, mp3, quote text, image of answer]
var questions = [{
        ques: "This writer is acreditied for writing the first Christian epic poem, \"Paradise Lost\".",
        answ: ["Milton", "Geoffrey Chaucer", "Dante Alighieri", "Thomas Middleton"],
        answIndex: 0,
        sound: "assets/sounds/milton.mp3",
        quote: "<p>\"Their rising all at once was as the sound of a thunder heard remote.\"</p> <h3 class='text-center'>-Milton</h3>",
        img: "assets/images/milton.jpg",
        imgWrong: "assets/images/milton_x.jpg"
    },

    {
        ques: "This renowned physicist came to the United States seeking political assylum.",
        answ: ["Edwin Hubble", "Albert Einstein", "Igor Kurchatov", "Werner Heisenberg"],
        answIndex: 1,
        sound: "assets/sounds/einstein.mp3",
        quote: "<p>\"The unleashed power of the atom has changed everything save our modes of thinking, and we thus drift toward unparalleled catastrophes.\"</p> <h3 class='text-center'>-Albert Einstein</h3>",
        img: "assets/images/einstein.jpg",
        imgWrong: "assets/images/einstein_x.jpg"
    },

    {
        ques: "He was known as \“the Great Dissenter\” for his principled stands during three decades on the U.S. Supreme Court.",
        answ: ["Antonin Scalia", "John Marshall", "Oliver Wendell Holmes", "William Brennan"],
        answIndex: 2,
        sound: "assets/sounds/holmes.mp3",
        quote: "<p>\"I find the great thing in this world is not so much where we stand, as in what direction we are moving.\"</p> <h3 class='text-center'>-Oliver Wendell Holmes</h3>",
        img: "assets/images/holmes.jpg",
        imgWrong: "assets/images/holmes_x.jpg"
    },

    {
        ques: "He was an American mythologist, writer and lecturer, best known for his work in comparative mythology and comparative religion",
        answ: ["Thomas Bulfinch", "Carl Jung", "Robert Graves", "Joseph Campbell"],
        answIndex: 3,
        sound: "assets/sounds/campbell.mp3",
        quote: "<p>\"Computer are like Old Testament gods: lots of rules and no mercy.\"</p> <h3 class='text-center'>-Joseph Campbell</h3>",
        img: "assets/images/campbell.jpg",
        imgWrong: "assets/images/campbell_x.jpg"
    },

    {
        ques: "This ancient Greek philosopher was tutor to Alexander the Great",
        answ: ["Aristotle", "Plato", "Socrates", "Pythagoras"],
        answIndex: 0,
        sound: "assets/sounds/aristotle.mp3",
        quote: "<p>\"Education is the best provision for old age.\"</p> <h3 class='text-center'>-Aristotle</h3>",
        img: "assets/images/aristotle.jpg",
        imgWrong: "assets/images/aristotle_x.jpg"
    },

    {
        ques: "In 1939 he designed and flew the first viable American helicopter, which pioneered the rotor configuration used by most helicopters today",
        answ: ["Howard Hughes", "Igor Sikorsky", "Enrico Forlanini", "Wilbur Wright"],
        answIndex: 1,
        sound: "assets/sounds/sikorsky.mp3",
        quote: "<p>\"Aeronautics was neither an industry nor a science. It was a miracle.\"</p> <h3 class='text-center'>-Igor Sikorsky</h3>",
        img: "assets/images/sikorsky.jpg",
        imgWrong: "assets/images/sikorsky_x.jpg"
    },

    {
        ques: "After his invention of Dynamite he made a fortune, but feared being remembered as war profiteer.",
        answ: ["Hiram Maxim", "Frederick Abel", "Alfred Nobel", "Joseph Wilbrand"],
        answIndex: 2,
        sound: "assets/sounds/nobel.mp3",
        quote: "<p>\"The day when two army corps can annihilate each other in one second, all civilized nations, it is to be hoped, will recoil from war and discharge their troops.\"</p> <h3 class='text-center'>-Alfred Nobel</h3>",
        img: "assets/images/nobel.jpg",
        imgWrong: "assets/images/nobel_x.jpg"
    },

    {
        ques: "Literaly having a hand in writing the First Admendment this President of the United States asserted that the liberty of the nation depends on the freedom of the press without limitation.",
        answ: ["James Madison", "John Adams", "James Monroe", "Thomas Jefferson"],
        answIndex: 3,
        sound: "assets/sounds/jefferson.mp3",
        quote: "<p>\"The press is the best instrument for enlightening the mind of man, and improving him as a rational, moral and social being.\"</p> <h3 class='text-center'>-Thomas Jefferson</h3>",
        img: "assets/images/jefferson.jpg",
        imgWrong: "assets/images/jefferson_x.jpg"
    },

    {
        ques: "Ancient Roman poet of the Augustan period. He wrote three of the most famous poems in Latin literature, the Eclogues, the Georgics, and the epic Aeneid.",
        answ: ["Virgil", "Juvenal", "Ovid", "Cicero"],
        answIndex: 0,
        sound: "assets/sounds/virgil.mp3",
        quote: "<p>\"How happy are those whose walls already rise!\"</p> <h3 class='text-center'>-Virgil</h3>",
        img: "assets/images/virgil.jpg",
        imgWrong: "assets/images/virgil_x.jpg"
    },

    {
        ques: "During World War II, especially during the Blitz, he achieved great celebrity status as a result of his war reports. His catchphrase was \"good night, and good luck.\"",
        answ: ["Ernie Pyle", "Edward R. Murrow", "Cecil Brown", "Bill Mauldin"],
        answIndex: 1,
        sound: "assets/sounds/murrow.mp3",
        quote: "<p>\"The speed of communication is wondrous to behold. It is also true that speed can multiply the distribution of information that we know to be untrue.\"</p> <h3 class='text-center'>-Edward R. Murrow</h3>",
        img: "assets/images/murrow.jpg",
        imgWrong: "assets/images/murrow_x.jpg"
    },

    {
        ques: "This English mathematician, astronomer, and physicist is widely recognised as one of the most influential scientists of all time and a key figure in the scientific revolution.",
        answ: ["Charles Babbage", "John Locke", "Issac Newton", "Edmond Halley"],
        answIndex: 2,
        sound: "assets/sounds/newton.mp3",
        quote: "<p>\"Every particle of matter is attracted by or gravitates to every other particle of matter with a force inversely proportional to the squares of their distances.\"</p> <h3 class='text-center'>-Issac Newton</h3>",
        img: "assets/images/newton.jpg",
        imgWrong: "assets/images/newton_x.jpg"
    },

    {
        ques: "His influence on the Latin language was so immense that the subsequent history of prose in not only Latin but European languages up to the 19th century was said to be either a reaction against or a return to his style.",
        answ: ["Virgil", "Juvenal", "Ovid", "Cicero"],
        answIndex: 3,
        sound: "assets/sounds/cicero.mp3",
        quote: "<p>\"In nothing do men more nearly approach the gods than in giving health to men.\"</p> <h3 class='text-center'>-Cicero</h3>",
        img: "assets/images/cicero.jpg",
        imgWrong: "assets/images/cicero_x.jpg"
    },

    {
        ques: "For proving that the Sun, not the Earth, was the center of our solar system this astronomer was sentenced to house arrest for the remainder of his life.",
        answ: ["Galileo", "Johannes Engel", "Nicolaus Copernicus", "Johannes Kepler"],
        answIndex: 0,
        sound: "assets/sounds/galileo.mp3",
        quote: "<p>\"Measure what is measurable, and make measurable what is not so.\"</p> <h3 class='text-center'>-Galileo</h3>",
        img: "assets/images/galileo.jpg",
        imgWrong: "assets/images/galileo_x.jpg"
    },

    {
        ques: "This American industrialist was the largest sponsor of the development of the assembly line technique of mass production.",
        answ: ["John D. Rockefeller", "Henry Ford", "Nikola Tesla", "Andrew Carnegie"],
        answIndex: 1,
        sound: "assets/sounds/ford.mp3",
        quote: "<p>\"Nothing is particularly hard if you divide it into small jobs.\"</p> <h3 class='text-center'>-Henry Ford</h3>",
        img: "assets/images/ford.jpg",
        imgWrong: "assets/images/ford_x.jpg"
    },

    {
        ques: "This Author was vice president of Mensa International, albeit reluctantly; he described some members of that organization as \"brain-proud and aggressive about their IQs\". He took more joy in being president of the American Humanist Association.",
        answ: ["Arthur C. Clarke", "Robert A. Heinlein", "Isaac Asimov", "L. Ron Hubbard"],
        answIndex: 2,
        sound: "assets/sounds/asimov.mp3",
        quote: "<p>\"1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.</p><p>2. A robot must obey any orders given to it by human beings, except where such orders would conflict with the First Law.</p><p>3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.\"</p> <h3 class='text-center'>-Isaac Asimov</h3>",
        img: "assets/images/asimov.jpg",
        imgWrong: "assets/images/asimov_x.jpg"
    },

    {
        ques: "This American poet and Georgist from New York City, is best known for \"The New Colossus\", a sonnet written in 1883.",
        answ: ["Emily Dickinson", "Amy Lowell", "Elizabeth Barrett Browning", "Emma Lazarus"],
        answIndex: 3,
        sound: "assets/sounds/lazarus.mp3",
        quote: "<p>\"Give me your tired, your poor, Your huddled masses yearning to breathe free, The wretched refuse of your teeming shore. Send these, the homeless, tempest-tost to me, I lift my lamp beside the golden door\"</p> <h3 class='text-center'>-Emma Lazarus</h3>",
        img: "assets/images/lazarus.jpg",
        imgWrong: "assets/images/lazarus_x.jpg"
    },

    {
        ques: "Author of The Art of War, a widely influential work of military strategy that has affected both Western and Eastern philosophy.",
        answ: ["Sun Tzu", "Confucius", "Mao Tse-tung", "Loa Tzu"],
        answIndex: 0,
        sound: "assets/sounds/suntzu.mp3",
        quote: "<p>\"Be extremely subtle, even to the point of formlessness. Be extremely mysterious, even to the point of soundlessness. Thereby you can be the director of the opponent's fate.\"</p> <h3 class='text-center'>-Sun Tzu</h3>",
        img: "assets/images/suntzu.jpg",
        imgWrong: "assets/images/suntzu_x.jpg"
    },

    {
        ques: "His name has been leant to a negative term used to characterize unscrupulous politicians of the sort described most famously in his work \"The Prince\".",
        answ: ["Karl Marx", "Niccolo Machiavelli", "Tarek Fatah", "John Locke"],
        answIndex: 1,
        sound: "assets/sounds/machiavelli.mp3",
        quote: "<p>\"Whoever desires to found a state and give it laws, must start with assuming that all men are bad and ever ready to display their vicious nature, whenever they may find occasion for it.\"</p> <h3 class='text-center'>-Niccolo Machiavelli</h3>",
        img: "assets/images/machiavelli.jpg",
        imgWrong: "assets/images/machiavelli_x.jpg"
    },

    {
        ques: "After becoming a successful writer, this great American Satirist sunk his money into a number of bad investments and eventually went bankrupt.",
        answ: ["Herman Melville", "John Steinbeck", "Mark Twian", "William Faulkner"],
        answIndex: 2,
        sound: "assets/sounds/twain.mp3",
        quote: "<p>\"If you pick up a starving dog and make him prosperous, he will not bite you. This is the principal difference between a dog and a man.\"</p> <h3 class='text-center'>-Mark Twian</h3>",
        img: "assets/images/twain.jpg",
        imgWrong: "assets/images/twain_x.jpg"
    },

    {
        ques: "An Athenian politician and general, he was one of a new breed of non-aristocratic politicians who rose to prominence in the early years of democracy.",
        answ: ["Alcibiades", "Leonidas", "Alexander", "Themistocles"],
        answIndex: 3,
        sound: "assets/sounds/themistocles.mp3",
        quote: "<p>\"He who commands the sea has command of everything.\"</p> <h3 class='text-center'>-Themistocles</h3>",
        img: "assets/images/themistocles.jpg",
        imgWrong: "assets/images/themistocles_x.jpg"
    },

    {
        ques: "Called the \"father of the atomic bomb\" for his role in the Manhattan Project, the World War II project that developed the first nuclear weapons",
        answ: ["Robert Oppenheimer", "Albert Einstein", "Leo Szilard", "Carl David Anderson"],
        answIndex: 0,
        sound: "assets/sounds/oppenheimer.mp3",
        quote: "<p>\"I am become Death, the destroyer of worlds.\"</p> <h3 class='text-center'>-Robert Oppenheimer</h3>",
        img: "assets/images/oppenheimer.jpg",
        imgWrong: "assets/images/oppenheimer_x.jpg"
    },

    {
        ques: "He was the writer of \"Le Morte d'Arthur\" a 15th Century reworking of traditional tales about the legendary King Arthur, Guinevere, Lancelot, Merlin and the Knights of the Round Table.",
        answ: ["Chretien de Troyes", "Thomas Malory", "Francis Bacon‎", "William Shakespeare‎"],
        answIndex: 1,
        sound: "assets/sounds/malory.mp3",
        quote: "<p>\"Who pulleth out this sword of this stone and anvil, is rightwise king born of all England.\"</p> <h3 class='text-center'>-Thomas Malory</h3>",
        img: "assets/images/malory.jpg",
        imgWrong: "assets/images/malory_x.jpg"
    },

    {
        ques: "An American marine biologist and conservationist her book \"Silent Spring\" and other writings are credited with advancing the global environmental movement.",
        answ: ["Elizabeth Blackburn", "Helen Blau", "Rachel Carson", "Kiki Sanford"],
        answIndex: 2,
        sound: "assets/sounds/carson.mp3",
        quote: "<p>\"Only within the moment of time represented by the present century as one species, man, acquired significant power to alter the nature of his world.\"</p> <h3 class='text-center'>-Rachel Carson</h3>",
        img: "assets/images/carson.jpg",
        imgWrong: "assets/images/carson_x.jpg"
    },

    {
        ques: "Like his best known novel \"The Scarlet Letter\" his other works of fiction are considered part of the Romantic movement and, more specifically, Dark romanticism.",
        answ: ["Herman Melville", "Washington Irving", "Edgar Allan Poe", "Nathaniel Hawthorne"],
        answIndex: 3,
        sound: "assets/sounds/hawthorne.mp3",
        quote: "<p>\"Is it a fact - or have I dreamt it - that, by means of electricity, the world of matter has become a great nerve, vibrating thousands of miles in a breathless point of time?\"</p> <h3 class='text-center'>-Nathaniel Hawthorne</h3>",
        img: "assets/images/hawthorne.jpg",
        imgWrong: "assets/images/hawthorne_x.jpg"
    },

    {
        ques: "He was the director of Strategy and Marketing at Apple Computer in 1982 when he left to found Electronic Arts, the successful video game publisher.",
        answ: ["Trip Hawkins", "Steve Jobs", "Steve Wozniak", "Ronald Wayne"],
        answIndex: 0,
        sound: "assets/sounds/hawkins.mp3",
        quote: "<p>\"There's a basic principle about consumer electronics: it gets more powerful all the time and it gets cheaper all the time.\"</p> <h3 class='text-center'>-Trip Hawkins</h3>",
        img: "assets/images/hawkins.jpg",
        imgWrong: "assets/images/hawkins_x.jpg"
    },

    {
        ques: "He is known for coining the expression \"the medium is the message\" and the term global village, and for predicting the World Wide Web almost thirty years before it was invented.",
        answ: ["Lev Manovich", "Marshall McLuhan", "Quentin Fiore", "Gary Miller"],
        answIndex: 1,
        sound: "assets/sounds/mcluhan.mp3",
        quote: "<p>\"The new electronic interdependence recreates the world in the image of a global village.\"</p> <h3 class='text-center'>-Marshall McLuhan</h3>",
        img: "assets/images/mcluhan.jpg",
        imgWrong: "assets/images/mcluhan_x.jpg"
    },

    {
        ques: "A pillar of both the Irish and British literary establishments, he helped to found the Abbey Theatre, and in his later years served as an Irish Senator for two terms.",
        answ: ["James Joyce", "John Keats", "W. B. Yeats", "Oscar Wilde"],
        answIndex: 2,
        sound: "assets/sounds/yeats.mp3",
        quote: "<p>\"Do not wait to strike 'til the iron is hot; but make it hot by striking.\"</p> <h3 class='text-center'>-W. B. Yeats</h3>",
        img: "assets/images/yeats.jpg",
        imgWrong: "assets/images/yeats_x.jpg"
    },

    {
        ques: "A senior officer of the United States Army who commanded the U.S. Seventh Army in the Mediterranean and European theaters of World War II, but is best known for his leadership of the U.S. Third Army in France and Germany.",
        answ: ["George Marshall", "Dwight D. Eisenhower", "Douglas MacArthur", "George S. Patton"],
        answIndex: 3,
        sound: "assets/sounds/patton.mp3",
        quote: "<p>\"Wars may be fought with weapons, but they are won by men. It is the spirit of the men who follow and of the man who leads that gains the victory.\"</p> <h3 class='text-center'>-George S. Patton</h3>",
        img: "assets/images/patton.jpg",
        imgWrong: "assets/images/patton_x.jpg"
    },

    {
        ques: "An American mathematician notable for his contributions to geometric group theory and to an area of mathematics known as billiards.",
        answ: ["Richard Schwartz", "Joseph B. Keller", "Serge Tabachnikov", "Jacques Hadamard"],
        answIndex: 0,
        sound: "assets/sounds/schwartz.mp3",
        quote: "<p>\"The impact of nanotechnology is expected to exceed the impact the electronics revolution has had on our lives.\"</p> <h3 class='text-center'>-Richard Schwartz</h3>",
        img: "assets/images/schwartz.jpg",
        imgWrong: "assets/images/schwartz_x.jpg"
    },

    {
        ques: "A controversial figure in Ancient Athens this philosopher was charged with corrupting the youth of the City-State and executed.",
        answ: ["Aristotle", "Plato", "Socrates", "Pythagoras"],
        answIndex: 2,
        sound: "assets/sounds/socrates.mp3",
        quote: "<p>\"There is only one good, knowledge, and one evil, ignorance.\"</p> <h3 class='text-center'>-Socrates</h3>",
        img: "assets/images/socrates.jpg",
        imgWrong: "assets/images/socrates_x.jpg"
    }
];



function getQuestions() { //create a copy of the questions array that can then be cut down to 10
    gameQues = questions.slice(0); //copy the questions into a new array
    for (var i = questions.length - 1; i > 0; i--) { //this algorithm (Fisher-Yates shuffle) should jumble up the order of the copied array

        var getIndex = Math.floor(Math.random() * (i + 1));
        var displayQues = gameQues[getIndex];

        gameQues[getIndex] = gameQues[i];

        gameQues[i] = displayQues;
    }

}

var timerClock = {

    clockInt : 105,

    reset: function() {
        timerClock.clockInt = 105;
        //$("#timer").text(timerClock.timeConverter(timerClock.time));
        $("#timer").text("01:45"); //reset display to 1:45 keeps it from flashing NaN
    },

    begin: function() {
        cycle = setInterval(timerClock.run, 1000);
    },

    stop: function() {
        clearInterval(cycle);
    },

    run: function() {
        if (timerClock.clockInt === 0) {
            timeUp = true;
            timerClock.stop();
            qlist.gameOver();
        } else {
            timerClock.clockInt--;
            var runningTime = timerClock.timeConverter(timerClock.clockInt);
            $("#timer").text(runningTime);
        }
    },

    timeConverter: function(t) {
        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        // allows game time to be altered in the future to more than one minute
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        if (minutes === 0) {
          minutes = "00";
        }

        else if (minutes < 10) {
          minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
}

getQuestions(); // call the getQuestions function

var qlist = { //set up variables and functions for new question list as an object

    qnum: 10, //number of questions to use in course of a game round

    gameOn: function() { //gameOn function either brings on a new question or if none are left in the round moves to the score

        if (qlist.qnum === 0) { //if there are no questions left 

            qlist.gameOver(); // call gameOver function

        } else { //else there are questions left so display the question-well and hide the others
            $("#start-well").css("display", "none"); // hide start screen
            $("#answer-well").css("display", "none"); // hide answer screen
            $("#next-question").css("display", "none"); // hide next-question button
            $("#score-well").css("display", "none"); // hide the score screen
            $("#question-well").css("display", "inherit"); // show the question screen

            gameActive = true; 

            $("#timer").css("display", "inherit"); //show the timer during the question
            timerClock.begin();
            qlist.showQuestion(); //call the showQuestion function to populate a new question to display
        }
    },

    showQuestion: function() { //populate a new question to the DOM

        qlist.qnum--; //with each new question count down from the 10, when it hits 0 the gameOn function will call gameOver

        $("#question").text(gameQues[qlist.qnum].ques); //picks a question from the object copy
        $("#0").text(gameQues[qlist.qnum].answ[0]); //for whatever question was picked shows the answer option index 0
        $("#1").text(gameQues[qlist.qnum].answ[1]); //for whatever question was picked shows the answer option index 1
        $("#2").text(gameQues[qlist.qnum].answ[2]); //for whatever question was picked shows the answer option index 2
        $("#3").text(gameQues[qlist.qnum].answ[3]); //for whatever question was picked shows the answer option index 3
    },

    gradeAnswer: function(data) { //gradeAnswer function will check to see if the user choose the right answer

        if (parseInt(data) === gameQues[qlist.qnum].answIndex) { //if the data-answer attributed to the button the user clicks is equal to the answIndex

            correctAnswer = true;
            rightAnsw++; //add to the correct answers score
            $("#answer-img").html("<img class='img-circle img-responsive center-block' src=" + gameQues[qlist.qnum].img + ">"); //shows a portrait image of the answer subject

            $("#answer-quote").html("<h2 class='text-center'>" + gameQues[qlist.qnum].quote + "</h2>"); //shows text of the answer subjects famous quote
            var audioQuote = document.createElement("audio"); //adds an audio element
            audioQuote.setAttribute("src", gameQues[qlist.qnum].sound); //picks the file path to the mp3 of the current answer subjects quote
            audioQuote.play(); //plays the audio clip
            if ()

        } else {
            correctAnswer = false;
            wrongAnsw++; //add to the incorrect answers score
            $("#answer-img").html("<img class='img-circle img-responsive center-block' src=" + gameQues[qlist.qnum].imgWrong + ">");

            $("#answer-quote").html("<h2 class='text-center'>Sorry, your answer was incorrect!</h2>");
            var audioWrong = document.createElement("audio"); //adds an audio element
            audioWrong.setAttribute("src", "assets/sounds/Loss2.mp3"); //grabs the loss mp3 for a wrong guess
            audioWrong.play(); //plays the audio clip
        }
        $("#question-well").css("display", "none"); // hides the question screen
        $("#answer-well").css("display", "inherit"); // shows the answer screen
        setTimeout(function() { $("#next-question").css("display", "inherit"); }, 2000); //shows the next-question button after 2 seconds
    },

    gameOver: function() { //gameOver function shows score screen and reset button

        $("#question-well").css("display", "none"); // hides question screen
        $("#answer-well").css("display", "none"); // hides answer screen
        $("#next-question").css("display", "none"); // hides next-question button
        $("#score-well").css("display", "inherit"); // shows score screen

        $("#score-correct").text(rightAnsw); //print the # of correct answers to the DOM
        $("#score-incorrect").text(wrongAnsw); //print the # of incorrect answers to the DOM
        var unanswered;
        if ((rightAnsw + wrongAnsw) === 10) { 
            unanswered = "None!";
        } else {
            unanswered = 10 - rightAnsw + wrongAnsw; // calculate the # of unanswered questions
        }
        $("#score-unanswered").text(unanswered);  //print the # of unanswered questions to the DOM
        $("#score-grade").text(Math.round((rightAnsw / 10) * 100) + "%"); //calculate & print the precentage grade to the DOM       
        setTimeout(function() { $("#reset").css("display", "inherit"); }, 3000); //show reset button after 3 seconds
    }

}





//On document ready the start section should display and the other sections should be hidden.

//The game start Section will have a brief description and a start button.

//clicking the Start button should fade away the start section and fade in the questions section. It should run a function that grabs 10 random questions and stores them in a new array. 
//And when in the question section a timer should start counting down until an answer is chosen.

//when an answer is clicked the question section should fade out and the answer section should fade in. The Timer should pause.

//If the answer is correct give the user a message 'correct' show image, quote and play audio.
//else if the answer is wrong give message 'incorrect'

//Set a time delay and then fade away answer section and fade in question section again for second question. repeat process for 10 questions.
