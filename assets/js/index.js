let productImages = [
    'assets/img/charisse-kenion-BgbOGZRmeXs-unsplash.jpg', 'assets/img/eloise-ambursley-59Td06omPVc-unsplash.jpg'
]

$('.minor-product-image').click((e) => {
    var imageId = e.target.id;
    console.log(imageId);
    switch (imageId) {
        case 'm-image-1':
            $('#main-product-image').attr('src', 'assets/img/charisse-kenion-BgbOGZRmeXs-unsplash.jpg');
            $('#m-image-1').attr('src', 'assets/img/eloise-ambursley-59Td06omPVc-unsplash.jpg');
            break;
        case 'm-image-2':
            $('#main-product-image').attr('src', 'assets/img/jess-harper-sunday-tBKYocAkzRU-unsplash.jpg');
            $('#m-image-2').attr('src', 'assets/img/eloise-ambursley-59Td06omPVc-unsplash.jpg');
            break;
        case 'm-image-3':
            $('#main-product-image').attr('src', 'assets/img/the-creative-exchange-J_shueNor80-unsplash.jpg');
            $('#m-image-3').attr('src', 'assets/img/eloise-ambursley-59Td06omPVc-unsplash.jpg');
            break;
    }

});