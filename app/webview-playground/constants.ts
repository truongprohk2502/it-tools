export enum WebViewFileType {
  HTML = "index.html",
  CSS = "style.css",
  JS = "script.js",
}

export const DEFAULT_HTML_CODE = `<h1 id="header"></h1>`;

export const DEFAULT_CSS_CODE = `body {
  background: greenyellow;
  color: red;
  padding: 0 24px;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const DEFAULT_JS_CODE = `const message = 'Hello world' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)
`;

export const OVERRIDE_CONSOLE_IFRAME = `
const originalConsoleLog = console.log;
console.log = function () {
  originalConsoleLog.apply(console, arguments);
  window.parent.postMessage({ type: 'log', info: Array.from(arguments) }, '*');
};

const originalConsoleError = console.error;
console.error = function () {  
  originalConsoleError.apply(console, arguments);
  window.parent.postMessage({ type: 'error', info: Array.from(arguments) }, '*');
};

const originalConsoleWarn = console.warn;
console.warn = function () {  
  originalConsoleWarn.apply(console, arguments);
  window.parent.postMessage({ type: 'warn', info: Array.from(arguments) }, '*');
};

const originalConsoleInfo = console.info;
console.info = function () {  
  originalConsoleInfo.apply(console, arguments);
  window.parent.postMessage({ type: 'info', info: Array.from(arguments) }, '*');
};

const originalConsoleDebug = console.debug;
console.debug = function () {  
  originalConsoleDebug.apply(console, arguments);
  window.parent.postMessage({ type: 'debug', info: Array.from(arguments) }, '*');
};

const originalConsoleTable = console.table;
console.table = function () {  
  originalConsoleTable.apply(console, arguments);
  window.parent.postMessage({ type: 'table', info: Array.from(arguments) }, '*');
};

const originalConsoleClear = console.clear;
console.clear = function () {  
  originalConsoleClear.apply(console, arguments);
  window.parent.postMessage({ type: 'clear', info: Array.from(arguments) }, '*');
};

const originalConsoleTime = console.time;
console.time = function () {  
  originalConsoleTime.apply(console, arguments);
  window.parent.postMessage({ type: 'time', info: Array.from(arguments) }, '*');
};

const originalConsoleTimeEnd = console.timeEnd;
console.timeEnd = function () {  
  originalConsoleTimeEnd.apply(console, arguments);
  window.parent.postMessage({ type: 'timeEnd', info: Array.from(arguments) }, '*');
};

const originalConsoleCount = console.count;
console.count = function () {  
  originalConsoleCount.apply(console, arguments);
  window.parent.postMessage({ type: 'count', info: Array.from(arguments) }, '*');
};

const originalConsoleAssert = console.assert;
console.assert = function () {  
  originalConsoleAssert.apply(console, arguments);
  window.parent.postMessage({ type: 'assert', info: Array.from(arguments) }, '*');
};
`;
