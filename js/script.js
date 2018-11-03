//window.localStorage.clear();
var inputTaskArray=[];
var checkedArra=[];

function readyOn(){
	
var storedItem=window.localStorage.getItem("tasks");
console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
console.log(storedItem);

stringTasksInLocalStorage=localStorage.tasks;
var tasksArray= stringTasksInLocalStorage.split(",");

console.log(tasksArray[0]);
inputTaskArray=tasksArray;
	

        for(i=0;i<tasksArray.length;i++){
      
    $("ul.tasks-list").append('<li class="tasks-list-li">'+"<input  type='checkbox' class='checkbox_check'>"+"<label>"+ tasksArray[i]+"</label>"+'<i class="remove-icon fa fa-times-circle" aria-hidden="true"></i>'+'</li>');

}//-----------------for-----------------------
	
	
	$('input.checkbox_check').click(function(){
			if (($(this).is(':checked'))== false){

		 $(this).parent().appendTo(".div-completed");
		 
            $(this).parent().css("text-decoration","line-through");
            $(this).parent().css("list-style","none");
            $(this).parent().css("class","moove");
	}});



//**************************************************REMOVEEEE$$CHECKKKKK*****************************************************************
$(".remove-icon").click(function(){
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");
      var valueOfArray=$(this).parent().prevObject[0].previousElementSibling.firstChild.nodeValue;

      console.log(valueOfArray);
      $(this).parent().remove();
//      tasksArray.splice(indexOf(valueOfArray), 1);
      console.log("EEEEEEEEEEEEEEEe");
      console.log(tasksArray);
});



//******************************************************************************************************************************

}


//****************************************************Click***********************************************************
$("#add-icon").on('click',function(e){
	
  inputTaskArray.push($("#input-task").val());
  newTask=$("#input-task").val();

    if(newTask !==""){
      
    $("ul.tasks-list").append('<li class="tasks-list-li">'+"<input  type='checkbox' class='checkbox_check'>"+"<label>"+ newTask+"</label>"+'<i class="remove-icon fa fa-times-circle" aria-hidden="true"></i>'+'</li>');

   store();
//   getValues();

   $("#input-task").val("");
      }
    else{
     e.preventDefault();       
}


//********************************************************8REMOVEE&CHECJJJJ********************************
$(".remove-icon").click(function(){
      $(this).parent().remove();
      
     // tasksArray.splice(0, 1);
      //console.log("EEEEEEEEEEEEEEEe");
      //console.log(tasksArray);
});


$('input.checkbox_check').click(function() {
        
        console.log("check function on loassss");
        console.log($(this).parent().prevObject[0].nextElementSibling.firstChild.nodeValue);
        //.nextElementSibling()
        if ($(this).is(':checked')) {
          //  console.log("checkedddddddddddd");
            $(this).parent().appendTo(".div-completed");
            $(this).parent().css("text-decoration","line-through");
            $(this).parent().css("list-style","none");
           // $(this).parent().css("class","moove");

        } else {
            console.log("Noooootttttt  checkedddddddddddd");
        }

		
		});
});		
//************************************************************************************************************************8
readyOn();
//***********************************************************************************STORRRR*************************************8
function store(){
window.localStorage.setItem("tasks",inputTaskArray);  
//var checkedArray=$('input.checkbox_check').parent();

}

//function getValues(){var storedItem=window.localStorage.getItem("tasks");}

//**********************************************************************************************************************************888


//**************************************************************************************************************************************
function storeDone(){

window.localStorage.setItem("Done",doneArray);  
  
//console.log("input in store   "+inputTaskArray);

}

function getValuesOfDone(){
   
var storedDoneItem=window.localStorage.getItem("Done");

}

//**************************************************************************************************************************************


//window.localStorage.clear();

console.log(localStorage);
console.log(localStorage.tasks);

