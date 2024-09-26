# ユタカさんテスト環境 ID11 「デザイン校正」

## 機能一覧
1. デザイン校正アプリの文字化け変換機能

## 利用方法
### 事前準備
https://nodejs.org/ でインストーラーをダウンロードして node.js をインストールします。インストールすると npm コマンドなどが使えるようになります。
コマンドラインで npm install と入力し実行します。package.json で定義されている依存ライブラリがインストールされます。

### TypeScriptからJavaScriptへのトランスコンパイル
基本的にはsrc/ts配下のTSファイルで開発を進めます。
JSファイルに変換させる場合は、以下のコマンドを実行します。
```
npx webpack-cli
```
コマンド実行後、src/ts配下のTSファイルがトランスコンパイルされ、dist配下にJSファイルとして保存されます。
kintoneに反映させるさいは、このトランスパイルされたJSファイルをアップロードします。