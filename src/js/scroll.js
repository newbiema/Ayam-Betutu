// Menunggu DOM untuk dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Pilih semua link yang memiliki class "scroll-link"
    const scrollLinks = document.querySelectorAll('.scroll-link');
  
    // Menambahkan event listener untuk setiap link
    scrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        // Mencegah aksi default (misalnya lompat langsung ke section)
        e.preventDefault();
  
        // Ambil ID dari href (misalnya #section1)
        const targetId = link.getAttribute('href');
  
        // Temukan elemen tujuan berdasarkan ID
        const targetElement = document.querySelector(targetId);
  
        // Gunakan method scrollTo dengan opsi smooth
        targetElement.scrollIntoView({
          behavior: 'smooth', // Smooth scrolling
          block: 'start',     // Pilihan untuk penempatan scroll
        });
      });
    });
  });