


// NAVBAR başlangıç
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Header yüklendikten sonra menü toggle bağla
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("navigasyon-link");

    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  })
  .catch(err => console.error("Header yüklenemedi:", err));
// NAVBAR bitiş
// FOOTER yükle
fetch("footer.html")
  .then(response => response.text())
  .then(data =>{
    document.getElementById("footer").innerHTML = data;
  })
  .catch(err => console.error("Footer yüklenemedi:", err));

    // DOKTORLAR SLIDER BASLANGIC
// Slider elemanlarını seç
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0; // Slider başlangıç indeksi
const visibleCardsDefault = 3; // Desktop'ta gösterilecek kart sayısı
let cardWidth = 0; // Kart genişliği + gap
let visibleCards = visibleCardsDefault;

// Kart genişliğini hesaplayan fonksiyon
function updateCardWidth() {
  const card = slider.querySelector('.card');
  const gap = parseInt(getComputedStyle(slider).gap) || 0; // Slider gap değerini al
  cardWidth = card.offsetWidth + gap;
}

// Gösterilecek kart sayısını pencereye göre ayarla
function updateVisibleCards() {
  if(window.innerWidth <= 700){
    visibleCards = 1;
  } else if(window.innerWidth <= 1000){
    visibleCards = 2;
  } else {
    visibleCards = visibleCardsDefault;
  }
}

// Slider pozisyonunu güncelle
function updateSliderPosition() {
  slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Next buton tıklama
nextBtn.addEventListener('click', () => {
  const totalCards = slider.children.length;
  if(index < totalCards - visibleCards){
    index++;
    updateSliderPosition();
  }
});

// Prev buton tıklama
prevBtn.addEventListener('click', () => {
  if(index > 0){
    index--;
    updateSliderPosition();
  }
});

// Pencere boyutu değiştiğinde kart genişliğini ve görünür kart sayısını güncelle
window.addEventListener('resize', () => {
  updateVisibleCards();
  updateCardWidth();
  updateSliderPosition();
});

// İlk yüklemede çalıştır
updateVisibleCards();
updateCardWidth();
updateSliderPosition();


// DOKTORLAR SLIDER BİTİŞ

//Back to Up başlangıç <-
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
//Back to Up Bitiş <-

 
