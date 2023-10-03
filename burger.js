const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");
const bars = document.querySelectorAll(".bar");
const dropdowns = document.querySelectorAll(".menu-item.dropdown");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");

    // Toggle animasi untuk membuat silang
    bars[0].classList.toggle("cross1");
    bars[1].classList.toggle("cross2");
    bars[2].classList.toggle("cross3");

    // Tutup semua submenu saat hamburger menu aktif
    dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("show-submenu");
    });
});

// Tambahkan event listener untuk setiap item dropdown
dropdowns.forEach((dropdown) => {
    const submenu = dropdown.querySelector(".submenu");
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation(); // Hindari penutupan otomatis saat item dropdown diklik
        submenu.classList.toggle("show-submenu");
    });
});

// Tutup submenu saat area di luar submenu diklik
document.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
        const submenu = dropdown.querySelector(".submenu");
        if (submenu.classList.contains("show-submenu")) {
            submenu.classList.remove("show-submenu");
        }
    });
});
