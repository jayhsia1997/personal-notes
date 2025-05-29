---
sidebar_position: 1
---

# Box Model

## What is the CSS Box Model?

In CSS, every HTML element is a rectangular box, and the **Box Model** defines how the size of these boxes is calculated and how they interact with each other. The **Box Model** consists of four primary parts:

### 1. Content Box

The content box is the area where the actual content of the element is displayed. It is defined by the `width` and `height` properties.

```html
<p>Hello World</p>
```

```css
p {
  width: 200px; /* Width of the content box */
  height: 100px; /* Height of the content box */
}
```

### 2. Padding Box
 