export const INIT_SOURCE = `<h1 style="text-align: left">Getting started</h1>
<p style="text-align: left">
  Welcome to the <em><mark>Simple Editor</mark></em> template! This template
  integrates <strong>open source</strong> UI components and Tiptap extensions
  licensed under <strong>MIT</strong>.
</p>
<p style="text-align: left">
  Integrate it by following the
  <a
    target="_blank"
    rel="noopener noreferrer nofollow"
    href="https://tiptap.dev/docs/ui-components/templates/simple-editor"
    >Tiptap UI Components docs</a
  >
  or using our CLI tool.
</p>
<pre><code>npx @tiptap/cli init</code></pre>
<h2 style="text-align: left">Features</h2>
<blockquote>
  <p style="text-align: left">
    <em
      >A fully responsive rich text editor with built-in support for common
      formatting and layout tools. Type markdown </em
    ><code>**</code><em> or use keyboard shortcuts </em><code>⌘+B</code> for
    <s>most</s> all common markdown marks. 🪄
  </p>
</blockquote>
<p style="text-align: left">
  Add images, customize alignment, and apply <mark>advanced formatting</mark> to
  make your writing more engaging and professional.
</p>
<ul>
  <li>
    <p style="text-align: left">
      <strong>Superscript</strong> (x<sup>2</sup>) and
      <strong>Subscript</strong> (H<sub>2</sub>O) for precision
    </p>
  </li>
  <li>
    <p style="text-align: left">
      <strong>Typographic conversion</strong>: automatically convert to
      <code>-&gt;</code> an arrow <strong>→</strong>.
    </p>
  </li>
</ul>
<p style="text-align: left">
  <em>→ </em
  ><a
    target="_blank"
    rel="noopener noreferrer nofollow"
    href="https://tiptap.dev/docs/ui-components/templates/simple-editor#features"
    >Learn more</a
  >
</p>
<hr contenteditable="false" />
<h2 style="text-align: left">Make it your own</h2>
<p style="text-align: left">
  Switch between light and dark modes, and tailor the editor's appearance with
  customizable CSS to match your style.
</p>
<ul data-type="taskList">
  <li data-checked="true">
    <label contenteditable="false"
      ><input type="checkbox" /><span></span
    ></label>
    <div><p style="text-align: left">Test template</p></div>
  </li>
  <li data-checked="false">
    <label contenteditable="false"
      ><input type="checkbox" /><span></span
    ></label>
    <div>
      <p style="text-align: left">
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://tiptap.dev/docs/ui-components/templates/simple-editor"
          >Integrate the free template</a
        >
      </p>
    </div>
  </li>
</ul>
<p style="text-align: left"><br class="ProseMirror-trailingBreak" /></p>
`;

export const CSS_STYLES = `@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(0.95);
  }

  to {
    transform: scale(1);
  }
}

@keyframes zoomOut {
  0% {
    transform: scale(1);
  }

  to {
    transform: scale(0.95);
  }
}

@keyframes slideFromTop {
  0% {
    transform: translateY(-0.5rem);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes slideFromRight {
  0% {
    transform: translateX(0.5rem);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slideFromLeft {
  0% {
    transform: translateX(-0.5rem);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slideFromBottom {
  0% {
    transform: translateY(0.5rem);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
}

:root {
  overflow-wrap: break-word;
  text-size-adjust: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --tt-gray-light-a-50: rgba(56, 56, 56, 0.04);
  --tt-gray-light-a-100: rgba(15, 22, 36, 0.05);
  --tt-gray-light-a-200: rgba(37, 39, 45, 0.1);
  --tt-gray-light-a-300: rgba(47, 50, 55, 0.2);
  --tt-gray-light-a-400: rgba(40, 44, 51, 0.42);
  --tt-gray-light-a-500: rgba(52, 55, 60, 0.64);
  --tt-gray-light-a-600: rgba(36, 39, 46, 0.78);
  --tt-gray-light-a-700: rgba(35, 37, 42, 0.87);
  --tt-gray-light-a-800: rgba(30, 32, 36, 0.95);
  --tt-gray-light-a-900: rgba(29, 30, 32, 0.98);
  --tt-gray-light-50: rgba(250, 250, 250, 1);
  --tt-gray-light-100: rgba(244, 244, 245, 1);
  --tt-gray-light-200: rgba(234, 234, 235, 1);
  --tt-gray-light-300: rgba(213, 214, 215, 1);
  --tt-gray-light-400: rgba(166, 167, 171, 1);
  --tt-gray-light-500: rgba(125, 127, 130, 1);
  --tt-gray-light-600: rgba(83, 86, 90, 1);
  --tt-gray-light-700: rgba(64, 65, 69, 1);
  --tt-gray-light-800: rgba(44, 45, 48, 1);
  --tt-gray-light-900: rgba(34, 35, 37, 1);
  --tt-gray-dark-a-50: rgba(232, 232, 253, 0.05);
  --tt-gray-dark-a-100: rgba(231, 231, 243, 0.07);
  --tt-gray-dark-a-200: rgba(238, 238, 246, 0.11);
  --tt-gray-dark-a-300: rgba(239, 239, 245, 0.22);
  --tt-gray-dark-a-400: rgba(244, 244, 255, 0.37);
  --tt-gray-dark-a-500: rgba(236, 238, 253, 0.5);
  --tt-gray-dark-a-600: rgba(247, 247, 253, 0.64);
  --tt-gray-dark-a-700: rgba(251, 251, 254, 0.75);
  --tt-gray-dark-a-800: rgba(253, 253, 253, 0.88);
  --tt-gray-dark-a-900: rgba(255, 255, 255, 0.96);
  --tt-gray-dark-50: rgba(25, 25, 26, 1);
  --tt-gray-dark-100: rgba(32, 32, 34, 1);
  --tt-gray-dark-200: rgba(45, 45, 47, 1);
  --tt-gray-dark-300: rgba(70, 70, 73, 1);
  --tt-gray-dark-400: rgba(99, 99, 105, 1);
  --tt-gray-dark-500: rgba(124, 124, 131, 1);
  --tt-gray-dark-600: rgba(163, 163, 168, 1);
  --tt-gray-dark-700: rgba(192, 192, 195, 1);
  --tt-gray-dark-800: rgba(224, 224, 225, 1);
  --tt-gray-dark-900: rgba(245, 245, 245, 1);
  --tt-brand-color-50: rgba(239, 238, 255, 1);
  --tt-brand-color-100: rgba(222, 219, 255, 1);
  --tt-brand-color-200: rgba(195, 189, 255, 1);
  --tt-brand-color-300: rgba(157, 138, 255, 1);
  --tt-brand-color-400: rgba(122, 82, 255, 1);
  --tt-brand-color-500: rgba(98, 41, 255, 1);
  --tt-brand-color-600: rgba(84, 0, 229, 1);
  --tt-brand-color-700: rgba(75, 0, 204, 1);
  --tt-brand-color-800: rgba(56, 0, 153, 1);
  --tt-brand-color-900: rgba(43, 25, 102, 1);
  --tt-brand-color-950: hsla(257, 100%, 9%, 1);
  --tt-color-green-inc-5: hsla(129, 100%, 97%, 1);
  --tt-color-green-inc-4: hsla(129, 100%, 92%, 1);
  --tt-color-green-inc-3: hsla(131, 100%, 86%, 1);
  --tt-color-green-inc-2: hsla(133, 98%, 78%, 1);
  --tt-color-green-inc-1: hsla(137, 99%, 70%, 1);
  --tt-color-green-base: hsla(147, 99%, 50%, 1);
  --tt-color-green-dec-1: hsla(147, 97%, 41%, 1);
  --tt-color-green-dec-2: hsla(146, 98%, 32%, 1);
  --tt-color-green-dec-3: hsla(146, 100%, 24%, 1);
  --tt-color-green-dec-4: hsla(144, 100%, 16%, 1);
  --tt-color-green-dec-5: hsla(140, 100%, 9%, 1);
  --tt-color-yellow-inc-5: hsla(50, 100%, 97%, 1);
  --tt-color-yellow-inc-4: hsla(50, 100%, 91%, 1);
  --tt-color-yellow-inc-3: hsla(50, 100%, 84%, 1);
  --tt-color-yellow-inc-2: hsla(50, 100%, 77%, 1);
  --tt-color-yellow-inc-1: hsla(50, 100%, 68%, 1);
  --tt-color-yellow-base: hsla(52, 100%, 50%, 1);
  --tt-color-yellow-dec-1: hsla(52, 100%, 41%, 1);
  --tt-color-yellow-dec-2: hsla(52, 100%, 32%, 1);
  --tt-color-yellow-dec-3: hsla(52, 100%, 24%, 1);
  --tt-color-yellow-dec-4: hsla(51, 100%, 16%, 1);
  --tt-color-yellow-dec-5: hsla(50, 100%, 9%, 1);
  --tt-color-red-inc-5: hsla(11, 100%, 96%, 1);
  --tt-color-red-inc-4: hsla(11, 100%, 88%, 1);
  --tt-color-red-inc-3: hsla(10, 100%, 80%, 1);
  --tt-color-red-inc-2: hsla(9, 100%, 73%, 1);
  --tt-color-red-inc-1: hsla(7, 100%, 64%, 1);
  --tt-color-red-base: hsla(7, 100%, 54%, 1);
  --tt-color-red-dec-1: hsla(7, 100%, 41%, 1);
  --tt-color-red-dec-2: hsla(5, 100%, 32%, 1);
  --tt-color-red-dec-3: hsla(4, 100%, 24%, 1);
  --tt-color-red-dec-4: hsla(3, 100%, 16%, 1);
  --tt-color-red-dec-5: hsla(1, 100%, 9%, 1);
  --white: rgba(255, 255, 255, 1);
  --black: rgba(14, 14, 17, 1);
  --transparent: rgba(255, 255, 255, 0);
  --tt-shadow-elevated-md: 0px 16px 48px 0px rgba(17, 24, 39, 0.04),
    0px 12px 24px 0px rgba(17, 24, 39, 0.04),
    0px 6px 8px 0px rgba(17, 24, 39, 0.02),
    0px 2px 3px 0px rgba(17, 24, 39, 0.02);
  --tt-radius-xxs: 0.125rem;
  --tt-radius-xs: 0.25rem;
  --tt-radius-sm: 0.375rem;
  --tt-radius-md: 0.5rem;
  --tt-radius-lg: 0.75rem;
  --tt-radius-xl: 1rem;
  --tt-transition-duration-short: 0.1s;
  --tt-transition-duration-default: 0.2s;
  --tt-transition-duration-long: 0.64s;
  --tt-transition-easing-default: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  --tt-transition-easing-cubic: cubic-bezier(0.65, 0.05, 0.36, 1);
  --tt-transition-easing-quart: cubic-bezier(0.77, 0, 0.18, 1);
  --tt-transition-easing-circ: cubic-bezier(0.79, 0.14, 0.15, 0.86);
  --tt-transition-easing-back: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  --tt-accent-contrast: 8%;
  --tt-destructive-contrast: 8%;
  --tt-foreground-contrast: 8%;
}

:root,
:root *,
:root :after,
:root :before {
  box-sizing: border-box;
  transition: none var(--tt-transition-duration-default)
    var(--tt-transition-easing-default);
}

@media (prefers-color-scheme: dark) {
  :root {
    --tt-shadow-elevated-md: 0px 16px 48px 0px rgba(0, 0, 0, 0.5),
      0px 12px 24px 0px rgba(0, 0, 0, 0.24),
      0px 6px 8px 0px rgba(0, 0, 0, 0.22), 0px 2px 3px 0px rgba(0, 0, 0, 0.12);
  }
}

:root {
  --tt-bg-color: var(--white);
  --tt-border-color: var(--tt-gray-light-a-200);
  --tt-border-color-tint: var(--tt-gray-light-a-100);
  --tt-sidebar-bg-color: var(--tt-gray-light-100);
  --tt-scrollbar-color: var(--tt-gray-light-a-200);
  --tt-cursor-color: var(--tt-brand-color-500);
  --tt-selection-color: rgba(157, 138, 255, 0.2);
  --tt-card-bg-color: var(--white);
  --tt-card-border-color: var(--tt-gray-light-a-100);
}

.dark {
  --tt-bg-color: var(--black);
  --tt-border-color: var(--tt-gray-dark-a-200);
  --tt-border-color-tint: var(--tt-gray-dark-a-100);
  --tt-sidebar-bg-color: var(--tt-gray-dark-100);
  --tt-scrollbar-color: var(--tt-gray-dark-a-200);
  --tt-cursor-color: var(--tt-brand-color-400);
  --tt-selection-color: rgba(122, 82, 255, 0.2);
  --tt-card-bg-color: var(--tt-gray-dark-50);
  --tt-card-border-color: var(--tt-gray-dark-a-50);
}

*,
:after,
:before {
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
}

:host,
html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family:
    ui-sans-serif,
    system-ui,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  margin: auto;
  padding: 32px 0;
  max-width: 1024px;
  line-height: inherit;
}

hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
pre,
samp {
  font-family:
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    Liberation Mono,
    Courier New,
    monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button,
select {
  text-transform: none;
}

button,
input:where([type="button"]),
input:where([type="reset"]),
input:where([type="submit"]) {
  -moz-appearance: button;
  appearance: button;
  -webkit-appearance: button;
  background-color: rgba(0, 0, 0, 0);
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -moz-appearance: textfield;
  appearance: textfield;
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
}

fieldset,
legend {
  padding: 0;
}

menu,
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

dialog {
  padding: 0;
}

textarea {
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

[role="button"],
button {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: block;
}

img,
video {
  max-width: 100%;
  height: auto;
}

[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}

.tiptap-dropdown-menu {
  --tt-popover-bg-color: var(--white);
  --tt-popover-border-color: var(--tt-gray-light-a-100);
  --tt-popover-text-color: var(--tt-gray-light-a-600);
}

.dark .tiptap-dropdown-menu {
  --tt-popover-border-color: var(--tt-gray-dark-a-50);
  --tt-popover-bg-color: var(--tt-gray-dark-50);
  --tt-popover-text-color: var(--tt-gray-dark-a-600);
}

.tiptap-dropdown-menu {
  --padding: 0.25rem;
  --border-width: 1px;
  z-index: 200;
  border-radius: calc(
    var(--padding) + var(--tt-radius-lg) + var(--border-width)
  );
  border: var(--border-width) solid var(--tt-popover-border-color);
  background-color: var(--tt-popover-bg-color);
  padding: var(--padding);
  color: var(--tt-popover-text-color);
  box-shadow: var(--tt-shadow-elevated-md);
  outline: none;
  overflow: hidden;
  gap: 0.25rem;
}

.tiptap-dropdown-menu button {
  width: 100%;
}

.tiptap-dropdown-menu .tiptap-dropdown-menu-separator {
  margin: 0.25rem 0;
}

.tiptap-dropdown-menu[data-state="open"] {
  animation:
    fadeIn 0.15s cubic-bezier(0.16, 1, 0.3, 1),
    zoomIn 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.tiptap-dropdown-menu[data-state="closed"] {
  animation:
    fadeOut 0.15s cubic-bezier(0.16, 1, 0.3, 1),
    zoomOut 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.tiptap-dropdown-menu[data-side="top-end"],
.tiptap-dropdown-menu[data-side="top-start"],
.tiptap-dropdown-menu[data-side="top"] {
  animation: slideFromBottom 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.tiptap-dropdown-menu[data-side="right-end"],
.tiptap-dropdown-menu[data-side="right-start"],
.tiptap-dropdown-menu[data-side="right"] {
  animation: slideFromLeft 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.tiptap-dropdown-menu[data-side="bottom-end"],
.tiptap-dropdown-menu[data-side="bottom-start"],
.tiptap-dropdown-menu[data-side="bottom"] {
  animation: slideFromTop 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.tiptap-dropdown-menu[data-side="left-end"],
.tiptap-dropdown-menu[data-side="left-start"],
.tiptap-dropdown-menu[data-side="left"] {
  animation: slideFromRight 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.tiptap-popover {
  --tt-popover-bg-color: var(--white);
  --tt-popover-border-color: var(--tt-gray-light-a-100);
  --tt-popover-text-color: var(--tt-gray-light-a-600);
}

.dark .tiptap-popover {
  --tt-popover-border-color: var(--tt-gray-dark-a-50);
  --tt-popover-bg-color: var(--tt-gray-dark-50);
  --tt-popover-text-color: var(--tt-gray-dark-a-600);
}

.tiptap-popover {
  --padding: 0.25rem;
  --border-width: 1px;
  z-index: 50;
  border-radius: calc(
    var(--padding) + var(--tt-radius-lg) + var(--border-width)
  );
  border: var(--border-width) solid var(--tt-popover-border-color);
  background-color: var(--tt-popover-bg-color);
  padding: var(--padding);
  color: var(--tt-popover-text-color);
  box-shadow: var(--tt-shadow-elevated-md);
  outline: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.tiptap-popover button {
  width: 100%;
}

.tiptap-popover[data-orientation="horizontal"] {
  --padding: 0.125rem;
}

.tiptap-popover[data-state="open"] {
  animation:
    fadeIn 0.15s cubic-bezier(0.16, 1, 0.3, 1),
    zoomIn 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.tiptap-popover[data-state="closed"] {
  animation:
    fadeOut 0.15s cubic-bezier(0.16, 1, 0.3, 1),
    zoomOut 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.tiptap-popover[data-side="top-end"],
.tiptap-popover[data-side="top-start"],
.tiptap-popover[data-side="top"] {
  animation: slideFromBottom 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.tiptap-popover[data-side="right-end"],
.tiptap-popover[data-side="right-start"],
.tiptap-popover[data-side="right"] {
  animation: slideFromLeft 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.tiptap-popover[data-side="bottom-end"],
.tiptap-popover[data-side="bottom-start"],
.tiptap-popover[data-side="bottom"] {
  animation: slideFromTop 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.tiptap-popover[data-side="left-end"],
.tiptap-popover[data-side="left-start"],
.tiptap-popover[data-side="left"] {
  animation: slideFromRight 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.tiptap.ProseMirror {
  --tt-checklist-bg-color: var(--tt-gray-light-a-100);
  --tt-checklist-bg-active-color: var(--tt-gray-light-a-900);
  --tt-checklist-border-color: var(--tt-gray-light-a-200);
  --tt-checklist-border-active-color: var(--tt-gray-light-a-900);
  --tt-checklist-check-icon-color: var(--white);
  --tt-checklist-text-active: var(--tt-gray-light-a-500);
}

.dark .tiptap.ProseMirror {
  --tt-checklist-bg-color: var(--tt-gray-dark-a-100);
  --tt-checklist-bg-active-color: var(--tt-gray-dark-a-900);
  --tt-checklist-border-color: var(--tt-gray-dark-a-200);
  --tt-checklist-border-active-color: var(--tt-gray-dark-a-900);
  --tt-checklist-check-icon-color: var(--black);
  --tt-checklist-text-active: var(--tt-gray-dark-a-500);
}

.tiptap.ProseMirror ol,
.tiptap.ProseMirror ul {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  padding-left: 1.5em;
}

.tiptap.ProseMirror ol:first-child,
.tiptap.ProseMirror ul:first-child {
  margin-top: 0;
}

.tiptap.ProseMirror ol:last-child,
.tiptap.ProseMirror ul:last-child {
  margin-bottom: 0;
}

.tiptap.ProseMirror ol ol,
.tiptap.ProseMirror ol ul,
.tiptap.ProseMirror ul ol,
.tiptap.ProseMirror ul ul {
  margin-top: 0;
  margin-bottom: 0;
}

.tiptap.ProseMirror li p {
  margin-top: 0;
}

.tiptap.ProseMirror ol {
  list-style: decimal;
}

.tiptap.ProseMirror ol ol {
  list-style: lower-alpha;
}

.tiptap.ProseMirror ol ol ol {
  list-style: lower-roman;
}

.tiptap.ProseMirror ul:not([data-type="taskList"]) {
  list-style: disc;
}

.tiptap.ProseMirror ul:not([data-type="taskList"]) ul {
  list-style: circle;
}

.tiptap.ProseMirror ul:not([data-type="taskList"]) ul ul {
  list-style: disc;
}

.tiptap.ProseMirror ul[data-type="taskList"] {
  padding-left: 0.25em;
}

.tiptap.ProseMirror ul[data-type="taskList"] li {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.tiptap.ProseMirror ul[data-type="taskList"] li:not(:has(> p:first-child)) {
  list-style-type: none;
}

.tiptap.ProseMirror ul[data-type="taskList"] li[data-checked="true"] > div > p {
  opacity: 0.5;
  text-decoration: line-through;
}

.tiptap.ProseMirror
  ul[data-type="taskList"]
  li[data-checked="true"]
  > div
  > p
  span {
  text-decoration: line-through;
}

.tiptap.ProseMirror ul[data-type="taskList"] li label {
  position: relative;
  padding-top: 4px;
  padding-right: 8px;
}

.tiptap.ProseMirror ul[data-type="taskList"] li label input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.tiptap.ProseMirror ul[data-type="taskList"] li label span {
  display: block;
  width: 1em;
  height: 1em;
  border: 1px solid var(--tt-checklist-border-color);
  border-radius: var(--tt-radius-xs, 0.25rem);
  position: relative;
  cursor: pointer;
  background-color: var(--tt-checklist-bg-color);
  transition:
    background-color 80ms ease-out,
    border-color 80ms ease-out;
}

.tiptap.ProseMirror ul[data-type="taskList"] li label span:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.75em;
  height: 0.75em;
  background-color: var(--tt-checklist-check-icon-color);
  opacity: 0;
  -webkit-mask: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M21.4142%204.58579C22.1953%205.36683%2022.1953%206.63317%2021.4142%207.41421L10.4142%2018.4142C9.63317%2019.1953%208.36684%2019.1953%207.58579%2018.4142L2.58579%2013.4142C1.80474%2012.6332%201.80474%2011.3668%202.58579%2010.5858C3.36683%209.80474%204.63317%209.80474%205.41421%2010.5858L9%2014.1716L18.5858%204.58579C19.3668%203.80474%2020.6332%203.80474%2021.4142%204.58579Z%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fsvg%3E")
    center/contain no-repeat;
  mask: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M21.4142%204.58579C22.1953%205.36683%2022.1953%206.63317%2021.4142%207.41421L10.4142%2018.4142C9.63317%2019.1953%208.36684%2019.1953%207.58579%2018.4142L2.58579%2013.4142C1.80474%2012.6332%201.80474%2011.3668%202.58579%2010.5858C3.36683%209.80474%204.63317%209.80474%205.41421%2010.5858L9%2014.1716L18.5858%204.58579C19.3668%203.80474%2020.6332%203.80474%2021.4142%204.58579Z%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fsvg%3E")
    center/contain no-repeat;
}

.tiptap.ProseMirror
  ul[data-type="taskList"]
  li
  label
  input[type="checkbox"]:checked
  + span {
  background: var(--tt-checklist-bg-active-color);
  border-color: var(--tt-checklist-border-active-color);
}

.tiptap.ProseMirror
  ul[data-type="taskList"]
  li
  label
  input[type="checkbox"]:checked
  + span:before {
  opacity: 1;
}

.tiptap.ProseMirror ul[data-type="taskList"] li div {
  flex: 1 1;
  min-width: 0;
}

.tiptap.ProseMirror {
  --tt-inline-code-bg-color: var(--tt-gray-light-a-100);
  --tt-inline-code-text-color: var(--tt-gray-light-a-700);
  --tt-inline-code-border-color: var(--tt-gray-light-a-200);
  --tt-codeblock-bg: var(--tt-gray-light-a-50);
  --tt-codeblock-text: var(--tt-gray-light-a-800);
  --tt-codeblock-border: var(--tt-gray-light-a-200);
}

.dark .tiptap.ProseMirror {
  --tt-inline-code-bg-color: var(--tt-gray-dark-a-100);
  --tt-inline-code-text-color: var(--tt-gray-dark-a-700);
  --tt-inline-code-border-color: var(--tt-gray-dark-a-200);
  --tt-codeblock-bg: var(--tt-gray-dark-a-50);
  --tt-codeblock-text: var(--tt-gray-dark-a-800);
  --tt-codeblock-border: var(--tt-gray-dark-a-200);
}

.tiptap.ProseMirror code {
  background-color: var(--tt-inline-code-bg-color);
  color: var(--tt-inline-code-text-color);
  border: 1px solid var(--tt-inline-code-border-color);
  font-family:
    JetBrains Mono NL,
    monospace;
  font-size: 0.875em;
  line-height: 1.4;
  border-radius: 6px/0.375rem;
  padding: 0.1em 0.2em;
}

.tiptap.ProseMirror pre {
  background-color: var(--tt-codeblock-bg);
  color: var(--tt-codeblock-text);
  border: 1px solid var(--tt-codeblock-border);
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  padding: 1em;
  font-size: 1rem;
  border-radius: 6px/0.375rem;
}

.tiptap.ProseMirror pre code {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-radius: 0;
  -webkit-text-fill-color: inherit;
  color: inherit;
}

.tiptap-separator {
  --tt-link-border-color: var(--tt-gray-light-a-200);
}

.dark .tiptap-separator {
  --tt-link-border-color: var(--tt-gray-dark-a-200);
}

.tiptap-separator {
  flex-shrink: 0;
  background-color: var(--tt-link-border-color);
}

.tiptap-separator[data-orientation="horizontal"] {
  height: 1px;
  width: 100%;
}

.tiptap-separator[data-orientation="vertical"] {
  height: 1.5rem;
  width: 1px;
}

.tiptap-input {
  display: block;
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  background: none;
}

.tiptap-input:focus {
  outline: none;
}

.tiptap-input-clamp {
  min-width: 12rem;
  padding-right: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tiptap-input-clamp:focus {
  text-overflow: clip;
  overflow: visible;
}

.tiptap-tooltip {
  --tt-tooltip-bg: var(--tt-gray-light-900);
  --tt-tooltip-text: var(--white);
  --tt-kbd: var(--tt-gray-dark-a-400);
}

.dark .tiptap-tooltip {
  --tt-tooltip-bg: var(--white);
  --tt-tooltip-text: var(--tt-gray-light-600);
  --tt-kbd: var(--tt-gray-light-a-400);
}

.tiptap-tooltip {
  z-index: 50;
  overflow: hidden;
  border-radius: var(--tt-radius-md, 0.375rem);
  background-color: var(--tt-tooltip-bg);
  padding: 0.375rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--tt-tooltip-text);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.tiptap-tooltip kbd {
  display: inline-block;
  text-align: center;
  vertical-align: baseline;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif;
  text-transform: capitalize;
  color: var(--tt-kbd);
}

.tiptap-button {
  --tt-button-default-bg-color: var(--tt-gray-light-a-100);
  --tt-button-hover-bg-color: var(--tt-gray-light-200);
  --tt-button-active-bg-color: var(--tt-gray-light-a-200);
  --tt-button-active-bg-color-emphasized: var(--tt-brand-color-100);
  --tt-button-active-bg-color-subdued: var(--tt-gray-light-a-200);
  --tt-button-active-hover-bg-color: var(--tt-gray-light-300);
  --tt-button-active-hover-bg-color-emphasized: var(--tt-brand-color-200);
  --tt-button-active-hover-bg-color-subdued: var(--tt-gray-light-a-300);
  --tt-button-disabled-bg-color: var(--tt-gray-light-a-50);
  --tt-button-default-text-color: var(--tt-gray-light-a-600);
  --tt-button-hover-text-color: var(--tt-gray-light-a-900);
  --tt-button-active-text-color: var(--tt-gray-light-a-900);
  --tt-button-active-text-color-emphasized: var(--tt-gray-light-a-900);
  --tt-button-active-text-color-subdued: var(--tt-gray-light-a-900);
  --tt-button-disabled-text-color: var(--tt-gray-light-a-400);
  --tt-button-default-icon-color: var(--tt-gray-light-a-600);
  --tt-button-hover-icon-color: var(--tt-gray-light-a-900);
  --tt-button-active-icon-color: var(--tt-brand-color-500);
  --tt-button-active-icon-color-emphasized: var(--tt-brand-color-600);
  --tt-button-active-icon-color-subdued: var(--tt-gray-light-a-900);
  --tt-button-disabled-icon-color: var(--tt-gray-light-a-400);
  --tt-button-default-icon-sub-color: var(--tt-gray-light-a-400);
  --tt-button-hover-icon-sub-color: var(--tt-gray-light-a-500);
  --tt-button-active-icon-sub-color: var(--tt-gray-light-a-400);
  --tt-button-active-icon-sub-color-emphasized: var(--tt-gray-light-a-500);
  --tt-button-active-icon-sub-color-subdued: var(--tt-gray-light-a-400);
  --tt-button-disabled-icon-sub-color: var(--tt-gray-light-a-100);
  --tt-button-default-dropdown-arrows-color: var(--tt-gray-light-a-600);
  --tt-button-hover-dropdown-arrows-color: var(--tt-gray-light-a-700);
  --tt-button-active-dropdown-arrows-color: var(--tt-gray-light-a-600);
  --tt-button-active-dropdown-arrows-color-emphasized: var(
    --tt-gray-light-a-700
  );
  --tt-button-active-dropdown-arrows-color-subdued: var(--tt-gray-light-a-600);
  --tt-button-disabled-dropdown-arrows-color: var(--tt-gray-light-a-400);
}

.dark .tiptap-button {
  --tt-button-default-bg-color: var(--tt-gray-dark-a-100);
  --tt-button-hover-bg-color: var(--tt-gray-dark-200);
  --tt-button-active-bg-color: var(--tt-gray-dark-a-200);
  --tt-button-active-bg-color-emphasized: var(--tt-brand-color-900);
  --tt-button-active-bg-color-subdued: var(--tt-gray-dark-a-200);
  --tt-button-active-hover-bg-color: var(--tt-gray-dark-300);
  --tt-button-active-hover-bg-color-emphasized: var(--tt-brand-color-800);
  --tt-button-active-hover-bg-color-subdued: var(--tt-gray-dark-a-300);
  --tt-button-disabled-bg-color: var(--tt-gray-dark-a-50);
  --tt-button-default-text-color: var(--tt-gray-dark-a-600);
  --tt-button-hover-text-color: var(--tt-gray-dark-a-900);
  --tt-button-active-text-color: var(--tt-gray-dark-a-900);
  --tt-button-active-text-color-emphasized: var(--tt-gray-dark-a-900);
  --tt-button-active-text-color-subdued: var(--tt-gray-dark-a-900);
  --tt-button-disabled-text-color: var(--tt-gray-dark-a-300);
  --tt-button-default-icon-color: var(--tt-gray-dark-a-600);
  --tt-button-hover-icon-color: var(--tt-gray-dark-a-900);
  --tt-button-active-icon-color: var(--tt-brand-color-400);
  --tt-button-active-icon-color-emphasized: var(--tt-brand-color-400);
  --tt-button-active-icon-color-subdued: var(--tt-gray-dark-a-900);
  --tt-button-disabled-icon-color: var(--tt-gray-dark-a-400);
  --tt-button-default-icon-sub-color: var(--tt-gray-dark-a-300);
  --tt-button-hover-icon-sub-color: var(--tt-gray-dark-a-400);
  --tt-button-active-icon-sub-color: var(--tt-gray-dark-a-300);
  --tt-button-active-icon-sub-color-emphasized: var(--tt-gray-dark-a-400);
  --tt-button-active-icon-sub-color-subdued: var(--tt-gray-dark-a-300);
  --tt-button-disabled-icon-sub-color: var(--tt-gray-dark-a-100);
  --tt-button-default-dropdown-arrows-color: var(--tt-gray-dark-a-600);
  --tt-button-hover-dropdown-arrows-color: var(--tt-gray-dark-a-700);
  --tt-button-active-dropdown-arrows-color: var(--tt-gray-dark-a-600);
  --tt-button-active-dropdown-arrows-color-emphasized: var(
    --tt-gray-dark-a-700
  );
  --tt-button-active-dropdown-arrows-color-subdued: var(--tt-gray-dark-a-600);
  --tt-button-disabled-dropdown-arrows-color: var(--tt-gray-dark-a-400);
}

.tiptap-button[data-style="ghost"] {
  --tt-button-default-bg-color: var(--transparent);
  --tt-button-hover-bg-color: var(--tt-gray-light-200);
  --tt-button-active-bg-color: var(--tt-gray-light-a-100);
  --tt-button-active-bg-color-emphasized: var(--tt-brand-color-100);
  --tt-button-active-bg-color-subdued: var(--tt-gray-light-a-100);
  --tt-button-active-hover-bg-color: var(--tt-gray-light-200);
  --tt-button-active-hover-bg-color-emphasized: var(--tt-brand-color-200);
  --tt-button-active-hover-bg-color-subdued: var(--tt-gray-light-a-200);
  --tt-button-disabled-bg-color: var(--transparent);
  --tt-button-default-text-color: var(--tt-gray-light-a-600);
  --tt-button-hover-text-color: var(--tt-gray-light-a-900);
  --tt-button-active-text-color: var(--tt-gray-light-a-900);
  --tt-button-active-text-color-emphasized: var(--tt-gray-light-a-900);
  --tt-button-active-text-color-subdued: var(--tt-gray-light-a-900);
  --tt-button-disabled-text-color: var(--tt-gray-light-a-400);
  --tt-button-default-icon-color: var(--tt-gray-light-a-600);
  --tt-button-hover-icon-color: var(--tt-gray-light-a-900);
  --tt-button-active-icon-color: var(--tt-brand-color-500);
  --tt-button-active-icon-color-emphasized: var(--tt-brand-color-600);
  --tt-button-active-icon-color-subdued: var(--tt-gray-light-a-900);
  --tt-button-disabled-icon-color: var(--tt-gray-light-a-400);
  --tt-button-default-icon-sub-color: var(--tt-gray-light-a-400);
  --tt-button-hover-icon-sub-color: var(--tt-gray-light-a-500);
  --tt-button-active-icon-sub-color: var(--tt-gray-light-a-400);
  --tt-button-active-icon-sub-color-emphasized: var(--tt-gray-light-a-500);
  --tt-button-active-icon-sub-color-subdued: var(--tt-gray-light-a-400);
  --tt-button-disabled-icon-sub-color: var(--tt-gray-light-a-100);
  --tt-button-default-dropdown-arrows-color: var(--tt-gray-light-a-600);
  --tt-button-hover-dropdown-arrows-color: var(--tt-gray-light-a-700);
  --tt-button-active-dropdown-arrows-color: var(--tt-gray-light-a-600);
  --tt-button-active-dropdown-arrows-color-emphasized: var(
    --tt-gray-light-a-700
  );
  --tt-button-active-dropdown-arrows-color-subdued: var(--tt-gray-light-a-600);
  --tt-button-disabled-dropdown-arrows-color: var(--tt-gray-light-a-400);
}

.dark .tiptap-button[data-style="ghost"] {
  --tt-button-default-bg-color: var(--transparent);
  --tt-button-hover-bg-color: var(--tt-gray-dark-200);
  --tt-button-active-bg-color: var(--tt-gray-dark-a-100);
  --tt-button-active-bg-color-emphasized: var(--tt-brand-color-900);
  --tt-button-active-bg-color-subdued: var(--tt-gray-dark-a-100);
  --tt-button-active-hover-bg-color: var(--tt-gray-dark-200);
  --tt-button-active-hover-bg-color-emphasized: var(--tt-brand-color-800);
  --tt-button-active-hover-bg-color-subdued: var(--tt-gray-dark-a-200);
  --tt-button-disabled-bg-color: var(--transparent);
  --tt-button-default-text-color: var(--tt-gray-dark-a-600);
  --tt-button-hover-text-color: var(--tt-gray-dark-a-900);
  --tt-button-active-text-color: var(--tt-gray-dark-a-900);
  --tt-button-active-text-color-emphasized: var(--tt-gray-dark-a-900);
  --tt-button-active-text-color-subdued: var(--tt-gray-dark-a-900);
  --tt-button-disabled-text-color: var(--tt-gray-dark-a-300);
  --tt-button-default-icon-color: var(--tt-gray-dark-a-600);
  --tt-button-hover-icon-color: var(--tt-gray-dark-a-900);
  --tt-button-active-icon-color: var(--tt-brand-color-400);
  --tt-button-active-icon-color-emphasized: var(--tt-brand-color-300);
  --tt-button-active-icon-color-subdued: var(--tt-gray-dark-a-900);
  --tt-button-disabled-icon-color: var(--tt-gray-dark-a-400);
  --tt-button-default-icon-sub-color: var(--tt-gray-dark-a-300);
  --tt-button-hover-icon-sub-color: var(--tt-gray-dark-a-400);
  --tt-button-active-icon-sub-color: var(--tt-gray-dark-a-300);
  --tt-button-active-icon-sub-color-emphasized: var(--tt-gray-dark-a-400);
  --tt-button-active-icon-sub-color-subdued: var(--tt-gray-dark-a-300);
  --tt-button-disabled-icon-sub-color: var(--tt-gray-dark-a-100);
  --tt-button-default-dropdown-arrows-color: var(--tt-gray-dark-a-600);
  --tt-button-hover-dropdown-arrows-color: var(--tt-gray-dark-a-700);
  --tt-button-active-dropdown-arrows-color: var(--tt-gray-dark-a-600);
  --tt-button-active-dropdown-arrows-color-emphasized: var(
    --tt-gray-dark-a-700
  );
  --tt-button-active-dropdown-arrows-color-subdued: var(--tt-gray-dark-a-600);
  --tt-button-disabled-dropdown-arrows-color: var(--tt-gray-dark-a-400);
}

.tiptap-button[data-style="primary"] {
  --tt-button-default-bg-color: var(--tt-brand-color-500);
  --tt-button-hover-bg-color: var(--tt-brand-color-600);
  --tt-button-active-bg-color: var(--tt-brand-color-100);
  --tt-button-active-bg-color-emphasized: var(--tt-brand-color-100);
  --tt-button-active-bg-color-subdued: var(--tt-brand-color-100);
  --tt-button-active-hover-bg-color: var(--tt-brand-color-200);
  --tt-button-active-hover-bg-color-emphasized: var(--tt-brand-color-200);
  --tt-button-active-hover-bg-color-subdued: var(--tt-brand-color-200);
  --tt-button-disabled-bg-color: var(--tt-gray-light-a-100);
  --tt-button-default-text-color: var(--white);
  --tt-button-hover-text-color: var(--white);
  --tt-button-active-text-color: var(--tt-gray-light-a-900);
  --tt-button-active-text-color-emphasized: var(--tt-gray-light-a-900);
  --tt-button-active-text-color-subdued: var(--tt-gray-light-a-900);
  --tt-button-disabled-text-color: var(--tt-gray-light-a-400);
  --tt-button-default-icon-color: var(--white);
  --tt-button-hover-icon-color: var(--white);
  --tt-button-active-icon-color: var(--tt-brand-color-600);
  --tt-button-active-icon-color-emphasized: var(--tt-brand-color-600);
  --tt-button-active-icon-color-subdued: var(--tt-brand-color-600);
  --tt-button-disabled-icon-color: var(--tt-gray-light-a-400);
  --tt-button-default-icon-sub-color: var(--tt-gray-dark-a-500);
  --tt-button-hover-icon-sub-color: var(--tt-gray-dark-a-500);
  --tt-button-active-icon-sub-color: var(--tt-gray-light-a-500);
  --tt-button-active-icon-sub-color-emphasized: var(--tt-gray-light-a-500);
  --tt-button-active-icon-sub-color-subdued: var(--tt-gray-light-a-500);
  --tt-button-disabled-icon-sub-color: var(--tt-gray-light-a-100);
  --tt-button-default-dropdown-arrows-color: var(--white);
  --tt-button-hover-dropdown-arrows-color: var(--white);
  --tt-button-active-dropdown-arrows-color: var(--tt-gray-light-a-700);
  --tt-button-active-dropdown-arrows-color-emphasized: var(
    --tt-gray-light-a-700
  );
  --tt-button-active-dropdown-arrows-color-subdued: var(--tt-gray-light-a-700);
  --tt-button-disabled-dropdown-arrows-color: var(--tt-gray-light-a-400);
}

.dark .tiptap-button[data-style="primary"] {
  --tt-button-default-bg-color: var(--tt-brand-color-500);
  --tt-button-hover-bg-color: var(--tt-brand-color-600);
  --tt-button-active-bg-color: var(--tt-brand-color-900);
  --tt-button-active-bg-color-emphasized: var(--tt-brand-color-900);
  --tt-button-active-bg-color-subdued: var(--tt-brand-color-900);
  --tt-button-active-hover-bg-color: var(--tt-brand-color-800);
  --tt-button-active-hover-bg-color-emphasized: var(--tt-brand-color-800);
  --tt-button-active-hover-bg-color-subdued: var(--tt-brand-color-800);
  --tt-button-disabled-bg-color: var(--tt-gray-dark-a-100);
  --tt-button-default-text-color: var(--white);
  --tt-button-hover-text-color: var(--white);
  --tt-button-active-text-color: var(--tt-gray-dark-a-900);
  --tt-button-active-text-color-emphasized: var(--tt-gray-dark-a-900);
  --tt-button-active-text-color-subdued: var(--tt-gray-dark-a-900);
  --tt-button-disabled-text-color: var(--tt-gray-dark-a-300);
  --tt-button-default-icon-color: var(--white);
  --tt-button-hover-icon-color: var(--white);
  --tt-button-active-icon-color: var(--tt-brand-color-400);
  --tt-button-active-icon-color-emphasized: var(--tt-brand-color-400);
  --tt-button-active-icon-color-subdued: var(--tt-brand-color-400);
  --tt-button-disabled-icon-color: var(--tt-gray-dark-a-300);
  --tt-button-default-icon-sub-color: var(--tt-gray-dark-a-400);
  --tt-button-hover-icon-sub-color: var(--tt-gray-dark-a-500);
  --tt-button-active-icon-sub-color: var(--tt-gray-dark-a-300);
  --tt-button-active-icon-sub-color-emphasized: var(--tt-gray-dark-a-400);
  --tt-button-active-icon-sub-color-subdued: var(--tt-gray-dark-a-300);
  --tt-button-disabled-icon-sub-color: var(--tt-gray-dark-a-100);
  --tt-button-default-dropdown-arrows-color: var(--white);
  --tt-button-hover-dropdown-arrows-color: var(--white);
  --tt-button-active-dropdown-arrows-color: var(--tt-gray-dark-a-600);
  --tt-button-active-dropdown-arrows-color-emphasized: var(
    --tt-gray-dark-a-600
  );
  --tt-button-active-dropdown-arrows-color-subdued: var(--tt-gray-dark-a-600);
  --tt-button-disabled-dropdown-arrows-color: var(--tt-gray-dark-a-400);
}

.tiptap-button-group {
  align-items: center;
  display: flex;
  gap: 0.125rem;
}

.tiptap-button-group,
.tiptap-button-group [data-orientation="vertical"],
.tiptap-button-group[data-orientation="vertical"] {
  flex-direction: column;
}

.tiptap-button-group [data-orientation="horizontal"],
.tiptap-button-group[data-orientation="horizontal"] {
  flex-direction: row;
}

.tiptap-button {
  font-size: 0.875rem;
  font-weight: 500;
  font-feature-settings:
    "salt" on,
    "cv01" on;
  line-height: 1.15;
  height: 2rem;
  min-width: 2rem;
  border: none;
  padding: 0.5rem;
  gap: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--tt-radius-lg, 0.75rem);
  transition-property: background, color, opacity;
  transition-duration: var(--tt-transition-duration-default);
  transition-timing-function: var(--tt-transition-easing-default);
}

.tiptap-button:focus-visible {
  outline: none;
}

.tiptap-button[data-highlighted="true"] {
  background-color: var(--tt-button-hover-bg-color);
  color: var(--tt-button-hover-text-color);
}

.tiptap-button[data-size="large"] {
  font-size: 0.9375rem;
  height: 2.375rem;
  min-width: 2.375rem;
  padding: 0.625rem;
}

.tiptap-button[data-size="small"] {
  font-size: 0.75rem;
  line-height: 1.2;
  height: 1.5rem;
  min-width: 1.5rem;
  padding: 0.3125rem;
  border-radius: var(--tt-radius-md, 0.5rem);
}

.tiptap-button .tiptap-button-text {
  padding: 0 0.125rem;
  flex-grow: 1;
  text-align: left;
  line-height: 1.5rem;
}

.tiptap-button[data-text-trim="on"] .tiptap-button-text {
  text-overflow: ellipsis;
  overflow: hidden;
}

.tiptap-button .tiptap-button-dropdown-arrows,
.tiptap-button .tiptap-button-dropdown-small,
.tiptap-button .tiptap-button-icon,
.tiptap-button .tiptap-button-icon-sub {
  pointer-events: none;
  flex-shrink: 0;
}

.tiptap-button .tiptap-button-icon {
  width: 1rem;
  height: 1rem;
}

.tiptap-button[data-size="large"] .tiptap-button-icon {
  width: 1.125rem;
  height: 1.125rem;
}

.tiptap-button[data-size="small"] .tiptap-button-icon {
  width: 0.875rem;
  height: 0.875rem;
}

.tiptap-button .tiptap-button-icon-sub {
  width: 1rem;
  height: 1rem;
}

.tiptap-button[data-size="large"] .tiptap-button-icon-sub {
  width: 1.125rem;
  height: 1.125rem;
}

.tiptap-button[data-size="small"] .tiptap-button-icon-sub {
  width: 0.875rem;
  height: 0.875rem;
}

.tiptap-button .tiptap-button-dropdown-arrows {
  width: 0.75rem;
  height: 0.75rem;
}

.tiptap-button[data-size="large"] .tiptap-button-dropdown-arrows {
  width: 0.875rem;
  height: 0.875rem;
}

.tiptap-button .tiptap-button-dropdown-small,
.tiptap-button[data-size="small"] .tiptap-button-dropdown-arrows {
  width: 0.625rem;
  height: 0.625rem;
}

.tiptap-button[data-size="large"] .tiptap-button-dropdown-small {
  width: 0.75rem;
  height: 0.75rem;
}

.tiptap-button[data-size="small"] .tiptap-button-dropdown-small {
  width: 0.5rem;
  height: 0.5rem;
}

.tiptap-button:has(> svg):not(:has(> :not(svg))) {
  gap: 0.125rem;
}

.tiptap-button:has(> svg):not(:has(> :not(svg)))[data-size="large"],
.tiptap-button:has(> svg):not(:has(> :not(svg)))[data-size="small"] {
  gap: 0.125rem;
}

.tiptap-button:has(> svg:nth-of-type(2)):has(
    > .tiptap-button-dropdown-small
  ):not(:has(> svg:nth-of-type(3))):not(:has(> .tiptap-button-text)) {
  gap: 0;
  padding-right: 0.25rem;
}

.tiptap-button:has(> svg:nth-of-type(2)):has(
    > .tiptap-button-dropdown-small
  ):not(:has(> svg:nth-of-type(3))):not(
    :has(> .tiptap-button-text)
  )[data-size="large"] {
  padding-right: 0.375rem;
}

.tiptap-button:has(> svg:nth-of-type(2)):has(
    > .tiptap-button-dropdown-small
  ):not(:has(> svg:nth-of-type(3))):not(
    :has(> .tiptap-button-text)
  )[data-size="small"] {
  padding-right: 0.25rem;
}

.tiptap-button .tiptap-button-emoji {
  width: 1rem;
  display: flex;
  justify-content: center;
}

.tiptap-button[data-size="large"] .tiptap-button-emoji {
  width: 1.125rem;
}

.tiptap-button[data-size="small"] .tiptap-button-emoji {
  width: 0.875rem;
}

.tiptap-button {
  background-color: var(--tt-button-default-bg-color);
  color: var(--tt-button-default-text-color);
}

.tiptap-button .tiptap-button-icon {
  color: var(--tt-button-default-icon-color);
}

.tiptap-button .tiptap-button-icon-sub {
  color: var(--tt-button-default-icon-sub-color);
}

.tiptap-button .tiptap-button-dropdown-arrows,
.tiptap-button .tiptap-button-dropdown-small {
  color: var(--tt-button-default-dropdown-arrows-color);
}

.tiptap-button:hover {
  background-color: var(--tt-button-hover-bg-color);
  color: var(--tt-button-hover-text-color);
}

.tiptap-button:hover .tiptap-button-icon {
  color: var(--tt-button-hover-icon-color);
}

.tiptap-button:hover .tiptap-button-icon-sub {
  color: var(--tt-button-hover-icon-sub-color);
}

.tiptap-button:hover .tiptap-button-dropdown-arrows,
.tiptap-button:hover .tiptap-button-dropdown-small {
  color: var(--tt-button-hover-dropdown-arrows-color);
}

.tiptap-button[data-active-state="on"]:not([disabled]),
.tiptap-button[data-state="open"]:not([disabled]) {
  background-color: var(--tt-button-active-bg-color);
  color: var(--tt-button-active-text-color);
}

.tiptap-button[data-active-state="on"]:not([disabled]) .tiptap-button-icon,
.tiptap-button[data-state="open"]:not([disabled]) .tiptap-button-icon {
  color: var(--tt-button-active-icon-color);
}

.tiptap-button[data-active-state="on"]:not([disabled]) .tiptap-button-icon-sub,
.tiptap-button[data-state="open"]:not([disabled]) .tiptap-button-icon-sub {
  color: var(--tt-button-active-icon-sub-color);
}

.tiptap-button[data-active-state="on"]:not([disabled])
  .tiptap-button-dropdown-arrows,
.tiptap-button[data-active-state="on"]:not([disabled])
  .tiptap-button-dropdown-small,
.tiptap-button[data-state="open"]:not([disabled])
  .tiptap-button-dropdown-arrows,
.tiptap-button[data-state="open"]:not([disabled])
  .tiptap-button-dropdown-small {
  color: var(--tt-button-active-dropdown-arrows-color);
}

.tiptap-button[data-active-state="on"]:not([disabled]):hover,
.tiptap-button[data-state="open"]:not([disabled]):hover {
  background-color: var(--tt-button-active-hover-bg-color);
}

.tiptap-button[data-active-state="on"]:not(
    [disabled]
  )[data-appearance="emphasized"],
.tiptap-button[data-state="open"]:not(
    [disabled]
  )[data-appearance="emphasized"] {
  background-color: var(--tt-button-active-bg-color-emphasized);
  color: var(--tt-button-active-text-color-emphasized);
}

.tiptap-button[data-active-state="on"]:not(
    [disabled]
  )[data-appearance="emphasized"]
  .tiptap-button-icon,
.tiptap-button[data-state="open"]:not([disabled])[data-appearance="emphasized"]
  .tiptap-button-icon {
  color: var(--tt-button-active-icon-color-emphasized);
}

.tiptap-button[data-active-state="on"]:not(
    [disabled]
  )[data-appearance="emphasized"]
  .tiptap-button-icon-sub,
.tiptap-button[data-state="open"]:not([disabled])[data-appearance="emphasized"]
  .tiptap-button-icon-sub {
  color: var(--tt-button-active-icon-sub-color-emphasized);
}

.tiptap-button[data-active-state="on"]:not(
    [disabled]
  )[data-appearance="emphasized"]
  .tiptap-button-dropdown-arrows,
.tiptap-button[data-active-state="on"]:not(
    [disabled]
  )[data-appearance="emphasized"]
  .tiptap-button-dropdown-small,
.tiptap-button[data-state="open"]:not([disabled])[data-appearance="emphasized"]
  .tiptap-button-dropdown-arrows,
.tiptap-button[data-state="open"]:not([disabled])[data-appearance="emphasized"]
  .tiptap-button-dropdown-small {
  color: var(--tt-button-active-dropdown-arrows-color-emphasized);
}

.tiptap-button[data-active-state="on"]:not(
    [disabled]
  )[data-appearance="emphasized"]:hover,
.tiptap-button[data-state="open"]:not(
    [disabled]
  )[data-appearance="emphasized"]:hover {
  background-color: var(--tt-button-active-hover-bg-color-emphasized);
}

.tiptap-button[data-active-state="on"]:not(
    [disabled]
  )[data-appearance="subdued"],
.tiptap-button[data-state="open"]:not([disabled])[data-appearance="subdued"] {
  background-color: var(--tt-button-active-bg-color-subdued);
  color: var(--tt-button-active-text-color-subdued);
}

.tiptap-button[data-active-state="on"]:not(
    [disabled]
  )[data-appearance="subdued"]
  .tiptap-button-icon,
.tiptap-button[data-state="open"]:not([disabled])[data-appearance="subdued"]
  .tiptap-button-icon {
  color: var(--tt-button-active-icon-color-subdued);
}

.tiptap-button[data-active-state="on"]:not(
    [disabled]
  )[data-appearance="subdued"]
  .tiptap-button-icon-sub,
.tiptap-button[data-state="open"]:not([disabled])[data-appearance="subdued"]
  .tiptap-button-icon-sub {
  color: var(--tt-button-active-icon-sub-color-subdued);
}

.tiptap-button[data-active-state="on"]:not(
    [disabled]
  )[data-appearance="subdued"]
  .tiptap-button-dropdown-arrows,
.tiptap-button[data-active-state="on"]:not(
    [disabled]
  )[data-appearance="subdued"]
  .tiptap-button-dropdown-small,
.tiptap-button[data-state="open"]:not([disabled])[data-appearance="subdued"]
  .tiptap-button-dropdown-arrows,
.tiptap-button[data-state="open"]:not([disabled])[data-appearance="subdued"]
  .tiptap-button-dropdown-small {
  color: var(--tt-button-active-dropdown-arrows-color-subdued);
}

.tiptap-button[data-active-state="on"]:not(
    [disabled]
  )[data-appearance="subdued"]:hover,
.tiptap-button[data-state="open"]:not(
    [disabled]
  )[data-appearance="subdued"]:hover {
  background-color: var(--tt-button-active-hover-bg-color-subdued);
}

.tiptap-button[data-active-state="on"]:not(
    [disabled]
  )[data-appearance="subdued"]:hover
  .tiptap-button-icon,
.tiptap-button[data-state="open"]:not(
    [disabled]
  )[data-appearance="subdued"]:hover
  .tiptap-button-icon {
  color: var(--tt-button-active-icon-color-subdued);
}

.tiptap-button:disabled {
  background-color: var(--tt-button-disabled-bg-color);
  color: var(--tt-button-disabled-text-color);
}

.tiptap-button:disabled .tiptap-button-icon {
  color: var(--tt-button-disabled-icon-color);
}

.tiptap.ProseMirror {
  --blockquote-bg-color: var(--tt-gray-light-900);
  --link-text-color: var(--tt-brand-color-500);
  --separator-color: var(--tt-gray-light-a-200);
  --thread-text: var(--tt-gray-light-900);
  --placeholder-color: var(--tt-gray-light-a-400);
  --tt-highlight-green: #dcfce7;
  --tt-highlight-green-contrast: #c7fad8;
  --tt-highlight-blue: #e0f2fe;
  --tt-highlight-blue-contrast: #ceeafd;
  --tt-highlight-red: #ffe4e6;
  --tt-highlight-red-contrast: #ffccd0;
  --tt-highlight-purple: #f3e8ff;
  --tt-highlight-purple-contrast: #e4ccff;
  --tt-highlight-yellow: #fef9c3;
  --tt-highlight-yellow-contrast: #fbe604;
  --tiptap-mathematics-bg-color: var(--tt-gray-light-a-200);
  --tiptap-mathematics-border-color: var(--tt-brand-color-500);
}

.dark .tiptap.ProseMirror {
  --blockquote-bg-color: var(--tt-gray-dark-900);
  --link-text-color: var(--tt-brand-color-400);
  --separator-color: var(--tt-gray-dark-a-200);
  --thread-text: var(--tt-gray-dark-900);
  --placeholder-color: var(--tt-gray-dark-a-400);
  --tt-highlight-green: #509568;
  --tt-highlight-green-contrast: #47855d;
  --tt-highlight-blue: #6e92aa;
  --tt-highlight-blue-contrast: #5e86a1;
  --tt-highlight-red: #743e42;
  --tt-highlight-red-contrast: #643539;
  --tt-highlight-purple: #583e74;
  --tt-highlight-purple-contrast: #4c3564;
  --tt-highlight-yellow: #6b6524;
  --tt-highlight-yellow-contrast: #58531e;
  --tiptap-mathematics-bg-color: var(--tt-gray-dark-a-200);
  --tiptap-mathematics-border-color: var(--tt-brand-color-400);
}

.tiptap.ProseMirror {
  white-space: pre-wrap;
  outline: none;
  caret-color: var(--tt-cursor-color);
}

.tiptap.ProseMirror p:not(:first-child) {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  margin-top: 20px;
}

.tiptap.ProseMirror:not(.readonly):not(.ProseMirror-hideselection) ::selection {
  background-color: var(--tt-selection-color);
}

.tiptap.ProseMirror:not(.readonly):not(.ProseMirror-hideselection)
  .selection::selection {
  background: rgba(0, 0, 0, 0);
}

.tiptap.ProseMirror .selection {
  display: inline;
  background-color: var(--tt-selection-color);
}

.tiptap.ProseMirror .ProseMirror-hideselection {
  caret-color: rgba(0, 0, 0, 0);
}

.tiptap.ProseMirror > p.is-editor-empty:before {
  content: attr(data-placeholder);
  pointer-events: none;
  color: var(--placeholder-color);
  float: left;
  height: 0;
}

.tiptap.ProseMirror.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}

.tiptap.ProseMirror .ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
}

.tiptap.ProseMirror .ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: 1em;
  width: 1.25em;
  border-top: 1px solid #000;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

.tiptap.ProseMirror.ProseMirror-focused .ProseMirror-gapcursor,
.tiptap.ProseMirror.ProseMirror.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.tiptap.ProseMirror a span {
  text-decoration: underline;
}

.tiptap.ProseMirror s span {
  text-decoration: line-through;
}

.tiptap.ProseMirror u span {
  text-decoration: underline;
}

.tiptap.ProseMirror blockquote {
  position: relative;
  padding-left: 1em;
  padding-top: 0.375em;
  padding-bottom: 0.375em;
  margin: 1.5rem 0;
}

.tiptap.ProseMirror blockquote p {
  margin-top: 0;
}

.tiptap.ProseMirror blockquote.is-empty:before,
.tiptap.ProseMirror blockquote:before {
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  height: 100%;
  width: 0.25em;
  background-color: var(--blockquote-bg-color);
  content: "";
  border-radius: 0;
}

.tiptap.ProseMirror .collaboration-cursor__caret {
  border-right: 1px solid rgba(0, 0, 0, 0);
  border-left: 1px solid rgba(0, 0, 0, 0);
  pointer-events: none;
  margin-left: -1px;
  margin-right: -1px;
  position: relative;
  word-break: normal;
}

.tiptap.ProseMirror .collaboration-cursor__label {
  border-radius: 0.25rem;
  border-bottom-left-radius: 0;
  font-size: 0.75rem;
  font-weight: 600;
  left: -1px;
  line-height: 1;
  padding: 0.125rem 0.375rem;
  position: absolute;
  top: -1.3em;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  white-space: nowrap;
}

.tiptap.ProseMirror [data-type="emoji"] img {
  display: inline-block;
  width: 1.25em;
  height: 1.25em;
  cursor: text;
}

.tiptap.ProseMirror h1,
.tiptap.ProseMirror h2,
.tiptap.ProseMirror h3,
.tiptap.ProseMirror h4 {
  position: relative;
  color: inherit;
  font-style: inherit;
}

.tiptap.ProseMirror h1:first-child,
.tiptap.ProseMirror h2:first-child,
.tiptap.ProseMirror h3:first-child,
.tiptap.ProseMirror h4:first-child {
  margin-top: 0;
}

.tiptap.ProseMirror h1 {
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 3em;
}

.tiptap.ProseMirror h2 {
  font-size: 1.25em;
  font-weight: 700;
  margin-top: 2.5em;
}

.tiptap.ProseMirror h3 {
  font-size: 1.125em;
  font-weight: 600;
  margin-top: 2em;
}

.tiptap.ProseMirror h4 {
  font-size: 1em;
  font-weight: 600;
  margin-top: 2em;
}

.tiptap.ProseMirror hr {
  margin-top: 3em;
  margin-bottom: 3em;
  border: none;
  height: 1px;
  background-color: var(--separator-color);
}

.tiptap.ProseMirror.ProseMirror-focused hr.ProseMirror-selectednode {
  border-radius: 9999px;
  outline: 3px solid var(--tt-brand-color-500);
  outline-offset: 2px;
}

.tiptap.ProseMirror a {
  color: var(--link-text-color);
  text-decoration: underline;
}

.tiptap.ProseMirror [data-type="mention"] {
  display: inline-block;
  color: var(--tt-brand-color-500);
}

.tiptap.ProseMirror
  .tiptap-thread.tiptap-thread--unresolved.tiptap-thread--inline {
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
  color: var(--thread-text);
  border-bottom: 2px dashed var(--tt-color-yellow-base);
  font-weight: 600;
}

.tiptap.ProseMirror
  .tiptap-thread.tiptap-thread--unresolved.tiptap-thread--inline.tiptap-thread--hovered,
.tiptap.ProseMirror
  .tiptap-thread.tiptap-thread--unresolved.tiptap-thread--inline.tiptap-thread--selected {
  background-color: var(--tt-color-yellow-inc-2);
  border-bottom-color: rgba(0, 0, 0, 0);
}

.tiptap.ProseMirror
  .tiptap-thread.tiptap-thread--unresolved.tiptap-thread--block:has(img) {
  outline: 0.125rem solid var(--tt-color-yellow-base);
  border-radius: var(--tt-radius-xs, 0.25rem);
  overflow: hidden;
  width: -moz-fit-content;
  width: fit-content;
}

.tiptap.ProseMirror
  .tiptap-thread.tiptap-thread--unresolved.tiptap-thread--block:has(
    img
  ).tiptap-thread--selected {
  outline-width: 0.25rem;
  outline-color: var(--tt-color-yellow-base);
}

.tiptap.ProseMirror
  .tiptap-thread.tiptap-thread--unresolved.tiptap-thread--block:has(
    img
  ).tiptap-thread--hovered {
  outline-width: 0.25rem;
}

.tiptap.ProseMirror
  .tiptap-thread.tiptap-thread--unresolved.tiptap-thread--block:not(:has(img)) {
  border-radius: 0.25rem;
  border-bottom: 0.125rem dashed var(--tt-color-yellow-base);
  padding-bottom: 0.5rem;
  outline: 0.25rem solid rgba(0, 0, 0, 0);
}

.tiptap.ProseMirror
  .tiptap-thread.tiptap-thread--unresolved.tiptap-thread--block:not(
    :has(img)
  ).tiptap-thread--hovered,
.tiptap.ProseMirror
  .tiptap-thread.tiptap-thread--unresolved.tiptap-thread--block:not(
    :has(img)
  ).tiptap-thread--selected {
  background-color: var(--tt-color-yellow-base);
  outline-color: var(--tt-color-yellow-base);
}

.tiptap.ProseMirror
  .tiptap-thread.tiptap-thread--resolved.tiptap-thread--inline.tiptap-thread--selected {
  background-color: var(--tt-color-yellow-base);
  border-color: rgba(0, 0, 0, 0);
  opacity: 0.5;
}

.tiptap.ProseMirror .tiptap-thread.tiptap-thread--block:has(.react-renderer) {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.tiptap.ProseMirror .Tiptap-mathematics-editor {
  padding: 0 0.25rem;
  margin: 0 0.25rem;
  border: 1px solid var(--tiptap-mathematics-border-color);
  font-family: monospace;
  font-size: 0.875rem;
}

.tiptap.ProseMirror .Tiptap-mathematics-render {
  padding: 0 0.25rem;
}

.tiptap.ProseMirror .Tiptap-mathematics-render--editable {
  cursor: pointer;
  transition: background 0.2s;
}

.tiptap.ProseMirror .Tiptap-mathematics-render--editable:hover {
  background: var(--tiptap-mathematics-bg-color);
}

.tiptap.ProseMirror .Tiptap-mathematics-editor,
.tiptap.ProseMirror .Tiptap-mathematics-render {
  border-radius: var(--tt-radius-xs);
  display: inline-block;
}

:root {
  --tt-button-default-icon-color: var(--tt-gray-light-a-600);
  --tiptap-image-upload-active: var(--tt-brand-color-500);
  --tiptap-image-upload-progress-bg: var(--tt-brand-color-50);
  --tiptap-image-upload-icon-bg: var(--tt-brand-color-500);
  --tiptap-image-upload-text-color: var(--tt-gray-light-a-700);
  --tiptap-image-upload-subtext-color: var(--tt-gray-light-a-400);
  --tiptap-image-upload-border: var(--tt-gray-light-a-300);
  --tiptap-image-upload-border-hover: var(--tt-gray-light-a-400);
  --tiptap-image-upload-border-active: var(--tt-brand-color-500);
  --tiptap-image-upload-icon-doc-bg: var(--tt-gray-light-a-200);
  --tiptap-image-upload-icon-doc-border: var(--tt-gray-light-300);
  --tiptap-image-upload-icon-color: var(--white);
}

.dark {
  --tt-button-default-icon-color: var(--tt-gray-dark-a-600);
  --tiptap-image-upload-active: var(--tt-brand-color-400);
  --tiptap-image-upload-progress-bg: var(--tt-brand-color-900);
  --tiptap-image-upload-icon-bg: var(--tt-brand-color-400);
  --tiptap-image-upload-text-color: var(--tt-gray-dark-a-700);
  --tiptap-image-upload-subtext-color: var(--tt-gray-dark-a-400);
  --tiptap-image-upload-border: var(--tt-gray-dark-a-300);
  --tiptap-image-upload-border-hover: var(--tt-gray-dark-a-400);
  --tiptap-image-upload-border-active: var(--tt-brand-color-400);
  --tiptap-image-upload-icon-doc-bg: var(--tt-gray-dark-a-200);
  --tiptap-image-upload-icon-doc-border: var(--tt-gray-dark-300);
  --tiptap-image-upload-icon-color: var(--black);
}

.tiptap-image-upload {
  margin: 2rem 0;
}

.tiptap-image-upload input[type="file"] {
  display: none;
}

.tiptap-image-upload .tiptap-image-upload-dropzone {
  position: relative;
  width: 3.125rem;
  height: 3.75rem;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
}

.tiptap-image-upload .tiptap-image-upload-icon-container {
  position: absolute;
  width: 1.75rem;
  height: 1.75rem;
  bottom: 0;
  right: 0;
  background-color: var(--tiptap-image-upload-icon-bg);
  border-radius: var(--tt-radius-lg, 0.75rem);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tiptap-image-upload .tiptap-image-upload-icon {
  width: 0.875rem;
  height: 0.875rem;
  color: var(--tiptap-image-upload-icon-color);
}

.tiptap-image-upload .tiptap-image-upload-dropzone-rect-primary {
  color: var(--tiptap-image-upload-icon-doc-bg);
  position: absolute;
}

.tiptap-image-upload .tiptap-image-upload-dropzone-rect-secondary {
  position: absolute;
  top: 0;
  right: 0.25rem;
  bottom: 0;
  color: var(--tiptap-image-upload-icon-doc-border);
}

.tiptap-image-upload .tiptap-image-upload-text {
  color: var(--tiptap-image-upload-text-color);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: normal;
}

.tiptap-image-upload .tiptap-image-upload-text em {
  font-style: normal;
  text-decoration: underline;
}

.tiptap-image-upload .tiptap-image-upload-subtext {
  color: var(--tiptap-image-upload-subtext-color);
  font-weight: 600;
  line-height: normal;
  font-size: 0.75rem;
}

.tiptap-image-upload .tiptap-image-upload-preview {
  position: relative;
  border-radius: var(--tt-radius-md, 0.5rem);
  overflow: hidden;
}

.tiptap-image-upload
  .tiptap-image-upload-preview
  .tiptap-image-upload-progress {
  position: absolute;
  inset: 0;
  background-color: var(--tiptap-image-upload-progress-bg);
  transition: all 0.3s ease-out;
}

.tiptap-image-upload
  .tiptap-image-upload-preview
  .tiptap-image-upload-preview-content {
  position: relative;
  border: 1px solid var(--tiptap-image-upload-border);
  border-radius: var(--tt-radius-md, 0.5rem);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tiptap-image-upload
  .tiptap-image-upload-preview
  .tiptap-image-upload-file-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 2rem;
}

.tiptap-image-upload
  .tiptap-image-upload-preview
  .tiptap-image-upload-file-info
  .tiptap-image-upload-file-icon {
  padding: 0.5rem;
  background-color: var(--tiptap-image-upload-icon-bg);
  border-radius: var(--tt-radius-lg, 0.75rem);
}

.tiptap-image-upload
  .tiptap-image-upload-preview
  .tiptap-image-upload-file-info
  .tiptap-image-upload-file-icon
  svg {
  width: 0.875rem;
  height: 0.875rem;
  color: var(--tiptap-image-upload-icon-color);
}

.tiptap-image-upload .tiptap-image-upload-preview .tiptap-image-upload-details {
  display: flex;
  flex-direction: column;
}

.tiptap-image-upload .tiptap-image-upload-preview .tiptap-image-upload-actions {
  display: flex;
  align-items: center;
}

.tiptap-image-upload
  .tiptap-image-upload-preview
  .tiptap-image-upload-actions
  .tiptap-image-upload-progress-text {
  font-size: 0.75rem;
  color: var(--tiptap-image-upload-border-active);
}

.tiptap-image-upload
  .tiptap-image-upload-preview
  .tiptap-image-upload-actions
  .tiptap-image-upload-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  color: var(--tt-button-default-icon-color);
  transition: color 0.2s ease;
}

.tiptap-image-upload
  .tiptap-image-upload-preview
  .tiptap-image-upload-actions
  .tiptap-image-upload-close-btn
  svg {
  width: 1rem;
  height: 1rem;
}

.tiptap-image-upload .tiptap-image-upload-dragger {
  padding: 2rem 1.5rem;
  border: 1.5px dashed var(--tiptap-image-upload-border);
  border-radius: var(--tt-radius-md, 0.5rem);
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.tiptap-image-upload .tiptap-image-upload-dragger-active {
  border-color: var(--tiptap-image-upload-border-active);
  background-color: rgba(
    var(--tiptap-image-upload-active-rgb, 0, 0, 255),
    0.05
  );
}

.tiptap-image-upload .tiptap-image-upload-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
}

.tiptap.ProseMirror.ProseMirror-focused
  .ProseMirror-selectednode
  .tiptap-image-upload-dragger {
  border-color: var(--tiptap-image-upload-active);
}

:root {
  --tt-toolbar-height: 2.75rem;
  --tt-safe-area-bottom: env(safe-area-inset-bottom, 0px);
  --tt-toolbar-bg-color: var(--white);
  --tt-toolbar-border-color: var(--tt-gray-light-a-100);
}

.dark {
  --tt-toolbar-bg-color: var(--black);
  --tt-toolbar-border-color: var(--tt-gray-dark-a-50);
}

.tiptap-toolbar {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.tiptap-toolbar-group {
  display: flex;
  align-items: center;
  gap: 0.125rem;
}

.tiptap-separator + .tiptap-toolbar-group:empty,
.tiptap-toolbar-group:empty,
.tiptap-toolbar-group:empty + .tiptap-separator {
  display: none;
}

.tiptap-toolbar[data-variant="fixed"] {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  min-height: var(--tt-toolbar-height);
  background: var(--tt-toolbar-bg-color);
  border-bottom: 1px solid var(--tt-toolbar-border-color);
  padding: 0 0.5rem;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.tiptap-toolbar[data-variant="fixed"]::-webkit-scrollbar {
  display: none;
}

@media (max-width: 480px) {
  .tiptap-toolbar[data-variant="fixed"] {
    position: fixed;
    top: auto;
    bottom: 0;
    height: calc(var(--tt-toolbar-height) + var(--tt-safe-area-bottom));
    border-top: 1px solid var(--tt-toolbar-border-color);
    border-bottom: none;
    padding: 0 0.5rem var(--tt-safe-area-bottom);
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .tiptap-toolbar[data-variant="fixed"] .tiptap-toolbar-group {
    flex: 0 0 auto;
  }
}

.tiptap-toolbar[data-variant="floating"] {
  --tt-toolbar-padding: 0.25rem;
  --tt-toolbar-border-width: 1px;
  padding: 0.188rem;
  border-radius: calc(
    var(--tt-toolbar-padding) + var(--tt-radius-lg) +
      var(--tt-toolbar-border-width)
  );
  border: var(--tt-toolbar-border-width) solid var(--tt-toolbar-border-color);
  background-color: var(--tt-toolbar-bg-color);
  box-shadow: var(--tt-shadow-elevated-md);
  outline: none;
  overflow: hidden;
}

.tiptap-toolbar[data-variant="floating"][data-plain="true"] {
  padding: 0;
  border-radius: 0;
  border: none;
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0);
}

@media screen and (max-width: 768px) {
  .tiptap-toolbar[data-variant="floating"] {
    width: 100%;
    border-radius: 0;
    border: none;
    box-shadow: none;
  }
}

:root {
  --tt-highlight-green: #dcfce7;
  --tt-highlight-blue: #e0f2fe;
  --tt-highlight-red: #ffe4e6;
  --tt-highlight-purple: #f3e8ff;
  --tt-highlight-yellow: #fef9c3;
}

.dark {
  --tt-highlight-green: #509568;
  --tt-highlight-blue: #6e92aa;
  --tt-highlight-red: #743e42;
  --tt-highlight-purple: #583e74;
  --tt-highlight-yellow: #6b6524;
}

.tiptap-highlight-content {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  outline: none;
}

.tiptap-button-highlight {
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  margin: 0 -0.175rem;
  border-radius: 100%;
  background-color: var(--highlight-color);
  transition: transform 0.2s ease;
}

.tiptap-button-highlight:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: inherit;
  box-sizing: border-box;
  border: 1px solid var(--highlight-color);
  filter: brightness(95%);
  mix-blend-mode: multiply;
}

.dark .tiptap-button-highlight:after {
  filter: brightness(140%);
  mix-blend-mode: lighten;
}

.tiptap-button[data-active-state="on"] .tiptap-button-highlight:after {
  filter: brightness(80%);
}

.dark .tiptap-button[data-active-state="on"] .tiptap-button-highlight:after {
  filter: brightness(180%);
}

.tiptap.ProseMirror img {
  max-width: 100%;
  height: auto;
  display: block;
}

.tiptap.ProseMirror > img:not([data-type="emoji"] img) {
  margin: 2rem 0;
  outline: 0.125rem solid rgba(0, 0, 0, 0);
  border-radius: var(--tt-radius-xs, 0.25rem);
}

.tiptap.ProseMirror.ProseMirror-focused
  img:not([data-type="emoji"] img).ProseMirror-selectednode {
  outline-color: var(--tt-brand-color-500);
}

.tiptap.ProseMirror .tiptap-thread:has(> img) {
  margin: 2rem 0;
}

.tiptap.ProseMirror .tiptap-thread:has(> img) img {
  outline: 0.125rem solid rgba(0, 0, 0, 0);
  border-radius: var(--tt-radius-xs, 0.25rem);
}

.tiptap.ProseMirror .tiptap-thread img {
  margin: 0;
}
`;
