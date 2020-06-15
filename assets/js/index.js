let productImages = [
    'assets/img/eloise-ambursley-59Td06omPVc-unsplash.jpg', 'assets/img/charisse-kenion-BgbOGZRmeXs-unsplash.jpg', 'assets/img/jess-harper-sunday-tBKYocAkzRU-unsplash.jpg', 'assets/img/the-creative-exchange-J_shueNor80-unsplash.jpg'
]

var count = 0;

$('#toggler').click((e) => {
    var imageId = e.target.id;
    var imageSrc = e.target.src;
    console.log(imageId);
    console.log(count);

    $('#main-product-image').attr('src', imageSrc);
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})