---
layout: default
title: Cluster
tags:
    - components
---

Use Cluster for laying horizontal "stacks". Things like tags, meta data etc.

## Basic Usage

```html
<!-- Cluster must have an outer parent container -->
<div class="cluster">
	<!-- First child should contain the things you want to layout -->
	<ul>
		<li class="bg-blue-500 c-blue-100 radius-md px-4 py-1">
			HTML
		</li>
		<li class="bg-blue-500 c-blue-100 radius-md px-4 py-1">
			CSS
		</li>
		<li class="bg-blue-500 c-blue-100 radius-md px-4 py-1">
			Javascript
		</li>
	</ul>
</div>
```

{{ collections.componentExample[1].templateContent | example }}

### Properties

Custom Properties for this component are shown below with their default values.

-   `--cluster-space: var(--space-2)` Space between items
