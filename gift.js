document.addEventListener('DOMContentLoaded', function() {
    var openButton = document.getElementById('openButton');
    var box = document.getElementById('box');
    var lid = document.querySelector('.lid');
    var present = document.querySelector('.present');
    var isOpen = false;

    openButton.addEventListener('click', function() {
        if (!isOpen) {
            lid.style.transform = 'rotateX(-90deg)';
            present.style.transform = 'translateY(0)';
            isOpen = true;
        } else {
            lid.style.transform = 'none';
            present.style.transform = 'translateY(100%)';
            isOpen = false;
        }
    });
});
