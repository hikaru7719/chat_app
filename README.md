# chat_app
Chat_app is chat application system written by server-side JavaScript ,Node.js.
## チャットアプリはNode.jsで書かれた質問投稿＆チャット解決システムです。
socket.ioを用いてチャット機能を実装しました。
' http://localhost:3000/login 'にアクセスするとログインできます。
ユーザーがいない場合は' http://localhost:3000/ 'にアクセスするとユーザー追加ができます。
' http://localhost:3000/create 'でチャットの質問一覧と新しい質問を投稿することが来ます。
一覧から質問を選択するとその質問についてチャットすることができます。
socket.ioを使っているのでチャットを送信すると参加しているメンバー全員の画面が更新されます。
![チャットイメージ](./chat_image.png)
## node_moduleはgitignoreしています。
