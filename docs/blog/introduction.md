---
id: 1
categories: meta
title: "Introduction"
excerpt: "Small introduction to the blog"
date: 2019-01-15
---

#### Update

Well, as it might be obvious, the site is no longer using jekyll as its static
site generator. I will make sure to write a post explaining the switch and the
approach taken with the new generator.

# {{$frontmatter.title}}

Since I've only recently made this blog site and it seems unnatural for me to
just jump into the topics I'd really like to write about (and get comfortable
with the workflow of the GitHub pages), I figured I'd make a short intro post.
Since this is still supposed to be my professional blog, I figure it would be
interesting to write about my experiences "creating" this website.

# GitHub pages setup

Personally, I like to have as much control over the content I create as
possible. Because of that, the idea of hosting my own website on GitHub seemed
like a natural start. Later I'd maybe try registering a domain and redirecting
it here, or maybe even developing a whole site from the scratch. But for now,
this seems like a good enough start as I'd really like to start writing and not
implementing a website.

[GitHub pages](https://pages.github.com/) platform is used to serve static
sites. This means you can't use a framework in the back to dynamically create
pages, but only serve HTML as stored. This is where static website generators
come in. These are pieces of software that take in groups of files and generate
static websites from them. For instance, say if you have a directory with
markdown files, this kind of generator could take that directory and create a
website from these files (using a glorified md -> html converter, adding user
specified styles, etc.).

Other than serving raw static sites, GitHub pages also support storing,
building and serving [Jekyll](https://jekyllrb.com/) projects. Jekyll is a
static site generator, one of the most popular ones to date. It markets as
"blog aware", allowing it's users to create blog posts written in markdown. The
quick-start is quite simple, after downloading the Ruby development environment
call the following commands to serve your very own blog site:

```
gem install jekyll bundler
jekyll new github_username.github.io
cd github_username.github.io
bundle exec jekyll serve
```

(Or you can just follow the [quick start guide](https://jekyllrb.com/docs/) I
copied this from)

If you created a project on GitHub named `github_username.github.io` and pushed
the contents of your newly created Jekyll blog, you could access your website
at domain `https://github_username.github.io`.

## Website styles

Every Jekyll site has a theme. A theme consists of HTML layouts ([Liquid
format](https://shopify.github.io/liquid/)), styles and additional assets like
JavaScript code or images, all used to additionally style your website. A new
Jekyll project will start with the [Minima](https://github.com/jekyll/minima)
theme, but this can be changed. Simply add the theme dependancy to the Gemfile
in your root directory and update the `_config.yml` file. If you don't like a
minor part of your theme (i.e. a layout segment or a style color), but don't
want to change the whole thing, you can override only the file that bothers
you, by creating a file at `_layout/layout_name.html` or
`_sass/style_name.scss` in your project directory.

While at first this might look like a lot of flexibility, we need to remember
that we're running the project on GitHub pages, meaning we have to abide their
rules regarding the allowed themes and dependencies. GitHub only has a small
[set of the themes that are supported](https://pages.github.com/themes/). Since
these themes look like they are made to showcase singular projects, not blogs,
it's interesting to look at alternative ways to achieve different, appealing
look fast.

## Avoiding limitations set by GitHub pages

Other than limiting which themes can be used, GitHub pages also limit which
[plugins](https://pages.github.com/versions/) can named in the Gemfile. One
look at the list shows us that a package named
[`jekyll-remote-theme`](https://github.com/benbalter/jekyll-remote-theme) is
allowed. With this package, you can name a GitHub repository containing any
theme you like and Jekyll will treat it as a gem-based theme. This, however,
still has its limitations, mostly regarding the dependencies of the remote
theme.

Another solution, and the one currently used at this site, is simply forking
an existing theme. Find a repository, fork it and rename the fork to
`github_username.github.io`. Again make sure that the forked theme doesn't use
any unsupported dependencies, or if it does, change its code appropriately.
Some themes are specifically made with this use case in mind (like the one on
this site), so they'll mention it specifically in their readme's or
documentations.

# Impressions (as far as they can go for now)

Using GitHub to host a blog site seems like quite a natural match. Markdown is
simple to use, but complex enough to express an average blog post, especially
when combined with
[Jekyll's front matter](https://jekyllrb.com/docs/front-matter/). Also, the
fact that it's on GitHub means that I have access to the editing history of
every post ever written on the site. Lastly, using branches, I can easily
separate site and post management. I can even reimplement the whole site
without breaking the current implementation and release the changes when they
are ready, but still retaining the old posts.

For my theme, I chose to fork [minimal mistakes by Michael
Rose](https://github.com/mmistakes/minimal-mistakes). This approach
immediately gave me access to a very well designed, but extensible theme, and
I have the entire code in a single repository with minimal dependencies. This
allows me a lot of flexibility for minor fixes, if neccessary. The theme itself
supports anything a modern blog could require, from post and portfolio
management, to small details like comment sections and archives. It also has
nine (at the time of writing this) different "subthemes" you can change in the
configuration file. Lastly, but most importantly, it's very well documented
and maintained with new releases on a monthly or bi-monthly basis and updating
is done with a simple pull from the original fork.

That's about as much as I can say for my impressions, since I've only been
using the service for a couple of days. Overall, I would say I like it because
it allows users to start writing almost instantly, but it also limits them
minimally (if we ignore the GitHub's limitations). I like the idea of a fully
editable site code and look forward to seeing how it would behave if I, for
instance, tried to integrate single page applications in it (i.e. using the Vue
library).

<disqus />
