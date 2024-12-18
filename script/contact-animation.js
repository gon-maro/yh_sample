$('#body').scroll(function() {
    let scroll = $(this).scrollTop();

    const sticky_element = document.querySelector('.contact')
    if(scroll > 1100){
        sticky_element.classList.add('contact-animated');
    }
    if(scroll < 600){
        sticky_element.classList.remove('contact-animated');
    }
});