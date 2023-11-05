# Remage

A modular toolkit to make static images interactive in react. 

[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/xuxey/remage)

It supports:

- Cross platform support for zooming and panning (thanks to [react-zoom-pan-pinch](https://www.npmjs.com/package/react-zoom-pan-pinch)) 
- Fully customizable _interactables_ that scale and move with the base image
- Reusable interactable components, with more advanced interactables coming soon!
- Freedom to Mix & Match any combination of interactables
- Built-in keyword based search 
- Typescript support

## Quickstart

> Remage is going to be launched as an npm package soon!

Import the remage components, and use the following props to configure it:

1. `src`: This is a path to the base image
2. `title`: Optional, Displayed above the remage and in the search bar
3. `interactables`: An Array of interactable objects with the following type:

```ts
type Interactable = {
  top: number,
  left: number,
  interactable: (state: {scale: number, positionX: number, positionY: number}) => React.ReactNode
}
```

### Sample Usage

More examples can be found on the [remage webpage](https://remage.pages.dev/)

```
<Remage
   src="base-img.png"
   title="Seven Wonders"
   interactables={[
      {
         top: "20%",
         left: "31.4%",
         interactable: () => {
            return <div>x</div>
         }
      }
   ]}
/>
```

# Authors

[Soham Kulkarni](https://github.com/xuxey)

[Suyash Nagumalli](https://github.com/faddock)
