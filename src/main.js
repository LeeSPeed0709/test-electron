const { ipcRenderer } = require('electron');

ipcRenderer.on('hi', res => {
  console.log(res);
})

ipcRenderer.on('syncHi', res => {
  console.log(res);
})

function sendHello() {
  ipcRenderer.send('hello', 'hello!');
}

function sendClose() {
  ipcRenderer.send('close', 'close it!');
}

