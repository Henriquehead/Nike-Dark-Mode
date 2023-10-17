const changeThemeBtn = document.querySelector("#change-theme");

//Toogle dark mode

function toogleDarkMoode() {
    document.body.classList.toggle("dark")
}

//Load dark an light mode
function loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if (darkMode) {
        toogleDarkMoode()
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function() {
    toogleDarkMoode();

    //Save or remove dark mode
    localStorage.removeItem('dark');

    if(document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1)
    }

});