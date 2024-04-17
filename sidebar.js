let sidebar = document.querySelector(".sidebar")
let hidesidebar = document.querySelector(".hide-sidebar")
let showsidebar = document.querySelector(".show-sidebar")

let icons = document.querySelectorAll(".icon i")

showsidebar.addEventListener("click", function () {
    if (sidebar.classList.contains("hide")) {
        sidebar.classList.remove("hide")
    }
})