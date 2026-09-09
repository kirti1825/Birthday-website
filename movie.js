function startMovieScene() {

    const birthdayAnimation =
        document.getElementById("birthdayAnimation");

    birthdayAnimation.innerHTML = `

        <div class="movie-scene">

            <!-- DARK THEATER -->
            <div class="movie-theater">

                <!-- CINEMA LIGHT -->
                <div class="movie-spotlight"></div>

                <!-- STARS / DUST -->
                <div class="movie-particles">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                </div>

                <!-- CURTAINS -->
                <div class="movie-curtain curtain-left"></div>
                <div class="movie-curtain curtain-right"></div>

                <!-- MAIN MOVIE SCREEN -->
                <div class="movie-screen">

                    <div class="movie-clapper">
                        🎬
                    </div>

                    <div class="movie-title">
                        IF OUR RELATIONSHIP
                        <span>WAS A MOVIE</span>
                    </div>

                    <div class="movie-divider">✦</div>

                    <div class="movie-details">

                        <div class="movie-row">
                            <span class="movie-label">🎭 GENRE</span>
                            <span class="movie-value">
                                Comedy 😂
                            </span>
                        </div>

                        <div class="movie-row">
                            <span class="movie-label">
                                💀 SECONDARY GENRE
                            </span>
                            <span class="movie-value">
                                Emotional damage 💀
                            </span>
                        </div>

                        <div class="movie-row">
                            <span class="movie-label">⏳ RUNTIME</span>
                            <span class="movie-value">
                                Somehow still going
                            </span>
                        </div>

                        <div class="movie-row">
                            <span class="movie-label">
                                👥 MAIN CHARACTERS
                            </span>
                            <span class="movie-value">
                                You + me 💗
                            </span>
                        </div>

                        <div class="movie-row villain-row">
                            <span class="movie-label">
                                😈 VILLAIN
                            </span>
                            <span class="movie-value">
                                Misunderstandings 😭
                            </span>
                        </div>

                        <div class="movie-plot">

                            <div class="movie-plot-label">
                                🎞️ PLOT
                            </div>

                            <div class="movie-plot-text">
                                Two idiots somehow found each other.
                            </div>

                        </div>

                    </div>

                    <div class="movie-rating">

                        <div class="rating-stars">
                            ★ ★ ★ ★ ★
                        </div>

                        <div class="rating-label">
                            RATING
                        </div>

                        <div class="rating-number">
                            10/10
                        </div>

                        <div class="rating-message">
                            Would choose you again. 😭💗
                        </div>

                    </div>

                </div>

                <!-- THEATER FLOOR -->
                <div class="movie-floor"></div>

                <!-- BACK BUTTON -->
                <button class="movie-back-button">
                    ← Back
                </button>

            </div>

        </div>
    `;

    addMovieStyles();

    /* CURTAINS OPEN */

    setTimeout(() => {

        const leftCurtain =
            document.querySelector(".curtain-left");

        const rightCurtain =
            document.querySelector(".curtain-right");

        if (leftCurtain) {
            leftCurtain.classList.add("curtain-open-left");
        }

        if (rightCurtain) {
            rightCurtain.classList.add("curtain-open-right");
        }

    }, 900);


    /* SHOW MOVIE SCREEN */

    setTimeout(() => {

        const screen =
            document.querySelector(".movie-screen");

        if (screen) {
            screen.classList.add("movie-screen-show");
        }

    }, 1700);


    /* VILLAIN SHAKE */

    setTimeout(() => {

        const villain =
            document.querySelector(".villain-row");

        if (villain) {
            villain.classList.add("villain-shake");
        }

    }, 4700);


    /* RATING REVEAL */

    setTimeout(() => {

        const rating =
            document.querySelector(".movie-rating");

        if (rating) {
            rating.classList.add("rating-show");
        }

    }, 5600);


    /* BACK BUTTON */

    document
        .querySelector(".movie-back-button")
        .addEventListener("click", () => {
            startMemoryMenu();
        });
}


/* =========================================
   MOVIE SECTION STYLES
========================================= */

function addMovieStyles() {

    if (document.getElementById("movieStyles")) {
        return;
    }

    const style =
        document.createElement("style");

    style.id = "movieStyles";

    style.textContent = `

        /* MAIN SCENE */

        .movie-scene {
            position: fixed;
            inset: 0;
            overflow: hidden;
            background:
                radial-gradient(
                    circle at 50% 42%,
                    #33204d 0%,
                    #170e2b 38%,
                    #080512 75%,
                    #030207 100%
                );
            color: white;
            z-index: 100;
        }


        .movie-theater {
            position: absolute;
            inset: 0;
            overflow: hidden;
        }


        /* SOFT CINEMA LIGHT */

        .movie-spotlight {
            position: absolute;
            width: 65vw;
            height: 85vh;

            left: 50%;
            top: -25vh;

            transform:
                translateX(-50%)
                rotate(0deg);

            background:
                radial-gradient(
                    ellipse,
                    rgba(255,220,245,.16),
                    rgba(160,110,220,.06) 40%,
                    transparent 72%
                );

            filter: blur(12px);

            opacity: .8;
            pointer-events: none;
        }


        /* PARTICLES */

        .movie-particles {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 2;
        }

        .movie-particles span {
            position: absolute;

            width: 3px;
            height: 3px;

            border-radius: 50%;

            background: rgba(255,255,255,.7);

            box-shadow:
                0 0 8px rgba(255,220,250,.9);

            animation:
                movieParticleFloat
                4s ease-in-out infinite;
        }

        .movie-particles span:nth-child(1) {
            left: 8%;
            top: 20%;
            animation-delay: .2s;
        }

        .movie-particles span:nth-child(2) {
            left: 18%;
            top: 70%;
            animation-delay: 1.1s;
        }

        .movie-particles span:nth-child(3) {
            left: 27%;
            top: 15%;
            animation-delay: 2s;
        }

        .movie-particles span:nth-child(4) {
            left: 38%;
            top: 78%;
            animation-delay: .8s;
        }

        .movie-particles span:nth-child(5) {
            left: 48%;
            top: 12%;
            animation-delay: 2.4s;
        }

        .movie-particles span:nth-child(6) {
            left: 57%;
            top: 72%;
            animation-delay: 1.4s;
        }

        .movie-particles span:nth-child(7) {
            left: 67%;
            top: 24%;
            animation-delay: 3s;
        }

        .movie-particles span:nth-child(8) {
            left: 76%;
            top: 63%;
            animation-delay: .5s;
        }

        .movie-particles span:nth-child(9) {
            left: 88%;
            top: 18%;
            animation-delay: 1.8s;
        }

        .movie-particles span:nth-child(10) {
            left: 93%;
            top: 75%;
            animation-delay: 2.7s;
        }

        .movie-particles span:nth-child(11) {
            left: 14%;
            top: 45%;
            animation-delay: 3.3s;
        }

        .movie-particles span:nth-child(12) {
            left: 84%;
            top: 40%;
            animation-delay: 1.7s;
        }

        .movie-particles span:nth-child(13) {
            left: 44%;
            top: 30%;
            animation-delay: 2.9s;
        }

        .movie-particles span:nth-child(14) {
            left: 72%;
            top: 82%;
            animation-delay: .9s;
        }

        .movie-particles span:nth-child(15) {
            left: 31%;
            top: 55%;
            animation-delay: 2.2s;
        }


        @keyframes movieParticleFloat {

            0%,100% {
                opacity: .2;
                transform: translateY(0) scale(.7);
            }

            50% {
                opacity: 1;
                transform: translateY(-15px) scale(1.2);
            }
        }


        /* =================================
           THEATER CURTAINS
        ================================= */

        .movie-curtain {
            position: absolute;

            top: -5%;
            width: 52%;
            height: 110%;

            z-index: 10;

            background:
                repeating-linear-gradient(
                    90deg,
                    #18071f 0px,
                    #32103e 18px,
                    #120519 38px,
                    #42134c 58px,
                    #19061f 80px
                );

            box-shadow:
                inset 0 0 45px rgba(0,0,0,.8),
                0 0 35px rgba(0,0,0,.8);

            transition:
                transform 2.3s cubic-bezier(.7,0,.2,1);
        }


        .movie-curtain::after {
            content: "";

            position: absolute;

            inset: 0;

            background:
                linear-gradient(
                    90deg,
                    rgba(255,255,255,.05),
                    transparent 30%,
                    rgba(0,0,0,.25)
                );

            pointer-events: none;
        }


        .curtain-left {
            left: -5%;

            border-radius:
                0 0 50% 0;

            transform-origin: left center;
        }


        .curtain-right {
            right: -5%;

            border-radius:
                0 0 0 50%;

            transform-origin: right center;
        }


        .curtain-open-left {
            transform:
                translateX(-92%)
                rotate(-2deg);
        }


        .curtain-open-right {
            transform:
                translateX(92%)
                rotate(2deg);
        }


        /* GOLD CURTAIN EDGE */

        .curtain-left::before,
        .curtain-right::before {

            content: "";

            position: absolute;

            top: 0;
            bottom: 0;

            width: 8px;

            background:
                linear-gradient(
                    to bottom,
                    #e7c27c,
                    #8d632b,
                    #f4d694,
                    #76501d
                );

            box-shadow:
                0 0 12px rgba(255,210,120,.35);
        }


        .curtain-left::before {
            right: 0;
        }

        .curtain-right::before {
            left: 0;
        }


        /* =================================
           MOVIE SCREEN
        ================================= */

        .movie-screen {

            position: absolute;

            left: 50%;
            top: 50%;

            width: min(88vw, 560px);
            max-height: 84vh;

            overflow-y: auto;

            transform:
                translate(-50%, -47%)
                scale(.88);

            opacity: 0;

            padding:
                28px 22px 30px;

            border-radius: 18px;

            background:
                linear-gradient(
                    145deg,
                    rgba(42,25,63,.86),
                    rgba(12,7,25,.91)
                );

            border:
                1px solid rgba(255,220,245,.2);

            box-shadow:
                0 25px 80px rgba(0,0,0,.7),
                0 0 45px rgba(184,120,220,.18),
                inset 0 0 35px rgba(255,255,255,.025);

            backdrop-filter: blur(12px);

            transition:
                opacity 1.2s ease,
                transform 1.2s ease;

            z-index: 5;

            scrollbar-width: none;
        }

        .movie-screen::-webkit-scrollbar {
            display: none;
        }


        .movie-screen-show {

            opacity: 1;

            transform:
                translate(-50%, -50%)
                scale(1);
        }


        /* CLAPPER */

        .movie-clapper {

            text-align: center;

            font-size: 34px;

            margin-bottom: 8px;

            filter:
                drop-shadow(
                    0 0 12px
                    rgba(255,220,245,.45)
                );
        }


        /* TITLE */

        .movie-title {

            text-align: center;

            font-family: Georgia, serif;

            font-size: clamp(23px, 6vw, 34px);

            letter-spacing: 2px;

            line-height: 1.15;

            color: #fff2f8;

            text-shadow:
                0 0 15px rgba(255,210,240,.35);
        }


        .movie-title span {

            display: block;

            margin-top: 5px;

            color: #e9c8f5;
        }


        .movie-divider {

            text-align: center;

            margin:
                15px 0 17px;

            color: #e5b9ec;

            font-size: 18px;

            opacity: .85;
        }


        /* MOVIE DETAILS */

        .movie-details {

            display: flex;

            flex-direction: column;

            gap: 0;
        }


        .movie-row {

            display: flex;

            justify-content: space-between;

            align-items: center;

            gap: 14px;

            padding: 11px 3px;

            border-bottom:
                1px solid
                rgba(255,255,255,.08);

            opacity: 0;

            transform: translateY(12px);

            animation:
                movieRowReveal
                .7s ease forwards;
        }


        .movie-row:nth-child(1) {
            animation-delay: 1.9s;
        }

        .movie-row:nth-child(2) {
            animation-delay: 2.2s;
        }

        .movie-row:nth-child(3) {
            animation-delay: 2.5s;
        }

        .movie-row:nth-child(4) {
            animation-delay: 2.8s;
        }

        .movie-row:nth-child(5) {
            animation-delay: 3.1s;
        }


        @keyframes movieRowReveal {

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }


        .movie-label {

            font-size: 12px;

            letter-spacing: 1px;

            color: rgba(255,255,255,.68);

            flex-shrink: 0;
        }


        .movie-value {

            text-align: right;

            font-family: Georgia, serif;

            font-size: 15px;

            color: #f9dff4;
        }


        /* VILLAIN */

        .villain-row {
            transition:
                transform .12s ease;
        }

        .villain-shake {

    opacity: 1 !important;

    animation:
        villainShake
        .55s ease;
}


        @keyframes villainShake {

            0%,100% {
                transform: translateX(0);
            }

            20% {
                transform: translateX(-5px);
            }

            40% {
                transform: translateX(5px);
            }

            60% {
                transform: translateX(-4px);
            }

            80% {
                transform: translateX(3px);
            }
        }


        /* PLOT */

        .movie-plot {

            margin-top: 17px;

            padding: 16px;

            text-align: center;

            border-radius: 15px;

            background:
                rgba(255,255,255,.045);

            border:
                1px solid
                rgba(255,210,240,.1);
        }


        .movie-plot-label {

            font-size: 11px;

            letter-spacing: 2px;

            color: rgba(255,255,255,.58);

            margin-bottom: 8px;
        }


        .movie-plot-text {

            font-family: Georgia, serif;

            font-size: 18px;

            line-height: 1.45;

            color: #ffeaf7;

            opacity: 0;

            animation:
                plotReveal
                1s ease forwards;

            animation-delay: 3.7s;
        }


        @keyframes plotReveal {

            from {
                opacity: 0;
                transform: translateY(8px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }


        /* =================================
           RATING
        ================================= */

        .movie-rating {

            margin-top: 24px;

            padding-top: 19px;

            text-align: center;

            border-top:
                1px solid
                rgba(255,255,255,.1);

            opacity: 0;

            transform: scale(.85);

            transition:
                opacity .9s ease,
                transform .9s ease;
        }


        .rating-show {

            opacity: 1;

            transform: scale(1);
        }


        .rating-stars {

            font-size: 16px;

            letter-spacing: 5px;

            color: #f7d27f;

            text-shadow:
                0 0 12px rgba(247,210,127,.55);
        }


        .rating-label {

            margin-top: 8px;

            font-size: 11px;

            letter-spacing: 3px;

            color: rgba(255,255,255,.65);
        }


        .rating-number {

            margin-top: 2px;

            font-family: Georgia, serif;

            font-size: 48px;

            font-weight: bold;

            color: #ffe4f4;

            text-shadow:
                0 0 15px rgba(255,210,240,.55),
                0 0 35px rgba(200,130,230,.35);
        }


        .rating-message {

            margin-top: 5px;

            font-family: Georgia, serif;

            font-style: italic;

            font-size: 17px;

            color: #efcde9;
        }


        /* =================================
           THEATER FLOOR
        ================================= */

        .movie-floor {

            position: absolute;

            bottom: -10%;

            left: 0;

            width: 100%;

            height: 22%;

            background:
                linear-gradient(
                    to top,
                    rgba(0,0,0,.95),
                    rgba(20,9,29,.55),
                    transparent
                );

            pointer-events: none;

            z-index: 4;
        }


        /* =================================
           BACK BUTTON
        ================================= */

        .movie-back-button {

            position: absolute;

            bottom: 18px;

            left: 50%;

            transform: translateX(-50%);

            z-index: 20;

            padding:
                10px 20px;

            border-radius: 999px;

            border:
                1px solid
                rgba(255,255,255,.18);

            background:
                rgba(20,10,30,.75);

            color: #f8dff1;

            font-size: 13px;

            backdrop-filter: blur(8px);

            cursor: pointer;

            box-shadow:
                0 0 20px rgba(180,120,220,.12);
        }


        .movie-back-button:active {

            transform:
                translateX(-50%)
                scale(.95);
        }


        /* MOBILE */

        @media (max-width: 500px) {

            .movie-screen {

                width: 88vw;

                padding:
                    22px 17px 26px;
            }

            .movie-row {

                align-items: flex-start;
            }

            .movie-label {

                font-size: 10px;
            }

            .movie-value {

                font-size: 13px;
            }

            .movie-plot-text {

                font-size: 16px;
            }

            .rating-number {

                font-size: 42px;
            }

            .movie-back-button {

                bottom: 10px;
            }
        }

    `;

    document.head.appendChild(style);
}
