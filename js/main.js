// Main JS file for EatZone Clone

document.addEventListener('DOMContentLoaded', () => {
    console.log('EatZone Clone Loaded');

    // --- 1. Cart Interaction (Detail Page) ---
    const addButtons = document.querySelectorAll('.add-btn');
    addButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentText = this.textContent.trim();
            if (currentText === 'ADD') {
                this.textContent = 'ADDED';
                this.classList.remove('btn-outline-danger', 'bg-white');
                this.classList.add('btn-danger', 'text-white');
                showToast('Item added to cart!');
            } else {
                this.textContent = 'ADD';
                this.classList.add('btn-outline-danger', 'bg-white');
                this.classList.remove('btn-danger', 'text-white');
                showToast('Item removed from cart!');
            }
        });
    });

    // --- 2. Global Navigation Links (Login/Signup/etc) ---
    const navLinks = document.querySelectorAll('.nav-link, .btn-outline-secondary, .card-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Allow navigation if href is a real page (contains .html)
            if (href && href.includes('.html')) {
                return;
            }

            if (href === '#' || !href) {
                e.preventDefault();
                const text = link.textContent.trim();
                showToast(`${text} feature coming soon!`);
            }
        });
    });

    // --- 3. Search Bar Interaction ---
    const searchInputs = document.querySelectorAll('input[placeholder*="Search"]');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = input.value;
                if (query) {
                    window.location.href = 'listing.html'; // Mock search redirect
                }
            }
        });
    });

    // --- 4. Category Cards (Home Page) to Listing ---
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = 'listing.html';
        });
    });

    // --- 5. Detail Page Tabs ---
    const tabs = document.querySelectorAll('.nav-tabs .nav-link');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            // Add to clicked
            tab.classList.add('active');

            // Show toast for demo purposes as we don't have real content sections for all
            if (tab.textContent.trim() !== 'Order Online') {
                showToast(`Showing ${tab.textContent.trim()} section...`);
            }
        });
    });

    // --- Helper: Toast Notification ---
    function showToast(message) {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'fixed-top start-50 translate-middle-x mt-4 bg-dark text-white px-4 py-2 rounded-3 shadow';
        toast.style.zIndex = '1050';
        toast.style.transition = 'opacity 0.5s ease';
        toast.textContent = message;

        document.body.appendChild(toast);

        // Remove after 2 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, 2000);
    }

    // --- Helper: Mock Modal ---
    function showModal(title) {
        showToast(`Opening ${title} modal... (Mock)`);
    }
});
