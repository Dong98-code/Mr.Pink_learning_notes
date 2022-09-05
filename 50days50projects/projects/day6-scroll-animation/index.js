let boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes(); // 首先执行一次

function checkBoxes() {
    const triggerBottom = window.innerHeight * 4 / 5; // innerHeight的4/5
    boxes.forEach(box => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show')
        }
    })
}