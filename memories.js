function startMemoriesScene() {

    const birthdayAnimation =
        document.getElementById("birthdayAnimation");

    birthdayAnimation.innerHTML = `
        <div class="memories-password-scene">

            <div class="memories-glow"></div>

            <div class="password-box">

                <div class="lock-icon">🔐</div>

                <div class="private-title">
                    PRIVATE PAGE
                </div>

                <div class="private-subtitle">
                    Some things aren't meant for everyone…
                </div>

                <input
                    type="password"
                    id="memoriesPassword"
                    placeholder="Enter password"
                    autocomplete="off"
                >

                <button id="unlockMemories">
                    UNLOCK →
                </button>

                <div id="passwordError"></div>

                <button id="backFromMemories" class="memory-back">
                    ← Back
                </button>

            </div>

        </div>
    `;

    addMemoriesPasswordStyles();

    document
        .getElementById("unlockMemories")
        .addEventListener("click", unlockMemories);

    document
        .getElementById("memoriesPassword")
        .addEventListener("keydown", function(event) {

            if (event.key === "Enter") {
                unlockMemories();
            }

        });

    document
        .getElementById("backFromMemories")
        .addEventListener("click", () => {
            startMemoryMenu();
        });
}


/* =========================
   PASSWORD CHECK
========================= */

function unlockMemories() {

    const password =
        document.getElementById("memoriesPassword").value;

    const error =
        document.getElementById("passwordError");

    if (password === "Kiyan") {

        error.textContent = "";

        const scene =
            document.querySelector(".memories-password-scene");

        scene.classList.add("memory-unlocking");

        setTimeout(() => {
            startMemoriesBook();
        }, 1200);

    } else {

        error.textContent =
            "Nope. Nice try 😂🔒";

        const input =
            document.getElementById("memoriesPassword");

        input.classList.remove("password-shake");

        void input.offsetWidth;

        input.classList.add("password-shake");
    }
}


/* =========================
   MEMORY BOOK
========================= */

function startMemoriesBook() {

    const birthdayAnimation =
        document.getElementById("birthdayAnimation");

    birthdayAnimation.innerHTML = `

        <div class="memories-book-scene">

            <div class="book-stars"></div>

            <div class="book-dust">
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


            <div class="book">

                <div class="book-cover">

                    <div class="book-cover-title">
                        OUR LITTLE<br>
                        MEMORIES
                    </div>

                    <div class="book-cover-symbol">
                        ✦
                    </div>

                </div>


                <div class="book-pages">

                    <!-- LEFT PAGE -->

                    <div class="book-page left-page">

                        <div class="page-heading">
                            Things You Don't Know I Remember… 🍂
                        </div>

                        <div class="memory-stage">

                            <!-- MEMORY 1 -->

                            <div class="memory-item memory-one">

                                <h3>
                                    The JEE day…
                                </h3>

                                <p>
                                    I still remember how I forgot to tell you
                                    how I was going back home, and you ended up
                                    waiting for me for so long. I couldn't properly
                                    tell you anything at that time, and honestly,
                                    I still feel guilty about making you wait like that. 🥺
                                </p>

                            </div>


                            <!-- MEMORY 2 -->

                            <div class="memory-item memory-two">

                                <h3>
                                    The Teacher's Day moment…
                                </h3>

                                <p>
                                    I still feel guilty for forgetting you weren't
                                    feeling well and asking you to play tug-of-war.
                                    I'm sorry. 🫂
                                </p>

                            </div>


                            <!-- MEMORY 3 -->

                            <div class="memory-item memory-three">

                                <h3>
                                    That jealous moment…
                                </h3>

                                <p>
                                    I don't think I've ever forgotten that moment
                                    when, at tuition, Shreya was reacting to something,
                                    and me and Anjali got angry and went towards the
                                    garden area. When we came back, you were talking
                                    to Shreya and smiling, and honestly… I felt really
                                    jealous that time.
                                    <br><br>
                                    And then you made that paracetamol joke in front
                                    of sir, and when Shreya laughed at it too, I got
                                    even more annoyed. 😭 I don't even know whether
                                    I was more angry at you or at her, but I definitely
                                    remember how jealous I felt seeing you both talking
                                    and laughing after everything that had happened.
                                </p>

                            </div>

                        </div>

                    </div>


                    <!-- RIGHT PAGE -->

                    <div class="book-page right-page">

                        <div class="page-heading">
                            Things I Would Never Say on Your Face… 🤐
                        </div>

                        <div class="empty-right-page">

                            <div class="right-page-symbol">
                                ✦
                            </div>

                            <p>
                                Some things are still waiting
                                to be written…
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            <div class="memory-final-line">
                Some things you notice only when you really care. 💗
            </div>


            <button class="book-back-button">
                ← Back to our little universe
            </button>

        </div>
    `;

    addMemoriesBookStyles();


    /* BOOK OPENS */

    setTimeout(() => {

        const book =
            document.querySelector(".book");

        if (book) {
            book.classList.add("book-open");
        }

    }, 600);


    /*
     * MEMORY 1
     * Appears first
     */

    setTimeout(() => {

        const memory =
            document.querySelector(".memory-one");

        if (memory) {
            memory.classList.add("memory-visible");
        }

    }, 2200);


    /*
     * MEMORY 1 DISAPPEARS
     */

    setTimeout(() => {

        const memory =
            document.querySelector(".memory-one");

        if (memory) {
            memory.classList.remove("memory-visible");
        }

    }, 6500);


    /*
     * MEMORY 2 APPEARS
     */

    setTimeout(() => {

        const memory =
            document.querySelector(".memory-two");

        if (memory) {
            memory.classList.add("memory-visible");
        }

    }, 7200);


    /*
     * MEMORY 2 DISAPPEARS
     */

    setTimeout(() => {

        const memory =
            document.querySelector(".memory-two");

        if (memory) {
            memory.classList.remove("memory-visible");
        }

    }, 10500);


    /*
     * MEMORY 3 APPEARS
     */

    setTimeout(() => {

        const memory =
            document.querySelector(".memory-three");

        if (memory) {
            memory.classList.add("memory-visible");
        }

    }, 11200);


    /*
     * MEMORY 3 STAYS
     * Then final line appears
     */

    setTimeout(() => {

        const finalLine =
            document.querySelector(".memory-final-line");

        if (finalLine) {
            finalLine.classList.add("final-line-show");
        }

    }, 16500);


    /* BACK BUTTON */

    document
        .querySelector(".book-back-button")
        .addEventListener("click", () => {

            startMemoryMenu();

        });
}


/* =========================
   PASSWORD STYLES
========================= */

function addMemoriesPasswordStyles() {

    if (document.getElementById("memoriesPasswordStyles"))
        return;

    const style =
        document.createElement("style");

    style.id =
        "memoriesPasswordStyles";

    style.innerHTML = `

        .memories-password-scene {

            position: fixed;
            inset: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            overflow: hidden;

            background:
                radial-gradient(
                    circle at 50% 40%,
                    #39235e 0%,
                    #1c1235 38%,
                    #090715 75%,
                    #04030b 100%
                );

            color: white;

            z-index: 999;

            transition:
                opacity 1.2s ease,
                transform 1.2s ease;
        }


        .memories-password-scene::before {

            content: "✦   ·   ✧   ·   ⋆   ·   ✦   ·   ⋆   ·   ✧";

            position: absolute;

            top: 13%;
            left: 0;

            width: 100%;

            text-align: center;

            font-size: 12px;

            letter-spacing: 9px;

            opacity: .25;

            animation:
                memoryStarsFloat 8s ease-in-out infinite;
        }


        .memories-glow {

            position: absolute;

            width: 330px;
            height: 330px;

            border-radius: 50%;

            background:
                rgba(190,130,255,.16);

            filter: blur(65px);

            animation:
                memoryGlowPulse 5s ease-in-out infinite;
        }


        .password-box {

            position: relative;

            z-index: 3;

            width: min(88%, 390px);

            padding: 42px 28px 30px;

            border-radius: 28px;

            text-align: center;

            background:
                rgba(255,255,255,.055);

            border:
                1px solid rgba(255,255,255,.12);

            backdrop-filter:
                blur(18px);

            box-shadow:
                0 25px 80px rgba(0,0,0,.55),
                0 0 50px rgba(170,110,255,.10);
        }


        .lock-icon {

            font-size: 43px;

            margin-bottom: 15px;

            filter:
                drop-shadow(
                    0 0 15px
                    rgba(255,255,255,.3)
                );
        }


        .private-title {

            font-size: 20px;

            letter-spacing: 4px;

            font-weight: 700;

            margin-bottom: 10px;
        }


        .private-subtitle {

            font-size: 14px;

            opacity: .7;

            margin-bottom: 28px;
        }


        #memoriesPassword {

            width: 100%;

            box-sizing: border-box;

            padding: 14px 17px;

            border-radius: 14px;

            border:
                1px solid
                rgba(255,255,255,.15);

            outline: none;

            background:
                rgba(0,0,0,.25);

            color: white;

            text-align: center;

            font-size: 15px;
        }


        #memoriesPassword::placeholder {

            color:
                rgba(255,255,255,.4);
        }


        #unlockMemories {

            width: 100%;

            margin-top: 14px;

            padding: 14px;

            border: none;

            border-radius: 14px;

            background:
                rgba(255,255,255,.12);

            color: white;

            font-size: 14px;

            font-weight: 700;

            letter-spacing: 1px;

            cursor: pointer;

            transition: .25s ease;
        }


        #unlockMemories:active {

            transform: scale(.97);
        }


        #passwordError {

            height: 25px;

            margin-top: 12px;

            color: #ffc8d9;

            font-size: 13px;
        }


        .memory-back {

            margin-top: 10px;

            background: transparent;

            border: none;

            color:
                rgba(255,255,255,.55);

            font-size: 13px;

            cursor: pointer;
        }


        .password-shake {

            animation:
                passwordShake .4s ease;
        }


        .memory-unlocking {

            opacity: 0;

            transform: scale(1.04);
        }


        @keyframes passwordShake {

            0%,100% {
                transform: translateX(0);
            }

            25% {
                transform: translateX(-8px);
            }

            75% {
                transform: translateX(8px);
            }

        }


        @keyframes memoryGlowPulse {

            0%,100% {

                transform: scale(.9);

                opacity: .55;
            }

            50% {

                transform: scale(1.15);

                opacity: .9;
            }

        }


        @keyframes memoryStarsFloat {

            0%,100% {

                transform: translateY(0);
            }

            50% {

                transform: translateY(12px);
            }

        }

    `;

    document.head.appendChild(style);
}


/* =========================
   BOOK STYLES
========================= */

function addMemoriesBookStyles() {

    if (document.getElementById("memoriesBookStyles"))
        return;

    const style =
        document.createElement("style");

    style.id =
        "memoriesBookStyles";

    style.innerHTML = `

        .memories-book-scene {

            position: fixed;
            inset: 0;

            overflow: hidden;

            display: flex;

            align-items: center;
            justify-content: center;

            flex-direction: column;

            background:
                radial-gradient(
                    ellipse at center,
                    #35233a 0%,
                    #19121e 45%,
                    #08070c 100%
                );

            color: #33251c;

            z-index: 999;
        }


        .memories-book-scene::before {

            content: "";

            position: absolute;

            inset: 0;

            background:
                radial-gradient(
                    circle at 50% 48%,
                    rgba(255,207,125,.12),
                    transparent 32%
                );

            pointer-events: none;
        }


        .book-stars {

            position: absolute;

            inset: 0;

            opacity: .2;

            background:

                radial-gradient(
                    circle at 15% 20%,
                    white 1px,
                    transparent 2px
                ),

                radial-gradient(
                    circle at 80% 18%,
                    white 1px,
                    transparent 2px
                ),

                radial-gradient(
                    circle at 70% 75%,
                    white 1px,
                    transparent 2px
                ),

                radial-gradient(
                    circle at 25% 80%,
                    white 1px,
                    transparent 2px
                );
        }


        .book-dust {

            position: absolute;

            inset: 0;

            pointer-events: none;
        }


        .book-dust span {

            position: absolute;

            width: 3px;
            height: 3px;

            border-radius: 50%;

            background: #ffe8ad;

            opacity: .5;

            animation:
                bookDustFloat 5s ease-in-out infinite;
        }


        .book-dust span:nth-child(1) {
            left: 15%;
            top: 25%;
        }

        .book-dust span:nth-child(2) {
            left: 28%;
            top: 70%;
            animation-delay: 1s;
        }

        .book-dust span:nth-child(3) {
            left: 72%;
            top: 30%;
            animation-delay: 2s;
        }

        .book-dust span:nth-child(4) {
            left: 84%;
            top: 65%;
            animation-delay: .5s;
        }

        .book-dust span:nth-child(5) {
            left: 40%;
            top: 15%;
            animation-delay: 1.5s;
        }

        .book-dust span:nth-child(6) {
            left: 60%;
            top: 82%;
            animation-delay: 2.5s;
        }

        .book-dust span:nth-child(7) {
            left: 9%;
            top: 55%;
            animation-delay: 3s;
        }

        .book-dust span:nth-child(8) {
            left: 91%;
            top: 45%;
            animation-delay: 1.8s;
        }

        .book-dust span:nth-child(9) {
            left: 48%;
            top: 88%;
            animation-delay: 3.2s;
        }

        .book-dust span:nth-child(10) {
            left: 52%;
            top: 12%;
            animation-delay: 2.2s;
        }


        .book {

            position: relative;

            width: min(94vw, 850px);

            height: min(70vh, 590px);

            perspective: 1800px;

            transform:
                scale(.15)
                rotateX(12deg);

            opacity: 0;

            transition:
                transform 1.9s
                cubic-bezier(.2,.8,.2,1),

                opacity 1.2s ease;
        }


        .book-open {

            transform:
                scale(1)
                rotateX(0deg);

            opacity: 1;
        }


        .book-cover {

            position: absolute;

            inset: 0;

            border-radius: 8px;

            background:
                linear-gradient(
                    135deg,
                    #4b3023,
                    #251810 55%,
                    #3b251b
                );

            box-shadow:
                0 30px 70px rgba(0,0,0,.7),

                inset
                0 0 0 2px
                rgba(221,176,100,.25);

            display: flex;

            align-items: center;
            justify-content: center;

            flex-direction: column;

            color: #e7c982;

            z-index: 5;

            transform-origin: left center;

            transition:
                transform 1.8s
                cubic-bezier(.2,.8,.2,1),

                opacity 1.4s ease;
        }


        .book-open .book-cover {

            transform:
                rotateY(-180deg);

            opacity: 0;

            pointer-events: none;
        }


        .book-cover-title {

            text-align: center;

            font-size: 25px;

            letter-spacing: 5px;

            line-height: 1.6;
        }


        .book-cover-symbol {

            margin-top: 25px;

            font-size: 30px;
        }


        .book-pages {

            position: absolute;

            inset: 0;

            display: flex;

            border-radius: 8px;

            overflow: hidden;

            background: #d8c29b;

            box-shadow:
                0 30px 70px
                rgba(0,0,0,.7);
        }


        .book-page {

            position: relative;

            width: 50%;

            padding: 38px 34px;

            box-sizing: border-box;

            overflow: hidden;

            background:

                linear-gradient(
                    90deg,
                    rgba(120,82,40,.10),
                    transparent 10%,
                    transparent 90%,
                    rgba(120,82,40,.10)
                ),

                #ead9b2;
        }


        .left-page {

            border-right:
                1px solid
                rgba(80,55,30,.3);

            box-shadow:
                inset
                -12px 0 20px
                rgba(60,35,15,.10);
        }


        .right-page {

            box-shadow:
                inset
                12px 0 20px
                rgba(60,35,15,.10);
        }


        .book-page::before {

            content: "";

            position: absolute;

            inset: 12px;

            border:
                1px solid
                rgba(117,83,42,.18);

            pointer-events: none;
        }


        .page-heading {

            position: relative;

            z-index: 2;

            font-family:
                Georgia, serif;

            font-size:
                clamp(18px, 2.5vw, 26px);

            line-height: 1.25;

            text-align: center;

            color: #4a3424;

            margin-bottom: 28px;
        }


        .memory-stage {

            position: relative;

            height: calc(100% - 70px);

            display: flex;

            align-items: center;

            justify-content: center;
        }


        .memory-item {

            position: absolute;

            width: 90%;

            opacity: 0;

            transform:
                translateY(15px);

            transition:
                opacity 1s ease,
                transform 1s ease;
        }


        .memory-item.memory-visible {

            opacity: 1;

            transform:
                translateY(0);
        }


        .memory-item h3 {

            font-family:
                Georgia, serif;

            font-size: 16px;

            margin:
                0 0 10px;

            color: #553b26;
        }


        .memory-item p {

            margin: 0;

            font-family:
                Georgia, serif;

            font-size: 13px;

            line-height: 1.7;

            color: #493729;
        }


        .empty-right-page {

            position: relative;

            z-index: 2;

            height: calc(100% - 70px);

            display: flex;

            align-items: center;

            justify-content: center;

            flex-direction: column;

            text-align: center;

            color: #6b513b;

            font-family:
                Georgia, serif;

            font-style: italic;

            opacity: .65;
        }


        .right-page-symbol {

            font-size: 28px;

            margin-bottom: 20px;

            opacity: .55;
        }


        .empty-right-page p {

            font-size: 13px;

            line-height: 1.7;

            max-width: 190px;
        }


        .memory-final-line {

            margin-top: 18px;

            color: #e9d5a5;

            font-family:
                Georgia, serif;

            font-style: italic;

            font-size: 13px;

            opacity: 0;

            transform:
                translateY(10px);

            transition:
                1.2s ease;
        }


        .final-line-show {

            opacity: .9;

            transform:
                translateY(0);
        }


        .book-back-button {

            position: absolute;

            bottom: 18px;

            left: 50%;

            transform:
                translateX(-50%);

            padding: 10px 17px;

            border-radius: 20px;

            border:
                1px solid
                rgba(255,255,255,.18);

            background:
                rgba(255,255,255,.07);

            color:
                rgba(255,255,255,.75);

            cursor: pointer;

            backdrop-filter:
                blur(10px);
        }


        @keyframes bookDustFloat {

            0%,100% {

                transform:
                    translate(0,0);

                opacity: .2;
            }

            50% {

                transform:
                    translate(8px,-18px);

                opacity: .7;
            }
        }


        @media (max-width: 650px) {

            .book {

                width: 94vw;

                height: 70vh;
            }


            .book-page {

                padding:
                    28px 17px;
            }


            .page-heading {

                font-size: 16px;

                margin-bottom: 15px;
            }


            .memory-item {

                width: 92%;
            }


            .memory-item p {

                font-size: 11.2px;

                line-height: 1.55;
            }


            .memory-item h3 {

                font-size: 14px;
            }


            .book-cover-title {

                font-size: 20px;
            }


            .empty-right-page p {

                font-size: 11px;
            }

        }

    `;

    document.head.appendChild(style);
}
