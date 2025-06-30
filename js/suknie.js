let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

const images = [
  {
    src: "./img/suknie/FRW_3656.jpg",
  },
  {
    src: "./img/suknie/FRW_3699.jpg",
  },
  {
    src: "./img/suknie/FRW_3703.jpg",
  },
  {
    src: "./img/suknie/FRW_3751.jpg",
  },
  {
    src: "./img/suknie/FRW_3799.jpg",
  },
  {
    src: "./img/suknie/FRW_3811.jpg",
  },
  {
    src: "./img/suknie/FRW_3842.jpg",
  },
  {
    src: "./img/suknie/FRW_3902.jpg",
  },
  {
    src: "./img/suknie/FRW_3917.jpg",
  },
  {
    src: "./img/suknie/FRW_3918.jpg",
  },
  {
    src: "./img/suknie/FRW_3961.jpg",
  },
  {
    src: "./img/suknie/FRW_4007.jpg",
  },
];

// Inicjalizacja kropek slidera
function initDots() {
  const dotsContainer = document.getElementById("sliderDots");
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (i === 0) dot.classList.add("active");
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  }
}

// Inicjalizacja miniaturek
function initThumbnails() {
  const thumbnailsContainer = document.getElementById("thumbnails");
  images.forEach((image, index) => {
    const thumbnail = document.createElement("div");
    thumbnail.className = "thumbnail";
    if (index === 0) thumbnail.classList.add("active");
    thumbnail.onclick = () => goToSlide(index);

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.title;

    thumbnail.appendChild(img);
    thumbnailsContainer.appendChild(thumbnail);
  });
}

// Zmiana slajdu
function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  updateSlider();
}

// Przejście do konkretnego slajdu
function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateSlider();
}

// Aktualizacja slidera
function updateSlider() {
  const sliderWrapper = document.getElementById("sliderWrapper");
  const dots = document.querySelectorAll(".dot");
  const thumbnails = document.querySelectorAll(".thumbnail");

  sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Aktualizacja kropek
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });

  // Aktualizacja miniaturek
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.classList.toggle("active", index === currentSlide);
  });
}

// Otwieranie modala z powiększonym zdjęciem
function openModal(imageIndex) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = images[imageIndex].src;
  modalImage.alt = images[imageIndex].title;
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Zamykanie modala
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Automatyczne przesuwanie slidera
function autoSlide() {
  changeSlide(1);
}

// Obsługa klawiatury
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    changeSlide(-1);
  } else if (e.key === "ArrowRight") {
    changeSlide(1);
  } else if (e.key === "Escape") {
    closeModal();
  }
});

// Obsługa dotyku dla urządzeń mobilnych
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", function (e) {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", function (e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      changeSlide(1); // Przesunięcie w lewo
    } else {
      changeSlide(-1); // Przesunięcie w prawo
    }
  }
}

// Inicjalizacja galerii
document.addEventListener("DOMContentLoaded", function () {
  initDots();
  initThumbnails();

  // Automatyczne przesuwanie co 5 sekund
  setInterval(autoSlide, 5000);
});
