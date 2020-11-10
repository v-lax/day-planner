//Variable Declaration
var todaysDate = moment().format("MMM Do YYYY");
var todaysTime = moment().format('HH')
time = moment($('#time1').data('time'),'HH').format('HH')

console.log(time)
console.log(todaysTime>time)


$('#currentDay').text(todaysDate)
