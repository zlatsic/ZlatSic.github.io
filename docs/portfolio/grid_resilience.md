---
id: 3
title: |
    Complex network analysis of power grid's resilience to cascading failures
excerpt: |
    Applications of various complex network analysis methods on Croatian
    high-voltage power grid.
thumbnail: '/assets/img/portfolio/thumbnails/grid_resilience.png'
---

# {{$frontmatter.title}}

This was one of the projects I worked on for my PhD subjects. We used publicly
available info on Croatian high-voltage power grid, converted it into a network
and applied various complex network analysis methods to analyze its resilience
to cascading failures. The results of the project were presented at a
conference and in the paper available
[here](https://ieeexplore.ieee.org/document/9245160).

The main takeaways I got from the project is usage of various network modeling
tools. First I used [Gephi](https://gephi.org/) to create a graph
representation of the Croatian power grid. Then, to parse Gephi graphs and
apply CNA methods, Python and [networkx](https://networkx.org/) were used. We
also attempted to pyhsically model the network and simulate various power flows
using [pandapower](http://www.pandapower.org/).
