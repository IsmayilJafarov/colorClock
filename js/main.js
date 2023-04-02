const clock = document.getElementById('clock');
const color = document.getElementById('color');

function colorClock() {
    const time = new Date;

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    if (h < 10) h ='0' + h;
    if (m < 10) m ='0' + m;
    if (s < 10) s ='0' + s;


    const clockString = h + ':' + m + ':' + s;
    const colorString = '#' + h + m + s;

    clock.textContent = clockString;
    color.textContent = colorString;

    document.body.style.background = colorString;
}
colorClock();
setInterval(colorClock, 1000);
