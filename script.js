const btn = document.querySelectorAll('.btn');

const dropContent = document.querySelectorAll('.content');

    
dropContent.forEach(content => {
    btn.forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.value == content.dataset.value) {
                content.classList.toggle('content');
                button.classList.toggle('active');
            }

        })
    });
});















