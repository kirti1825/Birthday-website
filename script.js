const enterButton = document.getElementById("enterButton");
const openingScreen = document.querySelector(".opening-screen");
const birthdayAnimation = document.getElementById("birthdayAnimation");

enterButton.addEventListener("click", () => {
    enterButton.disabled = true;
    enterButton.textContent = "OPENING...";

    // Fade out the first screen
    openingScreen.style.transition = "opacity 1.5s ease";
    openingScreen.style.opacity = "0";

    setTimeout(() => {
        openingScreen.style.display = "none";
        birthdayAnimation.classList.remove("hidden");

        birthdayAnimation.innerHTML = `
            <div class="gate-scene">

                <div class="night-sky">
                    <div class="moon"></div>
                    <div class="star star1"></div>
                    <div class="star star2"></div>
                    <div class="star star3"></div>
                    <div class="star star4"></div>
                    <div class="star star5"></div>
                    <div class="star star6"></div>
                </div>

                <div class="welcome-text">
                    Welcome to the party, my cutiee...!! 💗
                </div>

                <div class="ground"></div>

                <div class="character">
                    <img src="1788853009972.png" alt="Character">
                </div>

                <div class="gate-area">

                    <div class="gate">
                        <div class="gate-top"></div>

                        <div class="gate-left">
                            <div class="gate-detail"></div>
                            <div class="gate-detail"></div>
                            <div class="gate-detail"></div>
                        </div>

                        <div class="gate-right">
                            <div class="gate-detail"></div>
                            <div class="gate-detail"></div>
                            <div class="gate-detail"></div>
                        </div>

                        <div class="gate-middle"></div>
                    </div>

                    <div class="knock-text">
                        Knock... Knock...
                    </div>

                </div>

                <button id="letsGoButton">LET'S GO →</button>

            </div>
        `;

        addGateStyles();

        // Character walks toward the gate
        setTimeout(() => {
            document.querySelector(".character").classList.add("walking");
        }, 500);

        // Knock happens after he reaches the gate
        setTimeout(() => {
            const gate = document.querySelector(".gate");
            const knockText = document.querySelector(".knock-text");

            gate.classList.add("knocking");
            knockText.classList.add("show");

            setTimeout(() => {
                gate.classList.remove("knocking");
            }, 700);

        }, 4200);

        // LET'S GO
        setTimeout(() => {
            document.getElementById("letsGoButton").classList.add("show");
        }, 5200);

        document.getElementById("letsGoButton").addEventListener("click", () => {

            const gate = document.querySelector(".gate");

            gate.classList.add("opening");

            document.getElementById("letsGoButton").style.display = "none";

            setTimeout(() => {
                alert("Party time! 🎉");
            }, 1800);
        });

    }, 1500);
});


function addGateStyles() {

    const style = document.createElement("style");

    style.innerHTML = `

    .gate-scene {
        position: fixed;
        inset: 0;
        overflow: hidden;
        background: #05030a;
        font-family: Arial, sans-serif;
    }

    .night-sky {
        position: absolute;
        inset: 0;
        background:
            radial-gradient(circle at 70% 20%, rgba(100,70,130,.25), transparent 35%),
            linear-gradient(to bottom, #03020a, #090615 65%, #120c17);
    }

    .moon {
        position: absolute;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background: #f5edf7;
        top: 10%;
        right: 12%;
        box-shadow: 0 0 40px rgba(255,240,255,.35);
    }

    .star {
        position: absolute;
        width: 3px;
        height: 3px;
        background: white;
        border-radius: 50%;
        opacity: .8;
    }

    .star1 { top: 15%; left: 12%; }
    .star2 { top: 25%; left: 28%; }
    .star3 { top: 12%; left: 48%; }
    .star4 { top: 35%; left: 78%; }
    .star5 { top: 42%; left: 20%; }
    .star6 { top: 18%; left: 88%; }

    .ground {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 28%;
        background: linear-gradient(to top, #050306, transparent);
    }

    .welcome-text {
        position: absolute;
        top: 30px;
        right: 35px;
        z-index: 20;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        opacity: 0;
        animation: welcomeIn 1s ease forwards;
        animation-delay: 2s;
        text-shadow: 0 0 12px rgba(255,255,255,.25);
    }

    @keyframes welcomeIn {
        to {
            opacity: 1;
        }
    }

    /* CHARACTER */

    .character {
        position: absolute;
        bottom: 12%;
        left: -220px;
        z-index: 10;
        width: 180px;
        transition: left 3.5s cubic-bezier(.2,.7,.2,1);
    }

    .character img {
        width: 100%;
        display: block;
    }

    .character.walking {
        left: calc(50% - 300px);
    }

    /* BIG GATE */

    .gate-area {
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 8;
    }

    .gate {
        width: 430px;
        height: 500px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        transform-origin: bottom center;
        transition: transform 1.6s ease;
    }

    .gate-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 430px;
        height: 100px;
        background: linear-gradient(135deg,#19131d,#403344,#17121c);
        clip-path: polygon(50% 0,100% 55%,100% 100%,0 100%,0 55%);
        border: 3px solid #75647c;
        box-sizing: border-box;
    }

    .gate-left,
    .gate-right {
        position: absolute;
        bottom: 0;
        width: 205px;
        height: 410px;
        background:
            repeating-linear-gradient(
                90deg,
                #151018 0px,
                #151018 22px,
                #332839 23px,
                #332839 27px
            );
        border: 4px solid #75647c;
        box-sizing: border-box;
        transition: transform 1.6s ease;
    }

    .gate-left {
        left: 0;
        transform-origin: left center;
    }

    .gate-right {
        right: 0;
        transform-origin: right center;
    }

    .gate-detail {
        width: 70%;
        height: 55px;
        margin: 45px auto 0;
        border: 2px solid #806d87;
        border-radius: 50%;
        opacity: .55;
    }

    .gate-middle {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 12px;
        height: 410px;
        background: #8a748d;
        opacity: .5;
    }

    .knocking {
        animation: gateShake .12s linear 5;
    }

    @keyframes gateShake {
        0% { transform: translateX(0); }
        50% { transform: translateX(5px); }
        100% { transform: translateX(-5px); }
    }

    .knock-text {
        position: absolute;
        width: 100%;
        text-align: center;
        top: -45px;
        color: white;
        font-size: 17px;
        opacity: 0;
        transition: opacity .5s ease;
    }

    .knock-text.show {
        opacity: 1;
    }

    /* GATE OPENS */

    .gate.opening .gate-left {
        transform: perspective(600px) rotateY(-75deg);
    }

    .gate.opening .gate-right {
        transform: perspective(600px) rotateY(75deg);
    }

    #letsGoButton {
        position: absolute;
        bottom: 35px;
        right: 40px;
        z-index: 30;
        padding: 14px 25px;
        border: 1px solid rgba(255,255,255,.5);
        border-radius: 30px;
        background: rgba(20,15,25,.8);
        color: white;
        font-size: 16px;
        cursor: pointer;
        opacity: 0;
        transform: translateY(15px);
        transition: .5s ease;
    }

    #letsGoButton.show {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: 600px) {

        .welcome-text {
            top: 20px;
            right: 15px;
            font-size: 15px;
        }

        .gate {
            width: 300px;
            height: 380px;
        }

        .gate-top {
            width: 300px;
        }

        .gate-left,
        .gate-right {
            width: 145px;
            height: 310px;
        }

        .gate-middle {
            height: 310px;
        }

        .character {
            width: 130px;
        }

        .character.walking {
            left: calc(50% - 200px);
        }

        #letsGoButton {
            right: 20px;
            bottom: 20px;
        }
    }

    `;

    document.head.appendChild(style);
}
