AOS.init();

HTMLElement.prototype.alpha = function (a) {
    current_color = getComputedStyle(this).getPropertyValue("background-color");
    match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(current_color)
    a = a > 1 ? (a / 100) : a;
    this.style.backgroundColor = "rgba(" + [match[1], match[2], match[3], a].join(',') + ")";
}
HTMLElement.prototype.bottomBorderAlpha = function (a) {
    current_color = getComputedStyle(this).getPropertyValue("border-bottom-color");
    match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(current_color)
    a = a > 1 ? (a / 100) : a;
    this.style.borderBottomColor = "rgba(" + [match[1], match[2], match[3], a].join(',') + ")";
}

const scrollDependantElements = document.getElementsByClassName('scroll-dependant');
window.onscroll = () => {
    for (let element of scrollDependantElements) {
        if (window.scrollY > window.innerHeight * 1) {
            element.alpha(1);
            element.bottomBorderAlpha(1);
        } else {
            element.alpha(window.scrollY / window.innerHeight);
            element.bottomBorderAlpha(window.scrollY / window.innerHeight);
        }
    }
};