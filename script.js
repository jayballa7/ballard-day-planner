var hourArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

var hours = 0;
var hourIndex = 0;
var hourDiv = $("<div>");
hourDiv.addClass("d-inline p-2 bg-dark text-white");    

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
        p = hourArray[i-1];
        hourDiv.append(p);
        var saveButton = $("<button>");
        saveButton.addClass("btn btn-primary");
        saveButton.html("Save");
        saveButton.css("width", "10%")
        inputEl.append(hourDiv, textEl, saveButton);
        $(".container").append(inputEl);

    };
});
