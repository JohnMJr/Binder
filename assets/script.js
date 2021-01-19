
//Global Variables
const dictionaryKey = 'f9a039f2-30bb-4050-b54e-4b87b2fa7d8e';
let subjectArray = ['math', 'science', 'english', 'history'];
let save = $('#saveBtn');
let googleCal = $('#googleCal');
let notePad = $('#notePad');


// Creates event (click) listener to fire when the div class .searchBtn is pressed for searching and opening a new tab with the miriam webster page of the word that was searched
$('#searchBtn').on('click', function(){
    let searchInput = $('#dictionaryInput').val();
    $.ajax({
        url: "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + searchInput + "?key=" + dictionaryKey,
        method: "GET"
    }).then(function(response){
        console.log(response)
        var defDiv = $("#dictionary");
        
		// makes it so response returns only first array
		var resp = response[0];
		
        // Retrieves the fl
        var fl = resp.fl;
		
		// Retrieves the release year
        var shortdef = resp.shortdef[0];
		
        // Creates an element to have the short definition displayed
        var searchedWord = $("<p id='usrInput'>").text(searchInput);
		var retDef = $("<p id='rtnDef'>").text(fl + '-' + shortdef );

        // Displays the short def
        defDiv.append(searchedWord);
		defDiv.append(retDef);
      });
}); 


    

function saveNote(){
    localStorage.setItem('notePad', JSON.stringify(notePad));
}

function displayNote(){
    return noteData.text || 'notePad';
}

function loadSave(){
    let storedData = JSON.parse(localStorage.getItem('#notePad'));

    if (storedData) {
        notePad = storedData;
    }

    saveNote();
    displayNote();
}

loadSave();


// Event listener for when the Save Note button is pressed to save the updated note to local storage
$('#saveBtn').on('click', function (){
    console.log(localStorage.getItem('Note'));

    saveNote();
    displayNote();

});
   
loadSave();