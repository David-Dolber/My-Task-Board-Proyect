var notes = [];

// local storage
if (localStorage.notes) {
    notes = JSON.parse(localStorage.notes)
    printCard()
}

// function Submit
function on_Submit() {
    var note = {
        note: contentTask.value,
        date: dateTask.value,
        time: timeTask.value
    };

    notes.push(note);
    localStorage.notes = JSON.stringify(notes)
    console.log(notes);
    printCard();
    formContainer.reset();
}

// function Reset Form
function on_Reset() {
    document.getElementById("formContainer").reset();
}


// print card
function printCard() {
    notesContainer.innerHTML = '';
    for (var i = 0; i < notes.length; i++) {
        notesContainer.innerHTML += `
        <div class='col-3' id='stickyNote'>
        <div type="button"  id="closeButton" onclick='closeButton(${i})'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
      </svg></div>
        <div class="card_body"><p>${notes[i].note}</p></div>
        <div class='date1'><h6>${notes[i].date}</h6></div>
        <div class='time1'><h6>${notes[i].time}</h6></div>
`
    }
};

// delete note
function closeButton(index) {
    {
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        printCard();
    }
}



