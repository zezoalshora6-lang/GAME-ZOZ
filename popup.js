document.getElementById('verifyBtn').addEventListener('click', () => {
  chrome.storage.local.set({ isActivated: true }, () => {
    document.getElementById('step-subscribe').style.display = 'none';
    document.getElementById('step-active').style.display = 'block';
  });
});

chrome.storage.local.get(['isActivated'], (result) => {
  if (result.isActivated) {
    document.getElementById('step-subscribe').style.display = 'none';
    document.getElementById('step-active').style.display = 'block';
  }
});
