# chrome-badge

[![npm version](https://badge.fury.io/js/chrome-badge.svg)](https://badge.fury.io/js/chrome-badge)
![build](https://github.com/ryohidaka/chrome-badge/workflows/Build/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B6TVH92)

## Overview

Helper for displaying badges in `chrome.action` API.

## Installation

You can install this library using npm:

```shell
npm install chrome-badge
```

## Methods

### `set`

Sets the text color and background color for badge of the action. The badge is displayed on top of the icon.

```typescript
import { Badge } from "chrome-badge";

const text = "999";
const backgroundColor = "red";
const textColor = "white";

Badge.set({ text, textColor, backgroundColor });
```

### `get`

Gets the badge text of the action. If no tab is specified, the non-tab-specific badge text is returned.

```typescript
import { Alarm } from "chrome-alarms";

const badge = await Badge.get();
console.log(badge);

// Output:
//   Object{
//     backgroundColor: Array(4) [255, 0, 0, 255],
//     text: "999",
//     textColor: Array(4) [255, 255, 255, 255]
//   }
```

## Link

- [chrome.action](https://developer.chrome.com/docs/extensions/reference/api/action)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
