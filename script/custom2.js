let imageIndex_dripbag = 0;
let dripbag_postion_img = 0;
let dripbag_postion_text = 0;
const IMAGE_WIDTH_DRIPBAG = 600;  // css에서 설정한 width 값과 동일하게 맞춰주세요
const btnPrevious_dripabag = document.querySelector(".dripbag-previous")
const btnNext_dripabag = document.querySelector(".dripbag-next")
const dripbag = document.querySelector(".dripbag-slide")
const dirpbagtext = document.querySelector(".dripbag-cont");
const TEXT_WIDTH_DRIPBAG = 510;

function dripbag_previous(){
if(imageIndex_dripbag > 0){
    btnNext_dripabag.removeAttribute("disabled")
    dripbag_postion_img += IMAGE_WIDTH_DRIPBAG;
    dripbag_postion_text += TEXT_WIDTH_DRIPBAG;
    dripbag.style.transform = `translateX(${dripbag_postion_img}px)`;
    dirpbagtext.style.transform = `translateX(${dripbag_postion_text}px)`;
    imageIndex_dripbag = imageIndex_dripbag - 1;
}
if(imageIndex_dripbag == 0){
    btnPrevious_dripabag.setAttribute('disabled', 'true')
}
}
function dripbag_next(){
if(imageIndex_dripbag < 7){
    btnPrevious_dripabag.removeAttribute("disabled")
    dripbag_postion_img -= IMAGE_WIDTH_DRIPBAG;
    dripbag_postion_text -= TEXT_WIDTH_DRIPBAG;
    dripbag.style.transform = `translateX(${dripbag_postion_img}px)`;
    dirpbagtext.style.transform = `translateX(${dripbag_postion_text}px)`;
    imageIndex_dripbag = imageIndex_dripbag + 1;
    
}
if(imageIndex_dripbag == 7){
    btnNext_dripabag.setAttribute('disabled', 'true')
}
}

function dripbag_init(){
    btnPrevious_dripabag.setAttribute('disabled', 'true') /*.setAttribute 요소의 속성값을 설정*/
    btnPrevious_dripabag.addEventListener("click", dripbag_previous) /*이벤트를 듣고 있는 함수르 ㄹ더해주겠다*/
    btnNext_dripabag.addEventListener("click", dripbag_next)
    }
    
    dripbag_init();
    

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let imageIndex_coffeebag = 0;
let coffeebag_postion_img = 0;
let coffeebag_postion_text = 0;
const IMAGE_WIDTH_COFFEEBAG = 600;  // css에서 설정한 width 값과 동일하게 맞춰주세요
const btnPrevious_coffeebag = document.querySelector(".coffeebag-previous")
const btnNext_coffeebag = document.querySelector(".coffeebag-next")
const coffeebag = document.querySelector(".coffeebag-slide")
const coffeebagtext = document.querySelector(".coffeebag-cont");
const TEXT_WIDTH_COFFEEBAG = 510;


function coffeebag_previous(){
    if(imageIndex_coffeebag > 0){
        btnNext_coffeebag.removeAttribute("disabled")
        coffeebag_postion_img += IMAGE_WIDTH_COFFEEBAG;
        coffeebag_postion_text += TEXT_WIDTH_COFFEEBAG;
        coffeebag.style.transform = `translateX(${coffeebag_postion_img}px)`;
        coffeebagtext.style.transform = `translateX(${coffeebag_postion_text}px)`;
        imageIndex_coffeebag = imageIndex_coffeebag - 1;
    }
    if(imageIndex_coffeebag == 0){
        btnPrevious_coffeebag.setAttribute('disabled', 'true')
    }
    }
    function coffeebag_next(){
    if(imageIndex_coffeebag < 5){
        btnPrevious_coffeebag.removeAttribute("disabled")
        coffeebag_postion_img -= IMAGE_WIDTH_COFFEEBAG;
        coffeebag_postion_text -= TEXT_WIDTH_COFFEEBAG;
        coffeebag.style.transform = `translateX(${coffeebag_postion_img}px)`;
        coffeebagtext.style.transform = `translateX(${coffeebag_postion_text}px)`;
        imageIndex_coffeebag = imageIndex_coffeebag + 1;
        
    }
    if(imageIndex_coffeebag == 5){
        btnNext_coffeebag.setAttribute('disabled', 'true')
    }
    }
    
    function coffeebag_init(){
        btnPrevious_coffeebag.setAttribute('disabled', 'true') /*.setAttribute 요소의 속성값을 설정*/
        btnPrevious_coffeebag.addEventListener("click", coffeebag_previous) /*이벤트를 듣고 있는 함수르 ㄹ더해주겠다*/
        btnNext_coffeebag.addEventListener("click", coffeebag_next)
        }
        
        coffeebag_init();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let imageIndex_hario = 0;
let hario_postion_img = 0;
let hario_postion_text = 0;
const IMAGE_WIDTH_HARIO = 600;  // css에서 설정한 width 값과 동일하게 맞춰주세요
const btnPrevious_hario = document.querySelector(".hario-previous")
const btnNext_hario = document.querySelector(".hario-next")
const hario = document.querySelector(".hario-slide")
const hariotext = document.querySelector(".hario-cont");
const TEXT_WIDTH_HARIO = 510;

function hario_previous(){
    if(imageIndex_hario > 0){
        btnNext_hario.removeAttribute("disabled")
        hario_postion_img += IMAGE_WIDTH_HARIO;
        hario_postion_text += TEXT_WIDTH_HARIO;
        hario.style.transform = `translateX(${hario_postion_img}px)`;
        hariotext.style.transform = `translateX(${hario_postion_text}px)`;
        imageIndex_hario = imageIndex_hario - 1;
    }
    if(imageIndex_hario == 0){
        btnPrevious_hario.setAttribute('disabled', 'true')
    }
    }
    function hario_next(){
    if(imageIndex_hario < 6){
        btnPrevious_hario.removeAttribute("disabled")
        hario_postion_img -= IMAGE_WIDTH_HARIO;
        hario_postion_text -= TEXT_WIDTH_HARIO;
        hario.style.transform = `translateX(${hario_postion_img}px)`;
        hariotext.style.transform = `translateX(${hario_postion_text}px)`;
        imageIndex_hario = imageIndex_hario + 1;
        
    }
    if(imageIndex_hario == 6){
        btnNext_hario.setAttribute('disabled', 'true')
    }
    }
    
    function hario_init(){
        btnPrevious_hario.setAttribute('disabled', 'true') /*.setAttribute 요소의 속성값을 설정*/
        btnPrevious_hario.addEventListener("click", hario_previous) /*이벤트를 듣고 있는 함수르 ㄹ더해주겠다*/
        btnNext_hario.addEventListener("click", hario_next)
        }
        
        hario_init();