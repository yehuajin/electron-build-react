// 引入electron并创建一个Browserwindow
const {app, BrowserWindow, globalShortcut, dialog} = require('electron')
const path = require('path')
const url = require('url')

// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let mainWindow

function createWindow () {
//创建浏览器窗口,宽高自定义具体大小你开心就好
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // mainWindow.loadURL(url.format({
  //   pathname: `file://${__dirname}/index.html`,
  //   protocol: 'file:',
  //   slashes: true
  // }))
  // mainWindow.loadURL(`file://${__dirname}/app/question-list.html`);
  mainWindow.loadURL('http://10.3.98.154:9081/#/login');

  // 打开开发者工具，默认不打开
  // mainWindow.webContents.openDevTools()

  // 关闭window时触发下列事件.
  mainWindow.on('close', function (e) {
    // mainWindow = null
    // app.exit()
    dialog.showMessageBox({
      type: 'info',
      title: 'Information',
      defaultId: 0,
      message: '确定要关闭吗？',
      buttons: ['最小化','直接退出']
    },(index)=>{
      if(index===0){
        e.preventDefault();		//阻止默认行为，一定要有
        mainWindow.minimize();	//调用 最小化实例方法
      } else {
        mainWindow = null;
        //app.quit();	//不要用quit();试了会弹两次
        app.exit();		//exit()直接关闭客户端，不会执行quit();
      }
    })
  })
  var ret = globalShortcut.register('ctrl+shift+i', function() {
    mainWindow.webContents.openDevTools()
  })
  if (!ret) {
    console.log('registration failed');
  }
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.whenReady().then(createWindow)

// 所有窗口关闭时退出应用.
app.on('window-all-closed', function () {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
  // if (mainWindow === null) {
  //   createWindow()
  // }
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
