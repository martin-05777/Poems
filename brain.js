const toggleMenu = () => {
    const menu = document.getElementById("nav-menu");
    
    if (menu) {
        menu.classList.toggle("show");
    } else {
        console.error("Could not find the element with id 'nav-menu'");
    }
};