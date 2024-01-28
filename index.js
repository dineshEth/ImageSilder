let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carouselDOM = document.querySelector('.carousel');
let carouselLIST = document.querySelector('.carousel .list ');
let thumbnailLIST = document.querySelector('.carousel .thumbnail');

nextButton.addEventListener('click',(e)=>{
    // console.log(e.target.id);
    swapper('next');
})

// console.log()

prevButton.onclick = (e) =>{
    // console.log(e.target.id)
    swapper('prev')
}


function swapper(type){
    let carouselItems =  document.querySelectorAll('.carousel .list .item');
    let thumbnailItems =  document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        carouselLIST.appendChild(carouselItems[0]);
        thumbnailLIST.appendChild(thumbnailItems[0]);
        carouselDOM.classList.add('next');
    }
    else{
        let position = carouselItems.length-1
        carouselLIST.prepend(carouselItems[position]);
        thumbnailItems.prepend(thumbnailItems[position]);
    }
}


