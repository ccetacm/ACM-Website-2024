$.fn.jQuerySimpleCounter = function( options ) {
  var settings = $.extend({
    start:  0,
    end:    100,
    easing: 'swing',
    complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};

$('#number1').jQuerySimpleCounter({end: 583,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 250,duration: 3100});
$('#number3').jQuerySimpleCounter({end: 300,duration: 3100});
$('#number4').jQuerySimpleCounter({end: 16,duration: 3450});
$('#number5').jQuerySimpleCounter({end: 472,duration: 3300});
$('#number6').jQuerySimpleCounter({end: 224,duration: 2175});
{
    class SliderClip {
      constructor(el) {
        this.el = el;
        this.Slides = Array.from(this.el.querySelectorAll('li'));
        this.Nav = Array.from(this.el.querySelectorAll('aside a'));
        this.totalSlides = this.Slides.length;
        this.current = 0;
        this.autoPlay = true; //true or false
        this.timeTrans = 4000; //transition time in milliseconds
        this.IndexElements = [];
  
        for (let i = 0; i < this.totalSlides; i++) {
          this.IndexElements.push(i);
        }
  
        this.setCurret();
        this.initEvents();
      }
      setCurret() {
        this.Slides[this.current].classList.add('current');
        this.Nav[this.current].classList.add('current_dot');
      }
      initEvents() {
        const self = this;
  
        this.Nav.forEach(dot => {
          dot.addEventListener('click', ele => {
            ele.preventDefault();
            this.changeSlide(this.Nav.indexOf(dot));
          });
        });
  
        this.el.addEventListener('mouseenter', () => self.autoPlay = false);
        this.el.addEventListener('mouseleave', () => self.autoPlay = true);
  
        setInterval(function () {
          if (self.autoPlay) {
            self.current = self.current < self.Slides.length - 1 ? self.current + 1 : 0;
            self.changeSlide(self.current);
          }
        }, this.timeTrans);
  
      }
      changeSlide(index) {
  
        this.Nav.forEach(allDot => allDot.classList.remove('current_dot'));
  
        this.Slides.forEach(allSlides => allSlides.classList.remove('prev', 'current'));
  
        const getAllPrev = value => value < index;
  
        const prevElements = this.IndexElements.filter(getAllPrev);
  
        prevElements.forEach(indexPrevEle => this.Slides[indexPrevEle].classList.add('prev'));
  
        this.Slides[index].classList.add('current');
        this.Nav[index].classList.add('current_dot');
      }}
  
  
    const slider = new SliderClip(document.querySelector('.slider'));
  }


  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
