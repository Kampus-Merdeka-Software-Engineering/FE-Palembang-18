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


const orderForm = document.getElementById("orderForm");
const alertMessage = document.getElementById("alertMessage");

orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
        no_resi: document.getElementById("no_resi").value,
        fee: parseInt(document.getElementById("fee").value) || null,
        senderName: document.getElementById("senderName").value,
        status: document.getElementById("status").value,
        senderPhone: document.getElementById("senderPhone").value,
        senderaddress: document.getElementById("senderaddress").value,
        receiptName: document.getElementById("receiptName").value,
        receiptPhone: document.getElementById("receiptPhone").value,
        receiptaddress: document.getElementById("receiptaddress").value,
        estimatedTimeOfDeparture: document.getElementById("estimatedTimeOfDeparture").value,
        estimatedTimeOfArrival: document.getElementById("estimatedTimeOfArrival").value || null,
        adminName: document.getElementById("adminName").value,
    };

    // Kirim data ke API menggunakan metode POST
    fetch("https://gleaming-tuna-ring.cyclic.app/api/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Data berhasil ditambahkan:", data);
            // Tampilkan pesan sukses
            alertMessage.innerText = "Data berhasil ditambahkan!";
            alertMessage.style.backgroundColor = "#4CAF50";
            alertMessage.style.display = "block";

            // Redirect atau tampilkan pesan sukses
            setTimeout(function () {
                window.location.href = "index.html";
            }, 2000); // Arahkan kembali setelah 2 detik
        })
        .catch((error) => {
            console.error("Gagal menambahkan data:", error);
            // Tampilkan pesan error
        });
});
