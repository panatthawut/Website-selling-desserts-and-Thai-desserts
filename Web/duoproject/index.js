function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }


  function openModal1() {
    document.getElementById("myModal1").style.display = "block";
  }
  
  function closeModal1() {
    document.getElementById("myModal1").style.display = "none";
  }
  
  var slideIndex1 = 1;
  showSlides1(slideIndex1);
  
  function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
  }
  
  function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
  }
  
  function showSlides1(n) {
    var i;
    var slides1 = document.getElementsByClassName("mySlides1");
    var dots1 = document.getElementsByClassName("demo1");
    var captionText = document.getElementById("caption1");
    if (n > slides1.length) {slideIndex1= 1}
    if (n < 1) {slideIndex1 = slides1.length}
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", "");
    }
    slides1[slideIndex1-1].style.display = "block";
    dots1[slideIndex1-1].className += " active";
    captionText.innerHTML = dots1[slideIndex1-1].alt;
  }
  



  function openModal2() {
    document.getElementById("myModal2").style.display = "block";
  }
  function closeModal2() {
    document.getElementById("myModal2").style.display = "none";
  }
  var slideIndex2 = 1;
  showSlides2(slideIndex2);
  function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  }
  function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
  }
  function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("demo2");
    var captionText = document.getElementById("caption2");
    if (n > slides2.length) {slideIndex2= 1}
    if (n < 1) {slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";
    dots2[slideIndex2-1].className += " active";
    captionText.innerHTML = dots2[slideIndex2-1].alt;
  }
  