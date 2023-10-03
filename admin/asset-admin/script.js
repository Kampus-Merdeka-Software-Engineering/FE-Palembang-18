document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-sidebar");
    const sidebar = document.querySelector(".sidebar");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        toggleButton.classList.toggle("active"); // Menambahkan class "active" ke tombol

        // Jika sidebar aktif, ganti teks tombol menjadi "Close Sidebar"
        if (sidebar.classList.contains("active")) {
            toggleButton.innerHTML = "&times; Close Sidebar"; // Tambahkan symbol X
        } else {
            toggleButton.innerHTML = "&#9776; Toggle Sidebar"; // Tambahkan symbol hamburger
        }
    });
});
