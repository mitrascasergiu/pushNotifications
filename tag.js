  window.onload = function() {  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('https://vcisaasintegrationsa.blob.core.windows.net/modules/service-worker.js')
        .catch((err) => {
            alert(err);
        });
    } else {
      alert('fail!');
    }
  }