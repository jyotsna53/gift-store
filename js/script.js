function openmenu() {
    var el = document.getElementById("mobile-nav");
    var ee = document.getElementById("con");
    if(el.style.height == "200px"){
        el.style.height = "0px";
        ee.style.height="0px";

    } else {
        el.style.height = "200px";
        ee.style.height="200px";
    }
}