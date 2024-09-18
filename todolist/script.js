// let inputs = document.getElementById("inp");
// let text = document.querySelector(".text");

// function Add(){
//     if(inputs.value == ""){
//         alert("Please Enter Task")
//     }else{
//         let newEle = document.createElement("ul");
//         newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
//         text.appendChild(newEle);
//         inputs.value="";contenteditable="true";
//         newEle.querySelector("i").addEventListener("click" , remove);
//         function remove(){
//             newEle.remove()
//         }
//     }
// }









// let inputs = document.getElementById("inp");
// let text = document.querySelector(".text");

// function Add(){
//     if(inputs.value == ""){
//         alert("Please Enter Task");
//     }else{
//         let newEle = document.createElement("ul");
//         newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        
//         // Make the task content editable
//         newEle.setAttribute("contenteditable", "true");
        
//         text.appendChild(newEle);
//         inputs.value = "";
//         newEle.querySelector("i").addEventListener("click", remove);
        
//         function remove(){
//             newEle.remove();
//         }
//     }
// }


let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        // Create task container as a list item (ul in your case)
        let newEle = document.createElement("ul");

        // Create complete button (for task completion)
        let completeButton = document.createElement("button");
        completeButton.classList.add("complete-btn");
        completeButton.innerHTML = "&#10004;"; // Tick mark symbol inside the button

        // Toggle 'completed' class to change color when button is clicked
        completeButton.addEventListener("click", function() {
            completeButton.classList.toggle("completed");
        });

                 

        

        // Add the text content of the task and trash icon
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        

        // Append the complete button after the task content (to right side)
        newEle.appendChild(completeButton);

        // Append the new task element to the text container
        text.appendChild(newEle);
        
        // Clear the input after adding the task
        inputs.value = "";

        // Add event listener to trash icon for task removal
        newEle.querySelector("i").addEventListener("click", remove);
        
        // Function to remove task
        function remove() {
            newEle.remove();
        }
    }
}























// let inputs = document.getElementById("inp");
// let text = document.querySelector(".text");

// function Add(){
//     if(inputs.value == ""){
//         alert("Please Enter Task")
//     }else{
//         let newEle = document.createElement("ul");
//         newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
//        // Make the task content editable
//         newEle.setAttribute("contenteditable", "true");
//         text.appendChild(newEle);
//         inputs.value="";
//         newEle.querySelector("i").addEventListener("click" , remove);
//         function remove(){
//             newEle.remove()
//         }
//     }
// }
