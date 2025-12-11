function openNav() {
  var menuicElement = document.getElementById("menuic");
  var data = menuicElement.dataset.click;
  if (data == "0") {
    menuicElement.dataset.click = "1";
    document.getElementById("mySidenav").style.height = "max-content";
    document.getElementById("menuic").innerHTML = `<button class="glass-button">Close</button>`;
    document.getElementById("mySidenav").style.padding = "20px";
  } else {
    menuicElement.dataset.click = "0";
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("menuic").innerHTML = `<button class="glass-button">Menu</button>`;
    document.getElementById("mySidenav").style.padding = "0px";
  }
}

/* Set the width of the side navigation to 0 */
// function closeNav() {}

// window.addEventListener("resize", function () {
//   var width = window.innerWidth;

//   if (width > 1000) {
//     document.getElementById("menuic").style.display = "none";
//   } else {
//     document.getElementById("menuic").style.display = "block";
//   }
// });
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
// }
function jump() {
  $("#time_line").scrollTop(0);
}

function jumpToDiv(id) {
  console.log("done");
    const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView();
  }
}
// $('html, body').hide();

// // $(document).ready(function()
// // {
// //     $('a[href="^=#]"').bind("click", jump);

// //     if (location.hash){
// //         setTimeout(function(){
// //             $('html, body').scrollTop(0).show();
// //             jump();
// //         }, 0);
// //     }else{
// //         $('html, body').show();
// //     }
// // });
