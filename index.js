const button = document.querySelector(".button");
const buttonIcon = document.querySelector("#button");
// desktop queries
const popup = document.querySelector(".desktop");
// mobile queries
// const description = document.querySelector(".author");//=> gives problems with chidren (*1)
const mobilePopup = document.querySelector(".mobile");
const description = document.querySelector('.author-details')//*1 test
mobilePopup.style.display = 'none'//*1 test

const contentTobeReplaced = document.querySelector(".author-details");

// check screen size
const mediaQuery = window.matchMedia("(max-width: 900px)");
mediaQuery.addEventListener("change", choosePopupStyle);
choosePopupStyle(mediaQuery);


function choosePopupStyle() {
    if (mediaQuery.matches) {
        checkTracesDesktop();
        button.addEventListener('click', toggleAuthorBlockContent);
    } else {
        checkTracesMobile();
        button.addEventListener('click', togglePopup);

    }
}
// remove previous styles when screensize changes
function checkTracesDesktop() {
    if (button.classList.contains("button-active-desktop")) {
        makePopupDissapear();
        button.removeEventListener('click', togglePopup);

    }
}
function checkTracesMobile() {
    if (button.classList.contains("button-active-mobile")) {
        removePopupBlock();
        button.removeEventListener('click', toggleAuthorBlockContent);
    }
}
// mobile design
function toggleAuthorBlockContent() {
    if (button.classList.contains("button")) {
        addPopupBlock();
    } else {
        removePopupBlock();
    }
}
//desktop design
function togglePopup() {
    if (button.classList.contains("button")) {
        makePopupVisible();
    } else {
        makePopupDissapear();
    }
}


// mobile styling
function addPopupBlock() {
    mobilePopup.style.display = "flex";
    // description.replaceChild(mobilePopup, contentTobeReplaced);// *1

    description.style.display = 'none'//*1 test

    button.classList.replace("button", "button-active-mobile");
    buttonIcon.style.fill = "#ffffff";
    document.querySelector(".author").style.backgroundColor =
        "var(--dark-grayish)";
}
function removePopupBlock() {
    mobilePopup.style.display = "none";
    // description.replaceChild(contentTobeReplaced, mobilePopup); //*1

    description.style.display = 'flex'//*1 test

    button.classList.replace("button-active-mobile", "button");
    buttonIcon.style.fill = "var(--dark-blue)";
    document.querySelector(".author").style.backgroundColor = "white";
}


// desktop styling

function makePopupVisible() {
    popup.style.display = "flex";
    button.classList.replace("button", "button-active-desktop");
    buttonIcon.style.fill = "#ffffff";
}

function makePopupDissapear() {
    popup.style.display = "none";
    button.classList.replace("button-active-desktop", "button")
    buttonIcon.style.fill = "var(--dark-blue)";
}


