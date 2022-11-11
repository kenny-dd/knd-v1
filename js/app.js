let scrollToTop = () => {
    let scrollButton = document.querySelector(".scroll-top");
    let pos = document.documentElement.scrollTop;
    if (pos > 500) {
        scrollButton.style.display = "flex";
    }
    else {
        scrollButton.style.display = "none";
    };
    
};

window.onscroll = scrollToTop;
window.onload = scrollToTop;