const ball = document.querySelector('.ball');

ball.addEventListener('click', function () {
    ball.classList.toggle('move');
});

window.addEventListener('mousemove', function (e) {
    if (ball.classList.contains('move')) {
        ball.style.left = e.pageX - 50 + 'px';
        ball.style.top = e.pageY - 50 + 'px';
    }
});