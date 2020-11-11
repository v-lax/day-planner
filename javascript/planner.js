//Variable Declaration
var todaysDate = moment().format("dddd MMM Do YYYY");
var currentTime = parseInt(moment().format('HH'))

var taskArray = [];


//function declarations
function setColor(){
    for(var i=1;i<10;i++){
        var textblock = $('#time'+i)
        textTime = parseInt(moment($('#time'+i).data('time'),'HH').format('HH'))
        if(textTime>currentTime){
            $('#time'+i).addClass('future')
        }else if(textTime<currentTime){
            $('#time'+i).addClass('past')
        }else{
            $('#time'+i).addClass('present')
        }
    }
}

function setupStorage(){
    localStorage.setItem("tasks", JSON.stringify(taskArray));
}

// //function Save(){
//     var storedTasks = JSON.parse(localStorage.getItem("tasks"));

//     if (storedScores !== null) {
//       taskArray = storedTasks;
//     }

//     var text = userText.value.trim();
//     if (text === "") {
//         return;
//     }

    
//     taskArray.push({'time-block':'task':finalScore});
//     userText.value = "";

//     setupStorage();
//     pageRedirect();
// }

//setting the heading to today's date
$('#currentDay').text(todaysDate)

setColor();
