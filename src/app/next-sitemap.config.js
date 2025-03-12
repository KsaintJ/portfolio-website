/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://kendersaintjuste.dev',
    generateRobotsTxt: true,
    outDir: 'public',
    exclude: ['/api/*']
  };