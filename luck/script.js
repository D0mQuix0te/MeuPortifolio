function toggleMenu() {
    var menubar = document.getElementById("sidemenu");
    if (menubar.style.left == "0px"){
        menubar.style.left = "-200px";
        
    }else{
        menubar.style.left = "0px";
    }  
}