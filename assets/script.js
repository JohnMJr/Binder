
//Global Variables
const dictionaryKey = 'f9a039f2-30bb-4050-b54e-4b87b2fa7d8e';
let subjectArray = ['math', 'science', 'english', 'history'];
let save = $('#saveBtn');
let googleCal = $('#googleCal');


// Creates event (click) listener to fire when the div class .searchBtn is pressed for searching and opening a new tab with the miriam webster page of the word that was searched
$('#searchBtn').on('click', function(){
    let searchInput = $('#dictionaryInput').val();
    $.ajax({url: "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + searchInput + "?key=" + dictionaryKey})
    });
    
// actual api call https://www.dictionaryapi.com/api/v3/references/collegiate/json/ + searchInput + ?key= + dictionaryKey




// Event listener for when the Save Note button is pressed to save the updated note to local storage

$('#saveBtn').on('click', function saveNote (obj){
    saveNote.obj = obj;
    // saveNote.foo = foo
    saveNote.val
});

// Event listener for switching between the subjects and hiding the active note and unhiding the inactive note


// Event listener for when the add to calander button is pressed it brings up a multi input prompt for adding an event to google cal based off of event, date, and time





