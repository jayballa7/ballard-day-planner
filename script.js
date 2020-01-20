//display current day
(function() {
  
  var currentDay = moment().format("LL");
  var eDisplayMoment = document.getElementById("displayMoment");
  eDisplayMoment.textContent = currentDay;
  
})(); 

var workHours = 24;
var time = [];

function timeOneDay(){
    var formattedTime;
    //start from 9am
    for(var j = 0; j < workHours; j++){ 
        formattedTime = (moment().subtract(j, "hours")).format("hA");  //give the time in format X AM/PM
        time.unshift(formattedTime);  //add to beginning of array
    }                              
}
timeOneDay();

//create content and insert on page
$(function() {
    var i=0;
    while (i < 9) {
        i++;
        var inputEl = $("<div>");
        inputEl.addClass("input-group");
        var hourDiv = $("<div>");
        hourDiv.addClass("d-inline p-2 bg-dark text-white");    
        hourDiv.css("width", "10%");
        hourDiv.css("border-radius", "5%");
        var textEl = $("<textarea>");
        textEl.addClass("form-control");
        textEl.css("height", "12vh");
        textEl.css("font-size", "xx-large");
        var p = $("<p>");
        p = time[i];
        hourDiv.append(p);
        var saveButton = $("<button>");
        saveButton.addClass("btn btn-primary");
        saveButton.css("width", "10%")
        inputEl.append(hourDiv, textEl, saveButton);
        $(".container").append(inputEl);

        function now () {
            var isafter = moment().isAfter(time);
            var isbefore = moment().isBefore(time);
            if (isafter == true) {
                textEl.addClass("past");
            }
            else if (isbefore == true) {
                textEl.addClass("future");
            }
            else {
                textEl.addClass("present");
            }
        }
        now();

    }
}); 
