
const fadeIn = (elem, opacity, intervalID) => {
    intervalID = requestAnimationFrame(fadeIn);
    while (opacity < 1) {
        opacity += 0.05;
        elem.style.opacity = opacity;
    } 
        cancelAnimationFrame(intervalID);
    //}
};
export default fadeIn;