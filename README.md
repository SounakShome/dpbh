Dark Pattern Detector
A browser extension to detect and highlight dark patterns in e-commerce websites. This tool empowers consumers by revealing potentially unfair or deceptive tactics used by websites to mislead customers.
Features

Detects and highlights dark patterns on e-commerce websites
Utilizes insights from open-source large language models (LLMs) such as LLAMA 2 and PaLM API
Compatible with Chrome and Firefox browsers
Reveals hidden costs
Verifies product information accuracy
Scrutinizes user reviews for authenticity

Tech Stack

Vite
VueJS
BeautifulSoup
LLAMA 2 / PaLM API

Installation
Chrome

Clone this repository or download the ZIP file.
Open Chrome and navigate to chrome://extensions/.
Enable "Developer mode" in the top right corner.
Click "Load unpacked" and select the extension directory.

Firefox

Clone this repository or download the ZIP file.
Open Firefox and navigate to about:debugging#/runtime/this-firefox.
Click "Load Temporary Add-on" and select the manifest.json file in the extension directory.

Usage

Navigate to an e-commerce website.
The extension will automatically scan the page for dark patterns.
Highlighted areas indicate potential dark patterns or deceptive tactics.
Click on highlighted areas for more information about the detected pattern.
