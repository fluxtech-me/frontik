# Button

## Table of Contents

- [**Props**](#props)
- [**Customization With CSS/SCSS**](#customization-with-css/-scss)
- [**Button Without MaterialUI**](#button-without-materialui)

## Props

|        Name        |  Type   |                      Values                       |     Default      |                                                                        Description                                                                        |
| :----------------: | :-----: | :-----------------------------------------------: | :--------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     `disabled`     | Boolean |                    true/false                     |      false       |                                                            Makes button state disabled/enabled                                                            |
|     `loading`      | Boolean |                    true/false                     |      false       |                                                                Change button loading state                                                                |
|       `size`       | String  |               small, medium, large                |      medium      |                                                           The more common sizes of the button.                                                            |
|      `color`       | String  | primary, secondary, success, error, info, warning |     primary      |                                         The color of the button. It supports both default and custom theme colors                                         |
|    `className`     | String  |                                                   |                  |                                                   Override or extend the styles applied to the button.                                                    |
|     `children`     |  node   |                                                   |                  |                                                                The content of the button.                                                                 |
| `loadingIndicator` |  node   |                                                   | CircularProgress | Element placed before the children if the button is in loading state. The node should contain an element with role="progressbar" with an accessible name. |
| `loadingPosition`  | String  |                start, end, center                 |      center      |                                                  The loading indicator can be positioned in the button.                                                   |
|     `endIcon`      |  node   |                                                   |                  |                                                               Element placed after children                                                               |
|    `startIcon`     |  node   |                                                   |                  |                                                              Element placed before children                                                               |
|     `variant`      | String  |             outlined, text, contained             |       text       |                                Three common variants for button, any of which you can customize with overriding classnames                                |

#### **[Back to top](#table-of-contents)**

## Customization With CSS / SCSS

- ClassName
  - You can override the style of the button using your own classname with selecting and overriding `MaterialUi v5` default classnames. More about of default classnames you can know folow this link https://mui.com/material-ui/api/button/#css.
  - Also you can use other variants of styles customization provided by `MaterialUi v5`. More about styles customization systems in `MaterialUi v5` you can know folow this link https://mui.com/material-ui/customization/how-to-customize/

#### **[Back to top](#table-of-contents)**

## Button Without MaterialUI

Also we have `NativeButton` component for situations if your project doesn't support MaterialUI v5

- `NativeButton` component has same `interface`([**Props**](#props)) as the `Button` component
- `NativeButton` styles customization

  - You can customize `NativeButton` component with overriding default classnames
  - There is a formula by which you can selcet default classnames and override there `fts-btn-{variant/color/size/state}`
  - `variant` is a special sufix by wich you can select specific `variant` of button and affect all of `color/size/state` types of this variant
  - `state` is a style sufix for `loading/disabled` state
  - For Example

    ```jsx
    //example.js
    <NativeButton
      className="my-own-classname"
      color="primary"
      variant="outlined"
      size="small"
      disabled={true}
      startIcon={<SwapVerticalCircle />}
      endIcon={<SwapVerticalCircle />}
    >
      ClickMe
    </NativeButton>
    ```

    ```scss
    // example.scss
    .my-own-classname {
      &.frontik-btn-outlined {
        font-family: "Courier New", Courier, monospace;
        border-radius: 10px;
      }

      &.frontik-btn-primary {
        border: 1px solid black;
        color: purple;
        &:hover {
          background-color: grey;
        }
      }

      &.frontik-btn-small {
        padding: 3px 5px;
      }

      &.frontik-btn-disabled {
        pointer-events: none;
      }
    }
    ```
