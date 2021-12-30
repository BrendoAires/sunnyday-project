const linkMenu = document.querySelector("#menu");
linkMenu.addEventListener('click', ()=>{
	const element = document.getElementById("menu-drop");
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block'; 
    }
})

