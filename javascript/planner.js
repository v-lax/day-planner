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

function init(){
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (storedTasks !== null) {
        taskArray = storedTasks;
        for(var i=0;i<taskArray.length;i++){
            let time = taskArray[i].timeid
            $(`#time${time}`).children('.description').val(taskArray[i].task)
        }
    }
}
//setting the heading to today's date
$('#currentDay').text(todaysDate)
setColor();
init();

//Functionality to occur everytime save button is clicked
$('.saveBtn').on('click',function(){
    var timeId;
    var inpuText;
    timeId=$(this).attr('data-id')
    
    inputText = $(`#time${timeId}`).children('.description').val()

    taskArray.push({'timeid':timeId,'task':inputText});
    console.log(taskArray)
    setupStorage();
})