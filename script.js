// 🎂 Opening button
const enterButton = document.getElementById("enterButton");
const openingScreen = document.querySelector(".opening-screen");
const birthdayAnimation = document.getElementById("birthdayAnimation");

enterButton.addEventListener("click", function () {

    // Small click feedback
    enterButton.textContent = "ENTERING... ✨";
    enterButton.disabled = true;

    // Fade out the opening screen
    openingScreen.style.transition = "opacity 1s ease";
    openingScreen.style.opacity = "0";

    // After the fade, hide opening and show the next section
    setTimeout(function () {
        openingScreen.style.display = "none";
        birthdayAnimation.classList.remove("hidden");

        birthdayAnimation.innerHTML = `
            <div style="
                min-height: 100vh;
                min-height: 100svh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #05091c;
                color: white;
                text-align: center;
                font-family: Arial, sans-serif;
                padding: 25px;
            ">
                <div>
                    <div style="font-size: 55px;">🚧</div>

                    <h2 style="margin: 15px 0;">
                        Birthday Party Loading...
                    </h2>

                    <p style="color: #cdd4ff;">
                        The gate animation is coming next. 🌙✨
                    </p>
                </div>
            </div>
        `;

    }, 1000);
});
