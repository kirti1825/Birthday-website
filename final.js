/* =========================================================
   FINAL SECTION
   🔐 PASSWORD → 🧩 PUZZLE → 🎙️ SECRET VOICE NOTES
   ========================================================= */


/* =========================================================
   START FINAL SECTION
   ========================================================= */

function startVoiceScene() {
   pauseBackgroundMusic();

    const birthdayAnimation = document.getElementById("birthdayAnimation");

    birthdayAnimation.innerHTML = `

        <div class="final-scene">

            <!-- PASSWORD SCREEN -->
            <div class="final-password-screen">

                <div class="final-glow"></div>

                <div class="final-lock">🔐</div>

                <div class="final-small-title">
                    PRIVATE PAGE
                </div>

                <h1>
                    Secret Voice Notes
                </h1>

                <p>
                    Some things are easier to say<br>
                    than write...
                </p>

                <div class="final-password-box">

                    <input
                        type="password"
                        id="finalPassword"
                        placeholder="Enter password"
                        autocomplete="off"
                    >

                    <button id="finalUnlock">
                        UNLOCK →
                    </button>

                    <div id="finalWrongPassword"></div>

                </div>

                <button class="final-back-button" id="finalBack">
                    ← BACK
                </button>

            </div>

        </div>
    `;

    addFinalStyles();

    document
        .getElementById("finalUnlock")
        .addEventListener("click", checkFinalPassword);

    document
        .getElementById("finalPassword")
        .addEventListener("keydown", function(event) {

            if (event.key === "Enter") {
                checkFinalPassword();
            }

        });

    document
        .getElementById("finalBack")
        .addEventListener("click", function() {

            if (typeof startMemoryMenu === "function") {
                startMemoryMenu();
            }

        });

}


/* =========================================================
   PASSWORD
   ========================================================= */

function checkFinalPassword() {

    const input = document.getElementById("finalPassword");
    const message = document.getElementById("finalWrongPassword");

    if (!input) return;

    /*
       Change this password whenever you want.
    */

    const correctPassword = "Aryan";

    if (input.value === correctPassword) {

        input.blur();

        document
            .querySelector(".final-password-screen")
            .classList.add("final-password-open");

        setTimeout(function() {
            startFinalPuzzle();
        }, 1000);

    } else {

        message.textContent = "Nope. Nice try 😂🔒";

        message.classList.remove("password-error");

        void message.offsetWidth;

        message.classList.add("password-error");

        input.value = "";

    }

}


/* =========================================================
   PUZZLE
   ========================================================= */

function startFinalPuzzle() {

    const birthdayAnimation =
        document.getElementById("birthdayAnimation");

    birthdayAnimation.innerHTML = `

        <div class="final-puzzle-scene">

            <div class="puzzle-stars"></div>

            <div class="puzzle-glow"></div>

            <div class="puzzle-heading">

                <div class="puzzle-small">
                    ✦ ONE LAST LITTLE THING ✦
                </div>

                <h1>
                    Put Us Back Together
                </h1>

                <p>
                    Tap two pieces to swap them.
                </p>

            </div>


            <div class="puzzle-wrapper">

                <div class="puzzle-board" id="puzzleBoard">

                    <!-- 16 puzzle pieces -->

                    <div class="puzzle-piece"
                         data-position="0"
                         data-correct="0"></div>

                    <div class="puzzle-piece"
                         data-position="1"
                         data-correct="1"></div>

                    <div class="puzzle-piece"
                         data-position="2"
                         data-correct="2"></div>

                    <div class="puzzle-piece"
                         data-position="3"
                         data-correct="3"></div>

                    <div class="puzzle-piece"
                         data-position="4"
                         data-correct="4"></div>

                    <div class="puzzle-piece"
                         data-position="5"
                         data-correct="5"></div>

                    <div class="puzzle-piece"
                         data-position="6"
                         data-correct="6"></div>

                    <div class="puzzle-piece"
                         data-position="7"
                         data-correct="7"></div>

                    <div class="puzzle-piece"
                         data-position="8"
                         data-correct="8"></div>

                    <div class="puzzle-piece"
                         data-position="9"
                         data-correct="9"></div>

                    <div class="puzzle-piece"
                         data-position="10"
                         data-correct="10"></div>

                    <div class="puzzle-piece"
                         data-position="11"
                         data-correct="11"></div>

                    <div class="puzzle-piece"
                         data-position="12"
                         data-correct="12"></div>

                    <div class="puzzle-piece"
                         data-position="13"
                         data-correct="13"></div>

                    <div class="puzzle-piece"
                         data-position="14"
                         data-correct="14"></div>

                    <div class="puzzle-piece"
                         data-position="15"
                         data-correct="15"></div>

                </div>

            </div>


            <div class="puzzle-hint">
                ✨ A little piece of us...
            </div>


            <button class="final-puzzle-back" id="puzzleBack">
                ← BACK
            </button>


            <div class="puzzle-complete-screen">

                <div class="complete-sparkles">
                    ✦ ✧ ✦ ✧ ✦
                </div>

                <div class="complete-heart">
                    💗
                </div>

                <h1>
                    We Fit Together
                </h1>

                <p>
                    And now there's something<br>
                    waiting for you...
                </p>

            </div>

        </div>
    `;

    addFinalPuzzleStyles();

    setupFinalPuzzle();

    document
        .getElementById("puzzleBack")
        .addEventListener("click", function() {

            if (typeof startMemoryMenu === "function") {
                startMemoryMenu();
            }

        });

}


/* =========================================================
   PUZZLE LOGIC
   ========================================================= */

function setupFinalPuzzle() {

    const pieces =
        Array.from(
            document.querySelectorAll(".puzzle-piece")
        );

    let selectedPiece = null;

    /*
       We shuffle the pieces every time.
    */

    let order = pieces.map(function(piece, index) {
        return index;
    });

    /*
       Fisher-Yates shuffle
    */

    do {

        for (let i = order.length - 1; i > 0; i--) {

            const random =
                Math.floor(Math.random() * (i + 1));

            [order[i], order[random]] =
                [order[random], order[i]];

        }

    } while (
        order.every(function(value, index) {
            return value === index;
        })
    );


    /*
       Apply shuffled positions.
    */

    pieces.forEach(function(piece, index) {

        piece.dataset.position = order[index];

        setPuzzleBackground(
            piece,
            order[index]
        );

    });


    /*
       Tap pieces.
    */

    pieces.forEach(function(piece) {

        piece.addEventListener("click", function() {

            if (
                piece.classList.contains("solved-piece") ||
                document.querySelector(".puzzle-complete")
            ) {
                return;
            }


            /*
               First selected piece.
            */

            if (!selectedPiece) {

                selectedPiece = piece;

                piece.classList.add("selected-piece");

                return;
            }


            /*
               Same piece tapped again.
            */

            if (selectedPiece === piece) {

                piece.classList.remove("selected-piece");

                selectedPiece = null;

                return;
            }


            /*
               Second piece.
            */

            const firstPosition =
                selectedPiece.dataset.position;

            const secondPosition =
                piece.dataset.position;


            /*
               Swap their images.
            */

            selectedPiece.dataset.position =
                secondPosition;

            piece.dataset.position =
                firstPosition;


            setPuzzleBackground(
                selectedPiece,
                Number(secondPosition)
            );

            setPuzzleBackground(
                piece,
                Number(firstPosition)
            );


            selectedPiece.classList.add("swapping");

            piece.classList.add("swapping");


            setTimeout(function() {

                selectedPiece.classList.remove("selected-piece");
                selectedPiece.classList.remove("swapping");

                piece.classList.remove("swapping");

                selectedPiece = null;

                checkFinalPuzzle();

            }, 350);

        });

    });

}


/* =========================================================
   PUZZLE IMAGE POSITION
   ========================================================= */

function setPuzzleBackground(piece, position) {

    /*
       IMPORTANT:
       This is your actual repository photo filename.
    */

    piece.style.backgroundImage =
        'url("1788754868424~2.jpg")';


    const column = position % 4;

    const row = Math.floor(position / 4);


    /*
       Each piece shows its correct quarter
       of the same image.
    */

    piece.style.backgroundSize = "400% 400%";

    piece.style.backgroundPosition =
        (column * 33.3333333) + "% " +
        (row * 33.3333333) + "%";

}


/* =========================================================
   CHECK PUZZLE
   ========================================================= */

function checkFinalPuzzle() {

    const pieces =
        Array.from(
            document.querySelectorAll(".puzzle-piece")
        );

    const solved =
        pieces.every(function(piece, index) {

            return Number(piece.dataset.position) === index;

        });


    if (!solved) {
        return;
    }


    /*
       Puzzle solved.
    */

    pieces.forEach(function(piece) {

        piece.classList.add("solved-piece");

    });


    const complete =
        document.querySelector(".puzzle-complete-screen");

    if (!complete) return;


    complete.classList.add("puzzle-complete");


    /*
       Little celebration.
    */

    createPuzzleParticles();


    /*
       Move automatically to voice notes.
    */

    setTimeout(function() {

        startSecretVoiceNotes();

    }, 3000);

}


/* =========================================================
   PUZZLE PARTICLES
   ========================================================= */

function createPuzzleParticles() {

    const scene =
        document.querySelector(".final-puzzle-scene");

    if (!scene) return;


    for (let i = 0; i < 28; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "puzzle-particle";

        particle.textContent =
            i % 2 === 0 ? "✦" : "♥";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            (45 + Math.random() * 20) + "%";

        particle.style.animationDelay =
            Math.random() * 0.8 + "s";

        scene.appendChild(particle);

    }

}


/* =========================================================
   SECRET VOICE NOTES
   ========================================================= */

function startSecretVoiceNotes() {

    const birthdayAnimation =
        document.getElementById("birthdayAnimation");

    birthdayAnimation.innerHTML = `

        <div class="voice-notes-scene">

            <div class="voice-night"></div>

            <div class="voice-stars"></div>


            <div class="voice-floating-heart heart-one">
                ♡
            </div>

            <div class="voice-floating-heart heart-two">
                ♡
            </div>

            <div class="voice-floating-heart heart-three">
                ♡
            </div>

            <div class="voice-floating-heart heart-four">
                ♡
            </div>


            <div class="voice-heading">

                <div class="voice-small">
                    ✦ YOU UNLOCKED IT ✦
                </div>

                <h1>
                    Secret Voice Notes
                </h1>

                <p>
                    Things I wanted you to hear...
                </p>

            </div>


            <div class="voice-cards">


                <!-- VOICE NOTE 1 -->

                <div class="voice-card-final">

                    <div class="voice-card-top">

                        <div class="voice-icon">
                            🎙️
                        </div>

                        <div class="voice-card-title">

                            <h2>
                                A Little Something
                            </h2>

                            <span>
                                Voice Note 01
                            </span>

                        </div>

                    </div>


                    <button
                        class="voice-play-button"
                        data-audio="voice1.mp3"
                    >
                        ▶
                    </button>


                    <div class="voice-wave">

                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                </div>



                <!-- VOICE NOTE 2 -->

                <div class="voice-card-final">

                    <div class="voice-card-top">

                        <div class="voice-icon">
                            💗
                        </div>

                        <div class="voice-card-title">

                            <h2>
                                Just For You
                            </h2>

                            <span>
                                Voice Note 02
                            </span>

                        </div>

                    </div>


                    <button
                        class="voice-play-button"
                        data-audio="voice2.mp3"
                    >
                        ▶
                    </button>


                    <div class="voice-wave">

                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                </div>



                <!-- VOICE NOTE 3 -->

                <div class="voice-card-final">

                    <div class="voice-card-top">

                        <div class="voice-icon">
                            🌙
                        </div>

                        <div class="voice-card-title">

                            <h2>
                                One Last Thing
                            </h2>

                            <span>
                                Voice Note 03
                            </span>

                        </div>

                    </div>


                    <button
                        class="voice-play-button"
                        data-audio="voice3.mp3"
                    >
                        ▶
                    </button>


                    <div class="voice-wave">

                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                </div>


            </div>


            <div class="voice-bottom-message">

                <span>✦</span>

                Keep this little secret between us.

                <span>✦</span>

            </div>


            <button
                class="voice-back-button"
                id="voiceBackButton"
            >
                ← BACK
            </button>


        </div>
    `;


    addSecretVoiceStyles();

    setupVoicePlayers();


    document
        .getElementById("voiceBackButton")
        .addEventListener("click", function() {

            if (typeof startMemoryMenu === "function") {
                startMemoryMenu();
            }

        });

}


/* =========================================================
   VOICE PLAYER
   ========================================================= */

function setupVoicePlayers() {

    const buttons =
        document.querySelectorAll(".voice-play-button");

    let currentAudio = null;
    let currentButton = null;


    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            const audioFile =
                button.dataset.audio;


            /*
               If another voice note is playing,
               stop it first.
            */

            if (
                currentAudio &&
                currentButton !== button
            ) {

                currentAudio.pause();

                currentAudio.currentTime = 0;

                currentButton.textContent = "▶";

                currentButton
                    .closest(".voice-card-final")
                    .classList.remove("voice-playing");

            }


            /*
               Same button = pause/resume.
            */

            if (
                currentAudio &&
                currentButton === button
            ) {

                if (!currentAudio.paused) {

                    currentAudio.pause();

                    button.textContent = "▶";

                    button
                        .closest(".voice-card-final")
                        .classList.remove("voice-playing");

                    return;

                }

            }


            /*
               Create audio.
            */

            if (
                !currentAudio ||
                currentButton !== button
            ) {

                currentAudio =
                    new Audio(audioFile);

                currentButton = button;


                currentAudio.addEventListener(
                    "ended",
                    function() {

                        button.textContent = "▶";

                        button
                            .closest(".voice-card-final")
                            .classList.remove("voice-playing");

                        currentAudio = null;
                        currentButton = null;
resumeBackgroundMusic();
                    }
                );


                currentAudio.addEventListener(
                    "error",
                    function() {

                        button.textContent = "▶";

                        button
                            .closest(".voice-card-final")
                            .classList.remove("voice-playing");

                        alert(
                            "This voice note isn't uploaded yet. 🎙️"
                        );

                        currentAudio = null;
                        currentButton = null;

                    }
                );

            }


            currentAudio
                .play()
                .then(function() {

                    button.textContent = "Ⅱ";

                    button
                        .closest(".voice-card-final")
                        .classList.add("voice-playing");

                })
                .catch(function() {

                    button.textContent = "▶";

                });

        });

    });

}


/* =========================================================
   FINAL PASSWORD STYLES
   ========================================================= */

function addFinalStyles() {

    const old =
        document.getElementById("final-password-styles");

    if (old) old.remove();


    const style =
        document.createElement("style");

    style.id =
        "final-password-styles";


    style.textContent = `

        .final-scene {
            position: fixed;
            inset: 0;
            overflow: hidden;
            background:
                radial-gradient(
                    circle at 50% 40%,
                    rgba(108, 62, 150, .35),
                    transparent 45%
                ),
                linear-gradient(
                    145deg,
                    #050511,
                    #100b24,
                    #070914
                );
            color: #fff;
        }


        .final-password-screen {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 25px;
            transition:
                opacity 1s ease,
                transform 1s ease;
        }


        .final-password-open {
            opacity: 0;
            transform: scale(1.08);
            pointer-events: none;
        }


        .final-glow {
            position: absolute;
            width: 280px;
            height: 280px;
            border-radius: 50%;
            background: rgba(180, 120, 255, .12);
            filter: blur(60px);
            animation: finalGlow 4s ease-in-out infinite;
        }


        @keyframes finalGlow {

            0%, 100% {
                transform: scale(.9);
                opacity: .5;
            }

            50% {
                transform: scale(1.2);
                opacity: 1;
            }

        }


        .final-lock {
            position: relative;
            font-size: 55px;
            margin-bottom: 12px;
            animation:
                lockFloat 3s ease-in-out infinite;
        }


        @keyframes lockFloat {

            0%, 100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-8px);
            }

        }


        .final-small-title {
            position: relative;
            letter-spacing: 4px;
            font-size: 11px;
            color: #d9c8ff;
            margin-bottom: 12px;
        }


        .final-password-screen h1 {
            position: relative;
            margin: 0;
            font-size: clamp(30px, 8vw, 48px);
            font-weight: 600;
        }


        .final-password-screen > p {
            position: relative;
            color: #bcb5ce;
            line-height: 1.7;
            margin: 14px 0 28px;
        }


        .final-password-box {
            position: relative;
            width: min(330px, 88vw);
            display: flex;
            flex-direction: column;
            gap: 12px;
        }


        #finalPassword {
            width: 100%;
            box-sizing: border-box;
            padding: 15px 18px;
            border: 1px solid rgba(255,255,255,.18);
            border-radius: 14px;
            background: rgba(255,255,255,.07);
            color: white;
            outline: none;
            text-align: center;
            font-size: 16px;
            backdrop-filter: blur(10px);
        }


        #finalPassword::placeholder {
            color: #888297;
        }


        #finalPassword:focus {
            border-color: rgba(210,180,255,.65);
            box-shadow:
                0 0 25px rgba(170,120,255,.16);
        }


        #finalUnlock {
            border: none;
            border-radius: 14px;
            padding: 15px;
            background:
                linear-gradient(
                    135deg,
                    #a982d8,
                    #7651a5
                );
            color: white;
            font-weight: 600;
            letter-spacing: 1px;
            cursor: pointer;
            transition: transform .2s ease;
        }


        #finalUnlock:active {
            transform: scale(.97);
        }


        #finalWrongPassword {
            min-height: 20px;
            color: #f2a6bb;
            font-size: 13px;
        }


        .password-error {
            animation:
                passwordShake .4s ease;
        }


        @keyframes passwordShake {

            0%, 100% {
                transform: translateX(0);
            }

            25% {
                transform: translateX(-7px);
            }

            75% {
                transform: translateX(7px);
            }

        }


        .final-back-button {
            position: relative;
            margin-top: 25px;
            border: none;
            background: transparent;
            color: #9e94ae;
            font-size: 14px;
            cursor: pointer;
        }

    `;


    document.head.appendChild(style);

}


/* =========================================================
   PUZZLE STYLES
   ========================================================= */

function addFinalPuzzleStyles() {

    const old =
        document.getElementById("final-puzzle-styles");

    if (old) old.remove();


    const style =
        document.createElement("style");

    style.id =
        "final-puzzle-styles";


    style.textContent = `

        .final-puzzle-scene {
            position: fixed;
            inset: 0;
            overflow: hidden;
            background:
                radial-gradient(
                    circle at 50% 35%,
                    rgba(125,80,180,.3),
                    transparent 45%
                ),
                linear-gradient(
                    150deg,
                    #050512,
                    #120b25,
                    #070a18
                );
            color: white;
        }


        .puzzle-glow {
            position: absolute;
            width: 280px;
            height: 280px;
            left: 50%;
            top: 45%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: rgba(190,130,255,.12);
            filter: blur(70px);
            animation:
                puzzleGlow 5s ease-in-out infinite;
        }


        @keyframes puzzleGlow {

            0%, 100% {
                transform:
                    translate(-50%, -50%)
                    scale(.85);
            }

            50% {
                transform:
                    translate(-50%, -50%)
                    scale(1.15);
            }

        }


        .puzzle-heading {
            position: relative;
            z-index: 3;
            text-align: center;
            padding: 35px 20px 18px;
        }


        .puzzle-small {
            color: #cbb5e9;
            letter-spacing: 3px;
            font-size: 10px;
            margin-bottom: 10px;
        }


        .puzzle-heading h1 {
            margin: 0;
            font-size: clamp(27px, 7vw, 42px);
            font-weight: 600;
        }


        .puzzle-heading p {
            color: #aaa2b8;
            margin: 9px 0 0;
            font-size: 13px;
        }


        .puzzle-wrapper {
            position: relative;
            z-index: 5;
            width: min(88vw, 390px);
            aspect-ratio: 1 / 1;
            margin: 15px auto;
            padding: 7px;
            box-sizing: border-box;
            border-radius: 22px;
            background: rgba(255,255,255,.08);
            box-shadow:
                0 20px 60px rgba(0,0,0,.45),
                0 0 35px rgba(150,100,220,.13);
            backdrop-filter: blur(12px);
        }


        .puzzle-board {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(4, 1fr);
            gap: 2px;
            overflow: hidden;
            border-radius: 16px;
        }


        .puzzle-piece {
            position: relative;
            min-width: 0;
            min-height: 0;
            background-repeat: no-repeat;
            cursor: pointer;
            transition:
                transform .25s ease,
                filter .25s ease,
                box-shadow .25s ease;
            box-shadow:
                inset 0 0 0 1px rgba(255,255,255,.12);
        }


        .puzzle-piece::after {
            content: "";
            position: absolute;
            inset: 0;
            background:
                linear-gradient(
                    135deg,
                    rgba(255,255,255,.13),
                    transparent 40%
                );
            pointer-events: none;
        }


        .puzzle-piece:active {
            transform: scale(.96);
        }


        .selected-piece {
            z-index: 10;
            transform: scale(.93);
            filter: brightness(1.3);
            box-shadow:
                0 0 0 3px rgba(220,185,255,.9),
                0 0 25px rgba(190,130,255,.8);
        }


        .swapping {
            animation:
                pieceSwap .35s ease;
        }


        @keyframes pieceSwap {

            0% {
                transform: scale(.93);
            }

            50% {
                transform: scale(1.08);
            }

            100% {
                transform: scale(1);
            }

        }


        .solved-piece {
            filter: brightness(1.08);
            pointer-events: none;
        }


        .puzzle-hint {
            position: relative;
            z-index: 3;
            text-align: center;
            color: #aaa1b8;
            font-size: 12px;
            margin-top: 13px;
        }


        .final-puzzle-back {
            position: absolute;
            z-index: 10;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            border: none;
            background: transparent;
            color: #aaa1b8;
            font-size: 13px;
        }


        .puzzle-complete-screen {
            position: absolute;
            inset: 0;
            z-index: 20;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background:
                radial-gradient(
                    circle,
                    rgba(150,100,220,.35),
                    rgba(5,5,18,.94) 60%
                );
            opacity: 0;
            pointer-events: none;
            transform: scale(.92);
            transition:
                opacity .8s ease,
                transform .8s ease;
        }


        .puzzle-complete {
            opacity: 1;
            transform: scale(1);
            pointer-events: auto;
        }


        .complete-heart {
            font-size: 65px;
            animation:
                completeHeart 1s ease-in-out infinite;
        }


        @keyframes completeHeart {

            0%, 100% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.15);
            }

        }


        .puzzle-complete-screen h1 {
            font-size: 32px;
            margin: 15px 0 8px;
        }


        .puzzle-complete-screen p {
            color: #c4bace;
            line-height: 1.7;
        }


        .complete-sparkles {
            position: absolute;
            top: 25%;
            letter-spacing: 20px;
            color: #eadcff;
            animation:
                sparkleFloat 2s ease-in-out infinite;
        }


        @keyframes sparkleFloat {

            0%, 100% {
                opacity: .5;
                transform: translateY(0);
            }

            50% {
                opacity: 1;
                transform: translateY(-10px);
            }

        }


        .puzzle-particle {
            position: absolute;
            z-index: 30;
            color: #f3ddff;
            font-size: 18px;
            pointer-events: none;
            animation:
                puzzleParticle 2s ease-out forwards;
        }


        @keyframes puzzleParticle {

            0% {
                opacity: 0;
                transform: translateY(0) scale(.4);
            }

            15% {
                opacity: 1;
            }

            100% {
                opacity: 0;
                transform:
                    translateY(
                        calc(-100px - 20vh)
                    )
                    translateX(
                        calc(-80px + 160px * var(--random, .5))
                    )
                    scale(1.4);
            }

        }

    `;


    document.head.appendChild(style);

}


/* =========================================================
   VOICE NOTE STYLES
   ========================================================= */

function addSecretVoiceStyles() {

    const old =
        document.getElementById("secret-voice-styles");

    if (old) old.remove();


    const style =
        document.createElement("style");

    style.id =
        "secret-voice-styles";


    style.textContent = `

        .voice-notes-scene {
            position: fixed;
            inset: 0;
            overflow-y: auto;
            overflow-x: hidden;
            background:
                radial-gradient(
                    circle at 50% 25%,
                    rgba(116,65,160,.28),
                    transparent 42%
                ),
                linear-gradient(
                    150deg,
                    #03030b,
                    #0b0718,
                    #050710
                );
            color: white;
            padding: 30px 18px 80px;
            box-sizing: border-box;
        }


        .voice-night {
            position: fixed;
            inset: 0;
            pointer-events: none;
            background:
                radial-gradient(
                    circle at 20% 30%,
                    rgba(180,120,255,.08),
                    transparent 25%
                ),
                radial-gradient(
                    circle at 80% 65%,
                    rgba(255,130,190,.06),
                    transparent 25%
                );
            animation:
                voiceNightMove 8s ease-in-out infinite alternate;
        }


        @keyframes voiceNightMove {

            from {
                transform: scale(1);
            }

            to {
                transform: scale(1.08);
            }

        }


        .voice-heading {
            position: relative;
            z-index: 3;
            text-align: center;
            margin: 15px auto 30px;
        }


        .voice-small {
            color: #cbb3e7;
            font-size: 10px;
            letter-spacing: 3px;
            margin-bottom: 12px;
        }


        .voice-heading h1 {
            margin: 0;
            font-size: clamp(30px, 8vw, 46px);
            font-weight: 600;
        }


        .voice-heading p {
            margin-top: 10px;
            color: #a9a1b4;
            font-size: 13px;
        }


        .voice-cards {
            position: relative;
            z-index: 4;
            width: min(470px, 100%);
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 17px;
        }


        .voice-card-final {
            position: relative;
            padding: 19px;
            border-radius: 22px;
            background:
                linear-gradient(
                    145deg,
                    rgba(255,255,255,.105),
                    rgba(255,255,255,.035)
                );
            border: 1px solid rgba(255,255,255,.13);
            box-shadow:
                0 18px 50px rgba(0,0,0,.35),
                inset 0 1px rgba(255,255,255,.08);
            backdrop-filter: blur(18px);
            transition:
                transform .35s ease,
                border-color .35s ease,
                box-shadow .35s ease;
        }


        .voice-card-final:hover {
            transform: translateY(-3px);
        }


        .voice-playing {
            border-color:
                rgba(210,170,255,.55);
            box-shadow:
                0 18px 55px rgba(100,60,150,.3),
                0 0 25px rgba(180,120,255,.12);
        }


        .voice-card-top {
            display: flex;
            align-items: center;
            gap: 13px;
        }


        .voice-icon {
            width: 48px;
            height: 48px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            background:
                rgba(220,190,255,.10);
            font-size: 23px;
        }


        .voice-card-title h2 {
            margin: 0 0 4px;
            font-size: 17px;
            font-weight: 500;
        }


        .voice-card-title span {
            color: #92899e;
            font-size: 10px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
        }


        .voice-play-button {
            width: 53px;
            height: 53px;
            margin-top: 17px;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,.2);
            background:
                linear-gradient(
                    145deg,
                    #a985cf,
                    #65468c
                );
            color: white;
            font-size: 17px;
            cursor: pointer;
            box-shadow:
                0 7px 25px rgba(100,60,140,.3);
            transition:
                transform .2s ease;
        }


        .voice-play-button:active {
            transform: scale(.9);
        }


        .voice-wave {
            position: absolute;
            left: 90px;
            right: 20px;
            bottom: 29px;
            height: 25px;
            display: flex;
            align-items: center;
            gap: 3px;
            opacity: .35;
        }


        .voice-wave span {
            flex: 1;
            max-width: 5px;
            height: 8px;
            border-radius: 5px;
            background: #d7baff;
            animation:
                voiceWave 1.2s ease-in-out infinite;
            animation-play-state: paused;
        }


        .voice-wave span:nth-child(2) {
            height: 15px;
            animation-delay: .1s;
        }


        .voice-wave span:nth-child(3) {
            height: 22px;
            animation-delay: .2s;
        }


        .voice-wave span:nth-child(4) {
            height: 12px;
            animation-delay: .3s;
        }


        .voice-wave span:nth-child(5) {
            height: 19px;
            animation-delay: .4s;
        }


        .voice-wave span:nth-child(6) {
            height: 9px;
            animation-delay: .5s;
        }


        .voice-wave span:nth-child(7) {
            height: 21px;
            animation-delay: .6s;
        }


        .voice-wave span:nth-child(8) {
            height: 13px;
            animation-delay: .7s;
        }


        .voice-wave span:nth-child(9) {
            height: 20px;
            animation-delay: .8s;
        }


        .voice-wave span:nth-child(10) {
            height: 11px;
            animation-delay: .9s;
        }


        .voice-wave span:nth-child(11) {
            height: 17px;
            animation-delay: 1s;
        }


        .voice-wave span:nth-child(12) {
            height: 8px;
            animation-delay: 1.1s;
        }


        .voice-playing .voice-wave {
            opacity: .75;
        }


        .voice-playing .voice-wave span {
            animation-play-state: running;
        }


        @keyframes voiceWave {

            0%, 100% {
                transform: scaleY(.5);
            }

            50% {
                transform: scaleY(1.25);
            }

        }


        .voice-bottom-message {
            position: relative;
            z-index: 4;
            text-align: center;
            margin: 30px auto 20px;
            color: #8f879d;
            font-size: 11px;
            letter-spacing: .5px;
        }


        .voice-bottom-message span {
            color: #c9a9e8;
            margin: 0 8px;
        }


        .voice-back-button {
            position: relative;
            z-index: 4;
            display: block;
            margin: 0 auto;
            border: none;
            background: transparent;
            color: #92899e;
            font-size: 13px;
            padding: 10px 20px;
        }


        .voice-floating-heart {
            position: fixed;
            z-index: 1;
            color: rgba(215,180,255,.18);
            font-size: 35px;
            pointer-events: none;
        }


        .heart-one {
            left: 8%;
            bottom: -30px;
            animation:
                voiceHeart 9s linear infinite;
        }


        .heart-two {
            left: 75%;
            bottom: -30px;
            animation:
                voiceHeart 12s linear infinite 2s;
        }


        .heart-three {
            left: 42%;
            bottom: -30px;
            animation:
                voiceHeart 10s linear infinite 4s;
        }


        .heart-four {
            left: 90%;
            bottom: -30px;
            animation:
                voiceHeart 14s linear infinite 1s;
        }


        @keyframes voiceHeart {

            0% {
                transform:
                    translateY(0)
                    rotate(-10deg);
                opacity: 0;
            }

            15% {
                opacity: 1;
            }

            100% {
                transform:
                    translateY(-110vh)
                    rotate(15deg);
                opacity: 0;
            }

        }

    `;


    document.head.appendChild(style);

}


/* =========================================================
   CONNECT MENU → FINAL SECTION
   ========================================================= */

/*
   This means you DON'T have to edit menu.js
   just to connect the Secret Voice Notes button.
*/

if (!window.__finalVoiceMenuConnected) {

    window.__finalVoiceMenuConnected = true;

    document.addEventListener("click", function(event) {

        const card =
            event.target.closest(".voice-card");

        if (!card) return;

        /*
           Prevent the old console-only action
           from doing anything useful.
        */

        event.preventDefault();

        startVoiceScene();

    });

}
