const resetbutton = document.getElementById("btnreset");
const input = document.getElementsByTagName('input');
const form = document.getElementById('myform');
var inputbill = document.getElementById('inputbill');
var numberofpeopleinput = document.getElementById('numberofpeopleinput');
var resultatTipamount = document.getElementById('resultatTipamount');
var inputcustom = document.getElementById('inputcustom');
var selectTipTab = document.querySelectorAll('.button-green');
let currenttip;

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
            resetbutton.style.backgroundColor = "#0d686d";
            resetbutton.setAttribute('disabled', 'disabled');
        } else {
            resetbutton.removeAttribute("disabled");
            console.log('remove');
            resetbutton.style.backgroundColor = "hsl(172, 67%, 45%)";
        }

    })
}

// recupere type of bill
inputbill.addEventListener('change', () => {
    // getTip(inputbill.value);
})

// recupere type of numberofpeopleinput
numberofpeopleinput.addEventListener('change', () => {
    // getTip(numberofpeopleinput.value);
})

// recupere la valeur de chaque tip selectionner
selectTipTab.forEach(element => {
    element.addEventListener('click', () => {
        currenttip = element.value;
        // getTip(currenttip);
    })
});


// function calculant Tip Amount /person
function calcTipAmount(bill, tip, nbrP) {
   let billNumber = Number(bill);
   let tipNumber= Number(tip);
   let nbrPNumber= Number(nbrP);
   let value = ((billNumber*tipNumber)/100)/nbrPNumber;
   resultatTipamount.innerText= value;
}

// Ecouteur sur le btn reset pour renitialiser les champs
resetbutton.addEventListener('click', () => {
    if (inputbill.value !== '' && numberofpeopleinput.value !== '' &&
        resultatTipamount.value !== '' && (inputcustom.value !== '' || currenttip!==undefined)) {

        inputbill.value = '';
        numberofpeopleinput.value = '';
        inputcustom.value = '';
        resultatTipamount.innerText = '0.00';
        resultatTotalp.innerText = '0.00';
        document.getElementById('error').innerText= "";

    }else if (numberofpeopleinput.value === '') {
        document.getElementById('error').innerText= "Can't  be zero";
        document.getElementById('numberofpeopleinput').style.outline='1px solid rgb(185, 46, 46)';
        
    }{

    }
})






