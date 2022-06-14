let addBtn=document.querySelector(".add-btn");
let removeBtn=document.querySelector(".remove-btn");
let modelCont=document.querySelector(".model-cont");
let mainCont=document.querySelector(".main-cont");
let textAreacont=document.querySelector(".textarea-cont");



let allPriorityColor=document.querySelectorAll(".priority-color");

let colors=["lightpink","lightgreen","lightblue","black"];

let modelPriorityColor=colors[3];
let addFlag=false;
let removeFlag=false;
let lockClass="fa-lock";
let unlockClass="fa-lock-open";



//listner for model priority colouring
allPriorityColor.forEach((colorElem,idx)=>{
    colorElem.addEventListener("click",(e)=>{
        allPriorityColor.forEach((priorityColorElem,idx)=>{
            priorityColorElem.classList.remove("border")
        })
        colorElem.classList.add("border");
        modelPriorityColor=colorElem.classList[0];
    })
})





addBtn.addEventListener("click",(e)=>{
//display Model
//generate ticket
addFlag=!addFlag;
if(addFlag){
    modelCont.style.display="flex";
}else{
    modelCont.style.display="none";
}


})
removeBtn.addEventListener("click",(e)=>{
    removeFlag= !removeFlag; 
})
modelCont.addEventListener("keydown",(e)=>{
    let key=e.key;
    if(key=="Shift"){
        createTicket(modelPriorityColor,textAreacont.value,shortid());
        
        modelCont.style.display="none";
        addFlag=false;
        textAreacont.value="";
    }
})

function createTicket(ticketColor,ticketTask,TicketId){
    let ticketCont=document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML=`
    <div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">#${TicketId}</div>
    <div class="task-cont">${ticketTask}</div>
    <div class="ticket-lock">
            <i class="fa-regular fa-lock"></i>
        </div`
;
mainCont.appendChild(ticketCont);
handleRemoval(ticketCont);
handleLock(ticketCont);
}

function handleRemoval(ticket){
    //if removeFlag=true then remove
    if(removeFlag)ticket.remove();
    

}
function handleLock(ticket){
    let ticketLockElem=ticket.querySelector(".ticket-lock")
     let ticketlock=ticketLockElem.children[0];
     ticketlock.addEventListener("click",(e)=>{
         if(ticketlock.classList.contains(lockClass)){

         
         ticket.classList.remove(lockClass);
         ticket.classList.add(unlockClass);
         }else{
            ticket.classList.remove(unlockClass);
            ticket.classList.add(lockClass);
         }


     })
}