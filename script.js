// Simple Blog JavaScript
// Simple markdown-like parser for basic formatting
function parseMarkdown(text) {
    return text
        // Headers
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        // Lists
        .replace(/^\* (.*$)/gim, '<li>$1</li>')
        .replace(/^- (.*$)/gim, '<li>$1</li>')
        // Paragraphs
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
}

// Extract excerpt from content (first few sentences)
function getExcerpt(content) {
    // Remove markdown formatting for excerpt
    let plainText = content
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\*(.*?)\*/g, '$1')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
        .replace(/#{1,6} /g, '')
        .replace(/^\* /gm, '')
        .replace(/^- /gm, '')
        .replace(/\n/g, ' ')
        .trim();

    // Get first 150 characters
    return plainText.length > 150
        ? plainText.substring(0, 150) + '...'
        : plainText;
}

// Load and parse markdown files
async function loadPosts() {
    const posts = [
        {
            file: '_posts/2025-09-22-us-history-guide.md',
            title: 'Interactive Guide: History of the United States (1490 - Present)',
            date: 'September 22, 2025',
            excerpt: 'An interactive exploration of American history from pre-colonial times to the present day. This comprehensive guide covers major events, figures, and developments that shaped the United States.'
        },
        {
            file: '_posts/2025-09-21-jp-ca-us-travel.md',
            title: 'Cross-Cultural Pacific Odyssey: Japan to North America',
            date: 'September 21, 2025',
            excerpt: 'A meticulously crafted 19-day journey from Japan\'s neon-lit metropolis through Canada\'s pristine wilderness to America\'s iconic cities. Experience the best of three nations in one seamless Pacific Rim adventure.'
        }
    ];

    const container = document.getElementById('posts-container');

    for (const post of posts) {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        postElement.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <div class="post-date">${post.date}</div>
            <div class="post-excerpt">${post.excerpt}</div>
            <a href="${post.file}" class="read-more">Read more →</a>
        `;

        container.appendChild(postElement);
    }
}

// Load posts when page loads
document.addEventListener('DOMContentLoaded', loadPosts);

// Simple function to load individual post content
async function loadPostContent(filename) {
    try {
        const response = await fetch(filename);
        const text = await response.text();

        // Extract front matter and content
        const parts = text.split('---');
        if (parts.length >= 3) {
            const frontMatter = parts[1];
            const content = parts[2];

            // Parse front matter
            const metadata = {};
            frontMatter.split('\n').forEach(line => {
                const colonIndex = line.indexOf(':');
                if (colonIndex > 0) {
                    const key = line.substring(0, colonIndex).trim();
                    const value = line.substring(colonIndex + 1).trim().replace(/['"]/g, '');
                    metadata[key] = value;
                }
            });

            return {
                metadata: metadata,
                content: content.trim()
            };
        }

        return {
            metadata: {},
            content: text
        };
    } catch (error) {
        console.error('Error loading post:', error);
        return null;
    }
}
