// incrementValue =()=>
// // increment function
// {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value=value+1000;
//     document.getElementById('number').value = value;
// }


// decrementValue =()=>
// {

//     // decrement function
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value=value-1000;
//     if(value<0){
//         value=0
//     }
//     document.getElementById('number').value = value;
// }
/* make the button call the function */
let button = document.getElementById('theButton')
button.addEventListener('click', function() {
  steponup()
})

function steponup() {
  let input = document.getElementById('number')
  let val = document.getElementById('incrementer').value

  if (val) {  /* increment with a parameter */
    input.stepUp(val)
   
  } else {   
       /* or without a parameter. Try it with 0 */

       
    input.stepUp()
    
  }
}


function myFunction(val) {

    // range 
    
    document.getElementById("demo").innerHTML = val; 
  }

