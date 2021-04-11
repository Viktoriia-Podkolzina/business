let li_prev = document.querySelector('#gallery .buttons .li_prev');
let li_next = document.querySelector('#gallery .buttons .li_next');
let images = document.querySelectorAll('#gallery .photos img');

let i = 0; // номер текущей картинки, на экране
images[i].style.display = 'block';  // показываем текущую картину

li_prev.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}

li_next.onclick = function(){
    images[i].style.display = 'none';
    i = i + 1;
    if(i === images.length){
        i = 0;
    }
    images[i].style.display = 'block';
}
