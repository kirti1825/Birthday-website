/* =========================================
   BIRTHDAY WEBSITE — LETTER SECTION
   ========================================= */

function startLetterScene() {

    const birthdayAnimation =
        document.getElementById("birthdayAnimation");

    birthdayAnimation.innerHTML = `

        <div class="letter-scene">

            <div class="letter-sky"></div>

            <div class="letter-particles"></div>

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
                <span>🍂</span>
                <span>🍁</span>
            </div>

            <div class="leaf-ground">
                <span>🍂</span>
                <span>🍁</span>
                <span>🍂</span>
                <span>🍂</span>
                <span>🍁</span>
                <span>🍂</span>
                <span>🍁</span>
                <span>🍂</span>
                <span>🍁</span>
                <span>🍂</span>
                <span>🍁</span>
                <span>🍂</span>
            </div>

            <div class="letter-scroll-wrap">

                <div class="scroll-top">
                    <div class="scroll-wood"></div>
                </div>

                <div class="letter-paper">

                    <div class="letter-content">

                        <div class="letter-text" id="letterText"></div>

                        <div class="letter-signature">
                            — Kirti 💗
                        </div>

                    </div>

                </div>

                <div class="scroll-bottom">
                    <div class="scroll-wood"></div>
                </div>

            </div>

            <button class="letter-back-button">
                ← Back
            </button>

        </div>
    `;

    addLetterStyles();
    createLetterParticles();
    animateLetterWriting();

    document
        .querySelector(".letter-back-button")
        .addEventListener("click", () => {
            startMemoryMenu();
        });
}


/* =========================================
   LETTER CONTENT
   ========================================= */

function animateLetterWriting() {

    const letterText =
        document.getElementById("letterText");

    const paragraphs = [

        `Dear Aryan,`,

        `I don't really know where to start… because somehow, writing a letter to you feels much harder than talking to you. There are so many things I want to say.`,

        `First of all, Happy birthday mere pyaareeee se cutieee...!! 🫂💐`,

        `I love you a lot & will always do more n more...💌`,

        `You're officially another year older… which means I'm allowed to tease you about your age now. 🤭`,

        `But jokes apart, I really hope you know how special this day is—not just because it's your birthday, but because it's the day someone who became such an important part of my life came into this world.`,

        `When I think about us, I don't just think about the big moments. I think about all the tiny things too—the random conversations, stupid fights, laughing over absolutely nothing, annoying each other, making up, and all those little moments that probably seemed ordinary at the time but somehow became memories I don't want to forget.`,

        `And honestly, there are so many little things you do that I don't think I can ever properly make you understand how much they mean to me.`,

        `Sometimes, even when those things happen, I don't realize just how special they are. But later, when I think about them again, I find myself smiling and thinking, “I'm actually so lucky to have you.”`,

        `The more I look back at everything, the more I realize how much you mean to me. In so many ways, you're the kind of person anyone would feel lucky to have in their life.`,

        `And I genuinely feel lucky that I get to call you mine. 💗`,

        `So… thank you.`,

        `Thank you for all the little things you've done, even the ones you probably don't remember. Thank you for the moments that made me laugh, the moments that made me feel cared for, and even the moments that taught me something about us.`,

        `We've had so many fights.`,

        `So many misunderstandings.`,

        `So many unexpected situations and things have come between us—some of them things neither of us ever imagined would happen.`,

        `We've annoyed each other, hurt each other's feelings, gotten angry, misunderstood each other, and probably had moments where we both wondered, “Why are we even like this?” 😭`,

        `But somehow, through everything, there's always been something that keeps us connected.`,

        `Something that holds on.`,

        `I don't even know how to properly explain what that “hold” is. It's just this bond between us that somehow keeps holding on with so much strength, even when things aren't easy.`,

        `And that's something I deeply appreciate.`,

        `Because despite everything that has happened, somehow we're still here.`,

        `And honestly, I can't imagine my life without you in it.`,

        `You've become one of the most important people in my life. Someone I rely on, someone whose presence has become such a big part of my world, and someone I genuinely don't want to lose.`,

        `I really hope that whatever this hold between us is, it always stays this strong.`,

        `I hope it never becomes dim.`,

        `I hope we never stop caring about this bond. I hope we never stop trying to understand each other, and I hope we never forget how much everything we've shared means to us.`,

        `Because whatever happens, I really, really appreciate what we have.`,

        `And I'm so grateful that somehow, through everything, this bond is still here. 💗`,

        `We've had our good days and our not-so-good days. Our story isn't perfect, and honestly, I don't think I'd want to pretend that it is.`,

        `It's messy.`,

        `It's funny.`,

        `It's emotional.`,

        `Sometimes it's confusing. 😭`,

        `But it's ours.`,

        `And that's what makes it special.`,

        `For your birthday, I hope this next year brings you more happiness, more confidence, more reasons to smile, more beautiful memories, and lots of moments that make you genuinely proud of yourself.`,

        `And whenever life gets difficult, I hope you remember that you've already made it through every difficult day you've faced until now.`,

        `So keep going.`,

        `Keep growing.`,

        `Keep believing in yourself.`,

        `And don't forget to enjoy the little things along the way.`,

        `Also… don't get too emotional reading this. 🐥`,

        `Anyway, birthday boy…`,

        `I hope this little website makes you smile, even just a little…`,

        `Thank you for being you.`,

        `Thank you for all the little things.`,

        `Thank you for the memories.`,

        `Thank you for the bond we have.`,

        `And most importantly…`,

        `I'm so lucky to have you. 💗`,

        `Keep smiling.`,

        `Keep being you.`,

        `And yes…`,

        `you're still annoying.`,

        `But you're my favourite kind of annoying. 🤭💗`
    ];


    let currentParagraph = 0;


    function showNextParagraph() {

        if (currentParagraph >= paragraphs.length) {

            setTimeout(() => {

                const signature =
                    document.querySelector(".letter-signature");

                if (signature) {
                    signature.classList.add("signature-show");
                }

            }, 500);

            return;
        }


        const paragraph =
            document.createElement("p");

        paragraph.textContent =
            paragraphs[currentParagraph];

        letterText.appendChild(paragraph);


        paragraph.classList.add("letter-line");


        currentParagraph++;


        setTimeout(
            showNextParagraph,
            650
        );
    }


    /*
     * Wait for the scroll to begin opening
     * before revealing the writing.
     */

    setTimeout(() => {
        showNextParagraph();
    }, 1700);
}


/* =========================================
   PARTICLES
   ========================================= */

function createLetterParticles() {

    const container =
        document.querySelector(".letter-particles");

    if (!container) return;


    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("span");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 4 + "s";

        particle.style.animationDuration =
            3 + Math.random() * 4 + "s";

        container.appendChild(particle);
    }
}


/* =========================================
   LETTER STYLES
   ========================================= */

function addLetterStyles() {

    const style =
        document.createElement("style");

    style.textContent = `

        .letter-scene {
            position: fixed;
            inset: 0;
            overflow: hidden;
            background:
                radial-gradient(
                    circle at 50% 35%,
                    #3a3040 0%,
                    #17131d 45%,
                    #08070c 100%
                );
            color: #35251d;
            z-index: 10000;
            font-family: Georgia, "Times New Roman", serif;
        }


        .letter-sky {
            position: absolute;
            inset: 0;

            background:
                radial-gradient(
                    circle at 50% 20%,
                    rgba(255,220,180,.08),
                    transparent 35%
                ),
                radial-gradient(
                    circle at 20% 70%,
                    rgba(180,150,120,.06),
                    transparent 30%
                );

            pointer-events: none;
        }


        /* =========================
           PARTICLES
        ========================= */

        .letter-particles {
            position: absolute;
            inset: 0;
            pointer-events: none;
        }


        .letter-particles span {
            position: absolute;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background: rgba(255,235,190,.8);
            box-shadow:
                0 0 8px rgba(255,220,160,.8),
                0 0 15px rgba(255,200,130,.35);

            animation:
                letterParticleFloat
                4s ease-in-out infinite alternate;
        }


        @keyframes letterParticleFloat {

            from {
                transform: translateY(12px);
                opacity: .15;
            }

            to {
                transform: translateY(-18px);
                opacity: .9;
            }
        }


        /* =========================
           FALLING LEAVES
        ========================= */

        .falling-leaves {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 8;
        }


        .falling-leaves span {
            position: absolute;
            top: -80px;
            font-size: 25px;
            opacity: .85;

            animation:
                leafFall
                linear
                infinite;
        }


        .falling-leaves span:nth-child(1) {
            left: 5%;
            animation-duration: 7s;
        }

        .falling-leaves span:nth-child(2) {
            left: 14%;
            animation-duration: 10s;
            animation-delay: 2s;
        }

        .falling-leaves span:nth-child(3) {
            left: 24%;
            animation-duration: 8s;
            animation-delay: 1s;
        }

        .falling-leaves span:nth-child(4) {
            left: 33%;
            animation-duration: 11s;
            animation-delay: 4s;
        }

        .falling-leaves span:nth-child(5) {
            left: 45%;
            animation-duration: 7.5s;
            animation-delay: 3s;
        }

        .falling-leaves span:nth-child(6) {
            left: 55%;
            animation-duration: 9s;
            animation-delay: 1s;
        }

        .falling-leaves span:nth-child(7) {
            left: 66%;
            animation-duration: 8.5s;
            animation-delay: 4s;
        }

        .falling-leaves span:nth-child(8) {
            left: 75%;
            animation-duration: 10.5s;
            animation-delay: 2s;
        }

        .falling-leaves span:nth-child(9) {
            left: 84%;
            animation-duration: 7s;
            animation-delay: 5s;
        }

        .falling-leaves span:nth-child(10) {
            left: 92%;
            animation-duration: 9.5s;
            animation-delay: 3s;
        }

        .falling-leaves span:nth-child(11) {
            left: 40%;
            animation-duration: 12s;
            animation-delay: 6s;
        }

        .falling-leaves span:nth-child(12) {
            left: 62%;
            animation-duration: 11s;
            animation-delay: 7s;
        }


        @keyframes leafFall {

            0% {
                transform:
                    translate3d(0, -10vh, 0)
                    rotate(0deg);
                opacity: 0;
            }

            10% {
                opacity: .9;
            }

            50% {
                transform:
                    translate3d(55px, 50vh, 0)
                    rotate(180deg);
            }

            100% {
                transform:
                    translate3d(-35px, 115vh, 0)
                    rotate(360deg);
                opacity: .65;
            }
        }


        /* =========================
           LEAVES ON GROUND
        ========================= */

        .leaf-ground {
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 100%;
            height: 75px;
            z-index: 7;
            pointer-events: none;
        }


        .leaf-ground span {
            position: absolute;
            bottom: 5px;
            font-size: 25px;
            opacity: .75;
        }

        .leaf-ground span:nth-child(1) {
            left: 3%;
            transform: rotate(-25deg);
        }

        .leaf-ground span:nth-child(2) {
            left: 11%;
            bottom: 12px;
            transform: rotate(25deg);
        }

        .leaf-ground span:nth-child(3) {
            left: 20%;
            bottom: 2px;
            transform: rotate(-10deg);
        }

        .leaf-ground span:nth-child(4) {
            left: 28%;
            bottom: 15px;
            transform: rotate(35deg);
        }

        .leaf-ground span:nth-child(5) {
            left: 38%;
            bottom: 4px;
            transform: rotate(-30deg);
        }

        .leaf-ground span:nth-child(6) {
            left: 47%;
            bottom: 16px;
            transform: rotate(15deg);
        }

        .leaf-ground span:nth-child(7) {
            left: 56%;
            bottom: 4px;
            transform: rotate(-20deg);
        }

        .leaf-ground span:nth-child(8) {
            left: 65%;
            bottom: 13px;
            transform: rotate(30deg);
        }

        .leaf-ground span:nth-child(9) {
            left: 73%;
            bottom: 3px;
            transform: rotate(-35deg);
        }

        .leaf-ground span:nth-child(10) {
            left: 82%;
            bottom: 16px;
            transform: rotate(20deg);
        }

        .leaf-ground span:nth-child(11) {
            left: 90%;
            bottom: 4px;
            transform: rotate(-15deg);
        }

        .leaf-ground span:nth-child(12) {
            left: 96%;
            bottom: 14px;
            transform: rotate(35deg);
        }


        /* =========================
           SCROLL
        ========================= */

        .letter-scroll-wrap {
            position: absolute;
            left: 50%;
            top: 50%;
            width: min(88%, 620px);
            height: 78vh;
            transform:
                translate(-50%, -50%)
                scaleY(.05);

            transform-origin: center;
            z-index: 5;

            animation:
                scrollUnroll
                2.2s
                cubic-bezier(.22,.75,.25,1)
                forwards;
        }


        @keyframes scrollUnroll {

            0% {
                transform:
                    translate(-50%, -50%)
                    scaleY(.05);
            }

            60% {
                transform:
                    translate(-50%, -50%)
                    scaleY(1.04);
            }

            100% {
                transform:
                    translate(-50%, -50%)
                    scaleY(1);
            }
        }


        .letter-paper {
            position: absolute;
            left: 0;
            right: 0;
            top: 35px;
            bottom: 35px;

            overflow-y: auto;

            background:
                linear-gradient(
                    90deg,
                    rgba(120,75,30,.16),
                    transparent 8%,
                    transparent 92%,
                    rgba(120,75,30,.15)
                ),
                #f0dfb9;

            box-shadow:
                0 20px 50px rgba(0,0,0,.45),
                inset 0 0 35px rgba(100,60,20,.16);

            border-left:
                1px solid rgba(110,70,30,.25);

            border-right:
                1px solid rgba(110,70,30,.25);
        }


        .letter-paper::before {
            content: "";
            position: absolute;
            inset: 0;

            background:
                radial-gradient(
                    circle at 20% 20%,
                    rgba(120,80,40,.08),
                    transparent 25%
                ),
                radial-gradient(
                    circle at 80% 70%,
                    rgba(100,60,20,.06),
                    transparent 30%
                );

            pointer-events: none;
        }


        /* =========================
           ROLLED ENDS
        ========================= */

        .scroll-top,
        .scroll-bottom {
            position: absolute;
            left: -10px;
            width: calc(100% + 20px);
            height: 48px;
            z-index: 3;
        }


        .scroll-top {
            top: 0;
        }


        .scroll-bottom {
            bottom: 0;
        }


        .scroll-wood {
            position: absolute;
            left: 0;
            right: 0;
            height: 100%;

            border-radius: 50%;

            background:
                linear-gradient(
                    to bottom,
                    #b98549,
                    #6e4527 45%,
                    #a86f38
                );

            box-shadow:
                0 8px 15px rgba(0,0,0,.35),
                inset 0 5px 8px rgba(255,230,170,.18),
                inset 0 -6px 8px rgba(40,20,10,.35);
        }


        .scroll-bottom .scroll-wood {
            transform: rotate(180deg);
        }


        /* =========================
           LETTER TEXT
        ========================= */

        .letter-content {
            position: relative;
            padding:
                55px
                45px
                70px;

            font-family:
                Georgia,
                "Times New Roman",
                serif;
        }


        .letter-text p {
            margin:
                0 0 18px;

            font-size: 16px;
       line-height: 1.8;

            color: #38281e;

            opacity: 0;
            transform: translateY(8px);

            transition:
                opacity .5s ease,
                transform .5s ease;
        }


        .letter-text p.letter-line {
            opacity: 1;
            transform: translateY(0);
        }


        .letter-text p:first-child {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 25px;
        }


        .letter-signature {
            margin-top: 30px;

            font-family:
                "Brush Script MT",
                "Segoe Script",
                cursive;

            font-size: 26px;

            text-align: right;

            opacity: 0;
            transform: translateY(10px);

            transition:
                opacity 1s ease,
                transform 1s ease;
        }


        .letter-signature.signature-show {
            opacity: 1;
            transform: translateY(0);
        }


        /* =========================
           BACK BUTTON
        ========================= */

        .letter-back-button {
            position: fixed;
            top: 18px;
            left: 18px;

            padding: 9px 15px;

            border-radius: 20px;
            border: 1px solid rgba(255,255,255,.25);

            background:
                rgba(20,15,20,.65);

            color: white;

            font-family: inherit;
            font-size: 13px;

            backdrop-filter: blur(10px);

            cursor: pointer;

            z-index: 20;
        }


        .letter-back-button:active {
            transform: scale(.95);
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

            .letter-scroll-wrap {
                width: 92%;
                height: 80vh;
            }

            .letter-content {
                padding:
                    45px
                    25px
                    60px;
            }

            .letter-text p {
                font-size: 15px;
                line-height: 1.7;
            }

            .letter-text p:first-child {
                font-size: 20px;
            }

            .falling-leaves span {
                font-size: 21px;
            }
        }

    `;

    document.head.appendChild(style);
}
