const myH1 = document.getElementById("h1");
const myH2 = document.getElementById("h2");
const myH3 = document.getElementById("h3");

const textH1 = "Manage";
const textH2 = "insights";
const textH3 = "potencial";

const interval = 100;

function enterWord(element, finalText) {
    let index = 0;

    function addLetter() {
        element.textContent += finalText[index];
        index++;
        if (index < finalText.length) {
            setTimeout(addLetter, interval)
        } else {
            setTimeout(clearLetter, interval * 10);
        }
    }

    function clearLetter() {
        const currentText = element.textContent;
        element.textContent = currentText.slice(0, -1);
        if (currentText.length > 0) {
            setTimeout(clearLetter, interval);
        } else {
            setTimeout(function () {
                enterWord(element, finalText);
            }, interval * 2);
        }
    }
    addLetter();
}

enterWord(myH1, textH1);
enterWord(myH2, textH2);
enterWord(myH3, textH3);

