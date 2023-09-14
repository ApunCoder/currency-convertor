const {app,BrowserWindow} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 600,
        height: 800,
        title: "Currency Convertor",
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('index.html');
    // For open dev tools
    // win.webContents.openDevTools()
}

app.whenReady().then(createWindow);