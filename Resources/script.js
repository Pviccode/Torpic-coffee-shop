// Toggle the navigation sidebar
const toggleNav = document.querySelector(".toggle-nav");
const sidebarContainer = document.querySelector(".sidebar-container");
const sidebarCloseBtn = document.querySelector("#sidebar-close");

toggleNav.addEventListener("click", function() {
    // sidebarContainer.classList.add("show")
    sidebarContainer.style.display = "block";
})


sidebarCloseBtn.addEventListener("click", function() {
    sidebarContainer.style.display = "none";
});