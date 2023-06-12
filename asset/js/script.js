// working on add/remove of input box on clicks

const add_bttn = document.getElementById('add-button');
const input_box = document.getElementById('form-cont');
const closeButton = document.getElementById('close');
const addButton = document.getElementById('id-input-button')

add_bttn.addEventListener('click',closeInput);
closeButton.addEventListener('click',closeInput);
addButton.addEventListener('click',function()
{

})
// functon to close input box
function closeInput()
{
    add_bttn.classList.toggle('hide');
    input_box.classList.toggle('hide');
}

// working on tickbox to linethrough
document.getElementById('tick').addEventListener('click',function(){

    const checkbox = document.getElementById('checkbox');
    const para = document.getElementById('task-para');
    
    if(checkbox.checked)
        para.classList.toggle('strike');
    else
        para.classList.add('remove');

})


// drop button of discription

const drop = document.getElementById('drop');
const disBox = document.getElementById('dis-box');

drop.addEventListener('click',dropTheBox);
disBox.addEventListener('click',dropTheBox);
let rotation = 0;
function dropTheBox()
{
    rotation+=180;
    drop.style.transform = 'rotate('+rotation+'deg)';
    if(!disBox.classList.contains('hide'))
    {
        disBox.classList.add('hide');        
    }else
    {
        disBox.classList.remove('hide');        
    }
}