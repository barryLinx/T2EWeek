var acc = document.getElementsByClassName("accordion");
//var sidebox = document.getElementsByClassName("sidebox");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
     var sidebox = this.nextElementSibling;
    if (sidebox.style.maxHeight) {
      sidebox.style.maxHeight = null;
      } else {
        sidebox.style.maxHeight = sidebox.scrollHeight + "px";;
     }
  });
}