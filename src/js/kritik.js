  // Fungsi untuk mengirim kritik/saran ke WhatsApp
  function sendToWhatsApp(event) {
    event.preventDefault(); // Mencegah form dikirim dengan cara default

    // Ambil nilai input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const suggestion = document.getElementById("suggestion").value;

    // Nomor WhatsApp Admin (gunakan format internasional tanpa "+" atau "0")
    const adminNumber = "6285338190915"; // Ganti dengan nomor admin Anda

    // Format pesan WhatsApp
    const message = `Halo Admin,%0A%0ASaya ingin memberikan kritik/saran:%0A%0A*Nama*: ${name}%0A*Email*: ${email}%0A*Saran/Kritik*: ${suggestion}%0A%0ATerima kasih.`;

    // Buat tautan WhatsApp
    const whatsappURL = `https://wa.me/${adminNumber}?text=${message}`;

    // Arahkan ke WhatsApp
    window.open(whatsappURL, "_blank");
  }

