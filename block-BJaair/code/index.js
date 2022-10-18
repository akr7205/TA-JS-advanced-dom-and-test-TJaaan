let form = document.querySelector('.form');
let ul = document.querySelector('ul');

let cardsData = JSON.parse(localStorage.getItem('cards')) || [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = e.target.elements.title.value;
    let category = e.target.elements.category.value;
    // console.log(title,category);
    cardsData.push({ title, category });
    localStorage.setItem('cards', JSON.stringify(cardsData));
    createUI(cardsData, ul)
})

function handleEdit(e, info, id, label) {
    let elm = e.target;
    let input = document.createElement('input');

    input.value = info;

    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            let updatedValue = e.target.value;
            cardsData[id][label] = updatedValue;
            localStorage.setItem('cards', JSON.stringify(cardsData));

            createUI();
        }
    });
    input.addEventListener('blur', (e) => {
        let updatedValue = e.target.value;
        cardsData[id][label] = updatedValue;
        createUI();
        localStorage.setItem('cards', JSON.stringify(cardsData));

    });
    let parent = e.target.parentElement;
    parent.replaceChild(input, elm);
    console.log(parent);
}

function createUI(data = cardsData, root = ul) {
    root.innerHTML = '';
    let fragment = new DocumentFragment();
    data.forEach((cardInfo, index) => {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.addEventListener('dblclick', (e) => handleEdit(e, cardInfo.title, index, 'title'))

        let h2 = document.createElement('h2');
        h2.addEventListener('dblclick', (e) => handleEdit(e, cardInfo.category, index, 'category'))

        p.innerText = cardInfo['title'];
        h2.innerText = cardInfo['category']
        li.append(p, h2);
        fragment.appendChild(li);
    });
    root.append(fragment);
}

createUI(cardsData, ul);