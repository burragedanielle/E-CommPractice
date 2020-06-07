let productImages = [
    'assets/img/charisse-kenion-BgbOGZRmeXs-unsplash.jpg', 'assets/img/eloise-ambursley-59Td06omPVc-unsplash.jpg'
]

let currentSlide = 0;
let slide = productImages[0];

console.log(slide);

$('#m-image-1').click(() => {
    $('#main-product-image').attr('src', 'assets/img/charisse-kenion-BgbOGZRmeXs-unsplash.jpg');
    $('#m-image-1').attr('src', 'assets/img/eloise-ambursley-59Td06omPVc-unsplash.jpg');
});