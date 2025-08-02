// Screaming Frog Email Extractor - Hueston.co
// filter outs the css now

try {
    // Get page content but exclude CSS and scripts
    let pageContent = document.body ? document.body.innerHTML : '';
    
    // Remove style tags and their content
    pageContent = pageContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    
    // Remove script tags and their content  
    pageContent = pageContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    
    // Remove inline styles (style="...")
    pageContent = pageContent.replace(/style\s*=\s*["'][^"']*["']/gi, '');
    
    // Also check visible text content (this excludes most CSS/JS)
    const visibleText = document.body ? (document.body.innerText || document.body.textContent || '') : '';
    
    // Combine both sources
    const searchContent = pageContent + ' ' + visibleText;
    
    // Robust email regex
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    
    // Find all potential emails
    const foundEmails = searchContent.match(emailRegex) || [];
    
    // Filter out common false positives
    const validEmails = foundEmails.filter(email => {
        const lower = email.toLowerCase();
        // Exclude common CSS/JS patterns
        return !lower.includes('@media') && 
               !lower.includes('@keyframes') && 
               !lower.includes('@import') &&
               !lower.includes('@charset') &&
               !lower.includes('@font-face') &&
               !lower.includes('@supports') &&
               lower.length > 5 && // Minimum reasonable email length
               lower.includes('.'); // Must have a domain extension
    });
    
    // Remove duplicates and clean up
    const uniqueEmails = [...new Set(validEmails.map(email => 
        email.toLowerCase().trim()
    ))];
    
    // Return results
    const result = {
        'Emails': uniqueEmails.length > 0 ? uniqueEmails.join(', ') : 'No emails found'
    };
    
    return seoSpider.data([result]);
    
} catch (error) {
    return seoSpider.data([{
        'Emails': 'Error: ' + error.toString()
    }]);
}
