---
id: 2
categories: technologies
title: "My mouseless (ish) setup"
excerpt: "Describing the tools and technologies I use to work keyboard-only"
date: 2019-05-02
---

# {{$frontmatter.title}}

Near the end of 2018, I had a conversation with a developer friend where we
talked about the editors we use to do our jobs. At the time, I was a devoted
VSCode user, and was perfectly happy with my setup. He, on the other side, was
pitching Vim. This got me curious, so I installed a VSCode plugin that
[emulates Vim in the editor](https://github.com/VSCodeVim/Vim). The plugin
worked well (for a start) and it got me intrigued with how different writing
software can be when you exclude the mouse. At that moment, I decided to
challenge myself - I'm ditching the mouse in 2019.

Kind of. I can't really ditch it completely since I sometimes develop web
applications and mouse is vital to any kind of UX testing. Also, my window
manager can be somewhat inefficient when used without mouse. In any case, in
this article I will cover some of the main technologies I use today. I might
update the article in case I switch to something else.

# Window manager

The operating system I use at the moment is Linux Mint 19. I mostly use it
since I'm familiar with the Mint's user interface and feel comfortable working
with it. For the window manager I use [Xfce](https://xfce.org/). I'm content
with it as it's quite light-weight and customizable, unlike Cinnamon I used in
the past.

Window manager is somewhat important when it comes to my mouseless setup, since
I need to be as efficient as possible when moving windows. Xfce, by default,
does this well to a certain extent. When combining some F keys and Alt, you can
minimize, maximize, restore, move and resize the windows. These commands work
well, but I found that they can be slow to use. For instance, if you wanted to
move a window, you'd have to press Alt+F7 and then use the arrow keys to move
the window to the desired location. The problem I had with this command was
that movement ticks of the window were too small, making the movement very
slow. For this reason, I installed an additional tool,
[wmctrl](https://linux.die.net/man/1/wmctrl), to implement my own scripts for
window management I would later assign to different keyboard shortcuts. My main
use case when moving a window is to move it to the next monitor, so I found a
[script](https://github.com/jc00ke/move-to-next-monitor) online that implements
that behaviour, slightly modified it to my needs, and am using it now instead
of Alt+F7.

Overall, I'm mostly happy with Xfce. There are some problems like lack of
keyboard access to the panels and the settings panes are also hard to control
without the mouse. Most of the times when I use a mouse, it's in one of these
situations. Still, these cases are somewhat rare, so I wouldn't say that I'm
violating my New Year's resolution.

# Browser

Using the browser is a large part of my job. After all, that's where the
StackOverflow is. Because of this, it can be a bit tough to just ditch your
mouse and use arrow keys to scroll and mash tab until you get to the link you'd
normally just click. I'm not too familiar with how other browsers handle this,
but Chromium is not too cooperative.

Enter [Vimium](https://github.com/philc/vimium). Vimum is a Chrome plugin that
does multiple adjustments allowing you more keyboard control (using Vim-like
keyboard shortcuts). Some of these adjustments are:

* Vertical and horizontal scrolling with h, j, k, l.
* Opening, switching and closing tabs. Accessing bookmarks and address bar.
* Visual mode for text selection.
* Pressing f finds all clickable items like links or input fields on the page
  and shows unique character combinations next to them. When you input the
  combinations, it acts as if you have clicked the item.

All these key combinations can be configured in the plugin settings. There's
probably more actions it allows, but this is what I mostly use on day-to-day
basis.

Vimium is quite neat, but I did, however, find some disadvantages to using it.
One of the problems is that the keyboard shortcuts are similar to Vim's, but
there are small differences. When you start using Vim, you learn a lot of these
shortcuts only to discover that they don't work in your browser, or even worse,
they do something different. However, this is more of a small pet peeve instead
of a problem since all the shortcuts are configurable and can even override
browser actions. The largest problem I had was with scrolling in cases when
there are more scrollbars on the screen. Vimium offers a "next frame" shortcut,
but that doesn't always work. In these cases I was forced to use my mouse.
Another annoyance were input fields - I'd often try scrolling the page and
wondering why doesn't it move until I'd see "jjjjjjjkjjjkjjkkkkkjkjj" written
in an auto-focused input field. Again - technically not Vimium's fault, but  it
does mess with the experience.

Vimium has it's disadvantages, but they are all relevant in very specific
corner cases. It still has the best keyboard-based browser control I've ever
seen and I recommend installing it even if you didn't make any ridiculous New
Year's resolutions since it doesn't interfere with your vanilla browser
experience.

# Mail client

This is the latest addition to the company of the mouseless tools I use. It
would be logical to assume I can just use web mail services through my
Vimiumized browser. Well, a small number of webpages doesn't work well with
Vimium. Luckily for me, Outlook's web mail service is one of those pages, so I
had to come up with a different solution. After a little searching I stumbled
upon a Reddit thread about terminal based e-mail clients where a lot of people
recommended using [mutt](http://www.mutt.org/).

Mutt is a terminal based e-mail client that is highly configurable and,
honestly, a bit tough to set up. However, the documentation is very detailed
and well written, so you should be able to configure everything if you follow
it properly. Or you can be like me and just use the dotfiles you found online.
Jokes aside, there are some pretty comprehensive configurations out there and
seeing examples can help you figure things out if you get stuck on the
documentation, just make sure you understand everything that is written in the
configuration you downloaded.

When using mutt for the first time, user could be confused since the controls
are different from other terminal based programs like Vim. They are, however,
easy to get used to since there's not a lot of them. They can also be changed
in the configuration. Cool thing about mutt is that it forces it's controls on
you only when reading e-mails. When you want to compose a new message, you can
write your e-mails in you favourite editor. You can also assign commands to
MIME types depending on which programs you'd like to open them in. That way I
can, for instance, assign the type `text/html` to Chromium and open the e-mails
in the browser.

I was pretty satisfied with mutt after I've passed the initial learning curve.
One thing I was dissatisfied with was that the community was quite small and
that it was difficult to search for solutions when I'd get stuck (the fact that
the name of the program is a somewhat common English word didn't help either).
Also I haven't even started trying to use the calendar features. Overall, I
couldn't find a better alternative to it, so I'd recommend mutt mostly if you'd
like to learn better how e-mail clients work or you made a silly New Years
resolution.

# Editor

Like I said in the introduction, when I embarked on this journey I was a VSCode
enthusiast. I'd still recommend it to anyone who needs a plugable code editor
or a visual debugger. The amount of maintenence and support that Microsoft puts
into it really pays off. When it comes to mouseless control, VSCode acts
acceptable, but nothing more than that. When I first started implementing my
challenge, I downloaded the Vim emulator plugin that enables some of the
shortcuts. Using this with the F1 toolbar (similar to Ctrl + P in Atom - fuzzy
file finder and quick command access) I was able to last a couple of weeks, but
I saw that this wasn't a long term solution. Too often I'd need to use the
mouse to perform an action that the solutions I used at the time weren't
covering. For this reason I switched to [Vim](https://www.vim.org/).

I really don't think I need to write a lot about Vim's functionalities since
its reputation precedes it. I must say, however, that the learning curve was a
lot milder than I expected. It took me a couple of days to set up initial
plugins and dotfiles and about a week to get used to basic workflow in the
editor itself. I kept updating my setup and learning new command combinations
afterwards without much pain. Also, using tmux alongside for quick switching
from and to other terminals proved to be essential.

I didn't try many alternatives to Vim, when it comes to terminal based editors,
but I must say I'm quite pleased with the Vim community since if offers so
much. There are many user written
[tutorials](https://vim.fandom.com/wiki/Vim_Tips_Wiki) and even
[books](https://www.amazon.com/Practical-Vim-Edit-Speed-Thought/dp/1680501275)
about using Vim, which I don't think any other editor has at this level.

People often ask me whether Vim was an overkill in my challenge, but I couldn't
disagree more. When an editor forces you to communicate with it solely through
arrays of symbols, this communication grows almost into a language of a sort.
Often times when using Vim, I'd get astonished at the amount of power and
control I have over my code with well selected commands. This, I'd say, is my
main reason why Vim is currently my favourite editor.

Plus, you get to make fun of people whose editors are
[not Turing complete](https://github.com/ealter/vim_turing_machine).

# Conclusion

So far, my experiences with the mouseless work have been fun. I can definitely
say I've tried out and learned new things. I have also seen disadvantages to
this kind of work, but it's all just a matter of different trade-offs.
Keyboards offer you fast way of inputting textual commands, but sometimes you
need the almost pixel-wide precision a mouse offers. In any case, I'm
continuing my challenge, hopefully until the end of the year, and updating this
post in case I come up with something new. Also, in case anyone is actually
reading this and has ideas I haven't tried out, let me know in the comments
below.
