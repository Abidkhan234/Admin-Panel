const sideBar = document.querySelector(".sidebar");

const logo = document.getElementById("logo");

const subMenu = document.querySelectorAll(".sub-menu");

const svg = document.querySelectorAll(".downArrow");

const toggleSidebar = () => {
    sideBar.classList.toggle("close");
    closeAllSubMenu();
}


const toggleDropDown = (button) => {

    if (!button.nextElementSibling.classList.contains("show")) {
        closeAllSubMenu();
    }

    let svg = button.querySelector(".downArrow");

    button.nextElementSibling.classList.toggle("show");
    svg.classList.toggle("rotate")


    if (sideBar.classList.contains("close")) {
        sideBar.classList.toggle("close");
    }
}


const closeAllSubMenu = () => {
    subMenu.forEach((v) => {
        if (v.classList.contains("show")) {
            v.classList.remove("show");
            svg.forEach(element => {
                element.classList.remove("rotate");
            });
        }
    })
}