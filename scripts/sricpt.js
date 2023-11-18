
$(document). ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__navigation').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document). ready(function() {
	$('.header__navigation').click(function(){
       $('.header__burger, .header__navigation').removeClass('active');
       $('body').removeClass('lock');
	});
});

// Плавний скрол к блоку
$(document).ready(function() {
  $("a.header__link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

// карта
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

// анимация при скроле
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.container, .header, .features__column, .news__bottom, .map');
for (let elm of elements) {
  observer.observe(elm); }


  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

scrollToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});