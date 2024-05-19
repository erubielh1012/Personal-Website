const toggleBtn = document.querySelector('.toggle-btn');
const sideNav = document.querySelector('.side-nav');

toggleBtn.addEventListener('click', () => {
    sideNav.classList.toggle('hidden');
});


// This is for the toggle bar up in the window.
function toggleUp() {
    var element = document.getElementById("toggle-content");
    element.classList.toggle("hide");
}