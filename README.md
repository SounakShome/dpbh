# Dark Pattern Detector
A browser extension to detect and highlight dark patterns in e-commerce websites, leveraging insights from open-source large language models (LLMs) such as LLAMA 2 and PaLM API.

## Features

* Detects and highlights dark patterns on e-commerce websites
* Compatible with Chrome and Firefox browsers
* Reveals hidden costs
* Verifies product information accuracy
* Scrutinizes user reviews for authenticity
* Utilizes DOM manipulation through browser extensions

## Tech Stack

* Vite
* VueJS
* BeautifulSoup
* LLAMA 2 / PaLM API

## Installation
**Chrome**

1. Clone this repository or download the ZIP file.
2. Open Chrome and navigate to [chrome://extensions/](chrome://extensions/).
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the extension directory.

**Firefox**

1. Clone this repository or download the ZIP file.
2. Open Firefox and navigate to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox).
3. Click "Load Temporary Add-on" and select the [manifest.json](manifest.json) file in the extension directory.

## Usage

1. Navigate to an e-commerce website.
2. The extension will automatically scan the page for dark patterns.
3. Highlighted areas indicate potential dark patterns or deceptive tactics.
4. Click on highlighted areas for more information about the detected pattern.
