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

drops.forEach(drop=>{
    drop.addEventListener('click',function()
    {
        const disBox = drop.nextElementSibling;
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
    // rotation+=180;
    // a.style.transform = 'rotate('+rotation+'deg)';
    if(!d.classList.contains('hide'))
    {
        d.classList.add('hide');        
    }else
    {
        d.classList.remove('hide');        
    }
}

// leisure box/msg
const del = document.querySelectorAll('.delete');
del.forEach(d=>{
    d.addEventListener('click',funboxCheck);
})

function funboxCheck(){
    const taskCount = document.getElementById('content-div').childElementCount;
    const funbox = document.getElementById('leisure');
    if(taskCount<2)
    {
        funbox.classList.remove('hide');
    }else
    {
        funbox.classList.add('hide');
    }
}
funboxCheck();
