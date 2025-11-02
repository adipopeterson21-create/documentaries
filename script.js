// SAFE VERSION - Kenyan History Website
console.log('Script started loading...');

// Safe initialization with error handling
function safeInitialize() {
    try {
        console.log('Starting safe initialization...');
        
        // Hide loading spinner immediately
        const loadingSpinner = document.getElementById('loadingSpinner');
        if (loadingSpinner) {
            loadingSpinner.style.display = 'none';
            console.log('Loading spinner hidden');
        }
        
        // Initialize components one by one with error handling
        safeInitNavigation();
        safeInitWhatsApp();
        safeInitBackToTop();
        safeInitSearch();
        safeInitQuickNav();
        safeInitPresidentTabs();
        safeInitNewsletter();
        safeInitAnimations();
        
        console.log('All components initialized successfully');
        
    } catch (error) {
        console.error('Initialization error:', error);
        // Ensure loading spinner is hidden even if there's an error
        const loadingSpinner = document.getElementById('loadingSpinner');
        if (loadingSpinner) {
            loadingSpinner.style.display = 'none';
        }
    }
}

// Safe navigation initialization
function safeInitNavigation() {
    try {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Header scroll effect
        const header = document.querySelector('.header');
        if (header) {
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
        
        console.log('Navigation initialized');
    } catch (error) {
        console.error('Navigation init error:', error);
    }
}

// Safe WhatsApp initialization
function safeInitWhatsApp() {
    try {
        const whatsappBtn = document.getElementById('whatsappBtn');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', function() {
                console.log('WhatsApp clicked');
            });
        }
        console.log('WhatsApp initialized');
    } catch (error) {
        console.error('WhatsApp init error:', error);
    }
}

// Safe back to top initialization
function safeInitBackToTop() {
    try {
        const backToTopBtn = document.getElementById('backToTop');
        
        if (backToTopBtn) {
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });

            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        console.log('Back to top initialized');
    } catch (error) {
        console.error('Back to top init error:', error);
    }
}

// Safe search initialization
function safeInitSearch() {
    try {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const searchResults = document.getElementById('searchResults');

        if (searchInput && searchBtn) {
            searchBtn.addEventListener('click', function() {
                const query = searchInput.value.trim();
                if (query && searchResults) {
                    searchResults.innerHTML = `<div class="search-result-item">Search for: "${query}"</div>`;
                    searchResults.classList.add('active');
                }
            });
        }
        console.log('Search initialized');
    } catch (error) {
        console.error('Search init error:', error);
    }
}

// Safe quick nav initialization
function safeInitQuickNav() {
    try {
        const navButtons = document.querySelectorAll('.nav-btn');
        
        navButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                navButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const section = this.getAttribute('data-section');
                const targetSection = document.getElementById(`${section}-section`);
                
                if (targetSection) {
                    // Hide all sections
                    document.querySelectorAll('.president-article').forEach(article => {
                        article.classList.remove('active');
                    });
                    // Show target section
                    targetSection.classList.add('active');
                }
            });
        });
        console.log('Quick nav initialized');
    } catch (error) {
        console.error('Quick nav init error:', error);
    }
}

// Safe president tabs initialization
function safeInitPresidentTabs() {
    try {
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('tab-btn')) {
                const tabButton = e.target;
                const tabName = tabButton.getAttribute('data-tab');
                const presidentArticle = tabButton.closest('.president-article');
                
                if (presidentArticle) {
                    // Update active tab button
                    presidentArticle.querySelectorAll('.tab-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    tabButton.classList.add('active');

                    // Update active tab content
                    presidentArticle.querySelectorAll('.tab-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    
                    const targetContent = presidentArticle.querySelector(`#${tabName}`);
                    if (targetContent) {
                        targetContent.classList.add('active');
                    }
                }
            }
        });
        console.log('President tabs initialized');
    } catch (error) {
        console.error('President tabs init error:', error);
    }
}

// Safe newsletter initialization
function safeInitNewsletter() {
    try {
        const newsletterForms = document.querySelectorAll('.newsletter-form');
        
        newsletterForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                if (emailInput) {
                    const email = emailInput.value;
                    if (email.includes('@')) {
                        this.reset();
                        safeShowNotification('Thank you for subscribing!', 'success');
                    } else {
                        safeShowNotification('Please enter a valid email', 'error');
                    }
                }
            });
        });
        console.log('Newsletter initialized');
    } catch (error) {
        console.error('Newsletter init error:', error);
    }
}

// Safe animations initialization
function safeInitAnimations() {
    try {
        // Simple counter animation
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target')) || 0;
            let current = 0;
            const increment = target / 50;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 40);
                } else {
                    counter.textContent = target;
                }
            };
            updateCounter();
        });

        // Explore button
        const exploreBtn = document.getElementById('exploreBtn');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', function() {
                const mainContent = document.querySelector('.main-content');
                if (mainContent) {
                    mainContent.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
        console.log('Animations initialized');
    } catch (error) {
        console.error('Animations init error:', error);
    }
}

// Safe notification function
function safeShowNotification(message, type = 'info') {
    try {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
        `;

        document.body.appendChild(notification);

        // Close button
        notification.querySelector('.notification-close').addEventListener('click', function() {
            notification.remove();
        });

        // Auto remove
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    } catch (error) {
        console.error('Notification error:', error);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', safeInitialize);
} else {
    safeInitialize();
}

console.log('Script loaded successfully');