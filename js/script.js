const linkMenu = document.querySelector("#menu");
linkMenu.addEventListener('click', ()=>{
	const element = document.getElementById("menu-drop");
    if (element.style.display === 'none') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
})

