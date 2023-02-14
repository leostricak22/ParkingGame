let car = document.getElementById("car");
let volan = document.getElementById("volan");
let target = document.getElementById("target");

car.style.top = "0px"
car.style.left = "0px"

let volan_rotirano = 0; 
let auto_rotirano = -90;

console.log(parseInt(car.style.top) + "px")

let modifier = 15;
let keysPressed = {};

let parking_br=1;

function odredi_parking() {
    parking_br = Math.floor(Math.random() * 5)+1

    if(parking_br == 1){
        target.style.top = "25px"
    } else if(parking_br == 2){
        target.style.top = "190px"
    }

    console.log("park:" +parking_br)
}

function pomak(modifier){
    if(keysPressed["ArrowUp"] == true) {
        car.style.top = `${parseInt(car.style.top) + modifier * Math.sin(Math.PI/180 * (auto_rotirano))}px`;
        car.style.left = `${parseInt(car.style.left) + modifier * Math.cos(Math.PI/180 * (auto_rotirano))}px`;

        car.style.transform = `rotate(${auto_rotirano + (volan_rotirano/modifier)}deg)`
        auto_rotirano = auto_rotirano + volan_rotirano/modifier
    } if(keysPressed["ArrowDown"] == true) {
        car.style.top = `${parseInt(car.style.top) - modifier * Math.sin(Math.PI/180 * (auto_rotirano))}px`;
        car.style.left = `${parseInt(car.style.left) - modifier * Math.cos(Math.PI/180 * (auto_rotirano))}px`;

        car.style.transform = `rotate(${auto_rotirano + (volan_rotirano/modifier)}deg)`
        auto_rotirano = auto_rotirano + volan_rotirano/modifier
    } if(keysPressed["ArrowLeft"] == true) {
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

    console.log(volan_rotirano)
    volan.style.transform = `rotate(${volan_rotirano}deg)`
}
 
document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
    pomak(modifier)
});


document.addEventListener('keydown', (event) => {
    let code = event.code;

    keysPressed[event.key] = true;
    console.log(keysPressed)

    pomak(modifier);
}, false);

odredi_parking();