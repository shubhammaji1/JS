const Clock = document.querySelector('#clock')

setInterval(() => {
    const date = new Date();
    Clock.innerHTML = date.toLocaleTimeString();
}, 1000);


