# Major Type of Events

## Mouse Events: Triggered by interactions with a mouse or pointing device.

### click: A user clicks an element.

### dblclick: A user double-clicks an element.

### mousedown/mouseup: A mouse button is pressed down or released over an element.

### mousemove: The pointer moves while over an element.

### mouseover/mouseout: The pointer moves onto or away from an element.

### mouseenter/mouseleave: Similar to mouseover/mouseout, but they do not bubble to ### child elements.

## Keyboard Events: Triggered by user interaction with the keyboard.

### keydown: A key is pressed down (can fire multiple times if held).

### keyup: A key is released.

### keypress: (Deprecated) Used for character input.

### Form Events: Related to interaction with form elements.

### submit: A form is submitted.

### change: The value of an input element changes (e.g., after selecting a different option in a dropdown or blurring an input field).

### input: Occurs when an element gets user input (fires immediately as the value changes).

### focus/blur: An element gains or loses focus.

## Window Events: Triggered by actions on the browser window or document.

### load: The browser finishes loading the page and all its resources.

### unload/beforeunload: The visitor leaves the current webpage.

### resize: The browser window is resized.

### scroll: A scrollbar is being scrolled.

### DOMContentLoaded: Fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets and images.

## Touch Events: Triggered by user interaction with touch-sensitive screens (common on mobile devices).

### touchstart: A finger is placed on a touch screen.

### touchmove: A finger is dragged across the screen.

### touchend: A finger is removed from a touch screen.

# [More about events click](https://www.w3schools.com/js/js_events.asp)

# Time Stamp Event

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Event timeStamp</h1>

    <p>
      Click the button to get the number of milliseconds from this document was
      loaded until the button was clicked.
    </p>

    <button onclick="myFunction(event)">Click me!</button>

    <p>Time since this document was loaded: <span id="demo"></span></p>

    <script>
      function myFunction(event) {
        var n = event.timeStamp;
        document.getElementById("demo").innerHTML = n;
      }
    </script>
  </body>
</html>
```
