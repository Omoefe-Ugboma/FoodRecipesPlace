// alert("This Page is working ")
var indexValue = 1;
showImg(indexValue);
function btn_slide(e){showImg(indexValue = e)}
function side_slide_btn(e){showImg(indexValue = e)}
function showImg(e){
    var i;
    const img = document.querySelectorAll('img')
    const slides = document.querySelectorAll('.slidepoints li')
    if(e > img.length){indexValue = 1}
    if(e < 1){indexValue = img.length}
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    img[indexValue-1].style.display = "block";
}
