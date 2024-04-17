function untoggleButton() {
    if (document.querySelector('.is-toggled')) {
        document.querySelector('.is-toggled').classList.remove('is-toggled');
    }
}

function toggleButton(jsButton) {
    const buttonElement = document.querySelector(jsButton);

    if (!buttonElement.classList.contains('is-toggled')) {
        buttonElement.classList.add('is-toggled');
    } else {
        buttonElement.classList.remove('is-toggled');
    }
}