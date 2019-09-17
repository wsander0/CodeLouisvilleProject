    /** Topnav JS **/

/** Toggle adding and removing class responsive to topnav when user clicks icon **/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}


/** Failed attempt at using a Top Scroll Button.  Will revisit **/



//    /** Adding Button Function **/
//
///** When the user scrolls 20px from top the button will appear **/
//
//window.onscoll = function() {scrollFunction()};
//
//function scrollFunction() {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
//        document.getElementById("myBtn").style.display = "block";
//    } else {
//        document.getElementById("myBtn").style.display = "none";
//    }
//}
//
///** When the user clicks the button it will take them to the top of the page (For safari and Chrome, Firefox etc...**/
//
//function topFunction() {
//    document.body.scrollTop = 0;
//    document.documentElement.scrollTop = 0;
//}


//
//
//    /** Adding slide interaction **/
//
//    var slideIndex = 1;
//        showSlides(slideIndex);
//
//    /** Next/previous controls **/
//
//    function plusSlides(n) {
//        showSlides(slideIndex += n);
//}
//
//    /** Thumbnail image controls **/
//
//    function currentSlide(n) {
//        showSlides(slideIndex = n);
//}
//
//    function showSlides(n) {
//        var i;
//        var slides = document.getElementsByClassName("mySlides");
//        var dots = document.getElementsByClassName("demo");
//        var captionText = document.getElementById("caption");
//            if (n > slides.length) {slideIndex = 1}
//            if (n < 1) {slideIndex = slides.length}
//                for (i = 0; i < slides.length; i++) {
//                slides[i].style.display = "none";
//}
//                for (i = 0; i < dots.length; i++) {
//                dots[i].className = dots[i].className.replace(" active", "");
//}
//        slides[slideIndex-1].style.display="block";
//        dots[slideIndex-1].className += " active";
//        captionText.innerHTML = dots[slideIndex-1].alt;
//}





















