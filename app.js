const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


//Create Todos

const generateTemplate = todo => {
  const html = `
    <li class="todo">
    <img src="assets/Group 114.svg" alt="check" class="delete">
    <span>${todo}</span>
    </li>`;

    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();

  const todo = addForm.add.value.trim();     //.trim() entfernt unötige Leerzeiche
  
  if(todo.length) {                          //Wenn todo keine Symbole = false
    generateTemplate(todo);
    addForm.reset();
  }  
});


//Delete Todos

list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }

});


// Search

const filterTodos = (term) => {
  Array.from(list.children)
   .filter(todo => {return !todo.textContent.includes(term)})
   // Nur Todos die term nicht (!) beinhalten
   .forEach(todo => {todo.classList.add('filtered')})

   Array.from(list.children)
   .filter(todo => {return todo.textContent.includes(term)})
   .forEach(todo => {todo.classList.remove('filtered')})
}

search.addEventListener('keyup', () => {
  const term = search.value.trim();
  filterTodos(term);
});