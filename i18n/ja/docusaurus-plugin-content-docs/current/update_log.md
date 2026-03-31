---
sidebar_position: 4
sidebar_label: 更新履歴
---

# 更新履歴 {#UpdateLog}

----
### 2026-03-31

すべてのAI翻訳された英語、日本語、韓国語のドキュメントを更新しました。

[**`拡張変数`**](/#ExtendedVariableType) の宣言時に `CHARADATA` キーワードとの同時定義をサポートするようになりました。

`RANDDATA` 配列の長さは制限されなくなり、`csv/VariableSize.CSV` ファイルで変更できます。

`オーディオ` セッションウィンドウに新しい **`ウィンドウ最小化時に自動でミュート`** 設定項目を追加しました。この設定項目はデフォルトで有効です。

新しい [**`GDRAWNINEPATCH`**](new_com#gdrawninepatch) コマンドを追加し、点九図の描画をサポートします。

[**`CURRENTBGM`**](new_com#currentbgm) コマンドは、現在再生中のバックグラウンドミュージック名のリストを取得するように変更されました。このコマンドのパラメータ形式と戻り値のタイプが変更されました。

[**`PLAYBGM`**](modify_com#playbgm) コマンドのパラメータ形式が変更されました。さらに、バックグラウンドミュージックの再生グループ番号を指定するための `groupID` パラメータが追加されました。

[**`PLAYSOUND`**](modify_com#playsound) コマンドのパラメータ形式が変更されました。

[**`PAUSEBGM`**](new_com#pausebgm) コマンドに `groupID` パラメータが追加され、一時停止したいバックグラウンドミュージックのグループ番号を指定できるようになりました。

[**`STOPBGM`**](modify_com#stopbgm) コマンドに `groupID` パラメータが追加され、停止したいバックグラウンドミュージックのグループ番号を指定できるようになりました。

----
### 2026-03-04

[**`プラグイン機能`**](/#PluginFunc) を追加しました。これにより、ランチャー自体を変更せずに外部DLLプラグインを読み取ることで拡張メソッドを追加し、ゲームスクリプトで呼び出すことができます。

モッドは `csv` フォルダ内のプリセットファイルの読み取りをサポートするようになりました：`.csv` `Chara*.csv` `VarExt*.csv`。

`resources` フォルダはフォントファイルの読み取りをサポートするようになりました。`font` フォルダと同様に、フォントファイルを直接配置するだけです。

[**`REGEXPMATCH`**](modify_com#regexpmatch) コマンドのパラメータ形式の1つの第4パラメータは、文字列型参照可能配列、リスト、ハッシュリストを受け入れるようになりました。

[**`ENUMFILES`**](modify_com#enumfiles) コマンドの第4パラメータは、文字列型参照可能配列、リスト、ハッシュリストを受け入れるようになりました。

----
### 2026-02-16

`Emueraインターフェース言語` 設定項目は、メインインターフェースの `ヘルプ` メニューバーに移動しました。

FORM文法に関する変更：

- 補間変数を使用する際、変数のタイプに基づいて中括弧(`{STR}`)とパーセント記号(`%STR%`)を区別する必要がなくなりました。
- 新しい配置キーワード **`CENTER`** を追加しました。指定された文字長内でテキストを中央揃えにできます。例えば `{"確認", 6, CENTER}` は `" 確認 "` にフォーマットされます。
- 数値式を配置パラメータとして渡すことができます。例えば `{"確認", 6, 1 + 1}` は `" 確認 "` にフォーマットされます。  
  具体的な数値とその意味は以下の通りです：
  - 0 = 左揃え、`LEFT` キーワードと同等。
  - 1 = 右揃え、`RIGHT` キーワードと同等。
  - 2 = 中央揃え、`CENTER` キーワードと同等。

新しい [**`ARRAYREVERSE`**](new_com#arrayreverse) コマンドを追加し、配列またはリストの指定された範囲内の要素を逆順に並べ替えることができます。

----
### 2026-01-23

AI翻訳された英語、日本語、韓国語の全ドキュメントを更新しました。

ERDキーワード機能に関する変更：

- キーワードインデックス値を省略すると、システムはそのキーワードに未使用のインデックス値を自動的に割り当てます。  
  **警告：`SAVEDATA` で宣言された変数は、ゲームのセーブデータの混乱を避けるため、インデックス値を省略しないことをお勧めします。**
- 既存のキーワード名をインデックス値として記入すると、そのキーワードのインデックス値を直接参照します。
- これらの改善された機能の使用方法については、[**`文法、コマンドおよびプログラムの互換性変更`**](/#CompatibilityChanges) の `ERDキーワード機能例` を参照してください。

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

キャラクター型二次元配列は、第1パラメータの省略をサポートするようになりました（**`キャラクタ変数の引数を補完しない`** (キャラクター変数のパラメータを自動的に補完しない) 設定項目が有効でない場合）。

[**`ERDNAME`**](modify_com#erdname) 命令は、第3パラメータを省略した場合、配列の最後の次元の添字キーワードを検索するようになりました。

[**`リスト関連`**](new_com#ListRelated)、[**`ハッシュリスト関連`**](new_com#HashListRelated)、[**`ディクショナリ関連`**](new_com#DictRelated)、[**`ディクショナリコレクション関連`**](new_com#DictItemRelated) 命令を追加しました。

指定されたSpriteAnimeの再生時間にオフセット値を追加するための [**`SPRITEANIMEOFFSETTIME`**](new_com#spriteanimeoffsettime) 命令を追加しました。

指定されたソースMapのすべての要素をターゲットMapにコピーするための [**`MAP_COPY`**](new_com#map_copy) 命令を追加しました。
