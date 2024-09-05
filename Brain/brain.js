document.addEventListener('DOMContentLoaded', function() {
    const brainButton = document.getElementById('brainButton');
    const brainGift = document.getElementById('brainGift');

    brainButton.addEventListener('click', function() {
        brainGift.classList.toggle('hidden');
    });
});