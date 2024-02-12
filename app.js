$("#addTodo").click(function(){
const inputTodo = $("input").val();
$("#todoList").append("<li><input type='checkBox'>" + inputTodo + "</li>")

$("input").val("");
});