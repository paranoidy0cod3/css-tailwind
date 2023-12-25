const mobMenu = document.querySelector('.top-icons :nth-child(2)')
const topLinks =document.querySelector('.top-links');
mobMenu.addEventListener('click', ()=> {
    topLinks.classList.toggle('hidden')
    console.log(topLinks.className);
})

const editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");