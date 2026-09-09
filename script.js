const enterButton = document.getElementById("enterButton");
const openingScreen = document.querySelector(".opening-screen");
const birthdayAnimation = document.getElementById("birthdayAnimation");

enterButton.addEventListener("click", () => {
    enterButton.disabled = true;
    enterButton.textContent = "OPENING...";

    openingScreen.style.transition = "opacity 1.8s ease";
    openingScreen.style.opacity = "0";

    setTimeout(() => {
        openingScreen.style.display = "none";
        birthdayAnimation.classList.remove("hidden");

        birthdayAnimation.innerHTML = `
            <div class="gate-scene">

                <!-- NIGHT SKY -->
                <div class="night-sky">

                    <div class="moon"></div>

                    <div class="stars">
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

                <!-- GROUND -->
                <div class="ground"></div>

                <!-- BOY -->
                <div class="character">
                    <img src="1788853009972.png" alt="">
                </div>

                <!-- BIG WOODEN GATE -->
                <div class="gate-area">

                    <div class="gate">

                        <div class="gate-roof">
                            <div class="roof-detail"></div>
                        </div>

                        <div class="gate-left">
                            <div class="wood-panel"></div>
                            <div class="wood-panel"></div>
                            <div class="wood-panel"></div>

                            <div class="metal-decoration top"></div>
                            <div class="metal-decoration bottom"></div>
                        </div>

                        <div class="gate-right">
                            <div class="wood-panel"></div>
                            <div class="wood-panel"></div>
                            <div class="wood-panel"></div>

                            <div class="metal-decoration top"></div>
                            <div class="metal-decoration bottom"></div>
                        </div>

                        <div class="gate-handle"></div>

                    </div>

                    <div class="knock-text">
                        knock... knock...
                    </div>

                </div>

                <!-- CENTER WELCOME MESSAGE -->
                <div class="welcome-message">
                    Welcome to the party, my cutiee...!! 💗
                </div>

            </div>
        `;

        addGateStyles();

        /*
         * BOY WALKS TOWARD THE GATE
         */
        setTimeout(() => {
            document
                .querySelector(".character")
                .classList.add("walking");
        }, 700);


        /*
         * KNOCK
         */
        setTimeout(() => {

            const gate = document.querySelector(".gate");
            const knockText = document.querySelector(".knock-text");

            gate.classList.add("knocking");
            knockText.classList.add("show");

            setTimeout(() => {
                gate.classList.remove("knocking");
            }, 700);

        }, 4300);


        /*
         * WELCOME MESSAGE
         */
        setTimeout(() => {
            document
                .querySelector(".welcome-message")
                .classList.add("show");
        }, 4700);


        /*
         * KEEP SCREEN FOR A FEW SECONDS,
         * THEN OPEN THE GATE AUTOMATICALLY
         */
        setTimeout(() => {

    const gate = document.querySelector(".gate");

    gate.classList.add("opening");

    setTimeout(() => {

        startPartyScene();

    }, 1700);

}, 7800);

    }, 1800);
});


/*
==================================================
GATE SCENE STYLES
==================================================
*/

function addGateStyles() {

    const style = document.createElement("style");

    style.innerHTML = `

    .gate-scene {
        position: fixed;
        inset: 0;
        overflow: hidden;
        background: #030207;
        font-family: Georgia, "Times New Roman", serif;
    }


    /* =========================
       NIGHT SKY
    ========================= */

    .night-sky {
        position: absolute;
        inset: 0;

        background:
            radial-gradient(
                circle at 50% 40%,
                rgba(67, 48, 75, 0.25),
                transparent 42%
            ),
            radial-gradient(
                circle at 75% 15%,
                rgba(80, 55, 90, 0.16),
                transparent 30%
            ),
            linear-gradient(
                to bottom,
                #020208 0%,
                #070511 55%,
                #100a13 100%
            );

        animation: skyReveal 3s ease forwards;
    }


    @keyframes skyReveal {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }


    /* =========================
       MOON
    ========================= */

    .moon {
        position: absolute;

        width: 105px;
        height: 105px;

        right: 13%;
        top: 10%;

        border-radius: 50%;

        background:
            radial-gradient(
                circle at 35% 30%,
                #fffdfb,
                #eee6e6 65%,
                #d7ced1
            );

        box-shadow:
            0 0 20px rgba(255,255,255,.22),
            0 0 55px rgba(255,235,250,.12);

        animation: moonGlow 4s ease-in-out infinite alternate;
    }


    @keyframes moonGlow {

        from {
            box-shadow:
                0 0 18px rgba(255,255,255,.20),
                0 0 40px rgba(255,235,250,.08);
        }

        to {
            box-shadow:
                0 0 28px rgba(255,255,255,.32),
                0 0 70px rgba(255,235,250,.16);
        }
    }


    /* =========================
       TWINKLING STARS
    ========================= */

    .stars {
        position: absolute;
        inset: 0;
    }

    .stars span {
        position: absolute;

        width: 3px;
        height: 3px;

        border-radius: 50%;

        background: white;

        box-shadow: 0 0 7px white;

        animation:
            twinkle 2.5s ease-in-out infinite alternate;
    }

    .stars span:nth-child(1)  { top: 12%; left: 8%;  animation-delay: .2s; }
    .stars span:nth-child(2)  { top: 20%; left: 18%; animation-delay: 1s; }
    .stars span:nth-child(3)  { top: 8%;  left: 32%; animation-delay: .5s; }
    .stars span:nth-child(4)  { top: 27%; left: 42%; animation-delay: 1.6s; }
    .stars span:nth-child(5)  { top: 14%; left: 55%; animation-delay: .8s; }
    .stars span:nth-child(6)  { top: 31%; left: 65%; animation-delay: 1.3s; }
    .stars span:nth-child(7)  { top: 18%; left: 78%; animation-delay: .4s; }
    .stars span:nth-child(8)  { top: 38%; left: 88%; animation-delay: 1.8s; }
    .stars span:nth-child(9)  { top: 43%; left: 12%; animation-delay: 1.1s; }
    .stars span:nth-child(10) { top: 36%; left: 28%; animation-delay: .6s; }
    .stars span:nth-child(11) { top: 45%; left: 52%; animation-delay: 1.5s; }
    .stars span:nth-child(12) { top: 50%; left: 72%; animation-delay: .9s; }
    .stars span:nth-child(13) { top: 25%; left: 94%; animation-delay: 1.7s; }
    .stars span:nth-child(14) { top: 10%; left: 67%; animation-delay: .3s; }
    .stars span:nth-child(15) { top: 55%; left: 38%; animation-delay: 1.4s; }
    .stars span:nth-child(16) { top: 33%; left: 5%;  animation-delay: .7s; }
    .stars span:nth-child(17) { top: 48%; left: 82%; animation-delay: 1.9s; }
    .stars span:nth-child(18) { top: 16%; left: 46%; animation-delay: 1.2s; }
    .stars span:nth-child(19) { top: 29%; left: 72%; animation-delay: .1s; }
    .stars span:nth-child(20) { top: 41%; left: 59%; animation-delay: 1.6s; }


    @keyframes twinkle {

        0% {
            opacity: .15;
            transform: scale(.7);
        }

        50% {
            opacity: 1;
            transform: scale(1.5);
        }

        100% {
            opacity: .25;
            transform: scale(.8);
        }
    }


    /* =========================
       GROUND
    ========================= */

    .ground {
        position: absolute;

        bottom: 0;
        left: 0;

        width: 100%;
        height: 28%;

        background:
            linear-gradient(
                to top,
                #020103,
                rgba(5,3,8,.92),
                transparent
            );
    }


    /* =========================
       CHARACTER
    ========================= */

    .character {

        position: absolute;

        left: -220px;
        bottom: 10%;

        width: 170px;

        z-index: 10;

        transition:
            left 3.6s cubic-bezier(.15,.7,.2,1);
    }


    .character img {
        width: 100%;
        height: auto;
        display: block;
    }


    .character.walking {

        left: calc(50% - 300px);
    }


    /* =========================
       BIG WOODEN GATE
    ========================= */

    .gate-area {

        position: absolute;

        left: 50%;
        bottom: 7%;

        transform: translateX(-50%);

        z-index: 8;
    }


    .gate {

        position: relative;

        width: 440px;
        height: 510px;

        transform-origin: bottom center;

        transition: transform 1.7s ease;
    }


    /* WOODEN DOOR */

    .gate-left,
    .gate-right {

        position: absolute;

        bottom: 0;

        width: 210px;
        height: 410px;

        overflow: hidden;

        border: 6px solid #352017;

        box-sizing: border-box;

        background:

            repeating-linear-gradient(
                90deg,
                #4b2b1c 0px,
                #5b3623 28px,
                #3d2418 32px,
                #623b26 65px
            );

        box-shadow:
            inset 0 0 35px rgba(0,0,0,.65),
            0 12px 30px rgba(0,0,0,.5);

        transition:
            transform 1.7s cubic-bezier(.2,.7,.2,1);
    }


    .gate-left {
        left: 0;
        transform-origin: left center;
    }


    .gate-right {
        right: 0;
        transform-origin: right center;
    }


    /* WOOD PANELS */

    .wood-panel {

        width: 72%;
        height: 80px;

        margin: 28px auto;

        border: 3px solid #24150f;

        background:
            linear-gradient(
                90deg,
                #613a25,
                #70442a,
                #4a2b1b
            );

        box-shadow:
            inset 0 0 12px rgba(0,0,0,.45);
    }


    /* METAL DECORATION */

    .metal-decoration {

        position: absolute;

        left: 50%;

        width: 90px;
        height: 90px;

        transform: translateX(-50%) rotate(45deg);

        border: 4px solid #8a6b50;

        box-shadow:
            0 0 8px rgba(190,160,120,.15);
    }


    .metal-decoration.top {
        top: 65px;
    }


    .metal-decoration.bottom {
        bottom: 50px;
    }


    /* GATE ROOF */

    .gate-roof {

        position: absolute;

        top: 0;
        left: 0;

        width: 440px;
        height: 110px;

        background:
            linear-gradient(
                135deg,
                #291b16,
                #5a3826,
                #281a15
            );

        clip-path:
            polygon(
                50% 0,
                100% 55%,
                100% 100%,
                0 100%,
                0 55%
            );

        border: 5px solid #382319;

        box-sizing: border-box;

        box-shadow:
            0 10px 20px rgba(0,0,0,.5);
    }


    .roof-detail {

        position: absolute;

        width: 28px;
        height: 28px;

        left: 50%;
        top: 28px;

        transform:
            translateX(-50%)
            rotate(45deg);

        border: 4px solid #9b795c;
    }


    /* GATE HANDLE */

    .gate-handle {

        position: absolute;

        width: 18px;
        height: 18px;

        left: 50%;
        bottom: 47%;

        transform: translateX(-50%);

        border-radius: 50%;

        background: #b08a65;

        box-shadow:
            0 0 10px rgba(180,140,100,.3);

        z-index: 5;
    }


    /* =========================
       KNOCK
    ========================= */

    .knocking {

        animation:
            gateShake .12s linear 6;
    }


    @keyframes gateShake {

        0% {
            transform: translateX(0);
        }

        25% {
            transform: translateX(-4px);
        }

        50% {
            transform: translateX(5px);
        }

        75% {
            transform: translateX(-4px);
        }

        100% {
            transform: translateX(0);
        }
    }


    .knock-text {

        position: absolute;

        top: -42px;

        width: 100%;

        text-align: center;

        color: #e9dcd5;

        font-family:
            Georgia,
            "Times New Roman",
            serif;

        font-size: 17px;

        letter-spacing: 2px;

        opacity: 0;

        transition:
            opacity .7s ease;
    }


    .knock-text.show {
        opacity: .9;
    }


    /* =========================
       CENTER WELCOME MESSAGE
    ========================= */

    .welcome-message {

        position: absolute;

        z-index: 30;

        left: 50%;
        top: 50%;

        transform:
            translate(-50%, -50%)
            translateY(20px);

        width: 90%;

        text-align: center;

        color: #fff5f8;

        font-family:
            "Brush Script MT",
            "Segoe Script",
            cursive;

        font-size: clamp(28px, 5vw, 55px);

        line-height: 1.2;

        letter-spacing: 1px;

        text-shadow:
            0 0 8px rgba(255,220,235,.35),
            0 0 25px rgba(255,180,210,.15);

        opacity: 0;

        transition:
            opacity 1.2s ease,
            transform 1.2s ease;
    }


    .welcome-message.show {

        opacity: 1;

        transform:
            translate(-50%, -50%)
            translateY(0);
    }


    /* =========================
       GATE OPENING
    ========================= */

    .gate.opening .gate-left {

        transform:
            perspective(900px)
            rotateY(-82deg);
    }


    .gate.opening .gate-right {

        transform:
            perspective(900px)
            rotateY(82deg);
    }


    /* =========================
       MOBILE
    ========================= */

    @media (max-width: 600px) {

        .moon {

            width: 70px;
            height: 70px;

            right: 10%;
            top: 9%;
        }


        .character {

            width: 125px;
            bottom: 10%;
        }


        .character.walking {

            left: calc(50% - 205px);
        }


        .gate {

            width: 310px;
            height: 390px;
        }


        .gate-roof {

            width: 310px;
            height: 85px;
        }


        .gate-left,
        .gate-right {

            width: 150px;
            height: 315px;
        }


        .wood-panel {

            height: 60px;
            margin: 20px auto;
        }


        .metal-decoration {

            width: 55px;
            height: 55px;
        }


        .welcome-message {

            font-size: 31px;
        }
    }

    `;

    document.head.appendChild(style);
}
/* =========================
   PART 2 — NIGHT PARTY
========================= */

function startPartyScene() {

    const scene = document.getElementById("birthdayAnimation");

    scene.innerHTML = `
        <div class="party-scene">

            <!-- DARK NIGHT SKY -->
            <div class="party-stars"></div>
            <div class="party-moon"></div>

            <!-- FLOATING LANTERNS -->
            <div class="lanterns">
                <div class="lantern l1"></div>
                <div class="lantern l2"></div>
                <div class="lantern l3"></div>
                <div class="lantern l4"></div>
                <div class="lantern l5"></div>
                <div class="lantern l6"></div>
                <div class="lantern l7"></div>
            </div>

            <!-- GROUND -->
            <div class="party-ground"></div>

            
            <!-- TABLE -->
            <div class="party-table">

                <div class="table-top"></div>

                <div class="table-cloth"></div>

                <!-- CAKE -->
                <div class="cake">

                    <div class="candle">
                        <div class="flame"></div>
                    </div>

                    <div class="cake-top"></div>
                    <div class="cake-body"></div>
                    <div class="cake-cream"></div>

                </div>

            </div>

            <!-- BOTH OF YOU -->
            <div class="party-characters">

                <img
                    src="IMG_20260908_213133.png"
                    class="girl-party"
                    alt=""
                >

                <img
                    src="IMG_20260908_212512.png"
                    class="boy-party"
                    alt=""
                >

            </div>

            <!-- SOFT LIGHT AROUND PARTY -->
            <div class="party-glow"></div>

            <!-- FADE TO NEXT PAGE -->
            <div class="party-fade"></div>

        </div>
    `;

    addPartyStyles();

    /* YOU ENTER FIRST */
    setTimeout(() => {
        document.querySelector(".girl-party").classList.add("party-character-show");
    }, 300);

    /* BOY ENTERS AFTER YOU */
    setTimeout(() => {
        document.querySelector(".boy-party").classList.add("party-character-show");
    }, 900);

    /* LITTLE CELEBRATION / DANCE */
    setTimeout(() => {
        document
            .querySelector(".party-characters")
            .classList.add("little-dance");
    }, 3000);

    /* STOP DANCING */
    setTimeout(() => {
        document
            .querySelector(".party-characters")
            .classList.remove("little-dance");
    }, 5200);

    /* SLOW FADE */
    setTimeout(() => {
        document
            .querySelector(".party-fade")
            .classList.add("fade-start");
    }, 6200);

    /*
       NEXT PAGE WILL BE CONNECTED HERE
       AFTER WE BUILD THE 5 MYSTERIOUS CARDS.
    */

    setTimeout(() => {
        startGiftScene();
    }, 8200);
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
                    circle at 50% 45%,
                    #252d59 0%,
                    #11162f 42%,
                    #070a19 75%,
                    #02030a 100%
                );

            animation: partyAppear 1.8s ease forwards;
        }


        /* =====================
           STARS
        ===================== */

        .party-stars {
            position: absolute;
            inset: 0;

            background-image:
                radial-gradient(circle, white 1px, transparent 1.5px),
                radial-gradient(circle, white 1px, transparent 1.5px),
                radial-gradient(circle, white 1px, transparent 1.5px);

            background-size:
                95px 95px,
                150px 150px,
                210px 210px;

            background-position:
                10px 20px,
                50px 100px,
                130px 40px;

            opacity: .7;

            animation: starsTwinkle 4s ease-in-out infinite alternate;
        }


        /* =====================
           MOON
        ===================== */

        .party-moon {
            position: absolute;

            top: 9%;
            right: 12%;

            width: 78px;
            height: 78px;

            border-radius: 50%;

            background: #fff6d1;

            box-shadow:
                0 0 20px rgba(255,246,209,.7),
                0 0 55px rgba(255,230,160,.35),
                0 0 100px rgba(255,220,150,.15);
        }


        /* =====================
           LANTERNS
        ===================== */

        .lanterns {
            position: absolute;
            inset: 0;

            pointer-events: none;
        }

        .lantern {
            position: absolute;

            width: 24px;
            height: 33px;

            border-radius:
                50% 50% 45% 45%;

            background:
                radial-gradient(
                    circle,
                    #fff5bd 0%,
                    #ffc45e 40%,
                    #ff9650 68%,
                    transparent 100%
                );

            box-shadow:
                0 0 12px rgba(255,205,100,.8),
                0 0 35px rgba(255,170,70,.35);

            opacity: 0;

            animation: lanternUp 13s linear infinite;
        }

        .lantern::after {
            content: "";

            position: absolute;

            left: 8px;
            bottom: -5px;

            width: 8px;
            height: 7px;

            border-radius: 50%;

            background: #ffd36d;

            box-shadow: 0 0 10px #ffb64d;
        }

        .l1 {
            left: 10%;
            bottom: -50px;
            animation-delay: 0s;
        }

        .l2 {
            left: 23%;
            bottom: -80px;
            animation-delay: 4s;
        }

        .l3 {
            left: 38%;
            bottom: -40px;
            animation-delay: 7s;
        }

        .l4 {
            left: 53%;
            bottom: -100px;
            animation-delay: 2s;
        }

        .l5 {
            left: 68%;
            bottom: -70px;
            animation-delay: 5s;
        }

        .l6 {
            left: 81%;
            bottom: -50px;
            animation-delay: 8s;
        }

        .l7 {
            left: 91%;
            bottom: -90px;
            animation-delay: 3s;
        }


        @keyframes lanternUp {

            0% {
                transform:
                    translateY(0)
                    translateX(0)
                    scale(.7);

                opacity: 0;
            }

            12% {
                opacity: .85;
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


        /* =====================
           GROUND
        ===================== */

        .party-ground {
            position: absolute;

            left: 0;
            right: 0;
            bottom: 0;

            height: 38%;

            background:
                radial-gradient(
                    ellipse at center top,
                    rgba(150,110,180,.28),
                    transparent 65%
                ),
                linear-gradient(
                    180deg,
                    rgba(30,24,48,.15),
                    rgba(3,4,12,.85)
                );
        }


        /* =====================
           BALLOONS
        ===================== */

        .balloons {
            position: absolute;

            bottom: 5%;

            display: flex;
            align-items: flex-end;

            gap: 5px;

            z-index: 5;
        }

        .balloons.left {
            left: 4%;
        }

        .balloons.right {
            right: 4%;
        }

        .balloon {
            position: relative;

            display: block;

            width: 36px;
            height: 48px;

            border-radius: 50%;

            box-shadow:
                0 8px 15px rgba(0,0,0,.3),
                inset -6px -8px 12px rgba(0,0,0,.12);

            animation:
                balloonFloat 2.5s ease-in-out infinite alternate;
        }

        .balloon::after {
            content: "";

            position: absolute;

            left: 50%;
            bottom: -23px;

            width: 1px;
            height: 25px;

            background: rgba(255,255,255,.35);
        }

        .pink {
            background:
                radial-gradient(
                    circle at 30% 25%,
                    #fff,
                    #ff9ec8 35%,
                    #d95791
                );
        }

        .yellow {
            background:
                radial-gradient(
                    circle at 30% 25%,
                    #fff,
                    #ffe98b 35%,
                    #e7a93d
                );
        }

        .blue {
            background:
                radial-gradient(
                    circle at 30% 25%,
                    #fff,
                    #91d9ff 35%,
                    #548bc8
                );
        }

        .purple {
            background:
                radial-gradient(
                    circle at 30% 25%,
                    #fff,
                    #c8a1ff 35%,
                    #8056b7
                );
        }

        .balloon:nth-child(2) {
            width: 31px;
            height: 42px;
            animation-delay: .4s;
        }

        .balloon:nth-child(3) {
            width: 41px;
            height: 54px;
            animation-delay: .8s;
        }

        .balloon:nth-child(4) {
            width: 30px;
            height: 41px;
            animation-delay: 1.2s;
        }

        @keyframes balloonFloat {

            from {
                transform:
                    translateY(2px)
                    rotate(-3deg);
            }

            to {
                transform:
                    translateY(-8px)
                    rotate(3deg);
            }
        }


        /* =====================
           TABLE
        ===================== */

        .party-table {
            position: absolute;

            left: 50%;
            bottom: 12%;

            transform: translateX(-50%);

            width: 175px;
            height: 120px;

            z-index: 7;
        }

        .table-top {
            position: absolute;

            top: 0;

            width: 100%;
            height: 35px;

            border-radius: 50%;

            background:
                linear-gradient(
                    180deg,
                    #d99bc8,
                    #8c547f
                );

            box-shadow:
                0 8px 20px rgba(0,0,0,.4);
        }

        .table-cloth {
            position: absolute;

            top: 16px;
            left: 15px;
            right: 15px;

            height: 100px;

            background:
                linear-gradient(
                    90deg,
                    #633b5d,
                    #a56791,
                    #633b5d
                );

            clip-path:
                polygon(
                    0 0,
                    100% 0,
                    88% 100%,
                    12% 100%
                );
        }


        /* =====================
           CAKE
        ===================== */

        .cake {
            position: absolute;

            left: 50%;
            top: -42px;

            transform: translateX(-50%);

            width: 90px;
            height: 85px;

            z-index: 20;
        }

        .cake-body {
            position: absolute;

            left: 5px;
            bottom: 5px;

            width: 60px;
            height: 38px;

            border-radius: 8px 8px 12px 12px;

            background:
                linear-gradient(
                    180deg,
                    #f2b9d7,
                    #b96199
                );
        }

        .cake-top {
            position: absolute;

            left: 4px;
            top: 22px;

            width: 62px;
            height: 25px;

            border-radius: 50%;

            background: #ffe1ed;

            z-index: 2;
        }

        .cake-cream {
            position: absolute;

            left: 10px;
            top: 37px;

            width: 52px;
            height: 10px;

            border-radius: 50%;

            background: #fff1f8;

            z-index: 3;
        }

        .candle {
            position: absolute;

            left: 50%;
            top: 3px;

            transform: translateX(-50%);

            width: 6px;
            height: 25px;

            background: #f8e5aa;

            z-index: 5;
        }

        .flame {
            position: absolute;

            left: 50%;
            top: -15px;

            transform: translateX(-50%);

            width: 10px;
            height: 15px;

            border-radius: 50%;

            background: #ffd36b;

            box-shadow:
                0 0 12px #ffcc66,
                0 0 25px rgba(255,160,70,.6);

            animation: flameMove .6s infinite alternate;
        }

        @keyframes flameMove {

            from {
                transform:
                    translateX(-50%)
                    scale(.9);
            }

            to {
                transform:
                    translateX(-50%)
                    scale(1.15);
            }
        }


        /* =====================
           CHARACTERS
        ===================== */

        .party-characters {
            position: absolute;

            left: 50%;
            bottom: 9%;

            transform: translateX(-50%);

            width: 330px;
            height: 260px;

            z-index: 8;
        }

        .party-characters img {
            position: absolute;

            bottom: 0;

            width: 125px;
            height: auto;

            opacity: 0;

            transition:
                opacity 1.2s ease,
                transform 1.2s cubic-bezier(.2,.8,.2,1);
        }

        .girl-party {
            left: 5px;
            transform: translateX(-70px);
        }

        .boy-party {
            right: 5px;
            transform: translateX(70px);
        }

        .party-character-show {
            opacity: 1 !important;

            transform: translateX(0) !important;
        }


        /* =====================
           LITTLE DANCE
        ===================== */

        .little-dance .girl-party {
            animation:
                girlLittleDance .8s ease-in-out infinite alternate;
        }

        .little-dance .boy-party {
            animation:
                boyLittleDance .8s ease-in-out infinite alternate-reverse;
        }

        @keyframes girlLittleDance {

            from {
                transform:
                    translateY(0)
                    rotate(-3deg);
            }

            to {
                transform:
                    translateY(-10px)
                    rotate(3deg);
            }
        }

        @keyframes boyLittleDance {

            from {
                transform:
                    translateY(0)
                    rotate(3deg);
            }

            to {
                transform:
                    translateY(-10px)
                    rotate(-3deg);
            }
        }


        /* =====================
           SOFT PARTY LIGHT
        ===================== */

        .party-glow {
            position: absolute;

            left: 50%;
            bottom: 18%;

            width: 330px;
            height: 180px;

            transform: translateX(-50%);

            background:
                radial-gradient(
                    ellipse,
                    rgba(238,176,220,.2),
                    transparent 70%
                );

            filter: blur(10px);

            pointer-events: none;
        }


        /* =====================
           FADE
        ===================== */

        .party-fade {
            position: absolute;

            inset: 0;

            background: #03030a;

            opacity: 0;

            z-index: 50;

            pointer-events: none;

            transition:
                opacity 2s ease;
        }

        .fade-start {
            opacity: 1;
        }


        /* =====================
           ENTRANCE
        ===================== */

        @keyframes partyAppear {

            from {
                opacity: 0;
                transform: scale(1.04);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes starsTwinkle {

            from {
                opacity: .35;
            }

            to {
                opacity: .85;
            }
        }

    `;

    document.head.appendChild(style);
}


/* =========================
   TEMPORARY PART 3
========================= */

function startGiftScene() {

    const scene = document.getElementById("birthdayAnimation");

    scene.innerHTML = `
        <div style="
            position:absolute;
            inset:0;
            background:#080512;
        "></div>
    `;
}
