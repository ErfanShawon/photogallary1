const pics = Array.from(document.querySelectorAll('.pic'))
const photoGallary = document.querySelector('.photoGallary')

let imagePosition = null;

const opengallary = (index,event) =>{
    imagePosition = index

photoGallary.querySelector('img').src = event.target.src;
photoGallary.classList.add('active')
    

}

pics.map((pic, index) => pic.addEventListener('click',() => opengallary(index,event))
);

const right = photoGallary.querySelector('.right')

const next =() =>{
    if(imagePosition == (pics.length - 1) ){
        imagePosition = 0
        photoGallary.querySelector('img').src = pics[imagePosition].src
    }else{
        photoGallary.querySelector('img').src = pics[imagePosition + 1].src
    }
    imagePosition = imagePosition+1
    
    
}
right.addEventListener('click' ,next)

const left = photoGallary.querySelector('.left')

const back =() => {
    if(imagePosition == (pics.length - 1) ){
        imagePosition = 0
        photoGallary.querySelector('img').src = pics[imagePosition].src
    }else{
        photoGallary.querySelector('img').src = pics[imagePosition - 1].src
    }
    imagePosition = imagePosition + 1
}

left.addEventListener('click', back )


const cancelBtn = photoGallary.querySelector('.cancelBtn')

const closeBtn = () =>{
    photoGallary.classList.remove('active');
}

cancelBtn.addEventListener('click', closeBtn)