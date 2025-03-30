// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    setLanguage(currentLang);
    
    // Set active language button
    document.getElementById(`lang-${currentLang}`).classList.add('active');
    document.getElementById(`lang-${currentLang === 'en' ? 'zh' : 'en'}`).classList.remove('active');
    
    // Add event listeners to language buttons
    document.getElementById('lang-en').addEventListener('click', () => {
        setLanguage('en');
    });
    
    document.getElementById('lang-zh').addEventListener('click', () => {
        setLanguage('zh');
    });
});

// Set language
function setLanguage(lang) {
    // Update current language
    currentLang = lang;
    
    // Save language preference
    localStorage.setItem('language', lang);
    
    // Update active button
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-zh').classList.toggle('active', lang === 'zh');
    
    // Update all text elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update all placeholders with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
    
    // Update tool cards if they exist
    updateToolCards();
}

// Update tool cards with translated "Visit Website" text
function updateToolCards() {
    const visitWebsiteText = translations[currentLang]['visit_website'];
    document.querySelectorAll('.tool-link').forEach(link => {
        link.textContent = visitWebsiteText;
    });
} 