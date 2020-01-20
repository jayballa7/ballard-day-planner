moment().format();

(function() {
  
  var currentTime = moment().format("LL");
  var eDisplayMoment = document.getElementById("displayMoment");
  eDisplayMoment.innerHTML = currentTime;
  
})(); 

var workHours = 24;
var time = [];

function timeOneDay(){
    var formattedTime;
    for(j =9; j < workHours+1 ; j++){ //fill in all of the hours
        formattedTime = (moment().subtract(j, "hours")).format("hA");  //give the time in format X AM/PM
        time.unshift(formattedTime);  //add to beginning of array
    }                                //do this for all 24 hours
}
timeOneDay();
console.log(time);

$(function() {
    var hours = 0;
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
        p = time[i-1];
        hourDiv.append(p);
        var saveButton = $("<button>");
        saveButton.addClass("btn btn-primary");
        saveButton.css("width", "10%")
        inputEl.append(hourDiv, textEl, saveButton);
        $(".container").append(inputEl);
    };
}); 




//Inserting styled timeblocks onto the page
/*$(function() {
    var hours = 0;
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
        p = hourArray[i-1];
        hourDiv.append(p);
        var saveButton = $("<button>");
        saveButton.addClass("btn btn-primary");
        saveButton.css("width", "10%")
        inputEl.append(hourDiv, textEl, saveButton);
        $(".container").append(inputEl);
    };
}); */
