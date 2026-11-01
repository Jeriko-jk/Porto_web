function tandaiMenuAktif() {
    var halaman = window.location.pathname.split("/").pop();
    if (halaman === "") {
        halaman = "index.html";
    }

    var menu = document.querySelectorAll(".navbar .nav-link");
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].getAttribute("href") === halaman) {
            menu[i].classList.add("active");
            menu[i].setAttribute("aria-current", "page");
        }
    }
}

function kirimLogin() {
    var pengguna = document.getElementById("pengguna").value.trim();
    var sandi = document.getElementById("sandi").value;
    var pesan = document.getElementById("pesan-login");

    if (pengguna === "") {
        pesan.className = "pesan alert alert-danger mt-3 mb-0 py-2";
        pesan.textContent = "Nama pengguna wajib diisi.";
        return false;
    }
    if (sandi.length < 6) {
        pesan.className = "pesan alert alert-danger mt-3 mb-0 py-2";
        pesan.textContent = "Kata sandi minimal 6 karakter.";
        return false;
    }

    pesan.className = "pesan alert alert-success mt-3 mb-0 py-2";
    pesan.textContent = "Halo " + pengguna + ", login berhasil (simulasi tampilan).";
    document.getElementById("form-login").reset();
    return false;
}

tandaiMenuAktif();


// Jeriko
// =========================================
// JERI PORTFOLIO
// DARK MODE + LIGHT MODE
// SCROLL REVEAL ANIMATION
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // -------------------------------------
    // DARK / LIGHT MODE
    // -------------------------------------

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const themeLabel = document.getElementById("themeLabel");

    function setTheme(theme) {

        document.body.classList.toggle(
            "light-mode",
            theme === "light"
        );

        if (themeIcon && themeLabel) {
            if (theme === "light") {
                themeIcon.textContent = "🌙";
                themeLabel.textContent = "Dark Mode";
            } else {
                themeIcon.textContent = "☀️";
                themeLabel.textContent = "Light Mode";
            }
        }

        localStorage.setItem("portfolio-theme", theme);
    }

    const savedTheme = localStorage.getItem("portfolio-theme");

    setTheme(savedTheme || "dark");

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {

            const isLight = document.body.classList.contains("light-mode");

            setTheme(isLight ? "dark" : "light");

        });
    }


    // -------------------------------------
    // SCROLL REVEAL ANIMATION
    // -------------------------------------

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("show");
        });

    }

});