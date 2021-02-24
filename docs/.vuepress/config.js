module.exports = {
    title: 'zlatsic',
    description: 'SCADA AI developer',
    markdown: {
        toc: {
            includeLevel: [1, 2, 3, 4]
        }
    },
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Blog', link: '/blog/'},
            {text: 'Portfolio', link: '/portfolio/'},
            {text: 'CV', link: '/cv/'},
            {text: 'Contact', link: '/contact.html'}
        ]
    },
    plugins: [
        ['@vuepress/plugin-google-analytics', { ga: 'G-9M3HSNDJLW' }]
    ],
    head: [
        ['link', {rel: 'icon', type: 'image/svg', href: '/favicon.svg'}]
    ]
}
