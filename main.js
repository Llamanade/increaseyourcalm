let w = window.innerHeight / window.innerWidth + 'px';

if (window.innerWidth >= window.innerHeight) {
    console.log("bye")
    document.querySelectorAll(".focusedBreathing").style.gridAutoColumns = w;
}