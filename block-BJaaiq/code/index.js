let root=document.querySelector('ul');

let max=20,index=0;

function addQuotes(){
for(let i=0;i<max;i++){
    let li=document.createElement('li');
    let quote=document.createElement('blockquote');
    let cite=document.createElement('cite');
    
    quote.innerText=quotes[index].quoteText;
    cite.innerText=quotes[index].quoteAuthor;
    
    li.classList.add('margin');
    quote.classList.add('quoteText');
    cite.classList.add('citeText');
    
    li.append(quote,cite);

    root.append(li);
    index++;
}

}
addQuotes();

document.addEventListener('scroll',function(){
    // console.log('scroll')
    let scrollTop=Math.ceil(document.documentElement.scrollTop);
    let scrollHeight=document.documentElement.scrollHeight;
    let clientHeight=Math.ceil(document.documentElement.clientHeight);

    // console.log(scrollTop,clientHeight,scrollHeight);

    if(scrollTop + clientHeight >= scrollHeight && index < quotes.length){
    addQuotes();  
    }
});

window.addEventListener('DOMContentLoaded', () =>{

    alert('Dom content loaded');

    addQuotes();
})