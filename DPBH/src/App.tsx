// App.tsx
import browser from 'webextension-polyfill';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [capturedClasses, setCapturedClasses] = useState<string[]>([]);

  const onclick = async () => {
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    console.log({browser})

    browser.scripting.executeScript({
      target: { tabId: tab.id as number },
      func: () => {
        const allClasses = [];
        const allElements = document.querySelectorAll('*');

        for (let i = 0; i < allElements.length; i++) {
          const classes = allElements[i].className.toString().split(/\s+/);
          for (let j = 0; j < classes.length; j++) {
            const cls = classes[j];
            if (cls && allClasses.indexOf(cls) === -1)
              allClasses.push(cls);
          }
        }

        browser.runtime.sendMessage({ action: "capturedClasses", classes: allClasses });
      },
    });
  };

  // Listen for messages from background script
  useEffect(() => {
    browser.runtime.onMessage.addListener((message) => {
      if (message.action === "capturedClasses") {
        setCapturedClasses(message.classes);
      }
    });
  }, []);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" rel='noreferrer' target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" rel='noreferrer' target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>My Extension</h1>
      <div className="card">
        <button type='button' onClick={() => onclick()}>Capture HTML Classes</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h2>Captured Classes:</h2>
        <pre>{JSON.stringify(capturedClasses, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
