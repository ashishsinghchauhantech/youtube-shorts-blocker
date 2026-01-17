console.log("blocker.js loaded");

// =====================
// 1. Inject button
// =====================
function injectButton() {
  if (document.querySelector("#shorts-blocker-btn")) return;

  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "10px";
  container.style.right = "10px";
  container.style.zIndex = "9999999";
  container.style.pointerEvents = "auto";

  const button = document.createElement("button");
  button.id = "shorts-blocker-btn";
  button.textContent = "OFF";
  button.style.padding = "10px 15px";
  button.style.backgroundColor = "rgb(229, 229, 229)";
  button.style.color = "black";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.fontWeight = "bold";
  button.style.boxShadow = "0px 2px 5px rgba(0,0,0,0.3)";
  button.style.pointerEvents = "auto";

  container.appendChild(button);
  document.body.appendChild(container);

  // =====================
  // 2. Shorts removal
  // =====================
  let observer = null;

  function removeShorts() {
    document.querySelectorAll('ytd-reel-shelf-renderer, a[href*="shorts"]').forEach(el => el.remove());
  }

  function startBlocking() {
    removeShorts();
    if (!observer) {
      observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
              if (node.matches('ytd-reel-shelf-renderer') || node.querySelector('a[href*="shorts"]')) {
                node.remove();
              }
            }
          });
        });
      });
    }
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function stopBlocking() {
    if (observer) observer.disconnect();
  }

  // =====================
  // 3. Toggle button
  // =====================
  button.addEventListener("click", () => {
    if (button.textContent === "ON") {
      button.textContent = "OFF";
      button.style.backgroundColor = "rgb(229, 229, 229)";
      button.style.color = "black";
      stopBlocking();
    } else {
      button.textContent = "ON";
      button.style.backgroundColor = "green";
      button.style.color = "white";
      startBlocking();
    }
  });
}

// =====================
// 4. Handle SPA navigation
// =====================
const observer = new MutationObserver(() => {
  injectButton();
});
observer.observe(document.body, { childList: true, subtree: true });

// Inject immediately on first load
injectButton();
