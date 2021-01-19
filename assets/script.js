
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
        
        // Retrieves the Rating Data
        //var rating = response.Rated

        // Creates an element to have the rating displayed
        //var pOne = $("<p>").text("Rating: " + rating);

        // Displays the rating
        //defDiv.append(pOne);

        // Retrieves the release year
        //var released = response.Released;

        // Creates an element to hold the release year
        //var pTwo = $("<p>").text("Released: " + released);

        // Displays the release year
        //defDiv.append(pTwo);

        // Retrieves the plot
        //var plot = response.Plot;

        // Creates an element to hold the plot
        //var pThree = $("<p>").text("Plot: " + plot);

        // Appends the plot
        //defDiv.append(pThree);

        // Creates an element to hold the image
        //var moviePoster = response.
        // Appends the image
        // Puts the entire Movie above the previous movies.
      });
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