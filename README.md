# 買う前比較表

買う前に迷っている商品を、価格・スペック・URL・メモごとに整理できる比較表ツールです。
パソコン、自作PC、ガジェット、家電などの候補整理に使えます。

## 今回の公開前改善で追加・修正したこと

1. トップ画面に「何のサイトか」が分かる説明を追加
2. 4ステップの使い方ガイドを追加
3. 初期サンプルデータを用意
4. X共有用のOGP / Twitter Card設定を追加
5. OGP画像 `ogp.png` を作成
6. スマホ表示を調整
7. データ保存・バックアップの注意書きを追加
8. JSONバックアップ導線を分かりやすく追加
9. フィードバックページ `feedback.html` を追加
10. 利用規約 `terms.html` とプライバシーポリシー `privacy.html` を追加
11. favicon `favicon.svg` を追加


## 今回の追加改善

1. 「公開前テスト版」の表記を削除し、自然な説明文に変更
2. サンプル表示の矛盾を修正。保存データが空の初回状態ではサンプルを自動表示
3. 上部ボタンを整理。バックアップ・初期化は「データ管理」に集約
4. 「商品比較メモ」表記を減らし、サービス名を「買う前比較表」に統一
5. 「比較一覧グループ」を「比較表」に近い表現へ変更
6. フィードバックページにフォーム導線を追加

### Googleフォームを使う場合

`feedback.html` の中にある以下を書き換えてください。

```js
const GOOGLE_FORM_URL = "";
```

例：

```js
const GOOGLE_FORM_URL = "https://forms.gle/xxxxxxxxxxxxxx";
```

GoogleフォームURLを入れると、フィードバックページの「フォームで送る」ボタンが有効になります。

## 使い方

`index.html` をブラウザで開くだけで使えます。サーバー起動は不要です。

## 公開URL設定

現在のOGP URLは以下に設定済みです。

```html
<meta property="og:url" content="https://create-100-apps.github.io/kau-mae-hikakuhyo/" />
<meta property="og:image" content="https://create-100-apps.github.io/kau-mae-hikakuhyo/ogp.png" />
<meta name="twitter:image" content="https://create-100-apps.github.io/kau-mae-hikakuhyo/ogp.png" />
```

公開URLを変えた場合は、上記も変更してください。XでURLを貼ったときに画像を表示するには、`ogp.png` が公開URLから見える状態になっている必要があります。

## データ保存について

入力したデータは、基本的にブラウザ内のローカルストレージに保存されます。
別端末には自動共有されません。
ブラウザのデータ削除やシークレットモード利用で消える場合があります。
大事な比較表は、JSONバックアップを書き出してください。

## 公開後に確認すること

- スマホで商品追加できるか
- 自作PCのパーツ入力が崩れていないか
- グループ作成・名前変更・複製が動くか
- 新しいジャンルが追加後に選択欄へ出るか
- JSONバックアップを書き出し・読み込みできるか
- XにURLを貼ったときにOGP画像が表示されるか
- `terms.html` / `privacy.html` / `feedback.html` が開けるか

## ファイル構成

- `index.html`：メインアプリ
- `app.js`：アプリの動作
- `styles.css`：デザイン
- `ogp.png`：X共有用画像
- `favicon.svg`：アイコン
- `feedback.html`：改善案・バグ報告ページ
- `terms.html`：利用規約
- `privacy.html`：プライバシーポリシー
