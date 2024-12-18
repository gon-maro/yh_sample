$('#body').scroll(function() {
    let scroll = $(this).scrollTop();

    const sticky_element = document.querySelector('.features')
    if(scroll > 650){
        sticky_element.classList.add('features-animated');
    }
    if(scroll < 250){
        sticky_element.classList.remove('features-animated');
    }
});