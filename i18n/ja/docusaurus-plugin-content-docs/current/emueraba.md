---
sidebar_position: 1
sidebar_label: 紹介
slug: /
---

# EmueraBA

### 紹介 {#Introduction}

<center>
![](/img/main_window.png)
</center>

**EmueraBA** ランチャーは [**`EmueraEE+EM`**](https://gitlab.com/EvilMask/emuera.em) ランチャーから改変されており、現在 `.NET Framework 4.8` プラットフォームを使用して構築されています。

ランチャーのデフォルトタイトルは `EmueraBA` に変更され、ランチャーのデフォルトアイコンが変更されました。

グラフィックライブラリを [**`SkiaSharp`**](https://github.com/mono/SkiaSharp) に交換し、画面表示と画像描画に関する機能は全てSkiaSharpに切り替えられ、**`描画インターフェース`** (グラフィック描画インターフェース) 設定項目は削除されました。  
サポートされている画像形式については、[**`GETRESOURCEEXT`**](new_com#getresourceext) の `使用例` セクションを参照してください。

`GIF` 、`WEBP` アニメーション画像の読み取りと再生をサポートしています。静的画像と同様にresourcesリソースファイルで定義し、ERBスクリプトで同じ方法で印刷表示するだけです。  
[**`SETANIMETIMER`**](modify_com#setanimetimer) コマンドを使用して画面をリフレッシュし、スムーズな再生効果を得ることができます。

自動文字範囲認識機能が実装され、中国語、日本語、韓国語、英語、絵文字文字を正しく認識し長さを計算できるようになりました。**`内部で使用する東アジア言語`** (内部で使用する東アジア言語) 設定項目は削除されました。

`表示設定` インターフェースに新しい **`タブ文字幅`** (タブ文字幅) 設定項目が追加されました。この設定項目は、テキスト内の `タブ文字(\t)` の文字長を調整し、デフォルト値は `8` です。  
タブ文字は、前のテキストの文字長に基づいて自身の文字長を自動的に調整します。例えば、タブ文字の前にテキスト `111` がある場合、現在のタブ文字は5文字の長さを占めます。

新しいユーザー定義変数キーワード **`RESIZE`** が追加されました。このキーワードは、配列サイズをリセットする必要がある変数をマークするために使用されます。このキーワードの使用に関する詳細については、[**`ARRAYRESIZE`**](new_com#arrayresize) を参照してください。

スクリーンショット機能をサポートしています。メニューバーの `ヘルプ → スクリーンショットボタン` から現在の画面をファイルとして保存するか、新しく追加された [**`GSNAPSHOT`**](new_com#gsnapshot) コマンドを使用して現在の画面の画像データを取得できます。

`resources` フォルダはフォントファイルの読み取りをサポートしています。`font` フォルダと同様に、フォントファイルを直接配置するだけです。

`RANDDATA` 配列の長さは制限されなくなり、`csv/VariableSize.CSV` ファイルで変更できます。

----
### モッド機能 {#ModuleFunc}

:::info[モッド機能]

**モッド読み込みメカニズムが追加され、ランチャーメニューバーに新しい `モッドリスト` セッションウィンドウが追加され、ここでモッドを表示、オン/オフ、およびモッドの読み込み順序を調整できます。**

<center>
![](/img/module_setting.png)
</center>

モッドを追加する方法は次のとおりです：

- ゲームメインディレクトリに新しい `mod` フォルダを作成します。このフォルダは**モッドメインディレクトリ**です。
- `mod` フォルダの下に**モッドフォルダ**を作成します。フォルダ名は制限されません。例えば `MyMod` です。
- `MyMod` フォルダに `_mod.csv` という名前の**モッド識別ファイル**を作成し、以下の表の属性に従って内容を記入します：

|属性         |説明|
|:---:        |---|
|ID           |このモッドの一意の識別子。この識別子が空または他のモッドと名前が重複している場合、モッドは認識されません。**ID名が関数命名規則に従っていることを確認し、作成後の変更は推奨されません**。|
|Name         |このモッドの表示名。|
|Authors      |このモッドの作者名。|
|Cover        |このモッドの表示カバー。モッド内の画像を読み取るには、モッドパスとして `{0}` を記入できます。例えば `{0}resources/cover.png`|
|Description  |このモッドの表示説明。複数行で続けることができます。**Description属性は他の属性の後に記述してください**。|

```csv title="ファイルパスと例示内容：mod/MyMod/_mod.csv"
ID,MyMod
Name,私のモッド v1.0
Authors,Tom & Jerry
Cover,{0}resources/cover.png
Description,私のモッドの説明
私のモッドの説明1
私のモッドの説明2
```

次に、モッドフォルダに次のリソースファイルを追加できます：

- プリセットファイルを追加するために `csv` フォルダを作成：`.csv` `Chara*.csv` `VarExt*.csv`。
- スクリプトファイルを追加するために `erb` フォルダを作成：`.erb` `.erh` `.erd`。
- 以下のリソースを追加するために `resources` フォルダを作成：
  - 画像リソース：`.csv` `.png` `.jpg` など。サポートされている画像形式については、[**`GETRESOURCEEXT`**](new_com#getresourceext) の `使用例` セクションを参照してください。
  - オーディオリソース：`.csv` `.ogg` `.m4a` など。サポートされているオーディオ形式については、[**`GETRESOURCEEXT`**](new_com#getresourceext) の `使用例` セクションを参照してください。
  - Spineリソース：`.csv` `.atlas` `.skel` `.json`。
  - フォントリソース：`.ttf` `.otf`。
  - プラグインリソース：`.csv` `.dll`。
- 多言語リソースを追加するために `text` フォルダを作成：`.json`。
- フォントリソースを追加するために `font` フォルダを作成：`.ttf` `.otf`。

モッド内のファイルはゲームメインディレクトリのファイルと違いはなく、ファイル名は制限されませんが、モッド間の内容重複問題に注意する必要があります：

- プリセットファイル：`.csv` `Chara*.csv` `VarExt*.csv`
  - 内容が重複する場合、同じモッド内では最初の内容が選択され警告が発せられます。異なるモッド間では、後ろのモッドの内容が選択され警告が発せられます。
- スクリプトファイル：`.erb` `.erh` `.erd`
  - 内容が重複する場合、同じモッド内では最初の内容が選択され警告が発せられます。異なるモッド間では、後ろのモッドの内容が選択され警告が発せられます。
- 画像リソース、オーディオリソース、Spineリソース
  - リソース名が重複する場合、同じモッド内では最初の内容が選択され警告が発せられます。異なるモッド間では、後ろのモッドの内容が選択されます。
- フォントリソース
  - フォントの正式名が重複する場合、同じモッド内では最初の内容が選択されます。異なるモッド間では、後ろのモッドの内容が選択されます。
- 多言語リソース
  - キー名パスが完全に同じ場合、同じモッド内では最後の内容が選択されます。異なるモッド間では、後ろのモッドの内容が選択されます。
- プラグインリソース
  - 拡張メソッド名が重複する場合、同じモッド内では最初の内容が選択され警告が発せられます。異なるモッド間では、後ろのモッドの内容が選択されます。

:::

----
### 多言語機能 {#Multilingual}

:::info[多言語機能]

**多言語機能は、クリエイターがゲーム内のテキストを整理してローカライズ翻訳を容易にし、ゲーム実行時にランチャーが利用可能で優先される言語コンテンツを自動的に統合して、多言語テキストを迅速に表示できます。**

多言語テキストを追加する方法は以下の通りです。`簡体字中国語` 言語を追加する例を示します：

- ゲームメインディレクトリに新しい `text` フォルダを作成します。このフォルダは**多言語メインディレクトリ**です。
- `text` フォルダの下に**地域言語フォルダ**を作成します。フォルダ名は [**`ロケール言語`**](https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c) ドキュメントの `言語タグ(Language tag)` を参照する必要があります。
  - 上記のドキュメントを照会することで、`Chinese (Simplified)` の地域名は `zh-CN` であることがわかり、これがフォルダ名として使用されます。
  - フォルダ名は大文字小文字を区別せず、`アンダースコア(_)` と `ハイフン(-)` も区別しませんが、大文字と `アンダースコア(_)` に統一することをお勧めします。例えば `ZH_CN` です。
- `ZH_CN` フォルダに任意の `json` 形式のファイルを作成し、ファイルに以下の例示内容を記入します：

```json title="ファイルパスと例示内容：text/ZH_CN/text.json"
{
  //これはコメントです。

  "键名": "内容",
  "START_GAME": "开始游戏",
  "ITEM": "物品",
  "ITEM":
  {
    "APPLE":
    {
      "NAME": "苹果",
      "DESC": "一种水果",
    },
    //注意：キー名に改行文字(\n)を含まないようにしてください。例えば BA\nNANA は準拠していないキー名です。これは、ランチャーが言語コンテンツを統合する際にこの文字を利用するためです。
    "BANANA":
    {
      "NAME": "香蕉",
      "DESC":
      [
        "大香蕉，一条大香蕉",
        "你的感觉真的很奇妙",
      ],
    },
  },
}
```

これで、`簡体字中国語` の多言語テキストを正常に追加しました。次に、設定でこの言語を有効にする必要があります：

- ランチャーを開き、`モッドリスト` に入ります。ウィンドウの左下にある `多言語リスト` に `中国語` オプションが追加されていることがわかります。このオプションをダブルクリックして有効にし、`保存` ボタンをクリックします。
  - 複数の異なる言語を追加した場合、マウスを使用して有効な言語をドラッグして表示順序を調整できます。リストの上部が最も優先度が高くなります。
  - さらに、`モッドリスト` では、モッド間にキー名パスが重複する場合、後ろのモッドのテキストコンテンツが優先的に採用されます。
  - `多言語リスト` を変更するたびに、プログラムを再起動して言語テキストキャッシュをリセットし、定数文字列にリファクタリングされたすべてのコードをリセットする必要があります。

最後に、コードで [**`TEXT`**](new_com#text) と [**`TEXTLIST`**](new_com#textlist) コマンドを使用して多言語テキストを取得します。呼び出すときは、jsonファイルで自分で設定したキー名パスに従ってキー名を入力するだけです：

```
LOCALS '= TEXT("start_game")		; テキスト"开始游戏"を取得、入力キー名は大文字小文字を区別しません
PRINTSL TEXT("ITEM")			; "物品"を印刷
PRINTSL TEXT("ITEM", "APPLE", "DESC")	; "一种水果"を印刷

TEXTLIST LOCALS, "ITEM", "APPLE", "DESC"
PRINTSL LOCALS:0			; "一种水果"を印刷
TEXTLIST LOCALS, "ITEM", "BANANA", "DESC"
PRINTSL LOCALS:0			; "大香蕉，一条大香蕉"を印刷
PRINTSL LOCALS:1			; "你的感觉真的很奇妙"を印刷
```

:::

----
### オーディオ機能 {#AudioFunc}

:::info[オーディオ機能]

**オーディオコンポーネントを [**`CSCore`**](https://github.com/filoe/cscore) に交換し、ランチャーメニューバーに新しい `オーディオ` セッションウィンドウが追加され、ここで各種音量と機能を調整できます。**

<center>
![](/img/audio_setting.png)
</center>

画像リソースと同様に、`resources` フォルダにオーディオファイルを配置し、csvファイルを作成して**オーディオリソース**を定義することで、より多くのカスタムオーディオ効果をサポートできます。

```csv title="オーディオリソースのCSVファイル記入形式と例示内容"
; オーディオ名,オーディオファイル名,音量(100),開始時間(00:00:00),再生時間(オーディオファイルの総時間)
MyMusic,MyMusic.ogg
MyMusic1,MyMusic1.m4a,100
MyMusic2,MyMusic2.wav,80,00:01:30
MyMusic3,MyMusic3.mp3,70,00:01:30,15000
```

csvファイルの `開始時間` と `再生時間` 属性は `TimeSpan` または `ms(ミリ秒)` 値を受け入れます。`TimeSpan` の記述形式については、[**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) ドキュメントの例示セクションを参照してください。

オーディオ機能の詳細については、[**`オーディオ関連`**](new_com#AudioRelated) コマンドを参照してください。  
サポートされているオーディオ形式については、[**`GETRESOURCEEXT`**](new_com#getresourceext) の `使用例` セクションを参照してください。

:::

----
### Spineアニメーション機能 {#SpineAnimFunc}

:::info[Spineアニメーション機能]

**[**`Spine ランタイム`**](https://zh.esotericsoftware.com/spine-runtimes) のサポートが追加され、Spineアニメーションファイルを読み取り、[**`SkiaSharp`**](https://github.com/mono/SkiaSharp) を通じて画面をレンダリング描画できます。**

- 現在以下のバージョンのSpineランタイムをサポートしています：
  - **3.8.xx**
  - **4.2.xx**

Spineリソースを追加する方法は画像リソースの追加と似ています。Spineリソースファイルを `resources` フォルダに配置し、csvファイルを作成し、csvファイルに以下の内容を記入します：

```csv title="SpineリソースのCSVファイル記入形式と例示内容"
; Spineリソース名,atlasファイル,skelファイルまたはjsonファイル
aris_spine, aris.atlas, aris.skel
```

その後、コードで [**`SPINECREATE`**](new_com#spinecreate)、[**`CBGSETSPINE`**](new_com#cbgsetspine) などのコマンドを使用してSpineアニメーションを読み込み、画面に表示できます。

```erb title="SPINE関連コマンドの使用例："
; アニメーションリフレッシュ間隔をミリ秒単位で設定
SETANIMETIMER 1000 / 60

; 自分で指定したIDにSpineアニメーションを作成
SPINECREATE 0, "aris_spine"

; Spineアニメーションのスケールを50%に設定
SPINESETSCALE 0, 50

; SpineアニメーションにANIMを設定
SPINESETANIM 0, 0, "IDLE_01", 1
SPINESETANIM 0, 1, "00", 1

; 指定されたSpineアニメーションを画面に表示
CBGSETSPINE 0, 0, 0, 1
```

Spineアニメーション機能の詳細については、[**`SPINE関連`**](new_com#SpineRelated) コマンドを参照してください。

:::

----
### プラグイン機能 {#PluginFunc}

:::info[プラグイン機能]

**EmueraBAは外部のダイナミックリンクライブラリファイル(*.dll)の読み取りをサポートし、ランチャー自体を変更せずに拡張メソッドを追加し、ゲームスクリプトで呼び出すことができ、より多くの機能要件を満たし、実行パフォーマンスを改善できます。**

プラグインを構築するプロセスは以下の通りです：

1. まず [EmueraBAランチャー]() のビルドプロセスを実行し、EmueraBAランチャーの開発環境配置を完了します。
1. クローンされたEmueraBAリポジトリで `Emuera.sln` ソリューションを見つけて開き、Visual Studioのソリューションエクスプローラーで `PluginExample` プロジェクトを見つけ、プロジェクト内の `PluginEntry.cs` ファイルを開きます。
1. プラグインにはパブリックスタティックな `PluginEntry` クラスを含める必要があり、これはプラグインの初期化エントリポイントです。
1. `PluginEntry` クラスで以下を宣言し、ランチャーに新機能を追加します：
   - 拡張メソッドを追加するために、パブリックスタティックな `void RegisterFunctionMethod(Dictionary<string, FunctionMethod> methodList)` 関数を宣言します。
     - 以下のファイルを参照して、`FunctionMethod` を継承する実装クラスの書き方を大まかに理解し、`PluginEntry.cs` ファイルでカスタム拡張メソッドを記述できます：
       - Emuera\GameData\Function\Creator.cs
       - Emuera\GameData\Function\Creator.Method.cs シリーズファイル
1. Visual Studioのインターフェース左上でソリューション構成を見つけます。構成が `Debug` の場合は、`Release` に切り替えます。
1. `PluginExample` プロジェクトを右クリックし、`プロパティ` を選択し、`アプリケーション` メニューページで `アセンブリ名` と `アセンブリ情報…` のデフォルト名をあなたのプラグイン名に変更します。
1. `PluginExample` プロジェクトを右クリックし、`リビルド` を選択します。生成されたDLLファイルは `PluginExample\bin\Release` フォルダで見つけることができます。

プラグインをゲーム本体に追加するプロセスは以下の通りです：

画像リソースを追加する方法と同様に、生成されたDLLファイルを `resources` フォルダに配置し、csvファイルを作成し、csvファイルに以下の内容を記入するだけです。  
csvファイルでは、`PluginEntry` クラスを含むDLLファイルのみを記入してください。他の付属のDLLファイルは記入する必要はありません。

```csv title="プラグインリソースのCSVファイル記入形式と例示内容"
; DLLファイル名
MyPlugin.dll
MyOtherPlugin.dll
```

:::

----
### 新規拡張変数タイプ {#ExtendedVariableType}

#### リスト {#ExTypeList}

リストの宣言形式は **`#LIST(S) <変数名>`** です

この変数を宣言する際、`GLOBAL`、`SAVEDATA`、`CHARADATA`、`DYNAMIC`、`REF` キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** (バイナリアーカイブライターバージョン) 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`リスト関連`**](new_com#ListRelated) コマンドを参照してください。

```erb title="使用例"
#LIST MY_LIST			; 値のタイプが`整数`、名前に `MY_LIST` のリスト変数を宣言

LISTADD MY_LIST, 10		; MY_LIST に値 10 の要素を追加
PRINTVL MY_LIST:0		; MY_LIST の 0 番目の要素を印刷、印刷結果は "10"
```

----
#### ハッシュリスト {#ExTypeHashList}

ハッシュリストの宣言形式は **`#HASHLIST(S) <変数名>`** です

この変数を宣言する際、`GLOBAL`、`SAVEDATA`、`CHARADATA`、`DYNAMIC`、`REF` キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** (バイナリアーカイブライターバージョン) 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`ハッシュリスト関連`**](new_com#HashListRelated) コマンドを参照してください。

```erb title="使用例"
#HASHLISTS MY_HASHLIST			; 値のタイプが`文字列`、名前に `MY_HASHLIST` のハッシュリスト変数を宣言

HASHLISTADD MY_HASHLIST, "TEXT"		; MY_HASHLIST に値 "TEXT" の要素を追加
PRINTVL HASHLISTHAS(MY_HASHLIST, "TEXT"); MY_HASHLIST の値 "TEXT" の検索結果を印刷、印刷結果は "1"
```

----
#### 辞書 {#ExTypeDict}

辞書の宣言形式は **`#DICT_<I|S><I|S> <変数名>`** です  
宣言されたキータイプが `整数` の場合、ERDキーワード機能の使用をサポートします。

この変数を宣言する際、`CONST`、`GLOBAL`、`SAVEDATA`、`CHARADATA`、`DYNAMIC`、`REF`、[**`HARDCHECK`**](new_com#hardcheck) キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** (バイナリアーカイブライターバージョン) 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`辞書関連`**](new_com#DictRelated) コマンドを参照してください。

```erb title="使用例"
#DICT_IS MY_DICT		; キータイプが`整数`、値のタイプが`文字列`、名前に `MY_DICT` の辞書変数を宣言

MY_DICT:6 '= "TEXT"		; MY_DICT にキー 6、値 "TEXT" の要素を書き込む
PRINTSL MY_DICT:6		; MY_DICT のキー 6 の値を印刷、印刷結果は "TEXT"
```

----
#### 配列型辞書 {#ExTypeDictDim}

配列型辞書の宣言形式は **`#DICT(S)_DIM(S) <変数名>(, 配列長 = 1)`** です  
宣言された主キータイプが `整数` の場合、ERDキーワード機能の使用をサポートします。  
変数の第2次元配列添字はデフォルトでERDキーワード機能の使用をサポートします。

この変数を宣言する際、`GLOBAL`、`SAVEDATA`、`CHARADATA`、`DYNAMIC`、`REF`、[**`HARDCHECK`**](new_com#hardcheck) キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** (バイナリアーカイブライターバージョン) 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`辞書コレクション関連`**](new_com#DictItemRelated) コマンドを参照してください。

```erb title="使用例"
#DICTS_DIM MY_DICTDIM, 10		; 主キータイプが`文字列`、値のタイプが`整数`、名前に `MY_DICTDIM` の配列型辞書変数を宣言。作成される各配列の長さは `10`

DICTITEMCREATE MY_DICTDIM, "NEW"	; MY_DICTDIM に名前 "NEW" の配列を作成
MY_DICTDIM:"NEW":0 = 20			; MY_DICTDIM の "NEW" 配列の 0 番目の要素に値 20 を代入
PRINTVL MY_DICTDIM:"NEW":0		; MY_DICTDIM の "NEW" 配列の 0 番目の要素を印刷、印刷結果は "20"
```

----
#### リスト型辞書 {#ExTypeDictList}

リスト型辞書の宣言形式は **`#DICT(S)_LIST(S) <変数名>`** です  
宣言された主キータイプが `整数` の場合、ERDキーワード機能の使用をサポートします。

この変数を宣言する際、`GLOBAL`、`SAVEDATA`、`CHARADATA`、`DYNAMIC`、`REF`、[**`HARDCHECK`**](new_com#hardcheck) キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** (バイナリアーカイブライターバージョン) 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`リスト関連`**](new_com#ListRelated) と [**`辞書コレクション関連`**](new_com#DictItemRelated) コマンドを参照してください。

```erb title="使用例"
#DICTS_LIST MY_DICTLIST			; 主キータイプが`文字列`、値のタイプが`整数`、名前に `MY_DICTLIST` のリスト型辞書変数を宣言

DICTITEMCREATE MY_DICTLIST, "NEW"	; MY_DICTLIST に名前 "NEW" のリストを作成
LISTADD MY_DICTLIST:"NEW", 20		; MY_DICTLIST の "NEW" リストに値 20 の要素を追加
PRINTVL MY_DICTLIST:"NEW":0		; MY_DICTLIST の "NEW" リストの 0 番目の要素を印刷、印刷結果は "20"
```

----
#### ハッシュリスト型辞書 {#ExTypeDictHashList}

ハッシュリスト型辞書の宣言形式は **`#DICT(S)_HASHLIST(S) <変数名>`** です  
宣言された主キータイプが `整数` の場合、ERDキーワード機能の使用をサポートします。

この変数を宣言する際、`GLOBAL`、`SAVEDATA`、`CHARADATA`、`DYNAMIC`、`REF`、[**`HARDCHECK`**](new_com#hardcheck) キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** (バイナリアーカイブライターバージョン) 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`ハッシュリスト関連`**](new_com#HashListRelated) と [**`辞書コレクション関連`**](new_com#DictItemRelated) コマンドを参照してください。

```erb title="使用例"
#DICTS_HASHLIST MY_DICTHASHLIST			; 主キータイプが`文字列`、値のタイプが`整数`、名前に `MY_DICTHASHLIST` のハッシュリスト型辞書変数を宣言

DICTITEMCREATE MY_DICTHASHLIST, "NEW"		; MY_DICTHASHLIST に名前 "NEW" のハッシュリストを作成
HASHLISTADD MY_DICTHASHLIST:"NEW", 20		; MY_DICTHASHLIST の "NEW" ハッシュリストに値 20 の要素を追加
PRINTVL HASHLISTHAS(MY_DICTHASHLIST:"NEW", 20)	; MY_DICTHASHLIST の "NEW" ハッシュリストの値 20 の検索結果を印刷、印刷結果は "1"
```

----
#### 辞書型辞書 {#ExTypeDictDict}

辞書型辞書の宣言形式は **`#DICT(S)_DICT_<I|S><I|S> <変数名>`** です  
宣言された主キータイプが `整数` の場合、ERDキーワード機能の使用をサポートします。  
宣言された副キータイプが `整数` の場合、ERDキーワード機能の使用をサポートします。

この変数を宣言する際、`GLOBAL`、`SAVEDATA`、`CHARADATA`、`DYNAMIC`、`REF`、[**`HARDCHECK`**](new_com#hardcheck) キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** (バイナリアーカイブライターバージョン) 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`辞書関連`**](new_com#DictRelated) と [**`辞書コレクション関連`**](new_com#DictItemRelated) コマンドを参照してください。

```erb title="使用例"
#DICTS_DICT_IS MY_DICTDICT		; 主キータイプが`文字列`、副キータイプが`整数`、値のタイプが`文字列`、名前に `MY_DICTDICT` の辞書型辞書変数を宣言

DICTITEMCREATE MY_DICTDICT, "NEW"	; MY_DICTDICT に名前 "NEW" の辞書を作成
MY_DICTDICT:"NEW":8 '= "TEXT"		; MY_DICTDICT の "NEW" 辞書にキー 8、値 "TEXT" の要素を書き込む
PRINTSL MY_DICTDICT:"NEW":8		; MY_DICTDICT の "NEW" 辞書のキー 8 の要素を印刷、印刷結果は "TEXT"
```

----
### 文法、コマンドおよびプログラムの互換性変更 {#CompatibilityChanges}

`関数型マクロ定義` の関連機能の制限が解除されました。この機能の信頼性は完全にはテストされていません。

**ERDキーワード機能の関連変更：**

- キーワードインデックス値を省略すると、システムはそのキーワードに未使用のインデックス値を自動的に割り当てます。  
  **警告：`SAVEDATA` で宣言された変数は、ゲームセーブデータの混乱を避けるため、インデックス値の省略は推奨されません。**
- 既存のキーワード名をインデックス値として記入すると、そのキーワードのインデックス値を直接参照します。

```csv title="ERDキーワード機能例：erb/example.erd"
1,能量饮料	; "能量饮料" のインデックス値は 1 に割り当てられる
,酒		; "酒" のインデックス値は自動的に 0 に割り当てられる（インデックス値 0 が占有されていないため）
酒,Wine		; "Wine" のインデックス値は "酒" から参照され、つまり 0
果汁,ジュース	; "ジュース" のインデックス値は後続の "果汁" から参照され、つまり 2
,果汁		; "果汁" のインデックス値は自動的に 2 に割り当てられる（インデックス値 0 と 1 がすでに占有されているため）
```

**FORM文法の関連変更：**

- 補間変数を使用する際、変数タイプに基づいて中括弧(`{STR}`)とパーセント記号(`%STR%`)を区別する必要がなくなりました。
- 新しい配置キーワード **`CENTER`** が追加されました。指定された文字長内でテキストを中央揃えにできます。例えば `{"确认", 6, CENTER}` は `" 确认 "` にフォーマットされます。
- 配置パラメータとして数値式を渡すことができます。例えば `{"确认", 6, 1 + 1}` は `" 确认 "` にフォーマットされます。  
  具体的な数値とその意味は以下の通りです：
  - 0 = 左揃え、`LEFT` キーワードと同等。
  - 1 = 右揃え、`RIGHT` キーワードと同等。
  - 2 = 中央揃え、`CENTER` キーワードと同等。

**HTML文法の関連変更：**

- `div` タグの `bcolor` 属性は `bdcolor` (borderColor) に改名され、他のタグの `bcolor` (backgroundColor) 属性との混同を避けます。
- `div` タグの `bdcolor` 属性の入力値形式は `'color'` 単一色値に変更され、四隅色値を受け入れなくなりました。
- `div` タグの `border` 属性の入力値形式は `'thick'` 単一数値に変更され、四隅数値を受け入れなくなりました。
- `div` タグの `margin` 属性の効果は外側に拡張するように変更され、内側に圧迫しなくなりました。

キャラクター型二次元配列は第1パラメータの省略をサポートします（**`キャラクタ変数の引数を補完しない`** (キャラクター変数のパラメータを自動的に補完しない) 設定項目が有効でない場合）。

[**`FOR-NEXT`**](modify_com#for-next) と [**`REPEAT-REND`**](modify_com#repeat-rend) 制御文の一時キャッシュは関数と共にスタックに出入りします。

`__FILE__` 変数で取得されるファイルパスのバックスラッシュ `\\` はスラッシュ `/` に置き換えられました。

[**`REPLACE`**](modify_com#replace) コマンドのパラメータ形式の1つが独立したコマンド [**`REPLACEBYARRAY`**](new_com#replacebyarray) に分離されました。

以下のコマンドは絵文字文字 🎉 の処理をサポートするようになりました。これらのコマンドは絵文字文字を処理する際、表示幅を計算しておおよその文字長を求めます。  
例えば、`😀` の文字長は 2、`👨‍👩‍👧‍👦` の文字長は 4 です。

- [**`STRLEN、STRLENFORM`**](modify_com#strlen-strlenform)
- [**`STRFIND`**](modify_com#strfind)
- [**`STRLENS`**](modify_com#strlens)
- [**`SUBSTRING`**](modify_com#substring)

[**`SUBSTRING`**](modify_com#substring) コマンドの端文字処理ロジックが変更されました。テキストの選択位置が長い文字の中間にある場合、その文字の開始位置に後退します。  
つまり、開始位置で詰まっている文字は含まれ、終了位置で詰まっている文字は無視されます。

[**`ERDNAME`**](modify_com#erdname) が第3パラメータを省略すると、配列の最後の次元の添字キーワードを検索します。

[**`INPUTMOUSEKEY`**](modify_com#inputmousekey) コマンドは追加的に `RESULTS:0` と `RESULT:3` の値を変更します。

[**`GCREATE`**](modify_com#gcreate)、[**`GCREATEFROMFILE`**](modify_com#gcreatefromfile)、[**`GLOAD`**](modify_com#gsave-gload) コマンドは、新しい画像を作成する前に既に作成された画像を解放します。つまり、作成前に [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) コマンドを呼び出す必要がありません。

[**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) コマンドの第2パラメータは、メインディレクトリからの相対パスであることを確認する必要があり、第3パラメータは削除されました。

[**`GDASHSTYLE`**](modify_com#gdashstyle) コマンドの線キャップ効果が変更されました。

[**`GDRAWTEXT`**](modify_com#gdrawtext) コマンドは `RESULT:0` のみを返します。他の戻り値は有効ではなくなりました。

[**`GDRAWGWITHMASK`**](modify_com#gdrawgwithmask) の描画結果はアルファ値と青値の影響を受けます。

グラフィックライブラリの交換により、[**`GDRAWG`**](modify_com#gdrawg) と [**`GDRAWSPRITE`**](modify_com#gdrawsprite) コマンドのカラーマトリックスの使用方法が変更されました。詳細については、[**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) コマンドの説明を参照してください。

[**`SETANIMETIMER`**](modify_com#setanimetimer) コマンドは、[**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) や [**`INPUTMOUSEKEY`**](modify_com#inputmousekey) などのタイム待機中もアニメーションをリフレッシュし続けます。

[**`SPRITECREATE`**](modify_com#spritecreate) と [**`SPRITEANIMECREATE`**](modify_com#spriteanimecreate) コマンドは、新しいSpriteを作成する前に既に作成された非ビルトインSpriteを解放します。つまり、作成前に [**`SPRITEDISPOSE`**](modify_com#spritedispose) コマンドを呼び出す必要がありません。同じ名前のビルトインSpriteが既に存在する場合、作成は失敗します。

[**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) コマンドはビルトインSpriteを削除する機能がなくなりましたが、ビルトインSpriteが参照するすべての画像を解放できます。

[**`PLAYBGM`**](modify_com#playbgm) と [**`PLAYSOUND`**](modify_com#playsound) コマンドの第1パラメータはオーディオ名の入力のみをサポートします。オーディオファイルパスで再生するには、まず [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) コマンドを使用してオーディオを作成してください。  
ビルトインオーディオリソースを追加する方法については、[**`オーディオ機能`**](#AudioFunc) セクションを参照してください。

[**`SETBGMVOLUME`**](modify_com#setbgmvolume) コマンドは現在再生中のバックグラウンドミュージックの音量のみを変更し、グローバル音量には影響しなくなりました。

[**`SETSOUNDVOLUME`**](modify_com#setsoundvolume) コマンドは非推奨となり、効果がなくなりました。

[**`ENUMFILES`**](modify_com#enumfiles) コマンドで取得されるファイルパスのバックスラッシュ `\\` はスラッシュ `/` に置き換えられました。

メニューバーの `タイトルに戻る` ボタンでタイトル画面に戻ると、以下の内容が追加的にクリアされます：

- すべてのCBG画像をクリア、CBGBUTTON、CBGBMAPなどを含み、[**`CBGCLEAR`**](https://osdn.net/projects/emuera/wiki/excom#h5-GCLEAR.20int.20ID.2C.20int.20cARGB) コマンドと同じ効果。
- 実行時に作成されたすべてのSpriteをクリア、Spriteが参照するすべての画像を解放、[**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) コマンドと同じ効果。
- 実行時に作成されたすべてのSpineアニメーションをクリア、Spineアニメーションが参照するすべての画像を解放、[**`SPINEDISPOSEALL`**](new_com#spinedisposeall) コマンドと同じ効果。
- 実行時に作成されたすべてのオーディオをクリアし、オーディオキャッシュを解放、[**`AUDIODISPOSEALL`**](new_com#audiodisposeall) コマンドと同じ効果。

`emuera.log` ゲームログと `console.log` デバッグログは `UTF-8-BOM` エンコーディングで保存されます。

`watchlist.csv` 変数監視リストは `UTF-8-BOM` エンコーディングで保存および読み取られます。

デバッグウィンドウを閉じても変数監視リストは自動的に保存されなくなりました。
