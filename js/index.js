document.addEventListener("DOMContentLoaded", function () {
  // Mengambil berbagai input dari html
    const beratBadanInput = document.getElementById("beratBadan");
    const tinggiBadanInput = document.getElementById("tinggiBadan");
    const usiaInput = document.getElementById("usia");
    const hitungButton = document.querySelector(".green-button");
    const resetButton = document.querySelector(".red-button");
    const jenisKelamin = document.getElementById("jenisKelamin");
  
  // Deklarasi variabel hasil dan informasi yang akan ditampilkan di page utama
    const resultCalculation = document.getElementById("result-calculation");
    const infoResult = document.getElementById("info-result");
  
  // Menghitung BMI
    hitungButton.addEventListener("click", function (event) {
      event.preventDefault(); 
  
      // Mengubah input ke dalam bentuk float
      const beratBadan = parseFloat(beratBadanInput.value);
      const tinggiBadan = parseFloat(tinggiBadanInput.value) / 100; 
  
      // Validasi apabila input tidak valid (tidak berisikan angka, termasuk jika isi adalah kosong)
      if (isNaN(beratBadan) || isNaN(tinggiBadan) || tinggiBadan <= 0) {
        alert("Harap masukkan data berat dan tinggi badan yang valid.");
        return;
      }
  
      // Deklarasi rumus dan hasil
      const bmi = (beratBadan / (tinggiBadan * tinggiBadan)).toFixed(1);
      resultCalculation.textContent = bmi;
  
      // Status dan info yang ingin di tampilkan di halaman utama
      let status = "";
      let info = "";
  
      // Cek kondigi bmi untuk ditampilkan ke halaman utama
      if (bmi < 18.5) {
        status = "Kekurangan berat badan";
        info = "Disarankan untuk meningkatkan asupan kalori dan berkonsultasi dengan ahli gizi.";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal (ideal)";
        info = "Selamat! Anda memiliki berat badan yang ideal. Pertahankan pola hidup sehat.";
      } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Kelebihan berat badan";
        info = "Disarankan untuk menjaga pola makan dan rutin berolahraga.";
      } else {
        status = "Kegemukan (Obesitas)";
        info = "Disarankan untuk segera berkonsultasi dengan dokter untuk mengurangi risiko kesehatan.";
      }
  
      infoResult.textContent = `Anda memiliki berat badan ${status}`;
  
      document.getElementById("hasil-bmi").textContent = `Hasil BMI diantara ${bmi}`;
      document.getElementById("kategori-bmi").textContent = `Anda berada dalam kategori ${status}`;
      document.getElementById("anjuran-bmi").textContent = `Jika BMI Anda berada di dalam kategori ini maka Anda dianjurkan ${info}`;
    });
  
    // Reset button yang menghilangkan input jika diclik
    resetButton.addEventListener("click", function (event) {
      event.preventDefault(); 
    
      // Reset semua input
      beratBadanInput.value = "";
      tinggiBadanInput.value = "";
      usiaInput.value = "";
      jenisKelamin.value = ""; 
    
      // Reset hasil dan informasi
      resultCalculation.textContent = "0";
      infoResult.textContent = "Anda memiliki berat badan #";
    
      document.getElementById("hasil-bmi").textContent = "";
      document.getElementById("kategori-bmi").textContent = "";
      document.getElementById("anjuran-bmi").textContent = "";
    });
    
  });
  