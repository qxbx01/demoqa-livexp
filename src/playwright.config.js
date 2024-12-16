module.exports = {
    testDir: './tests',
    use: {
        headless: true,
        baseURL: 'https://demoqa.com',
        viewport: { width: 1280, height: 720 },
        timeout: 60000,
    },
    reporter: 'list'
};
