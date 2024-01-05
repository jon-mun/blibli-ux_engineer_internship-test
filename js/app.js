// Collapse Footer
const collapseButton = document.querySelector(".collapse-toggle");
collapseButton.addEventListener("click", function toggleCollapse() {
  const footerDetail = document.querySelector(".footer-content");
  footerDetail.classList.toggle("collapsed");

  //   change text of button
  if (!footerDetail.classList.contains("collapsed")) {
    collapseButton.textContent = "Collapse All ^";
  } else {
    collapseButton.textContent = "Show All v";
  }
});

// Scroll To Top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

toTop.addEventListener("click", function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Product Carousel
// Generate Products
const productContainer = document.querySelector(".container.products");
const productTemplate = document.querySelector("#product-template");

const numberOfProducts = 10;
for (let i = 0; i < numberOfProducts; i++) {
  const product = productTemplate.cloneNode(true);
  productContainer.appendChild(product);
}

// Carousel
const carousel = productContainer;
const carouselNext = document.querySelector(".carousel-next");
const carouselPrev = document.querySelector(".carousel-prev");

const scrollUnit = 30; // 30px

carouselNext.addEventListener("click", function nextItem() {
  carousel.scrollBy({
    top: 0,
    left: scrollUnit,
    behavior: "smooth",
  });

  toggleButtonVisibility();
});

carouselPrev.addEventListener("click", function prevItem() {
  carousel.scrollBy({
    top: 0,
    left: -scrollUnit,
    behavior: "smooth",
  });

  toggleButtonVisibility();
});

carousel.addEventListener("scroll", toggleButtonVisibility);

function toggleButtonVisibility() {
  const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
  if (mobileMediaQuery.matches) {
    carouselNext.style.display = "none";
    carouselPrev.style.display = "none";
    return;
  }
  carouselNext.style.display =
    carousel.scrollLeft + carousel.clientWidth + 1 < carousel.scrollWidth
      ? "block"
      : "none";

  carouselPrev.style.display = carousel.scrollLeft > 0 ? "block" : "none";
}
