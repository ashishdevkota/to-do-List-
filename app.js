
document.addEventListener('DOMContentLoaded',function(){

    let listTask=document.querySelector('#list-task ul');
    listTask.addEventListener('click',(el)=>{
        if(el.target.className=='delete'){
            let li=el.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })
    
    //add form
    
    let addForm=document.forms['add-task'];
    addForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        let value=addForm.querySelector('input[type="text"]').value;
    
    //create element
    let li=document.createElement('li');
    let taskName=document.createElement('span');
    let taskBtn=document.createElement('span');
    //create content
    taskName.textContent=value;
    taskBtn.textContent='delete';
    
    
    //add class
    taskName.classList.add('name');
    taskBtn.classList.add('delete');
    //append child
    li.appendChild(taskName);
    li.appendChild(taskBtn);
    listTask.appendChild(li);
    value=""
    })
    
    //hide task
    const hideBox=document.querySelector('#hide');
    hideBox.addEventListener('click',(e)=>{
        if(hideBox.checked){
            listTask.style.display="none";
        }else{
            listTask.style.display='initial';
        }
    })
    
    //search filter
    const searchTask=document.forms['search-task'].querySelector('input');
    searchTask.addEventListener('keyup',(el)=>{
        const term=el.target.value.toLowerCase();
        const tasks=listTask.getElementsByTagName('li');
        Array.from(tasks).forEach((e)=>{
    const title=e.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
           e.style.display='block';
    }else{
        e.style.display='none';
        }
    
        })
    })
    
    
    //tabbed content
    
    const tabs=document.querySelector('.tabs');
    const panels=document.querySelectorAll('.panel');
    
    tabs.addEventListener('click',(e)=>{
        if(e.target.tagName=='LI'){
        const targetPanel=document.querySelector(e.target.dataset.target);
        panels.forEach((panel)=>{
       if(panel==targetPanel){
           panel.classList.add('active');
       }else{
           panel.classList.remove('active');
       }
        })    
        }
    })
    
    
    

} )


// // remove tasksusing event bubbling
// let taskList=document.querySelector('#list-task ul');

// taskList.addEventListener('click',(el)=>{
//     if(el.target.className=="delete"){
//         let list=el.target.parentElement;
//         list.parentNode.removeChild(list);
//     }
// })

// //interact with form
// let addForm=document.forms['add-task'];
// addForm.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     const value=addForm.querySelector('input[type="text"]').value;

//     //create element
//     let li=document.createElement('li');
//     let taskName=document.createElement('span');
//     let deleteBtn=document.createElement('span');

//    //add content
//    deleteBtn.textContent="delete";
//    taskName.textContent=value;
   
// //appen child
// li.appendChild(taskName);
// li.appendChild(deleteBtn);
// taskList.appendChild(li);

// })
