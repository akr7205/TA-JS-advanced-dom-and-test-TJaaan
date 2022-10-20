let btn = document.querySelector('.add');
let remove = document.querySelector('.draggable');
let root = document.querySelector('ul');
let dragSrcEl;
// let listItems=[];
function dragStart(e) {
    console.log(this);
    this.style.opacity = '0.8';
     dragSrcEl=this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragEnter() {
    // console.log('Event: ', 'dragenter');
    this.style.background='grey';
}

function dragLeave() {
    // console.log('Event: ', 'dragleave');
    this.style.background='white';

}

function dragOver(e) {
    // console.log('Event: ', 'dragover');
    // this.style.background='grey'
    e.preventDefault();
}

function dragDrop(e) {
    // console.log('Event: ', 'drop');
    console.log(dragSrcEl);
    if(dragSrcEl != this){
        dragSrcEl.innerHTML=this.innerHTML;
        this.innerHTML=e.dataTransfer.getData('text/html');
        dragSrcEl.style.opacity='1';
        dragSrcEl.style.background='white'
    }
    this.style.background='white';
    this.style.opacity = '1';
    
}

function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart);
    el.addEventListener('dragenter', dragEnter);
    el.addEventListener('dragover', dragOver);
    el.addEventListener('dragleave', dragLeave);
    el.addEventListener('drop',dragDrop);
    // el.addEventListener('dragend', dragEnd);
}

function addNewItem(e) {
    let value = document.querySelector('.input').value;
    let li = document.createElement('li');
    li.innerHTML = value;
    li.classList.add('draggable');
    li.setAttribute('draggable', 'true');
    root.append(li);
    document.querySelector('.input').value = '';
    // listItems.push(li);
    addEventsDragAndDrop(li);
}

btn.addEventListener('click', addNewItem);