//display current day
(function() {
  
  var currentDay = moment().format("LL");
  var eDisplayMoment = document.getElementById("displayMoment");
  eDisplayMoment.textContent = currentDay;
  
})(); 


let time = [];
let timeComp = [];

function timeOneDay () {
    new Array(24).fill().forEach((acc, index) => {
      time.push(moment( {hour: index} ).format("hA"));
      timeComp.push(moment( {hour: index} ));
    })
  }
console.log(time);

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
        p = time[i + 14];
        hourDiv.append(p);
        var saveButton = $("<button>");
        saveButton.addClass("btn btn-primary");
        saveButton.css("width", "10%")
        inputEl.append(hourDiv, textEl, saveButton);
        $(".container").append(inputEl);

//hour in the past, present or future
        function now () {

                var isafter = moment().isAfter(timeComp[i+14]);
                var isbefore = moment().isBefore(timeComp[i+14]);
                if (isafter == true && isbefore == false) {
                    textEl.addClass("past");
                }
                else if (isbefore == true && isafter == false) {
                    textEl.addClass("future");
                }
                else {
                   textEl.addClass("present");
                }
        }
        now();

    //store input in local storage
        


    //save button stores input when clicked
        $(saveButton).on("click", function() {
            var userInput = textEl.val();
            localStorage.setItem("userInput", "test");
            
          });

    //load local storage data

       // function initialize() {
         //  var storedText = localStorage.getItem("userInput");
         //   textEl.textContent = storedText;
        //};
    };
}); 

//initialize();

