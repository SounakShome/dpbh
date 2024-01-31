// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "capturedClasses") {
    // Log classes in the background script
    console.log("Captured Classes:", message.classes);
    // Optionally, you can send the classes back to the content script or perform other actions
    // sendResponse({ response: "Classes received successfully!" });
  }
});
