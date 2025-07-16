// Enhanced tool data with detailed information
const detailedToolsData = {
    1: { // GitHub Copilot
        name: "GitHub Copilot",
        description: "AI pair programmer that offers code suggestions directly in your editor",
        url: "https://github.com/features/copilot",
        screenshot: "img/screenshots/github-copilot.png",
        detailedDescription: "GitHub Copilot is an AI-powered code completion tool developed by GitHub in collaboration with OpenAI. It uses machine learning models trained on billions of lines of public code to suggest code completions, entire functions, and even complex algorithms as you type. Copilot integrates seamlessly with popular code editors like VS Code, Neovim, and JetBrains IDEs.",
        benefits: [
            "Accelerates coding speed by up to 55%",
            "Reduces repetitive coding tasks",
            "Helps learn new programming patterns",
            "Supports over 30 programming languages",
            "Contextually aware suggestions"
        ],
        bestFor: "Professional developers, teams working on large codebases, developers learning new languages or frameworks",
        features: [
            "Real-time code suggestions",
            "Multi-language support (Python, JavaScript, TypeScript, Ruby, Go, etc.)",
            "Context-aware completions",
            "Function and class generation",
            "Comment-to-code conversion",
            "IDE integration"
        ],
        supportedLanguages: ["Python", "JavaScript", "TypeScript", "Ruby", "Go", "C#", "C++", "Java", "PHP", "Swift", "Kotlin"],
        integrations: ["VS Code", "Neovim", "JetBrains IDEs", "Visual Studio"],
        pricing: {
            individual: "$10/month",
            business: "$19/user/month",
            enterprise: "Contact for pricing",
            free: "Available for students and open source maintainers"
        },
        pros: [
            "High-quality code suggestions",
            "Excellent IDE integration",
            "Constantly improving AI model",
            "Great for learning new patterns",
            "Strong community support"
        ],
        cons: [
            "Subscription-based pricing",
            "May suggest outdated patterns occasionally",
            "Requires internet connection",
            "Can be overly verbose sometimes"
        ],
        rating: 4.5,
        category: "code-generation"
    },
    2: { // Amazon CodeWhisperer
        name: "Amazon CodeWhisperer",
        description: "AI coding companion that provides code recommendations based on your comments and existing code",
        url: "https://aws.amazon.com/codewhisperer/",
        screenshot: "img/screenshots/codewhisperer.png",
        detailedDescription: "Amazon CodeWhisperer is a machine learning-powered service that helps improve developer productivity by generating code recommendations based on developers' comments in natural language and prior code. It supports multiple programming languages and integrates with popular IDEs to provide real-time suggestions.",
        benefits: [
            "Free tier available",
            "Security scanning included",
            "AWS service integration",
            "Real-time suggestions",
            "Reference tracking"
        ],
        bestFor: "AWS developers, teams using AWS services, developers looking for free AI coding assistance",
        features: [
            "Code generation from comments",
            "Security vulnerability scanning",
            "Reference tracking",
            "Multi-language support",
            "IDE integration",
            "AWS API suggestions"
        ],
        supportedLanguages: ["Python", "Java", "JavaScript", "TypeScript", "C#", "Go", "Rust", "PHP", "Ruby", "Kotlin", "C", "C++", "Shell scripting", "SQL"],
        integrations: ["VS Code", "IntelliJ IDEA", "PyCharm", "WebStorm", "Rider"],
        pricing: {
            individual: "Free for individual use",
            professional: "$19/user/month"
        },
        pros: [
            "Free tier available",
            "Built-in security scanning",
            "Good AWS integration",
            "Reference tracking feature",
            "No usage limits on free tier"
        ],
        cons: [
            "Less mature than competitors",
            "Limited advanced features",
            "Primarily focused on AWS ecosystem"
        ],
        rating: 4.2,
        category: "code-generation"
    },
    48: { // KIRO
        name: "KIRO",
        description: "AI-powered development environment and assistant designed to enhance developer productivity with intelligent code suggestions and automation",
        url: "https://kiro.dev/",
        screenshot: "img/screenshots/kiro.png",
        detailedDescription: "KIRO is an innovative AI-powered development environment that combines intelligent code assistance with advanced automation features. It provides developers with context-aware suggestions, automated workflows, and seamless integration with popular development tools to significantly boost productivity and code quality.",
        benefits: [
            "AI-powered code suggestions and completions",
            "Automated workflow management",
            "Intelligent debugging assistance",
            "Seamless tool integration",
            "Context-aware development environment"
        ],
        bestFor: "Modern developers seeking an AI-enhanced development experience, teams looking to improve productivity, developers working on complex projects",
        features: [
            "Intelligent code completion",
            "Automated code review",
            "Smart debugging tools",
            "Workflow automation",
            "Multi-language support",
            "IDE integration"
        ],
        supportedLanguages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Go", "Rust", "PHP", "Ruby"],
        integrations: ["VS Code", "IntelliJ IDEA", "WebStorm", "PyCharm", "Git", "Docker"],
        pricing: {
            free: "Basic features available",
            pro: "Contact for pricing",
            enterprise: "Custom pricing available"
        },
        pros: [
            "Advanced AI capabilities",
            "Comprehensive development environment",
            "Excellent automation features",
            "Modern user interface",
            "Strong integration support"
        ],
        cons: [
            "Relatively new platform",
            "Learning curve for advanced features",
            "Pricing not publicly available"
        ],
        rating: 4.3,
        category: "code-generation"
    },
    47: { // GitHub
        name: "GitHub",
        description: "The world's leading platform for version control, collaboration, and code hosting with advanced project management features",
        url: "https://github.com",
        screenshot: "img/screenshots/github.png",
        detailedDescription: "GitHub is the world's largest code hosting platform, providing Git-based version control, collaboration tools, and project management features. It serves millions of developers and organizations worldwide, offering everything from simple code repositories to advanced DevOps workflows and enterprise-grade security features.",
        benefits: [
            "Industry-standard version control",
            "Powerful collaboration features",
            "Integrated CI/CD workflows",
            "Comprehensive project management",
            "Large developer community"
        ],
        bestFor: "All developers and teams, open source projects, enterprise development teams, DevOps workflows",
        features: [
            "Git-based version control",
            "Pull requests and code review",
            "GitHub Actions (CI/CD)",
            "Issues and project management",
            "GitHub Pages (static hosting)",
            "Security scanning and alerts",
            "Package registry",
            "GitHub Copilot integration"
        ],
        supportedLanguages: ["All programming languages", "Markdown", "YAML", "JSON", "XML"],
        integrations: ["VS Code", "IntelliJ IDEA", "Slack", "Jira", "Azure", "AWS", "Google Cloud", "Docker"],
        pricing: {
            free: "Public repositories and basic features",
            pro: "$4/user/month",
            team: "$4/user/month",
            enterprise: "$21/user/month"
        },
        pros: [
            "Industry standard platform",
            "Excellent collaboration tools",
            "Strong community support",
            "Comprehensive feature set",
            "Reliable and stable platform",
            "Great integration ecosystem"
        ],
        cons: [
            "Can be overwhelming for beginners",
            "Private repositories require paid plans",
            "Advanced features have learning curve"
        ],
        rating: 4.8,
        category: "collaboration"
    },
    
    // Code Generation Tools
    3: { // Tabnine
        name: "Tabnine",
        description: "AI code completion tool that helps developers write code faster with whole-line and full-function completions",
        url: "https://www.tabnine.com/",
        screenshot: "img/screenshots/tabnine.png",
        detailedDescription: "Tabnine is an AI-powered code completion assistant that predicts and suggests your next lines of code based on context and syntax. It supports over 30 programming languages and integrates with most popular IDEs.",
        benefits: [
            "Whole-line and full-function code completions",
            "Supports 30+ programming languages",
            "Works with popular IDEs",
            "Privacy-focused with local processing option",
            "Team training on your codebase"
        ],
        bestFor: "Developers seeking fast code completion, teams wanting privacy-focused AI assistance, multi-language developers",
        features: [
            "AI-powered code completions",
            "Multi-language support",
            "IDE integrations",
            "Team model training",
            "Local and cloud processing",
            "Code pattern learning"
        ],
        supportedLanguages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "PHP", "Go", "Rust", "Ruby", "Swift", "Kotlin"],
        integrations: ["VS Code", "IntelliJ IDEA", "PyCharm", "WebStorm", "Sublime Text", "Atom", "Vim", "Emacs"],
        pricing: {
            starter: "Free with basic features",
            pro: "$12/user/month",
            enterprise: "Custom pricing"
        },
        pros: [
            "Fast and accurate completions",
            "Strong privacy options",
            "Wide language support",
            "Good IDE integration",
            "Team customization"
        ],
        cons: [
            "Can be resource intensive",
            "Learning curve for advanced features",
            "Subscription required for full features"
        ],
        rating: 4.3,
        category: "code-generation"
    },
    
    4: { // Codeium
        name: "Codeium",
        description: "Free AI-powered code completion tool with support for over 20+ languages and IDE integrations",
        url: "https://codeium.com/",
        screenshot: "img/screenshots/codeium.png",
        detailedDescription: "Codeium is a free AI-powered toolkit for developers that provides intelligent code completion, search, and chat features. It offers unlimited usage for individual developers and supports over 70 programming languages.",
        benefits: [
            "Completely free for individual use",
            "Supports 70+ programming languages",
            "Unlimited usage",
            "Fast code completions",
            "AI-powered chat and search"
        ],
        bestFor: "Individual developers, students, small teams looking for free AI coding assistance",
        features: [
            "Intelligent code completion",
            "AI chat for coding questions",
            "Code search and explanation",
            "Multi-language support",
            "IDE integrations",
            "Context-aware suggestions"
        ],
        supportedLanguages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "PHP", "Go", "Rust", "Ruby", "Swift", "Kotlin", "HTML", "CSS"],
        integrations: ["VS Code", "IntelliJ IDEA", "PyCharm", "WebStorm", "Neovim", "JetBrains IDEs"],
        pricing: {
            individual: "Free forever",
            teams: "$12/user/month",
            enterprise: "Custom pricing"
        },
        pros: [
            "Completely free for individuals",
            "Excellent language support",
            "Fast and responsive",
            "Good IDE integration",
            "No usage limits"
        ],
        cons: [
            "Newer platform with smaller community",
            "Limited advanced features compared to paid alternatives",
            "Team features require subscription"
        ],
        rating: 4.4,
        category: "code-generation"
    },
    
    5: { // Replit Ghostwriter
        name: "Replit Ghostwriter",
        description: "AI coding assistant integrated with Replit that helps generate, complete, and transform code",
        url: "https://replit.com/site/ghostwriter",
        screenshot: "img/screenshots/replit.png",
        detailedDescription: "Replit Ghostwriter is an AI pair programmer built into the Replit online IDE. It provides code completion, generation, transformation, and explanation features directly within the browser-based development environment.",
        benefits: [
            "Integrated with Replit IDE",
            "Browser-based development",
            "Code generation and completion",
            "Code explanation and transformation",
            "Multi-language support"
        ],
        bestFor: "Students, educators, developers using Replit, collaborative coding projects",
        features: [
            "AI code completion",
            "Code generation from comments",
            "Code explanation",
            "Code transformation",
            "Integrated debugging",
            "Collaborative features"
        ],
        supportedLanguages: ["Python", "JavaScript", "Java", "C++", "Go", "Rust", "HTML", "CSS", "SQL"],
        integrations: ["Replit IDE", "GitHub", "Git"],
        pricing: {
            free: "Limited features",
            hacker: "$7/month",
            pro: "$20/month"
        },
        pros: [
            "Seamless Replit integration",
            "Browser-based convenience",
            "Good for learning",
            "Collaborative features",
            "No local setup required"
        ],
        cons: [
            "Limited to Replit environment",
            "Requires internet connection",
            "Less powerful than standalone tools"
        ],
        rating: 4.1,
        category: "code-generation"
    },
    
    // More Code Generation Tools
    36: { // Cursor
        name: "Cursor",
        description: "AI-powered code editor that helps write, understand, and transform code with built-in chat and context-aware assistance",
        url: "https://cursor.sh/",
        screenshot: "img/screenshots/cursor.png",
        detailedDescription: "Cursor is an AI-first code editor built on VS Code that integrates powerful AI capabilities directly into the editing experience. It offers intelligent code completion, chat-based assistance, and context-aware suggestions to enhance developer productivity.",
        benefits: [
            "AI-first code editor experience",
            "Built-in chat for coding assistance",
            "Context-aware code suggestions",
            "VS Code compatibility",
            "Advanced AI features"
        ],
        bestFor: "Developers wanting an AI-native editing experience, teams looking for integrated AI assistance, VS Code users",
        features: [
            "AI-powered code completion",
            "Chat-based coding assistance",
            "Code explanation and refactoring",
            "Context-aware suggestions",
            "VS Code extension compatibility",
            "Multi-language support"
        ],
        supportedLanguages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Go", "Rust", "PHP", "Ruby", "Swift"],
        integrations: ["VS Code Extensions", "Git", "GitHub", "Terminal"],
        pricing: {
            free: "Basic features available",
            pro: "$20/month",
            business: "$40/user/month"
        },
        pros: [
            "Native AI integration",
            "VS Code compatibility",
            "Powerful chat features",
            "Context-aware assistance",
            "Modern interface"
        ],
        cons: [
            "Relatively new platform",
            "Subscription required for advanced features",
            "Learning curve for AI features"
        ],
        rating: 4.4,
        category: "code-generation"
    },
    
    37: { // DeepSeek Coder
        name: "DeepSeek Coder",
        description: "An open-source code large language model (LLM) developed by DeepSeek AI, supporting multiple programming languages",
        url: "https://chat.deepseek.com/",
        screenshot: "img/screenshots/deepseek.png",
        detailedDescription: "DeepSeek Coder is an open-source large language model specifically trained for code generation and understanding. It provides powerful coding assistance through chat interface and API access.",
        benefits: [
            "Open-source and free to use",
            "Specialized for coding tasks",
            "Multi-language support",
            "API access available",
            "Strong code understanding"
        ],
        bestFor: "Developers seeking open-source AI coding assistance, researchers, teams wanting customizable AI solutions",
        features: [
            "Code generation and completion",
            "Code explanation and analysis",
            "Multi-language support",
            "Chat-based interface",
            "API access",
            "Open-source model"
        ],
        supportedLanguages: ["Python", "JavaScript", "Java", "C++", "Go", "Rust", "PHP", "Ruby", "Swift", "Kotlin"],
        integrations: ["API", "Chat Interface", "Custom Integrations"],
        pricing: {
            free: "Open-source and free",
            api: "Usage-based pricing",
            enterprise: "Custom solutions"
        },
        pros: [
            "Completely open-source",
            "Strong coding capabilities",
            "Free to use",
            "Customizable",
            "Good performance"
        ],
        cons: [
            "Requires technical setup",
            "Limited official integrations",
            "Community-driven support"
        ],
        rating: 4.2,
        category: "code-generation"
    },
    
    // Code Explanation Tools
    6: { // Blackbox AI
        name: "Blackbox AI",
        description: "AI tool that helps explain code, convert code between languages, and fix bugs",
        url: "https://www.useblackbox.io/",
        screenshot: "img/screenshots/blackbox.png",
        detailedDescription: "Blackbox AI is a comprehensive AI coding assistant that specializes in code explanation, language conversion, and bug fixing. It helps developers understand complex code and translate between different programming languages.",
        benefits: [
            "Code explanation and documentation",
            "Language conversion capabilities",
            "Bug detection and fixing",
            "Multi-language support",
            "Easy-to-use interface"
        ],
        bestFor: "Developers learning new languages, teams working with legacy code, developers needing code explanations",
        features: [
            "Code explanation",
            "Language conversion",
            "Bug detection",
            "Code optimization",
            "Documentation generation",
            "Multi-language support"
        ],
        supportedLanguages: ["Python", "JavaScript", "Java", "C++", "C#", "PHP", "Go", "Ruby", "Swift", "Kotlin"],
        integrations: ["Web Interface", "Browser Extension", "API"],
        pricing: {
            free: "Limited usage",
            pro: "$9.99/month",
            enterprise: "Custom pricing"
        },
        pros: [
            "Excellent code explanation",
            "Good language conversion",
            "User-friendly interface",
            "Affordable pricing",
            "Multiple access methods"
        ],
        cons: [
            "Limited free tier",
            "Accuracy varies by language",
            "Requires internet connection"
        ],
        rating: 4.0,
        category: "code-explanation"
    },
    
    // Testing Tools
    16: { // Diffblue Cover
        name: "Diffblue Cover",
        description: "AI tool that automatically writes unit tests for Java code",
        url: "https://www.diffblue.com/products/",
        screenshot: "img/screenshots/diffblue.png",
        detailedDescription: "Diffblue Cover is an AI-powered tool that automatically generates comprehensive unit tests for Java applications. It analyzes your code and creates meaningful tests that improve code coverage and quality.",
        benefits: [
            "Automatic unit test generation",
            "Improves code coverage",
            "Saves testing time",
            "Java-focused expertise",
            "Enterprise-grade quality"
        ],
        bestFor: "Java developers, enterprise teams, projects needing better test coverage, legacy code maintenance",
        features: [
            "Automatic test generation",
            "Code coverage analysis",
            "Test maintenance",
            "CI/CD integration",
            "Enterprise security",
            "Java specialization"
        ],
        supportedLanguages: ["Java"],
        integrations: ["IntelliJ IDEA", "Eclipse", "Maven", "Gradle", "Jenkins", "GitHub Actions"],
        pricing: {
            community: "Free for open source",
            enterprise: "Contact for pricing"
        },
        pros: [
            "Specialized for Java",
            "High-quality test generation",
            "Enterprise features",
            "Good IDE integration",
            "Saves significant time"
        ],
        cons: [
            "Java-only support",
            "Enterprise pricing",
            "Learning curve for setup"
        ],
        rating: 4.3,
        category: "testing"
    },
    
    49: { // Query.Domains
        name: "Query.Domains",
        description: "Advanced domain search and analysis tool for finding available domains, checking domain history, and analyzing domain metrics",
        url: "https://query.domains",
        screenshot: "img/screenshots/query-domains.png",
        detailedDescription: "Query.Domains is a comprehensive domain research and analysis platform that helps developers, businesses, and domain investors find the perfect domain names. It provides advanced search capabilities, domain history analysis, SEO metrics, and availability checking across multiple TLDs.",
        benefits: [
            "Advanced domain search with multiple filters",
            "Comprehensive domain history and analytics",
            "SEO metrics and backlink analysis",
            "Bulk domain availability checking",
            "Domain valuation and market insights"
        ],
        bestFor: "Web developers, digital marketers, domain investors, startup founders, SEO professionals",
        features: [
            "Multi-TLD domain search",
            "Domain history tracking",
            "SEO and traffic analytics",
            "Backlink profile analysis",
            "Domain valuation tools",
            "Bulk search capabilities",
            "WHOIS information lookup",
            "Domain monitoring alerts"
        ],
        supportedLanguages: ["Web Interface", "API", "JSON", "CSV Export"],
        integrations: ["API Access", "CSV Export", "WHOIS Database", "SEO Tools", "Domain Registrars"],
        pricing: {
            free: "Basic search features",
            starter: "$9.99/month",
            professional: "$29.99/month",
            enterprise: "$99.99/month"
        },
        pros: [
            "Comprehensive domain analysis",
            "User-friendly interface",
            "Extensive database coverage",
            "Accurate domain valuations",
            "Fast search performance",
            "Multiple export formats"
        ],
        cons: [
            "Premium features require subscription",
            "Learning curve for advanced features",
            "Limited free tier usage"
        ],
        rating: 4.5,
        category: "design-assistance"
    }
    // Add more detailed data for other tools...
};

// Create basic tool template for tools without detailed data
function createBasicToolTemplate(basicTool) {
    return {
        name: basicTool.name,
        description: basicTool.description,
        url: basicTool.url,
        screenshot: basicTool.screenshot || `img/screenshots/${basicTool.name.toLowerCase().replace(/\s+/g, '-')}.png`,
        detailedDescription: `${basicTool.name} is a powerful AI development tool that helps developers improve their productivity and code quality. ${basicTool.description}`,
        benefits: [
            "Enhances developer productivity",
            "Improves code quality",
            "Saves development time",
            "Easy to integrate",
            "User-friendly interface"
        ],
        bestFor: "Developers and teams looking to enhance their development workflow with AI assistance",
        features: [
            "AI-powered assistance",
            "Multi-language support",
            "Easy integration",
            "User-friendly interface",
            "Regular updates"
        ],
        supportedLanguages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Go", "PHP", "Ruby"],
        integrations: ["VS Code", "IntelliJ IDEA", "Web Browser", "API"],
        pricing: {
            free: "Basic features available",
            pro: "Contact for pricing",
            enterprise: "Custom pricing"
        },
        pros: [
            "Easy to use",
            "Good performance",
            "Regular updates",
            "Community support"
        ],
        cons: [
            "Limited free features",
            "May require learning curve",
            "Pricing varies"
        ],
        rating: 4.0,
        category: basicTool.category
    };
}

// Get tool ID from URL parameters
function getToolIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load tool details
function loadToolDetails() {
    const toolId = getToolIdFromUrl();
    let tool = detailedToolsData[toolId];

    // If no detailed data exists, create a basic template from tools-data.js
    if (!tool) {
        const basicTool = toolsData.find(t => t.id == toolId);
        if (basicTool) {
            tool = createBasicToolTemplate(basicTool);
        } else {
            document.querySelector('.tool-detail').innerHTML = '<div class="container"><h2>Tool not found</h2></div>';
            return;
        }
    }

    // Update basic info
    document.getElementById('tool-name').textContent = tool.name;
    document.getElementById('tool-description').textContent = tool.description;
    document.getElementById('tool-category').textContent = tool.category.replace('-', ' ').toUpperCase();
    document.getElementById('tool-rating').textContent = `★ ${tool.rating}/5`;

    // Update tool link
    document.getElementById('tool-link').href = tool.url;

    // Update tool screenshot
    const screenshotImg = document.getElementById('tool-screenshot');
    const screenshotContainer = document.querySelector('.tool-screenshot');
    
    // Always show the screenshot container
    screenshotContainer.style.display = 'flex';
    
    if (tool.screenshot) {
        // Show actual screenshot
        console.log('Loading screenshot:', tool.screenshot); // Debug log
        screenshotImg.src = tool.screenshot;
        screenshotImg.alt = `${tool.name} Screenshot`;
        screenshotImg.style.display = 'block';
        
        // Remove any existing placeholder
        const existingPlaceholder = screenshotContainer.querySelector('.screenshot-placeholder');
        if (existingPlaceholder) {
            existingPlaceholder.remove();
        }
        
        // Handle image load success
        screenshotImg.onload = function() {
            console.log('Screenshot loaded successfully:', tool.screenshot);
        };
        
        // Handle image load error
        screenshotImg.onerror = function() {
            console.log('Screenshot failed to load:', tool.screenshot);
            this.style.display = 'none';
            showPlaceholder();
        };
    } else {
        // Show placeholder
        console.log('No screenshot available for:', tool.name);
        screenshotImg.style.display = 'none';
        showPlaceholder();
    }
    
    function showPlaceholder() {
        // Check if placeholder already exists
        if (!screenshotContainer.querySelector('.screenshot-placeholder')) {
            const placeholder = document.createElement('div');
            placeholder.className = 'screenshot-placeholder';
            placeholder.innerHTML = `
                <div class="placeholder-content">
                    <i class="fas fa-image"></i>
                    <p>${tool.name}</p>
                    <span>Screenshot coming soon</span>
                </div>
            `;
            screenshotContainer.appendChild(placeholder);
        }
    }

    // Update detailed content
    document.getElementById('detailed-description').textContent = tool.detailedDescription;
    document.getElementById('best-for').textContent = tool.bestFor;

    // Update benefits
    const benefitsList = document.getElementById('benefits-list');
    tool.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });

    // Update features
    const featuresList = document.getElementById('features-list');
    tool.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Update supported languages
    const languagesDiv = document.getElementById('supported-languages');
    tool.supportedLanguages.forEach(lang => {
        const span = document.createElement('span');
        span.className = 'language-tag';
        span.textContent = lang;
        languagesDiv.appendChild(span);
    });

    // Update integrations
    const integrationsDiv = document.getElementById('integrations');
    tool.integrations.forEach(integration => {
        const span = document.createElement('span');
        span.className = 'integration-tag';
        span.textContent = integration;
        integrationsDiv.appendChild(span);
    });

    // Update pricing
    const pricingDiv = document.getElementById('pricing-info');
    Object.entries(tool.pricing).forEach(([plan, price]) => {
        const div = document.createElement('div');
        div.className = 'pricing-plan';
        div.innerHTML = `<strong>${plan.charAt(0).toUpperCase() + plan.slice(1)}:</strong> ${price}`;
        pricingDiv.appendChild(div);
    });

    // Update pros
    const prosList = document.getElementById('pros-list');
    tool.pros.forEach(pro => {
        const li = document.createElement('li');
        li.textContent = pro;
        prosList.appendChild(li);
    });

    // Update cons
    const consList = document.getElementById('cons-list');
    tool.cons.forEach(con => {
        const li = document.createElement('li');
        li.textContent = con;
        consList.appendChild(li);
    });
}

// Tab functionality
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // Remove active class from all tabs and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadToolDetails();
    initTabs();

    // Initialize language after loading tool details
    if (typeof setLanguage === 'function') {
        const currentLang = localStorage.getItem('language') || 'en';
        setLanguage(currentLang);
    }
});