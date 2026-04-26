function swapTheme() {
    let div = document.querySelector('.day, .night');
    let btn = document.querySelector('.button_day, .button_night');

    div.classList.toggle('night');
    div.classList.toggle('day');

    btn.classList.toggle('button_night');
    btn.classList.toggle('button_day');
}