---
id: 6
title: Tech recap 2022
excerpt: Looking back on things learned in this year
date: 2022-12-25
---

# {{$frontmatter.title}}

As I'm relaxing on my Christmas break I giving myself an overview of all the
new things I learned over this year. It turned out to be more difficult than I
anticipated, motivating me to write a more detailed overview. It seems like a
good idea to do this every winter break so I might do it in the following
years, as well.

## Docker improvements

In 2021 I started to work more seriously with docker containers, as one of the
products we developed had a distribution in the form of a container. This year
I took it further and focused on using docker compose, to orchestrate multiple
containers at the same time. This proved to be useful knowledge for my current
postion, but also for some interview assignments I took and implemented.

There are several motivations to compose multiple docker container instances.
The main one is organization - shoving all components into a single image can
be difficult from this standpoint. An additional advantage to composing that I
found is that it is actually one of the first points where applications can be
scaled. The interface that it provides to users allows them to run an arbitrary
amount of container instances, simulating horizontal scaling.

I am very glad to have access to this new tool, but I still see some potential
for improvements in this realm in general. Kubernetes seem like a natural
progression from this point and I hope to have a chance to use them in my
future projects. I have also tried using GCP to host a docker image, which, if
you're reading this post, still works great.

## Python frameworks

This year I managed to further improve my understanding of
[Flask](https://flask.palletsprojects.com/en/2.2.x/) and also tried out
[FastAPI](https://fastapi.tiangolo.com/). I have had some prior experience with
Flask, but this year I developed several projects with it. The two main ones
were for my job and for a job interview project that I developed. Using Flask
only further reaffirmed why I prefer working with microframeworks as they feel
like they give me a large amount of control, while taking care of the "boring"
stuff.

I wanted to try out FastAPI since I talked to some developers that have it in
their tech stack, and I was pleasantly suprised. Since I already liked Flask
and FastAPI has similar interfaces, I naturally also enjoyed working with it. A
relatively new concept, at least in the Python world, was the use of dependency
inversion using the `Depends` class. I found the whole implementation to be
really elegant and hope to get a chance to further use it in some of my later
projects.

## OpenAI APIs

Over the last month there was a whole uproar over the newly released
[ChatGPT](https://chat.openai.com/) beta. Since I also found it fascinating,
and I have a technical background, my social networks started showing me ads
for AI hackatons that encourage the use of such tech. I ran into a
[lablab.ai](https://lablab.ai) competition that revloved around using
[Whisper](https://openai.com/blog/whisper/),
[Codex](https://openai.com/blog/openai-codex/), [text
completion](https://beta.openai.com/docs/guides/completion), or
[DALL-E](https://openai.com/dall-e-2/). I figured why not, and enrolled.

Unfortunately, I haven't made a submission to the competition as I didn't have
time to implement a rounded product, but still had time to play around with
some of the APIs, mainly text completion and DALL-E. Both of these APIs are
HTTP based and there is a Python implementation by OpenAI that can be used for
simpler access.

The simplest use case for the text completion API is giving it a simple
prommpt and awaiting a response to it. The prompt can, for instance, be
"Summarize this paragraph in 10 words:", followed by a long paragraph, and the
model will return the summary. Another, even simpler way to use this model is
by starting to write a story, stopping midway, and seeing how the model will
continue. The API also allows some more advanced techniques, like further model
fitting, where users can give prompt-continuation pairs, and the API will train
a custom model using that data.

DALL-E is an image generation and manipulation model. Its API takes a prompt
and returns an image that corresponds to that prompt. The prompt can be
anything, from a random sentance to instructions on the artistic style that
needs to be employed. DALL-E API also has an interface for image manipulation,
where users can provide an image, label areas of the image, and using a prompt
modify the labeled areas, like inserting new components.

Since my time working with this tech was mostly cut short from other
obligations, I still feel the need to keep trying it out and hopefully, in the
future, there will still be opportunities to use this in concrete projects.
There are new similar hackatons on horizon, so new opportunities will surely
arise.

## Go

Near the end of the year I have accepted a new job offer where Python is still
the main programming language, but [Go](https://go.dev/) is also used for
performance-heavy operations. This motivated me to start learning it even
before starting with the role and it has been a positive experience so far.

It was a bit unusual to go back to a compiled, statically typed language, but
Go makes it as painless as possible with its dynamic type assignment. Another
"big" shock was lack of classes, but structures with their receiver methods
seem to be a satisfactory replacement. I haven't fully utilized object-oriented
design in Python anyway, so I won't be missing things like inheritance too
much.

Go's design philosophy seems to go well with the ideas I've learned over the
last 6 years, with prioretization of working with immutable data structures or
allergy to using shared memory to communicate between different system
components.

I still haven't written a larger project in Go, but this might change soon, as
I do have some ideas for different services. Some of them might be
implementable with this language, so it might be worth giving a shot. I also
solve Advent of Code, and might translate some of my Python solutions into Go.
I would still like to see a practical, web-based service using Go so this would
probably not be enough.

# Conclusion

It was a good year where I've finally addressed some tech I probably should
have tried out much earlier. Still, there is a lot of room for improvement,
both with all of the mentioned tech and with new tools I haven't tried out yet.
I already mentioned Kubernetes as one such potential tool, there are probably
additional ones that could be useful as well.

This year has been a bit poor when it comes to databases and different key
stores, which I hope to remedy in the next year as well. Lastly, I'm not much
of a frontend developer, but I still like to try out a new framework every now
and then. My main frontend framework up to this point has been Vue, but I'm
noticing a trend where more and more devs are using Svelte, so it might be
interesting to try that out, as well. Since I am chainging jobs at the start of
the next year, I am very optimistic and have no question I will get to work
with at least some of these technologies.

<disqus />