#环境搭建
###设置镜像
npm config set ELECTRON_MIRROR https://cdn.npm.taobao.org/dist/electron/
npm install electron --save-dev
###其实cnpm的意图并不是简单给我们用来去下载npm资源的，它是为cnpm服务端（也可以理解成npm的私有仓库）服务的。
###所以，我们就需要一个更智能的npm了，可以去我们使用npm install 时自动从国内的镜像下载，而我们使用npm pusblish又能发布到官方的register上！
npm install --global smart-npm --registry=https://registry.npm.taobao.org/
### 第一次builder需要下载很多东西，会比较慢,需要多尝试几次
### 或者https://www.jianshu.com/p/c5d48a58eeb3试试，不行可以增加下面的镜像，或者下载文件放到对应的文件夹中
###增加镜像
"build": {
    "electronDownload":{
      "mirror":"https://npm.taobao.org/mirrors/electron/"
    }
}

smart-npm install electron-builder --save-dev
smart-npm install electron-packager --save-dev


#由于没有Mac电脑测试，只在windows平台测试过

yarn // 安装依赖

#开发模式
yarn start

electron .

#生成桌面应用

yarn package-win // 生成windows系统下的桌面应用

yarn package-mac // 生成os系统下的桌面应用

yarn package-linux // 生成Linux下的桌面应用
