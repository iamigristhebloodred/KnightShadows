// script.js
// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    body.classList.toggle('dark-mode');
    
    // Update button icon
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme preference
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
    
    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('open');
        });
        
        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.startsWith('#!')) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update copyright year
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Add these functions to your existing script.js

// Donation page specific functions
function copyUPIId() {
    const upiId = document.getElementById('upiId')?.textContent;
    if (upiId) {
        navigator.clipboard.writeText(upiId).then(() => {
            showNotification('UPI ID copied to clipboard!');
        });
    }
}

function copyCrypto(type) {
    let address = '';
    if (type === 'BTC') {
        address = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
    } else if (type === 'ETH') {
        address = '0x742d35Cc6634C0532925a3b844Bc9eE7A6a2a3b7';
    }
    
    navigator.clipboard.writeText(address).then(() => {
        showNotification(`${type} address copied to clipboard!`);
    });
}

function showNotification(message) {
    // Create notification if it doesn't exist
    let notification = document.getElementById('copyNotification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'copyNotification';
        notification.className = 'copy-notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}