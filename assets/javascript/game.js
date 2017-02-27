
$(document).ready(function() {

var questions = [
    {
        ques: "This writer is acreditied for writing the first Christian epic poem, \"Paradise Lost\".",
        answ: "Milton",
        sound: "assets/sounds/milton.mp3",
        quote: "<p>\"Their rising all at once was as the sound of a thunder heard remote.\"</p> <h2>-Milton</h2>",
        img: "assets/images/milton.jpg"
    },

    {
        ques: "This renowned physist came to the United States seeking political assylu.",
        answ: "Albert Einstein",
        sound: "../assets/sounds/einstein.mp3",
        quote: "<p>\"The unleashed power of the atom has changed everything save our modes of thinking, and we thus drift toward unparalleled catastrophes.\"</p> <h2>-Albert Einstein</h2>",
        img: "assets/images/einstein.jpg"
    },

    {
        ques: "He was known as \“the Great Dissenter\” for his principled stands during three decades on the U.S. Supreme Court.",
        answ: "Oliver Wendell Holmes",
        sound: "../assets/sounds/holmes.mp3",
        quote: "<p>\"I find the great thing in this world is not so much where we stand, as in what direction we are moving.\"</p> <h2>-Oliver Wendell Holmes</h2>",
        img: "assets/images/holmes.jpg"
    },

    {
        ques: "He was an American mythologist, writer and lecturer, best known for his work in comparative mythology and comparative religion",
        answ: "Joseph Campbell",
        sound: "../assets/sounds/campbell.mp3",
        quote: "<p>\"Computer are like Old Testament gods: lots of rules and no mercy.\"</p> <h2>-Joseph Campbell</h2>",
        img: "assets/images/campbell.jpg"
    },

        {
        ques: "This ancient Greek philosopher was tutor to Alexander the Great",
        answ: "Aristotle",
        sound: "../assets/sounds/aristotle.mp3",
        quote: "<p>\"Education is the best provision for old age.\"</p> <h2>-Aristotle</h2>",
        img: "assets/images/aristotle.jpg"
    },

    {
        ques: "In 1939 he designed and flew the first viable American helicopter, which pioneered the rotor configuration used by most helicopters today",
        answ: "Igor Sikorsky",
        sound: "../assets/sounds/sikorsky.mp3",
        quote: "<p>\"Aeronautics was neither an industry nor a science. It was a miracle.\"</p> <h2>-Igor Sikorsky</h2>",
        img: "assets/images/sikorsky.jpg"
    },

    {
        ques: "After his invention of Dynamite he made a fortune, but feared being remembered as war profiteer.",
        answ: "Alfred Nobel",
        sound: "../assets/sounds/nobel.mp3",
        quote: "<p>\"The day when two army corps can annihilate each other in one second, all civilized nations, it is to be hoped, will recoil from war and discharge their troops.\"</p> <h2>-Alfred Nobel</h2>",
        img: "assets/images/nobel.jpg"
    },

    {
        ques: "Literaly having a hand in writing the First Admendment this President of the United States asserted that the liberty of the nation depends on the freedom of the press without limitation.",
        answ: "Thomas Jefferson",
        sound: "../assets/sounds/jefferson.mp3",
        quote: "<p>\"The press is the best instrument for enlightening the mind of man, and improving him as a rational, moral and social being.\"</p> <h2>-Thomas Jefferson</h2>",
        img: "assets/images/jefferson.jpg"
    },

    {
        ques: "Ancient Roman poet of the Augustan period. He wrote three of the most famous poems in Latin literature, the Eclogues, the Georgics, and the epic Aeneid.",
        answ: "Virgil",
        sound: "../assets/sounds/virgil.mp3",
        quote: "<p>\"How happy are those whose walls already rise!\"</p> <h2>-Virgil</h2>",
        img: "assets/images/virgil.jpg"
    },

    {
        ques: "During World War II, especially during the Blitz, he achieved great celebrity status as a result of his war reports. His catchphrase was \"good night, and good luck.\"",
        answ: "Edward R. Murrow",
        sound: "../assets/sounds/murrow.mp3",
        quote: "<p>\"The speed of communication is wondrous to behold. It is also true that speed can multiply the distribution of information that we know to be untrue.\"</p> <h2>-Edward R. Murrow</h2>",
        img: "assets/images/murrow.jpg"
    },

    {
        ques: "This English mathematician, astronomer, and physicist is widely recognised as one of the most influential scientists of all time and a key figure in the scientific revolution.",
        answ: "Issac Newton",
        sound: "../assets/sounds/newton.mp3",
        quote: "<p>\"Every particle of matter is attracted by or gravitates to every other particle of matter with a force inversely proportional to the squares of their distances.\"</p> <h2>-Issac Newton</h2>",
        img: "assets/images/newton.jpg"
    },

    {
        ques: "His influence on the Latin language was so immense that the subsequent history of prose in not only Latin but European languages up to the 19th century was said to be either a reaction against or a return to his style.",
        answ: "Cicero",
        sound: "../assets/sounds/cicero.mp3",
        quote: "<p>\"In nothing do men more nearly approach the gods than in giving health to men.\"</p> <h2>-Cicero</h2>",
        img: "assets/images/cicero.jpg"
    },

    {
        ques: "For proving that the Sun, not the Earth, was the center of our solar system this astronomer was sentence to house arrest for the remainder of his life.",
        answ: "Galileo",
        sound: "../assets/sounds/galileo.mp3",
        quote: "<p>\"Measure what is measurable, and make measurable what is not so.\"</p> <h2>-Galileo</h2>",
        img: "assets/images/galileo.jpg"
    },

    {
        ques: "This American industrialist was the largest sponsor of the development of the assembly line technique of mass production.",
        answ: "Henry Ford",
        sound: "../assets/sounds/ford.mp3",
        quote: "<p>\"Nothing is particularly hard if you divide it into small jobs.\"</p> <h2>-Henry Ford</h2>",
        img: "assets/images/ford.jpg"
    },

    {
        ques: "This Author was vice president of Mensa International, albeit reluctantly; he described some members of that organization as \"brain-proud and aggressive about their IQs\". He took more joy in being president of the American Humanist Association.",
        answ: "Isaac Asimov",
        sound: "../assets/sounds/asimov.mp3",
        quote: "<p>\"1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.</p><p>2. A robot must obey any orders given to it by human beings, except where such orders would conflict with the First Law.</p><p>3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.\"</p> <h2>-Isaac Asimov</h2>",
        img: "assets/images/asimov.jpg"
    },

    {
        ques: "This American poet and Georgist from New York City, is best known for \"The New Colossus\", a sonnet written in 1883.",
        answ: "Emma Lazarus",
        sound: "../assets/sounds/lazarus.mp3",
        quote: "<p>\"Give me your tired, your poor, Your huddled masses yearning to breathe free, The wretched refuse of your teeming shore. Send these, the homeless, tempest-tost to me, I lift my lamp beside the golden door\"</p> <h2>-Emma Lazarus</h2>",
        img: "assets/images/lazarus.jpg"
    },

    {
        ques: "Author of The Art of War, a widely influential work of military strategy that has affected both Western and Eastern philosophy.",
        answ: "Sun Tzu",
        sound: "../assets/sounds/suntzu.mp3",
        quote: "<p>\"Be extremely subtle, even to the point of formlessness. Be extremely mysterious, even to the point of soundlessness. Thereby you can be the director of the opponent's fate.\"</p> <h2>-Sun Tzu</h2>",
        img: "assets/images/suntzu.jpg"
    },

    {
        ques: "His name has been leant to a negative term used to characterize unscrupulous politicians of the sort described most famously in his work \"The Prince\".",
        answ: "Niccolo Machiavelli",
        sound: "../assets/sounds/machiavelli.mp3",
        quote: "<p>\"Whoever desires to found a state and give it laws, must start with assuming that all men are bad and ever ready to display their vicious nature, whenever they may find occasion for it.\"</p> <h2>-Niccolo Machiavelli</h2>",
        img: "assets/images/machiavelli.jpg"
    },

    {
        ques: "After becoming a successful writer, this great American Satirist sunk his money into a number of bad investments and eventually went bankrupt.",
        answ: "Mark Twian",
        sound: "../assets/sounds/twain.mp3",
        quote: "<p>\"If you pick up a starving dog and make him prosperous, he will not bite you. This is the principal difference between a dog and a man.\"</p> <h2>-Mark Twian</h2>",
        img: "assets/images/twain.jpg"
    },

    {
        ques: "An Athenian politician and general, he was one of a new breed of non-aristocratic politicians who rose to prominence in the early years of democracy.",
        answ: "Themistocles",
        sound: "../assets/sounds/themistocles.mp3",
        quote: "<p>\"He who commands the sea has command of everything.\"</p> <h2>-Themistocles</h2>",
        img: "assets/images/themistocles.jpg"
    },

    {
        ques: "Called the \"father of the atomic bomb\" for his role in the Manhattan Project, the World War II project that developed the first nuclear weapons",
        answ: "Robert Oppenheimer",
        sound: "../assets/sounds/oppenheimer.mp3",
        quote: "<p>\"I am become Death, the destroyer of worlds.\"</p> <h2>-Robert Oppenheimer</h2>",
        img: "assets/images/oppenheimer.jpg"
    },

    {
        ques: "He was the writer of \"Le Morte d'Arthur\" a 15th Century reworking of traditional tales about the legendary King Arthur, Guinevere, Lancelot, Merlin and the Knights of the Round Table.",
        answ: "Thomas Malory",
        sound: "../assets/sounds/malory.mp3",
        quote: "<p>\"Who pulleth out this sword of this stone and anvil, is rightwise king born of all England.\"</p> <h2>-Thomas Malory</h2>",
        img: "assets/images/oppenheimer.jpg"
    },

    {
        ques: "An American marine biologist and conservationist her book \"Silent Spring\" and other writings are credited with advancing the global environmental movement.",
        answ: "Rachel Carson",
        sound: "../assets/sounds/carson.mp3",
        quote: "<p>\"Only within the moment of time represented by the present century as one species, man, acquired significant power to alter the nature of his world.\"</p> <h2>-Rachel Carson</h2>",
        img: "assets/images/carson.jpg"
    },

    {
        ques: "Like his best known novel \"The Scarlet Letter\" his other works of fiction are considered part of the Romantic movement and, more specifically, Dark romanticism.",
        answ: "Nathaniel Hawthorne",
        sound: "../assets/sounds/hawthorne.mp3",
        quote: "<p>\"Is it a fact - or have I dreamt it - that, by means of electricity, the world of matter has become a great nerve, vibrating thousands of miles in a breathless point of time?\"</p> <h2>-Nathaniel Hawthorne</h2>",
        img: "assets/images/hawthorne.jpg"
    },

    {
        ques: "He was the director of Strategy and Marketing at Apple Computer in 1982 when he left to found Electronic Arts, the successful video game publisher.",
        answ: "Trip Hawkins",
        sound: "../assets/sounds/hawkins.mp3",
        quote: "<p>\"There's a basic principle about consumer electronics: it gets more powerful all the time and it gets cheaper all the time.\"</p> <h2>-Trip Hawkins</h2>",
        img: "assets/images/hawkins.jpg"
    },

    {
        ques: "He is known for coining the expression \"the medium is the message\" and the term global village, and for predicting the World Wide Web almost thirty years before it was invented.",
        answ: "Marshall McLuhan",
        sound: "../assets/sounds/mcluhan.mp3",
        quote: "<p>\"The new electronic interdependence recreates the world in the image of a global village.\"</p> <h2>-Marshall McLuhan</h2>",
        img: "assets/images/mcluhan.jpg"
    }

    {
        ques: "A pillar of both the Irish and British literary establishments, he helped to found the Abbey Theatre, and in his later years served as an Irish Senator for two terms.",
        answ: "W. B. Yeats",
        sound: "../assets/sounds/yeats.mp3",
        quote: "<p>\"Do not wait to strike 'til the iron is hot; but make it hot by striking.\"</p> <h2>-W. B. Yeats</h2>",
        img: "assets/images/yeats.jpg"
    }

    {
        ques: "A senior officer of the United States Army who commanded the U.S. Seventh Army in the Mediterranean and European theaters of World War II, but is best known for his leadership of the U.S. Third Army in France and Germany.",
        answ: "George S. Patton",
        sound: "../assets/sounds/patton.mp3",
        quote: "<p>\"Wars may be fought with weapons, but they are won by men. It is the spirit of the men who follow and of the man who leads that gains the victory.\"</p> <h2>-George S. Patton</h2>",
        img: "assets/images/patton.jpg"
    },

    {
        ques: "An American mathematician notable for his contributions to geometric group theory and to an area of mathematics known as billiards.",
        answ: "Richard Schwartz",
        sound: "../assets/sounds/schwartz.mp3",
        quote: "<p>\"The impact of nanotechnology is expected to exceed the impact the electronics revolution has had on our lives.\"</p> <h2>-Richard Schwartz</h2>",
        img: "assets/images/schwartz.jpg"
    }

    {
        ques: "A controversial figure in Ancient Athens this philosopher was charged with corrupting the youth of the City-State and executed.",
        answ: "Socrates",
        sound: "../assets/sounds/socrates.mp3",
        quote: "<p>\"There is only one good, knowledge, and one evil, ignorance.\"</p> <h2>-Socrates</h2>",
        img: "assets/images/socrates.jpg"
    }
]

    
});
