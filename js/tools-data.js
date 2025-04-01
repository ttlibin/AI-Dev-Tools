const toolsData = [
    // Code Generation & Completion
    {
        id: 1,
        name: "GitHub Copilot",
        description: "AI pair programmer that offers code suggestions directly in your editor",
        screenshot: "img/screenshots/github-copilot.png",
        url: "https://github.com/features/copilot",
        category: "code-generation",
    },
    {
        id: 2,
        name: "Amazon CodeWhisperer",
        description: "AI coding companion that provides code recommendations based on your comments and existing code",
        logo: "img/logos/codewhisperer.png",
        screenshot: "img/screenshots/codewhisperer.png",
        url: "https://aws.amazon.com/codewhisperer/",
        category: "code-generation",
        rating: "8.7"
    },
    {
        id: 3,
        name: "Tabnine",
        description: "AI code completion tool that helps developers write code faster with whole-line and full-function completions",
        logo: "https://www.tabnine.com/favicon.ico",
        screenshot: "img/screenshots/tabnine.png",
        url: "https://www.tabnine.com/",
        category: "code-generation"
    },
    {
        id: 4,
        name: "Codeium",
        description: "Free AI-powered code completion tool with support for over 20+ languages and IDE integrations",
        logo: "https://codeium.com/favicon.ico",
        screenshot: "img/screenshots/codeium.png",
        url: "https://codeium.com/",
        category: "code-generation"
    },
    {
        id: 5,
        name: "Replit Ghostwriter",
        description: "AI coding assistant integrated with Replit that helps generate, complete, and transform code",
        logo: "img/logos/replit.png",
        screenshot: "img/screenshots/replit.png",
        url: "https://replit.com/site/ghostwriter",
        category: "code-generation"
    },
    {
        id: 36,
        name: "Cursor",
        description: "AI-powered code editor that helps write, understand, and transform code with built-in chat and context-aware assistance",
        logo: "https://cursor.sh/apple-touch-icon.png",
        screenshot: "img/screenshots/cursor.png",
        url: "https://cursor.sh/",
        category: "code-generation"
    },
    {
        id: 37,
        name: "DeepSeek Coder",
        description: "An open-source code large language model (LLM) developed by DeepSeek AI, supporting multiple programming languages",
        logo: "img/logos/deepseek.png",
        screenshot: "img/screenshots/deepseek.png",
        url: "https://chat.deepseek.com/",
        category: "code-generation"
    },
    {
        id: 39,
        name: "CodeGeeX",
        description: "A multilingual code generation model co-developed by Tsinghua University and Zhipu AI",
        logo: "img/logos/codegeex.png",
        screenshot: "img/screenshots/codegeex.png",
        url: "https://codegeex.cn/",
        category: "code-generation"
    },
    {
        id: 40,
        name: "Cody",
        description: "An AI coding assistant developed by Sourcegraph with integrated code search and comprehension functionalities",
        logo: "img/logos/cody.png",
        screenshot: "img/screenshots/sourcegraph.png",
        url: "https://sourcegraph.com/cody",
        category: "code-generation"
    },
    {
        id: 41,
        name: "Project IDX",
        description: "Google's AI-assisted development environment focused on application development",
        logo: "img/logos/project-idx.png",
        screenshot: "img/screenshots/project-idx.png",
        url: "https://idx.dev/",
        category: "code-generation"
    },
    {
        id: 42,
        name: "QoDo",
        description: "An AI-powered code generation tool that enhances developer programming efficiency",
        logo: "img/logos/qodo.png",
        screenshot: "img/screenshots/qodo.png",
        url: "https://qodo.ai/",
        category: "code-generation"
    },
    {
        id: 43,
        name: "AskCodi",
        description: "An intelligent programming assistant providing code generation and Q&A capabilities",
        logo: "img/logos/askcodi.png",
        screenshot: "img/screenshots/askcodi.png",
        url: "https://www.askcodi.com/",
        category: "code-generation"
    },
    {
        id: 46,
        name: "通义灵码",
        description: "Alibaba's AI programming assistant, part of the Tongyi series of AI products",
        logo: "img/logos/tongyi-lingma.png",
        screenshot: "img/screenshots/tongyi-lingma.png",
        url: "https://tongyi.aliyun.com/lingma/",
        category: "code-generation"
    },
    // Code Explanation & Understanding
    {
        id: 6,
        name: "Blackbox AI",
        description: "AI tool that helps explain code, convert code between languages, and fix bugs",
        logo: "https://www.useblackbox.io/favicon.ico",
        screenshot: "img/screenshots/blackbox.png",
        url: "https://www.useblackbox.io/",
        category: "code-explanation"
    },
    {
        id: 7,
        name: "CodeGPT",
        description: "VSCode extension that uses AI to explain code, generate documentation, and answer coding questions",
        logo: "https://marketplace.visualstudio.com/favicon.ico",
        screenshot: "img/screenshots/codegpt.png",
        url: "https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt",
        category: "code-explanation"
    },
    {
        id: 8,
        name: "Mintlify Doc Writer",
        description: "AI-powered documentation writer that generates code documentation in seconds",
        logo: "https://mintlify.com/favicon.ico",
        screenshot: "img/screenshots/mintlify.png",
        url: "https://marketplace.visualstudio.com/items?itemName=mintlify.document",
        category: "code-explanation"
    },
    // id9链接失效
    {
        id: 10,
        name: "Bloop",
        description: "AI-powered code search engine that helps understand codebases through natural language queries",
        logo: "https://bloop.ai/favicon.ico",
        screenshot: "img/screenshots/bloop.png",
        url: "https://bloop.ai/",
        category: "code-explanation"
    },

    // Code Refactoring & Optimization
    {
        id: 11,
        name: "CodeT5",
        description: "AI model for code refactoring, translation, and generation",
        logo: "https://huggingface.co/front/assets/huggingface_logo.svg",
        screenshot: "img/screenshots/codet5-base.png",
        url: "https://huggingface.co/Salesforce/codet5-base",
        category: "code-refactoring"
    },
    {
        id: 12,
        name: "Sourcery",
        description: "AI code review tool that suggests refactoring improvements for Python code",
        logo: "https://sourcery.ai/favicon.ico",
        screenshot: "img/screenshots/sourcery.png",
        url: "https://sourcery.ai/",
        category: "code-refactoring"
    },
    {
        id: 13,
        name: "DeepCode",
        description: "AI-powered static analysis tool that finds bugs and suggests fixes",
        logo: "https://www.deepcode.ai/favicon.ico",
        screenshot: "img/screenshots/deepcode.png",
        url: "https://www.deepcode.ai/",
        category: "code-refactoring"
    },
    {
        id: 14,
        name: "CodeFactor",
        description: "Automated code review tool for Git that helps identify issues and technical debt",
        logo: "https://www.codefactor.io/Content/favicon.ico",
        screenshot: "img/screenshots/codefactor.png",
        url: "https://www.codefactor.io/",
        category: "code-refactoring"
    },
    {
        id: 15,
        name: "Codiga",
        description: "Automated code reviews and AI-powered code snippets to improve code quality",
        logo: "https://www.codiga.io/favicon.ico",
        screenshot: "img/screenshots/codiga.png",
        url: "https://www.codiga.io/",
        category: "code-refactoring"
    },

    // Testing & Debugging
    {
        id: 16,
        name: "Diffblue Cover",
        description: "AI tool that automatically writes unit tests for Java code",
        logo: "https://www.diffblue.com/favicon.ico",
        screenshot: "img/screenshots/diffblue.png",
        url: "https://www.diffblue.com/products/",
        category: "testing"
    },
    {
        id: 17,
        name: "TestIM",
        description: "AI-powered test automation platform for web applications",
        logo: "https://www.testim.io/favicon.ico",
        screenshot: "img/screenshots/testim.png",
        url: "https://www.testim.io/",
        category: "testing"
    },
    {
        id: 18,
        name: "Mabl",
        description: "Intelligent test automation platform that uses machine learning",
        logo: "https://www.mabl.com/favicon.ico",
        screenshot: "img/screenshots/mabl.png",
        url: "https://www.mabl.com/",
        category: "testing"
    },
    {
        id: 19,
        name: "Applitools",
        description: "AI-powered visual testing and monitoring platform",
        logo: "https://applitools.com/favicon.ico",
        screenshot: "img/screenshots/applitools.png",
        url: "https://applitools.com/",
        category: "testing"
    },
    {
        id: 20,
        name: "DeepDebug",
        description: "AI assistant that helps identify and fix bugs in your code",
        logo: "https://www.deepcode.ai/favicon.ico",
        screenshot: "img/screenshots/deepcode.png",
        url: "https://www.deepcode.ai/",
        category: "testing"
    },

    // Documentation Generation
    {
        id: 21,
        name: "Docstring Generator",
        description: "AI-powered tool that generates docstrings for your functions and methods",
        logo: "https://marketplace.visualstudio.com/favicon.ico",
        screenshot: "img/screenshots//marketplace.png",
        url: "https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring",
        category: "documentation"
    },
    {
        id: 22,
        name: "Mintlify",
        description: "AI documentation writer that generates beautiful docs from your codebase",
        logo: "https://mintlify.com/favicon.ico",
        screenshot: "img/screenshots/mintlify1.png",
        url: "https://mintlify.com/",
        category: "documentation"
    },
    {
        id: 23,
        name: "Doxygen AI",
        description: "AI enhancement to Doxygen that generates more comprehensive documentation",
        logo: "https://www.doxygen.nl/favicon.ico",
        screenshot: "img/screenshots/doxygen.png",
        url: "https://www.doxygen.nl/",
        category: "documentation"
    },
    {
        id: 24,
        name: "readme.so",
        description: "Simple editor that helps you create quality README files with AI assistance",
        logo: "https://readme.so/favicon.ico",
        screenshot: "img/screenshots/readme.png",
        url: "https://readme.so/",
        category: "documentation"
    },
    {
        id: 25,
        name: "GitBook AI",
        description: "AI-powered documentation platform that helps create, organize, and share knowledge",
        logo: "https://www.gitbook.com/favicon.ico",
        screenshot: "img/screenshots/gitbook.png",
        url: "https://www.gitbook.com/",
        category: "documentation"
    },

    // AI Learning Assistance
    {
        id: 26,
        name: "Codecademy AI",
        description: "AI-enhanced learning platform for programming and data science",
        logo: "https://www.codecademy.com/favicon.ico",
        screenshot: "img/screenshots/codecademy.png",
        url: "https://www.codecademy.com/",
        category: "learning"
    },

    {
        id: 28,
        name: "Exercism's AI Mentor",
        description: "AI code mentor that provides feedback on programming exercises",
        logo: "https://exercism.org/favicon.ico",
        screenshot: "img/screenshots/exercism.png",
        url: "https://exercism.org/",
        category: "learning"
    },
    {
        id: 29,
        name: "CodePal",
        description: "AI programming tutor that explains concepts and helps solve coding problems",
        logo: "https://codepal.ai/favicon.ico",
        screenshot: "img/screenshots/codepal.png",
        url: "https://codepal.ai/",
        category: "learning"
    },
    {
        id: 30,
        name: "Datacamp AI Assistant",
        description: "AI assistant that helps learners with data science and programming questions",
        logo: "https://www.datacamp.com/favicon.ico",
        screenshot: "img/screenshots/datacamp.png",
        url: "https://www.datacamp.com/",
        category: "learning"
    },

    // Design Assistance
    {
        id: 31,
        name: "Galileo AI",
        description: "AI tool that converts text descriptions into UI designs",
        logo: "https://www.usegalileo.ai/favicon.ico",
        screenshot: "img/screenshots/usegalileo.png",
        url: "https://www.usegalileo.ai/",
        category: "design"
    },
    {
        id: 32,
        name: "Uizard",
        description: "AI-powered design tool that transforms wireframes into UI designs",
        logo: "https://uizard.io/favicon.ico",
        screenshot: "img/screenshots/uizard.png",
        url: "https://uizard.io/",
        category: "design"
    },
    {
        id: 33,
        name: "Figma AI",
        description: "AI features in Figma that help with design generation and editing",
        logo: "https://static.figma.com/app/icon/1/favicon.svg",
        screenshot: "img/screenshots/figma.png",
        url: "https://www.figma.com/",
        category: "design"
    },
    {
        id: 34,
        name: "Locofy",
        description: "AI tool that converts designs into production-ready code",
        logo: "https://www.locofy.ai/favicon.ico",
        screenshot: "img/screenshots/locofy.png",
        url: "https://www.locofy.ai/",
        category: "design"
    },
    {
        id: 35,
        name: "Visily",
        description: "AI-powered tool that converts sketches and screenshots into editable designs",
        logo: "https://www.visily.ai/favicon.ico",
        screenshot: "img/screenshots/visily.png",
        url: "https://www.visily.ai/",
        category: "design"
    }
]; 