const button = document.querySelector(".button");
const buttonIcon = document.querySelector("#button");
const desktopPopup = document.querySelector(".desktop");
const mobilePopup = document.querySelector(".mobile");
const description = document.querySelector('.author-details');
mobilePopup.style.display = 'none';

const contentTobeReplaced = document.querySelector(".author-details");

// check screen size
const mediaQuery = window.matchMedia("(max-width: 900px)");
mediaQuery.addEventListener("change", choosePopupStyle);
choosePopupStyle(mediaQuery);


function choosePopupStyle() {
    if (mediaQuery.matches) {
        checkTracesDesktop();
        button.addEventListener('click', toggleMobilePopup);
    } else {
        checkTracesMobile();
        button.addEventListener('click', toggleDesktopPopup);

    }
}
// if there's no second click to close popup, removes previous style when screensize changes
function checkTracesDesktop() {
    if (desktopPopup.style.display = "flex") {
        makeDesktopPopupDissapear();
        button.removeEventListener('click', toggleDesktopPopup);
    }
}
function checkTracesMobile() {
    if (mobilePopup.style.display = "flex") {
        removeMobilePopupBlock();
        button.removeEventListener('click', toggleMobilePopup);
    }
}
// swtich to mobile
function toggleMobilePopup() {
    if (button.classList.contains("button")) {
        addMobilePopupBlock();
    } else {
        removeMobilePopupBlock();
    }
}
//switch to desktop
function toggleDesktopPopup() {
    if (button.classList.contains("button")) {
        makeDesktopPopupVisible();
    } else {
        makeDesktopPopupDissapear();
    }
}


// mobile styling
function addMobilePopupBlock() {
    mobilePopup.style.display = "flex";
    description.style.display = 'none'
    button.classList.replace("button", "button-active-mobile");
    buttonIcon.style.fill = "#ffffff";
    document.querySelector(".author").style.backgroundColor =
        "var(--dark-grayish)";
}
function removeMobilePopupBlock() {
    mobilePopup.style.display = "none";
    description.style.display = 'flex'
    button.classList.replace("button-active-mobile", "button");
    buttonIcon.style.fill = "var(--dark-blue)";
    document.querySelector(".author").style.backgroundColor = "white";
}


// desktop styling

function makeDesktopPopupVisible() {
    desktopPopup.style.display = "flex";
    button.classList.replace("button", "button-active-desktop");
    buttonIcon.style.fill = "#ffffff";
}

function makeDesktopPopupDissapear() {
    desktopPopup.style.display = "none";
    button.classList.replace("button-active-desktop", "button")
    buttonIcon.style.fill = "var(--dark-blue)";
}


