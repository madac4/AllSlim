// Burger Menu
const header = document.querySelector('.header');
if (header != undefined) {
    const burger = document.querySelector('.burger_menu');
    const navMenu = document.querySelector('.header__nav');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('lock');
    });
}
// Burger Menu

// Scroll To Top
const scrollToTop = document.querySelector('.scroll__top');
if (scrollToTop != undefined) {

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        if (scrollPos > 500) {
            scrollToTop.classList.add('active');
            scrollToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            });
        } else {
            scrollToTop.classList.remove('active');

        };
    });
}
// Scroll To Top

// Country Picker
const choices = document.querySelector('.wrapper__form');
if (choices != undefined) {
    const countryPicker = () => {
        const element = document.querySelector('.form__countrypicker');
        const choices = new Choices(element, {
            searchEnabled: false,
        });
    };
    countryPicker();
}
// Country Picker

//Cart Country Picker
const cartChoices = document.querySelector('.cart-form');
if (cartChoices != undefined) {
    const countryPicker = () => {
        const element = document.querySelector('.form__countrypicker');
        const choices = new Choices(element, {
            searchEnabled: false,
            classNames: {
                containerInner: 'picker__container',
            },
        });
    };
    countryPicker();
}
//Cart Country Picker

// Responsive Languages
window.addEventListener('resize', () => {
    function adaptive_header(w, h) {
        var navMenu = document.querySelector('.header__nav');
        var headerLang = document.querySelector('.lang');
        var headerRight = document.querySelector('.header__right');
        var contain = headerLang.classList;
        var result = contain.contains('done');
        if (w < 480) {
            if (!result) {
                headerLang.classList.add('done')
                navMenu.insertBefore(headerLang, navMenu.lastChild)
            }
        } else {
            if (result) {
                headerLang.classList.remove('done')
                headerRight.insertBefore(headerLang, headerRight.firstChild)
            }
        }
    }

    function adaptive_function() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        adaptive_header(w, h);
    }
    adaptive_function();
});
// Responsive Languages

// Main Slider
const mainSlide = document.querySelector('.swiper');
if (mainSlide != undefined) {
    var mySwiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        pagination: {
            el: '.swiper-dots',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },

    });
};

// Main Slider

// Feedback Slider
const feedbackSlide = document.querySelector('.feedback__swiper');

if (feedbackSlide != undefined) {
    var swiper = new Swiper('.feedback__swiper', {
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-dots',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },

    });
};
// Feedback Slider

// Recent Slider
const recentSlider = document.querySelector('.recent-post__swiper');

if (recentSlider != undefined) {
    var recentswiper = new Swiper('.recent-post__swiper', {
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-dots',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            768: {
                slidesPerView: 2,

            },
        }
    });
}
// Recent Slider

// Cart
if (header != undefined) {
    const addToCart = document.querySelectorAll('.add_to_cart');
    const cartProductList = document.querySelector('.cart-content__list');
    const cart = document.querySelector('.cart');
    const cartQuantity = document.querySelector('.cart__quantity');
    const fullPrice = document.querySelector('.cart-content__price');
    const cartImg = document.querySelector('.cart__img');
    let price = 0;

    document.addEventListener('scroll', () => {
        let topOffset = window.scrollY;
        if (topOffset > 150) {
            cart.classList.remove('active');
        }
    });

    // RANDOM ID TO PRODUCT
    const randomId = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };
    // RANDOM ID TO PRODUCT

    // Str to Int(pentru calcul)
    const priceWithoutSpaces = (str) => {
        return str.replace(/\s/g, '');
    };
    // Str to Int(pentru calcul)

    // Space between price numbers
    const normalPrice = (str) => {
        return String(str).replace(/(\d)(?=(\d\d\d)+(^\d|$))/g, '$1 ')
    };
    // Space between price numbers

    // Adunarea Pretului
    const plusFullPrice = (currentPrice) => {
        return price += currentPrice;
    };
    // Adunarea Pretului

    // Scaderea Pretului
    const minusFullPrice = (currentPrice) => {
        return price -= currentPrice;
    };
    // Scaderea Pretului

    // SHOW FINAL PRICE
    const printFullPrice = () => {
        fullPrice.textContent = `${normalPrice(price)} lei`
    };
    // SHOW FINAL PRICE

    // SHOW QUANTITY
    const printQuantity = () => {
        let length = cartProductList.querySelector('.simplebar-content').children.length;
        cartQuantity.textContent = length;
        if (length <= 0) {
            cart.classList.remove('active')
        }
    };


    // SHOW QUANTITY
    cartImg.addEventListener('click', () => {
        let length = cartQuantity.textContent;
        if (length > 0) {
            cart.classList.toggle('active')
        }
    });
    // DELETE PRODUCT
    const deleteProducts = (productParent) => {
        let id = productParent.querySelector('.cart-product').dataset.id;
        document.querySelector(`.product[data-id="${id}"]`).querySelector('.add_to_cart').disabled = false;
        let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price').textContent));

        minusFullPrice(currentPrice);
        printFullPrice();
        productParent.remove();
        printQuantity();
    };
    // DELETE PRODUCT



    const generateCartProduct = (img, title, price, id) => {
        return `
    
        <li class="cart-content__item">
            <article class="cart-content__product cart-product" data-id="${id}">
                <a href="#" class="cart-content__link">
                    <img src="${img}" alt="tea" class="cart-product__img">
                </a>
                <div class="cart-product__text">
                    <h6 class="cart-product__title">${title}</h6>
                    <span class="cart-product__price">${normalPrice(price)} lei</span>
                </div>
                <button class="cart-product__delete" aria-label="Delete">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z" fill="#6C6D71"/>
                    </svg>
                </button>
            </article>
        </li>
    
    `;
    }

    addToCart.forEach(el => {
        el.closest('.product').setAttribute('data-id', randomId());
        el.addEventListener('click', (e) => {
            let self = e.currentTarget;
            let parent = self.closest('.product');
            let id = parent.dataset.id;
            let img = parent.querySelector('.product__img').getAttribute('src');
            let name = parent.querySelector('.product__name').textContent;
            let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.product__price').textContent));
            alertify.success(name + ' adaugat in cos');

            plusFullPrice(priceNumber);
            printFullPrice();
            cartProductList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, name, priceNumber, id))
            printQuantity();
            self.disabled = true;
        });
    });

    cartProductList.addEventListener('click', (e) => {
        if (e.target.classList.contains('cart-product__delete')) {
            deleteProducts(e.target.closest('.cart-content__item'));
        };
    });
}
// Cart

const map = document.querySelector('#map');

if (map != undefined) {
    function initMap() {
        // The location of Uluru
        const uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
    };
};



const steps = document.querySelectorAll('.step__point');
const btnNext = document.querySelectorAll('.prodcut__checkout-submit');
const btnBack = document.querySelector('.product__checkout-submit--back');
let allContent = document.querySelectorAll('.cart-content__section');
let allTitles = document.querySelectorAll('.cart-content__title');

let activeStep = 1;

window.addEventListener("DOMContentLoaded", () => {
    if (steps[0].getAttribute('data-number') === allContent[1].getAttribute('data-number')) {
        allContent[0].style.display = "block";
    } else {
        allContent[1].style.display = "none";
        allContent[2].style.display = "none";

    };
    if (steps[0].getAttribute('data-number') === allTitles[1].getAttribute('data-number')) {
        allTitles[0].style.display = "block";
    } else {
        allTitles[1].style.display = "none";
        allTitles[2].style.display = "none";

    };
});

for (let step of steps) {
    steps.forEach((e) => {
        e.addEventListener('click', () => {
            const active = document.querySelector(".active");
            if (active) {
                active.classList.remove("active");
            }
            e.classList.add('active');
        })
    });

    step.addEventListener('click', () => {
        for (let content of allContent) {
            if (content.getAttribute('data-number') === step.getAttribute('data-number')) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }

        }
        for (let title of allTitles) {
            if (title.getAttribute('data-number') === step.getAttribute('data-number')) {
                title.style.display = "block";
            } else {
                title.style.display = "none";
            }
        }
    });
};