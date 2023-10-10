const noResiInput = document.getElementById("no_resi");
      const cariButton = document.getElementById("cariButton");
      const resetButton = document.getElementById("resetButton")
      const statusOrder = document.getElementById("statusOrder");
      const noResi = document.getElementById("noResi");
      const senderAddress = document.getElementById("senderAddress");
      const receiptName = document.getElementById("receiptName");
      const receiptAddress = document.getElementById("receiptAddress");
      const estimatedTimeOfArrival = document.getElementById("estimatedTimeOfArrival");
      const hasilCari = document.getElementById("hasilCari");
    
      cariButton.addEventListener("click", async () => {
        const no_resi = noResiInput.value.trim();
        if (no_resi === "") {
          alert("Silakan masukkan nomor resi.");
          return;
        }
    
        try {
          const response = await fetch(
            `https://gleaming-tuna-ring.cyclic.app/api/order/${no_resi}`
          );
          const data = await response.json();
    
          if (!data || !data.data || !data.data.status) {
            hasilCari.innerHTML = "<p>Order tidak ditemukan.</p>";
            return;
          }
    
          const orderData = data.data;
          const status = orderData.status;
          const resi = orderData.no_resi;
          const senderAddr = orderData.senderaddress;
          const receipt = orderData.receiptName;
          const receiptAddr = orderData.receiptaddress;
          const estimatedArrival = orderData.estimatedTimeOfArrival;
    
          // Menampilkan data order
          statusOrder.textContent = status;
          noResi.textContent = resi;
          senderAddress.textContent = senderAddr;
          receiptName.textContent = receipt;
          receiptAddress.textContent = receiptAddr;
          estimatedTimeOfArrival.textContent = estimatedArrival;
          hasilCari.style.display = "block";
        } catch (error) {
          console.error("Terjadi kesalahan:", error);
          alert("Terjadi kesalahan saat mengambil data order.");
        }
      });

;

 

resetButton.addEventListener("click", () => {
    // Mengosongkan input pencarian
    noResiInput.value = "";

    // Mengosongkan hasil pencarian
    statusOrder.textContent = "";
    noResi.textContent = "";
    senderAddress.textContent = "";
    receiptName.textContent = "";
    receiptAddress.textContent = "";
    estimatedTimeOfArrival.textContent = "";

    // Sembunyikan kotak hasil pencarian
    hasilCari.style.display = "none";
});