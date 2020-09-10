const modalOVerlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const videoId = card.getAttribute('id')
        modalOVerlay.classList.add('active')
        modalOVerlay.querySelector('iframe').src = `https://youtube.com/embed/${videoId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOVerlay.classList.remove('active')
    modalOVerlay.querySelector('iframe').src = ''
})

