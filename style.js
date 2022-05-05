const scrollTrigger = (selector, options = {}) => {
    let elements = document.querySelectorAll(selector)
    Array.from(elements).forEach((element) => {
      addObserver(element, options)
    })
  }
  
  const addObserver = (element, options) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('add-animation', entry.isIntersecting)
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
        }
      })
    }, options)
  
    observer.observe(element)
  }
  
  scrollTrigger('.partner-logo', { threshold: 0 })
var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }); 
  $(function () {
    $(document).scroll(function () {
      var currentScroll = $(this).scrollTop();
      console.log(currentScroll)

      if (currentScroll >300 ) {

        $('.festival-card').addClass('card-1')
        $('.festival-card').addClass('card-2')
      } else {
        $('.festival-card').removeClass('navbar-fix')
      }
    })
  })