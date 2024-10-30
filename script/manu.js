function click_oc_open(){
    const manu_element= document.querySelector('.oc-manu-content');
    manu_element.classList.add('oc-manu-content-opened');
}
function click_oc_close(){
    const manu_element= document.querySelector('.oc-manu-content');
    manu_element.classList.remove('oc-manu-content-opened');
    manu_element.classList.add('oc-manu-content-closing')
    setTimeout(function(){
        manu_element.classList.remove('oc-manu-content-closing')
    },400)
}

let oc_button = document.querySelector('.oc-button');
oc_button.onclick = click_oc_open;

let oc_button_2 = document.querySelector('.out-oc-manu-content');
oc_button_2.onclick = click_oc_close;