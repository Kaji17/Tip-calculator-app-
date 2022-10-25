const resetbutton = document.getElementById("btnreset");
const input = document.getElementsByTagName('input');
const form = document.getElementById('myform');

// permi to disabled button reset if liste input bill empty
for (let i = 0; i < input.length; i++) {
    const element = input[i];
    // permi to disabled button reset if input bill empty
    element.addEventListener("keyup", (e) => {
        e.preventDefault();
        const value = e.currentTarget.value;
        if (value === '') {
            resetbutton.setAttribute('disabled', 'disabled');
        } else {
            resetbutton.removeAttribute("disabled");
            console.log('remove')
        }

    })
}

for (let i = 0; i < input.length; i++) {
    const element = input[i];
    // permit to disabled button reset if input bill empty
    element.addEventListener("keyup", (e) => {
        e.preventDefault();
        const value = e.currentTarget.value;
        if (value === '') {
            document.getElementById("btnreset").style.backgroundColor="#0d686d";
            resetbutton.setAttribute('disabled', 'disabled');
        } else {
            resetbutton.removeAttribute("disabled");
            console.log('remove');
            document.getElementById("btnreset").style.backgroundColor="hsl(172, 67%, 45%)";
        }

    })
}



    // Ecouteur sur le btn reset pour renitialiser les champs
if (
    inputbill.value != '' && 
    numberofpeopleinput.value != '' && 
    resultatTipamount.value != '' && 
    inputcustom.value != ''
) {
    resetbutton.addEventListener('click', clear)
}

//function servant à rénitialiser les champs
function clear() {
    inputbill.value = '';
    numberofpeopleinput.value = '';
    inputcustom.value = '';
    resultatTipamount.innerText = '0.00';
    resultatTotalp.innerText = '0.00';
}







