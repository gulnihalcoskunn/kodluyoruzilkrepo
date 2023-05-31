
const taskDOM=document.querySelector('#task');
const listDOM= document.querySelector('#list');
const allLiDOM=document.querySelectorAll('li');

function removeElement(erase){
    erase.remove();
    eraseStorage(erase);
}

function markElements(){
    this.classList.toggle("checked");
}

const closeButton=`<button onclick="removeElement(parentNode)" style="padding: 13px;" type="button" class="close" data-dismiss="toast" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>`

allLiDOM.forEach (e => {e.addEventListener("click", markElements); e.innerHTML += `${closeButton}` } )

function newElement(){

    if (taskDOM.value  && taskDOM.value.trim()) {
        // listeye li elemani ekleme
        let liDOM = document.createElement("li")
       
        // olusturdugumuz li elemanini listeye(ul) nin icine ekliyoruz
        listDOM.append(liDOM)
       
        // toast bildirimi
        $(".success").toast('show')
       
        // li'nin icine input'dan gelen degerleri ekledik
        liDOM.innerHTML = `${taskDOM.value}${closeButton}`

        // li elemani click oldugu zaman isaretlenicek dedik
        liDOM.addEventListener("click", markElements)  
        taskDOM.value = ""; 
        addStorage();
    }
    else {
        // toast bildirimi
        $(".error").toast('show')     
    }
      // li elemani eklendikten sonra input'un ici bos olsun
      
}
let toDoList;

function startConf(){
     toDoList=JSON.parse(localStorage.getItem('toDoList'));
    if(!toDoList){
        toDoList=[];
    }
    localStorage.setItem("toDoList",JSON.stringify(toDoList))
}

function addStorage(){
     toDoList=JSON.parse(localStorage.getItem("toDoList"));
    toDoList.push(`${taskDOM.value}`)
    localStorage.setItem("toDoList",JSON.stringify(toDoList))
    localDOM();
}

function eraseStorage(erase){
     toDoList=JSON.parse(localStorage.getItem("toDoList"))
    if ( toDoList.includes( erase.firstChild.textContent ) == true ) {
        let indexbul = toDoList.findIndex ( e =>
            e == erase.firstChild.textContent )

        toDoList.splice(indexbul,1)    

        localStorage.setItem("toDoList",JSON.stringify(toDoList))
    }
}
function localDOM() {
    // toDoList ls'sini array'a çevirip olarak çağırdık
     toDoList = JSON.parse(localStorage.getItem("toDoList"))

    // toDoList'de kayıtlı her eleman ve index numarasını bul 
    toDoList.forEach( (e, index) => {
        let liDOM = document.createElement("li")
        listDOM.append(liDOM)
       // liDOM.innerHTML = toDoList[index]
        liDOM.innerHTML += closeButton
        listDOM.addEventListener("click", markElements)
        
        // li elemani click oldugu zaman isaretlenicek dedik
        liDOM.addEventListener("click", markElements)
    } )
}
startConf()
localDOM()




