const enterButton = document.getElementById("enterButton");
const openingScreen = document.querySelector(".opening-screen");
const birthdayAnimation = document.getElementById("birthdayAnimation");

enterButton.addEventListener("click", () => {
    enterButton.disabled = true;
    enterButton.textContent = "OPENING... ✨";

    openingScreen.style.transition = "opacity 1s ease";
    openingScreen.style.opacity = "0";

    setTimeout(() => {
        openingScreen.style.display = "none";
        birthdayAnimation.classList.remove("hidden");

        birthdayAnimation.innerHTML = `
            <div class="party-scene">

                <div class="night-sky">
                    <div class="big-moon"></div>

                    <div class="gate">
                        <div class="gate-top">✦ ✦ ✦</div>
                        <div class="gate-door">
                            <span>🚪</span>
                        </div>
                    </div>

                    <div class="knock-text">
                        knock knock... 👀
                    </div>

                    <div class="character">
                        <img src="couple.png" alt="Birthday characters">
                    </div>

                    <div class="party-message">
                        <h1>Welcome to the party! 🎉</h1>
                        <p>Someone's birthday adventure is about to begin...</p>
                    </div>

                    <div class="confetti">
                        🎊 ✨ 🎈 🎉 ✨ 🎊
                    </div>

                    <button id="continueButton">
                        LET'S GO → ✨
                    </button>

                </div>

            </div>
        `;

        addPartyStyles();

        setTimeout(() => {
            document.querySelector(".knock-text").classList.add("show");
        }, 1000);

        setTimeout(() => {
            document.querySelector(".gate").classList.add("open");
        }, 2200);

        setTimeout(() => {
            document.querySelector(".character").classList.add("show");
        }, 3000);

        setTimeout(() => {
            document.querySelector(".party-message").classList.add("show");
            document.querySelector(".confetti").classList.add("show");
        }, 4300);

        document
            .getElementById("continueButton")
            .addEventListener("click", () => {
                alert("Relationship quiz coming next! ❤️");
            });

    }, 1000);
});


function addPartyStyles() {

    const style = document.createElement("style");

    style.textContent = `

        .party-scene {
            min-height: 100vh;
            min-height: 100svh;
            overflow: hidden;
        }

        .night-sky {
            position: relative;
            min-height: 100vh;
            min-height: 100svh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background:
                radial-gradient(circle at 50% 20%, #202d70, #090e2b 55%, #030615);
        }

        .big-moon {
            position: absolute;
            top: 8%;
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: #fff7d6;
            box-shadow: 0 0 45px rgba(255,255,220,.4);
        }

        .gate {
            position: relative;
            z-index: 3;
            width: 190px;
            height: 230px;
            transition: transform 1.2s ease;
        }

        .gate-top {
            text-align: center;
            color: #fff0a8;
            font-size: 20px;
            margin-bottom: 10px;
        }

        .gate-door {
            height: 200px;
            border: 5px solid #c7a86a;
            border-radius: 15px 15px 0 0;
            background: linear-gradient(90deg, #22284b, #11162f, #22284b);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 45px;
            box-shadow: 0 0 25px rgba(255,220,130,.25);
        }

        .gate.open {
            transform: scaleX(1.15) translateY(-20px);
            opacity: .45;
        }

        .knock-text {
            position: absolute;
            top: 57%;
            opacity: 0;
            color: white;
            font-size: 18px;
            font-family: Arial, sans-serif;
            transition: opacity .6s ease;
        }

        .knock-text.show {
            opacity: 1;
        }

        .character {
            position: absolute;
            bottom: 17%;
            opacity: 0;
            transform: translateY(60px) scale(.8);
            transition: all 1s ease;
            z-index: 4;
        }

        .character.show {
            opacity: 1;
            transform: translateY(0) scale(.8);
        }

        .character img {
            width: min(90vw, 360px);
            border-radius: 25px;
            box-shadow: 0 0 30px rgba(255,255,255,.15);
        }

        .party-message {
            position: absolute;
            top: 8%;
            text-align: center;
            width: 90%;
            opacity: 0;
            transform: translateY(-15px);
            transition: all 1s ease;
            z-index: 5;
        }

        .party-message.show {
            opacity: 1;
            transform: translateY(0);
        }

        .party-message h1 {
            font-size: clamp(25px, 7vw, 40px);
            margin-bottom: 10px;
            color: white;
        }

        .party-message p {
            font-family: Arial, sans-serif;
            color: #dce2ff;
        }

        .confetti {
            position: absolute;
            bottom: 28%;
            font-size: 25px;
            opacity: 0;
            transition: opacity 1s ease;
            z-index: 6;
        }

        .confetti.show {
            opacity: 1;
            animation: partyBounce .8s ease infinite alternate;
        }

        #continueButton {
            position: absolute;
            bottom: 7%;
            padding: 14px 25px;
            border: 1px solid rgba(255,255,255,.3);
            border-radius: 50px;
            background: rgba(120,140,255,.25);
            color: white;
            font-weight: bold;
            font-size: 14px;
            z-index: 10;
        }

        @keyframes partyBounce {
            from { transform: translateY(0); }
            to { transform: translateY(-12px); }
        }
    `;

    document.head.appendChild(style);
}
