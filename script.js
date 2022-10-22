const resetbutton = document.getElementById("btnreset");
const input = document.getElementById("inputbill");

// permi to disabled button reset if input bill empty
input.addEventListener("keyup", (e)=>{
   e.preventDefault();
   const value = e.currentTarget.value;
   if (value === '') {
    resetbutton.setAttribute('disabled', 'disabled');
   }else{
    resetbutton.removeAttribute("disabled");
    console.log('remove')
   }

})