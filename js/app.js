// LEFT MENU DISPLAY TOGGLE

const seeMore = document.querySelector('.seeMore-js');
const seeLess = document.querySelector('.seeLess-js');
const leftMenuHidden = document.querySelector('.left-menu-hidden');

seeMore.addEventListener('click', e=>{
    leftMenuHidden.classList.remove('hidden')
    leftMenuHidden.classList.add('visible')
})

seeLess.addEventListener('click', ()=>{
    leftMenuHidden.classList.add('hidden');
    leftMenuHidden.classList.remove('visible');
})


//STORY SCALE INCREASE ON HOVER

const stories = document.querySelectorAll('.story-js');
const storyImg = document.querySelectorAll('.story-img-js')

stories.forEach((story, index)=>{
    story.addEventListener('mouseover', ()=>{
        storyImg[index].style.transform = "scale(1.02)"
    })
})
stories.forEach((story, index)=>{
    story.addEventListener('mouseout', ()=>{
        storyImg[index].style.transform = "scale(1)"
    })
})


//POST DISPLAY 

const search = document.querySelector('.post-form-trigger-js');
const postForm = document.querySelector('.post-form-js')
const postFormCloser = document.querySelector('.post-form-closer-js');
const section = document.querySelector('section');
search.addEventListener('click', e=>{
    postForm.style.display = "block";
    section.style.filter = 'brightness(50%)';
    section.style.pointerEvents = "none";
})
postFormCloser.addEventListener('click', e=>{
    postForm.style.display = 'none';
    section.style.filter = 'brightness(100%)';
    section.style.pointerEvents = "auto";
})


// POST BUTTON DISABLED 
const textArea = document.querySelector('.post-textarea-js');
const postBtn = document.querySelector('.post-btn-js');

// postBtn.disabled = false;
textArea.addEventListener('input', ()=>{
    postBtn.disabled = false;
    postBtn.classList.remove('btn-grey');
    postBtn.classList.add('btn-blue');

    if(textArea.value == ''){
        postBtn.disabled = true;
        postBtn.classList.remove('btn-blue')
        postBtn.classList.add('btn-grey')
    }
})