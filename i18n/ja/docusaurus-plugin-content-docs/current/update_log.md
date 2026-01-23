---
sidebar_position: 4
sidebar_label: 更新履歴
---

# 更新履歴 {#UpdateLog}

----
### 2026-01-23

AI翻訳された英語、日本語、韓国語の全ドキュメントを更新しました。

- ERDキーワード機能の改善:
    - キーワードインデックス値を省略すると、システムはそのキーワードに未使用のインデックス値を自動的に割り当てます。  
      **警告: SAVEDATA宣言付きの変数は、ゲームセーブデータの混乱を避けるため、インデックス値の省略を推奨しません。**
    - 既存のキーワード名をインデックス値として入力すると、そのキーワードのインデックス値が直接参照されます。
- これらの改善機能の使用方法については、[**`プログラム・命令の互換性変更`**](/#CompatibilityChanges) の `ERDキーワード機能の例` を参照してください。

[**`TRYTOINT`**](new_com#trytoint) 命令に2番目のパラメータ `outValue` が追加され、変換結果を受け取る整数型変数を指定します。省略した場合、`RESULT:1` が変換結果を受け取るために使用されます。

----
### 2026-01-11

拡張子 `.ogg` の `Ogg Vorbis` 形式のオーディオファイルの読み込みをサポートします。

スクリーンショット機能をサポートします。メニューバーの `ヘルプ → スクリーンショットボタン` から現在の画面をファイルとして保存するか、新しく追加された [**`GSNAPSHOT`**](new_com#gsnapshot) 命令を使用して現在の画面の画像データを取得できます。

[**`ARRAYSORT`**](modify_com#arraysort) 命令の第1パラメータ `Array1D_List` はリストを渡すことをサポートするようになりました。

[**`PLAYSOUND`**](modify_com#playsound) 命令に以下のパラメータを追加しました:  
第3パラメータ `groupID` を追加し、この再生のサウンドエフェクトグループを指定します。[**`STOPSOUND`**](modify_com#stopsound) 命令と組み合わせて同じグループのすべてのサウンドエフェクトを停止できます。省略可能 `(0)`。  
第4パラメータ `delay` を追加し、この再生の遅延時間をミリ秒単位で指定します。省略可能 `(0)`。

[**`STOPSOUND`**](modify_com#stopsound) 命令に `groupID` パラメータを追加しました。停止したいサウンドエフェクトグループを指定します。このパラメータを省略するとすべてのサウンドエフェクトを停止します。

----
### 2025-10-24

`GIF` 、`WEBP` などの動的画像の読み込みと再生をサポートします。静的画像と同様にリソースファイルで定義し、ERBスクリプト内で同じ方法で印刷/表示するだけです。  
[**`SETANIMETIMER`**](modify_com#setanimetimer) 命令を使用して画面を更新し、スムーズな再生効果を得ることができます。

[**`INRANGE`**](modify_com#inrange) 命令の第1パラメータ `value` は文字列を受け入れるようになり、文字列の照合順序が指定範囲内にあるかどうかを判断するために使用されます。

----
### 2025-10-01

[**`FOR-NEXT`**](modify_com#for-next) と [**`REPEAT-REND`**](modify_com#repeat-rend) 制御文の開始値、終了値、ステップ値などの一時パラメータは、関数とともにスタックに出入りするようになりました。

指定されたコレクション内のすべての要素を反復処理するための [**`FOREACH-NEXTF`**](new_com#foreach-nextf) 制御文を追加しました。

新しい拡張変数型 [**`配列型ディクショナリ`**](/#ExTypeDictDim) を追加しました。

ディクショナリ変数がユーザー入力の主キーと副キーに対して厳密なチェックを実行するかどうかを制御する変数キーワード [**`HARDCHECK`**](new_com#hardcheck) を追加しました。

指定されたパラメータ値のハッシュコードを生成するための [**`HASH`**](new_com#hash) 命令を追加しました。

拡張変数型 [**`ディクショナリ`**](/#ExTypeDict) は `CONST` キーワードでの宣言をサポートするようになりました。

- [**`ARRAYCOPY`**](modify_com#arraycopy) 命令の変更:
    - 第3パラメータ `isLastDimOnly` を追加し、ソース配列の最後の次元の要素のみをコピーするかどうかを指定します。省略可能 (`0`)。
    - 第2パラメータ `destVarName` は、リストとハッシュリストの変数名を渡すことをサポートするようになりました。`isLastDimOnly` の値が `0` の場合、ソース配列のすべての要素がターゲットリストに追加されます。

----
### 2025-09-11

[**`ARRAYTIDY`**](new_com#arraytidy) 命令は、リストの整理後に空の要素を削除するようになりました。

[**`DICTCOPY`**](new_com#dictcopy) 命令は、ディクショナリの作成後にターゲット変数内の要素の総数を返すようになりました。

- 以下の命令は、配列を作成する際に正常にコピーされた要素数を返し、リストまたはハッシュリストを作成する際にターゲット変数内の要素の総数を返すようになりました:
    - [**`LISTCOPY`**](new_com#listcopy)
    - [**`HASHLISTCOPY`**](new_com#hashlistcopy)
    - [**`DICTGETKEYS`**](new_com#dictgetkeys)
    - [**`DICTGETVALUES`**](new_com#dictgetvalues)
    - [**`DICTITEMGETKEYS`**](new_com#dictitemgetkeys)

指定されたパラメータ内に同じ値があるかどうかをチェックする [**`ANYSAME`**](new_com#anysame) 命令を追加しました。

- 以下の命令に、配列、リスト、ハッシュリストを受け入れるパラメータ形式を追加しました:
    - [**`STRJOIN`**](modify_com#strjoin)
    - [**`SPINEANIMLIST`**](new_com#spineanimlist-spineskinlist)
    - [**`SPINESKINLIST`**](new_com#spineanimlist-spineskinlist)

- 以下の命令に、配列とリストを受け入れるパラメータ形式を追加しました:
    - [**`ARRAYMSORT`**](modify_com#arraymsort)

----
### 2025-07-11

Spineランタイムの **4.2.xx** バージョンをサポートします。

指定されたディクショナリコレクション内のすべての主キー名を取得するための [**`DICTITEMGETKEYS`**](new_com#dictitemgetkeys) 命令を追加しました。

[**`STRSPLIT`**](new_com#strsplit) 命令に第4パラメータ `removeEmpty` を追加し、分割後の空の要素を削除するかどうかを指定します。

[**`LISTREMOVEAT`**](new_com#listremoveat) 命令に第3パラメータ `removeCount` を追加し、削除する要素数を指定します。デフォルト値は `1` です。

- 以下の命令に、配列、リスト、ハッシュリストを受け入れるパラメータ形式を追加しました:
    - [**`FINDEMOJI`**](new_com#findemoji)
    - [**`STRSPLIT`**](new_com#strsplit)
    - [**`LISTCOPY`**](new_com#listcopy)
    - [**`HASHLISTCOPY`**](new_com#hashlistcopy)
    - [**`DICTGETKEYS`**](new_com#dictgetkeys)
    - [**`DICTGETVALUES`**](new_com#dictgetvalues)
    - [**`MODULELIST`**](new_com#modulelist)
    - [**`GETRESOURCEEXT`**](new_com#getresourceext)
    - [**`TEXTLIST`**](new_com#textlist)
    - [**`LANGUAGELIST`**](new_com#languagelist)

- 以下の命令に、配列とリストを受け入れるパラメータ形式を追加しました:
    - [**`ARRAYTIDY`**](new_com#arraytidy)  
      リストの場合、整理後の空の要素は削除されません。

----
### 2025-06-08

AI翻訳された英語、日本語、韓国語版を全ドキュメントに追加しました。

[**`Audioリソース`**](/#AudioFunc) が `sound` フォルダから `resources` に統合されました。

[**`GETRESOURCEEXT`**](new_com#getresourceext) 命令で取得されるリソースファイルの拡張子に `.` (ドット) が含まれるようになりました。

----
### 2025-05-07

サイズ変更が必要な配列変数をマークするためのユーザー定義変数キーワード [**`RESIZE`**](new_com#resize) を追加しました。

指定されたユーザー定義配列のサイズを変更するための [**`ARRAYRESIZE`**](new_com#arrayresize) 命令を追加しました。

[**`拡張変数型`**](/#ExtendedVariableType) を追加し、リスト、ハッシュリスト、ディクショナリなどの変数型をサポートします。

キャラクター型二次元配列が第1パラメータの省略をサポートするようになりました（**`キャラクタ変数の引数を補完しない`** 設定が有効でない場合）。

[**`ERDNAME`**](modify_com#erdname) 命令は、第3パラメータを省略した場合、配列の最後の次元の添字キーワードを検索するようになりました。

[**`リスト関連`**](new_com#ListRelated)、[**`ハッシュリスト関連`**](new_com#HashListRelated)、[**`ディクショナリ関連`**](new_com#DictRelated)、[**`ディクショナリコレクション関連`**](new_com#DictItemRelated) 命令を追加しました。

指定されたSpriteAnimeの再生時間にオフセット値を追加するための [**`SPRITEANIMEOFFSETTIME`**](new_com#spriteanimeoffsettime) 命令を追加しました。

指定されたソースMapのすべての要素をターゲットMapにコピーするための [**`MAP_COPY`**](new_com#map_copy) 命令を追加しました。
