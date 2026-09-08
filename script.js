const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", startBirthday);

function startBirthday() {
    const opening = document.querySelector(".opening-screen");

    opening.style.transition = "opacity 1.2s ease";
    opening.style.opacity = "0";

    setTimeout(() => {
        opening.style.display = "none";
        startGateScene();
    }, 1200);
}


/* =========================
   PART 1 — THE GATE
========================= */

function startGateScene() {
    const scene = document.getElementById("birthdayAnimation");

    scene.className = "";
    scene.innerHTML = `
        <div class="gate-scene">

            <div class="night-stars"></div>
            <div class="night-moon"></div>

            <div class="walking-area">

                <img
                    class="boy-back"
                    src="1788853009972.png"
                    alt=""
                >

                <div class="big-gate">
                    <div class="gate-left"></div>
                    <div class="gate-right"></div>

                    <div class="gate-top">
                        <div class="gate-decoration">✦</div>
                    </div>
                </div>

            </div>

            <div class="knock-text">* knock knock *</div>

            <div class="gate-welcome">
                Welcome to the party, my cutiee...!! 💗
            </div>

        </div>
    `;

    addSceneStyles();

    setTimeout(() => {
        document.querySelector(".boy-back").classList.add("walk-in");
    }, 500);

    setTimeout(() => {
        document.querySelector(".big-gate").classList.add("gate-shake");
        document.querySelector(".knock-text").classList.add("show-knock");
    }, 3700);

    setTimeout(() => {
        document.querySelector(".gate-welcome").classList.add("show-welcome");
    }, 4500);

    setTimeout(() => {
        document.querySelector(".big-gate").classList.add("open-gate");
    }, 6800);

    setTimeout(() => {
        startPartyScene();
    }, 9300);
}


/* =========================
   PART 2 — LANTERN PARTY
========================= */

function startPartyScene() {
    const scene = document.getElementById("birthdayAnimation");

    scene.innerHTML = `
        <div class="party-scene">

            <!-- NIGHT SKY -->
            <div class="party-sky"></div>
            <div class="party-stars"></div>

            <!-- FLOATING LANTERNS -->
            <div class="lanterns">

                <div class="lantern lantern-1"></div>
                <div class="lantern lantern-2"></div>
                <div class="lantern lantern-3"></div>
                <div class="lantern lantern-4"></div>
                <div class="lantern lantern-5"></div>
                <div class="lantern lantern-6"></div>

            </div>

            <!-- FLOOR -->
            <div class="party-ground">

                <!-- BALLOONS ON FLOOR -->
                <div class="floor-balloons left-balloons">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="floor-balloons right-balloons">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <!-- TABLE -->
                <div class="cake-table">

                    <div class="table-top"></div>

                    <div class="table-cloth"></div>

                    <div class="cake">
                        <div class="candle">
                            <div class="flame"></div>
                        </div>

                        <div class="cake-top"></div>
                        <div class="cake-body"></div>
                        <div class="cake-cream"></div>
                    </div>

                </div>

                <!-- CHARACTERS -->
                <div class="characters">

                    <img
                        class="girl-front"
                        src="IMG_20260908_213133.png"
                        alt=""
                    >

                    <img
                        class="boy-front"
                        src="IMG_20260908_212512.png"
                        alt=""
                    >

                </div>

            </div>

            <!-- SMALL PARTY SPARKLES -->
            <div class="party-sparkles"></div>

            <!-- STAR FOR TRANSITION -->
            <div class="focus-star">✦</div>

            <div class="star-glow"></div>

        </div>
    `;

    addPartyStyles();

    /* Characters appear */
    setTimeout(() => {
        document.querySelector(".girl-front").classList.add("girl-enter");
    }, 400);

    setTimeout(() => {
        document.querySelector(".boy-front").classList.add("boy-enter");
    }, 1300);

    /* Start dancing */
    setTimeout(() => {
        document.querySelector(".characters").classList.add("dance");
    }, 3000);

    /* Focus on the star */
    setTimeout(() => {
        document.querySelector(".party-scene").classList.add("star-focus");
        document.querySelector(".focus-star").classList.add("star-active");
        document.querySelector(".star-glow").classList.add("glow-active");
    }, 5600);

    /* Zoom into star */
    setTimeout(() => {
        document.querySelector(".party-scene").classList.add("zoom-to-star");
    }, 6500);

    /* Next section */
    setTimeout(() => {
        startGiftScene();
    }, 8500);
}


/* =========================
   PART 3 — GIFT SECTION
   PLACEHOLDER FOR NOW
========================= */

function startGiftScene() {
    const scene = document.getElementById("birthdayAnimation");

    scene.innerHTML = `
        <div class="gift-transition">
            <div class="gift-sparkle"></div>
        </div>
    `;

    scene.style.background = "#080512";

    /*
       We will build the 5 mysterious
       gift/card choices here next.
    */
}


/* =========================
   PART 1 STYLES
========================= */

function addSceneStyles() {
    const style = document.createElement("style");

    style.innerHTML = `

        #birthdayAnimation {
            position: fixed;
            inset: 0;
            z-index: 999;
            overflow: hidden;
        }

        .gate-scene {
            position: absolute;
            inset: 0;
            overflow: hidden;
            background:
                radial-gradient(circle at 50% 25%,
                    #26305c 0%,
                    #111832 38%,
                    #060a18 75%,
                    #02030b 100%);
        }

        .night-stars,
        .party-stars {
            position: absolute;
            inset: 0;
            background-image:
                radial-gradient(circle, white 1px, transparent 1.5px),
                radial-gradient(circle, white 1px, transparent 1.5px),
                radial-gradient(circle, white 1px, transparent 1.5px);
            background-size: 110px 110px, 170px 170px, 230px 230px;
            background-position: 10px 20px, 70px 100px, 140px 30px;
            opacity: .65;
            animation: twinkle 4s infinite alternate;
        }

        .night-moon {
            position: absolute;
            top: 10%;
            right: 13%;
            width: 75px;
            height: 75px;
            border-radius: 50%;
            background: #fff7d6;
            box-shadow:
                0 0 25px rgba(255,247,214,.55),
                0 0 70px rgba(255,247,214,.18);
        }

        .walking-area {
            position: absolute;
            inset: 0;
        }

        .boy-back {
            position: absolute;
            bottom: 7%;
            left: -180px;
            width: 130px;
            height: auto;
            z-index: 5;
            transition:
                left 3.2s cubic-bezier(.2,.8,.2,1);
        }

        .boy-back.walk-in {
            left: calc(50% - 160px);
        }

        .big-gate {
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 330px;
            height: 410px;
            z-index: 4;
            transition: transform 2s ease;
        }

        .gate-left,
        .gate-right {
            position: absolute;
            bottom: 0;
            width: 50%;
            height: 330px;
            background:
                linear-gradient(90deg,
                    #3a1e16,
                    #70412b,
                    #4b291c,
                    #7a4930);
            border: 5px solid #26130e;
            box-shadow:
                inset 0 0 25px rgba(0,0,0,.5),
                0 0 25px rgba(0,0,0,.4);
        }

        .gate-left {
            left: 0;
            transform-origin: left center;
            transition: transform 2s ease;
        }

        .gate-right {
            right: 0;
            transform-origin: right center;
            transition: transform 2s ease;
        }

        .gate-left::before,
        .gate-right::before {
            content: "";
            position: absolute;
            inset: 15px;
            border: 2px solid rgba(255,220,170,.3);
        }

        .gate-top {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100px;
            background:
                linear-gradient(135deg,
                    #3c2017,
                    #75452e,
                    #43251b);
            border: 5px solid #26130e;
            clip-path: polygon(
                0 100%,
                12% 35%,
                50% 0,
                88% 35%,
                100% 100%
            );
        }

        .gate-decoration {
            text-align: center;
            color: #ffdca3;
            font-size: 30px;
            margin-top: 25px;
            text-shadow: 0 0 15px #ffdca3;
        }

        .gate-shake {
            animation: gateShake .45s ease;
        }

        .open-gate .gate-left {
            transform: perspective(700px) rotateY(-65deg);
        }

        .open-gate .gate-right {
            transform: perspective(700px) rotateY(65deg);
        }

        .knock-text {
            position: absolute;
            bottom: 15%;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(255,255,255,.75);
            font-size: 16px;
            opacity: 0;
            transition: opacity .6s;
        }

        .show-knock {
            opacity: 1;
        }

        .gate-welcome {
            position: absolute;
            top: 23%;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            text-align: center;
            color: #fff;
            font-family: "Brush Script MT", "Segoe Script", cursive;
            font-size: clamp(27px, 6vw, 48px);
            text-shadow:
                0 0 12px rgba(255,200,230,.7),
                0 0 30px rgba(255,150,210,.3);
            opacity: 0;
            transition: opacity 1.2s ease;
        }

        .show-welcome {
            opacity: 1;
        }

        @keyframes gateShake {
            0%,100% { transform: translateX(-50%); }
            25% { transform: translateX(calc(-50% - 6px)); }
            75% { transform: translateX(calc(-50% + 6px)); }
        }

        @keyframes twinkle {
            from { opacity: .35; }
            to { opacity: .85; }
        }
    `;

    document.head.appendChild(style);
}


/* =========================
   PART 2 STYLES
========================= */

function addPartyStyles() {
    const style = document.createElement("style");

    style.innerHTML = `

        .party-scene {
            position: absolute;
            inset: 0;
            overflow: hidden;
            background:
                radial-gradient(
                    ellipse at 50% 85%,
                    rgba(111,69,133,.55),
                    transparent 50%
                ),
                linear-gradient(
                    180deg,
                    #050713 0%,
                    #10152e 48%,
                    #241839 100%
                );
            transition:
                transform 2.2s cubic-bezier(.2,.7,.1,1),
                filter 2.2s ease;
        }

        .party-sky {
            position: absolute;
            inset: 0;
            background:
                radial-gradient(
                    circle at 50% 35%,
                    rgba(91,106,180,.18),
                    transparent 45%
                );
        }

        .party-stars {
            animation:
                twinkle 3.5s infinite alternate,
                starDrift 20s linear infinite;
        }

        /* LANTERNS */

        .lanterns {
            position: absolute;
            inset: 0;
            pointer-events: none;
        }

        .lantern {
            position: absolute;
            width: 25px;
            height: 34px;
            border-radius: 50% 50% 45% 45%;
            background:
                radial-gradient(
                    circle,
                    #fff1a8 0%,
                    #ffbf55 40%,
                    rgba(255,125,60,.65) 70%,
                    transparent 100%
                );
            box-shadow:
                0 0 15px rgba(255,190,90,.7),
                0 0 35px rgba(255,140,60,.3);
            animation: lanternRise 12s linear infinite;
            opacity: 0;
        }

        .lantern::after {
            content: "";
            position: absolute;
            width: 9px;
            height: 7px;
            left: 8px;
            bottom: -5px;
            border-radius: 50%;
            background: #ffcf6b;
            box-shadow: 0 0 10px #ffb84d;
        }

        .lantern-1 {
            left: 12%;
            bottom: -50px;
            animation-delay: 1s;
        }

        .lantern-2 {
            left: 27%;
            bottom: -80px;
            animation-delay: 4s;
        }

        .lantern-3 {
            left: 43%;
            bottom: -30px;
            animation-delay: 2s;
        }

        .lantern-4 {
            left: 61%;
            bottom: -100px;
            animation-delay: 5s;
        }

        .lantern-5 {
            left: 76%;
            bottom: -60px;
            animation-delay: 3s;
        }

        .lantern-6 {
            left: 88%;
            bottom: -90px;
            animation-delay: 6s;
        }

        @keyframes lanternRise {
            0% {
                transform: translateY(0) translateX(0) scale(.7);
                opacity: 0;
            }
            12% {
                opacity: .8;
            }
            70% {
                opacity: .7;
            }
            100% {
                transform:
                    translateY(-120vh)
                    translateX(35px)
                    scale(1);
                opacity: 0;
            }
        }

        /* GROUND */

        .party-ground {
            position: absolute;
            inset: 0;
        }

        .party-ground::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 38%;
            background:
                radial-gradient(
                    ellipse at center top,
                    rgba(181,117,190,.23),
                    transparent 65%
                ),
                linear-gradient(
                    180deg,
                    rgba(20,15,35,.1),
                    rgba(4,5,15,.65)
                );
            pointer-events: none;
        }

        /* FLOOR BALLOONS */

        .floor-balloons {
            position: absolute;
            bottom: 5%;
            display: flex;
            align-items: flex-end;
            gap: 5px;
            z-index: 3;
        }

        .left-balloons {
            left: 5%;
        }

        .right-balloons {
            right: 5%;
        }

        .floor-balloons span {
            width: 38px;
            height: 50px;
            border-radius: 50%;
            background:
                radial-gradient(
                    circle at 35% 25%,
                    rgba(255,255,255,.65),
                    rgba(255,150,190,.8) 30%,
                    rgba(100,60,130,.8)
                );
            box-shadow:
                0 8px 18px rgba(0,0,0,.3),
                0 0 14px rgba(220,150,220,.15);
            animation: balloonFloat 2.5s ease-in-out infinite alternate;
        }

        .floor-balloons span:nth-child(2) {
            width: 32px;
            height: 43px;
            animation-delay: .4s;
        }

        .floor-balloons span:nth-child(3) {
            width: 43px;
            height: 55px;
            animation-delay: .8s;
        }

        .floor-balloons span:nth-child(4) {
            width: 30px;
            height: 40px;
            animation-delay: 1.2s;
        }

        @keyframes balloonFloat {
            from { transform: translateY(2px) rotate(-3deg); }
            to { transform: translateY(-8px) rotate(3deg); }
        }

        /* TABLE */

        .cake-table {
            position: absolute;
            left: 50%;
            bottom: 12%;
            transform: translateX(-50%);
            width: 180px;
            height: 115px;
            z-index: 5;
        }

        .table-top {
            position: absolute;
            top: 0;
            width: 100%;
            height: 35px;
            border-radius: 50%;
            background:
                radial-gradient(
                    ellipse,
                    #d69bc8,
                    #8b527f 65%,
                    #563353
                );
            box-shadow:
                0 7px 15px rgba(0,0,0,.35);
        }

        .table-cloth {
            position: absolute;
            top: 16px;
            left: 15px;
            right: 15px;
            height: 90px;
            border-radius: 0 0 35px 35px;
            background:
                linear-gradient(
                    90deg,
                    #673d62,
                    #9e638e,
                    #693e63
                );
            clip-path: polygon(
                0 0,
                100% 0,
                88% 100%,
                12% 100%
            );
        }

        /* CAKE */

        .cake {
            position: absolute;
            left: 50%;
            top: -30px;
            transform: translateX(-50%);
            width: 70px;
            height: 70px;
            z-index: 8;
        }

        .cake-body {
            position: absolute;
            bottom: 5px;
            left: 5px;
            width: 60px;
            height: 38px;
            border-radius: 8px 8px 12px 12px;
            background:
                linear-gradient(
                    180deg,
                    #f0b8d5,
                    #b8669b
                );
            box-shadow: 0 5px 10px rgba(0,0,0,.25);
        }

        .cake-top {
            position: absolute;
            left: 4px;
            top: 22px;
            width: 62px;
            height: 25px;
            border-radius: 50%;
            background: #ffe0ed;
            z-index: 2;
        }

        .cake-cream {
            position: absolute;
            left: 10px;
            top: 37px;
            width: 52px;
            height: 10px;
            border-radius: 50%;
            background: #fff0f7;
            z-index: 3;
        }

        .candle {
            position: absolute;
            left: 50%;
            top: 3px;
            transform: translateX(-50%);
            width: 6px;
            height: 25px;
            background: #f7e5aa;
            z-index: 5;
        }

        .flame {
            position: absolute;
            left: 50%;
            top: -15px;
            transform: translateX(-50%);
            width: 10px;
            height: 15px;
            border-radius: 50% 50% 50% 50%;
            background: #ffd36b;
            box-shadow:
                0 0 12px #ffcc66,
                0 0 25px rgba(255,160,70,.6);
            animation: flame 0.6s infinite alternate;
        }

        @keyframes flame {
            from {
                transform: translateX(-50%) scale(.9);
            }
            to {
                transform: translateX(-50%) scale(1.15);
            }
        }

        /* CHARACTERS */

        .characters {
            position: absolute;
            left: 50%;
            bottom: 9%;
            transform: translateX(-50%);
            width: 330px;
            height: 250px;
            z-index: 6;
        }

        .characters img {
            position: absolute;
            bottom: 0;
            width: 125px;
            height: auto;
            opacity: 0;
        }

        .girl-front {
            left: 8px;
            transform: translateX(-80px);
            transition:
                opacity 1.1s ease,
                transform 1.1s cubic-bezier(.2,.8,.2,1);
        }

        .boy-front {
            right: 8px;
            transform: translateX(80px);
            transition:
                opacity 1.1s ease,
                transform 1.1s cubic-bezier(.2,.8,.2,1);
        }

        .girl-enter,
        .boy-enter {
            opacity: 1 !important;
            transform: translateX(0) !important;
        }

        /* DANCE */

        .dance .girl-front {
            animation: girlDance .8s ease-in-out infinite alternate;
        }

        .dance .boy-front {
            animation: boyDance .8s ease-in-out infinite alternate-reverse;
        }

        @keyframes girlDance {
            from {
                transform: translateY(0) rotate(-3deg);
            }
            to {
                transform: translateY(-12px) rotate(3deg);
            }
        }

        @keyframes boyDance {
            from {
                transform: translateY(0) rotate(3deg);
            }
            to {
                transform: translateY(-12px) rotate(-3deg);
            }
        }

        /* STAR TRANSITION */

        .focus-star {
            position: absolute;
            top: 12%;
            left: 50%;
            transform: translate(-50%, -50%) scale(.7);
            font-size: 28px;
            color: #fff7c9;
            opacity: 0;
            z-index: 20;
            text-shadow:
                0 0 12px #fff,
                0 0 30px #ffe9a3,
                0 0 60px rgba(255,220,120,.8);
            transition:
                opacity 1.5s ease,
                transform 2s ease;
        }

        .star-active {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.4);
            animation: starPulse 1s infinite alternate;
        }

        .star-glow {
            position: absolute;
            top: 12%;
            left: 50%;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            box-shadow:
                0 0 30px 15px rgba(255,239,165,.5),
                0 0 100px 50px rgba(255,210,120,.25);
            opacity: 0;
            z-index: 19;
            transition: opacity 1.5s ease;
        }

        .glow-active {
            opacity: 1;
        }

        .star-focus .characters,
        .star-focus .cake-table,
        .star-focus .floor-balloons {
            transition:
                opacity 1.5s ease,
                filter 1.5s ease;
            opacity: .25;
            filter: blur(3px);
        }

        .zoom-to-star {
            transform: scale(12);
            filter: brightness(1.35);
        }

        .zoom-to-star .focus-star {
            opacity: 1;
        }

        @keyframes starPulse {
            from {
                text-shadow:
                    0 0 12px #fff,
                    0 0 30px #ffe9a3;
            }
            to {
                text-shadow:
                    0 0 25px #fff,
                    0 0 70px #ffe9a3,
                    0 0 110px #fff;
            }
        }

        @keyframes starDrift {
            from { transform: translateX(0); }
            to { transform: translateX(-20px); }
        }

        .gift-transition {
            position: absolute;
            inset: 0;
            background: #080512;
        }

    `;

    document.head.appendChild(style);
}
