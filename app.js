window.addEventListener("scroll", function(){
    var header = this.document.querySelector(".nav");
    header.classList.toggle("sticky", window.scrollY > 0)})

    const navSlide = () =>{
      const burger = document.querySelector(".burger");
      const nav = document.querySelector(".nav-list")
      const navLink = document.querySelectorAll(".nav-list li")

    burger.addEventListener('touch', () => 
    {nav.classList.toggle('nav-active');
     //Animate link
     navLink.forEach((link,index) => {
     if(link.style.animation){
       link.style.animation= '';
      } else{
        link.style.animation =  `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s `;
      }
    });
    burger.classList.toggle("toggle");
  });
}

  navSlide();