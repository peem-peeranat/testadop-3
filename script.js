let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      let iframe = document.getElementById('timerFrame');
      iframe.contentWindow.postMessage(entry.isIntersecting ? 'start' : 'stop', '*');
  });
}, {
  threshold: 0.5
});

observer.observe(document.getElementById('timerBoxIndex'));

window.addEventListener('message', function(event) {
  if (event.data.timerUpdate) {
      document.getElementById('timerBoxIndex').textContent = event.data.timerUpdate;
  }
});
