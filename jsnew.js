


// Setting Up Variables 

let theInput = document.querySelector(".add-task input") ; 
let theAddButton = document.querySelector(".add-task .plus") ;
let TasksContainer = document.querySelector(".tasks-content") ; 
let noTasksmessages = document.querySelector(".no-tasks-message"); 
let taskscount = document.querySelector(".tasks-count span"); 
let taskscompleted = document.querySelector(".tasks-completed span");
theInput.onclick = place
function place() { 
    theInput.setAttribute('placeholder','');
}
// Focus on input Field 
window.onload = function() { 

};
// fun compare 
function comparing (a) {
    let cnt = 0 ; 
    for (let i = 0 ; i<a.length ; i++) {
        if (a[i]===theInput.value) { 
            cnt++ ;
            break; 
        }
    } 
    if (cnt === 1) { 
        return 7 ;  
    }
    else { 
        return true ; 
    }
}
// Adding the task 
let textChecker = []; 
let cnt = 0 ; 
theAddButton.onclick = function() {
    // if input is Empty 
    if (theInput.value === "" ) { 
        swal("Your Text is empty !" ,"try add text and try again.." , "error") ;
        return 0 ;
    }
    if (comparing(textChecker) === 7) { 
        swal("You Write this Task Before !" ,"try add new task and try again.." , "warning") ;
    }
    else { 
        textChecker[cnt] = theInput.value ;
        cnt++ ; 
        console.log(textChecker , cnt);
        // Remove no tasks messages 
        noTasksmessages.remove();

        // Create Span Element 
        let mainSpan = document.createElement("span") ;
        let actionCont =document.createElement("div");
        // Create Delete btn 
        let deleteElement = document.createElement("span") ; 

         // Create Finish btn 
         let FinishElement = document.createElement("span") ; 
        // Add text to main span 
        let SpanText = document.createTextNode(theInput.value) ; 


        // Add deltetext to delete span 
        let DelteText = document.createTextNode("Delete") ; 

        // Add finishtext to delete span 
        let finishTxt = document.createTextNode("Finished") ; 
        // Append Text 
        mainSpan.appendChild(SpanText); 
        deleteElement.appendChild(DelteText);
        FinishElement.appendChild(finishTxt);
        // ADD Class to span 
        mainSpan.className = 'task-box';
         
        deleteElement.className = 'delete';
        FinishElement.className = 'finishes';
        actionCont.className = 'action-cont' ;

        // Add Delete to main span 
        mainSpan.appendChild(actionCont);
        actionCont.appendChild(FinishElement);
        actionCont.appendChild(deleteElement);
        // to explain   <span class="task-box">Task one <span class="delete">Delete</span></span>

        // Add the task to the container 
        TasksContainer.appendChild(mainSpan);

        // Empety The input 
        theInput.value='';

        //foucs again
        theInput.focus();
        CalculateTasks();
    }
}; 

// Delete Task Misson Complete !!
document.addEventListener('click' , function(eventt) {
// Delete Task 
if (eventt.target.className == 'delete') { 
    let MyValueS = eventt.target.parentNode.parentNode.textContent;
    console.log(MyValueS);
    let MyValueA = Array.from(MyValueS); 
    let MyValueA2 = MyValueA.slice(-0,-14);
    console.log(MyValueA2);
    str = MyValueA2.join('');
    eventt.target.parentNode.parentNode.remove();
    for (let i = 0 ; i<textChecker.length ; i++) { 
    if (str === textChecker[i]) { 
        textChecker[i]= ''; 
    }    
}
// Check num of tasks 
if (TasksContainer.childElementCount == 0) {
    TasksContainer.appendChild(noTasksmessages);
}
CalculateTasks()
// sliderImages.forEach(function (img) {
//     img.classList.remove('active')
// }   
}
if (eventt.target.classList.contains('icon')) { 
    eventt.target.setAttribute('id','active-icon');
}


// fininsh task 

if ((eventt.target.classList.contains('finishes'))){ 
    // we need contains because class list being task-box finished not just task-box;
    eventt.target.parentNode.parentNode.classList.toggle("finished") ;

    CalculateTasks()
}

// Delete All Task 
if (eventt.target.className == 'delete-all') { 
    let taskBox = document.querySelectorAll(".task-box");
    let taskBoxAr = Array.from(taskBox); 
    console.log(taskBox) ;
    console.log(taskBoxAr) ;
    for (let i = 0 ; i<taskBoxAr.length ; i++) { 
        taskBoxAr[i].remove() ;
    }
    TasksContainer.appendChild(noTasksmessages);
    textChecker = [] ;
    CalculateTasks()
}

// Finish All Task 
    if (eventt.target.className == 'Finish-all-tasks' ||(eventt.target.className == 'Finishs') )  { 
    let taskBox = document.querySelectorAll(".task-box");
    let taskBoxAr = Array.from(taskBox); 
    for (let i = 0 ; i<taskBox.length ; i++) { 
        taskBoxAr[i].classList.add("finished")
        console.log(22);
    }
    CalculateTasks()

}

}) ;

// Function to Calculate Tasks 
function CalculateTasks() { 
    // Create All Tasks 
    taskscount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // Create Completed Tasks 
    taskscompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}

// Sweet Alert 
// swal("TO DO List" ,"project with js !" , "success") ;
