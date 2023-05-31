const taskDOM=document.querySelector('#task');
const listDOM= document.querySelector('#list');
const allLiDOM=document.querySelector('li');

function removeElement(erase){
    erase.remove();
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
    }
    else {
        // toast bildirimi
        $(".error").toast('show')

        // input'un ici bos olsun
        taskDOM.value = "" 
    }
      // li elemani eklendikten sonra input'un ici bos olsun
      taskDOM.value = "" 
    
}
