# Chatbot Widget Chrome Extension

A simple Chrome extension that injects a floating chatbot widget into web pages.  
The chatbot automatically appears a few seconds after page load, allowing users to send and display messages in a minimal chat interface.

---

## Features
- 🗨 **Floating Toggle Button** — Open or hide the chatbot anytime.
- ⏳ **Auto Popup** — Widget opens automatically 3 seconds after page load.
- 💬 **Simple Messaging** — Type a message and press Enter to see it in the chat log.
- 🎨 **Custom Styling** — Styled with `styles.css` for a clean UI.
- 🌍 **Universal Injection** — Runs on all websites matching `<all_urls>`.

---

## How It Works
1. **Content Script Injection**  
   - The extension injects `content.js` and `styles.css` into each matching webpage.
   - `<all_urls>` in `manifest.json` ensures it runs on all HTTP/HTTPS pages.

2. **DOM Creation**  
   - `content.js` dynamically creates:
     - A floating toggle button.
     - A chatbot container with header, messages area, and input field.

3. **Interactivity**  
   - Toggle button and close icon control visibility.
   - Messages appear in the chat area when the user presses Enter.
   - A timer automatically opens the widget after 3 seconds.

---

## Installation
1. **Clone this repository**:
   ```bash
   git clone https://github.com/yourusername/chatbot-widget-extension.git
   cd chatbot-widget-extension
