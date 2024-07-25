function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const text = "Faster. Safe. Smart Route.";
const el = document.getElementById("typewriter");

let sleepTime = 100;

const writeLoop = async () => {
    while (true) {
        let displayText = "";

        for (let i = 0; i < text.length; i++) {
            if (text[i] === '.') {
                displayText += '<span class="dot">.</span>';
            } else {
                displayText += text[i];
            }
            el.innerHTML = displayText;
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = text.length; i > 0; i--) {
            displayText = "";
            for (let j = 0; j < i; j++) {
                if (text[j] === '.') {
                    displayText += '<span class="dot">.</span>';
                } else {
                    displayText += text[j];
                }
            }
            el.innerHTML = displayText;
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);
    }
};

writeLoop();
