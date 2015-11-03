# Embedded Polymer (Experimental)

## Chromeに拡張機能をインストールする

```
$ cd extension/
$ bower install
```
を実行した後、Chromeの「パッケージ化されていない拡張機能を読み込む」機能を用いて、ディレクトリ`extension/`を読み込む。

## デモページを開く

```
$ python -m SimpleHTTPServer 8000
```
などの方法でローカルサーバーを起動し、`http://localhost:8000/www/`にアクセスすると、デモを実行できます。
