const enterButton = document.getElementById("enterButton");
const openingScreen = document.querySelector(".opening-screen");
const birthdayAnimation = document.getElementById("birthdayAnimation");

enterButton.addEventListener("click", () => {
    enterButton.disabled = true;
    enterButton.textContent = "OPENING...";

    openingScreen.style.transition = "opacity 1s ease";
    openingScreen.style.opacity = "0";

    setTimeout(() => {
        openingScreen.style.display = "none";
        birthdayAnimation.classList.remove("hidden");

        birthdayAnimation.innerHTML = `
            <div class="gate-scene">

                <!-- Dark opening -->
                <div class="scene-dark"></div>

                <!-- Night background -->
                <div class="night-background">

                    <!-- Moon -->
                    <div class="scene-moon"></div>

                    <!-- Stars -->
                    <div class="scene-stars"></div>

                    <!-- Big Gate -->
                    <div class="big-gate" id="bigGate">

                        <div class="gate-arch">
                            <div class="gate-decoration">✦</div>
                        </div>

                        <div class="gate-left"></div>
                        <div class="gate-right"></div>

                        <div class="gate-handle"></div>
                    </div>

                    <!-- Him approaching -->
                    <div class="walking-character" id="walkingCharacter">
                        <img src="couple.png" alt="Birthday character">
                    </div>

                    <!-- Knock text -->
                    <div class="knock-message" id="knockMessage">
                        knock knock...
                    </div>

                    <!-- Welcome -->
                    <div class="party-welcome" id="partyWelcome">
                        <h1>Welcome to the party,<br>my cutiee...!! 💗</h1>
                    </div>

                    <!-- Continue -->
                    <button id="letsGoButton">
                        LET'S GO →
                    </button>

                </div>
            </div>
        `;

        addGateStyles();
        startGateAnimation();

    }, 1000);
});


function startGateAnimation() {

    const sceneDark = document.querySelector(".scene-dark");
    const character = document.getElementById("walkingCharacter");
    const gate = document.getElementById("bigGate");
    const knockMessage = document.getElementById("knockMessage");
    const welcome = document.getElementById("partyWelcome");
    const letsGo = document.getElementById("letsGoButton");

    // Slowly reveal the scene
    setTimeout(() => {
        sceneDark.classList.add("opening");
    }, 400);

    // Character starts walking toward gate
    setTimeout(() => {
        character.classList.add("walk");
    }, 1200);

    // Character reaches the gate
    setTimeout(() => {
        character.classList.add("arrived");
    }, 3500);

    // Knock moment
    setTimeout(() => {
        knockMessage.classList.add("show");

        // Gate reacts to the knock
        gate.classList.add("knock");

    }, 4200);

    // Stop gate vibration
    setTimeout(() => {
        gate.classList.remove("knock");
    }, 4650);

    // Welcome appears
    setTimeout(() => {
        welcome.classList.add("show");
        letsGo.classList.add("show");
    }, 5000);


    letsGo.addEventListener("click", () => {

        letsGo.textContent = "LET'S GO... ✨";
        letsGo.disabled = true;

        gate.classList.add("opening-gate");

        setTimeout(() => {
            alert("Birthday party coming next! 🎂");
        }, 1500);
    });
}


function addGateStyles() {

    const style = document.createElement("style");

    style.textContent = `

        * {
            box-sizing: border-box;
        }

        .gate-scene {
            width: 100%;
            min-height: 100vh;
            min-height: 100svh;
            overflow: hidden;
            background: #02030b;
        }

        .night-background {
            position: relative;
            width: 100%;
            min-height: 100vh;
            min-height: 100svh;
            overflow: hidden;

            background:
                radial-gradient(
                    circle at 50% 35%,
                    #171b38 0%,
                    #090b1d 45%,
                    #02030b 100%
                );
        }

        /* Slow black opening */

        .scene-dark {
            position: absolute;
            inset: 0;
            z-index: 30;
            background: #000;
            opacity: 1;
            transition: opacity 2.5s ease;
            pointer-events: none;
        }

        .scene-dark.opening {
            opacity: 0;
        }

        /* Stars */

        .scene-stars {
            position: absolute;
            inset: 0;

            background-image:
                radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1.5px),
                radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1.5px);

            background-size: 100px 100px, 170px 170px;
            background-position: 20px 30px, 80px 90px;

            opacity: .5;
        }

        /* Moon */

        .scene-moon {
            position: absolute;
            top: 8%;
            right: 12%;

            width: 85px;
            height: 85px;

            border-radius: 50%;

            background: #fff7d6;

            box-shadow:
                0 0 25px rgba(255,247,214,.35),
                0 0 70px rgba(255,247,214,.12);
        }

        /* BIG GATE */

        .big-gate {
            position: absolute;

            left: 50%;
            bottom: 12%;

            transform: translateX(-50%);

            width: min(78vw, 430px);
            height: min(65vh, 520px);

            z-index: 5;

            transition:
                transform 1.5s ease,
                opacity 1.5s ease;
        }

        .gate-arch {
            position: absolute;

            left: 4%;
            top: 0;

            width: 92%;
            height: 23%;

            border: 8px solid #9d8253;
            border-bottom: none;

            border-radius: 220px 220px 0 0;

            background:
                linear-gradient(
                    90deg,
                    #18151b,
                    #292331,
                    #18151b
                );

            box-shadow:
                inset 0 0 25px rgba(255,220,150,.08),
                0 0 20px rgba(0,0,0,.7);
        }

        .gate-decoration {
            text-align: center;
            padding-top: 18px;

            color: #e6c98b;
            font-size: 28px;
        }

        .gate-left,
        .gate-right {
            position: absolute;

            top: 19%;
            bottom: 0;

            width: 50%;

            border: 7px solid #9d8253;

            background:
                repeating-linear-gradient(
                    90deg,
                    #17151d 0px,
                    #17151d 28px,
                    #24212b 30px,
                    #17151d 33px
                );

            box-shadow:
                inset 0 0 30px rgba(0,0,0,.7);
        }

        .gate-left {
            left: 0;
            border-right: 3px solid #806844;
        }

        .gate-right {
            right: 0;
            border-left: 3px solid #806844;
        }

        .gate-handle {
            position: absolute;

            left: 50%;
            top: 54%;

            width: 22px;
            height: 22px;

            transform: translateX(-50%);

            border-radius: 50%;

            background: #d2b475;

            box-shadow:
                0 0 12px rgba(220,190,120,.3);
        }

        /* Gate vibration */

        .big-gate.knock {
            animation: gateKnock .12s linear 4;
        }

        @keyframes gateKnock {

            0% {
                transform: translateX(-50%);
            }

            25% {
                transform: translateX(calc(-50% - 5px));
            }

            50% {
                transform: translateX(calc(-50% + 5px));
            }

            75% {
                transform: translateX(calc(-50% - 3px));
            }

            100% {
                transform: translateX(-50%);
            }
        }

        /* Character */

        .walking-character {
            position: absolute;

            left: -220px;
            bottom: 16%;

            z-index: 8;

            opacity: 0;

            transition:
                left 2.2s cubic-bezier(.25,.8,.25,1),
                opacity .8s ease;
        }

        .walking-character img {
            width: min(75vw, 320px);

            border-radius: 20px;

            box-shadow:
                0 10px 35px rgba(0,0,0,.5);
        }

        .walking-character.walk {
            opacity: 1;
            left: 23%;
        }

        .walking-character.arrived {
            left: 50%;
            transform: translateX(-50%);
        }

        /* Knock text */

        .knock-message {
            position: absolute;

            left: 50%;
            bottom: 7%;

            transform: translateX(-50%) translateY(10px);

            z-index: 15;

            font-family: Arial, sans-serif;

            color: #eee;

            font-size: 17px;

            opacity: 0;

            transition:
                opacity .6s ease,
                transform .6s ease;
        }

        .knock-message.show {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }

        /* Welcome */

        .party-welcome {
            position: absolute;

            top: 7%;
            right: 5%;

            z-index: 20;

            max-width: 75%;

            opacity: 0;
            transform: translateY(-15px);

            transition:
                opacity .8s ease,
                transform .8s ease;
        }

        .party-welcome.show {
            opacity: 1;
            transform: translateY(0);
        }

        .party-welcome h1 {
            margin: 0;

            font-family: Georgia, serif;

            font-size: clamp(20px, 5vw, 32px);

            line-height: 1.25;

            text-align: right;

            color: #f8e7ed;

            text-shadow:
                0 0 15px rgba(255,210,225,.25);
        }

        /* Let's go */

        #letsGoButton {
            position: absolute;

            bottom: 6%;
           
