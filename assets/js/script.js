var currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format("dddd, MMMM Do");
var saveBtn1 = document.getElementById("saveBtn1");
var saveBtn2 = document.getElementById("saveBtn2");
var saveBtn3 = document.getElementById("saveBtn3");
var saveBtn4 = document.getElementById("saveBtn4");
// var saveBtn5 = document.getElementById("saveBtn5");
// var saveBtn6 = document.getElementById("saveBtn6");
// var saveBtn7 = document.getElementById("saveBtn7");
// var saveBtn8 = document.getElementById("saveBtn8");
// var saveBtn9 = document.getElementById("saveBtn9");

$(".row").on("click", "p", function(){
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("col-10").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    $(textInput).attr("id", '' + this.id);
})
$(".row").on("blur", "textarea", function(){
    var text = $(this).val().trim();
    var taskP = $("<p>").addClass("col-10").text(text);
    $(taskP).attr("id", "" + this.id);
    $(this).replaceWith(taskP);
})

function saveTask(){
    var hour = this.id;
    hour = hour.replace("saveBtn", "")
    hour = "input" + hour
    hourInput = document.getElementById(hour);
    console.log(hour);
}

saveBtn1.addEventListener("click", saveTask);
saveBtn2.addEventListener("click", saveTask);
saveBtn3.addEventListener("click", saveTask);
saveBtn4.addEventListener("click", saveTask);
// saveBtn5.addEventListener("click", saveTask);
// saveBtn6.addEventListener("click", saveTask);
// saveBtn7.addEventListener("click", saveTask);
// saveBtn8.addEventListener("click", saveTask);
// saveBtn9.addEventListener("click", saveTask);

// loadTasks();