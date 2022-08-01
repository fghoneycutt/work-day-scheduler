//display current day at top of page
var currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format("dddd, MMMM Do");
//save button elements to attach event listeners to later
var saveBtn9 = document.getElementById("saveBtn9");
var saveBtn10 = document.getElementById("saveBtn10");
var saveBtn11 = document.getElementById("saveBtn11");
var saveBtn12 = document.getElementById("saveBtn12");
var saveBtn13 = document.getElementById("saveBtn13");
var saveBtn14 = document.getElementById("saveBtn14");
var saveBtn15 = document.getElementById("saveBtn15");
var saveBtn16 = document.getElementById("saveBtn16");
var saveBtn17 = document.getElementById("saveBtn17");

//turn p element into textarea element and back again when you click on and off of it
$(".row").on("click", "p", function(){
    var text = $(this).text().trim();
    classes = this.classList.value
    var textInput = $("<textarea>").addClass(classes).val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    $(textInput).attr("id", '' + this.id);
})
$(".row").on("blur", "textarea", function(){
    var text = $(this).val().trim();
    classes = this.classList.value;
    var taskP = $("<p>").addClass(classes).text(text);
    $(taskP).attr("id", "" + this.id);
    $(this).replaceWith(taskP);
})

//save tasks for individual hours once individual save buttons are pressed
function saveTask(){
    var hour = this.id;
    hour = hour.replace("saveBtn", "")
    hour = "input" + hour
    hourInput = document.getElementById(hour);
    localStorage.setItem(hourInput.id, hourInput.textContent)

}

//load tasks from local storage on page load
function loadTasks(){
    for (var i = 9; i < 18; i++){
        var item = "input" + i;
        tasks = localStorage.getItem(item);
        pEl = document.getElementById("input" + i);
        pEl.textContent = tasks;
    }
}

//check the task hour against the current time to set the background color
function auditTask(){
    var current = new Date();
    var currentHour = current.getHours();
    for (var i = 9; i < 18; i++){
        inputEl = document.querySelector("#input" + i);
        var elHour = inputEl.id;
        elHour = elHour.replace("input", "");
        console.log(elHour);
        if (currentHour == elHour){
            inputEl.classList.add("present")
        } else if (currentHour < elHour){
            inputEl.classList.add("future");
        } else {
            inputEl.classList.add("past");
        }
    }
}

//event listeners for all save buttons
saveBtn9.addEventListener("click", saveTask);
saveBtn10.addEventListener("click", saveTask);
saveBtn11.addEventListener("click", saveTask);
saveBtn12.addEventListener("click", saveTask);
saveBtn13.addEventListener("click", saveTask);
saveBtn14.addEventListener("click", saveTask);
saveBtn15.addEventListener("click", saveTask);
saveBtn16.addEventListener("click", saveTask);
saveBtn17.addEventListener("click", saveTask);


//check every ten minutes if the hour has changed to update the background color
function updatePage(){
    setInterval(function(){
        auditTask();
    }, 1000 * 60 * 10)
}
loadTasks();
auditTask();
updatePage();