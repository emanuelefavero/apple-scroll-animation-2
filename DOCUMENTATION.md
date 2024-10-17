# AppleScrollAnimation Component Documentation

The `AppleScrollAnimation` component is a React component that implements smooth scrolling animations using `framer-motion`. It is designed to display a sticky image with animated effects (scaling, rotating, and fading out) as the user scrolls, along with a content overlay that animates in and out.

### Features

- **Sticky Image**: The image remains fixed (sticky) while scrolling, animating based on the scroll progress.
- **Image Animations**: The image's scale, opacity, and rotation are controlled by the scroll position `scrollYProgress` (thanks to Framer Motion `useScrol` hook). The range of animation can be easily adjusted inside the `useTransform` hook
- **Overlayed Text**: A subheading and heading text overlay animates into view as the image scrolls. This text also fades and moves vertically during scrolling.

> TIP: With minor adjustments, you can also add other content inside or around the `AppleScrollAnimation` component.

### Usage

```jsx
<AppleScrollAnimation
  imgUrl='https://example.com/image.jpg'
  subheading='Subheading Text'
  heading='Main Heading Text'
/>
```

> TIP: You can use multiple `AppleScrollAnimation` components to create a series of scrolling sections with different images and texts.

### Customization

- **`imgUrl`**: URL of the image to be displayed in the background.
- **`subheading`** & **`heading`**: Text to be displayed in the overlay.
- **Adjustable Animations**: The scrolling effect for the image's opacity, scale, and rotation, as well as the text's vertical position and opacity, can be customized by modifying the animation ranges.

### Dependencies

- `framer-motion`: The component uses the `useTransform` and `useMotionValue` hooks from `framer-motion` to animate the image and text based on the scroll position.
- `react`: The component is built using React.
