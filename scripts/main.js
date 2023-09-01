const main = document.getElementById("main");
const video = document.getElementById("video");

const checkBtn = document.getElementById("checkBtn");
const startBtn = document.getElementById("startBtn");
const fakeEndBtn = document.getElementById("fakeEndBtn");
const endBtn = document.getElementById("endBtn");

const startModal = new bootstrap.Modal(document.getElementById("startModal"), {});
const successModal = new bootstrap.Modal(document.getElementById("successModal"), {});
const failModal = new bootstrap.Modal(document.getElementById("failModal"), {});
const endModal = new bootstrap.Modal(document.getElementById("endModal"), {});
const endModal1 = new bootstrap.Modal(document.getElementById("endModal1"), {});
const endModal2 = new bootstrap.Modal(document.getElementById("endModal2"), {});
const endModal3 = new bootstrap.Modal(document.getElementById("endModal3"), {});

const letter1 = document.getElementById("letter1");
const letter2 = document.getElementById("letter2");
const letter3 = document.getElementById("letter3");
const letter4 = document.getElementById("letter4");
const letter5 = document.getElementById("letter5");
const letter6 = document.getElementById("letter6");
const letter7 = document.getElementById("letter7");
const letter8 = document.getElementById("letter8");
const letter9 = document.getElementById("letter9");
const letter10 = document.getElementById("letter10");

const letters = [letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter8, letter9, letter10];

for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];

    letter.oninput = function() {
        if (!letter.value)
            return;

        if (i == letters.length - 1) {
            checkBtn.focus();
        }
        else {
            const nextLetter = letters[i + 1];
            nextLetter.focus();
            nextLetter.select();
        }
    }
}

checkBtn.onclick = function() {
    const validationRegex = /ятебекохаю/i;

    const input = letters.map(l => l.value).join('');
    const isValid = input.match(validationRegex);
    const modal = isValid ? successModal : failModal;

    modal.show();
}

startBtn.onclick = function() {
    startModal.show();
    
    main.classList.remove("d-none");
    startBtn.classList.add("d-none");
}

fakeEndBtn.onclick = async function() {
    successModal.hide();
    endModal1.show();

    await sleep(8000);

    endModal1.hide();
    endModal2.show();

    await sleep(3000);

    endModal2.hide();
    endModal3.show();

    await sleep(6000);

    endModal3.hide();
    endModal.show();
}

endBtn.onclick = function() {
    startVideo();
}

function startVideo() {
    video.hidden = false;
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
    }
    video.play();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}