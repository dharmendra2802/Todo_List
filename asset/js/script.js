// working on add/remove of input box on clicks

const add_bttn = document.getElementById('add-button');
const input_box = document.getElementById('form-cont');
const closeButton = document.getElementById('close');
const addButton = document.getElementById('id-input-button')

add_bttn.addEventListener('click',closeInput);
closeButton.addEventListener('click',closeInput);
addButton.addEventListener('click',function()
{
    const d = document.getElementById('id-input-task').value;
    if(d!='')
    {
        funboxCheck();
        closeInput();
    }
})

// functon to close input box
function closeInput()
{
    add_bttn.classList.toggle('hide');
    input_box.classList.toggle('hide');
}

// working on tickbox to linethrough
const ticks = document.querySelectorAll('.tick');

ticks.forEach(tick=>{
  tick.addEventListener('click',function(){
    const para = tick.nextElementSibling;
    
    if(tick.children[0].checked)
        para.classList.toggle('strike');
    else
        para.classList.add('remove');
  })  
})


// drop button of discription
// queryselectorall because there can be multiple tasks

const drops = document.querySelectorAll('.drop');
function containsOnlySpaces(str) {
    // Remove all whitespace characters from the string
    var stringWithoutSpaces = str.replace(/\s/g, '');
    
    // Check if the resulting string is empty or consists only of spaces
    return stringWithoutSpaces.length === 0 || stringWithoutSpaces === '';
  }

drops.forEach(drop=>{
    drop.addEventListener('click',function()
    {
        const disBox = drop.nextElementSibling;
        if(containsOnlySpaces(disBox.innerHTML))
            disBox.innerHTML = "No discription given";
        
        dropTheBox(drop,disBox);
        disBox.addEventListener('click',function()
        {
            dropTheBox(drop,disBox);
        })
        // disBox.removeEventListener('click',function(){})
    })
})

function dropTheBox(a,d,rotation)
{
    if(!d.classList.contains('hide'))
    {
        d.classList.add('hide');        
    }else
    {
        d.classList.remove('hide');        
    }
}


// working on edit box
// first we are listening to the one that is being clicked
// then we are passing the current value of the para and taskid

const edits = document.querySelectorAll('.edit');
edits.forEach(edit=>{
    edit.addEventListener('click',function(){
    const para = edit.previousElementSibling;
    editTask(para.innerHTML,edit.dataset.taskid);
    })
})

// we are using that current value to show in the edit input and 
// then sending request to update the db and returning the updating value

function editTask(str,id)
{
    console.log(str+id)
    const cont = document.getElementById('edit-box');
    const box = document.getElementById('edit-input');
    cont.classList.toggle('hide');
    box.value=str;
    
    document.getElementById('edit-bttn').addEventListener('click',function()
    {
        const update = box.value;

        fetch(`/update-task/${id}`,{
            method:'POST',
            headers:{     
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({__id:id, data:update}),
        })
        
        .then((response)=>{
            // console.log(response); // Check the response
            if(!response.ok){
                throw new Error('Failed to update task');
            }
            return response.json()})
            
            .then((data)=>{
                // console.log(data)
        })
        
        .catch((error)=>{console.log(error)})
        
        cont.classList.toggle('hide');
        location.reload();
    }
)}
    
    
    
// leisure box/msg
const del = document.querySelectorAll('.delete');
del.forEach(d=>{
    d.addEventListener('click',funboxCheck);
})

function funboxCheck(){
    const taskCount = document.getElementById('content-div').childElementCount;
    const funbox = document.getElementById('leisure');
   
    if(taskCount<3)
    {   
        funbox.classList.remove('hide');
    }else
    {
        funbox.classList.add('hide');
    }
}




funboxCheck();