let sidebar = document.querySelector(".sidebar")
let hidesidebar = document.querySelector(".hide-sidebar")
let showsidebar = document.querySelector(".show-sidebar")

let icons = document.querySelectorAll(".icon i")

showsidebar.addEventListener("click", function () {
    if (sidebar.classList.contains("hide")) {
        sidebar.classList.remove("hide");
        showsidebar.classList.add("d-none")
        hidesidebar.classList.remove("d-none")
    }
});
hidesidebar.addEventListener("click", function () {
    if (!sidebar.classList.contains("hide")) {
        sidebar.classList.add("hide")
        hidesidebar.classList.add("d-none")
        showsidebar.classList.remove("d-none")
    }
})