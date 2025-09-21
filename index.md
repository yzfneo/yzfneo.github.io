---
layout: default
title: Home
---

# Welcome to Neo's Blog

This is my personal blog where I share thoughts, projects, and updates.

## Recent Posts

{% for post in site.posts %}
### [{{ post.title }}]({{ post.url }})
*{{ post.date | date: "%B %d, %Y" }}*

{{ post.excerpt | default: post.content | strip_html | truncatewords: 30 }}

[Read more →]({{ post.url }})
{% endfor %}

## About This Blog

This blog covers topics including:
- Personal projects and updates
- Technology insights
- Development tutorials
- Open source contributions

Stay tuned for more content!
