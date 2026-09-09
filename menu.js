/* =========================================
   BIRTHDAY WEBSITE — MEMORY MENU
   ========================================= */

function startMemoryMenu() {

    const birthdayAnimation =
        document.getElementById("birthdayAnimation");

    birthdayAnimation.innerHTML = `

        <div class="memory-menu-scene">

            <div class="memory-menu-stars"></div>

            <div class="memory-menu-content">

                <div class="memory-menu-heading">
                    <div class="memory-menu-small">✦ THERE'S MORE… ✦</div>

                    <h1>A few little pieces of us</h1>

                    <p>Choose what you want to discover.</p>
                </div>


                <div class="memory-cards">

                    <!-- CARD 1 -->
                    <button class="memory-card letter-card">
                        <div class="memory-card-icon">💌</div>

                        <div class="memory-card-text">
                            <h2>A Little Letter</h2>
                            <p>Something I wrote just for you.</p>
                        </div>

                        <span class="memory-card-arrow">→</span>
                    </button>


                    <!-- CARD 2 -->
                    <button class="memory-card quiz-card">
                        <div class="memory-card-icon">💕</div>

                        <div class="memory-card-text">
                            <h2>How Well Do You Know Us?</h2>
                            <p>Let's see how much you remember.</p>
                        </div>

                        <span class="memory-card-arrow">→</span>
                    </button>


                    <!-- CARD 3 -->
                    <button class="memory-card movie-card">
                        <div class="memory-card-icon">🎬</div>

                        <div class="memory-card-text">
                            <h2>If Us Was a Movie…</h2>
                            <p>Our story, but make it a movie.</p>
                        </div>

                        <span class="memory-card-arrow">→</span>
                    </button>


                    <!-- CARD 4 -->
                    <button class="memory-card memories-card">
                        <div class="memory-card-icon">🤫</div>

                        <div class="memory-card-text">
                            <h2>Things I Remember…</h2>
                            <p>Little things I never forgot.</p>
                        </div>

                        <span class="memory-card-arrow">→</span>
                    </button>


                    <!-- CARD 5 -->
                    <button class="memory-card voice-card">
                        <div class="memory-card-icon">🎙️</div>

                        <div class="memory-card-text">
                            <h2>Secret Voice Notes</h2>
                            <p>Some things are easier to say than write.</p>
                        </div>

                        <span class="memory-card-lock">🔐</span>
                    </button>

                </div>

            </div>

        </div>
    `;

    addMemoryMenuStyles();


    /* -----------------------------------------
       CARD CLICKS
       These will be connected to the real
       sections later.
       ----------------------------------------- */

    document
        .querySelector(".letter-card")
        .addEventListener("click", () => {

            console.log("Letter section clicked");

        });


    document
        .querySelector(".quiz-card")
        .addEventListener("click", () => {

            console.log("Quiz section clicked");

        });


    document
        .querySelector(".movie-card")
        .addEventListener("click", () => {

            console.log("Movie section clicked");

        });


    document
        .querySelector(".memories-card")
        .addEventListener("click", () => {

            console.log("Memories section clicked");

        });


    document
        .querySelector(".voice-card")
        .addEventListener("click", () => {

            console.log("Voice notes section clicked");

        });

}


/* =========================================
   MEMORY MENU STYLES
   ========================================= */

function addMemoryMenuStyles() {

    const style = document.createElement("style");

    style.textContent = `

        .memory-menu-scene {
            position: fixed;
            inset: 0;
            overflow-y: auto;
            overflow-x: hidden;

            background:
                radial-gradient(
                    circle at 50% 15%,
                    #24365f 0%,
                    #101b35 38%,
                    #050914 75%,
                    #02040a 100%
                );

            color: white;
            z-index: 9999;

            box-sizing: border-box;
        }


        .memory-menu-scene::before {
            content: "";

            position: absolute;
            inset: 0;

            background:
                radial-gradient(
                    circle at 20% 25%,
                    rgba(255, 210, 230, .10),
                    transparent 25%
                ),
                radial-gradient(
                    circle at 80% 70%,
                    rgba(180, 200, 255, .08),
                    transparent 30%
                );

            pointer-events: none;
        }


        .memory-menu-stars {
            position: absolute;
            inset: 0;

            pointer-events: none;

            opacity: .7;

            background-image:
                radial-gradient(circle, white 1px, transparent 1.5px),
                radial-gradient(circle, rgba(255,255,255,.7) 1px, transparent 1.5px);

            background-size:
                95px 95px,
                145px 145px;

            background-position:
                10px 20px,
                50px 70px;

            animation: memoryStarsMove 8s ease-in-out infinite alternate;
        }


        @keyframes memoryStarsMove {

            from {
                transform: translateY(0);
                opacity: .5;
            }

            to {
                transform: translateY(-8px);
                opacity: .85;
            }

        }


        .memory-menu-content {

            position: relative;

            width: min(92%, 520px);

            margin: 0 auto;

            padding:
                55px 0
                60px;

            box-sizing: border-box;
        }


        .memory-menu-heading {

            text-align: center;

            margin-bottom: 28px;
        }


        .memory-menu-small {

            font-size: 12px;

            letter-spacing: 3px;

            color: rgba(255,255,255,.65);

            margin-bottom: 10px;
        }


        .memory-menu-heading h1 {

            margin: 0;

            font-size: 27px;

            font-weight: 600;

            letter-spacing: .5px;

            text-shadow:
                0 0 12px rgba(255,255,255,.35),
                0 0 30px rgba(190,210,255,.25);
        }


        .memory-menu-heading p {

            margin:
                9px 0
                0;

            font-size: 14px;

            color: rgba(255,255,255,.65);
        }


        .memory-cards {

            display: flex;

            flex-direction: column;

            gap: 14px;
        }


        .memory-card {

            position: relative;

            width: 100%;

            min-height: 92px;

            display: flex;

            align-items: center;

            text-align: left;

            padding: 15px 17px;

            border-radius: 22px;

            border:
                1px solid
                rgba(255,255,255,.16);

            background:
                linear-gradient(
                    135deg,
                    rgba(255,255,255,.105),
                    rgba(255,255,255,.045)
                );

            box-shadow:
                0 12px 30px rgba(0,0,0,.20),
                inset 0 0 25px rgba(255,255,255,.025);

            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);

            color: white;

            cursor: pointer;

            font-family: inherit;

            transition:
                transform .25s ease,
                border-color .25s ease,
                box-shadow .25s ease;

            animation:
                memoryCardAppear .65s ease both;
        }


        .memory-card:nth-child(1) {
            animation-delay: .10s;
        }

        .memory-card:nth-child(2) {
            animation-delay: .20s;
        }

        .memory-card:nth-child(3) {
            animation-delay: .30s;
        }

        .memory-card:nth-child(4) {
            animation-delay: .40s;
        }

        .memory-card:nth-child(5) {
            animation-delay: .50s;
        }


        @keyframes memoryCardAppear {

            from {
                opacity: 0;
                transform:
                    translateY(18px)
                    scale(.97);
            }

            to {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1);
            }

        }


        .memory-card:active {

            transform: scale(.975);

        }


        .memory-card-icon {

            width: 54px;
            height: 54px;

            flex-shrink: 0;

            display: flex;

            align-items: center;
            justify-content: center;

            border-radius: 17px;

            background:
                rgba(255,255,255,.09);

            font-size: 27px;

            box-shadow:
                inset 0 0 15px rgba(255,255,255,.035);
        }


        .memory-card-text {

            min-width: 0;

            flex: 1;

            margin-left: 14px;

            padding-right: 8px;
        }


        .memory-card-text h2 {

            margin: 0;

            font-size: 16px;

            font-weight: 600;

            line-height: 1.25;
        }


        .memory-card-text p {

            margin:
                5px 0
                0;

            font-size: 12px;

            line-height: 1.35;

            color:
                rgba(255,255,255,.58);
        }


        .memory-card-arrow {

            font-size: 22px;

            color:
                rgba(255,255,255,.5);

            margin-left: 5px;

            transition:
                transform .25s ease;
        }


        .memory-card:active
        .memory-card-arrow {

            transform:
                translateX(4px);
        }


        .memory-card-lock {

            font-size: 17px;

            opacity: .75;

            margin-left: 5px;
        }


        /* SUBTLE DIFFERENCES BETWEEN CARDS */

        .letter-card
        .memory-card-icon {

            box-shadow:
                0 0 18px
                rgba(255,190,215,.10);
        }


        .quiz-card
        .memory-card-icon {

            box-shadow:
                0 0 18px
                rgba(255,120,180,.09);
        }


        .movie-card
        .memory-card-icon {

            box-shadow:
                0 0 18px
                rgba(180,200,255,.10);
        }


        .memories-card
        .memory-card-icon {

            box-shadow:
                0 0 18px
                rgba(210,190,255,.10);
        }


        .voice-card {

            border-color:
                rgba(210,190,255,.22);

            background:
                linear-gradient(
                    135deg,
                    rgba(100,90,150,.16),
                    rgba(255,255,255,.045)
                );
        }


        .voice-card
        .memory-card-icon {

            background:
                rgba(90,80,145,.18);

            box-shadow:
                0 0 22px
                rgba(160,145,255,.16);
        }


        @media (max-width: 600px) {

            .memory-menu-content {

                width: 90%;

                padding:
                    42px 0
                    45px;
            }


            .memory-menu-heading h1 {

                font-size: 24px;
            }


            .memory-card {

                min-height: 88px;

                padding: 14px;
            }


            .memory-card-icon {

                width: 50px;
                height: 50px;

                font-size: 25px;
            }

        }

    `;

    document.head.appendChild(style);
}
