const btn = document.querySelectorAll('.btn');

const dropContent = document.querySelectorAll('.content');



    
dropContent.forEach(content => {
    content.style.display = 'none !important';
    btn.forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.value == content.dataset.value) {
                content.classList.toggle('content');
                button.classList.toggle('inactive-style');
            }

        })
    });
    // if ()
});


















































// const welContent = document.querySelector('.welcome-content');
// const welcomeBtn = document.querySelector('.welcome button');


// const requirementContent = document.querySelector('.requirement-content');
// const requirementBtn = document.querySelector('.requirement button');


// const tutorsContent = document.querySelector('.tutors-content');
// const tutorsBtn = document.querySelector('.tutors button');


// const joinUsContent = document.querySelector('.join_us-content');
// const joinUsBtn = document.querySelector('.join_us button');





// welcomeBtn.addEventListener('click', () => {
//     if(welContent.classList.contains('active')){
//         welContent.classList.remove('active');
//         welcomeBtn.classList.add('inactive-style');
//     } else {
//         welContent.classList.add('active');
//         welcomeBtn.classList.remove('inactive-style');
//     }
// })

// requirementBtn.addEventListener('click', () => {
//     if(requirementContent.classList.contains('active')){
//         requirementContent.classList.remove('active');
//         requirementBtn.classList.add('inactive-style');
//     } else {
//         requirementContent.classList.add('active');
//         requirementBtn.classList.remove('inactive-style');
//     }
// })


// tutorsBtn.addEventListener('click', () => {
//     if(tutorsContent.classList.contains('active')){
//         tutorsContent.classList.remove('active');
//         tutorsBtn.classList.add('inactive-style');
//     } else {
//         tutorsContent.classList.add('active');
//         tutorsBtn.classList.remove('inactive-style');
//     }
// })


// joinUsBtn.addEventListener('click', () => {
//     if(joinUsContent.classList.contains('active')){
//         joinUsContent.classList.remove('active');
//         joinUsBtn.classList.add('inactive-style');
//     } else {
//         joinUsContent.classList.add('active');
//         joinUsBtn.classList.remove('inactive-style');
//     }
// })



