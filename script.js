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
    const element = fo[i];
    // permit to disabled button reset if input bill empty
    element.addEventListener("keyup", (e) => {
        e.preventDefault();
        const value = e.currentTarget.value;
        if (value === '') {
            resetbutton.setAttribute('disabled', 'disabled');
        } else {
            resetbutton.removeAttribute("disabled");
            console.log('remove')
            console.log('remove');
            document.getElementById("btnreset").style.backgroundColor="hsl(172, 67%, 45%)";

    })
}
document.getElementById('resultatTipamount').innerHTML= 300;







