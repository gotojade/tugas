// // ini javascript untuk form dan isi
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    const currentTime = new Date().toString();

    document.getElementById('currentTime').textContent = `Current time: ${currentTime}`;
    document.getElementById('outputName').textContent = `Nama: ${name}`;
    document.getElementById('outputDob').textContent = `Tanggal Lahir: ${dob}`;
    document.getElementById('outputGender').textContent = `Jenis Kelamin: ${gender}`;
    document.getElementById('outputMessage').textContent = `Pesan: ${message}`;
});