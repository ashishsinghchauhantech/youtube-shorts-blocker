# youtube-shorts-blocker
A Chrome Extension that helps you stay focused by automatically blocking YouTube Shorts content. Remove distractions from short-form videos while browsing YouTube.

---

## Features
- Automatically removes YouTube Shorts (`ytd-reel-shelf-renderer` and Shorts links)
- On-page toggle button to enable/disable blocking in real-time
- Handles dynamically loaded content using **MutationObserver**
- Fully compatible with **Chrome Manifest V3**

---

## Technologies Used
- HTML, CSS, JavaScript
- Chrome Extension APIs (`manifest.json`)
- DOM manipulation and MutationObserver

---

## Installation
1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder containing this repository.
5. Visit YouTube and use the toggle button to block/unblock Shorts.

---

## Usage
- Click the **ON/OFF toggle button** at the top-right corner of YouTube to enable or disable Shorts blocking.
- Shorts are removed dynamically, even as new content loads.

---

## Screenshot
![Shorts Blocker Toggle](
<img width="1336" height="602" alt="OFF" src="https://github.com/user-attachments/assets/f8ad45e4-8fc1-4c03-9c4f-b679a34c3bbd" />
<img width="1342" height="600" alt="ON" src="https://github.com/user-attachments/assets/17a6b0b5-7677-45a7-abe9-57a09aa00b54" />
)

---

## Contributing
Feel free to submit **issues or pull requests** to improve this extension.

---

## License

MIT License
