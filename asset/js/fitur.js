 

document.addEventListener("DOMContentLoaded", function () {
    const featureHeaders = document.querySelectorAll(".feature-header");
    const featureContents = document.querySelectorAll(".feature-content");

    featureHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const contentId = this.getAttribute("data-toggle");
            const content = document.getElementById(contentId);

            // Jika kotak fitur sudah terbuka, maka tutup saat diklik lagi
            if (this.classList.contains("open")) {
                content.style.display = "none";
                this.classList.remove("open");
            } else {
                // Tutup semua fitur yang terbuka terlebih dahulu
                featureContents.forEach(feature => {
                    feature.style.display = "none";
                    feature.previousElementSibling.classList.remove("open");
                });

                // Buka kotak fitur yang diklik
                content.style.display = "block";
                this.classList.add("open");
            }
        });
    });
});


 
    // Ambil semua tombol dalam elemen fitur
    const featureButtons = document.querySelectorAll('.feature button[data-action="redirect"]');

    // Tambahkan event listener untuk setiap tombol
    featureButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Dapatkan URL target dari atribut data-target pada elemen header yang sesuai
            const target = this.closest('.feature').querySelector('.feature-header').getAttribute('data-target');
            
            // Arahkan pengguna ke URL target
            window.location.href = target;
        });
    });
 
