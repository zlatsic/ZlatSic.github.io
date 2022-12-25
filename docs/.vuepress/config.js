module.exports = {
    title: 'Zlatan Sičanica',
    description: 'Web and AI developer',
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
            {text: 'CV', link: '/cv.html'},
            {text: 'Contact', link: '/contact.html'}
        ]
    },
    head: [
        ['link', {rel: 'icon', type: 'image/svg', href: '/favicon.svg'}],
	['script', {
	    async: true,
	    src: 'https://www.googletagmanager.com/gtag/js?id=G-9M3HSNDJLW',
	}],
	['script', {}, [
	    "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-9M3HSNDJLW');",
	]],
    ]
}
