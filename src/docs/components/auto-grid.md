---
layout: default
title: Auto Grid
tags:
    - components
---

Use Auto Grid to layout flexible grids, such as a Gallery, for example.

## Basic Usage

```html
<div class="auto-grid">
    <!-- These items will automatically create a grid -->
    <img src="/images/photo.jpg" alt="" />
    <img src="/images/photo.jpg" alt="" />
    <img src="/images/photo.jpg" alt="" />
</div>
```

{{ collections.componentExample[0].templateContent | example }}

### Properties

Custom Properties for this component are shown below with their default values.

-   `--min-width: 10rem` Minimum width for grid items.
-   `--gap: var(--space-4)` Gap between grid items.
