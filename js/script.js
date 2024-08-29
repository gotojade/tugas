// untuk awal masuk nama
let name = prompt ("Hai, dengan siapa ini?","");
document.getElementById("nametamu").innerText=name


// Untuk tabel dan isian
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Tabel input
    // input data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // tabel hasil
    // untuk waktu
    const currentTime = new Date().toLocaleString();

    // hasil inputan
    document.getElementById('currentTime').textContent = `Current time : ${currentTime}`;
    document.getElementById('outputName').textContent = `Nama : ${name}`;
    document.getElementById('outputemail').textContent = `Email : ${email}`;
    document.getElementById('outputphone').textContent = `Telepon/HP : ${phone}`;
    document.getElementById('outputMessage').textContent = `Pesan : ${message}`;
});

// untuk banner slide
let indexSlide=1;
showBanner(1);

function nextSlide(n) {

}

function showBanner(indexBanner){
    let listImage=document.getElementsByClassName('banner banner');
    let index = 0;
    while (index < listImage) {
        listImage [index].style.display='none';
        index++;

    }

    listImage[indexBanner=-1].style.display='block'
    console.log(listImage);
}