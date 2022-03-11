
//----------------declare variables-----------

var todo=document.getElementById("todo");
var list=document.getElementById("list");
var add=document.getElementById("basic-addon1");
var t_todo=[];

//------------------ function-----------------
add.addEventListener("click" , function add(){
    
    list.innerHTML += `
            <div class="parent d-flex justify-content-between mx-6">
            <div class="p-2 task ">
            <span id="matiere_name" class="">
               ${todo.value}
            </span>
            
            </div>
            <div class="p-2">
                <label for=origine">origine de matiére</label>
            <input type="text" name="origine" id="origine" required>
            </div>
            <button class="delete m-2">
            <i id="icon" class="fas fa-trash"></i>
            </button>
        </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }


      }

 
)
