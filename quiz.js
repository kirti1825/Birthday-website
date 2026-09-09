/* =========================================
   BIRTHDAY WEBSITE — RELATIONSHIP QUIZ
   ========================================= */

function startQuizScene() {

    const birthdayAnimation =
        document.getElementById("birthdayAnimation");

    birthdayAnimation.innerHTML = `

        <div class="quiz-scene">

            <div class="quiz-stars">
                <span>✦</span>
                <span>✧</span>
                <span>⋆</span>
                <span>✦</span>
                <span>✧</span>
                <span>⋆</span>
                <span>✦</span>
                <span>✧</span>
            </div>

            <div class="quiz-hearts">
                <span>💗</span>
                <span>♡</span>
                <span>💗</span>
                <span>♡</span>
                <span>💗</span>
            </div>

            <div class="quiz-glow"></div>

            <div class="quiz-card">

                <div class="quiz-heading">

                    <div class="quiz-small">
                        ✦ OUR LITTLE GAME ✦
                    </div>

                    <h1>💕 How Well Do You Know Us?</h1>

                    <p>
                        Let's see how much you actually remember… 👀
                    </p>

                </div>

                <div class="quiz-progress">
                    <span id="quizProgress">
                        Question 1 of 5
                    </span>
                </div>

                <div class="quiz-question-box">

                    <div
                        class="quiz-question"
                        id="quizQuestion">
                    </div>

                    <div
                        class="quiz-options"
                        id="quizOptions">
                    </div>

                </div>

                <button
                    class="quiz-next"
                    id="quizNext"
                    disabled>
                    Next →
                </button>

            </div>

            <button class="quiz-back-button">
                ← Back
            </button>

        </div>
    `;

    addQuizStyles();
    setupQuiz();
}


/* =========================================
   QUIZ QUESTIONS
   ========================================= */

function setupQuiz() {

    const questions = [

        {
            question:
                "How did we actually get closer?",

            options: [
                "Instagram did all the work 😂",
                "You kept putting in the effort 💗",
                "Destiny had a whole plan 👀",
                "We just randomly happened 🤷🏻‍♀️"
            ],

            correct: 1
        },


        {
            question:
                "What is something we have done WAY too many times? 😂",

            options: [
                "Fought over the smallest things 😭",
                "Randomly annoyed each other 🤭",
                "Said “okay” and then continued arguing 😂",
                "Tried to have a normal conversation 💀"
            ],

            buffer: true
        },


        {
            question:
                "What do we somehow always end up doing? 😂",

            options: [
                "Agreeing peacefully like mature adults 😇",
                "Having deep philosophical discussions 🤓",
                "Fighting over something stupid 😭",
                "Never annoying each other 🤭"
            ],

            correct: 2
        },


        {
            question:
                "What is something I genuinely care about when it comes to you? 🫂",

            options: [
                "Whether you're showing me attitude 👀",
                "Whether you're ignoring my messages 😭",
                "Whether you're angry or not 😤",
                "Whether you're fine or not 💗"
            ],

            correct: 3
        },


        {
            question:
                "What is the most “us” thing about our relationship?",

            options: [
                "We never disagree about anything 😇",
                "We're always calm and serious 🤓",
                "We communicate perfectly every time 😭",
                "We fight, then somehow come back to each other 😂"
            ],

            correct: 3
        }

    ];


    let currentQuestion = 0;
    let score = 0;


    const questionElement =
        document.getElementById("quizQuestion");

    const optionsElement =
        document.getElementById("quizOptions");

    const progressElement =
        document.getElementById("quizProgress");

    const nextButton =
        document.getElementById("quizNext");


    function showQuestion() {

        const question =
            questions[currentQuestion];

        questionElement.textContent =
            question.question;

        progressElement.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;

        optionsElement.innerHTML = "";

        nextButton.disabled = true;


        question.options.forEach((option, index) => {

            const button =
                document.createElement("button");

            button.className =
                "quiz-option";

            button.textContent =
                option;


            button.addEventListener("click", () => {

                document
                    .querySelectorAll(".quiz-option")
                    .forEach(btn => {
                        btn.disabled = true;
                    });


                button.classList.add("selected");


                /*
                 * Q2 is a guaranteed point.
                 * Every option is correct.
                 */

                if (question.buffer) {

                    score++;

                } else if (index === question.correct) {

                    score++;

                }


                nextButton.disabled = false;

            });


            optionsElement.appendChild(button);

        });

    }


    nextButton.addEventListener("click", () => {

        currentQuestion++;


        if (currentQuestion >= questions.length) {

            showQuizResult(score);

        } else {

            showQuestion();

        }

    });


    document
        .querySelector(".quiz-back-button")
        .addEventListener("click", () => {

            startMemoryMenu();

        });


    showQuestion();
}


/* =========================================
   QUIZ RESULT
   ========================================= */

function showQuizResult(score) {

    const birthdayAnimation =
        document.getElementById("birthdayAnimation");


    birthdayAnimation.innerHTML = `

        <div class="quiz-result-scene">

            <div class="quiz-result-stars">
                ✦　✧　⋆　✦　⋆　✧　✦
            </div>

            <div class="quiz-result-card">

                <div class="quiz-result-title">
                    💕 YOUR US-SCORE 💕
                </div>

                <div class="quiz-score">
                    ${score} / 5
                </div>

                <p class="quiz-result-message">
                    You survived the relationship quiz. 😭💗
                </p>

                <button
                    class="quiz-result-back">
                    Back to our little world →
                </button>

            </div>

        </div>
    `;


    document
        .querySelector(".quiz-result-back")
        .addEventListener("click", () => {

            startMemoryMenu();

        });
}


/* =========================================
   QUIZ STYLES
   ========================================= */

function addQuizStyles() {

    const style =
        document.createElement("style");

    style.textContent = `

        .quiz-scene {

            position: fixed;
            inset: 0;

            overflow: hidden;

            background:
                radial-gradient(
                    circle at 50% 25%,
                    #30294a 0%,
                    #151329 45%,
                    #070711 100%
                );

            color: white;

            z-index: 10000;

            font-family:
                Georgia,
                "Times New Roman",
                serif;
        }


        /* STARS */

        .quiz-stars {

            position: absolute;
            inset: 0;

            pointer-events: none;
        }


        .quiz-stars span {

            position: absolute;

            color:
                rgba(255,255,255,.75);

            font-size: 12px;

            animation:
                quizTwinkle
                3s ease-in-out
                infinite alternate;
        }


        .quiz-stars span:nth-child(1) {
            left: 8%;
            top: 15%;
        }

        .quiz-stars span:nth-child(2) {
            left: 22%;
            top: 30%;
            animation-delay: .8s;
        }

        .quiz-stars span:nth-child(3) {
            left: 78%;
            top: 18%;
            animation-delay: 1.3s;
        }

        .quiz-stars span:nth-child(4) {
            left: 90%;
            top: 38%;
            animation-delay: .4s;
        }

        .quiz-stars span:nth-child(5) {
            left: 12%;
            top: 70%;
            animation-delay: 1.7s;
        }

        .quiz-stars span:nth-child(6) {
            left: 85%;
            top: 75%;
            animation-delay: 2s;
        }

        .quiz-stars span:nth-child(7) {
            left: 65%;
            top: 12%;
            animation-delay: .6s;
        }

        .quiz-stars span:nth-child(8) {
            left: 35%;
            top: 82%;
            animation-delay: 1.2s;
        }


        @keyframes quizTwinkle {

            from {
                opacity: .25;
                transform: scale(.8);
            }

            to {
                opacity: 1;
                transform: scale(1.3);
            }

        }


        /* FLOATING HEARTS */

        .quiz-hearts {

            position: absolute;
            inset: 0;

            pointer-events: none;

            overflow: hidden;
        }


        .quiz-hearts span {

            position: absolute;

            bottom: -50px;

            font-size: 18px;

            opacity: .25;

            animation:
                quizHeartFloat
                9s linear
                infinite;
        }


        .quiz-hearts span:nth-child(1) {
            left: 10%;
            animation-delay: 0s;
        }

        .quiz-hearts span:nth-child(2) {
            left: 30%;
            animation-delay: 3s;
        }

        .quiz-hearts span:nth-child(3) {
            left: 55%;
            animation-delay: 5s;
        }

        .quiz-hearts span:nth-child(4) {
            left: 75%;
            animation-delay: 2s;
        }

        .quiz-hearts span:nth-child(5) {
            left: 90%;
            animation-delay: 6s;
        }


        @keyframes quizHeartFloat {

            0% {
                transform:
                    translateY(0)
                    scale(.8);

                opacity: 0;
            }

            15% {
                opacity: .3;
            }

            100% {
                transform:
                    translateY(-115vh)
                    scale(1.2);

                opacity: 0;
            }

        }


        /* CENTER GLOW */

        .quiz-glow {

            position: absolute;

            width: 70vw;
            height: 70vw;

            max-width: 500px;
            max-height: 500px;

            left: 50%;
            top: 50%;

            transform:
                translate(-50%, -50%);

            border-radius: 50%;

            background:
                rgba(190,150,255,.08);

            filter: blur(50px);

            pointer-events: none;
        }


        /* MAIN CARD */

        .quiz-card {

            position: absolute;

            left: 50%;
            top: 50%;

            width:
                min(88%, 560px);

            max-height: 86vh;

            overflow-y: auto;

            transform:
                translate(-50%, -50%);

            padding:
                30px 25px 25px;

            border-radius: 28px;

            background:
                rgba(20,18,38,.68);

            border:
                1px solid
                rgba(255,255,255,.15);

            box-shadow:
                0 25px 80px
                rgba(0,0,0,.45),

                inset 0 0 30px
                rgba(255,255,255,.03);

            backdrop-filter:
                blur(18px);

            text-align: center;
        }


        .quiz-small {

            font-size: 10px;

            letter-spacing: 3px;

            opacity: .65;

            margin-bottom: 10px;
        }


        .quiz-heading h1 {

            margin: 0;

            font-size: 27px;

            line-height: 1.25;
        }


        .quiz-heading p {

            margin:
                10px 0 20px;

            font-size: 14px;

            opacity: .72;
        }


        .quiz-progress {

            font-size: 11px;

            letter-spacing: 2px;

            opacity: .55;

            margin-bottom: 15px;
        }


        .quiz-question-box {

            padding:
                20px 15px;

            border-radius: 22px;

            background:
                rgba(255,255,255,.05);
        }


        .quiz-question {

            font-size: 19px;

            line-height: 1.45;

            margin-bottom: 18px;
        }


        .quiz-options {

            display: flex;

            flex-direction: column;

            gap: 10px;
        }


        .quiz-option {

            width: 100%;

            padding:
                13px 15px;

            border-radius: 16px;

            border:
                1px solid
                rgba(255,255,255,.12);

            background:
                rgba(255,255,255,.055);

            color: white;

            font-family: inherit;

            font-size: 14px;

            text-align: left;

            cursor: pointer;

            transition:
                transform .2s ease,
                background .2s ease,
                border .2s ease;
        }


        .quiz-option:active {

            transform:
                scale(.97);
        }


        .quiz-option.selected {

            background:
                rgba(255,180,220,.16);

            border-color:
                rgba(255,210,235,.45);

            transform:
                scale(1.02);
        }


        .quiz-next {

            margin-top: 18px;

            padding:
                11px 24px;

            border-radius: 22px;

            border: none;

            background:
                rgba(255,255,255,.12);

            color: white;

            font-family: inherit;

            cursor: pointer;
        }


        .quiz-next:disabled {

            opacity: .3;

            cursor: default;
        }


        /* BACK BUTTON */

        .quiz-back-button {

            position: fixed;

            top: 18px;
            left: 18px;

            padding:
                9px 15px;

            border-radius: 20px;

            border:
                1px solid
                rgba(255,255,255,.2);

            background:
                rgba(10,8,20,.65);

            color: white;

            font-family: inherit;

            cursor: pointer;

            z-index: 20;
        }


        /* RESULT */

        .quiz-result-scene {

            position: fixed;
            inset: 0;

            display: flex;

            align-items: center;
            justify-content: center;

            background:
                radial-gradient(
                    circle at 50% 40%,
                    #403052,
                    #100d18 70%
                );

            color: white;

            z-index: 10000;
        }


        .quiz-result-stars {

            position: absolute;

            top: 15%;

            width: 100%;

            text-align: center;

            opacity: .6;

            animation:
                quizResultTwinkle
                3s ease-in-out
                infinite alternate;
        }


        @keyframes quizResultTwinkle {

            from {
                opacity: .3;
            }

            to {
                opacity: .9;
            }

        }


        .quiz-result-card {

            width:
                min(86%, 430px);

            padding:
                35px 25px;

            border-radius: 30px;

            background:
                rgba(25,20,40,.75);

            border:
                1px solid
                rgba(255,255,255,.16);

            box-shadow:
                0 25px 70px
                rgba(0,0,0,.5);

            text-align: center;

            backdrop-filter:
                blur(18px);
        }


        .quiz-result-title {

            font-size: 13px;

            letter-spacing: 3px;

            opacity: .8;
        }


        .quiz-score {

            font-size: 65px;

            font-weight: 700;

            margin:
                15px 0;

            text-shadow:
                0 0 25px
                rgba(255,255,255,.6);
        }


        .quiz-result-message {

            font-size: 15px;

            opacity: .75;

            margin-bottom: 25px;
        }


        .quiz-result-back {

            padding:
                12px 20px;

            border-radius: 22px;

            border:
                1px solid
                rgba(255,255,255,.2);

            background:
                rgba(255,255,255,.08);

            color: white;

            font-family: inherit;

            cursor: pointer;
        }


        @media (max-width: 600px) {

            .quiz-card {

                width: 90%;

                padding:
                    25px 18px 20px;
            }

            .quiz-heading h1 {

                font-size: 23px;
            }

            .quiz-question {

                font-size: 17px;
            }

            .quiz-option {

                font-size: 13px;
            }

        }

    `;

    document.head.appendChild(style);
}
