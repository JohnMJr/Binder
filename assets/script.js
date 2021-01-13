//Global Variables
let userInput = $('.userInput');
let courseArray = ['science', 'math']


// Creates event (click) listener to fire when the div class .button is pressed.
$('.button').on('click', function(){
    pushInput()

});
// Takes the users input, and pushes it into courseArray. ???

// Function to take array Items, and make drop down boxes with addNote button attached.
for(i = 0; i < courseArray.length; i++) {
    let newCourse = $('<div>');
    newCourse.attr('id', 'newCourseDiv');
    newCourse.text(courseArray[i]);
    let newNoteButton = $('<button>');
    $('.courses').append(newCourse);
    $('.courses').append(newNoteButton);
 
function pushInput() {
    
    
    }
}

// Save new array to local storage for later manipulation.
// Pull new array from local storage to render on the page.;

//