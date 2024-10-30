$('#body').scroll(function() {
    let scroll = $(this).scrollTop();

    const sticky_element = document.querySelector('.wrap-manu')
    if(scroll > 400){
        sticky_element.classList.add('stickyed');
    }
    else{
        sticky_element.classList.remove('stickyed');
    }
});