// Generated using Claude Sonnet 4.5
// https://claude.ai/share/3268c4d4-2a5e-4040-ba08-912cf6ffd7d0

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOCS_DIR = path.join(__dirname, 'docs');

/**
 * Load config using tsx to execute TypeScript
 */
async function loadConfig() {
    const tempScript = `
import config from './docs/.vitepress/config.mts';
console.log(JSON.stringify(config.default || config, null, 2));
`;

    const tempFile = path.join(__dirname, '.temp-load-config.mts');
    fs.writeFileSync(tempFile, tempScript);

    try {
        const { stdout } = await execAsync(`npx tsx ${tempFile}`);
        fs.unlinkSync(tempFile);
        return JSON.parse(stdout);
    } catch (error) {
        if (fs.existsSync(tempFile)) {
            fs.unlinkSync(tempFile);
        }

        if (error.message.includes('command not found') || error.message.includes('tsx')) {
            console.error('❌ tsx is required to load .mts files');
            console.error('   Install it with: npm install -D tsx');
            console.error('   Or use: pnpm add -D tsx');
            process.exit(1);
        }
        throw error;
    }
}

/**
 * Recursively extract all links from sidebar items
 */
function extractLinksFromSidebar(sidebar) {
    const links = new Set();

    function processItem(item) {
        // If item has a link property
        if (item.link) {
            links.add(item.link);
        }

        // If item has items (nested sidebar items)
        if (item.items && Array.isArray(item.items)) {
            item.items.forEach(processItem);
        }
    }

    // Handle different sidebar formats
    if (Array.isArray(sidebar)) {
        // Sidebar is an array of items
        sidebar.forEach(processItem);
    } else if (typeof sidebar === 'object') {
        // Sidebar is an object with paths as keys
        Object.values(sidebar).forEach(section => {
            if (Array.isArray(section)) {
                section.forEach(processItem);
            } else {
                processItem(section);
            }
        });
    }

    return Array.from(links);
}

/**
 * Convert a link to a file path
 */
function linkToFilePath(link) {
    // Remove leading slash
    let filePath = link.startsWith('/') ? link.slice(1) : link;

    // Add .md extension if not present
    if (!filePath.endsWith('.md') && !filePath.endsWith('.html')) {
        // Check if it ends with a slash (directory index)
        if (filePath.endsWith('/')) {
            filePath += 'index.md';
        } else {
            filePath += '.md';
        }
    }

    return path.join(DOCS_DIR, filePath);
}

/**
 * Create a markdown file with basic template
 */
function createMarkdownFile(filePath, link) {
    const dir = path.dirname(filePath);

    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`📁 Created directory: ${path.relative(__dirname, dir)}`);
    }

    // Generate a title from the file name
    const fileName = path.basename(filePath, '.md');
    const title = fileName
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // Create basic markdown template
    const template = `# ${title}

<!-- TODO: Add content for this page -->

This page is under construction.
`;

    fs.writeFileSync(filePath, template, 'utf-8');
    console.log(`✅ Created: ${path.relative(__dirname, filePath)}`);
}

/**
 * Main function
 */
async function main() {
    console.log('🚀 VitePress Missing Pages Generator\n');

    // Load config
    const config = await loadConfig();

    // Check if sidebar exists
    if (!config?.themeConfig?.sidebar) {
        console.error('❌ No sidebar configuration found in config.mts');
        console.error('   Config structure:', JSON.stringify(Object.keys(config || {}), null, 2));
        process.exit(1);
    }

    // Extract links
    const links = extractLinksFromSidebar(config.themeConfig.sidebar);
    console.log(`📊 Found ${links.length} links in sidebar configuration\n`);

    if (links.length === 0) {
        console.log('⚠️  No links found in sidebar. Please check your configuration.');
        return;
    }

    let createdCount = 0;
    let skippedCount = 0;

    // Process each link
    for (const link of links) {
        const filePath = linkToFilePath(link);

        if (fs.existsSync(filePath)) {
            console.log(`⏭️  Skipped (exists): ${path.relative(__dirname, filePath)}`);
            skippedCount++;
        } else {
            createMarkdownFile(filePath, link);
            createdCount++;
        }
    }

    console.log(`\n📈 Summary:`);
    console.log(`   Created: ${createdCount} files`);
    console.log(`   Skipped: ${skippedCount} files`);
    console.log(`   Total:   ${links.length} files`);
}

// Run the script
main().catch(error => {
    console.error('❌ Error:', error.message);
    console.error(error);
    process.exit(1);
});