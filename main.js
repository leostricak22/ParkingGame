let car = document.getElementById("car");
let volan = document.getElementById("volan");

car.style.top = "0px"
car.style.left = "0px"

let volan_rotirano = 0; 
let auto_rotirano = -90;

console.log(parseInt(car.style.top) + "px")


document.addEventListener('keydown', (event) => {
    let code = event.code;
    let modifier = 15;

    if(code == "ArrowUp") {
        car.style.top = `${parseInt(car.style.top) + modifier * Math.sin(Math.PI/180 * (auto_rotirano))}px`;
        car.style.left = `${parseInt(car.style.left) + modifier * Math.cos(Math.PI/180 * (auto_rotirano))}px`;

        car.style.transform = `rotate(${auto_rotirano + (volan_rotirano/modifier)}deg)`
        auto_rotirano = auto_rotirano + volan_rotirano/modifier
    } else if(code == "ArrowDown") {
        car.style.top = `${parseInt(car.style.top) - modifier * Math.sin(Math.PI/180 * (auto_rotirano))}px`;
        car.style.left = `${parseInt(car.style.left) - modifier * Math.cos(Math.PI/180 * (auto_rotirano))}px`;

        car.style.transform = `rotate(${auto_rotirano + (volan_rotirano/modifier)}deg)`
        auto_rotirano = auto_rotirano + volan_rotirano/modifier
    } else if(code == "ArrowLeft") {
        if(volan_rotirano >= -90+modifier)
            volan_rotirano -= modifier;
    } else if(code == "ArrowRight") {
        if(volan_rotirano <= 90-modifier)
            volan_rotirano += modifier;
    }

    console.log(volan_rotirano)
    volan.style.transform = `rotate(${volan_rotirano}deg)`

    //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);