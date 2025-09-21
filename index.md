---
layout: default
title: Home
---

# Neo's Blog

## Recent Posts

{% for post in site.posts %}
### [{{ post.title }}]({{ post.url }})
*{{ post.date | date: "%B %d, %Y" }}*

{{ post.excerpt | default: post.content | strip_html | truncatewords: 30 }}

[Read more →]({{ post.url }})
{% endfor %}
