let productImages = [
    'assets/img/eloise-ambursley-59Td06omPVc-unsplash.jpg', 'assets/img/charisse-kenion-BgbOGZRmeXs-unsplash.jpg', 'assets/img/jess-harper-sunday-tBKYocAkzRU-unsplash.jpg', 'assets/img/the-creative-exchange-J_shueNor80-unsplash.jpg'
]

var count = 0;

$('.minor-product-image').click((e) => {
    var imageId = e.target.id;
    count++;
    console.log(imageId);
    console.log(count);

    for (i = 0; i < productImages.length; i++) {
        switch (imageId) {
            case 'm-image-1':
                $('#main-product-image').attr('src', productImages[1]);
                $('#m-image-2').attr('src', productImages[0]);
                $('#m-image-1').attr('src', productImages[2]);
                $('#m-image-3').attr('src', productImages[3]);
                break;
            case 'm-image-2':
                $('#main-product-image').attr('src', productImages[2]);
                $('#m-image-2').attr('src', productImages[1]);
                $('#m-image-1').attr('src', productImages[0]);
                $('#m-image-3').attr('src', productImages[3]);
                break;
            case 'm-image-3':
                $('#main-product-image').attr('src', productImages[3]);
                $('#m-image-1').attr('src', productImages[1]);
                $('#m-image-2').attr('src', productImages[2]);
                $('#m-image-3').attr('src', productImages[0]);
                break;
            default:
                $('#main-product-image').attr('src', productImages[0]);
                $('#m-image-1').attr('src', productImages[1]);
                $('#m-image-2').attr('src', productImages[2]);
                $('#m-image-3').attr('src', productImages[3]);

                if (e.target.attr('src') === productImages[0]) {
                    console.log('reset');
                    $('#main-product-image').attr('src', productImages[0]);
                    $('#m-image-1').attr('src', productImages[1]);
                    $('#m-image-2').attr('src', productImages[2]);
                    $('#m-image-3').attr('src', productImages[3]);
                    break;
                }

        }

    }


});