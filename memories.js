/* =========================================
   MEMORIES SECTION
   ========================================= */

function startMemoriesScene() {

    const birthdayAnimation =
        document.getElementById("birthdayAnimation");

    birthdayAnimation.innerHTML = `
        <div class="memories-password-scene">

            <div class="memories-password-content">

                <div class="private-lock">🔐</div>

                <div class="private-title">
                    PRIVATE PAGE
                </div>

                <div class="private-subtitle">
                    Some things aren't meant for everyone…
                </div>

                <input
                    type="password"
                    id="memoriesPassword"
                    class="memories-password-input"
                    placeholder="Enter password"
                    autocomplete="off"
                >

                <button
                    class="memories-unlock-btn"
                    onclick="unlockMemories()"
                >
                    UNLOCK →
                </button>

                <div
                    id="memoriesWrongPassword"
                    class="memories-wrong-password"
                ></div>

                <button
                    class="memories-back-btn"
                    onclick="startMemoryMenu()"
                >
                    ← Back
                </button>

            </div>

        </div>
    `;

    addMemoriesPasswordStyles();
}


/* =========================================
   PASSWORD
   ========================================= */

function unlockMemories() {

    const password =
        document.getElementById("memoriesPassword").value;

    const wrong =
        document.getElementById("memoriesWrongPassword");

    if (password === "Kiyan") {

        startMemoriesBook();

    } else {

        wrong.textContent =
            "Nope. Nice try 😂🔒";

        const input =
            document.getElementById("memoriesPassword");

        input.classList.remove("password-shake");

        void input.offsetWidth;

        input.classList.add("password-shake");
    }
}


/* =========================================
   MAIN MEMORIES PAGE
   ========================================= */

function startMemoriesBook() {

    const birthdayAnimation =
        document.getElementById("birthdayAnimation");

    birthdayAnimation.innerHTML = `

        <div class="memories-page">

            <!-- BACKGROUND PAPER -->

            <div class="paper-cracks"></div>
            <div class="paper-noise"></div>
            <div class="paper-glow"></div>

            <!-- FALLING PETALS / LEAVES -->

            <div class="falling-leaves">

                <span>🍂</span>
                <span>🍁</span>
                <span>🍂</span>
                <span>🍁</span>
                <span>🍂</span>
                <span>🍁</span>
                <span>🍂</span>
                <span>🍁</span>
                <span>🍂</span>
                <span>🍁</span>

            </div>


            <!-- LITTLE DUST PARTICLES -->

            <div class="paper-dust">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>


            <!-- SCROLLABLE PAPER -->

            <div class="memories-scroll">

                <div class="memory-paper">


                    <!-- =================================
                         FIRST PART
                         ================================= -->

                    <section class="memory-section">

                        <div class="memory-small-title">
                            ✦ A FEW THINGS I REMEMBER ✦
                        </div>

                        <h1>
                            Things You Don't Know
                            I Remember… 🍂
                        </h1>

                        <div class="memory-divider">
                            ✦
                        </div>


                        <!-- MEMORY 1 -->

                        <article class="memory-entry">

                            <h2>
                                The JEE day…
                            </h2>

                            <p>
                                I still remember how I forgot to tell you
                                how I was going back home, and you ended up
                                waiting for me for so long. I couldn't properly
                                tell you anything at that time, and honestly,
                                I still feel guilty about making you wait
                                like that. 🥺
                            </p>

                        </article>


                        <!-- MEMORY 2 -->

                        <article class="memory-entry">

                            <h2>
                                The Teacher's Day moment…
                            </h2>

                            <p>
                                I still feel guilty for forgetting you weren't
                                feeling well and asking you to play tug-of-war.
                                I'm sorry. 🫂
                            </p>

                        </article>


                        <!-- MEMORY 3 -->

                        <article class="memory-entry">

                            <h2>
                                That jealous moment…
                            </h2>

                            <p>
                                I don't think I've ever forgotten that moment
                                when, at tuition, Shreya was reacting to
                                something, and me and Anjali got angry and
                                went towards the garden area. When we came
                                back, you were talking to Shreya and smiling,
                                and honestly… I felt really jealous that time.
                            </p>

                            <p>
                                And then you made that paracetamol joke in
                                front of sir, and when Shreya laughed at it
                                too, I got even more annoyed. 😭 I don't even
                                know whether I was more angry at you or at her,
                                but I definitely remember how jealous I felt
                                seeing you both talking and laughing after
                                everything that had happened.
                            </p>

                        </article>

                    </section>


                    <!-- =================================
                         SECOND PART
                         ================================= -->

                    <section class="memory-section second-memory-section">

                        <div class="memory-small-title">
                            ✦ THE THINGS I NEVER SAY OUT LOUD ✦
                        </div>

                        <h1>
                            Things I Would Never Say
                            on Your Face… 🤐
                        </h1>

                        <div class="memory-divider">
                            ✦
                        </div>


                        <!-- THING 1 -->

                        <article class="memory-entry">

                            <h2>
                                No matter what happens…
                            </h2>

                            <p>
                                No matter what situation we're in, or how
                                things between us may change, one thing will
                                always remain the same for me—you matter.
                                More than anything else.
                            </p>

                            <p>
                                So please remember that I'll always be there
                                for you. Whenever you need me, for anything
                                at all, please don't ever hesitate to come
                                to me. 🫂
                            </p>

                        </article>


                        <!-- THING 2 -->

                        <article class="memory-entry">

                            <h2>
                                I need you too…
                            </h2>

                            <p>
                                I don't think you could ever imagine just how
                                much I need you too. I need you in more moments
                                than I could ever explain, in ways I probably
                                could never say out loud.
                            </p>

                            <p>
                                I won't always be able to tell you this, and
                                honestly, I probably never will… but I really
                                hope you'll always be there for me too. 💗
                            </p>

                        </article>


                        <!-- THING 3 -->

                        <article class="memory-entry">

                            <h2>
                                Please always stay safe…
                            </h2>

                            <p>
                                Please, please always stay fine and safe.
                                Because your happiness and your safety matter
                                to me more than almost anything else.
                            </p>

                            <p>
                                And I think, somewhere deep down, you already
                                know that. So please take care of yourself,
                                okay? 🫂💗
                            </p>

                        </article>


                        <!-- FINAL LINE -->

                        <div class="memories-final-line">
                            Some things you notice only when you really care. 💗
                        </div>

                    </section>

                </div>

            </div>


            <!-- BACK BUTTON -->

            <button
                class="memories-page-back"
                onclick="startMemoryMenu()"
            >
                ← Back
            </button>

        </div>
    `;

    addMemoriesPageStyles();
}


/* =========================================
   PASSWORD PAGE STYLES
   ========================================= */

function addMemoriesPasswordStyles() {

    if (document.getElementById("memoriesPasswordStyles")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "memoriesPasswordStyles";

    style.innerHTML = `

        .memories-password-scene {

            position: fixed;
            inset: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            background:
                radial-gradient(
                    circle at center,
                    #342329 0%,
                    #160f15 55%,
                    #070609 100%
                );

            color: #ead9c4;

            z-index: 9999;
        }


        .memories-password-content {

            width: min(88%, 420px);

            padding: 42px 28px;

            text-align: center;

            background:
                rgba(40, 25, 27, .88);

            border:
                1px solid rgba(213, 171, 125, .25);

            box-shadow:
                0 30px 80px rgba(0,0,0,.65),
                inset 0 0 35px rgba(180,130,90,.04);

            border-radius: 8px;

            backdrop-filter: blur(12px);
        }


        .private-lock {

            font-size: 42px;

            margin-bottom: 12px;
        }


        .private-title {

            font-size: 17px;

            letter-spacing: 4px;

            color: #dcb78c;
        }


        .private-subtitle {

            margin:
                12px 0 28px;

            font-family: Georgia, serif;

            font-size: 15px;

            font-style: italic;

            color: #c8b09b;
        }


        .memories-password-input {

            width: 100%;

            box-sizing: border-box;

            padding: 14px 16px;

            border:
                1px solid rgba(220,180,135,.25);

            border-radius: 5px;

            outline: none;

            background:
                rgba(5,4,5,.65);

            color: #f4e4d0;

            text-align: center;

            font-size: 15px;
        }


        .memories-password-input::placeholder {

            color: #907d70;
        }


        .memories-unlock-btn {

            margin-top: 16px;

            padding: 12px 25px;

            border:
                1px solid rgba(220,180,135,.35);

            border-radius: 4px;

            background:
                rgba(125,80,45,.25);

            color: #f2d9b8;

            letter-spacing: 2px;

            cursor: pointer;
        }


        .memories-wrong-password {

            min-height: 22px;

            margin-top: 15px;

            color: #d59682;

            font-size: 13px;
        }


        .memories-back-btn {

            display: block;

            margin: 22px auto 0;

            border: none;

            background: none;

            color: #9d8980;

            cursor: pointer;
        }


        .password-shake {

            animation:
                passwordShake .45s ease;
        }


        @keyframes passwordShake {

            0%,100% {
                transform: translateX(0);
            }

            25% {
                transform: translateX(-8px);
            }

            50% {
                transform: translateX(8px);
            }

            75% {
                transform: translateX(-5px);
            }

        }

    `;

    document.head.appendChild(style);
}


/* =========================================
   MAIN PAPER PAGE STYLES
   ========================================= */

function addMemoriesPageStyles() {

    if (document.getElementById("memoriesPageStyles")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "memoriesPageStyles";

    style.innerHTML = `

        /*
        =====================================
        FULL SCREEN PAPER
        =====================================
        */

        .memories-page {

            position: fixed;

            inset: 0;

            width: 100%;
            height: 100%;

            overflow: hidden;

            background:
                radial-gradient(
                    ellipse at center,
                    #68452c 0%,
                    #4a2d1c 55%,
                    #24150d 100%
                );

            color: #332015;

            z-index: 9999;
        }


        /*
        =====================================
        PAPER TEXTURE
        =====================================
        */

        .memories-page::before {

            content: "";

            position: absolute;

            inset: 0;

            background:

                repeating-linear-gradient(
                    0deg,
                    rgba(40,22,12,.07) 0px,
                    rgba(40,22,12,.07) 1px,
                    transparent 1px,
                    transparent 4px
                ),

                repeating-linear-gradient(
                    90deg,
                    rgba(255,220,175,.025) 0px,
                    rgba(255,220,175,.025) 1px,
                    transparent 1px,
                    transparent 6px
                );

            pointer-events: none;

            z-index: 1;
        }


        /*
        =====================================
        CRACKLES
        =====================================
        */

        .paper-cracks {

            position: absolute;

            inset: 0;

            opacity: .55;

            pointer-events: none;

            z-index: 2;
        }


        .paper-cracks::before {

            content: "";

            position: absolute;

            inset: 0;

            background-image:

                linear-gradient(
                    115deg,
                    transparent 0%,
                    transparent 35%,
                    rgba(35,18,9,.20) 35.2%,
                    transparent 35.5%
                ),

                linear-gradient(
                    35deg,
                    transparent 0%,
                    transparent 58%,
                    rgba(35,18,9,.16) 58.2%,
                    transparent 58.5%
                ),

                linear-gradient(
                    155deg,
                    transparent 0%,
                    transparent 75%,
                    rgba(35,18,9,.18) 75.2%,
                    transparent 75.5%
                );

            background-size:
                250px 210px,
                320px 270px,
                400px 350px;

            mix-blend-mode: multiply;
        }


        .paper-cracks::after {

            content: "";

            position: absolute;

            inset: 0;

            background-image:

                linear-gradient(
                    70deg,
                    transparent 0%,
                    transparent 44%,
                    rgba(255,225,185,.10) 44.2%,
                    transparent 44.5%
                ),

                linear-gradient(
                    140deg,
                    transparent 0%,
                    transparent 67%,
                    rgba(40,20,10,.12) 67.2%,
                    transparent 67.5%
                );

            background-size:
                300px 250px,
                430px 330px;
        }


        /*
        =====================================
        VIGNETTE
        =====================================
        */

        .memories-page::after {

            content: "";

            position: absolute;

            inset: 0;

            box-shadow:
                inset 0 0 100px rgba(20,10,5,.65),
                inset 0 0 230px rgba(15,7,3,.45);

            pointer-events: none;

            z-index: 15;
        }


        /*
        =====================================
        SUBTLE GLOW
        =====================================
        */

        .paper-glow {

            position: absolute;

            width: 700px;
            height: 700px;

            left: 50%;
            top: 45%;

            transform:
                translate(-50%, -50%);

            background:
                radial-gradient(
                    circle,
                    rgba(255,215,160,.13),
                    transparent 68%
                );

            filter: blur(35px);

            pointer-events: none;

            z-index: 3;
        }


        /*
        =====================================
        PAPER NOISE
        =====================================
        */

        .paper-noise {

            position: absolute;

            inset: 0;

            background-image:
                radial-gradient(
                    rgba(30,16,8,.55) .7px,
                    transparent .8px
                );

            background-size: 5px 5px;

            opacity: .14;

            pointer-events: none;

            z-index: 4;
        }


        /*
        =====================================
        FALLING LEAVES
        =====================================
        */

        .falling-leaves {

            position: absolute;

            inset: 0;

            pointer-events: none;

            z-index: 12;
        }


        .falling-leaves span {

            position: absolute;

            top: -40px;

            font-size: 18px;

            opacity: .55;

            animation:
                leafFall 10s linear infinite;
        }


        .falling-leaves span:nth-child(1) {
            left: 5%;
            animation-delay: 0s;
        }

        .falling-leaves span:nth-child(2) {
            left: 16%;
            animation-delay: 3s;
        }

        .falling-leaves span:nth-child(3) {
            left: 28%;
            animation-delay: 6s;
        }

        .falling-leaves span:nth-child(4) {
            left: 40%;
            animation-delay: 1s;
        }

        .falling-leaves span:nth-child(5) {
            left: 53%;
            animation-delay: 5s;
        }

        .falling-leaves span:nth-child(6) {
            left: 65%;
            animation-delay: 8s;
        }

        .falling-leaves span:nth-child(7) {
            left: 76%;
            animation-delay: 2s;
        }

        .falling-leaves span:nth-child(8) {
            left: 87%;
            animation-delay: 7s;
        }

        .falling-leaves span:nth-child(9) {
            left: 94%;
            animation-delay: 4s;
        }

        .falling-leaves span:nth-child(10) {
            left: 34%;
            animation-delay: 9s;
        }


        @keyframes leafFall {

            0% {

                transform:
                    translateY(-40px)
                    translateX(0)
                    rotate(0deg);

                opacity: 0;
            }

            10% {
                opacity: .6;
            }

            50% {

                transform:
                    translateY(55vh)
                    translateX(35px)
                    rotate(170deg);
            }

            100% {

                transform:
                    translateY(110vh)
                    translateX(-25px)
                    rotate(340deg);

                opacity: .15;
            }

        }


        /*
        =====================================
        DUST
        =====================================
        */

        .paper-dust span {

            position: absolute;

            width: 3px;
            height: 3px;

            border-radius: 50%;

            background:
                rgba(255,220,175,.55);

            animation:
                dustFloat 7s ease-in-out infinite;

            z-index: 13;
        }


        .paper-dust span:nth-child(1) {
            left: 10%;
            top: 20%;
        }

        .paper-dust span:nth-child(2) {
            left: 22%;
            top: 65%;
            animation-delay: 1s;
        }

        .paper-dust span:nth-child(3) {
            left: 35%;
            top: 35%;
            animation-delay: 2s;
        }

        .paper-dust span:nth-child(4) {
            left: 50%;
            top: 75%;
            animation-delay: 3s;
        }

        .paper-dust span:nth-child(5) {
            left: 64%;
            top: 25%;
            animation-delay: 1.5s;
        }

        .paper-dust span:nth-child(6) {
            left: 78%;
            top: 55%;
            animation-delay: 2.5s;
        }

        .paper-dust span:nth-child(7) {
            left: 89%;
            top: 30%;
            animation-delay: 4s;
        }

        .paper-dust span:nth-child(8) {
            left: 43%;
            top: 45%;
            animation-delay: 4.5s;
        }


        @keyframes dustFloat {

            0%,100% {

                transform:
                    translateY(0);

                opacity: .15;
            }

            50% {

                transform:
                    translateY(-18px);

                opacity: .65;
            }

        }


        /*
        =====================================
        SCROLL CONTAINER
        =====================================
        */

        .memories-scroll {

            position: relative;

            width: 100%;

            height: 100%;

            overflow-y: auto;

            overflow-x: hidden;

            scroll-behavior: smooth;

            z-index: 8;

            -webkit-overflow-scrolling: touch;
        }


        /*
        =====================================
        ONE CONTINUOUS PAPER
        =====================================
        */

        .memory-paper {

            position: relative;

            width: min(92%, 900px);

            min-height: 100%;

            margin: 0 auto;

            padding:
                85px 45px 130px;

            box-sizing: border-box;

            background:

                radial-gradient(
                    circle at 20% 20%,
                    rgba(255,225,185,.18),
                    transparent 30%
                ),

                radial-gradient(
                    circle at 80% 70%,
                    rgba(75,40,20,.12),
                    transparent 35%
                ),

                #9a704b;

            box-shadow:
                0 0 70px rgba(20,10,4,.5);

            border-left:
                1px solid rgba(60,30,12,.25);

            border-right:
                1px solid rgba(60,30,12,.25);
        }


        /*
        =====================================
        PAPER EDGES
        =====================================
        */

        .memory-paper::before {

            content: "";

            position: absolute;

            inset: 0;

            background:

                repeating-linear-gradient(
                    0deg,
                    transparent 0px,
                    transparent 7px,
                    rgba(65,35,18,.025) 8px
                );

            pointer-events: none;
        }


        /*
        =====================================
        SECTION
        =====================================
        */

        .memory-section {

            position: relative;

            text-align: center;

            padding-bottom: 40px;
        }


        .second-memory-section {

            margin-top: 90px;

            padding-top: 70px;
        }


        /*
        =====================================
        HEADINGS
        =====================================
        */

        .memory-small-title {

            font-size: 11px;

            letter-spacing: 4px;

            font-weight: 700;

            color: #56351f;

            margin-bottom: 17px;
        }


        .memory-section h1 {

            max-width: 720px;

            margin:
                0 auto;

            font-family:
                Georgia,
                "Times New Roman",
                serif;

            font-size:
                clamp(29px, 6vw, 52px);

            line-height: 1.2;

            font-weight: 500;

            color: #352014;

            text-shadow:
                0 1px 0 rgba(255,230,195,.2);
        }


        .memory-divider {

            margin:
                28px auto 60px;

            color: #5a3922;

            font-size: 18px;

            opacity: .7;
        }


        /*
        =====================================
        EACH MEMORY STAYS
        =====================================
        */

        .memory-entry {

            max-width: 730px;

            margin:
                0 auto 65px;

            text-align: left;

            opacity: 0;

            transform:
                translateY(22px);

            animation:
                memoryAppear 1.2s ease forwards;
        }


        .memory-entry:nth-of-type(2) {
            animation-delay: .5s;
        }


        .memory-entry:nth-of-type(3) {
            animation-delay: 1s;
        }


        .second-memory-section .memory-entry:nth-of-type(2) {
            animation-delay: 1.5s;
        }


        .second-memory-section .memory-entry:nth-of-type(3) {
            animation-delay: 2s;
        }


        .second-memory-section .memory-entry:nth-of-type(4) {
            animation-delay: 2.5s;
        }


        @keyframes memoryAppear {

            to {

                opacity: 1;

                transform:
                    translateY(0);
            }

        }


        .memory-entry h2 {

            margin:
                0 0 20px;

            font-family:
                Georgia,
                "Times New Roman",
                serif;

            font-size:
                clamp(21px, 4vw, 29px);

            font-weight: 600;

            color: #402719;
        }


        .memory-entry p {

            margin:
                0 0 20px;

            font-family:
                Georgia,
                "Times New Roman",
                serif;

            font-size:
                clamp(16px, 3.6vw, 20px);

            line-height: 1.9;

            color: #382519;

            text-align: left;
        }


        /*
        =====================================
        FINAL LINE
        =====================================
        */

        .memories-final-line {

            margin-top: 90px;

            padding-top: 45px;

            border-top:
                1px solid rgba(75,45,25,.35);

            font-family:
                "Brush Script MT",
                "Segoe Script",
                cursive;

            font-size: 22px;

            color: #50321f;

            text-align: center;
        }


        /*
        =====================================
        BACK BUTTON
        =====================================
        */

        .memories-page-back {

            position: fixed;

            left: 18px;

            bottom: 18px;

            z-index: 30;

            padding:
                9px 15px;

            border:
                1px solid rgba(230,195,155,.2);

            border-radius: 5px;

            background:
                rgba(45,25,14,.55);

            color: #ead4b6;

            font-size: 12px;

            cursor: pointer;

            backdrop-filter: blur(6px);
        }


        /*
        =====================================
        PHONE
        =====================================
        */

        @media (max-width: 600px) {

            .memory-paper {

                width: 94%;

                padding:
                    70px 25px 110px;
            }


            .memory-small-title {

                letter-spacing: 2.5px;

                font-size: 9px;
            }


            .memory-divider {

                margin-bottom: 45px;
            }


            .memory-entry {

                margin-bottom: 55px;
            }


            .memory-entry p {

                font-size: 16px;

                line-height: 1.8;
            }


            .second-memory-section {

                margin-top: 50px;

                padding-top: 55px;
            }


            .memories-final-line {

                font-size: 19px;
            }

        }

    `;

    document.head.appendChild(style);
}
