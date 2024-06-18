const CONTAINER_WIDTH = 1040;
const CONTAINER_HEIGHT = 585;

const PRODUCT_DATA = [
  {
    name: "XX99 Mark II",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    category: "Headphones",
    imageSource: "./img/1.png",
  },
  {
    name: "XX99 Mark I",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    category: "Headphones",
    imageSource: "./img/2.png",
  },
  {
    name: "XX59",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    category: "Headphones",
    imageSource: "./img/3.png",
  },
  {
    name: "ZX9",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity—creating new possibilities for more pleasing and practical audio setups.",
    category: "Speaker",
    imageSource: "./img/4.png",
  },
  {
    name: "ZX7",
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    category: "Speaker",
    imageSource: "./img/5.png",
  },
  {
    name: "YX1",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    category: "Wireless Earphones",
    imageSource: "./img/6.png",
  },
];

const STYLE_PROPS = [
  {
    width: 550,
    height: 550,
    left: -550,
    top: (CONTAINER_HEIGHT - 550) / 2,
    opacity: 0,
  },
  {
    width: 300,
    height: 300,
    left: CONTAINER_WIDTH * 0.5 - 150,
    top: (CONTAINER_HEIGHT - 300) / 2,
    opacity: 1,
  },
  {
    width: 180,
    height: 180,
    left: CONTAINER_WIDTH * 0.5 + 155,
    top: (CONTAINER_HEIGHT - 180) / 2,
    opacity: 0.85,
  },
  {
    width: 110,
    height: 110,
    left: CONTAINER_WIDTH * 0.5 + 350,
    top: (CONTAINER_HEIGHT - 110) / 2,
    opacity: 0.7,
  },
  {
    width: 50,
    height: 50,
    left: CONTAINER_WIDTH + 20,
    top: (CONTAINER_HEIGHT - 50) / 2,
    opacity: 0.55,
  },
];

let productImageElements = [];
let currentProductIndex = 0;

function init() {
  // Create elements from data
  for (let i = 0; i < PRODUCT_DATA.length; i++) {
    {
      // For desktop
      let div = document.createElement("div");
      div.classList.add("product-image");
      div.style.backgroundImage = `url("./${PRODUCT_DATA[i].imageSource}")`;
      productImageElements.push(div);
    }
    {
      // For mobile
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = PRODUCT_DATA[i].imageSource;
      div.append(img);
      document.getElementById("product-image-row").append(div);

      let indicatorElement = document.createElement("div");
      indicatorElement.classList.add("indicator");
      document.getElementById("indicator-container").append(indicatorElement);
    }
  }

  document
    .getElementById("desktop-product-image-container")
    .append(...productImageElements);

  // Register event handlers
  document.body.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") showNextProduct();
    if (e.key === "ArrowLeft") showPreviousProduct();
  });
  [...document.getElementsByClassName("next-product-button")].forEach(
    (element) => element.addEventListener("click", showNextProduct)
  );
  [...document.getElementsByClassName("previous-product-button")].forEach(
    (element) => element.addEventListener("click", showPreviousProduct)
  );
}

let renderer = {
  render(textAnimation = false) {
    this._renderProductInfo(textAnimation);
    this._renderProductImages();
    this._updateIndicator();
  },
  _renderProductInfo(textAnimation) {
    if (textAnimation) {
      this._animations
        ._fadeOut()
        .then(() => this._updateProductInfoContent())
        .then(() => this._animations._fadeIn());
    } else {
      this._updateProductInfoContent();
    }
  },
  _animations: {
    _target: document.getElementById("product-info"),
    _fadeOut() {
      return anime({
        targets: this._target,
        opacity: 0,
        translateY: -40,
        duration: 300,
        easing: "easeOutCubic",
      }).finished;
    },
    _fadeIn() {
      return anime({
        targets: this._target,
        opacity: 1,
        translateY: 0,
        duration: 850,
        easing: "easeOutCubic",
      }).finished;
    },
  },
  _updateProductInfoContent() {
    let fields = ["name", "description", "category"];
    let productData = PRODUCT_DATA[currentProductIndex];

    fields.forEach(function (field) {
      let elementId = `product-${field}`;
      let value = productData[field];
      document.getElementById(elementId).textContent = value;
    });
  },
  _renderProductImages() {
    // For desktop
    for (let i = 0; i < productImageElements.length; i++) {
      let element = productImageElements[i];
      let styleIndex = i - currentProductIndex + 1;
      if (styleIndex < 0) {
        styleIndex = 0;
      }
      if (styleIndex > STYLE_PROPS.length - 1) {
        styleIndex = STYLE_PROPS.length - 1;
      }
      let style = STYLE_PROPS[styleIndex];

      element.style.width = `${style.width}px`;
      element.style.height = `${style.height}px`;
      element.style.left = `${style.left}px`;
      element.style.top = `${style.top}px`;
      element.style.filter = `blur(${(styleIndex - 1) * 5}px)`;
      element.style.opacity = style.opacity;
    }

    // For mobile
    document.getElementById("product-image-row").style.left = `${
      -280 * currentProductIndex
    }px`;
  },
  _updateIndicator() {
    let indicatorElements = [...document.getElementsByClassName("indicator")];
    indicatorElements.forEach((e) => (e.dataset.active = "false"));
    indicatorElements[currentProductIndex].dataset.active = "true";
  },
};

function showNextProduct() {
  if (currentProductIndex < productImageElements.length - 1) {
    currentProductIndex++;
    renderer.render(true);
  }
}
function showPreviousProduct() {
  if (currentProductIndex > 0) {
    currentProductIndex--;
    renderer.render(true);
  }
}

(function main() {
  init();
  renderer.render();
})();
