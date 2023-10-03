// document.addEventListener("DOMContentLoaded", function () {
//     const featureHeaders = document.querySelectorAll(".feature-header");

//     featureHeaders.forEach(header => {
//         header.addEventListener("click", function () {
//             const contentId = this.getAttribute("data-toggle");
//             const content = document.getElementById(contentId);

//             if (content.style.display === "block") {
//                 content.style.display = "none";
//             } else {
//                 content.style.display = "block";
//             }
//         });
//     });
// });





// document.addEventListener("DOMContentLoaded", function () {
//     const featureHeaders = document.querySelectorAll(".feature-header");
//     const featureContents = document.querySelectorAll(".feature-content");

//     featureHeaders.forEach(header => {
//         header.addEventListener("click", function () {
//             const contentId = this.getAttribute("data-toggle");
//             const content = document.getElementById(contentId);

//             // Menutup semua fitur yang terbuka terlebih dahulu
//             featureContents.forEach(feature => {
//                 feature.style.display = "none";
//                 feature.previousElementSibling.classList.remove("open");
//             });

//             // Membuka hanya fitur yang sesuai dengan yang diklik
//             content.style.display = "block";
//             this.classList.add("open");
//         });
//     });
// });


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
