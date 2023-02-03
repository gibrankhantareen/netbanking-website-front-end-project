function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function myFunction() {
  alert("Thank You! Your Message has been recieved. We will get back to you shortly!");
}


function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//*Chatbox Ki coding*//





//*Profile Page Starts*//
//*button ki coding*//
var i = 0;
var txt = 'For more information please log on to www.thegktwebbank.com or Call us on +91700340032. Thank You!';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//*end*//
//*Profile Page ends*//


