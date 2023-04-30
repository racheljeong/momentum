const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

let todoArray = []; //각 to-do li를 담을 배열
//전역변수 const로 정의해놓으면 submit 할때마다 업데이트 되어 이전것들이 덮어씌어짐짐
//1. const -> let으로 변경후
//이미 localStorage에 있는 각각들도 저장유지하고 싶음 ->  2. old todo를 복원필요

function deleteHandleFunc(e){
    
    const targetLi = e.target.parentElement;
    todoArray = todoArray.filter((todo) => parseInt(targetLi.id) !== todo.id);  //기존 arr 업데이트 시켜줌
    // li.id == Number, todo.id == String 이므로 삭제가 안됨 -> parseInt
    //삭제하려는 리스트의 id가 arr을 filter로 도는 id와 같다면 삭제, 다르다면 return true 로 존재하게됨 
 
    targetLi.remove();
    saveTodos();
   
}

function saveTodos(){

    localStorage.setItem("eachTodo", JSON.stringify(todoArray));
    //localStorage에는 배열 저장이 불가 && 각li를 텍스트 자체로 저장 원함
    // -> JSON.stringify : JS의 객체 또는 array를 string으로 잘라줌
}




function paintTodo(todo){
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    li.id = todo.id; // 고유 id를 주기위해 id : Date.now()로 값준걸 li의 id로 줌 
    span.innerText = todo.text;

    const button = document.createElement("button");
    button.innerText = "Del";
    button.addEventListener("click", deleteHandleFunc);
    li.appendChild(button);
    todoList.appendChild(li);


}


function submitHandleFunc(e){
    e.preventDefault();
    // 이벤트핸들러에 첫번째 인자 =  이벤트객체는
    //해당 이벤트(submit)의 기본동작인 페이지 새로고침을 방지
    const saveTodoVal = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : saveTodoVal,
        id : Date.now(),
    }
    console.log(`newTodoObj.id = ${newTodoObj.id}`);
    todoArray.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", submitHandleFunc);

const savedTodo = localStorage.getItem("eachTodo");

if(savedTodo !== null){
    const parsedTodo = JSON.parse(savedTodo);
    todoArray = parsedTodo; //이전것들이 덮어씌어지지않고 유지되기 위해 복원
    parsedTodo.forEach(paintTodo);
    //js가 parsedTodo를 for문 돌때마다 각각의 item을 string으로 넘겨줌줌-> paintTodo로 그려줌 
}