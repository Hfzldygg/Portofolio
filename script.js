// Fungsi untuk mendapatkan greeting berdasarkan waktu
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
        return "Selamat Pagi!";
    } else if (hour >= 12 && hour < 15) {
        return "Selamat Siang!";
    } else if (hour >= 15 && hour < 18) {
        return "Selamat Sore!";
    } else {
        return "Selamat Malam!";
    }
}

// Fungsi untuk mendapatkan tanggal saat ini
function getCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString('id-ID', options);
}

// Menampilkan greeting dan tanggal di halaman
function displayGreetingAndDate() {
    const greetingElement = document.getElementById('greeting');
    const dateElement = document.getElementById('current-date');

    if (greetingElement && dateElement) {
        greetingElement.innerText = getGreeting();
        dateElement.innerText = `Hari ini: ${getCurrentDate()}`;
    }
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', displayGreetingAndDate);
