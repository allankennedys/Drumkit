


document.addEventListener('DOMContentLoaded',function(){
    const drumButton = document.querySelectorAll('button[data-sound]');

    drumButton.forEach(button => {
        button.addEventListener('click', function(){
            const instrumentId = this.getAttribute('data-sound');
            const audioItem = document.querySelector(`#${instrumentId}`);
            audioItem.currentTime = 0;
            audioItem.play();
        })
    })
})