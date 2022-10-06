/*main*/
   
const mySwiper = new Swiper('.swiper', {

    breakpoints: {
        768:{
            slidesPerView: 4
        },
    },

    centeredSlides: true,
	slidesPerView: 2,
    spaceBetween: 10,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}

});


/*sub*/

const subSwiper = new Swiper('.subSwiper', {

    breakpoints: {
        768:{
            slidesPerView: 8,
            spaceBetween:10,
        },
    },

    centeredSlides: true,
	slidesPerView: 5,
    spaceBetween: 5,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

});







/*section2*/


let all = document.getElementById("all");
/*let parents = document.getElementsByClassName("parents");
let child1 = document.getElementsByClassName("child1");
let child2 = document.getElementsByClassName("child2");
let child3 = document.getElementsByClassName("child3");*/
let element = document.getElementsByClassName("el");
let countNumber = document.getElementById("count");

let button = document.getElementById("button");





const allFunction = (checkAll,el) => {
//全てのチェックボックスをON/OFFする
    const funcCheckAll = (bool) => {
        for (let i = 0; i < el.length; i++) {
            el[i].checked = bool;
        }
    }
    //「checks」のclassを持つ要素のチェック状態で「全て選択」のチェック状態をON/OFFする
    const funcCheck = () => {
        let count = 0;
        for (let i = 0; i < el.length; i++) {
            if (el[i].checked) {
                count += 1;
            }
        }
        if (el.length === count) {
            checkAll.checked = true;
        } else {
            checkAll.checked = false;
        }
    };
    //「全て選択」のチェックボックスをクリックした時
    checkAll.addEventListener("change",() => {
        funcCheckAll(checkAll.checked);
    },false);
    //「全て選択」以外のチェックボックスをクリックした時
    for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("change", funcCheck, false);
    }
}


/*
allFunction(parents[0],child1)
allFunction(parents[1],child2)
allFunction(parents[2],child3)*/
allFunction(all,element)




const count = () => {
    let sum = 0
    for(let i=0; i < element.length; i++){
        if(element[i].checked){
            sum += Number(element[i].value)
        }
    }
    countNumber.innerHTML = String(sum)+ "人選択中"
    if(sum!==0){
        button.style.visibility = "visible";
    }else{
        button.style.visibility = "hidden";
    }
} 
const allCount =() => {
    let sum = 0
    if(all.checked) {
        for(let i = 0; i<element.length; i++){
            sum += Number(element[i].value)
        }
    }
    countNumber.innerHTML = String(sum) + "人選択中"
    if(sum!==0){
        button.style.visibility = "visible";
    }else{
        button.style.visibility = "hidden";
    }
    
}

for (let i = 0; i<element.length; i++){
        element[i].addEventListener("change",count,false);
}
all.addEventListener("change",allCount,false);







/*button*/
let submitArr = []
let submit = () =>{
    for (let i = 0; i<element.length; i++){
        if(element[i].checked){
                submitArr.push(i)
        }
    }
    sessionStorage.setItem('arr',submitArr)
    location.href = "./index2.html"
}
button.addEventListener("click",submit)