---
sidebar_position: 40
---

<div className="box">送り状実績CSV設定では、送り状システムに取り込む際のCSVデータのレイアウトを自由に作成できます。<br />また引当履歴からも作成したデータを出力することができるため、<br />自動梱包機取込み用のデータや後払いシステム取込み用のデータを作成することも可能です。</div>

## 送り状実績CSV設定 新規作成方法

* * *

送り状CSVレイアウトは以下手順で新規作成可能です。


### 引当履歴画面から出力する送り状CSVレイアウト 新規作成方法

![alt text](素材/送り状実績CSV設定1.gif)

①　出荷管理＞送り状実績CSV設定

②［<span className="green">**新規CSV出力設定**</span>］をクリック

③　以下項目を入力

\- **出力名**　　　　　：出荷管理＞引当履歴＞送り状にて選択可能なラジオボタン左横に表示させる  
名称を入力します。  
      出力時にどのようなデータか、分かりやすい名称をご登録ください。

\- **出力ファイル名**　：こちらの項目に入力した値＋yyyymmddにてファイルが出力されます。  
   出力時に判別しやすい名称をご登録ください。

\- **ヘッダーを非表示**：「カラム名」に入力する値をデータ出力時に1行目に出力させるか否か、  
                                   　　を選択します。ヘッダーを出力させない場合はチェックを入れてください。

\- **文字コード**　：『UTF-8形式』を選択できるようにする。UTF-8で出したい場合はチェックを入れ  
てください。

④　［行追加］ボタンで出力させたい列分、行を追加し以下項目を入力し［<span className="green">**登録**</span>］をクリック

\- **処理順**　　　　　：CSVデータを生成する際の処理の順番を入力します。  
   　　　　　　  通常は上から順に1, 2, 3...と入力します。

\- **列番号**　　　　　：CSVデータに出力させる列番号を入力します。

\- **カラム名**　　　　：CSVデータの1行目ヘッダー行に出力させる項目名を入力します。

\- **条件**　　　　　　：CSVデータにデータを出力させる条件を指定します。  
   　　　　　　　「なし」「データを指定」「列を指定」を選択できます。  
                  　　　　　　　 通常は「なし」を選択してください。

\- **処理**　　　　　　：CSVデータにデータを出力させる際の処理方法を選択します。  
「データを出力」「指定列を出力」「行を出力しない」「固定値出力」「文字列抽出」  
「文字列置換」「当日日時出力」「日付フォーマット」「配送方法コード置換」が選択  
    　 できます。通常は「データを出力」を選択、該当列に出力したい項目を選択します。  
             　　　　　       　  

⑤　本画面で作成したレイアウトは出荷管理＞引当履歴の送り状にてのみ出力いただけます。

![alt text](素材/送り状実績CSV設定1.png)


## 標準送り状CSVレイアウト複製方法

* * *

![alt text](素材/送り状実績CSV設定3.gif)

①　出荷管理＞送り状実績CSV設定

②　複製したい標準レイアウトの［<span className="navy">**編集**</span>］ボタンをクリック

③　必要に応じて出力名や出力名を変更し、紐づけ等を変更し［<span className="green">**変更**</span>］ボタンをクリック

④　複製されたレイアウトで送り状CSVをダウンロードできるようになります。

【2024年1月24日(水)のアップデートにて下記の仕様変更が行われます。】

・「B2ver6」の場合、ヤマト系の配送方法（ヤマト宅急便・宅急便コンパクト・ネコポス・クロネコゆうパケット）の注文のみが出力対象となります。

・「e飛伝Ⅲ」の場合、佐川急便の注文のみが出力対象となります。

・標準の「B2ver6」「e飛伝Ⅲ」を複製して独自の送り状CSVフォーマットを作成された場合も、同様の挙動となります。

別配送会社の注文を「B2ver6」および「e飛伝Ⅲ」にて出力される場合、CSVの出力口を新規でご作成頂きますよう、よろしくお願いいたします。

## 出力できる項目について

下記の項目が出力可能です。

<table border="1" style={{ width: '100%', display: 'table' }}>
  <tbody>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ width: '20%', textAlign: 'center' }}><strong>項目名</strong></td>
      <td style={{ width: '15%', textAlign: 'center' }}><strong>参照元</strong></td>
      <td style={{ width: '65%', textAlign: 'center' }}><strong>出力内容</strong></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>商品規格２</td>
      <td style={{ textAlign: 'center' }}>商品マスタ</td>
      <td>規格２が出力されます。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>商品規格１</td>
      <td style={{ textAlign: 'center' }}>商品マスタ</td>
      <td>商品マスタの規格１が出力されます。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>佐川依頼主住所（全て）</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文に紐づく発送元のショップ住所が出力されます。<br /><img src={require('./素材/送り状実績CSV設定5.png').default} alt="送り状実績CSV設定5" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>佐川お届先住所</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送付先住所１～３が結合された値が出力されます。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>佐川代引消費税金額10％</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>佐川着店コード</td>
      <td style={{ textAlign: 'center' }}>micrologi</td>
      <td>送付先住所に基づいた佐川急便の着店コードが出力されます。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>重量</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>重量に登録した値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定6.png').default} alt="送り状実績CSV設定6" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先国コードID</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送付先の国コードIDが出力されます。<br />出力されるIDは下記のようになっております。<br />１：日本<br />２：アンドラ ・・・</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>注文者国コードID</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文者の国コードIDが出力されます。<br />出力されるIDは下記のようになっております。<br />１：日本<br />２：アンドラ ・・・</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先州</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送付先州/都市に登録した値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定7.png').default} alt="送り状実績CSV設定7" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>注文者州</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文者州/都市に登録した値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定7.png').default} alt="送り状実績CSV設定7" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>品名２ ※全角の「２」</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>現在ご利用頂けません。（削除を検討中です。）</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>発行枚数</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>お届け先名称２</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>ご依頼主名称２</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>代引金額</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>独自５</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文拡張5の値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定8.png').default} alt="送り状実績CSV設定8" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>独自４</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>独自4の値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定9.png').default} alt="送り状実績CSV設定9" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>品名２ ※半角の「2」</td>
      <td style={{ textAlign: 'center' }}>ショップ設定</td>
      <td>完全新規で作成したフォーマット<br />→ <br />何も出力されません。<br /><br />完全新規で作成したフォーマット以外（標準フォーマットや標準フォーマットを複製して生成したフォーマット）<br />→<br />ショップ設定＞品名＞「品名2」の値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定10.png').default} alt="Screenshot - 2024-04-09T201408.307.png" /><br /><br />※B2 Ver6（もしくはB2 Ver6を複製したフォーマット）で、B2点数表示「有」にしても、総点数の値は付加されません。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>日本郵便仕分けコード</td>
      <td style={{ textAlign: 'center' }}>micrologi</td>
      <td>日本郵便の仕分けコードが出力されます。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>得意先ID</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>総商品重量</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>問い合わせ番号</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>追跡番号の値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定12.png').default} alt="送り状実績CSV設定12" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>便種コード</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先名_4</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先名_3</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先名_2</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先名_1</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送り状種類</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>サイズ</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>運送会社： ゆうパケット<br />送り状：ゆうパック 、ゆうパック(コンビニ払い)<br />上記運送会社と送り状の時固定３０で出力</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>入力機種</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>荷扱い</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>メッセージを送る</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>メール送信</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>運賃管理番号</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>ご請求先分類コード</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>消費税</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>注文ID</td>
      <td style={{ textAlign: 'center' }}>micrologi</td>
      <td>注文IDが出力されます。<br />micrologiというシステムでユニークなIDです。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>荷主コード</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>出荷区分</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>シールコード４</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>シールコード３</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>シールコード２</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>シールコード１</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>品名</td>
      <td style={{ textAlign: 'center' }}>ショップ設定</td>
      <td>ショップ設定＞品名＞「品名1」の値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定13.png').default} alt="Screenshot - 2024-04-09T201839.082.png" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>お届け予定日</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>お届け予定月</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>配達方法</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>着払い/代引き</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>商品</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>管理番号</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>西濃荷主人コード</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>注文日時</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文日時が出力されます。<br /><img src={require('./素材/送り状実績CSV設定14.png').default} alt="送り状実績CSV設定14" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>ギフト</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>購入者の住所</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>受信者アドレス</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>配送方法１</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>着店営業所コード</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>配達時間指定</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>店舗備考</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>店舗備考の内容が出力されます。<br /><img src={require('./素材/送り状実績CSV設定15.png').default} alt="送り状実績CSV設定15" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>商品拡張１</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>商品名</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>1明細目の品名の値が出力されます。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送料を含む</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>発送局コード</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>発送元名前１/発送元名前２</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>佐川ご依頼主コード</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>店舗名</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>認証番号</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>コンビニ等店舗名</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>出荷指示登録で取り込んだ値がそのまま出力されます。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>コンビニ店舗コード</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>出荷指示登録で取り込んだ値がそのまま出力されます。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>コンビニ事業者名</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>出荷指示登録で取り込んだ値がそのまま出力されます。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>コンビニ等コード</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>出荷指示登録で取り込んだ値がそのまま出力されます。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>コンビニ等判別コード</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>出荷指示登録で取り込んだ値がそのまま出力されます。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>グルーピングID</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>発送元名前２</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>発送元名前１</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>発送元住所２</td>
      <td style={{ textAlign: 'center' }}>発送元一覧<br />出荷指示<br />ショップ設定</td>
      <td>「発送元住所1」が長くなった場合に、途中から発送元住所2の列に値が入ります。<br />〇B2 Ver6 もしくは これを複製したフォーマット<br />→Shift-JIS換算で発送元住所の49バイト目以降が発送元住所2に移る<br />〇e飛伝3 もしくは これを複製したフォーマット<br />→Shift-JIS換算で発送元住所の33バイト目以降が発送元住所2に移る<br />〇ゆうプリR もしくは これを複製したフォーマット<br />→Shift-JIS換算で発送元住所の51バイト目以降が発送元住所2に移る<br />〇完全新規で作成したフォーマット<br />→Shift-JIS換算で発送元住所の51バイト目以降が発送元住所2に移る</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>発送元住所１</td>
      <td style={{ textAlign: 'center' }}>発送元一覧<br />出荷指示<br />ショップ設定</td>
      <td>〇基本的に、<br />・標準で用意されている送り状CSVフォーマット<br />・上記を複製して作成した送り状CSVフォーマット<br />については、システム管理＞発送元一覧の住所を参照しています。<br /><img src={require('./素材/送り状実績CSV設定16.png').default} alt="Screenshot - 2024-04-09T202424.817.png" /><br /><br />〇アカウント管理＞ショップ一覧にて、「注文者と送付先が違う場合は依頼主を注文者に設定する」にチェックが入っており、かつ注文者と送付先が違う注文の場合、<br />・標準で用意されている送り状CSVフォーマット<br />・上記を複製して作成した送り状CSVフォーマット<br />については、注文者の情報を参照しています。<br /><img src={require('./素材/送り状実績CSV設定17.png').default} alt="Screenshot - 2024-04-09T202530.248.png" /><br /><br />〇完全新規で作成した送り状CSVフォーマット（複製をせずにいちから作成した送り状CSVフォーマット）については、<br />アカウント管理＞ショップ一覧の情報を参照しています。<br />※「注文者と送付先が違う場合は依頼主を注文者に設定する」のチェックも関係なし<br /><img src={require('./素材/送り状実績CSV設定18.png').default} alt="Screenshot - 2024-04-09T202634.155.png" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>発送元郵便番号</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>発送元電話番号</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>注文者メールアドレス</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文者メールアドレスが出力されます。<br /><img src={require('./素材/送り状実績CSV設定19.png').default} alt="送り状実績CSV設定19" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>独自１</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文拡張１が出力されます。<br /><img src={require('./素材/送り状実績CSV設定20.png').default} alt="送り状実績CSV設定20" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>独自２</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文拡張２が出力されます。<br /><img src={require('./素材/送り状実績CSV設定21.png').default} alt="送り状実績CSV設定21" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>独自３</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文拡張３が出力されます。<br /><img src={require('./素材/送り状実績CSV設定22.png').default} alt="送り状実績CSV設定22" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>請求金額</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>請求金額の値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定23.png').default} alt="送り状実績CSV設定23" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>個口数</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>個口数の値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定24.png').default} alt="送り状実績CSV設定24" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>支払い方法</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>配送方法</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>営業所止置き</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送り状備考１</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送り状備考１が出力されます。<br /><img src={require('./素材/送り状実績CSV設定25.png').default} alt="送り状実績CSV設定25" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送り状備考２</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送り状備考２が出力されます。<br /><img src={require('./素材/送り状実績CSV設定26.png').default} alt="送り状実績CSV設定26" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送り状備考３</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送り状備考3が出力されます。<br /><img src={require('./素材/送り状実績CSV設定27.png').default} alt="送り状実績CSV設定27" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>SKU数</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>SKU数を出力します。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>商品総数</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>総点数を出力します。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>注文者名</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文者名が出力されます。<br /><img src={require('./素材/送り状実績CSV設定28.png').default} alt="送り状実績CSV設定28" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>注文者名（カナ）</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文者名（カナ）が出力されます。<br /><img src={require('./素材/送り状実績CSV設定29.png').default} alt="送り状実績CSV設定29" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>注文者住所１</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文者住所１が出力されます。<br /><img src={require('./素材/送り状実績CSV設定30.png').default} alt="送り状実績CSV設定30" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>注文者住所２</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文者住所２が出力されます。<br /><img src={require('./素材/送り状実績CSV設定31.png').default} alt="送り状実績CSV設定31" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>注文者住所３</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文者住所3が出力されます。<br /><img src={require('./素材/送り状実績CSV設定32.png').default} alt="送り状実績CSV設定32" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>注文者郵便番号</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文者郵便番号が出力されます。<br /><img src={require('./素材/送り状実績CSV設定33.png').default} alt="送り状実績CSV設定33" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>注文者電話番号</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文者電話番号が出力されます。<br /><img src={require('./素材/送り状実績CSV設定34.png').default} alt="送り状実績CSV設定34" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先名</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送付先名が出力されます。<br /><img src={require('./素材/送り状実績CSV設定35.png').default} alt="送り状実績CSV設定35" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先名（カナ）</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送付先名（カナ）が出力されます。<br /><img src={require('./素材/送り状実績CSV設定36.png').default} alt="送り状実績CSV設定36" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先住所１</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送付先住所１が出力されます。<br /><img src={require('./素材/送り状実績CSV設定37.png').default} alt="送り状実績CSV設定37" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先住所２</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送付先住所２が出力されます。<br /><img src={require('./素材/送り状実績CSV設定38.png').default} alt="送り状実績CSV設定38" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先住所３</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送付先住所３が出力されます。<br /><img src={require('./素材/送り状実績CSV設定39.png').default} alt="送り状実績CSV設定39" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先郵便番号</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送付先郵便番号が出力されます。<br /><img src={require('./素材/送り状実績CSV設定40.png').default} alt="送り状実績CSV設定40" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先電話番号</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送付先電話番号が出力されます。<br /><img src={require('./素材/送り状実績CSV設定41.png').default} alt="送り状実績CSV設定41" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>送付先メールアドレス</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送付先メールアドレスが出力されます。<br />CSVで登録した値が出力されます。</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>配送時間</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>配送時間の値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定42.png').default} alt="送り状実績CSV設定42" /><br />下記の値で出力されます。<br />午前中：01<br />12時～14時：12<br />14時～16時：14<br />16時～18時：16<br />18時～20時：18<br />19時～21時：19<br />20時～21時：20</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>配送指定日</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>配送指定日の値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定43.png').default} alt="送り状実績CSV設定43" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>出荷予定日</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>出荷予定日の値が参照されます。<br /><img src={require('./素材/送り状実績CSV設定44.png').default} alt="送り状実績CSV設定44" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>温度区分</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>温度区分の値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定45.png').default} alt="送り状実績CSV設定45" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>注文番号</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>注文番号の値が出力されます。<br /><img src={require('./素材/送り状実績CSV設定46.png').default} alt="送り状実績CSV設定46" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>着店バーコード</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>佐川着店コードの右から３桁を切り出す<br />※桁数は３桁固定</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>着店コード</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>佐川着店コードの右から３桁を除外した残りのデータ<br />※桁数は２桁～４桁の想定</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>着店ローカルコード</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>佐川着店コードの7桁になるように「$」で桁埋めして、<br />先頭に「c」、末尾に「d」を連結する。<br />※桁数は合計で9桁固定</td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>お届け予定eメール利用区分</td>
      <td style={{ textAlign: 'center' }}>&nbsp;</td>
      <td>固定値で「1」<br /><img src={require('./素材/送り状実績CSV設定47.png').default} alt="Screenshot_6.jpg" width="324" height="53" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>「お届け予定eメールe-mailアドレス」</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>送付先メールアドレスが出力されます。<br /><img src={require('./素材/送り状実績CSV設定48.png').default} alt="Screenshot_5.jpg" width="439" height="56" /></td>
    </tr>
    <tr style={{ verticalAlign: 'middle' }}>
      <td style={{ textAlign: 'center' }}>お届け予定eメールメッセージ</td>
      <td style={{ textAlign: 'center' }}>出荷指示</td>
      <td>本文に表示するメッセージを入力してください。（半角148文字全角74文字以内）</td>
    </tr>
  </tbody>
</table>