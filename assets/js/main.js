// Allows button to open/close the modal
const modal = document.getElementById('modal'); 
const button = document.getElementById('addcard');
const closeButton = document.getElementById('close-btn');


button.onclick = function() {
    modal.style.visibility = 'visible';
}

closeButton.onclick = function() {
    modal.style.visibility = 'hidden';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.visibility = 'hidden';
    }
}

// // Get a reference to the form and card elements
// const form = document.getElementById('form');
// const card = document.getElementById('card-template');
// const createCard = document.getElementById('submit');

// // Add onclick event to the button to create a new card
// form.onclick = function() {
//     event.preventDefault();
//     var newTask = generateCard;

// }


// function generateCard() {
//     var newCard = card.content.cloneNode(true);
//     var cardHTML = card.innerHTML;
//     var taskName = document.getElementById('name').value;
//     var description = document.getElementById('task-info').value;
//     var dueDate = document.getElementById('date').value;
//     newCard = cardHTML.replace("{{Name}}", taskName);
//     newCard = cardHTML.replace("{{Lorem}}", description);
//     newCard = cardHTML.replace("{{Due}}", dueDate);
//     var newTask = document.createElement('div');
//     newTask.innerHTML = cardHTML;
//     return newTask;
    
// }