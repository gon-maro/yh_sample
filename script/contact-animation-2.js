$('#body').scroll(function() {
    let scroll = $(this).scrollTop();

    const sticky_element = document.querySelector('.shop')
    if(scroll > 1600){
        sticky_element.classList.add('shop-animated');
    }
    if(scroll < 1080){
        sticky_element.classList.remove('shop-animated');
    }
});