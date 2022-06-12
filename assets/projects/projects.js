// display "go to top" button when user scrolls down
document.getElementById("content").addEventListener("scroll", scrollHandler);
document.addEventListener("scroll", scrollHandler);
function scrollHandler(e) {
    var scrollTop = e.target.scrollTop ?? e.target.scrollingElement.scrollTop;
    if (scrollTop > 0) {
        document.getElementById("to-the-top").style.display = "block";
    } else {
        document.getElementById("to-the-top").style.display = "none";
    }
}

// handle clicking of "go to top" button
document.getElementById("to-the-top-link").addEventListener("click", function () {
    document.getElementById("content").scrollTo({ top: 0, behavior: "smooth" });
});