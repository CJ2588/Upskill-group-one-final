const navigation = document.querySelector(".nav");
const navToogle= document.querySelector(".imgmenu");
const track = document.querySelector(".img");
const slides = Array.from(track.children);
const num = document.querySelector(".numbers");
const numChange = Array.from(num.children);
const text = document.querySelector(".write");
const textchange = Array.from(text.children);
const picWidth= slides[0].getBoundingClientRect().width;
const textwidth = textchange[0].getBoundingClientRect().width;
const writings = document.querySelector(".writeup");


//  code for hambuger menu

navToogle.addEventListener("click", () => {
    const visibility = navigation.getAttribute('data-visible');
    
    if(visibility=== "false"){
        navigation.setAttribute("data-visible", true);
        navToogle.setAttribute("aria-expanded", true);
    }

    else if (visibility=== "true"){
        navigation.setAttribute("data-visible", false);
        navToogle.setAttribute("aria-expanded", false);
    }
});

// code for slides

const setSlidePosition = (slide, index) => {
    slide.style.left = picWidth * index + "px"; 
};
slides.forEach(setSlidePosition);

const setTextPosition = (Write, index) => {
    Write.style.left = textwidth * index + "px";
};
textchange.forEach(setTextPosition);


const moveToContent = (track, text, currentSlide, currentText, targetText, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left +")";
    text.style.transform = "translateX(-"+ targetText.style.left +")";
    // text.style.animation = "paused";
    currentText.classList.remove("current-writeup");
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
    targetText.classList.add("current-writeup");

};



num.addEventListener("click", e => {
    //which number was clicked on
    const targetnum = e.target.closest("button");

    if (!targetnum) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentText = text.querySelector('.current-writeup');
    const targetnumber = numChange.findIndex( num => num === targetnum);
    const targetText = textchange[targetnumber];
    const targetSlide = slides[targetnumber];

    track.style.animation = "paused";
    writings.style.animation = "paused";

    function resumeanimation () {
        if (track.style.animation = "paused"){
            track.style.animation = "running";
        }

        if(writings.style.animation = "paused"){
            writings.style.animation = "running";
        }
    }

    setTimeout("resumeanimation()", 3000);
    moveToContent  (track, text, currentSlide, currentText, targetText, targetSlide);
    // moveToSlide (track, currentSlide, targetSlide);
    // moveToText (text, currentText, targetText);
    
    
});



// slides[0].style.left = picWidth + 0 + "px";
// slides[1].style.left = picWidth + 1 + "px";
// slides[2].style.left = picWidth + 2 + "px";

//when I click number writeup and image should change