let car = document.getElementById("car");
let volan = document.getElementById("volan");
let target = document.getElementById("target");

car.style.top = "250px"
car.style.left = "500px"

let volan_rotirano = 0; 
let auto_rotirano = -90;

let modifier = 10;
let keysPressed = {};

let parking_br=1;
let zadnje = "forward"

function odredi_parking() {
    parking_br = Math.floor(Math.random() * 5)+1

    if(parking_br == 1){
        target.style.top = "25px"
    } else if(parking_br == 2){
        target.style.top = "190px"
    }
}

function move_forward(modifier) {
    if(zadnje == "backwards")
        auto_rotirano = Math.floor(auto_rotirano + volan_rotirano/(15*(15/modifier)))

    zadnje = "forward"

    car.style.top = `${Math.floor(parseInt(car.style.top) + modifier * Math.sin(Math.PI/180 * (auto_rotirano)))}px`;
    car.style.left = `${Math.floor(parseInt(car.style.left) + modifier * Math.cos(Math.PI/180 * (auto_rotirano)))}px`;

    car.style.transform = `rotate(${Math.floor(auto_rotirano + (volan_rotirano/(15*(15/modifier))))}deg)`
    auto_rotirano = Math.floor(auto_rotirano + volan_rotirano/(15*(15/modifier)))
}

function move_backwards(modifier) {
    if(zadnje == "forward")
        auto_rotirano = Math.floor(auto_rotirano - volan_rotirano/(15*(15/modifier)))

    zadnje = "backwards"

    car.style.top = `${Math.floor(parseInt(car.style.top) - modifier * Math.sin(Math.PI/180 * (auto_rotirano)))}px`;
    car.style.left = `${Math.floor(parseInt(car.style.left) - modifier * Math.cos(Math.PI/180 * (auto_rotirano)))}px`;

    car.style.transform = `rotate(${Math.floor(auto_rotirano - (volan_rotirano/(15*(15/modifier))))}deg)`
    auto_rotirano = Math.floor(auto_rotirano - volan_rotirano/(15*(15/modifier)))
}

function pomak(modifier){
    if(keysPressed["ArrowUp"] == true)
        move_forward(modifier);
    if(keysPressed["ArrowDown"] == true)
        move_backwards(modifier);
    if(keysPressed["ArrowLeft"] == true) {
        if(volan_rotirano >= -90+modifier)
            volan_rotirano -= modifier;

        if(volan_rotirano == 0)
            car.style.backgroundImage = "url('img/car_0.png')"
        if(volan_rotirano < 0)
            car.style.backgroundImage = "url('img/car_-30.png')"
        if(volan_rotirano < -30)
            car.style.backgroundImage = "url('img/car_-60.png')"
        if(volan_rotirano < -60)
            car.style.backgroundImage = "url('img/car_-90.png')"
        if(volan_rotirano > 0)
            car.style.backgroundImage = "url('img/car_30.png')"
        if(volan_rotirano > 30)
            car.style.backgroundImage = "url('img/car_60.png')"
        if(volan_rotirano > 60)
            car.style.backgroundImage = "url('img/car_90.png')"

    } if(keysPressed["ArrowRight"] == true) {
        if(volan_rotirano <= 90-modifier)
            volan_rotirano += modifier;
            if(volan_rotirano == 0)
            car.style.backgroundImage = "url('img/car_0.png')"
        if(volan_rotirano < 0)
            car.style.backgroundImage = "url('img/car_-30.png')"
        if(volan_rotirano < -30)
            car.style.backgroundImage = "url('img/car_-60.png')"
        if(volan_rotirano < -60)
            car.style.backgroundImage = "url('img/car_-90.png')"
        if(volan_rotirano > 0)
            car.style.backgroundImage = "url('img/car_30.png')"
        if(volan_rotirano > 30)
            car.style.backgroundImage = "url('img/car_60.png')"
        if(volan_rotirano > 60)
            car.style.backgroundImage = "url('img/car_90.png')"

    }

    volan.style.transform = `rotate(${volan_rotirano}deg)`
}

function volan_pocetno(){
    if(Object.keys(keysPressed).length == 0){
        volan.style.transform = `rotate(${0}deg)`
        car.style.backgroundImage = "url('img/car_0.png')"
        volan_rotirano = 0;
    }
}

document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];

    if(Object.keys(keysPressed).length == 0){
        setTimeout(volan_pocetno, 250);
    }

    pomak(modifier)
});

document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    pomak(modifier);
}, false);

function createImage(path){
    let image = new Image();
    image.src = path;
    return image;
}
  
var images = {
    dino:[
      createImage("img/car_0.png"),
      createImage("img/car_90.png"),
      createImage("img/car_-90.png"),
      createImage("img/car_-60.png"),
      createImage("img/car_30.png"),
      createImage("img/car_-30.png")
    ]
}

//odredi_parking();