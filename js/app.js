// Menu
navBar = {
  navIcon : document.querySelector('.nav-icon'),
  navMenu : document.querySelector('.nav-menu'),
  navList : document.querySelectorAll('.menu-item'),
}
openMenu = () => {
  navBar.navIcon.classList.toggle('close');
  navBar.navMenu.classList.toggle('show');
  for (let i = 0; i < navBar.navList.length; i++) {
    navBar.navList[i].addEventListener('click', () =>{
      navBar.navIcon.classList.remove('close');
      navBar.navMenu.classList.remove('show');
    })
  }
}

// Slider Objetos
slideObjects = {
  // Agregar imagenes
  'images' : [
    { 'alt' : 'Texto primer img', 'src' : 'assets/image-big.png'},
    { 'alt' : 'Texto segundo img', 'src' : 'assets/image-big2.png'},
    { 'alt' : 'Texto tercer img', 'src' : 'assets/image-big3.jpg'},
  ],
  // Configuracion
  slideIndex : 1,
  slideArea : document.querySelector('.slideshow-container'),
  beforeItem : document.querySelector('.prev'),
  switch : true,
}

// Slide
function showSlides(n) {
  // Agregar imagenes desde objeto
  if(slideObjects.switch){
    for (let i = 0; i < slideObjects.images.length ; i++) {
      tagContainer = document.createElement("div");
      tagContainer.classList.add('mySlides');
      tagContainer.classList.add('fade');
      imgContainer = document.createElement('img');
      imgContainer.src = slideObjects.images[i].src
      imgContainer.setAttribute("alt",slideObjects.images[i].alt);
      tagContainer.appendChild(imgContainer);
      slideObjects.slideArea.insertBefore(tagContainer, slideObjects.beforeItem)
    }
  // Apagar agregado
    slideObjects.switch = false;
  } 
  
  // Slide 
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideObjects.slideIndex = 1}    
  if (n < 1) {slideObjects.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideObjects.slideIndex-1].style.display = "block";  
  dots[slideObjects.slideIndex-1].className += " active";
}
// Arrows
function plusSlides(n) {
  showSlides(slideObjects.slideIndex += n);
}
// Dots
function currentSlide(n) {
  showSlides(slideObjects.slideIndex = n);
}

showSlides(slideObjects.slideIndex);


