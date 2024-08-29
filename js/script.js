// untuk awal masuk nama
let name = prompt ("Hai, dengan siapa ini?","");
document.getElementById("nametamu").innerText=name


// Untuk tabel dan isian
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Tabel input
    // input data
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    // tabel hasil
    // untuk waktu
    const currentTime = new Date().toLocaleString();

    // hasil inputan
    document.getElementById('currentTime').textContent = `Current time: ${currentTime}`;
    document.getElementById('outputName').textContent = `Nama: ${name}`;
    document.getElementById('outputDob').textContent = `Tanggal Lahir: ${dob}`;
    document.getElementById('outputGender').textContent = `Jenis Kelamin: ${gender}`;
    document.getElementById('outputMessage').textContent = `Pesan: ${message}`;
});

// untuk banner slide

