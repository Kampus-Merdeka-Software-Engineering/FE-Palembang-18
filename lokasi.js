const kecamatanInput = document.getElementById("kecamatan");
const cariButton = document.getElementById("cariButton");
const resetButton = document.getElementById("resetButton");
const alamatOrder = document.getElementById("alamatOrder");
const hasilCari = document.getElementById("hasilCari");

cariButton.addEventListener("click", async () => {
  const kecamatan = kecamatanInput.value.trim();
  if (kecamatan === "") {
    alert("Silakan masukkan kecamatan.");
    return;
  }

  try {
    const response = await fetch(
      `https://gleaming-tuna-ring.cyclic.app/api/office/${kecamatan}`
    );
    const data = await response.json();

    if (!data || !data.data || !data.data.alamat) {
      hasilCari.innerHTML = "<p>kecamatan tidak ditemukan.</p>";
      return;
    }

    const alamat = data.data.alamat;

    // Menampilkan alamat order
    alamatOrder.textContent = alamat;
    hasilCari.style.display = "block";
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    alert("Terjadi kesalahan saat mengambil data  .");
  }
});

resetButton.addEventListener("click", () => {
    // Mengosongkan input pencarian dan hasil pencarian
    kecamatanInput.value = "";
    alamatOrder.textContent = "";
    hasilCari.style.display = "none"; // Sembunyikan kotak hasil pencarian
  });