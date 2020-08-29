
const form = document.getElementById('sendcontainer');
const socket = io('http://localhost:8000');
// 'http://localhost:8000'
const messageinput = document.getElementById('messagesender');
const messagecontainer = document.querySelector('.container');
let sendton = new Audio('zapsplat_cartoon_pop_mouth_014_46677.mp3');
let recton = new Audio('zapsplat_cartoon_pop_small_001_54699.mp3');

// a.getHours() + a.get



// setInterval(() => {
//     a = new Date();
// }, 1);
a = new Date();
console.log(a.getSeconds());



const append = (message, position) => {
    const messageelement = document.createElement('div');
    messageelement.innerText = message;
    messageelement.classList.add('message')
    messageelement.classList.add(position)
    messagecontainer.append(messageelement);
    if (position == 'left') {
        sendton.play();

    }
    else {
        recton.play();
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageinput.value;
    append(`You:    ${message}`, 'right');
    socket.emit('send', message);
    messageinput.value = "";

})

let name = prompt("enter your name to join");


socket.emit('new- user-joined', name);





socket.on('user-joined', name => {
    b = new Date();

    append(`${name} :joined chat at ${b.getMinutes()} minutes and ${b.getSeconds()} seconds`, 'left');


})

setInterval(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = a.toLocaleDateString(undefined, options);
    c = new Date();
    document.getElementById('information').innerHTML = `Welcome ${name} !!!!`;
    document.getElementById('information').style.color = "black";
    document.getElementById('informationn').innerHTML = `Its ${c.getHours()} Hours ${c.getMinutes()} minutes  and ${c.getSeconds()} seconds on ${date}`;
    document.getElementById('informationn').style.color = "black";
}, 1);



socket.on('recieve', data => {
    append(` ${data.name}: '&nbsp;' ${data.message} `, 'left')

})

socket.on('leave', user => {
    append(` ${user.name} left`, 'left')

})





const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    d = new Date();
    // a.getHours() + a.get

    console.log(d.getHours())
    let date = d.toLocaleDateString(undefined, options);
    let time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ':' + d.getMilliseconds();
    // document.getElementById('timming').innerHTML = time;


    // document.getElementById('timmingg').innerHTML = date;
    if (d.getHours() < 17) {
        // document.getElementById('back-img').style.backgroundImage = "url('blue-clouds-cute-nature-Favim.com-2960018.png')"

        document.getElementById('navbar').style.backgroundColor = " rgb(61, 200, 238)"
        document.getElementById('navbarr').style.backgroundColor = " rgb(61, 200, 238)"
        document.getElementById('back-img').style.backgroundImage = "linear-gradient(to bottom right, white, rgb(169, 226, 241))"
        document.getElementById('loud').style.backgroundImage = "url('color-2174045.png')"
        // dark - theme - pi1.jpg
    }
    else if (d.getHours() > 19) {
        document.getElementById('back-img').style.backgroundImage = "linear - gradient(to bottom right, white, rgb(243, 169, 127))"
        document.getElementById('navbar').style.backgroundColor = " rgb(17, 39, 80)"
        document.getElementById('navbarr').style.backgroundColor = " rgb(17, 39, 80)"
        document.getElementById('loud').style.backgroundImage = "url('imageonline-co-darkenimage.png')"
        document.getElementById('information').style.color = "white";
        document.getElementById('informationn').style.color = "white";
    }
    else {

    }
    // else if (a.getHours() < 19) {
    //     // document.getElementById('back-img').style.backgroundImage = "url('pexels-stephan-seeber-1261728.jpg')"
    // }
    // else {
    //     // document.getElementById('back-img').style.backgroundImage = "url('pexels-pixabay-207130.jpg')"
    // }

}, 1);