//display current day
(function() {
  
  let currentDay = moment().format("LL");
  let eDisplayMoment = document.getElementById("displayMoment");
  eDisplayMoment.textContent = currentDay;
  
})(); 

//create time arrays to append hours and compare time
let time = [];
let timeComp = [];

function timeOneDay () {
    new Array(24).fill().forEach((acc, index) => {
      time.push(moment( {hour: index} ).format("hA"));
      timeComp.push(moment( {hour: index} ));
    })
  }

timeOneDay();

//create content and insert on page
$(function() {
    let i=0;
    while (i < 9) {
        i++;
        let inputEl = $("<div>");
        inputEl.addClass("input-group");
        let hourDiv = $("<div>");
        hourDiv.addClass("d-inline p-2 bg-dark text-white");    
        hourDiv.css("width", "10%");
        hourDiv.css("border-radius", "5%");
        let textEl = $('<textarea id="id' + i + '" name="name' + i +'" />');
        textEl.addClass("form-control");
        textEl.css("height", "12vh");
        textEl.css("font-size", "1.5em");
        let p = $("<p>");
        p = time[i + 8]; //starts at 9am
        hourDiv.append(p);
        let saveButton = $('<button id="btn' + i + '" name="name' + i +'" />');  
        saveButton.addClass("btn btn-primary");
        saveButton.css("width", "10%")
        inputEl.append(hourDiv, textEl, saveButton);
        $(".container").append(inputEl);

// save values to local storage when save button is clicked
     $(".input-group").on("click", function(e) {
      if (e.target && e.target.matches("button.btn")) {
        $("textarea").each(function() {
          var id = $(this).attr('id');
          var value = $(this).val();
          localStorage.setItem(id, value);
        });
      }
    });   

// load local storage values when page is refreshed
    $(document).ready (function(){
      $("textarea").each(function(){    
          var id = $(this).attr('id');
          var value = localStorage.getItem(id);
  
          $(this).val(value);
  
      }); 
  });

//color-coded hour in the past, present or future
        function now () {
            let currentHour = moment().format("hA");
            let isafter = moment().isAfter(timeComp[i+8]);
            let isbefore = moment().isBefore(timeComp[i+8]);
            if (currentHour == time[i+8]) {
                textEl.addClass("present");
            }
            else if (isafter == true && isbefore == false) {
                textEl.addClass("past");
            }
            else if (isbefore == true && isafter == false) {
                textEl.addClass("future");
            }
        }
        now();
    };
}); 