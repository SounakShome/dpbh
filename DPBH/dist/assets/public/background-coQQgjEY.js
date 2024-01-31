chrome.runtime.onMessage.addListener((e,s,n)=>{e.action==="capturedClasses"&&console.log("Captured Classes:",e.classes)});
