// DOM Elements
const toolsGrid = document.querySelector('.tools-grid');
const tabs = document.querySelectorAll('.tab');
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Current active category
let activeCategory = 'all';

// Initialize the page
function init() {
    renderTools(toolsData);
    setupEventListeners();
}

// Render tools to the grid
function renderTools(tools) {
    showLoading();
    
    setTimeout(() => {
        toolsGrid.innerHTML = '';
        
        const visitWebsiteText = translations[currentLang]['visit_website'];
        const categoryTranslations = {
            'code-generation': translations[currentLang]['code_generation'],
            'code-explanation': translations[currentLang]['code_explanation'],
            'code-refactoring': translations[currentLang]['code_refactoring'],
            'testing': translations[currentLang]['testing_debugging'],
            'documentation': translations[currentLang]['documentation'],
            'learning': translations[currentLang]['learning_assistance'],
            'design': translations[currentLang]['design_assistance'],
            'collaboration': translations[currentLang]['collaboration_tools']
        };
        
        tools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            
            // 确定截图URL
            let screenshotUrl = tool.screenshot || '';
            let screenshotHtml = '';
            
            if (screenshotUrl) {
                screenshotHtml = `
                    <div class="tool-screenshot-container">
                        <img 
                            src="${screenshotUrl}" 
                            alt="${tool.name}" 
                            class="tool-screenshot" 
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                        >
                        <div class="placeholder-screenshot" style="display:none;">${tool.name}</div>
                        <div class="screenshot-overlay"></div>
                    </div>
                `;
            } else {
                screenshotHtml = `
                    <div class="tool-screenshot-container">
                        <div class="placeholder-screenshot">${tool.name}</div>
                        <div class="screenshot-overlay"></div>
                    </div>
                `;
            }
            
            // 获取分类名称的翻译
            const categoryName = categoryTranslations[tool.category] || tool.category;
            
            toolCard.innerHTML = `
                <div class="tool-header">
                    <h3 class="tool-name">${tool.name}</h3>
                </div>
                ${screenshotHtml}
                <div class="tool-card-content">
                    <p class="tool-description">${tool.description}</p>
                    <div class="tool-footer">
                        <span class="tool-category-tag">${categoryName}</span>
                        <a href="${tool.url}" class="tool-link" target="_blank">
                            ${visitWebsiteText} <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            `;
            toolsGrid.appendChild(toolCard);
        });
        
        setupLazyLoading();
        hideLoading();
    }, 300);
}

// Filter tools by category
function filterToolsByCategory(category) {
    if (category === 'all') {
        return toolsData;
    } else {
        return toolsData.filter(tool => tool.category === category);
    }
}

// Filter tools by search query
function filterToolsBySearch(query) {
    return toolsData.filter(tool => 
        tool.name.toLowerCase().includes(query.toLowerCase()) || 
        tool.description.toLowerCase().includes(query.toLowerCase())
    );
}

// Set up event listeners
function setupEventListeners() {
    // Category tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active category
            activeCategory = tab.dataset.category;
            
            // Filter and render tools
            const filteredTools = filterToolsByCategory(activeCategory);
            renderTools(filteredTools);
        });
    });
    
    // Search functionality
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Theme toggle
    themeToggleBtn.addEventListener('click', toggleTheme);
}

// Handle search
function handleSearch() {
    const query = searchInput.value.trim();
    if (query) {
        const searchResults = filterToolsBySearch(query);
        renderTools(searchResults);
        
        // Reset active tab
        tabs.forEach(tab => tab.classList.remove('active'));
        tabs[0].classList.add('active');
        activeCategory = 'all';
    } else {
        // If search is empty, show all or current category
        const filteredTools = filterToolsByCategory(activeCategory);
        renderTools(filteredTools);
    }
}

// Toggle theme (light/dark)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const icon = themeToggleBtn.querySelector('i');
    
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Check for saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggleBtn.querySelector('i').classList.remove('fa-moon');
        themeToggleBtn.querySelector('i').classList.add('fa-sun');
    }
    
    // Initialize the page
    init();
});

function showLoading() {
    document.getElementById('loading').style.display = 'flex';
    toolsGrid.style.display = 'none';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
    toolsGrid.style.display = 'grid';
}

// 添加图片懒加载功能
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imgObserver.observe(img);
        });
    } else {
        // 回退方案：立即加载所有图片
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
        });
    }
}