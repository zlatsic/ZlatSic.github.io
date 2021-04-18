---
id: 3
categories: crypto
title: Starting out with crypto mining
excerpt: Detailing my first steps in mining ethereum
date: 2021-01-21
---

# {{$frontmatter.title}}

As of writing this blog post, crypto has passed the $1 billion market cap.
Might be a bit late to get into it, but who knows how its value will shift. I
decided to write this post to help any striving crypto beginners make their
decision whether to go into this and what were the first steps I took.

## Context

Recently I realized that my GTX 1050 Ti just wasn't cutting it when it came to
training deep learning models. I decided to buy a new GPU, and figured I'd
invest a bit in it, since I plan to be using it quite a lot in the future. I
made up my mind and decided to get the new RTX 3070, figuring that 5888 CUDA
cores are enough to satisfy my machine learning needs until retirement. I
ordered it, it cost almost as much as my whole computer did 3 years back, but I
figured it's an investment.

When the GPU came, I installed it with no problems and, after fiddling around
with the nVidia drivers on Linux, managed to set it up nicely. I was glad to
see my training times go down, but a realization suddenly hit me - I bought
this GPU and I can use it to train deep learning models, but why not also use
it when it's idle? Then I decided to look up crypto GPU mining.

I decided to try mining ethereum, since it's the second most popular
cryptocurrency after Bitcoin and, from reading various tech blog posts and
subreddits, it seemed like mining it with a GPU was still viable. Not to
mention that its prices jumped a couple of days earlier.

## Setting up

Since I already set up the GPU to train machine learning models, I already
installed all the neccessary drivers (nVidia kernel and CUDA). I did need to
upgrade my CUDA version to 11, since the older ones weren't supported on the
RTX 30 series. Next step was to download miner software. I chose
[PhoenixMiner](https://phoenixminer.org/), since, by user experience, it had
slightly better hash rates and devfees than their competition.

I also didn't have an ethereum wallet yet, so I needed to create that as well.
I used a command line tool called [geth](https://geth.ethereum.org/), a CLI
that allows you to perform various ether-related actions, such as creating a
new wallet or sending payments.

With everything underway, I was ready to get started with mining!

## A very hot pitfall

I started the miner and immediately realized that my PC was becoming really
hot. Big deal, I expected it, the Internet said it would. What I did not
realize was that it was getting too hot - the GPU consumption was through the
roof, everything was lagging until I killed the mining process. I checked out
the miners command line arguments and saw that there was an option for mining
intensity. I set it to a lower than default value and the problem stopped.
Lesson of the day, RTFM.

## Pitfall 2: electric boogaloo

My mining operation was now running smoothly, but I still wasn't getting the
hashrates I saw people online reporting with my GPU (even considering lower
intensity). So I decided to overclock my GPU. It turned out that my power
consumption was unneccessarily high so I dropped it from 280W to 130. I also
underclocked the GPU core clock, but overclocked the memory clock. I used the
guide found
[here](https://www.nicehash.com/blog/post/nvidia-rtx-3000-series-overclocking-guide-to-increase-mining-profits)
to get the idea how much should I set my values.

Now my mining was being done using less power, meaning the PC wasn't getting as
hot as it used to (the GPU is around 57°C most of the time), but a new problem
was introduced - the miner started reporting incorrect shares.

## Incorrect shares

Shares are, from a layman's perspective, proof of work you do within your ether
mining pool. It can happen that a share is incorrect - meaning you don't
receive ether for that share and that, basically, you worked for nothing on
that share. With the setup I described above, I received around 50% incorrect
shares, which was unacceptable.

Luckily, tweaking my overclock settings proved to be enough to solve this. I
dropped the memory overclock frequency and managed to get it working well
(around 1 in 1000 shares is incorrect with the current setup).

## Affordability

I am currently working on around 50 MH/s which nets me around 0.00311 ETH
daily - which, at the current value of ether, is around $4. Monthly, that gives
me projections of earning between $100 and $150 (the price fluctiates and I
have occasional downtimes).

I don't know the exact numbers when it comes to electric consumption, but I
don't think that the increase will be too large, I expect additional $6 to my
standard costs - before mining, the PC was on most of the time, the biggest
change now is that it stays on overnight as well. I can't calculate the exact
change in consumption since what's relevant is not the exact consumption of the
PC at the moment, but the difference from before I started mining. In any case,
if my calculation was totally off, an increase up to 20-30% of the expected
monthly profits is still acceptable.

A thing that worries me more than electric consumption is the volatility of the
currency itself. Ether is currently in a spike, meaning it might go down,
meaning my $100 to $150 goes down as well. 1 ether is currently $1300, while,
before the rapid growth it received in the last 2 months it was around $400,
which means I might need to divide my monthly earnings with 3 if I want to be
pessimistic. Still, the projections of people who do this for a living say it
should grow, so maybe I worry uneccessarily. The fact I can't cash in at any
time, but only after I pass the payout threshold on my pool of the mined ether
(0.2eth - around 2 months) doesn't help with the sense of security. Either way,
I'm not investing much into this anyway, so whatever happens, the risk is not
too great.

## Conclusions

I described my setup, some problems I faced while getting to work and the
current worries that I have regarding the affordability of the whole endevour.
I hope this helps anyone making their mind whether they should get started with
mining. I might update this post according to changes in the market, but the
edits will be clearly marked.

<disqus />
