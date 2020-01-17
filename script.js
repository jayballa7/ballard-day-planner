var hourArray = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

var hours = 0;
var hourIndex = 0;
var hourDiv = $("<div>");
hourDiv.addClass("d-inline p-2 bg-dark text-white");    

$(function() {
    var i=0;
    while (i < 10) {
        i++;
        var inputEl = $("<div>");
        inputEl.addClass("input-group");
        var hourDiv = $("<div>");
        hourDiv.addClass("d-inline p-2 bg-dark text-white");    
        var textEl = $("<textarea>");
        textEl.addClass("form-control");
        var saveButton = $("<button>");
        saveButton.addClass("btn btn-primary");
        saveButton.html("Save");
        inputEl.append(hourDiv, textEl, saveButton);
        $(".container").append(inputEl);

    };
});

$(function() {
    var j = 0;
    var p = $("<p>");
    for(var j = 0; j < hourArray.length; j++) {
        j++;
        hours++;
        $(hourDiv).append(p);
    }
    });