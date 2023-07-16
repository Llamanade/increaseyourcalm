setInterval(function myFunction(){
    let width = window.innerWidth
    let height = window.innerHeight
    let x
    let nav

    if (height >= width) {
        x = true
    }
    else if (height < width) {
        x = false
    }

    if (x == true) {
        document.body.style.setProperty('--fontSize', '2.8vw');
        document.body.style.setProperty('--fontSizeHeading', '5vw');
        document.body.style.setProperty('--fontSizeTitle', '10vw');

        document.body.style.setProperty('--fontSizeOverlay', '1.5vw');
        document.body.style.setProperty('--overlaySize', '23vw');
        document.body.style.setProperty('--overlayTransform', '+1vw');
        document.body.style.setProperty('--textTransform', '-24vw');

        document.body.style.setProperty('--marginSmall', '5%');

        document.body.style.setProperty('--columnWidth', '25%');

        document.body.style.setProperty('--borderWidth', '1vw');

        document.body.style.setProperty('--gap', '10%');

        document.body.style.setProperty('--top', '5%');

        document.body.style.setProperty('--rows', '25% 25% 25%');

        document.body.style.setProperty('--rowGap', '5%');
        if (nav == true) {
            document.body.style.setProperty('--fontSize', '2.8vw');
            document.body.style.setProperty('--fontSizeHeading', '5vw');
            document.body.style.setProperty('--fontSizeTitle', '10vw');

            document.body.style.setProperty('--fontSizeOverlay', '1vw');
            document.body.style.setProperty('--overlaySize', '18vw');
            document.body.style.setProperty('--overlayTransform', '.5vw');
            document.body.style.setProperty('--textTransform', '-18vw');

            document.body.style.setProperty('--marginSmall', '2.83%');

            document.body.style.setProperty('--borderWidth', '.57vw');

            document.body.style.setProperty('--top', '2.83%');
        }
    }
    else if (x == false) {
        document.body.style.setProperty('--fontSize', '1.4vw');
        document.body.style.setProperty('--fontSizeHeading', '2.5vw');
        document.body.style.setProperty('--fontSizeTitle', '5vw');

        document.body.style.setProperty('--fontSizeOverlay', '.75vw');
        document.body.style.setProperty('--overlaySize', '11.5vw');
        document.body.style.setProperty('--overlayTransform', '+.5vw');
        document.body.style.setProperty('--textTransform', '-12vw');

        document.body.style.setProperty('--marginSmall', '2.5%');

        document.body.style.setProperty('--columnWidth', '12.5%');

        document.body.style.setProperty('--borderWidth', '.5vw');

        document.body.style.setProperty('--gap', '5%');

        document.body.style.setProperty('--top', '2.5%');

        document.body.style.setProperty('--rows', '15% 15% 15% 15% 15%');

        document.body.style.setProperty('--rowGap', '2.5%');
        if (nav == true) {
            document.body.style.setProperty('--fontSize', '1.4vw');
            document.body.style.setProperty('--fontSizeHeading', '2.5vw');
            document.body.style.setProperty('--fontSizeTitle', '5vw');

            document.body.style.setProperty('--fontSizeOverlay', '.5vw');
            document.body.style.setProperty('--overlaySize', '9vw');
            document.body.style.setProperty('--overlayTransform', '.25vw');
            document.body.style.setProperty('--textTransform', '-9vw');

            document.body.style.setProperty('--marginSmall', '1.41%');

            document.body.style.setProperty('--borderWidth', '.283vw');

            document.body.style.setProperty('--top', '1.41%');
        }
    }
}, 0);

function openNav() {
    nav = true
    document.getElementById("mySidenav").style.width = "25vw";
    document.getElementById("main").style.marginLeft = "25vw";
}
function closeNav() {
    nav = false
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0px";
}