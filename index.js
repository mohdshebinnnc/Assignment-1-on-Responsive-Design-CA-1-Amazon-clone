const toggleButton = document.getElementsByClassName('toggle-button')[0]
const grandparent2 = document.getElementsByClassName('grandparent2')[0]

toggleButton.addEventListener('click', () => {
    grandparent2.classList.toggle('active')
})




