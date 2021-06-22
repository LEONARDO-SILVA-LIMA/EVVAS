


/*window.onscroll = function() {myFunctionS()};
        
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        
        function myFunctionS() {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
            changeContainer.classList.remove("container")
          } else {
            navbar.classList.remove("sticky");
            if(window.matchMedia("(max-width: 992px)")&& window.pageYOffset >0){
              changeContainer.classList.add("container")
            }
          }
        }

  let x = window.matchMedia("(max-width: 992px)")
  myFunction(x) 
  x.addListener(myFunction) */
  
  var click = document.querySelector(".click");
    click.addEventListener("click",function(){
    var x = document.querySelector("#senha");
    if(x.type ==="password"){
        x.type = "text";
        click.classList.remove("fa-eye");
        click.classList.add("fa-eye-slash");
    }else{
        click.classList.remove("fa-eye-slash");
        click.classList.add("fa-eye")
       
        x.type = "password" ;
    }
  });