
setTimeout(() => {
    const sticky_element = document.querySelector('.bi-content')
    sticky_element.classList.add('bi-content-animated')    
}, 900);

$('#body').scroll(function() {
    let scroll = $(this).scrollTop();

    const sticky_element = document.querySelector('.bi-content')
    if(scroll == 0){
        sticky_element.classList.remove('bi-content-animated');
    }
    if(scroll > 100){
        sticky_element.classList.add('bi-content-animated');
    }
});





//biがスクロールできるとき用
//$('#body').scroll(function() {
//    let scroll = $(this).scrollTop();

//    const sticky_element = document.querySelector('.bi-content')
//    if(scroll > 300){
//        sticky_element.classList.add('bi-content-animated');
//    }
//    else{
//        sticky_element.classList.remove('bi-content-animated');
//    }
//});