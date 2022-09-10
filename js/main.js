const shilding =  document.querySelector("#shield");
var valorShield = parseInt(shilding.value);

function setShield() {
    valorShield += 1;
    shilding.value = valorShield
    return shilding.value;
}

