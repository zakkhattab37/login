// Product Catalog Data
const PRODUCTS = [
    {
        id: 1,
        title: "Aura Minimalist Smartwatch",
        category: "electronics",
        price: 199.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        reviewsCount: 142,
        description: "A premium smartwatch featuring a sleek glass bezel, active health tracking, always-on AMOLED display, and a 7-day battery life. Designed for seamless connectivity and style.",
        sizes: ["One Size"]
    },
    {
        id: 2,
        title: "Horizon ANC Wireless Headphones",
        category: "electronics",
        price: 279.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        reviewsCount: 96,
        description: "Immerse yourself in high-fidelity sound. Features industry-leading Active Noise Cancellation (ANC), spatial audio support, ultra-soft memory foam earcups, and up to 40 hours of playback.",
        sizes: ["Standard"]
    },
    {
        id: 3,
        title: "Voyager Leather Tech Backpack",
        category: "accessories",
        price: 129.99,
        originalPrice: 159.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        reviewsCount: 88,
        description: "Handcrafted from top-grain water-resistant leather. Features a padded 16-inch laptop compartment, integrated USB charging port, hidden anti-theft pockets, and ergonomic shoulder straps.",
        sizes: ["Medium", "Large"]
    },
    {
        id: 4,
        title: "Apex Tech Fleece Zip Hoodie",
        category: "apparel",
        price: 89.99,
        originalPrice: 109.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        reviewsCount: 210,
        description: "Engineered with breathable double-sided spacer fleece fabric. Delivers lightweight warmth without bulk, tailored fit, zippered hand pockets, and reflection striping for night visibility.",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 5,
        title: "Zenith Knit Running Sneakers",
        category: "apparel",
        price: 145.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
        rating: 4.6,
        reviewsCount: 320,
        description: "Run further with our responsive foam cushioning and ultra-breathable mesh knit upper. Provides exceptional shock absorption, dynamic arch support, and durable traction control.",
        sizes: ["8", "9", "10", "11", "12"]
    },
    {
        id: 6,
        title: "Aero Matte Carbon Card Wallet",
        category: "accessories",
        price: 49.99,
        originalPrice: 65.00,
        image: "https://images.unsplash.com/photo-1627124112126-7d4ad2e67500?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        reviewsCount: 114,
        description: "An RFID-blocking minimalist wallet crafted from aerospace-grade carbon fiber and titanium. Safely stores up to 12 cards and cash with a heavy-duty elastic band and cash strap.",
        sizes: ["One Size"]
    },
    {
        id: 7,
        title: "Lumina Cylindrical Smart Speaker",
        category: "electronics",
        price: 119.99,
        originalPrice: 139.99,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        reviewsCount: 153,
        description: "A 360-degree omnidirectional smart speaker packing rich bass and voice-controlled smart assistant integration. Syncs with smart home devices and displays ambient RGB lighting.",
        sizes: ["Standard"]
    },
    {
        id: 8,
        title: "Horizon Classic Acetate Sunglasses",
        category: "accessories",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80",
        rating: 4.4,
        reviewsCount: 65,
        description: "Vintage-inspired square frames handcrafted from premium tortoise acetate. Fitted with 100% UVA/UVB protective polarized dark lenses and reinforced metallic hinge pins.",
        sizes: ["One Size"]
    }
];

// App State
let cart = [];
let currentCategory = "all";
let searchQuery = "";

// DOM Elements - Navigation & Cart Drawer
const headerEl = document.querySelector('header');
const productsGridEl = document.getElementById('products-grid');
const categoryFilterBtns = document.querySelectorAll('.filter-btn');
const navLinkEls = document.querySelectorAll('.nav-links a');
const searchInputEl = document.getElementById('search-input');
const heroShopBtn = document.getElementById('hero-shop-btn');

// Cart Elements
const cartBtn = document.getElementById('cart-btn');
const cartDrawer = document.getElementById('cart-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartBadge = document.getElementById('cart-badge');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Details Modal Elements
const detailModalOverlay = document.getElementById('detail-modal-overlay');
const closeDetailModalBtn = document.getElementById('close-detail-modal');
const detailsGridContent = document.getElementById('details-grid-content');

// Checkout Modal Elements
const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
const closeCheckoutModalBtn = document.getElementById('close-checkout-modal');
const checkoutFormContainer = document.getElementById('checkout-form-container');
const checkoutSuccessContainer = document.getElementById('checkout-success-container');
const checkoutForm = document.getElementById('checkout-form');
const submitOrderBtn = document.getElementById('submit-order-btn');
const orderIdDisplay = document.getElementById('order-id-display');
const successDoneBtn = document.getElementById('success-done-btn');

// User Login Modal Elements
const loginModalOverlay = document.getElementById('login-modal-overlay');
const profileBtn = document.getElementById('profile-btn');
const closeLoginModalBtn = document.getElementById('close-login-modal');
const loginContainer = document.getElementById('login-container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const loginUserForm = document.getElementById('login-form');
const registerUserForm = document.getElementById('register-form');

// --- EVENT LISTENERS & INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    setupEventListeners();
});

function setupEventListeners() {
    // Header shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            headerEl.classList.add('scrolled');
        } else {
            headerEl.classList.remove('scrolled');
        }
    });

    // Category Filtering - Nav Links
    navLinkEls.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinkEls.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const category = link.getAttribute('data-nav');
            // Align the category filters section active button
            categoryFilterBtns.forEach(btn => {
                if (btn.getAttribute('data-category') === category) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            currentCategory = category;
            renderProducts();
            
            // Scroll smoothly to products list
            document.querySelector('.filter-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Category Filtering - Product Page Category Buttons
    categoryFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            // Align header nav links
            navLinkEls.forEach(l => {
                if (l.getAttribute('data-nav') === category) {
                    l.classList.add('active');
                } else {
                    l.classList.remove('active');
                }
            });
            
            currentCategory = category;
            renderProducts();
        });
    });

    // Hero Shop Button
    if (heroShopBtn) {
        heroShopBtn.addEventListener('click', () => {
            document.querySelector('.filter-section').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Search Input
    searchInputEl.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderProducts();
    });

    // Cart Drawer Toggle Open/Close
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    drawerOverlay.addEventListener('click', closeCart);

    // Profile Modal Toggle Open/Close
    profileBtn.addEventListener('click', openLoginModal);
    closeLoginModalBtn.addEventListener('click', closeLoginModal);
    loginModalOverlay.addEventListener('click', (e) => {
        if (e.target === loginModalOverlay) closeLoginModal();
    });

    // Slide Login/Signup state switch (User's original functionality)
    registerBtn.addEventListener('click', () => {
        loginContainer.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
        loginContainer.classList.remove('active');
    });

    // Handle Forms Submission (Dummy responses)
    loginUserForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Logged in successfully!');
        closeLoginModal();
    });
    
    registerUserForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Account registered successfully!');
        closeLoginModal();
    });

    // Product Details Modal Close
    closeDetailModalBtn.addEventListener('click', closeDetailModal);
    detailModalOverlay.addEventListener('click', (e) => {
        if (e.target === detailModalOverlay) closeDetailModal();
    });

    // Checkout Flow Modal Toggles
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty.');
            return;
        }
        closeCart();
        openCheckout();
    });
    
    closeCheckoutModalBtn.addEventListener('click', closeCheckout);
    checkoutModalOverlay.addEventListener('click', (e) => {
        if (e.target === checkoutModalOverlay) closeCheckout();
    });

    // Checkout Submit
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    
    // Success Button click
    successDoneBtn.addEventListener('click', () => {
        closeCheckout();
    });
}

// --- DYNAMIC RENDERING FUNCTIONS ---

// Render Products Grid
function renderProducts() {
    productsGridEl.innerHTML = '';
    
    const filteredProducts = PRODUCTS.filter(prod => {
        const matchesCategory = currentCategory === 'all' || prod.category === currentCategory;
        const matchesSearch = prod.title.toLowerCase().includes(searchQuery) || 
                              prod.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        productsGridEl.innerHTML = `
            <div class="empty-products" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-gray);">
                <i class="bx bx-package" style="font-size: 50px; margin-bottom: 10px; display: block;"></i>
                <p>No products match your search or filter criteria.</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(prod => {
        const hasDiscount = prod.originalPrice && prod.originalPrice > prod.price;
        const discountBadge = hasDiscount 
            ? `<div class="product-badge">SALE</div>` 
            : '';
        const crossedPrice = hasDiscount 
            ? `<span>$${prod.originalPrice.toFixed(2)}</span>` 
            : '';

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            ${discountBadge}
            <div class="product-wishlist" onclick="toggleWishlist(event, this)">
                <i class="bx bx-heart"></i>
            </div>
            <div class="product-img-container">
                <img src="${prod.image}" alt="${prod.title}">
                <div class="product-quickview" onclick="triggerQuickView(${prod.id})">Quick View</div>
            </div>
            <div class="product-details">
                <span class="product-category">${prod.category}</span>
                <h3 class="product-title" onclick="triggerQuickView(${prod.id})" style="cursor:pointer;">${prod.title}</h3>
                <div class="product-rating">
                    <i class="bx bxs-star"></i>
                    <span>${prod.rating} (${prod.reviewsCount} reviews)</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">$${prod.price.toFixed(2)} ${crossedPrice}</div>
                    <button class="add-to-cart-btn" onclick="quickAddToCart(event, ${prod.id})" title="Add to Cart">
                        <i class="bx bx-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productsGridEl.appendChild(card);
    });
}

// Render Cart Drawer
function renderCart() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-view">
                <i class="bx bx-shopping-bag"></i>
                <p>Your cart is empty</p>
                <button class="btn" onclick="closeCart(); document.querySelector('.filter-section').scrollIntoView({behavior: 'smooth'});" style="padding: 10px 20px; font-size: 14px; margin-top: 10px; width: auto;">Start Shopping</button>
            </div>
        `;
        return;
    }

    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        const sizeText = item.size ? `<span class="cart-item-meta">Size: ${item.size}</span>` : '';

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.product.image}" alt="${item.product.title}">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.product.title}</h4>
                ${sizeText}
                <div class="cart-item-price">$${item.product.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-actions">
                <button class="remove-item-btn" onclick="removeFromCart(${item.product.id}, '${item.size}')">
                    <i class="bx bx-trash"></i>
                </button>
                <div class="quantity-controller">
                    <button onclick="changeCartQuantity(${item.product.id}, '${item.size}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeCartQuantity(${item.product.id}, '${item.size}', 1)">+</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(itemEl);
    });
}

// Update Cart Badge and Math Total
function updateCartUI() {
    renderCart();
    
    // Total count
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartBadge.textContent = totalItems;
    
    // Subtotal math
    const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    cartTotalEl.textContent = `$${subtotal.toFixed(2)}`;
}

// --- CART CONTROL FLOW ACTIONS ---

// Quick Add to Cart from Grid
function quickAddToCart(event, productId) {
    event.stopPropagation();
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    // Default size is the first available size
    const defaultSize = product.sizes[0];
    addToCart(product, defaultSize, 1);
    
    // Trigger tiny button check animation feedback
    const btn = event.currentTarget;
    const origHTML = btn.innerHTML;
    btn.innerHTML = `<i class="bx bx-check" style="color: #fff;"></i>`;
    btn.style.backgroundColor = '#10b981';
    btn.style.borderColor = '#10b981';
    
    setTimeout(() => {
        btn.innerHTML = origHTML;
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
    }, 1500);
}

// Core Add to Cart logic
function addToCart(product, size, qty) {
    const existingIndex = cart.findIndex(item => item.product.id === product.id && item.size === size);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += qty;
    } else {
        cart.push({
            product: product,
            size: size,
            quantity: qty
        });
    }
    
    updateCartUI();
}

// Remove item from Cart
function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.product.id === productId && item.size === size));
    updateCartUI();
}

// Increment or Decrement quantity
function changeCartQuantity(productId, size, change) {
    const item = cart.find(item => item.product.id === productId && item.size === size);
    if (!item) return;
    
    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId, size);
    } else {
        updateCartUI();
    }
}

// Cart Open/Close
function openCart() {
    cartDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// --- PRODUCT DETAILS MODAL ---

function triggerQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    const hasDiscount = product.originalPrice && product.originalPrice > product.price;
    const crossedPrice = hasDiscount 
        ? `<span>$${product.originalPrice.toFixed(2)}</span>` 
        : '';
        
    // Render Size Options
    let sizeOptionsHTML = '';
    if (product.sizes && product.sizes.length > 0) {
        sizeOptionsHTML = `
            <div class="details-option-title">Select Size:</div>
            <div class="details-sizes">
                ${product.sizes.map((size, idx) => `
                    <div class="size-option ${idx === 0 ? 'active' : ''}" onclick="selectSizeOption(this)" data-size="${size}">${size}</div>
                `).join('')}
            </div>
        `;
    }

    detailsGridContent.innerHTML = `
        <!-- Left Panel: Image -->
        <div class="details-image-panel">
            <img src="${product.image}" alt="${product.title}">
        </div>
        
        <!-- Right Panel: Info -->
        <div class="details-info-panel">
            <span class="details-badge">${product.category}</span>
            <h1 class="details-title">${product.title}</h1>
            <div class="details-rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star-half"></i>
                <span>${product.rating} (${product.reviewsCount} verified purchases)</span>
            </div>
            <div class="details-price">$${product.price.toFixed(2)} ${crossedPrice}</div>
            
            <p class="details-description">${product.description}</p>
            
            ${sizeOptionsHTML}
            
            <!-- Quantity and Add to Cart -->
            <div class="details-actions-row">
                <div class="details-qty">
                    <button onclick="changeDetailsQty(-1)">-</button>
                    <span id="detail-qty-val">1</span>
                    <button onclick="changeDetailsQty(1)">+</button>
                </div>
                <button class="btn details-add-btn" onclick="addSelectedToCart(${product.id})">
                    <i class="bx bx-shopping-bag"></i> Add To Cart
                </button>
            </div>
        </div>
    `;

    detailModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
    detailModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Detail qty handlers
function changeDetailsQty(val) {
    const qtySpan = document.getElementById('detail-qty-val');
    let qty = parseInt(qtySpan.textContent);
    qty += val;
    if (qty < 1) qty = 1;
    qtySpan.textContent = qty;
}

// Select size in Modal
function selectSizeOption(el) {
    const parent = el.parentElement;
    parent.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('active'));
    el.classList.add('active');
}

// Add selection to cart
function addSelectedToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    const qty = parseInt(document.getElementById('detail-qty-val').textContent);
    
    let size = null;
    const selectedSizeEl = document.querySelector('.size-option.active');
    if (selectedSizeEl) {
        size = selectedSizeEl.getAttribute('data-size');
    }
    
    addToCart(product, size, qty);
    closeDetailModal();
    openCart();
}

// --- USER LOGIN MODAL ---

function openLoginModal() {
    loginModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    loginModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// --- CHECKOUT PROCESS MODAL ---

function openCheckout() {
    checkoutModalOverlay.classList.add('active');
    checkoutFormContainer.style.display = 'block';
    checkoutSuccessContainer.style.display = 'none';
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    checkoutModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Handle Order Complete
function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    // Generate simulated order ID
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `#ZS-${randomNum}`;
    
    orderIdDisplay.textContent = orderId;
    
    // Clear Cart
    cart = [];
    updateCartUI();
    
    // Switch views
    checkoutFormContainer.style.display = 'none';
    checkoutSuccessContainer.style.display = 'block';
}

// --- OTHER UTILITY FUNCTIONS ---

// Toggle Wishlist heart badge simulation
function toggleWishlist(e, el) {
    e.stopPropagation();
    el.classList.toggle('active');
    const icon = el.querySelector('i');
    
    if (el.classList.contains('active')) {
        icon.className = 'bx bxs-heart';
        icon.style.color = 'var(--danger-color)';
    } else {
        icon.className = 'bx bx-heart';
        icon.style.color = '';
    }
}