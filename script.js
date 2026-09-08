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

                <div class="night-sky">
                    <div class="moon"></div>

                    <div class="stars">
                        ${Array.from({length: 20}, () => "<span></span>").join("")}
                    </div>
                </div>

                <div class="ground"></div>

                <div class="character">
                    <img src="1788853009972.png" alt="">
                </div>

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

                <div class="welcome-message">
                    Welcome to the party, my cutiee...!! 💗
                </div>

            </div>
        `;

        addGateStyles();

        /* BOY WALKS */
        setTimeout(() => {
            document.querySelector(".character").classList.add("walking");
        }, 700);

        /* KNOCK */
        setTimeout(() => {
            const gate = document.querySelector(".gate");
            const knock = document.querySelector(".knock-text");

            gate.classList.add("knocking");
            knock.classList.add("show");

            setTimeout(() => {
                gate.classList.remove("knocking");
            }, 800);
        }, 4300);

        /* WELCOME */
        setTimeout(() => {
            document.querySelector(".welcome-message").classList.add("show");
        }, 4700);

        /* OPEN GATE */
        setTimeout(() => {
            document.querySelector(".gate").classList.add("opening");
        }, 7800);

        /* PART 2 */
        setTimeout(() => {
            startPartyScene();
        }, 9500);

    }, 1800);
});


function addGateStyles() {

    const style = document.createElement("style");

    style.innerHTML = `

    .gate-scene {
        position: fixed;
        inset: 0;
        overflow: hidden;
        background: #030207;
        font-family: Georgia, serif;
    }

    .night-sky {
        position: absolute;
        inset: 0;
        background:
            radial-gradient(circle at 50% 40%, rgba(67,48,75,.25), transparent 42%),
            radial-gradient(circle at 75% 15%, rgba(80,55,90,.16), transparent 30%),
            linear-gradient(to bottom,#020208,#070511 55%,#100a13);
        animation: skyReveal 3s ease forwards;
    }

    @keyframes skyReveal {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .moon {
        position: absolute;
        width: 105px;
        height: 105px;
        right: 13%;
        top: 10%;
        border-radius: 50%;
        background: radial-gradient(circle at 35% 30%,#fffdfb,#eee6e6 65%,#d7ced1);
        box-shadow: 0 0 20px rgba(255,255,255,.22),
                    0 0 55px rgba(255,235,250,.12);
        animation: moonGlow 4s ease-in-out infinite alternate;
    }

    @keyframes moonGlow {
        from { box-shadow: 0 0 18px rgba(255,255,255,.2); }
        to { box-shadow: 0 0 30px rgba(255,255,255,.35),
                       0 0 70px rgba(255,235,250,.16); }
    }

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
        animation: twinkle 2.5s ease-in-out infinite alternate;
    }

    .stars span:nth-child(1)  {top:12%;left:8%;animation-delay:.2s}
    .stars span:nth-child(2)  {top:20%;left:18%;animation-delay:1s}
    .stars span:nth-child(3)  {top:8%;left:32%;animation-delay:.5s}
    .stars span:nth-child(4)  {top:27%;left:42%;animation-delay:1.6s}
    .stars span:nth-child(5)  {top:14%;left:55%;animation-delay:.8s}
    .stars span:nth-child(6)  {top:31%;left:65%;animation-delay:1.3s}
    .stars span:nth-child(7)  {top:18%;left:78%;animation-delay:.4s}
    .stars span:nth-child(8)  {top:38%;left:88%;animation-delay:1.8s}
    .stars span:nth-child(9)  {top:43%;left:12%;animation-delay:1.1s}
    .stars span:nth-child(10){top:36%;left:28%;animation-delay:.6s}
    .stars span:nth-child(11){top:45%;left:52%;animation-delay:1.5s}
    .stars span:nth-child(12){top:50%;left:72%;animation-delay:.9s}
    .stars span:nth-child(13){top:25%;left:94%;animation-delay:1.7s}
    .stars span:nth-child(14){top:10%;left:67%;animation-delay:.3s}
    .stars span:nth-child(15){top:55%;left:38%;animation-delay:1.4s}
    .stars span:nth-child(16){top:33%;left:5%;animation-delay:.7s}
    .stars span:nth-child(17){top:48%;left:82%;animation-delay:1.9s}
    .stars span:nth-child(18){top:16%;left:46%;animation-delay:1.2s}
    .stars span:nth-child(19){top:29%;left:72%;animation-delay:.1s}
    .stars span:nth-child(20){top:41%;left:59%;animation-delay:1.6s}

    @keyframes twinkle {
        0% {opacity:.15;transform:scale(.7)}
        50% {opacity:1;transform:scale(1.5)}
        100% {opacity:.25;transform:scale(.8)}
    }

    .ground {
        position:absolute;
        bottom:0;
        width:100%;
        height:28%;
        background:linear-gradient(to top,#020103,rgba(5,3,8,.92),transparent);
    }

    .character {
        position:absolute;
        left:-220px;
        bottom:10%;
        width:170px;
        z-index:10;
        transition:left 3.6s cubic-bezier(.15,.7,.2,1);
    }

    .character img {
        width:100%;
        display:block;
    }

    .character.walking {
        left:calc(50% - 300px);
    }

    .gate-area {
        position:absolute;
        left:50%;
        bottom:7%;
        transform:translateX(-50%);
        z-index:8;
    }

    .gate {
        position:relative;
        width:440px;
        height:510px;
        transform-origin:bottom center;
        transition:transform 1.7s ease;
    }

    .gate-left,
    .gate-right {
        position:absolute;
        bottom:0;
        width:210px;
        height:410px;
        overflow:hidden;
        border:6px solid #352017;
        box-sizing:border-box;
        background:repeating-linear-gradient(
            90deg,
            #4b2b1c 0px,
            #5b3623 28px,
            #3d2418 32px,
            #623b26 65px
        );
        box-shadow:inset 0 0 35px rgba(0,0,0,.65),
                   0 12px 30px rgba(0,0,0,.5);
        transition:transform 1.7s cubic-bezier(.2,.7,.2,1);
    }

    .gate-left {
        left:0;
        transform-origin:left center;
    }

    .gate-right {
        right:0;
        transform-origin:right center;
    }

    .wood-panel {
        width:72%;
        height:80px;
        margin:28px auto;
        border:3px solid #24150f;
        background:linear-gradient(90deg,#613a25,#70442a,#4a2b1b);
        box-shadow:inset 0 0 12px rgba(0,0,0,.45);
    }

    .gate-roof {
        position:absolute;
        top:0;
        left:0;
        width:440px;
        height:110px;
        background:linear-gradient(135deg,#291b16,#5a3826,#281a15);
        clip-path:polygon(50% 0,100% 55%,100% 100%,0 100%,0 55%);
        border:5px solid #382319;
        box-sizing:border-box;
    }

    .roof-detail {
        position:absolute;
        width:28px;
        height:28px;
        left:50%;
        top:28px;
        transform:translateX(-50%) rotate(45deg);
        border:4px solid #9b795c;
    }

    .metal-decoration {
        position:absolute;
        left:50%;
        width:90px;
        height:90px;
        transform:translateX(-50%) rotate(45deg);
        border:4px solid #8a6b50;
    }

    .metal-decoration.top {top:65px}
    .metal-decoration.bottom {bottom:50px}

    .gate-handle {
        position:absolute;
        width:18px;
        height:18px;
        left:50%;
        bottom:47%;
        transform:translateX(-50%);
        border-radius:50%;
        background:#b08a65;
        z-index:5;
    }

    .knocking {
        animation:gateShake .12s linear 6;
    }

    @keyframes gateShake {
        0%{transform:translateX(0)}
        25%{transform:translateX(-4px)}
        50%{transform:translateX(5px)}
        75%{transform:translateX(-4px)}
        100%{transform:translateX(0)}
    }

    .knock-text {
        position:absolute;
        top:-42px;
        width:100%;
        text-align:center;
        color:#e9dcd5;
        font-size:17px;
        letter-spacing:2px;
        opacity:0;
        transition:opacity .7s ease;
    }

    .knock-text.show {
        opacity:.9;
    }

    .welcome-message {
        position:absolute;
        z-index:30;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%) translateY(20px);
        width:90%;
        text-align:center;
        color:#fff5f8;
        font-family:"Brush Script MT","Segoe Script",cursive;
        font-size:clamp(28px,5vw,55px);
        line-height:1.2;
        text-shadow:0 0 8px rgba(255,220,235,.35),
                    0 0 25px rgba(255,180,210,.15);
        opacity:0;
        transition:opacity 1.2s ease,transform 1.2s ease;
    }

    .welcome-message.show {
        opacity:1;
        transform:translate(-50%,-50%);
    }

    .gate.opening .gate-left {
        transform:perspective(900px) rotateY(-82deg);
    }

    .gate.opening .gate-right {
        transform:perspective(900px) rotateY(82deg);
    }

    @media(max-width:600px) {

        .moon {
            width:70px;
            height:70px;
        }

        .character {
            width:125px;
        }

        .character.walking {
            left:calc(50% - 205px);
        }

        .gate {
            width:310px;
            height:390px;
        }

        .gate-roof {
            width:310px;
            height:85px;
        }

        .gate-left,
        .gate-right {
            width:150px;
            height:315px;
        }

        .wood-panel {
            height:60px;
            margin:20px auto;
        }

        .metal-decoration {
            width:55px;
            height:55px;
        }

        .welcome-message {
            font-size:31px;
        }
    }

    `;

    document.head.appendChild(style);
}


/*
==================================================
PART 2 — MAGICAL DREAMY PARTY
==================================================
*/

function startPartyScene() {

    birthdayAnimation.innerHTML = `

        <div class="party-scene">

            <div class="dreamy-sky"></div>

            <div class="party-stars">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
            </div>

            <div class="glow-orb orb1"></div>
            <div class="glow-orb orb2"></div>

            <div class="hanging-lights">
                <i></i><i></i><i></i><i></i><i></i>
                <i></i><i></i><i></i>
            </div>

            <div class="balloons">
                <div class="balloon b1"></div>
                <div class="balloon b2"></div>
                <div class="balloon b3"></div>
                <div class="balloon b4"></div>
            </div>

            <div class="party-floor"></div>

            <!-- YOU ARE ALREADY THERE -->
            <div class="girl-avatar">
                <img src="IMG_20260908_213133.png" alt="">
            </div>

            <!-- HE ENTERS AFTERWARD -->
            <div class="boy-avatar">
                <img src="IMG_20260908_212512.png" alt="">
            </div>

            <div class="cake">
                <div class="cake-top">
                    <div class="candle">
                        <div class="flame"></div>
                    </div>
                </div>
                <div class="cake-body"></div>
                <div class="cake-plate"></div>
            </div>

            <div class="party-message">
                A little party... just for you ✨
            </div>

            <div class="confetti"></div>

        </div>
    `;

    addPartyStyles();

    /* YOUR AVATAR APPEARS FIRST */
    setTimeout(() => {
        document.querySelector(".girl-avatar").classList.add("appear");
    }, 500);

    /* HIS FRONT AVATAR ENTERS */
    setTimeout(() => {
        document.querySelector(".boy-avatar").classList.add("enter");
    }, 2200);

    /* CAKE MESSAGE */
    setTimeout(() => {
        document.querySelector(".party-message").classList.add("show");
    }, 4300);

    /* CONFETTI */
    setTimeout(() => {
        document.querySelector(".confetti").classList.add("burst");
    }, 5600);

    /* FINISH */
    setTimeout(() => {
        birthdayAnimation.classList.add("fade-to-next");
    }, 7600);

    /*
     * This is where we'll connect the next
     * website section later.
     */
}


/*
==================================================
PARTY STYLES
==================================================
*/

function addPartyStyles() {

    const style = document.createElement("style");

    style.innerHTML = `

    .party-scene {
        position:fixed;
        inset:0;
        overflow:hidden;
        background:#090510;
        font-family:Georgia,serif;
    }

    .dreamy-sky {
        position:absolute;
        inset:0;
        background:
            radial-gradient(circle at 50% 35%,rgba(130,78,135,.32),transparent 38%),
            radial-gradient(circle at 20% 20%,rgba(100,70,130,.18),transparent 30%),
            linear-gradient(to bottom,#07040e,#150a1b 65%,#241126);
    }

    .party-stars {
        position:absolute;
        inset:0;
    }

    .party-stars span {
        position:absolute;
        width:3px;
        height:3px;
        border-radius:50%;
        background:white;
        box-shadow:0 0 9px white;
        animation:partyTwinkle 2s infinite alternate;
    }

    .party-stars span:nth-child(1){top:12%;left:10%}
    .party-stars span:nth-child(2){top:25%;left:18%;animation-delay:.5s}
    .party-stars span:nth-child(3){top:10%;left:35%;animation-delay:1s}
    .party-stars span:nth-child(4){top:20%;left:52%;animation-delay:.2s}
    .party-stars span:nth-child(5){top:8%;left:70%;animation-delay:1.2s}
    .party-stars span:nth-child(6){top:30%;left:82%;animation-delay:.7s}
    .party-stars span:nth-child(7){top:40%;left:8%;animation-delay:1.5s}
    .party-stars span:nth-child(8){top:35%;left:30%;animation-delay:.4s}
    .party-stars span:nth-child(9){top:42%;left:65%;animation-delay:1s}
    .party-stars span:nth-child(10){top:18%;left:92%;animation-delay:.8s}
    .party-stars span:nth-child(11){top:50%;left:46%;animation-delay:1.3s}
    .party-stars span:nth-child(12){top:15%;left:60%;animation-delay:.3s}

    @keyframes partyTwinkle {
        from{opacity:.2;transform:scale(.7)}
        to{opacity:1;transform:scale(1.6)}
    }

    .glow-orb {
        position:absolute;
        width:180px;
        height:180px;
        border-radius:50%;
        filter:blur(45px);
        opacity:.2;
    }

    .orb1 {
        top:20%;
        left:10%;
        background:#c38acb;
    }

    .orb2 {
        bottom:15%;
        right:10%;
        background:#8d72c4;
    }

    .hanging-lights {
        position:absolute;
        top:0;
        left:10%;
        width:80%;
        height:80px;
        border-top:2px solid rgba(210,180,220,.25);
        display:flex;
        justify-content:space-around;
    }

    .hanging-lights i {
        width:9px;
        height:9px;
        margin-top:38px;
        border-radius:50%;
        background:#fff0fa;
        box-shadow:0 0 14px 5px rgba(255,220,245,.45);
        animation:lightGlow 1.8s infinite alternate;
    }

    @keyframes lightGlow {
        from{opacity:.4}
        to{opacity:1}
    }

    .balloons {
        position:absolute;
        top:13%;
        left:5%;
        z-index:4;
    }

    .balloon {
        position:absolute;
        width:48px;
        height:60px;
        border-radius:50% 50% 45% 45%;
        opacity:.8;
        animation:floatBalloon 3s ease-in-out infinite alternate;
    }

    .balloon:after {
        content:"";
        position:absolute;
        top:58px;
        left:24px;
        width:1px;
        height:120px;
        background:rgba(255,255,255,.25);
    }

    .b1{left:0;background:#c887aa}
    .b2{left:45px;top:25px;background:#80699f;animation-delay:.4s}
    .b3{left:90px;top:-10px;background:#9b769f;animation-delay:.8s}
    .b4{left:135px;top:35px;background:#b995b9;animation-delay:1.1s}

    @keyframes floatBalloon {
        from{transform:translateY(0)}
        to{transform:translateY(-12px)}
    }

    .party-floor {
        position:absolute;
        bottom:0;
        width:100%;
        height:28%;
        background:
            radial-gradient(
                ellipse at center bottom,
                rgba(120,70,130,.25),
                transparent 65%
            ),
            linear-gradient(to top,#07030a,transparent);
    }

    /* YOUR AVATAR */

    .girl-avatar {
        position:absolute;
        bottom:9%;
        left:20%;
        width:160px;
        z-index:10;
        opacity:0;
        transform:translateY(35px);
        transition:1.3s ease;
    }

    .girl-avatar img {
        width:100%;
        display:block;
    }

    .girl-avatar.appear {
        opacity:1;
        transform:translateY(0);
    }

    /* HIS AVATAR */

    .boy-avatar {
        position:absolute;
        bottom:9%;
        right:-200px;
        width:160px;
        z-index:10;
        transition:2s cubic-bezier(.2,.7,.2,1);
    }

    .boy-avatar img {
        width:100%;
        display:block;
    }

    .boy-avatar.enter {
        right:20%;
    }

    /* CAKE */

    .cake {
        position:absolute;
        left:50%;
        bottom:8%;
        transform:translateX(-50%) scale(.7);
        z-index:8;
        opacity:0;
        animation:cakeAppear 1.3s ease forwards;
        animation-delay:2.8s;
    }

    .cake-top {
        width:110px;
        height:35px;
        border-radius:50%;
        background:#f0d2dd;
        border:3px solid #7c4e69;
        position:relative;
    }

    .cake-body {
        width:105px;
        height:60px;
        margin-top:-5px;
        background:linear-gradient(to right,#c985a1,#e4b1c2,#bd7898);
        border-radius:0 0 15px 15px;
    }

    .cake-plate {
        width:135px;
        height:13px;
        margin-left:-15px;
        background:#9a7897;
        border-radius:50%;
    }

    .candle {
        position:absolute;
        width:8px;
        height:35px;
        background:#f5e4ed;
        left:50%;
        top:-35px;
        transform:translateX(-50%);
    }

    .flame {
        position:absolute;
        width:12px;
        height:18px;
        background:#fff0bd;
        border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        top:-13px;
        left:-2px;
        box-shadow:0 0 12px rgba(255,230,160,.8);
        animation:flameFlicker .5s infinite alternate;
    }

    @keyframes flameFlicker {
        from{transform:rotate(-45deg) scale(.8)}
        to{transform:rotate(-45deg) scale(1.1)}
    }

    @keyframes cakeAppear {
        from{opacity:0;transform:translateX(-50%) scale(.5)}
        to{opacity:1;transform:translateX(-50%) scale(.7)}
    }

    .party-message {
        position:absolute;
        top:18%;
        left:50%;
        transform:translate(-50%,20px);
        width:90%;
        text-align:center;
        color:#fff2f7;
        font-family:"Brush Script MT","Segoe Script",cursive;
        font-size:clamp(25px,5vw,48px);
        text-shadow:0 0 20px rgba(255,200,230,.3);
        opacity:0;
        transition:1.2s ease;
        z-index:20;
    }

    .party-message.show {
        opacity:1;
        transform:translate(-50%,0);
    }

    /* CONFETTI */

    .confetti {
        position:absolute;
        inset:0;
        pointer-events:none;
        z-index:40;
        opacity:0;
    }

    .confetti:before,
    .confetti:after {
        content:"✦  ✧  ✦  ✧  ✦  ✧  ✦";
        position:absolute;
        left:50%;
        top:30%;
        transform:translateX(-50%) scale(.5);
        font-size:30px;
        letter-spacing:25px;
    }

    .confetti.burst {
        opacity:1;
        animation:confettiBurst 2s ease forwards;
    }

    @keyframes confettiBurst {
        0%{transform:translateY(20px) scale(.5);opacity:0}
        30%{opacity:1}
        100%{transform:translateY(300px) scale(1.4);opacity:0}
    }

    .fade-to-next {
        animation:fadeOutParty 1.5s ease forwards;
    }

    @keyframes fadeOutParty {
        to{opacity:0}
    }

    @media(max-width:600px) {

        .girl-avatar,
        .boy-avatar {
            width:115px;
        }

        .girl-avatar {
            left:12%;
        }

        .boy-avatar.enter {
            right:12%;
        }

        .cake {
            transform:translateX(-50%) scale(.55);
        }

        .party-message {
            font-size:30px;
        }
    }

    `;

    document.head.appendChild(style);
}
