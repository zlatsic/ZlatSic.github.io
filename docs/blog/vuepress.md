---
id: 3
title: Switching from jekyll to vuepress
excerpt: Describing the reasons for switching to vuepress
date: 2020-02-23
---

# {{$frontmatter.title}}

For the last month I've been busy switching from jekyll to the current
implementation, in vuepress. Here I will describe the reasoning, the process
and main benefits up until now.

## Motivation

I wanted to add Google Analytics to my jekyll site and it went well. Since I
used the mmistakes theme, its configuration lets you add this easily. The
problem came when I realized that I should probably also add the cookie policy
and popup to the site.

This was somewhat of a problem as I needed to dig deeper into the theme and
make the changes. I found a neat post explaining the process, however,
unfortunately, I still haven't managed to do it.

Minimal mistakes is a beautiful theme, but I had some minor annoyances with it,
automatic updating of the URL while you scroll being the worst one (completely
breaks the back button). I looked for a way to remove the configuration option,
but haven't managed to find it.

## Vuepress

I have some experience working with Vue.js and was excited to see that it has
its very own static site generator. Upon digging in, I realized that it fits my
needs perfectly, allowing basic static site generation features, but also
letting its users write their own Vue components. I started up the tutorial and
managed to relatively simply convert my exsiting jekyll blog into Vuepress. I
did find the documentation to be lacking some information, as it is mostly
written as a tutorial, not displaying some more advanced options I might have
wanted to use. So here I will document my journey and biggest blockers I
encountered, in case it helps anyone else going through something similar.

### Asset management

One difference from jekyll is the way assets are handled, and it took me a
while figuring this out. In jekyll, you place your assets into an assets
directory and access them from your markdown as if they were in the site's
root. In vuepress, this does not quite work that way, as assets need to be
placed into a public directory. The users also have the option of placing their
assets alongside markdown, allowing only that markdown file to have access to
them. This option actually proved to be better and I ended up using it, since
that way the assets are neatly organized and are still grouped into a common
assets directory after the site is built.

For example, let's take a look at my portfolio post about [using CV for light
control](../portfolio/light_control/).  The structure of the source directory
can be seen
[here](https://github.com/ZlatSic/ZlatSic.github.io/tree/master/docs/portfolio/light_control).
So the images are in the `images` directory and they are accessed from the
`readme.md` using a relative path. When vuepress site is built, the assets are
transferred into a common assets directory, seen
[here](https://github.com/ZlatSic/ZlatSic.github.io/tree/gh-pages/assets/img),
are given unique names and the links in the built HTML file are adapted to the
new locations. This way the assets are placed conveniently near the markdown
files that use them, but the built site still follows conventional directory
structure.

This approach, however, is not without its own problems - one that I ran into
relatively fast was how to have "local" non-image assets? I wanted to add a pdf
version of my CV, but, for the life of it, could not figure out how to add a
pdf asset. This is still an ongoing issue and if anyone knows the solution,
feel free to answer the [stackoverflow question](https://stackoverflow.com/questions/66318959/vuepress-download-link-for-a-file-with-relative-path).

### Custom components

Pretty fast I realized that the components available by the default are not
enough for my needs. I needed a footer containing my social info, comment
section, custom post feeds and various smaller widgets. This was where vuepress
really shined because addition of these components is trivial. It basically
comes down to implementing a Vue component with wanted behavior and including
it into markdown where needed. Markdown pareser vuepress uses can also parse
and render HTML, so this inclusion is simple, for instance, this is what my
markdown looks like if I want to include a comment section at the end (if the
component's name is disqus):

```markdown
Some regular markdown text

<disqus />
```

The footer was a bit more difficult to add, I first needed to wrap the default
theme with my custom global layout that would act as a wrapper and add custom
footer HTML to the bottom. Luckily, this process was [well
documented](https://vuepress.vuejs.org/theme/option-api.html#globallayout), as
it is probably a common use case. This is however labeled as "Danger zone" in
the documentation, so I might switch to a more sustainable approach, if this
one proves to be bad in the long run.

### Themes

I like vuepress' default theme, it is very minimalistic and clean. However, I
didn't like that there's no dark mode option, so I set onto a journey to figure
out how to achieve this. I was first very inspired and even decided to try
making my own theme and this proved to be a bit more difficult than I had
imagined. I won't say that creating my own theme was an impossible goal, it was
just biting off more than I could (or wanted) to chew.

Writing a theme can be a tedious affair, and I probably wouldn't recommend it
to someone just getting started with the framework and just wanting to focus on
creating content. There was a lot of small details that seemed really appealing
to add, but the amount of work needed to implement them seemed overwhelming,
all while the default theme had those details covered. This is, for instance,
the search function, responsive navigation adjustment, the main page... These
details are somewhat insignificant on their own, but add them together and the
final product is just somewhat hollow. So I decided to, for now, use the
default theme and leave the development of my own theme for better days.

The default theme, even though it is already set, is somewhat configurable. So
I was able to make some changes, like switching link colors from Vue's green to
maroon. There are also options that allow users to inherit themes, meaning I
could, at any point just inherit the default theme and adapt it to my liking.

### Plugins

This is a topic I haven't yet explored fully. Vuepress can be extended with
various plugins, allowing users to avoid having to make their own
implementation. So, for instance, if I didn't want to make my own disqus
comment section widget, I could have added a vuepress disqus plugin with my
package manager, configure my project to use the plugin and call it where
needed.

Another plugin I tried to make work is one for Google Analytics, the very straw
that broke the camel's back and made me switch to vuepress. For now, it seems
it is configured, but don't see any references to it in the virtual DOM of my
website and my activities are not visible on GA's dashboard, so I'm assuming
I'm doing something wrong. I've only just recently started setting it up, so
that's probably the reason.

## Conclusion

That's about it for the biggest problems and features I encountered so far. For
now, I really like the generator and plan to keep using it for a while, despite
some of the early drawbacks.

<disqus />
