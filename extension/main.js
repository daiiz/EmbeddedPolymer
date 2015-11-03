/*
 * ふだん <link rel="import" ~> で読み込んでいるリソース
 */
var uris = [
    "bower_components/polymer/polymer.html",
    "price-tax.html"
];

// linkタグをheadに追加する
uris.forEach(function (uri) {
    var link = document.createElement('link');
    link.rel = 'import';
    link.href = chrome.extension.getURL(uri);
    link.onload = function(e) {
        console.info('Loaded Polymer.');
    };
    link.onerror = function(e) {
    };
    document.head.appendChild(link);
});
