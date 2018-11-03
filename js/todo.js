//window.localStorage.clear();
var inputTaskArray=[];
//var checkedArra=[];

$("#add-icon").on('click',function(e){

    inputTaskArray.push($("#input-task").val());
    newTask=$("#input-task").val();

    if(newTask !==""){
    window.localStorage.setItem("tasks",inputTaskArray);    
    $("ul.tasks-list").append('<li class="tasks-list-li">'+"<input  type='checkbox' class='checkbox_check'>"+"<label>"+ newTask+"</label>"+'<i class="remove-icon fa fa-times-circle" aria-hidden="true"></i>'+'</li>');
    

    $("#input-task").val("");
      }
    else{
     e.preventDefault();       
}

$(".remove-icon").click(function(){
      $(this).parent().remove();
});


$('input.checkbox_check').click(function () {
        
        if ($(this).is(':checked')) {
          //  console.log("checkedddddddddddd");
            $(this).parent().appendTo(".div-completed");
			
            $(this).parent().css("text-decoration","line-through");
            $(this).parent().css("list-style","none");
        } else {
            console.log("Noooootttttt  checkedddddddddddd");
        }
});
controlStorage();

});

function controlStorage(){
	
var storedItem=window.localStorage.getItem("tasks");

var stringTasksInLocalStorage=localStorage.tasks;
var tasksArray= stringTasksInLocalStorage.split(",");

inputTaskArray=tasksArray;
//===========================================if condition if checked do the thing 0000000000

for(i=0;i<tasksArray.length;i++){
      
    $("ul.tasks-list").append('<li class="tasks-list-li">'+"<input  type='checkbox' class='checkbox_check'>"+"<label>"+ tasksArray[i]+"</label>"+'<i class="remove-icon fa fa-times-circle" aria-hidden="true"></i>'+'</li>');

}

$(".remove-icon").click(function(){ 
      var valueOfArray=$(this).parent().prevObject[0].previousElementSibling.firstChild.nodeValue;
      $(this).parent().remove();
      //tasksArray.splice(indexOf(valueOfArray), 1);
});

$('input.checkbox_check').click(function(){

        if ($(this).is(':checked')) {
            $(this).parent().appendTo(".div-completed");
            $(this).parent().css("text-decoration","line-through");
            $(this).parent().css("list-style","none");

        } else {
            console.log("Noooootttttt  checkedddddddddddd");
        }
});
	
		
}