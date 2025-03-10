document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const saveProfileBtn = document.getElementById("save-profile");
    const usernameInput = document.getElementById("username");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
    const savedUsername = localStorage.getItem("username");

    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    if (savedUsername) {
        usernameInput.value = savedUsername;
    }

    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            localStorage.setItem("theme", "light-theme");
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark-theme");
        }
    });

    saveProfileBtn.addEventListener("click", () => {
        const username = usernameInput.value;
        localStorage.setItem("username", username);
        alert("Perfil salvo!");
    });
});
