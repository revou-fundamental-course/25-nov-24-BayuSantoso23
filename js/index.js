document.addEventListener("DOMContentLoaded", function () {
    const beratBadanInput = document.getElementById("beratBadan");
    const tinggiBadanInput = document.getElementById("tinggiBadan");
    const usiaInput = document.getElementById("usia");
    const hitungButton = document.querySelector(".green-button");
    const resetButton = document.querySelector(".red-button");
  
    const resultCalculation = document.getElementById("result-calculation");
    const infoResult = document.getElementById("info-result");
  
    hitungButton.addEventListener("click", function (event) {
      event.preventDefault(); 
  
      const beratBadan = parseFloat(beratBadanInput.value);
      const tinggiBadan = parseFloat(tinggiBadanInput.value) / 100; 
  
      if (isNaN(beratBadan) || isNaN(tinggiBadan) || tinggiBadan <= 0) {
        alert("Harap masukkan data berat dan tinggi badan yang valid.");
        return;
      }
  
      const bmi = (beratBadan / (tinggiBadan * tinggiBadan)).toFixed(1);
      resultCalculation.textContent = bmi;
  
      let status = "";
      let info = "";
  
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
  
    resetButton.addEventListener("click", function (event) {
      event.preventDefault(); 

      beratBadanInput.value = "";
      tinggiBadanInput.value = "";
      usiaInput.value = "";
      resultCalculation.textContent = "0";
      infoResult.textContent = "Anda memiliki berat badan #";
      document.getElementById("hasil-bmi").textContent = "Hasil BMI diantara #";
      document.getElementById("kategori-bmi").textContent = "Anda berada dalam kategori #";
      document.getElementById("anjuran-bmi").textContent = "Jika BMI Anda berada di dalam kategori ini maka Anda dianjurkan #";
    });
  });
  