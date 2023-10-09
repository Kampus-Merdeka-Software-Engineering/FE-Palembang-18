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


// function lacak(event){
//     const inputlacak = document.querySelector("#Lacak")
//     const value = inputlacak.value
//     fetch (`${BASE_URL}/`)
// }

function lacak() {
    const nomorResi = document.getElementById("Lacak").value;
    const apiUrl = `https://be-palembang-18-production.up.railway.app/api/order/${nomorResi}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Di sini Anda dapat mengelola data pelacakan yang diterima dari backend
        const hasilPelacakan = document.getElementById("hasilPelacakan");
        hasilPelacakan.innerHTML = `
          <h2>Hasil Pelacakan</h2>
          <p>Nomor Resi: ${no_resi}</p>
          <p>Status: ${status}</p>
          <p>Deskripsi: ${estimatedTimeOfDeparture}</p>
        `;
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
  