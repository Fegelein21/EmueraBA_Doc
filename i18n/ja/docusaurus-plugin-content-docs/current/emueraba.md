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

**EmueraBA** ランチャーは [**`EmueraEE+EM`**](https://gitlab.com/EvilMask/emuera.em) ランチャーを元に修正されたものです。現在は **`.NET Framework 4.8`** プラットフォームでビルドされています。

ランチャーのデフォルトタイトルは `EmueraBA` に変更され、デフォルトアイコンも更新されました。

グラフィックスライブラリを [**`SkiaSharp`**](https://github.com/mono/SkiaSharp) に置き換えました。画面表示と画像描画に関連するすべての機能はSkiaSharpに移行され、**`描画インターフェース`** 設定項目は削除されました。  
サポートされている画像フォーマットについては、[**`GETRESOURCEEXT`**](new_com#getresourceext) の `使用例` セクションを参照してください。

`GIF` 、`WEBP` などの動的画像の読み込みと再生をサポートします。静的画像と同様にリソースファイルで定義し、ERBスクリプト内で同じ方法で印刷/表示するだけです。  
[**`SETANIMETIMER`**](modify_com#setanimetimer) 命令を使用して画面を更新し、スムーズな再生効果を得ることができます。

自動文字範囲認識機能を実装しました。中国語、日本語、韓国語、英語、絵文字の文字を正しく識別し、長さを計算できるようになりました。**`内部で使用する東アジア言語`** 設定項目は削除されました。

`表示設定` インターフェースに **`タブ文字幅`** 設定項目を追加しました。この設定は、テキスト内の `タブ文字(\t)` の文字長を調整します。デフォルト値は `8` です。  
タブ文字は、直前のテキストの長さに基づいて自身の文字長を自動的に調整します。例えば、タブの前にテキスト `111` がある場合、現在のタブは5文字分の長さを占めます。

ユーザー定義変数キーワード **`RESIZE`** を追加しました。このキーワードは、配列サイズの変更が必要な変数をマークするために使用されます。このキーワードの使用に関する詳細は、[**`ARRAYRESIZE`**](new_com#arrayresize) を参照してください。

スクリーンショット機能をサポートします。メニューバーの `ヘルプ → スクリーンショットボタン` から現在の画面をファイルとして保存するか、新しく追加された [**`GSNAPSHOT`**](new_com#gsnapshot) 命令を使用して現在の画面の画像データを取得できます。

---
### モジュール機能 {#ModuleFunc}

:::info[モジュール機能]

**モジュール読み込みメカニズムを追加し、ランチャーのメニューバーに新しい `モジュールリスト` ダイアログウィンドウを追加しました。ここでモジュールの表示、有効/無効化、読み込み順序の調整ができます。**

<center>
![](/img/module_setting.png)
</center>

モジュールを追加する方法は以下の通りです：

- ゲームのメインディレクトリに新しい `mod` フォルダを作成します。このフォルダが **モジュールメインディレクトリ** となります。
- `mod` フォルダ内に **モジュールフォルダ** を作成します。フォルダ名は任意です。例: `MyMod`。
- `MyMod` フォルダ内に **モジュール識別ファイル** として `_mod.csv` という名前のファイルを作成し、以下の表の属性に従って内容を記入します：

| 属性       | 説明                                                                                                                                                                                                                         |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ID         | このモジュールの一意の識別子。このIDが空の場合、または他のモジュールのIDと重複する場合、モジュールは認識されません。**ID名は関数命名規則に従っていることを確認し、作成後の変更は推奨されません。**                                                                       |
| Name       | このモジュールの表示名。                                                                                                                                                                                                     |
| Authors    | このモジュールの作者名。                                                                                                                                                                                                     |
| Cover      | このモジュールの表示用カバー画像。モジュール内の画像を読み込むには、モジュールのパスとして `{0}` を使用できます。例: `{0}resources/cover.png`                                                                               |
| Description| このモジュールの表示用説明。複数行の説明がサポートされています。**Description属性は他のすべての属性の後に記述されていることを確認してください。**                                                                              |

```csv title="ファイルパスと例の内容: mod/MyMod/_mod.csv"
ID,MyMod
Name,私のmod v1.0
Authors,Tom & Jerry
Cover,{0}resources/cover.png
Description,私のmodの説明
私のmodの説明1行目
私のmodの説明2行目
```

次に、モジュールフォルダ内に以下のリソースファイルを追加できます：

- `ERB` フォルダを作成して `ERB, ERH, ERD` ファイルを追加します。
- `resources` フォルダを作成して `csv, png, jpg, webp` などの画像リソースを追加します。
- `sound` フォルダを作成して `csv, ogg, m4a, wav, mp3` などのオーディオリソースを追加します。
- `text` フォルダを作成して `json` 形式の多言語リソースを追加します。
- `font` フォルダを作成して `ttf, otf` 形式のフォントリソースを追加します。

モジュール内のリソースファイルはゲームのメインディレクトリ下のリソースファイルと変わりません。ファイル名に制限はありませんが、モジュール間でのリソース重複の問題に注意してください：

- `ERB, ERH, ERD` ファイルで内容が重複する場合、後から読み込まれたモジュールの内容はスキップされ、警告が発せられます。
- Spriteリソースで名前が重複する場合、同一モジュール内での重複は警告と共にスキップされます。異なるモジュール間では、後から読み込まれたモジュールの内容が優先されます。
- Audioリソースで名前が重複する場合、同一モジュール内での重複は警告と共にスキップされます。異なるモジュール間では、後から読み込まれたモジュールの内容が優先されます。
- 多言語リソースでキーパス名が重複する場合、後のエントリおよび後から読み込まれたモジュールのテキストが優先されます。
- フォントリソースでフォント名が重複する場合、後から読み込まれたモジュールの内容が優先されます。

:::

---
### 多言語機能 {#Multilingual}

:::info[多言語機能]

**多言語機能は、クリエイターがゲーム内テキストを整理してローカライズ翻訳を行うのに便利です。実行時には、ランチャーが利用可能な言語コンテンツと優先順位を自動的に統合し、多言語テキストを迅速に表示します。**

多言語テキストを追加する方法は以下の通りです。`簡体字中国語` を追加する例を示します：

- ゲームのメインディレクトリに新しい `text` フォルダを作成します。このフォルダが **多言語メインディレクトリ** となります。
- `text` フォルダ内に **ロケール言語フォルダ** を作成します。フォルダ名は [**`ロケール言語`**](https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c) ドキュメントの `言語タグ(Language tag)` を参照する必要があります。
  - ドキュメントを参照すると、`Chinese (Simplified)` のロケール名は `zh-CN` であることがわかります。この名前がフォルダ名として使用されます。
  - フォルダ名は大文字小文字を区別せず、`アンダースコア(_)` と `ハイフン(-)` は同じ扱いです。ただし、大文字と `アンダースコア(_)` で統一することをお勧めします（例: `ZH_CN`）。
- `ZH_CN` フォルダ内に任意の `json` 形式のファイルを作成し、以下のような例の内容を記入します：

```json title="ファイルパスと例の内容: text/ZH_CN/text.json"
{
  // これはコメントです。

  "鍵名": "内容",
  "START_GAME": "ゲーム開始",
  "ITEM": "アイテム",
  "ITEM":
  {
    "APPLE":
    {
      "NAME": "りんご",
      "DESC": "果物の一種",
    },
    // 注意：キー名に改行文字(\n)を含めないでください。例: BA\nNANA は無効です。これは、ランチャーが言語コンテンツを統合する際にこの文字を使用するためです。
    "BANANA":
    {
      "NAME": "バナナ",
      "DESC":
      [
        "大きなバナナ、大きなバナナ",
        "あなたの感覚は本当に素晴らしい",
      ],
    },
  },
}
```

これで `簡体字中国語` の多言語テキストの追加に成功しました。次に、設定でこの言語を有効にする必要があります：

- ランチャーを開き、`モジュールリスト` に入ります。ウィンドウ左下の `多言語リスト` に `中国語` オプションが追加されているのが見えます。このオプションをダブルクリックして有効にし、`保存` ボタンをクリックします。
  - 複数の異なる言語を追加した場合、有効な言語をドラッグ＆ドロップして表示順序を調整できます。リストの最上部が最高優先度です。
  - また、`モジュールリスト` では、モジュール間でキーパス名が重複する場合、後から読み込まれたモジュールのテキストコンテンツが優先されます。
  - `多言語リスト` を変更するたびに、プログラムを再起動して言語テキストキャッシュと、定数文字列に再構築されたすべてのコードをリセットする必要があります。

最後に、コード内で [**`TEXT`**](new_com#text) と [**`TEXTLIST`**](new_com#textlist) 命令を使用して多言語テキストを取得します。呼び出す際は、jsonファイルで独自に設定したキーパスに従ってキー名を入力するだけです：

```
LOCALS '= TEXT("start_game")        ; テキスト「ゲーム開始」を取得します。入力キー名は大文字小文字を区別しません。
PRINTSL TEXT("ITEM")                ; 「アイテム」を印刷します
PRINTSL TEXT("ITEM", "APPLE", "DESC") ; 「果物の一種」を印刷します

TEXTLIST LOCALS, "ITEM", "APPLE", "DESC"
PRINTSL LOCALS:0                    ; 「果物の一種」を印刷します
TEXTLIST LOCALS, "ITEM", "BANANA", "DESC"
PRINTSL LOCALS:0                    ; 「大きなバナナ、大きなバナナ」を印刷します
PRINTSL LOCALS:1                    ; 「あなたの感覚は本当に素晴らしい」を印刷します
```

:::

---
### オーディオ機能 {#AudioFunc}

:::info[オーディオ機能]

**オーディオコンポーネントを [**`CSCore`**](https://github.com/filoe/cscore) に置き換え、ランチャーのメニューバーに新しい `オーディオ` ダイアログウィンドウを追加しました。ここで各種音量設定を調整できます。**

<center>
![](/img/audio_setting.png)
</center>

画像リソースと同様に、`resources` フォルダにオーディオファイルを配置し、csvファイルを作成して **Audioリソース** を定義することで、よりカスタマイズされたオーディオ効果を得ることができます。

```csv title="Audioリソースのフォーマットと例の内容:"
; オーディオ名,オーディオファイル名,音量(100),開始時間(00:00:00),再生時間(オーディオファイルの総再生時間)
MyMusic,MyMusic.ogg
MyMusic1,MyMusic1.m4a,100
MyMusic2,MyMusic2.wav,80,00:01:30
MyMusic3,MyMusic3.mp3,70,00:01:30,15000
```

csvファイル内の `開始時間` と `再生時間` プロパティは、`TimeSpan` または `ms（ミリ秒）` 値を受け入れます。`TimeSpan` の書式については、[**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) ドキュメントの例のセクションを参照してください。

オーディオ機能の詳細については、[**`オーディオ関連`**](new_com#AudioRelated) 命令を参照してください。  
サポートされているオーディオフォーマットについては、[**`GETRESOURCEEXT`**](new_com#getresourceext) の `使用例` セクションを参照してください。

:::

---
### Spineアニメーション機能 {#SpineAnimFunc}

:::info[Spineアニメーション機能]

[**`Spineランタイム`**](https://zh.esotericsoftware.com/spine-runtumes) のサポートを追加し、Spineアニメーションファイルを読み込んで [**`SkiaSharp`**](https://github.com/mono/SkiaSharp) を通じてレンダリング描画できるようになりました。

- 現在、以下のSpineランタイムバージョンをサポートしています：
    -  **3.8.xx**
    -  **4.2.xx**

Spineリソースを追加する方法は、画像リソースを追加するのと似ています。Spineリソースファイルを `resources` フォルダに配置し、csvファイルを作成して以下の内容を記入します：

```csv title="Spineリソースのフォーマットと例の内容:"
; Spineリソース名,atlasファイル,skelファイルまたはjsonファイル
aris_spine, aris.atlas, aris.skel
```

その後、コード内で [**`SPINECREATE`**](new_com#spinecreate) や [**`CBGSETSPINE`**](new_com#cbgsetspine) などの命令を使用して、Spineアニメーションを読み込み、画面に表示できます。

```erb title="SPINE関連命令の使用例:"
; アニメーション更新間隔をミリ秒単位で設定
SETANIMETIMER 1000 / 60

; 指定したIDにSpineアニメーションを作成
SPINECREATE 0, "aris_spine"

; Spineアニメーションのスケールを50%に設定
SPINESETSCALE 0, 50

; SpineアニメーションにANIMを設定
SPINESETANIM 0, 0, "IDLE_01", 1
SPINESETANIM 0, 1, "00", 1

; 指定したSpineアニメーションを画面に表示
CBGSETSPINE 0, 0, 0, 1
```

Spineアニメーション機能の詳細については、[**`SPINE関連`**](new_com#SpineRelated) 命令を参照してください。

:::

---
### 新規拡張変数型 {#ExtendedVariableType}

#### リスト {#ExTypeList}

リストの宣言形式は **`#LIST(S) <変数名>`** です。

この変数の宣言時には、`GLOBAL`、`SAVEDATA`、`DYNAMIC`、`REF` キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`リスト関連`**](new_com#ListRelated) 命令を参照してください。

:::note[使用例]
```erb
#LIST MY_LIST             ; `整数` 型の値を持つ、`MY_LIST` という名前のリスト変数を宣言

LISTADD MY_LIST, 10       ; MY_LIST に値 10 の要素を追加
PRINTVL MY_LIST:0         ; MY_LIST の 0 番目の要素を印刷。結果は "10"
```
:::

---
#### ハッシュリスト {#ExTypeHashList}

ハッシュリストの宣言形式は **`#HASHLIST(S) <変数名>`** です。

この変数の宣言時には、`GLOBAL`、`SAVEDATA`、`DYNAMIC`、`REF` キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`ハッシュリスト関連`**](new_com#HashListRelated) 命令を参照してください。

:::note[使用例]
```erb
#HASHLISTS MY_HASHLIST            ; `文字列` 型の値を持つ、`MY_HASHLIST` という名前のハッシュリスト変数を宣言

HASHLISTADD MY_HASHLIST, "TEXT"   ; MY_HASHLIST に値 "TEXT" の要素を追加
PRINTVL HASHLISTHAS(MY_HASHLIST, "TEXT") ; MY_HASHLIST 内での値 "TEXT" の検索結果を印刷。結果は "1"
```
:::

---
#### ディクショナリ {#ExTypeDict}

ディクショナリの宣言形式は **`#DICT_<I|S><I|S> <変数名>`** です。  
宣言されたキーの型が `整数` の場合、ERDキーワード機能をサポートします。

この変数の宣言時には、`CONST`、`GLOBAL`、`SAVEDATA`、`DYNAMIC`、`REF`、[**`HARDCHECK`**](new_com#hardcheck) キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`ディクショナリ関連`**](new_com#DictRelated) 命令を参照してください。

:::note[使用例]
```erb
#DICT_IS MY_DICT      ; `整数` 型のキーと `文字列` 型の値を持つ、`MY_DICT` という名前のディクショナリ変数を宣言

MY_DICT:6 '= "TEXT"   ; MY_DICT にキー 6、値 "TEXT" の要素を書き込む
PRINTSL MY_DICT:6     ; MY_DICT 内のキー 6 の値を印刷。結果は "TEXT"
```
:::

---
#### 配列型ディクショナリ {#ExTypeDictDim}

配列型ディクショナリの宣言形式は **`#DICT(S)_DIM(S) <変数名>(, 配列長 = 1)`** です。  
宣言された主キーの型が `整数` の場合、ERDキーワード機能をサポートします。  
変数の第2次元配列添字はデフォルトでERDキーワード機能をサポートします。

この変数の宣言時には、`GLOBAL`、`SAVEDATA`、`DYNAMIC`、`REF`、[**`HARDCHECK`**](new_com#hardcheck) キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`ディクショナリコレクション関連`**](new_com#DictItemRelated) 命令を参照してください。

:::note[使用例]
```erb
#DICTS_DIM MY_DICTDIM, 10        ; `文字列` 型の主キーと `整数` 型の値を持つ、`MY_DICTDIM` という名前の配列型ディクショナリ変数を宣言。この変数によって作成される各配列の長さは `10`。

DICTITEMCREATE MY_DICTDIM, "NEW" ; MY_DICTDIM 内に "NEW" という名前の配列を作成
MY_DICTDIM:"NEW":0 = 20          ; MY_DICTDIM 内の "NEW" 配列の 0 番目の要素に値 20 を代入
PRINTVL MY_DICTDIM:"NEW":0       ; MY_DICTDIM 内の "NEW" 配列の 0 番目の要素を印刷。結果は "20"
```
:::

---
#### リスト型ディクショナリ {#ExTypeDictList}

リスト型ディクショナリの宣言形式は **`#DICT(S)_LIST(S) <変数名>`** です。  
宣言された主キーの型が `整数` の場合、ERDキーワード機能をサポートします。

この変数の宣言時には、`GLOBAL`、`SAVEDATA`、`DYNAMIC`、`REF`、[**`HARDCHECK`**](new_com#hardcheck) キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`リスト関連`**](new_com#ListRelated) および [**`ディクショナリコレクション関連`**](new_com#DictItemRelated) 命令を参照してください。

:::note[使用例]
```erb
#DICTS_LIST MY_DICTLIST          ; `文字列` 型の主キーと `整数` 型の値を持つ、`MY_DICTLIST` という名前のリスト型ディクショナリ変数を宣言

DICTITEMCREATE MY_DICTLIST, "NEW" ; MY_DICTLIST 内に "NEW" という名前のリストを作成
LISTADD MY_DICTLIST:"NEW", 20    ; MY_DICTLIST 内の "NEW" リストに値 20 の要素を追加
PRINTVL MY_DICTLIST:"NEW":0      ; MY_DICTLIST 内の "NEW" リストの 0 番目の要素を印刷。結果は "20"
```
:::

---
#### ハッシュリスト型ディクショナリ {#ExTypeDictHashList}

ハッシュリスト型ディクショナリの宣言形式は **`#DICT(S)_HASHLIST(S) <変数名>`** です。  
宣言された主キーの型が `整数` の場合、ERDキーワード機能をサポートします。

この変数の宣言時には、`GLOBAL`、`SAVEDATA`、`DYNAMIC`、`REF`、[**`HARDCHECK`**](new_com#hardcheck) キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`ハッシュリスト関連`**](new_com#HashListRelated) および [**`ディクショナリコレクション関連`**](new_com#DictItemRelated) 命令を参照してください。

:::note[使用例]
```erb
#DICTS_HASHLIST MY_DICTHASHLIST          ; `文字列` 型の主キーと `整数` 型の値を持つ、`MY_DICTHASHLIST` という名前のハッシュリスト型ディクショナリ変数を宣言

DICTITEMCREATE MY_DICTHASHLIST, "NEW"    ; MY_DICTHASHLIST 内に "NEW" という名前のハッシュリストを作成
HASHLISTADD MY_DICTHASHLIST:"NEW", 20    ; MY_DICTHASHLIST 内の "NEW" ハッシュリストに値 20 の要素を追加
PRINTVL HASHLISTHAS(MY_DICTHASHLIST:"NEW", 20) ; MY_DICTHASHLIST 内の "NEW" ハッシュリストでの値 20 の検索結果を印刷。結果は "1"
```
:::

---
#### ディクショナリ型ディクショナリ {#ExTypeDictDict}

ディクショナリ型ディクショナリの宣言形式は **`#DICT(S)_DICT_<I|S><I|S> <変数名>`** です。  
宣言された主キーの型が `整数` の場合、ERDキーワード機能をサポートします。  
宣言された副キーの型が `整数` の場合、ERDキーワード機能をサポートします。

この変数の宣言時には、`GLOBAL`、`SAVEDATA`、`DYNAMIC`、`REF`、[**`HARDCHECK`**](new_com#hardcheck) キーワードとの同時定義をサポートします。  
`SAVEDATA` キーワードと定義する場合、**`バイナリデータライターのバージョン`** 設定項目を `1809` 以上に変更する必要があります。

詳細な機能については、[**`ディクショナリ関連`**](new_com#DictRelated) および [**`ディクショナリコレクション関連`**](new_com#DictItemRelated) 命令を参照してください。

:::note[使用例]
```erb
#DICTS_DICT_IS MY_DICTDICT      ; `文字列` 型の主キー、`整数` 型の副キー、`文字列` 型の値を持つ、`MY_DICTDICT` という名前のディクショナリ型ディクショナリ変数を宣言

DICTITEMCREATE MY_DICTDICT, "NEW" ; MY_DICTDICT 内に "NEW" という名前のディクショナリを作成
MY_DICTDICT:"NEW":8 '= "TEXT"   ; MY_DICTDICT 内の "NEW" ディクショナリに副キー 8、値 "TEXT" の要素を書き込む
PRINTSL MY_DICTDICT:"NEW":8     ; MY_DICTDICT 内の "NEW" ディクショナリの副キー 8 の値を印刷。結果は "TEXT"
```
:::

---
### プログラム・命令の互換性変更 {#CompatibilityChanges}

`関数型マクロ定義` の関連機能を解禁しました。この機能の信頼性は完全にはテストされていません。

- ERDキーワード機能の改善：
    - キーワードインデックス値を省略すると、システムはそのキーワードに未使用のインデックス値を自動的に割り当てます。  
      **警告：SAVEDATA宣言付きの変数では、ゲームセーブデータの混乱を避けるため、インデックス値の省略は推奨されません。**
    - 既存のキーワード名をインデックス値として入力すると、そのキーワードのインデックス値が直接参照されます。

```csv title="ERDキーワード機能の例: ERB/example.erd"
; "エネルギー飲料"のインデックス値は1として割り当てられます
1,エネルギー飲料
; "酒"のインデックス値は自動的に0に割り当てられます。なぜならインデックス0は未使用だからです
,酒
; "Wine"のインデックス値は"酒"から参照され、つまり0です
酒,Wine
; "ジュース"のインデックス値は後の"果汁"から参照され、つまり2です
果汁,ジュース
; "果汁"のインデックス値は自動的に2に割り当てられます。なぜならインデックス0と1は既に使用済みだからです
,果汁
```

キャラクター型二次元配列は、第1パラメータの省略をサポートします（**`キャラクタ変数の引数を補完しない`** 設定が有効でない場合）。

[**`FOR-NEXT`**](modify_com#for-next) と [**`REPEAT-REND`**](modify_com#repeat-rend) 制御文の一時キャッシュは、関数とともにスタックに出入りします。

`__FILE__` 変数で取得されるファイルパスのバックスラッシュ `\\` はスラッシュ `/` に置き換えられます。

[**`REPLACE`**](modify_com#replace) 命令のパラメータ形式の1つが、独立した命令 [**`REPLACEBYARRAY`**](new_com#replacebyarray) に分離されました。

以下の命令が絵文字🎉の処理をサポートするようになりました。これらの命令は絵文字を処理する際、表示幅を計算して概算の文字長を導き出します。  
例えば `😀` の文字長は2、`👨‍👩‍👧‍👦` の文字長は4です。

- [**`STRLEN、STRLENFORM`**](modify_com#strlen-strlenform)
- [**`STRFIND`**](modify_com#strfind)
- [**`STRLENS`**](modify_com#strlens)
- [**`SUBSTRING`**](modify_com#substring)

[**`SUBSTRING`**](modify_com#substring) 命令の端文字処理ロジックが変更されました。テキストの選択位置が長い文字の中間に位置する場合、その文字の開始位置まで戻ります。  
つまり、開始位置にかかる文字は含まれ、終了位置にかかる文字は無視されます。

[**`ERDNAME`**](modify_com#erdname) は第3パラメータを省略した場合、配列の最後の次元の添字キーワードを検索します。

[**`INPUTMOUSEKEY`**](modify_com#inputmousekey) 命令は、`RESULTS:0` と `RESULT:3` の値を追加で変更します。

[**`GCREATE`**](modify_com#gcreate)、[**`GCREATEFROMFILE`**](modify_com#gcreatefromfile)、[**`GLOAD`**](modify_com#gsave-gload) 命令は、画像を作成する前に既に作成された画像を解放します。つまり、作成前に [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 命令を呼び出す必要はありません。

[**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) 命令の第2パラメータは、メインディレクトリからの相対パスであることが保証されなければなりません。また、第3パラメータは削除されました。

[**`GDASHSTYLE`**](modify_com#gdashstyle) 命令の線端効果が変更されました。

[**`GDRAWTEXT`**](modify_com#gdrawtext) 命令は `RESULT:0` のみを返し、他の戻り値は無効になりました。

[**`GDRAWGWITHMASK`**](modify_com#gdrawgwithmask) の描画結果は、アルファ値とブルー値の影響を受けます。

グラフィックスライブラリの変更により、[**`GDRAWG`**](modify_com#gdrawg) と [**`GDRAWSPRITE`**](modify_com#gdrawsprite) 命令のカラーマトリックスの使用法が変更されました。詳細は、[**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) 命令の説明を参照してください。

[**`SETANIMETIMER`**](modify_com#setanimetimer) 命令は、[**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) や [**`INPUTMOUSEKEY`**](modify_com#inputmousekey) などの時間待ちの場合でも、アニメーションの更新を続けます。

[**`SPRITECREATE`**](modify_com#spritecreate) と [**`SPRITEANIMECREATE`**](modify_com#spriteanimecreate) 命令は、スプライトを作成する前に、既に作成された非ビルトインスプライトを解放します。つまり、作成前に [**`SPRITEDISPOSE`**](modify_com#spritedispose) 命令を呼び出す必要はありません。同じ名前のビルトインスプライトが既に存在する場合、作成は失敗します。

[**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) 命令は、ビルトインスプライトを削除する機能を失いましたが、すべてのビルトインスプライトが参照する画像を解放することができます。

[**`PLAYBGM`**](modify_com#playbgm) と [**`PLAYSOUND`**](modify_com#playsound) 命令の第1パラメータは、Audio名のみの入力をサポートします。オーディオファイルパスを介して再生するには、まず [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) 命令を使用してAudioを作成してください。  
ビルトインAudioリソースを追加する方法については、[**`オーディオ機能`**](#AudioFunc) セクションを参照してください。

[**`SETBGMVOLUME`**](modify_com#setbgmvolume) 命令は、現在再生中のバックグラウンドミュージックの音量のみを変更し、グローバル音量には影響しなくなりました。

[**`SETSOUNDVOLUME`**](modify_com#setsoundvolume) 命令は廃止され、効果がなくなりました。

[**`ENUMFILES`**](modify_com#enumfiles) 命令で取得されるファイルパスのバックスラッシュ `\\` はスラッシュ `/` に置き換えられます。

HTMLコードに関する変更：
- `div` タグの `bcolor` 属性は `bdcolor` (borderColor) に名前が変更され、`bcolor` (backgroundColor) との混同を避けます。
- `div` タグの `bdcolor` 属性の入力値形式は、単一の色値 `'color'` に変更され、四隅の色値は受け入れなくなりました。
- `div` タグの `border` 属性の入力値形式は、単一の数値 `'thick'` に変更され、四隅の数値は受け入れなくなりました。
- `div` タグの `margin` 属性の効果は、外側に拡張するように変更され、内側に圧迫することはなくなりました。

メニューバーの `タイトルに戻る` ボタンでタイトル画面に戻ると、以下の内容が追加でクリアされます：

- すべてのCBG画像をクリアします。CBGBUTTON、CBGBMAPなども含まれます。効果は [**`CBGCLEAR`**](https://osdn.net/projects/emuera/wiki/excom#h5-GCLEAR.20int.20ID.2C.20int.20cARGB) 命令と同じです。
- ランタイム中に作成されたすべてのスプライトをクリアし、スプライトが参照するすべての画像を解放します。効果は [**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) 命令と同じです。
- ランタイム中に作成されたすべてのSpineアニメーションをクリアし、Spineアニメーションが参照するすべての画像を解放します。効果は [**`SPINEDISPOSEALL`**](new_com#spinedisposeall) 命令と同じです。
- ランタイム中に作成されたすべてのAudioをクリアし、オーディオキャッシュを解放します。効果は [**`AUDIODISPOSEALL`**](new_com#audiodisposeall) 命令と同じです。

`emuera.log` ゲームログと `console.log` デバッグログは `UTF-8-BOM` エンコーディングで保存されます。

`watchlist.csv` 変数監視リストは `UTF-8-BOM` エンコーディングで保存・読み込みされます。

デバッグウィンドウを閉じたとき、変数監視リストは自動的に保存されなくなりました。
