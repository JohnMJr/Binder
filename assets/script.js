
//Global Variables
const dictionaryKey = 'f9a039f2-30bb-4050-b54e-4b87b2fa7d8e';
let subjectArray = ['math', 'science', 'english', 'history'];
let save = $('#saveBtn');
let googleCal = $('#googleCal');
let noteData = $('#Note');


// Creates event (click) listener to fire when the div class .searchBtn is pressed for searching and opening a new tab with the miriam webster page of the word that was searched
$('#searchBtn').on('click', function(){
    let searchInput = $('#dictionaryInput').val();
    $.ajax({
        url: "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + searchInput + "?key=" + dictionaryKey,
        method: "GET"
    }).then(function(response){
        $("#dictionary").text(JSON.stringify(response));
    }); 
});


    

function saveNote(){
    localStorage.setItem('Note', JSON.stringify(noteData));
}

function displayNote(){
    return noteData.text || 'Note';
}

function loadSave(){
    let storedData = JSON.parse(localStorage.getItem('Note'));

    if (storedData) {
        noteData = storedData;
    }

    saveNote();
    displayNote();
}

loadSave();


// Event listener for when the Save Note button is pressed to save the updated note to local storage
$('#saveBtn').on('click', function (event) {
    event.preventDefault();
    let saveIndex = $(this).siblings('.form;').children('.Note').attr('id');
    noteData[saveIndex].reminder = $(this.siblinings(".form").children(".Note").val();
    console.log(saveIndex);
    saveNote();
    displayNote();
})
   