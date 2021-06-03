let mainBox = document.querySelector('.movie__box__main');
let span = document.querySelector('.movie__box__top__span');

// edit & delete action
mainBox.addEventListener('click',(e)=>{
    let btn = e.target;
    if(btn.className == 'delete'){
        let cnfm = confirm('Do you want to delete this item?');
        if(cnfm){
        let innerDiv = e.target.parentNode.parentNode;
        mainBox.removeChild(innerDiv);
        count();
    }}
    else if(btn.className == 'edit'){
        let edit = e.target.parentNode.querySelector('.movie__box__main__title');    
        let title = prompt('New Movie Title','Please enter new title');
        if(title){
            edit.textContent = title;
        }       
    }
});


let addNew = document.forms['form__bottom'];

// add new element action
addNew.addEventListener('submit',function(e){

    e.preventDefault();
    let value = addNew.querySelector('input[type="text"]').value;
    if(value){
    
    
    
    //creating elements
    let Div = document.createElement('div');
    let innerDiv = document.createElement('div');
    let H4 = document.createElement('h4');
    let icon = document.createElement('i');
    let line = document.createElement('div');
    let nuEdit = document.createElement('span');
    let nuDelete = document.createElement('span');
    
    H4.textContent = value;
    nuDelete.textContent = "Delete";
    nuEdit.textContent = "Edit";

    //adding classes
    Div.classList.add("movie__box__main__div");
    icon.className = "fas fa-compact-disc movie__box__main__icon";
    innerDiv.classList.add("movie__box__main__inner__div");
    H4.classList.add("movie__box__main__title");
    line.classList.add("movie__box__line");
    nuEdit.classList.add("edit", "edt");
    nuDelete.classList.add("delete");
    
    //appendChild
    Div.appendChild(icon);
    Div.appendChild(innerDiv);
    innerDiv.appendChild(H4);
    innerDiv.appendChild(line);
    innerDiv.appendChild(nuEdit);
    innerDiv.appendChild(nuDelete);
    mainBox.appendChild(Div);
    
    addNew.querySelector('input[type="text"]').value = "";
    count();  
}
});

let search = document.forms['search'];

// search action
search.addEventListener('keyup',function(e){
   let word = e.target.value.toLowerCase();  
   let movies = document.getElementsByClassName('movie__box__main__div');
   Array.from(movies).forEach(function(movie){
       let title = movie.querySelector('.movie__box__main__inner__div').textContent;
        if(title.toLowerCase().indexOf(word) != -1){
               movie.style.display="flex"; 
        }
        else {
               movie.style.display="none"; 
        }
   })   

});


// functions
function count(){
    let num = document.querySelectorAll('.movie__box__main__div').length;
        span.textContent = num;
}