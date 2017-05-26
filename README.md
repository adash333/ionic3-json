# ionic3-json 

ionic3でアプリ内部にjsonファイルを用いた例

詳細は以下  
http://twosquirrel.mints.ne.jp/?p=17553

## Requirement

- Node.js
- Ionic CLI

## Installation

    $ git clone git@github.com:adash333/ionic3-json.git
    $ cd ionic3-json
    $ npm install @ionic/app-scripts@latest --save-dev
    $ npm install

www2/ フォルダ内にある下記４つのファイルを、それぞれ、  
www/assets/　フォルダ内に、  
www/assets/data/images.json  
www/assets/img/moon.jpg  
www/assets/img/rainbow.jpg  
www/assets/img/sakura.jpg  
のように追加してから、  

    $ ionic serve

androidアプリの作成

    $ ionic platform add android
    $ ionic build android
  
(参考)  
http://twosquirrel.mints.ne.jp/?p=15712  
http://twosquirrel.mints.ne.jp/?p=15745  

## Anything Else

このコードは、以下の本の「Chapter 7 Ajax通信のきほんを学ぼう」のソースコードを参考に、Ionic3アプリに書き直しています。

これからWebをはじめる人のHTML＆CSS、JavaScriptのきほんのきほん Kindle版  
たにぐち まこと (著)  
発売日：2017年03月27日  
https://www.amazon.co.jp/dp/B06XT19H2D/

## Author

adash333
