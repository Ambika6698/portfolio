

// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}



function sub() {
  var a1 = document.getElementById("validationCustom01").value;
  var a2 = document.getElementById("validationCustom02").value;
  var a3 = document.getElementById("validationCustom03").value;
  
  if (a1 == "" && a2 == "" && a3 == ""  ) {
    console.log(a1);
    document.getElementById("place1").style.color = "red";
    document.getElementById("place2").style.color = "red";
    document.getElementById("place1").innerHTML = "ERROR!!"
    document.getElementById("place2").innerHTML = "Fill Form Accurately!";
  }
  else if (a1 != "" && a2 != "" && a3 != "") {
    document.getElementById("place1").style.color = "green";
    document.getElementById("place2").style.color = "green";
    document.getElementById("place1").innerHTML = "THANK YOU!!!"
    document.getElementById("place2").innerHTML = "I will reach out you soon";
  }

}