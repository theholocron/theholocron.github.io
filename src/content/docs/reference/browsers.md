---
title: Browsers & Devices on Which We Test
description: This document describes the governance and decision-making process for the @theholocron organization.
---

We support the [latest, stable releases](https://browserl.ist/?q=%3E+5%25+in+US%2C+not+ie+11%2C+not+op_mini+all) of all major browsers and platforms based on the most [common usage from stats](./browserslist-stats.json) accumulated in Google Analytics. We use [caniuse.com](https://caniuse.com/) programmatically to determine support and [browserl.ist](http://browserl.ist/) to determine usage based on strings we provide. This technically translates to the [> ~0.03% in my stats](http://browserl.ist/?q=%3E+5%25++in+US), excluding IE11 and Opera Mini using **not ie 11, not op_mini all**.

Check out the README within the repository for the specifics of browsers we support. That being said, we do test on a larger set of browsers to ensure backwards-compatibility as well as more cutting edge browsers to see what future features we maybe able to utilize. Below is a general list of browsers we should be testing on:

#### Mobile devices

Generally speaking, we support the latest versions of each major platform's default browsers. Note that proxy browsers (such as Opera Mini, Opera Mobile's Turbo mode, UC Browser Mini, Amazon Silk) are not supported.

| Device | Chrome | Firefox | Safari | Android Browser & WebView | Microsoft Edge |
| ------ | ------ | ------- | ------ | ------------------------- | -------------- |
| Android | Supported | Supported | N/A | Android v5.0+ supported | N/A |
| iOS | Supported | Supported | Supported | N/A | N/A |
| Windows 10 Mobile	 | N/A | N/A | N/A | N/A | Supported |

#### Desktop browsers

Similarly, the latest versions of most desktop browsers are supported.

| OS | Chrome | Firefox | Internet Explorer | Microsoft Edge | Opera | Safari |
| -- | ------ | ------- | ----------------- | -------------- | ----- | ------ |
| Mac | Supported | Supported | N/A | N/A | Supported | Supported |
| Windows | Supported | Supported | Not supported | Supported | Supported | Not supported |

For Firefox, in addition to the latest normal stable release, we also support the latest [Extended Support Release (ESR)](https://www.mozilla.org/en-US/firefox/organizations/faq/) version of Firefox.

Unofficially, it should look and behave well enough in Chromium and Chrome for Linux, Firefox for Linux, and Internet Explorer, though they are not officially supported.

