(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{296:function(e,t,a){"use strict";a.r(t);var n=a(14),i=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h4",{attrs:{id:"update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[e._v("#")]),e._v(" Update")]),e._v(" "),t("p",[e._v("Well, as it might be obvious, the site is no longer using jekyll as its static\nsite generator. I will make sure to write a post explaining the switch and the\napproach taken with the new generator.")]),e._v(" "),t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),t("p",[e._v("Since I've only recently made this blog site and it seems unnatural for me to\njust jump into the topics I'd really like to write about (and get comfortable\nwith the workflow of the GitHub pages), I figured I'd make a short intro post.\nSince this is still supposed to be my professional blog, I figure it would be\ninteresting to write about my experiences \"creating\" this website.")]),e._v(" "),t("h1",{attrs:{id:"github-pages-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-pages-setup"}},[e._v("#")]),e._v(" GitHub pages setup")]),e._v(" "),t("p",[e._v("Personally, I like to have as much control over the content I create as\npossible. Because of that, the idea of hosting my own website on GitHub seemed\nlike a natural start. Later I'd maybe try registering a domain and redirecting\nit here, or maybe even developing a whole site from the scratch. But for now,\nthis seems like a good enough start as I'd really like to start writing and not\nimplementing a website.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub pages"),t("OutboundLink")],1),e._v(" platform is used to serve static\nsites. This means you can't use a framework in the back to dynamically create\npages, but only serve HTML as stored. This is where static website generators\ncome in. These are pieces of software that take in groups of files and generate\nstatic websites from them. For instance, say if you have a directory with\nmarkdown files, this kind of generator could take that directory and create a\nwebsite from these files (using a glorified md -> html converter, adding user\nspecified styles, etc.).")]),e._v(" "),t("p",[e._v("Other than serving raw static sites, GitHub pages also support storing,\nbuilding and serving "),t("a",{attrs:{href:"https://jekyllrb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jekyll"),t("OutboundLink")],1),e._v(' projects. Jekyll is a\nstatic site generator, one of the most popular ones to date. It markets as\n"blog aware", allowing it\'s users to create blog posts written in markdown. The\nquick-start is quite simple, after downloading the Ruby development environment\ncall the following commands to serve your very own blog site:')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gem install jekyll bundler\njekyll new github_username.github.io\ncd github_username.github.io\nbundle exec jekyll serve\n")])])]),t("p",[e._v("(Or you can just follow the "),t("a",{attrs:{href:"https://jekyllrb.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("quick start guide"),t("OutboundLink")],1),e._v(" I\ncopied this from)")]),e._v(" "),t("p",[e._v("If you created a project on GitHub named "),t("code",[e._v("github_username.github.io")]),e._v(" and pushed\nthe contents of your newly created Jekyll blog, you could access your website\nat domain "),t("code",[e._v("https://github_username.github.io")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"website-styles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#website-styles"}},[e._v("#")]),e._v(" Website styles")]),e._v(" "),t("p",[e._v("Every Jekyll site has a theme. A theme consists of HTML layouts ("),t("a",{attrs:{href:"https://shopify.github.io/liquid/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Liquid\nformat"),t("OutboundLink")],1),e._v("), styles and additional assets like\nJavaScript code or images, all used to additionally style your website. A new\nJekyll project will start with the "),t("a",{attrs:{href:"https://github.com/jekyll/minima",target:"_blank",rel:"noopener noreferrer"}},[e._v("Minima"),t("OutboundLink")],1),e._v("\ntheme, but this can be changed. Simply add the theme dependancy to the Gemfile\nin your root directory and update the "),t("code",[e._v("_config.yml")]),e._v(" file. If you don't like a\nminor part of your theme (i.e. a layout segment or a style color), but don't\nwant to change the whole thing, you can override only the file that bothers\nyou, by creating a file at "),t("code",[e._v("_layout/layout_name.html")]),e._v(" or\n"),t("code",[e._v("_sass/style_name.scss")]),e._v(" in your project directory.")]),e._v(" "),t("p",[e._v("While at first this might look like a lot of flexibility, we need to remember\nthat we're running the project on GitHub pages, meaning we have to abide their\nrules regarding the allowed themes and dependencies. GitHub only has a small\n"),t("a",{attrs:{href:"https://pages.github.com/themes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("set of the themes that are supported"),t("OutboundLink")],1),e._v(". Since\nthese themes look like they are made to showcase singular projects, not blogs,\nit's interesting to look at alternative ways to achieve different, appealing\nlook fast.")]),e._v(" "),t("h2",{attrs:{id:"avoiding-limitations-set-by-github-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#avoiding-limitations-set-by-github-pages"}},[e._v("#")]),e._v(" Avoiding limitations set by GitHub pages")]),e._v(" "),t("p",[e._v("Other than limiting which themes can be used, GitHub pages also limit which\n"),t("a",{attrs:{href:"https://pages.github.com/versions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("plugins"),t("OutboundLink")],1),e._v(" can named in the Gemfile. One\nlook at the list shows us that a package named\n"),t("a",{attrs:{href:"https://github.com/benbalter/jekyll-remote-theme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("jekyll-remote-theme")]),t("OutboundLink")],1),e._v(" is\nallowed. With this package, you can name a GitHub repository containing any\ntheme you like and Jekyll will treat it as a gem-based theme. This, however,\nstill has its limitations, mostly regarding the dependencies of the remote\ntheme.")]),e._v(" "),t("p",[e._v("Another solution, and the one currently used at this site, is simply forking\nan existing theme. Find a repository, fork it and rename the fork to\n"),t("code",[e._v("github_username.github.io")]),e._v(". Again make sure that the forked theme doesn't use\nany unsupported dependencies, or if it does, change its code appropriately.\nSome themes are specifically made with this use case in mind (like the one on\nthis site), so they'll mention it specifically in their readme's or\ndocumentations.")]),e._v(" "),t("h1",{attrs:{id:"impressions-as-far-as-they-can-go-for-now"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#impressions-as-far-as-they-can-go-for-now"}},[e._v("#")]),e._v(" Impressions (as far as they can go for now)")]),e._v(" "),t("p",[e._v("Using GitHub to host a blog site seems like quite a natural match. Markdown is\nsimple to use, but complex enough to express an average blog post, especially\nwhen combined with\n"),t("a",{attrs:{href:"https://jekyllrb.com/docs/front-matter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jekyll's front matter"),t("OutboundLink")],1),e._v(". Also, the\nfact that it's on GitHub means that I have access to the editing history of\nevery post ever written on the site. Lastly, using branches, I can easily\nseparate site and post management. I can even reimplement the whole site\nwithout breaking the current implementation and release the changes when they\nare ready, but still retaining the old posts.")]),e._v(" "),t("p",[e._v("For my theme, I chose to fork "),t("a",{attrs:{href:"https://github.com/mmistakes/minimal-mistakes",target:"_blank",rel:"noopener noreferrer"}},[e._v("minimal mistakes by Michael\nRose"),t("OutboundLink")],1),e._v('. This approach\nimmediately gave me access to a very well designed, but extensible theme, and\nI have the entire code in a single repository with minimal dependencies. This\nallows me a lot of flexibility for minor fixes, if neccessary. The theme itself\nsupports anything a modern blog could require, from post and portfolio\nmanagement, to small details like comment sections and archives. It also has\nnine (at the time of writing this) different "subthemes" you can change in the\nconfiguration file. Lastly, but most importantly, it\'s very well documented\nand maintained with new releases on a monthly or bi-monthly basis and updating\nis done with a simple pull from the original fork.')]),e._v(" "),t("p",[e._v("That's about as much as I can say for my impressions, since I've only been\nusing the service for a couple of days. Overall, I would say I like it because\nit allows users to start writing almost instantly, but it also limits them\nminimally (if we ignore the GitHub's limitations). I like the idea of a fully\neditable site code and look forward to seeing how it would behave if I, for\ninstance, tried to integrate single page applications in it (i.e. using the Vue\nlibrary).")]),e._v(" "),t("disqus")],1)}),[],!1,null,null,null);t.default=i.exports}}]);