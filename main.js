const add = document.getElementById('add');
const print = document.getElementById('print')
const notess = document.getElementById('notes')


const getnotes = JSON.parse(localStorage.getItem('notes'))

if(getnotes) {
    getnotes.forEach(note => addNote(note))
}

add.addEventListener('click', ()=> addNote());

function addNote(text){
    const noteEl = document.createElement('div');
    noteEl.classList.add('note');
    noteEl.innerHTML=`
    <button class="delete" id="delete"><i class="fas fa-trash-alt"></i></button>
    <textarea spellcheck="false"></textarea>
    `
    const textArea = noteEl.querySelector("textarea");
    if(text){
        textArea.value = text;
    }
    console.log( textArea.value)

    const deleteTool = noteEl.querySelector(".delete")
    deleteTool.addEventListener('click', () =>{
        noteEl.remove();
        updateLS();
    })

    textArea.addEventListener('input', e =>{
        textArea.value = e.target.value;
        updateLS();
    })

    

    notess.appendChild(noteEl);
}



 function updateLS() {
     const notesText = document.querySelectorAll('textarea')

     const notes = []

     notesText.forEach(note => notes.push(note.value))

     localStorage.setItem('notes', JSON.stringify(notes))
 }

 print.addEventListener('click', ()=>{
     const navbar = document.getElementById('navbar')
     navbar.style.display = 'none';
    const deleteBtn = document.querySelectorAll('#delete')
    deleteBtn.forEach(del => {
        del.style.display='none';
    })


     window.print();
     window.location.reload();
 })




