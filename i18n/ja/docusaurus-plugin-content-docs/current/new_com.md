---
sidebar_position: 3
sidebar_label: 新規追加指令
---

# 新規追加指令 {#NewCom}

### テキスト処理関連 {#TextProcessRelated}

----
#### CHARATUW

**`str CHARATUW str text, int position`**

使用方法は [**`CHARATU`**](https://osdn.net/projects/emuera/wiki/excom#h5-CHARATU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.96.87.E5.AD.97.E4.BD.8D.E7.BD.AE.3E) 指令と類似しており、テキスト内の指定位置にある文字を取得します。

この指令は複雑な絵文字（Emoji）文字を一つの文字として扱います。

:::tip[パラメータ]
- **str text**
  - 指定テキスト。
- **int position**
  - 指定文字位置。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 指定位置の文字列を返します。
:::

:::note[使用例]
```
PRINTSL CHARATUW("A👨‍👩‍👧‍👦A", 1)			; “👨‍👩‍👧‍👦”を表示
```
:::

----
#### FINDEMOJI

**`int FINDEMOJI str text, str Array_List_HashList`**

テキスト内のすべての絵文字（Emoji）文字を検索し、見つかった結果を指定された配列、リスト、ハッシュリストに出力します。

:::tip[パラメータ]
- **str text**
  - 指定テキスト。
- **str Array_List_HashList**
  - 絵文字文字の結果を受け取るための文字列型参照可能な配列、リスト、ハッシュリストを指定します。
    - リスト、ハッシュリストの場合：変数内の既存の内容はクリアされ、新しい内容で埋められます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 取得された絵文字文字の数を返します。  
    取得される数は配列の長さやハッシュリストの特性によって影響を受ける場合があります。
:::

:::note[使用例]
```
PRINTVL FINDEMOJI("A👨‍👩‍👧‍👦AA😀A", LOCALS)		; “2”を表示、LOCALS:0 ="👨‍👩‍👧‍👦"、LOCALS:1 ="😀"
```
:::

----
#### FLOATTOSTR

**`str FLOATTOSTR int value, int div(, str format = "")`**

浮動小数点数のフォーマットされたテキスト処理を実現するために使用します。

:::tip[パラメータ]
- **int value**
  - 被除数を指定します。
- **int div**
  - 除数を指定します。除数が `0` の場合はエラーになります。
- **str format = ""**
  - 文字列フォーマットを指定します。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 文字列結果を返します。
:::

:::note[使用例]
```
PRINTSL FLOATTOSTR(13, 23)			; “0.5652174”を表示
PRINTSL FLOATTOSTR(13, 23, "0.00")		; “0.57”を表示
```
:::

----
#### REPLACEBYARRAY

**`str REPLACEBYARRAY str source, str match, strArray1D replaceArray`**

[**`REPLACE`**](modify_com#replace) 指令から分離された新しい指令で、テキストを置換する際に `replaceArray` 配列内の文字列で順に穴埋めします。

:::tip[パラメータ]
- **str text**
  - 処理対象のテキストを指定します。
- **str match**
  - マッチさせるテキストを指定します。
- **strArray1D replaceArray**
  - 置換に使用する文字列配列を指定します。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 文字列結果を返します。
:::

:::note[使用例]
```
LOCALS '= "111", "222", "333"
PRINTSL REPLACEBYARRAY("A A-A", "A", LOCALS)		; “111 222-333”を表示
```
:::

----
#### STRAPPEND

**`str STRAPPEND (str delimiter = ",", anyParams value)`**

[**`string.join`**](https://learn.microsoft.com/dotnet/api/system.string.join?view=netframework-4.8#system-string-join(system-string-system-string())) のようにテキストを結合します。

:::tip[パラメータ]
- **str delimiter = ","**
  - テキスト結合に使用する区切り文字を指定します。省略可 `(",")`。
- **anyParams value**
  - 0個以上のパラメータ値を指定します。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 結合された文字列結果を返します。
:::

:::note[使用例]
```
PRINTSL STRAPPEND(, "aaa", 222, 33)		; “aaa,222,33”を表示
PRINTSL STRAPPEND("__", "aaa", 222, 33)		; “aaa__222__33”を表示
```
:::

----
#### STRFINDUW

**`int STRFINDUW str text, str word(, int start = 0)`**

使用方法は [**`STRFINDU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRFINDU.20.3C.E6.A4.9C.E7.B4.A2.E5.AF.BE.E8.B1.A1.3E.2C.20.3C.E6.A4.9C.E7.B4.A2.E3.81.99.E3.82.8B.E6.96.87.E5.AD.97.E5.88.97.3E.7B.2C.20.3C.E9.96.8B.E5.A7.8B.E3.82.A4.E3.83.B3.E3.83.87.E3.83.83.E3.82.AF.E3.82.B9.3E.7D) 指令と類似しており、テキスト内の指定文字列を検索してインデックス位置を取得します。

この指令は複雑な絵文字（Emoji）文字を一つの文字として扱います。

:::tip[パラメータ]
- **str text**
  - 指定テキスト。
- **str word**
  - 検索する文字列を指定します。
- **int start = 0**
  - 検索開始位置を指定します。省略可 `(0)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 検索されたインデックス位置を返します。見つからない場合は `-1` を返します。
:::

:::note[使用例]
```
PRINTVL STRFINDUW("啊😀A啊B", "A")		; “2”を表示
```
:::

----
#### STRFINDLAST シリーズ {#STRFINDLAST_Series}

**`int STRFINDLAST str text, str word(, int start = lastIndex)`**

**`int STRFINDLASTU str text, str word(, int start = lastIndex)`**

**`int STRFINDLASTUW str text, str word(, int start = lastIndex)`**

使用方法は [**`STRFIND`**](modify_com#strfind) 指令と類似しており、「逆順」でテキスト内の指定文字列を検索してインデックス位置を取得します。

**`STRFINDLAST`** 指令は絵文字（Emoji）文字を処理する際に、表示幅を計算して文字長を決定します。

**`STRFINDLASTUW`** 指令は複雑な絵文字（Emoji）文字を一つの文字として扱います。

:::tip[パラメータ]
- **str text**
  - 指定テキスト。
- **str word**
  - 検索する文字列を指定します。
- **int start = lastIndex**
  - 検索開始位置を指定します。省略可 `(最後のインデックス位置)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 検索されたインデックス位置を返します。見つからない場合は `-1` を返します。
:::

:::note[使用例]
```
PRINTVL STRFINDLAST("啊A啊BA", "B")		; “5”を表示
PRINTVL STRFINDLAST("啊A啊BA", "A", 2)		; “2”を表示
PRINTVL STRFINDLAST("啊A啊BA", "A", 1)		; “-1”を表示
PRINTVL STRFINDLASTU("啊A啊BA", "B")		; “3”を表示
PRINTVL STRFINDLASTUW("😀A啊B😀A", "B")	; “3”を表示
```
:::

----
#### STRFORMAT

**`str STRFORMAT str formatText(, anyParams value)`**

[**`string.format`**](https://learn.microsoft.com/dotnet/api/system.string.format?view=netframework-4.8#Starting) を実現し、フォーマットされたテキスト処理を行います。

:::tip[パラメータ]
- **str formatText**
  - フォーマット文字列テキストを指定します。
- **anyParams value**
  - 0個以上のパラメータ値を指定します。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 文字列結果を返します。フォーマット失敗時は元のテキストを返します。
:::

:::note[使用例]
```
PRINTSL STRFORMAT("aaa_{0}__{1}", 222, "33")	; “aaa_222__33”を表示
```
:::

----
#### STRLENSUW

**`int STRLENSUW str text`**

使用方法は [**`STRLENSU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRLENSU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E) 指令と類似しており、Unicodeエンコーディングに基づいてテキストの文字数を取得します。

この指令は複雑な絵文字（Emoji）文字を一つの文字として扱います。

:::tip[パラメータ]
- **str text**
  - 指定テキスト。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定テキストの文字数を返します。
:::

:::note[使用例]
```
PRINTVL STRLENSUW("A👪A")		; “3”を表示
```
:::

----
#### STRREMOVE シリーズ {#STRREMOVE_Series}

**`str STRREMOVE str text(, int start = 0, int count = totalLength)`**

**`str STRREMOVEU str text(, int start = 0, int count = totalLength)`**

**`str STRREMOVEUW str text(, int start = 0, int count = totalLength)`**

[**`string.remove`**](https://learn.microsoft.com/dotnet/api/system.string.remove?view=netframework-4.8) を実現し、指定範囲のテキストを削除します。

**`STRREMOVE`** 指令は絵文字（Emoji）文字を処理する際に、表示幅を計算して文字長を決定します。  
テキストの選択位置が長い文字の中間にある場合、その文字の開始位置まで後退します。つまり、開始位置にかかっている文字はカウントされ、終了位置にかかっている文字は無視されます。

**`STRREMOVEUW`** 指令は複雑な絵文字（Emoji）文字を一つの文字として扱います。

:::tip[パラメータ]
- **str text**
  - 処理対象のテキストを指定します。
- **int start = 0**
  - 削除開始位置を指定します。省略可 `(0)`。
- **int count = totalLength**
  - 削除する文字数を指定します。省略可 `(テキストの全長)`。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 文字列結果を返します。
:::

:::note[使用例]
```
PRINTSL STRREMOVE("１２３４５６", 2, 3)			; “１３４５６”を表示。
PRINTSL STRREMOVEU("１２３４５６", 3)			; “１２３”を表示。
PRINTSL STRREMOVEU("１２３４５６", 0, 3)			; “４５６”を表示。
PRINTSL STRREMOVEUW("１２３４👨‍👩‍👧‍👦５６", 2, 3)		; “１２５６”を表示。
```
:::

----
#### STRSPLIT

**`int STRSPLIT str text, str Array_List_HashList(, str delimiter = ",", int removeEmpty = 0)`**

使用方法は [**`SPLIT`**](modify_com#split) 指令と類似しており、指定された文字列に基づいてテキストを分割します。

:::tip[パラメータ]
- **str text**
  - 分割対象のテキストを指定します。
- **str Array_List_HashList**
  - 分割されたテキストを受け取るための文字列型参照可能な配列、リスト、ハッシュリストを指定します。
    - リスト、ハッシュリストの場合：変数内の既存の内容はクリアされ、新しい内容で埋められます。
- **str delimiter = ","**
  - テキスト分割に使用する区切り文字を指定します。省略可 `(",")`。
- **int removeEmpty = 0**
  - 分割後の空要素を削除するかどうかを指定します。省略可 `(0)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 分割後の文字列の個数を返します。  
    取得される文字列の個数は配列の長さやハッシュリストの特性によって影響を受ける場合があります。
:::

:::note[使用例]
```
LOCAL = STRSPLIT("111,AAA,22", LOCALS)			; LOCAL に 3 が代入される。
PRINTSL LOCALS:0					; “111”を表示。
LOCAL = STRSPLIT("111,AAA__22", LOCALS, "__")		; LOCAL に 2 が代入される。
PRINTSL LOCALS:1					; “22”を表示。
```
:::

----
#### STRTRIM

**`str STRTRIM str text(, str trimChars, int trimDirection = 0)`**

[**`string.trim`**](https://learn.microsoft.com/dotnet/api/system.string.trim?view=netframework-4.8) を実現し、テキストの前後の指定文字を削除します。

:::tip[パラメータ]
- **str text**
  - 処理対象のテキストを指定します。
- **str trimChars**
  - 削除する文字を指定します。このパラメータを省略すると、システムで定義された複数の空白文字（スペース、タブなど）を削除します。
- **int trimDirection = 0**
  - 削除方向を指定します。`1` = 前部を削除、`2` = 後部を削除、その他の値は前後を削除します。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 文字列結果を返します。
:::

:::note[使用例]
```
PRINTSL STRTRIM(" 111 AAA  22  ")			; “111 AAA  22”を表示。
PRINTSL STRTRIM(" 111 AAA  22  ", " 12")		; “AAA”を表示。
PRINTSL STRTRIM(" 111 AAA  22  ", " 12", 1)		; “AAA  22  ”を表示。
```
:::

----
#### SUBSTRINGUW

**`str SUBSTRINGUW str text(, int start = 0, int length = totalLength)`**

使用方法は [**`SUBSTRINGU`**](https://osdn.net/projects/emuera/wiki/excom#h5-SUBSTRINGU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E) 指令と類似しており、指定された位置と長さに基づいてテキストを切り出します。

この指令は複雑な絵文字（Emoji）文字を一つの文字として扱います。

:::tip[パラメータ]
- **str text**
  - 指定テキスト。
- **int start = 0**
  - 切り出し開始位置を指定します。省略可 `(0)`。
- **int length = totalLength**
  - 切り出す長さを指定します。値が `負数` の場合はテキスト全長を切り出します。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 切り出されたテキストを返します。
:::

:::note[使用例]
```
PRINTSL SUBSTRINGUW("A👪BAB👪A", 0, 4)		; “A👪BA”を表示
PRINTSL SUBSTRINGUW("A👪BAB👪A", 5)		; “👪A”を表示
```
:::

----
#### TRYTOINT

**`int TRYTOINT str text(, int outValue)`**

使用方法は [**`TOINT`**](https://osdn.net/projects/emuera/wiki/excom#h5-TOINT.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E) 指令と類似しており、指定された文字列を整数に変換するために使用します。`ISNUMERIC` と `TOINT` 指令を連続して使用することによる機能の重複問題を回避できます。

:::tip[パラメータ]
- **str text**
  - 整数に変換する文字列を指定します。
- **int outValue**
  - 変換結果を受け取る整数型変数を指定します。省略時は `RESULT:1` が使用され、変換失敗時の変換結果は `0` になります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 変換が成功したかどうかを示します。成功時は `非0` を返します。
:::

:::note[使用例]
```
PRINTVL TRYTOINT("IO") ? RESULT:1 # 11		; “11”を表示
SIF TRYTOINT("20", LOCAL)
PRINTVL LOCAL					; “20”を表示
```
:::

----
### 変数、配列関連 {#VarAndArrayRelated}

----
#### ARRAYBIT

**`int ARRAYBIT anyArray array, str keyName(, int dimension = lastDim, str delimiter = ",")`**

第2パラメータ `keyName` で指定された複数のインデックスキー名に基づいて、第1パラメータ `array` 内の各インデックスキーが存在するインデックス値を検索し、それらのインデックス値をOR値で加算（オーバーレイ）します。

配列のインデックスキーを検索してインデックス値とする以外に、第3パラメータ `dimension` に `0` を指定することで、配列内の要素を直接検索してインデックス値とすることもできます。

指定されたインデックスキーが見つからない場合、またはインデックス値の範囲が `0 - 63` 以外である場合は、直接エラーになります。

この指令は実験的な機能であり、システムが適切なコードを定数にリファクタリングする特性を利用してプログラムの実行効率を向上させることを目的としています。

:::tip[パラメータ]
- **anyArray array**
  - 任意の配列を指定します。
- **str keyName**
  - 加算するインデックス値を指定するインデックスキー名を指定します。
- **int dimension = lastDim**
  - 配列のインデックスキーが存在する次元を指定します。省略時は配列の最後の次元を使用します。このパラメータが `0` に指定された場合、配列内の要素を検索してインデックス値とします。
- **str delimiter = ","**
  - キー名を分割するための区切り文字を指定します。省略可 `(",")`。
:::

:::tip[戻り値]
- **RESULT:0**
  - すべてのインデックス値を加算（OR）した結果を返します。
:::

:::note[使用例]
```erh title="EXAMPLE_ARRAY.erhファイル"
#DIMS EXAMPLE_ARRAY, 20 = "VALUE_0", "VALUE_1", "VALUE_2", "VALUE_3"
```

```erd title="EXAMPLE_ARRAY.erdファイル"
0,AAA
1,BBB
2,CCC
3,DDD
```

```erb title="erbファイル"
LOCAL = ARRAYBIT(EXAMPLE_ARRAY, "AAA, BBB, DDD")	; LOCAL = 0B1011
; 上記のコードの実行効果は以下と同等です：
LOCAL = 1 << GETNUM(EXAMPLE_ARRAY, "AAA")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "BBB")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "DDD")

LOCAL = ARRAYBIT(EXAMPLE_ARRAY, "VALUE_0, VALUE_2", 0)	; LOCAL = 0B0101
; 上記のコードの実行効果は以下と同等です：
LOCAL = 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_0")
LOCAL |= 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_2")
```
:::

----
#### ARRAYRESIZE

**`void ARRAYRESIZE anyArray1D array, int size1D(, int keepData = 0)`**

**`void ARRAYRESIZE anyArray2D array, int size1D, int size2D(, int keepData = 0)`**

**`void ARRAYRESIZE anyArray3D array, int size1D, int size2D, int size3D(, int keepData = 0)`**

この指令は、指定されたユーザー定義配列のサイズを再設定するために使用します。

第1パラメータ `array` には、[**`RESIZE`**](new_com#resize) キーワードを持つユーザー定義の配列変数のみを指定できます。

`size1D`、`size2D`、`size3D` パラメータを指定する際は、配列の総長が `1000000` を超えないように注意する必要があります。  
指定された各次元の長さが現在の配列の長さと完全に同じで、かつ `keepData` パラメータが `非0` の場合、何も処理されません。

静的配列は再設定後、[**`RESETDATA`**](https://osdn.net/projects/emuera/wiki/excom#h5-RESETDATA) 指令で元の長さにリセットされるまで、その状態を維持します。  
動的配列の場合、現在の関数スタック下の配列のみが再設定され、後続で新しい関数スタックに入った際に作成される配列は再設定されません。

:::tip[パラメータ]
- **anyArray1|2|3D array**
  - サイズを再設定する配列を指定します。
- **int size1D**
  - 配列の第1次元の長さを指定します。
- **int size2D**
  - 配列の第2次元の長さを指定します。
- **int size3D**
  - 配列の第3次元の長さを指定します。
- **int keepData = 0**
  - 配列内の元のデータを保持するかどうかを指定します。`非0` を入力すると元のデータを保持します。
:::

:::note[使用例]
```
@TEST
#LOCALSIZE 1
#DIM DYNAMIC RESIZE DYNAMIC_ARRAY, 1, 1
#DIM STATIC_ARRAY, 1, 1, 1

ARRAYRESIZE LOCAL, 2		; TEST関数内のLOCAL配列のサイズ再設定に成功。
ARRAYRESIZE DYNAMIC_ARRAY, 2, 2	; DYNAMIC_ARRAY配列のサイズ再設定に成功。
CALL TEST_1(DYNAMIC_ARRAY, STATIC_ARRAY)

@TEST_1(REF_ARRAY1, REF_ARRAY2)
#DIM REF REF_ARRAY1, 0, 0
#DIM REF REF_ARRAY2, 0, 0, 0

ARRAYRESIZE REF_ARRAY1, 2, 2	; 参照先のDYNAMIC_ARRAY配列のサイズ再設定に成功。
ARRAYRESIZE REF_ARRAY2, 2, 2, 2	; この行はエラーになります。参照先のSTATIC_ARRAY配列がRESIZEキーワードを定義していないため。
```
:::

----
#### ARRAYTIDY

**`int ARRAYTIDY any Array_List(, int start = 0, int end = lastDimLength, same emptyVal)`**

この指令は、配列内の要素間の空値を整理し、隙間がなく要素が連続した配列を取得することができます。

:::tip[パラメータ]
- **any Array_List**
  - 整理対象の任意の参照可能な配列、リストを指定します。
    - 多次元配列の場合：最後の次元の要素のみを処理し、それ以前の次元のインデックス値は自身で指定する必要があります。
    - リストの場合：整理後の空要素は削除されます。
- **int start = 0**
  - 整理開始インデックスを指定します。
- **int end = lastDimLength**
  - 整理終了インデックス+1を指定します。省略時は配列の最後の次元の長さを使用します。
- **same emptyVal**
  - 処理時に空値とみなされる数値または文字列を指定します。値の型は最初のパラメータの値の型と一致している必要があり、省略可能です（ `0` または `空文字列` ）。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定範囲内で整理完了後の要素数を返します。
:::

----
#### ARRAYFIND, ARRAYFINDLAST

**`int ARRAYFIND anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int ARRAYFINDLAST anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

使用方法は [**`FINDELEMENT, FINDLASTELEMENT`**](modify_com#findelement-findlastelement) 指令と類似しており、配列内で条件に合致する要素を検索するために使用します。

この指令はデフォルトで `正規表現マッチを使用しない`、`部分マッチを使用しない`、`大文字小文字を区別する` 設定となっており、`option` パラメータを指定して処理オプションを調整することができます。

:::tip[パラメータ]
- **anyArray array**
  - 検索対象の任意の配列を指定します。
    - 多次元配列の場合：最後の次元の要素のみを処理し、それ以前の次元のインデックス値は自身で指定する必要があります。
- **same target**
  - 検索対象の内容を指定します。値の型は最初のパラメータの値の型と一致している必要があります。
- **int start = 0**
  - 検索開始インデックスを指定します。
- **int end = lastDimLength**
  - 検索終了インデックス+1を指定します。省略時は配列の最後の次元の長さを使用します。
- **int option = 0**
  - 処理オプションを指定します：
    -  `1P0` = 部分マッチを使用
    -  `1P1` = 大文字小文字を無視
    -  `1P2` = 判定結果を反転
    -  `1P3` = 正規表現マッチを使用
:::

:::tip[戻り値]
- **RESULT:0**
  - 検索条件に合致する最初のインデックス値を返します。見つからない場合は `-1` を返します。
:::

:::note[使用例]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P0 | 1P1)		; ARRAY:0 から ARRAY:7 までで、"AA"を含み大文字小文字を無視する要素を検索
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P2)		; ARRAY:0 から ARRAY:7 までで、"AA"と等しくない要素を検索
PRINTVL ARRAYFINDLAST(ARRAY, "AA", 0, 8, 1P2)		; 後ろから ARRAY:0 から ARRAY:7 までで、"AA"と等しくない要素を検索
PRINTVL ARRAYFIND(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)	; ARRAY:0 から ARRAY:7 までで、"\\d+"に部分マッチする要素を検索
PRINTVL ARRAYFIND(CARRAY_2D:TARGET:3:0, 22, 5)		; キャラクターTARGETの CARRAY_2D:3:5 から CARRAY_2D:3:9 までで、22と等しい要素を検索
```
:::

----
#### ANYSAME

**`int ANYSAME any key(, sameParams value)`**

使用方法は [**`GROUPMATCH`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/GROUPCHECK.html) 指令と類似しており、第1パラメータ `key` の値に基づいて、後続のパラメータ内に同じ値があるかどうかを検索します。

:::tip[パラメータ]
- **any key**
  - 検索する値を指定します。
- **sameParams value**
  - 1つ以上のパラメータ値を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 検索結果を返します。見つかった場合は `非0` を、見つからなかった場合は `0` を返します。
:::

----
#### HASH

**`int HASH anyParams value`**

指定されたパラメータ値に対して（おそらく）ユニークなハッシュコードを生成します。  
複数のパラメータ値に対して一度にハッシュコードを生成する場合、その入力順序が考慮され、順序の異なるパラメータ値は異なるハッシュコードを生成します。

:::tip[パラメータ]
- **anyParams value**
  - 1つ以上のパラメータ値を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 生成されたハッシュコードを返します。
:::

----
#### VARLENGTH

**`int VARLENGTH anyArray array(, int dimension)`**

使用方法は [**`VARSIZE`**](modify_com#varsize) 指令と類似しており、配列の各次元の長さを取得します。

第2パラメータ `dimension` を省略した場合、この指令は配列の最後の次元の長さを返し、`負数` を渡すと配列の総長を取得できます。

:::tip[パラメータ]
- **anyArray array**
  - 任意の配列を指定します。
- **int dimension**
  - 配列の次元を指定します。省略時は配列の最後の次元の長さを返し、`負数` を渡すと配列の総長を取得できます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定された次元の配列の長さを返します。
:::

----
### リスト関連 {#ListRelated}

----
#### LISTSIZE

**`int LISTSIZE anyList list`**

**`int LISTSIZE anyDict_anyList dictList`**

指定されたリストの要素数を取得します。

リスト型辞書のリスト数を取得する場合は、[**`DICTITEMCOUNT`**](new_com#dictitemcount) 指令を使用してください。

:::tip[パラメータ]
- **anyList list**
  - 任意のリストを指定します。
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定されたリストの要素数を返します。
:::

----
#### LISTCLEAR

**`int LISTCLEAR anyList list(, int start = 0, int count = listCount)`**

**`int LISTCLEAR anyDict_anyList dictList(, int start = 0, int count = listCount)`**

指定されたリストから指定範囲の要素を削除します。

:::tip[パラメータ]
- **anyList list**
  - 任意のリストを指定します。
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **int start = 0**
  - 削除する要素の開始位置を指定します。省略可 `(0)`。
- **int count = listCount**
  - 削除する要素の数を指定します。省略可 `(リストの要素数)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 常に `非0` を返します。
:::

----
#### LISTADD

**`int LISTADD anyList list, same value(, int index = listCount)`**

**`int LISTADD anyDict_anyList dictList, same value(, int index = listCount)`**

指定されたリストに指定された要素を追加します。

:::tip[パラメータ]
- **anyList list**
  - 任意のリストを指定します。
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **same value**
  - 追加する要素を指定します。値の型は最初のパラメータの値の型と一致している必要があります。
- **int index = listCount**
  - 追加する位置を指定します。省略可 `(リストの末尾位置)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 要素が追加されたインデックス位置を返します。
:::

----
#### LISTFIND

**`int LISTFIND anyList list, same value(, int start = 0, int count = listCount)`**

**`int LISTFIND anyDict_anyList dictList, same value(, int start = 0, int count = listCount)`**

指定されたリスト内で指定された要素を検索します。

:::tip[パラメータ]
- **anyList list**
  - 任意のリストを指定します。
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **same value**
  - 検索する要素を指定します。値の型は最初のパラメータの値の型と一致している必要があります。
- **int start = 0**
  - 検索開始位置を指定します。省略可 `(0)`。
- **int count = listCount**
  - 検索する要素の数を指定します。省略可 `(リストの要素数)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 検索された要素のインデックス位置を返します。見つからない場合は `(-1)` を返します。
:::

----
#### LISTREMOVE

**`int LISTREMOVE anyList list, same value`**

**`int LISTREMOVE anyDict_anyList dictList, same value`**

指定されたリストから指定された要素を削除します。

:::tip[パラメータ]
- **anyList list**
  - 任意のリストを指定します。
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **same value**
  - 削除する要素を指定します。値の型は最初のパラメータの値の型と一致している必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 削除結果を返します。見つけて削除した場合は `(非0)` を、見つからなかった場合は `(0)` を返します。
:::

----
#### LISTREMOVEAT

**`int LISTREMOVEAT anyList list, int index(, int removeCount = 1)`**

**`int LISTREMOVEAT anyDict_anyList dictList, int index(, int removeCount = 1)`**

指定されたリストから指定されたインデックス位置の要素を削除します。

:::tip[パラメータ]
- **anyList list**
  - 任意のリストを指定します。
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **int index**
  - 削除する要素のインデックス位置を指定します。
- **int removeCount = 1**
  - 削除する要素の数を指定します。省略可 `(1)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 常に `(非0)` を返します。
:::

----
#### LISTCOPY

**`int LISTCOPY anyList srcList, same Array_List_HashList`**

**`int LISTCOPY anyDict_anyList srcDictList, same Array_List_HashList`**

指定されたソースリスト内のすべての要素を、指定されたターゲット配列またはターゲットリストにコピーします。

:::tip[パラメータ]
- **anyList srcList**
  - 任意のソースリストを指定します。
- **anyDict_anyList srcDictList**
  - 任意のソースリスト型辞書を指定します。
- **same Array_List_HashList**
  - すべての要素を受け取るための参照可能な配列、リスト、ハッシュリストを指定します。値の型は最初のパラメータの値の型と一致している必要があります。
    - リストの場合：ソースの内容はリストの末尾に追加されます。
    - ハッシュリストの場合：ソースの内容はハッシュリスト内の既存の内容とマージされます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 配列の場合：正常にコピーされた要素数を返します。取得される要素数は配列の長さによって制限されます。
  - リスト、ハッシュリストの場合：ターゲット変数内の要素の総数を返します。
:::

----
### ハッシュリスト関連 {#HashListRelated}

----
#### HASHLISTSIZE

**`int HASHLISTSIZE anyHashList list`**

**`int HASHLISTSIZE anyDict_anyHashList dictList`**

指定されたハッシュリストの要素数を取得します。

ハッシュリスト型辞書のハッシュリスト数を取得する場合は、[**`DICTITEMCOUNT`**](new_com#dictitemcount) 指令を使用してください。

:::tip[パラメータ]
- **anyHashList list**
  - 任意のハッシュリストを指定します。
- **anyDict_anyHashList dictList**
  - 任意のハッシュリスト型辞書を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定されたハッシュリストの要素数を返します。
:::

----
#### HASHLISTCLEAR

**`int HASHLISTCLEAR anyHashList list`**

**`int HASHLISTCLEAR anyDict_anyHashList dictList`**

指定されたハッシュリストのすべての要素をクリアします。

:::tip[パラメータ]
- **anyHashList list**
  - 任意のハッシュリストを指定します。
- **anyDict_anyHashList dictList**
  - 任意のハッシュリスト型辞書を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 常に `非0` を返します。
:::

----
#### HASHLISTADD

**`int HASHLISTADD anyHashList list, same value`**

**`int HASHLISTADD anyDict_anyHashList dictList, same value`**

指定されたハッシュリストに指定された値を追加します。

:::tip[パラメータ]
- **anyHashList list**
  - 任意のハッシュリストを指定します。
- **anyDict_anyHashList dictList**
  - 任意のハッシュリスト型辞書を指定します。
- **same value**
  - 追加する値を指定します。値の型は最初のパラメータの値の型と一致している必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 追加結果を返します。指定された値の追加に成功した場合は `非0` を、指定された値が既に存在する場合は `0` を返します。
:::

----
#### HASHLISTHAS

**`int HASHLISTHAS anyHashList list, same value`**

**`int HASHLISTHAS anyDict_anyHashList dictList, same value`**

指定されたハッシュリスト内に指定された値が存在するかどうかを検索します。

:::tip[パラメータ]
- **anyHashList list**
  - 任意のハッシュリストを指定します。
- **anyDict_anyHashList dictList**
  - 任意のハッシュリスト型辞書を指定します。
- **same value**
  - 検索する値を指定します。値の型は最初のパラメータの値の型と一致している必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - チェック結果を返します。指定された値が存在する場合は `非0` を、それ以外の場合は `0` を返します。
:::

----
#### HASHLISTREMOVE

**`int HASHLISTREMOVE anyHashList list, same value`**

**`int HASHLISTREMOVE anyDict_anyHashList dictList, same value`**

指定されたハッシュリストから指定された値を削除します。

:::tip[パラメータ]
- **anyHashList list**
  - 任意のハッシュリストを指定します。
- **anyDict_anyHashList dictList**
  - 任意のハッシュリスト型辞書を指定します。
- **same value**
  - 削除する値を指定します。値の型は最初のパラメータの値の型と一致している必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 削除結果を返します。指定された値を見つけて削除した場合は `非0` を、指定された値が見つからなかった場合は `0` を返します。
:::

----
#### HASHLISTCOPY

**`int HASHLISTCOPY anyHashList srcList, same Array_List_HashList`**

**`int HASHLISTCOPY anyDict_anyHashList srcDictList, same Array_List_HashList`**

指定されたソースハッシュリスト内のすべての要素を、指定されたターゲット配列またはターゲットリストにコピーします。

:::tip[パラメータ]
- **anyHashList srcList**
  - 任意のソースハッシュリストを指定します。
- **anyDict_anyHashList srcDictList**
  - 任意のソースハッシュリスト型辞書を指定します。
- **same Array_List_HashList**
  - すべての要素を受け取るための参照可能な配列、リスト、ハッシュリストを指定します。値の型は最初のパラメータの値の型と一致している必要があります。
    - リストの場合：ソースの内容はリストの末尾に追加されます。
    - ハッシュリストの場合：ソースの内容はハッシュリスト内の既存の内容とマージされます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 配列の場合：正常にコピーされた要素数を返します。取得される要素数は配列の長さによって制限されます。
  - リスト、ハッシュリストの場合：ターゲット変数内の要素の総数を返します。
:::

----
### 辞書関連 {#DictRelated}

----
#### DICTSIZE

**`int DICTSIZE anyanyDict dict`**

**`int DICTSIZE anyDict_anyanyDict dictDict`**

指定された辞書の要素数を取得します。

辞書型辞書の辞書数を取得する場合は、[**`DICTITEMCOUNT`**](new_com#dictitemcount) 指令を使用してください。

:::tip[パラメータ]
- **anyanyDict dict**
  - 任意の辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定された辞書の要素数を返します。
:::

----
#### DICTCLEAR

**`int DICTCLEAR anyanyDict dict`**

**`int DICTCLEAR anyDict_anyanyDict dictDict`**

指定された辞書のすべての要素をクリアします。

:::tip[パラメータ]
- **anyanyDict dict**
  - 任意の辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 常に `非0` を返します。
:::

----
#### DICTADD

**`int DICTADD anyanyDict dict, sameAsKey key, same value`**

**`int DICTADD anyDict_anyanyDict dictDict, sameAsKey key, same value`**

指定された辞書に指定されたキーと値を追加します。指定されたキーが既に存在する場合は追加されません。

:::tip[パラメータ]
- **anyanyDict dict**
  - 任意の辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **sameAsKey key**
  - キー名を指定します。キー名の値の型は最初のパラメータのキーの型と一致している必要があります。
- **same value**
  - 値を指定します。値の型は最初のパラメータの値の型と一致している必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 追加結果を返します。指定されたキーと値の追加に成功した場合は `非0` を、キーが既に存在する場合は `0` を返します。
:::

----
#### DICTHAS

**`int DICTHAS anyanyDict dict, sameAsKey key`**

**`int DICTHAS anyDict_anyanyDict dictDict, sameAsKey key`**

指定された辞書内に指定されたキー名が存在するかどうかをチェックします。

:::tip[パラメータ]
- **anyanyDict dict**
  - 任意の辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **sameAsKey key**
  - キー名を指定します。キー名の値の型は最初のパラメータのキーの型と一致している必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - チェック結果を返します。指定されたキー名が存在する場合は `非0` を、それ以外の場合は `0` を返します。
:::

----
#### DICTREMOVE

**`int DICTREMOVE anyanyDict dict, sameAsKey key`**

**`int DICTREMOVE anyDict_anyanyDict dictDict, sameAsKey key`**

指定された辞書から指定されたキーと値を削除します。

:::tip[パラメータ]
- **anyanyDict dict**
  - 任意の辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **sameAsKey key**
  - キー名を指定します。キー名の値の型は最初のパラメータのキーの型と一致している必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 削除結果を返します。指定されたキー名を見つけて削除した場合は `非0` を、それ以外の場合は `0` を返します。
:::

----
#### DICTTRYGET

**`int DICTTRYGET anyanyDict dict, same outValue`**

**`int DICTTRYGET anyDict_anyanyDict dictDict, same outValue`**

指定された辞書内で指定されたキー値を検索して取得しようとします。この指令を使用してキー値を取得してもエラーにはなりません。

:::tip[パラメータ]
- **anyanyDict dict**
  - 任意の辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **same outValue**
  - キー値を受け取るための変数を指定します。変数の値の型は最初のパラメータの値の型と一致している必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 検索結果を返します。指定されたキー名を正常に見つけた場合は `非0` を返し、値を **outValue** に出力します。それ以外の場合は `0` を返します。
:::

----
#### DICTGETKEYS

**`int DICTGETKEYS anyanyDict srcDict, sameAsKey Array_List_HashList`**

**`int DICTGETKEYS anyDict_anyanyDict srcDictDict, sameAsKey Array_List_HashList`**

指定されたソース辞書内のすべてのキー名を、指定されたターゲット配列またはターゲットリストにコピーします。

:::tip[パラメータ]
- **anyanyDict srcDict**
  - 任意のソース辞書を指定します。
- **anyDict_anyanyDict srcDictDict**
  - 任意のソース辞書型辞書を指定します。
- **sameAsKey Array_List_HashList**
  - キー要素を受け取るための参照可能な配列、リスト、ハッシュリストを指定します。値の型は最初のパラメータのキーの型と一致している必要があります。
    - リストの場合：ソースの内容はリストの末尾に追加されます。
    - ハッシュリストの場合：ソースの内容はハッシュリスト内の既存の内容とマージされます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 配列の場合：正常にコピーされた要素数を返します。取得される要素数は配列の長さによって制限されます。
  - リスト、ハッシュリストの場合：ターゲット変数内の要素の総数を返します。
:::

----
#### DICTGETVALUES

**`int DICTGETVALUES anyanyDict srcDict, same Array_List_HashList`**

**`int DICTGETVALUES anyDict_anyanyDict srcDictDict, same Array_List_HashList`**

指定されたソース辞書内のすべての値を、指定されたターゲット配列、リスト、ハッシュリストにコピーします。

:::tip[パラメータ]
- **anyanyDict srcDict**
  - 任意のソース辞書を指定します。
- **anyDict_anyanyDict srcDictDict**
  - 任意のソース辞書型辞書を指定します。
- **same Array_List_HashList**
  - 値要素を受け取るための参照可能な配列、リスト、ハッシュリストを指定します。値の型は最初のパラメータの値の型と一致している必要があります。
    - リストの場合：ソースの内容はリストの末尾に追加されます。
    - ハッシュリストの場合：ソースの内容はハッシュリスト内の既存の内容とマージされます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 配列の場合：正常にコピーされた要素数を返します。取得される要素数は配列の長さによって制限されます。
  - リスト、ハッシュリストの場合：ターゲット変数内の要素の総数を返します。
:::

----
#### DICTCOPY

**`int DICTCOPY anyanyDict srcDict, sameAsKeysameAsKeyDict destDict`**

**`int DICTCOPY anyanyDict srcDict, anyDict_sameAsKeysameDict destDictDict`**

**`int DICTCOPY anyDict_anyanyDict srcDictDict, sameAsKeysameAsKeyDict destDict`**

**`int DICTCOPY anyDict_anyanyDict srcDictDict, anyDict_sameAsKeysameDict destDictDict`**

指定されたソース辞書内のすべての要素を、指定されたターゲット辞書にコピーします。

:::tip[パラメータ]
- **anyanyDict srcDict**
  - 任意のソース辞書を指定します。
- **anyDict_anyanyDict srcDictDict**
  - 任意のソース辞書型辞書を指定します。
- **sameAsKeysameAsKeyDict destDict**
  - ターゲット辞書を指定します。キーの型、値の型は最初のパラメータと一致している必要があります。
- **anyDict_sameAsKeysameDict destDictDict**
  - ターゲット辞書型辞書を指定します。第2キーの型、値の型は最初のパラメータと一致している必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - ターゲット変数内の要素の総数を返します。
:::

----
### 辞書コレクション関連 {#DictItemRelated}

----
#### DICTITEMCREATE

**`int DICTITEMCREATE anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMCREATE anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMCREATE anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

指定された辞書コレクション内に新しいコレクションを作成します。

:::tip[パラメータ]
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **anyDict_anyHashList dictHashList**
  - 任意のハッシュリスト型辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **sameAsDictKey dictKey**
  - 作成する主キー名を指定します。キー名の値の型は最初のパラメータの主キーの型と一致している必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定された主キー名の作成に成功した場合は `非0` を、同じキー名のコレクションが既に存在する場合は `0` を返します。
:::

----
#### DICTITEMEXIST

**`int DICTITEMEXIST anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMEXIST anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMEXIST anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

指定された辞書コレクション内で指定された主キー名を検索します。

:::tip[パラメータ]
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **anyDict_anyHashList dictHashList**
  - 任意のハッシュリスト型辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **sameAsDictKey dictKey**
  - 検索する主キー名を指定します。キー名の値の型は最初のパラメータの主キーの型と一致している必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定された主キー名を正常に検索した場合は `非0` を、検索できなかった場合は `0` を返します。
:::

----
#### DICTITEMRELEASE

**`int DICTITEMRELEASE anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMRELEASE anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMRELEASE anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

指定された辞書コレクション内から指定された主キー名とコレクションを削除します。

:::tip[パラメータ]
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **anyDict_anyHashList dictHashList**
  - 任意のハッシュリスト型辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **sameAsDictKey dictKey**
  - 削除する主キー名を指定します。キー名の値の型は最初のパラメータの主キーの型と一致している必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定された主キー名とコレクションを正常に見つけて削除した場合は `非0` を、見つからなかった場合は `0` を返します。
:::

----
#### DICTITEMRELEASEALL

**`int DICTITEMRELEASEALL anyDict_anyList dictList`**

**`int DICTITEMRELEASEALL anyDict_anyHashList dictHashList`**

**`int DICTITEMRELEASEALL anyDict_anyanyDict dictDict`**

指定された辞書コレクション内のすべての主キー名とコレクションを削除します。

:::tip[パラメータ]
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **anyDict_anyHashList dictHashList**
  - 任意のハッシュリスト型辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 常に `非0` を返します。
:::

----
#### DICTITEMCOUNT

**`int DICTITEMCOUNT anyDict_anyList dictList`**

**`int DICTITEMCOUNT anyDict_anyHashList dictHashList`**

**`int DICTITEMCOUNT anyDict_anyanyDict dictDict`**

指定された辞書コレクション内のコレクション数を取得します。

:::tip[パラメータ]
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **anyDict_anyHashList dictHashList**
  - 任意のハッシュリスト型辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 辞書コレクション内のコレクション数を返します。
:::

----
#### DICTITEMGETKEYS

**`int DICTITEMGETKEYS anyDict_anyList dictList, sameAsDictKey Array_List_HashList`**

**`int DICTITEMGETKEYS anyDict_anyHashList dictHashList, sameAsDictKey Array_List_HashList`**

**`int DICTITEMGETKEYS anyDict_anyanyDict dictDict, sameAsDictKey Array_List_HashList`**

指定された辞書コレクション内のすべての主キー名を取得します。

:::tip[パラメータ]
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **anyDict_anyHashList dictHashList**
  - 任意のハッシュリスト型辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **sameAsDictKey Array_List_HashList**
  - 主キー名を受け取るための任意の参照可能な配列、リスト、ハッシュリストを指定します。値の型は最初のパラメータの主キーの型と一致している必要があります。
    - リストの場合：ソースの内容はリストの末尾に追加されます。
    - ハッシュリストの場合：ソースの内容はハッシュリスト内の既存の内容とマージされます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 配列の場合：正常にコピーされた要素数を返します。取得される要素数は配列の長さによって制限されます。
  - リスト、ハッシュリストの場合：ターゲット変数内の要素の総数を返します。
:::

----
### 入力関連 {#InputRelated}

----
#### CHKKEYDATA

**`int CHKKEYDATA int keyData(, str keyName, int modifier)`**

ユーザーが入力した `keyData` キーコード値が、指定された `keyName` キー名と `modifier` 修飾キーに一致するかどうかをチェックします。`keyData` キーコード値は [**`INPUTMOUSEKEY`**](modify_com#inputmousekey) 指令で取得できます。

具体的な `keyName` キー名対応リストについては、[**`Keys 列挙型`**](https://learn.microsoft.com/dotnet/api/system.windows.forms.keys?view=netframework-4.8) ドキュメントを参照してください。

:::tip[パラメータ]
- **int keyData**
  - ユーザーが入力したキーコード値データを指定します。
- **str keyName**
  - マッチさせるキー名を指定します。キー名は大文字小文字を区別しません。省略可能。
- **int modifier**
  - マッチさせる修飾キーを指定します。省略可能。
    - `1P0` = Shift
    - `1P1` = Ctrl
    - `1P2` = Alt
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定されたキー名と修飾キーに正常にマッチしたかどうかを示します。成功時は `非0` を返します。
:::

:::note[使用例]
```
INPUTMOUSEKEY 0
IF RESULT:0 == 3
  PRINTVL CHKKEYDATA(RESULT:2, "A")		; ユーザーが "A" を入力したかチェック
  PRINTVL CHKKEYDATA(RESULT:2, , 1P0 | 1P1)	; ユーザーが "Ctrl + Shift" を入力したかチェック
  PRINTVL CHKKEYDATA(RESULT:2, "/", 1P1 | 1P2)	; ユーザーが "Ctrl + Alt + /" を入力したかチェック
ENDIF
```
:::

----
### 画像関連 {#ImageRelated}

----
#### ASYNCGDRAWG

この指令の呼び出し方法は [**`GDRAWG`**](modify_com#gdrawg) 指令と同じで、長時間のプログラム停止を避けるために非同期で描画操作を行います。

非同期タスクを送信した後、[**`ASYNCWAITALL`**](#asyncwaitall) 指令を呼び出して、すべての非同期タスクが完了するまでプログラムを強制的に待機させることができます。

:::tip[戻り値]
- **RESULT:0**
  - 非同期タスクの送信に成功した場合は `非0` を、指定された画像が作成されていない場合は `0` を返します。
:::

----
#### ASYNCGDRAWSPRITE

この指令の呼び出し方法は [**`GDRAWSPRITE`**](modify_com#gdrawsprite) 指令と同じで、長時間のプログラム停止を避けるために非同期で描画操作を行います。

非同期タスクを送信した後、[**`ASYNCWAITALL`**](#asyncwaitall) 指令を呼び出して、すべての非同期タスクが完了するまでプログラムを強制的に待機させることができます。

:::tip[戻り値]
- **RESULT:0**
  - 非同期タスクの送信に成功した場合は `非0` を、指定された画像またはSpriteが作成されていない場合は `0` を返します。
:::

----
#### ASYNCGCREATEFROMFILE

**`int ASYNCGCREATEFROMFILE int GID, str filepath`**

この指令の呼び出し方法は [**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) 指令と同じで、長時間のプログラム停止を避けるために指定された画像ファイルを非同期でロードします。

非同期タスクを送信した後、[**`ASYNCWAITALL`**](#asyncwaitall) 指令を呼び出して、すべての非同期タスクが完了するまでプログラムを強制的に待機させることができます。

:::tip[戻り値]
- **RESULT:0**
  - 常に `非0` を返します。
:::

----
#### ASYNCGDISPOSE

**`int ASYNCGDISPOSE int GID`**

この指令の呼び出し方法は [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 指令と同じで、他の非同期指令と組み合わせて使用することで画像を解放します。

非同期タスクを送信した後、[**`ASYNCWAITALL`**](#asyncwaitall) 指令を呼び出して、すべての非同期タスクが完了するまでプログラムを強制的に待機させることができます。

:::tip[戻り値]
- **RESULT:0**
  - 非同期タスクの送信に成功した場合は `非0` を、指定された画像が作成されていない場合は `0` を返します。
:::

----
#### ASYNCSPRITELOAD

**`int ASYNCSPRITELOAD str sprite`**

この指令は、長時間のプログラム停止を避けるために、指定されたSpriteが参照する画像を非同期でロードするために使用します。

非同期タスクを送信した後、[**`ASYNCWAITALL`**](#asyncwaitall) 指令を呼び出して、すべての非同期タスクが完了するまでプログラムを強制的に待機させることができます。

:::tip[パラメータ]
- **str sprite**
  - 非同期ロードしたいSprite名を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 非同期タスクの送信に成功した場合、またはSpriteの画像が既にロードされている場合は `非0` を、Spriteが見つからない場合は `0` を返します。
:::

----
#### ASYNCWAITALL

**`void ASYNCWAITALL`**

この指令は、すべての非同期タスクが完了するまで強制的に待機するために使用します。

----
#### GETBEZIERPATH

**`int GETBEZIERPATH intArray2|3D pointArray, int pointCount, intArray2D outputArray, int outputCount`**

ベジェ曲線を生成し、曲線上にあるすべての座標点を `outputArray` 配列に格納するために使用します。

:::tip[パラメータ]
- **intArray2|3D pointArray**
  - 曲線の生成に使用する始点、複数の制御点、終点の座標を指定します。配列の最後の次元の長さは `2以上` である必要があります。
- **int pointCount**
  - `pointArray` 内の座標点の数を指定します。
- **intArray2D outputArray**
  - 生成された曲線の座標が格納される配列を指定します。配列の最後の次元の長さは `2以上` である必要があります。
- **int outputCount**
  - 生成する座標点の数を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指令が正常に実行されたかどうかを示します。成功時は `非0` を返します。
:::

----
#### GETBEZIERPOINT

**`int GETBEZIERPOINT intArray2|3D pointArray, int pointCount, int t, int tMax`**

指定された制御点と経路に基づいて、ベジェ曲線上の座標点を取得します。

:::tip[パラメータ]
- **intArray2|3D pointArray**
  - 曲線の生成に使用する始点、複数の制御点、終点の座標を指定します。配列の最後の次元の長さは `2以上` である必要があります。
- **int pointCount**
  - `pointArray` 内の座標点の数を指定します。
- **int t**
  - 必要な座標点がある経路を指定します。
- **int tMax**
  - 最大経路を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指令が正常に実行されたかどうかを示します。成功時は `非0` を返します。
- **RESULT:1**
  - 座標点のX値。
- **RESULT:2**
  - 座標点のY値。
:::

----
#### GDISPOSEALL

**`void GDISPOSEALL`**

すべてのGraphics画像を解放してクリアします。

----
#### GENABLED

**`int GENABLED int GID`**

指定された画像の `ENABLED` 値を取得します。この値は、その画像が最終的に画面に描画されるかどうかを制御するために使用されます。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定された画像の `ENABLED` 値を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETENABLED

**`int GSETENABLED int GID, int enabled`**

この指令は、画像の位置情報を維持したまま、その画像が最終的に画面に描画されるかどうかを制御するために使用します。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int enabled**
  - この画像を描画するかどうかを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GFILLELLIPSE

**`int GFILLELLIPSE int GID, int x, int y, int width, int height`**

楕円グラフィックを描画するために使用します。使用方法は [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) 指令と類似しており、[**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) 指令で色を指定します。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int x**
  - 楕円のX位置を指定します。
- **int y**
  - 楕円のY位置を指定します。
- **int width**
  - 楕円の幅を指定します。
- **int height**
  - 楕円の高さを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - グラフィックの描画が成功したかどうかを示します。成功時は `非0` を返します。指定された画像が作成されていない場合は `0` を返します。
:::

----
#### GFILLROUNDRECT

**`int GFILLROUNDRECT int GID, int x, int y, int width, int height, int radiusX(, int radiusY)`**

角丸矩形を描画するために使用します。使用方法は [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) 指令と類似しており、[**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) 指令で色を指定します。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int x**
  - 角丸矩形のX位置を指定します。
- **int y**
  - 角丸矩形のY位置を指定します。
- **int width**
  - 角丸矩形の幅を指定します。
- **int height**
  - 角丸矩形の高さを指定します。
- **int radiusX**
  - 角のX半径を指定します。
- **int radiusY**
  - 角のY半径を指定します。省略時は `radiusX` と同じ値を使用します。
:::

:::tip[戻り値]
- **RESULT:0**
  - グラフィックの描画が成功したかどうかを示します。成功時は `非0` を返します。指定された画像が作成されていない場合は `0` を返します。
:::

----
#### GRESAMPLESAVE

**`int GRESAMPLESAVE int GID, any fileName, int width, int height`**

使用方法は [**`GSAVE`**](modify_com#gsave-gload) 指令と類似しており、より高品質なリサンプリングによってより鮮明なスケーリング画像を生成し、ファイルとして保存します。ただし、その代償としてより多くの時間がかかります。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **any fileName**
  - 保存するファイル番号またはファイルパスを指定します。
- **int width**
  - スケーリング後の幅を指定します。
- **int height**
  - スケーリング後の高さを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - ファイルへの保存が成功したかどうかを示します。成功時は `非0` を返します。指定された画像が作成されていない、ファイルパスが不適切、ファイル保存エラーの場合は `0` を返します。
:::

----
#### GSNAPSHOT

**`int GSNAPSHOT int GID`**

この指令は、実行時に画面をキャプチャし、現在のウィンドウ内の画面データを指定された画像IDにコピーするために使用します。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 常に `非0` を返します。
:::

----
#### GRESETMATRIX

**`int GRESETMATRIX int GID`**

指定された画像の変換行列をリセットします。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像の変換行列の設定が成功したかどうかを示します。成功時は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GRESETSTATE

**`int GRESETSTATE int GID`**

指定された画像のすべての追加状態をリセットします。具体的なリセット内容は以下の通りです：

- `BRUSH` の色がデフォルトの文字色にリセットされます。
- `PEN` の色がデフォルトの文字色に、線幅が `1` に、すべての線効果がリセットされます。
- アンチエイリアス効果が `1(有効)` にリセットされます。
- フィルタリング品質が `3(高品質)` にリセットされます。
- ぼかし効果がクリアされます。
- `ColorMatrix(カラーマトリックス)` がクリアされます。
- `TransformMatrix(変換行列)` がリセットされます。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像の状態のリセットが成功したかどうかを示します。成功時は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETANTIALIAS

**`int GSETANTIALIAS int GID(, int mode = 0)`**

画像描画時にアンチエイリアスを有効にするかどうかを設定するために使用します。

新しく作成されたすべての画像はデフォルトでアンチエイリアスが有効です。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int mode = 0**
  - アンチエイリアスを有効にするかどうかを指定します。`非0` を入力するとアンチエイリアスが有効になり、それ以外の場合は無効になります。省略可 `(0)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像のアンチエイリアス設定が成功したかどうかを示します。成功時は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETBLUR

**`int GSETBLUR int GID(, int blur = 0)`**

画像描画時にぼかし効果を有効にするかどうかを設定するために使用します。

新しく作成されたすべての画像はデフォルトでぼかし効果がありません。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int blur = 0**
  - ぼかしの程度を指定します。入力範囲は `0-100` で、省略または `0` を入力するとぼかし効果がクリアされます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像のぼかし効果設定が成功したかどうかを示します。成功時は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETCOLORMATRIX

**`int GSETCOLORMATRIX int GID(, intArray colorMatrix)`**

画像描画時にカラーマトリックスを有効にするかどうかを設定するために使用します。

カラーマトリックス配列は少なくとも `4行 x 5列` のサイズが必要です。最初の4列の入力範囲は `0-255` または `256-510` で、つまり最初の4列は2倍の過飽和をサポートします。第5列の入力範囲は `0-255` です。

カラーマトリックスをクリアする必要がある場合は、第2パラメータ `colorMatrix` を省略して再度この指令を呼び出してください。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **intArray colorMatrix**
  - カラーマトリックスとして任意の整数配列を指定します。このパラメータを省略すると既存のカラーマトリックスがクリアされます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像のカラーマトリックス設定が成功したかどうかを示します。成功時は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

:::note[使用例]
```
#DIM COLOR_MATRIX, 4, 5

COLOR_MATRIX:0:0 = 255, 0, 0, 0, 0	; 赤
COLOR_MATRIX:1:0 = 0, 255, 0, 0, 0	; 緑
COLOR_MATRIX:2:0 = 0, 0, 255, 0, 0	; 青
COLOR_MATRIX:3:0 = 0, 0, 0, 0XFF, 0	; アルファ

GCREATE 0, 100, 100
GSETCOLORMATRIX 0, COLOR_MATRIX:0:0
```
:::

----
#### GSETQUALITY

**`int GSETQUALITY int GID(, int quality = 3)`**

画像描画時のフィルタリング品質レベルを設定するために使用します。この設定は、画像をスケーリングする際の鮮明さに影響します。

新しく作成されたすべての画像はデフォルトで `3(高品質)` を使用します。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int quality = 3**
  - 品質レベルを指定します。入力範囲は `0-3`：
    - `0` = フィルタリングなし
    - `1` = 低品質
    - `2` = 中品質
    - `3` = 高品質
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像のフィルタリング品質設定が成功したかどうかを示します。成功時は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETSCALE

**`int GSETSCALE int GID, int scaleX, int scaleY(, int posX = 0, int posY = 0)`**

画像の変換行列に `スケーリング` 効果を追加します。

追加された効果は元に戻すことができず、[**`GRESETMATRIX`**](#gresetmatrix) 指令を呼び出してすべてリセットするしかありません。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int scaleX**
  - Xスケーリング量を指定します。`100` を入力すると `100%` になります。
- **int scaleY**
  - Yスケーリング量を指定します。`100` を入力すると `100%` になります。
- **int posX = 0**
  - スケーリング中心点のX位置を指定します。省略可 `(0)`。
- **int posY = 0**
  - スケーリング中心点のY位置を指定します。省略可 `(0)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像の変換行列設定が成功したかどうかを示します。成功時は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETSKEW

**`int GSETSKEW int GID, int skewX, int skewY`**

画像の変換行列に `傾斜` 効果を追加します。

追加された効果は元に戻すことができず、[**`GRESETMATRIX`**](#gresetmatrix) 指令を呼び出してすべてリセットするしかありません。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int skewX**
  - X傾斜量を指定します。`100` を入力すると `100%` になります。
- **int skewY**
  - Y傾斜量を指定します。`100` を入力すると `100%` になります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像の変換行列設定が成功したかどうかを示します。成功時は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETROTATE

**`int GSETROTATE int GID, int angle`**

**`int GSETROTATE int GID, int angle, int posX = 0, int posY = 0`**

画像の変換行列に `回転` 効果を追加します。

追加された効果は元に戻すことができず、[**`GRESETMATRIX`**](#gresetmatrix) 指令を呼び出してすべてリセットするしかありません。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int angle**
  - 回転角度を指定します。
- **int posX = 0**
  - 回転中心点のX位置を指定します。省略可 `(0)`。
- **int posY = 0**
  - 回転中心点のY位置を指定します。省略可 `(0)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像の変換行列設定が成功したかどうかを示します。成功時は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETTRANSLATE

**`int GSETTRANSLATE int GID, int translateX, int translateY`**

画像の変換行列に `平行移動` 効果を追加します。

追加された効果は元に戻すことができず、[**`GRESETMATRIX`**](#gresetmatrix) 指令を呼び出してすべてリセットするしかありません。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int translateX**
  - 平行移動のXベクトルを指定します。
- **int translateY**
  - 平行移動のYベクトルを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像の変換行列設定が成功したかどうかを示します。成功時は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### SPRITEANIMECLEARFRAME

**`int SPRITEANIMECLEARFRAME str spriteAnime(, int removeStart = 0, int removeCount = frameCount)`**

指定されたSpriteAnimeのフレームをクリアします。

この指令は、組み込みではないSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int removeStart = 0**
  - クリア開始位置を指定します。
- **int removeCount = frameCount**
  - クリアするフレーム数を指定します。省略時は `removeStart` から始まるすべてのフレームがクリアされます。
:::

:::tip[戻り値]
- **RESULT:0**
  - クリアが成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない、またはSpriteAnimeが組み込みの場合は `0` を返します。
:::

----
#### SPRITEANIMEFRAMECOUNT

**`int SPRITEANIMEFRAMECOUNT str spriteAnime`**

指定されたSpriteAnimeに追加されたフレーム数を取得します。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定されたSpriteAnimeのフレーム数を返します。SpriteAnimeが作成されていない場合は `0` を返します。
:::

----
#### SPRITEANIMERESETTIME

**`int SPRITEANIMERESETTIME str spriteAnime`**

指定されたSpriteAnimeの再生時間をリセットし、アニメーションを最初のフレームから再開させます。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない場合は `0` を返します。
:::

----
#### SPRITEANIMEOFFSETTIME

**`int SPRITEANIMEOFFSETTIME str spriteAnime, int offsetTime`**

指定されたSpriteAnimeの再生時間にオフセット値を追加します。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int offsetTime**
  - オフセット値を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない場合は `0` を返します。
:::

----
#### SPRITEFRAME_SETG

**`int SPRITEFRAME_SETG str spriteAnime, int GID`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height, int posX, int posY`**

指定されたSpriteAnimeの現在のフレームに画像を設定します。各フレームで最後に設定された画像タイプのみが有効になります。

この指令は、組み込みではないSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int GID**
  - 画像IDを指定します。
- **int x**
  - 選択範囲のX位置を指定します。
- **int y**
  - 選択範囲のY位置を指定します。
- **int width**
  - 選択範囲の幅を指定します。
- **int height**
  - 選択範囲の高さを指定します。
- **int posX**
  - 選択範囲の描画X位置を指定します。
- **int posY**
  - 選択範囲の描画Y位置を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない、またはSpriteAnimeが組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_SETSPRITE

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height, int posX, int posY`**

指定されたSpriteAnimeの現在のフレームにSprite画像を設定します。各フレームで最後に設定された画像タイプのみが有効になります。

この指令は、組み込みではないSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **str sprite**
  - Spriteを指定します。
- **int x**
  - 選択範囲のX位置を指定します。
- **int y**
  - 選択範囲のY位置を指定します。
- **int width**
  - 選択範囲の幅を指定します。
- **int height**
  - 選択範囲の高さを指定します。
- **int posX**
  - 選択範囲の描画X位置を指定します。
- **int posY**
  - 選択範囲の描画Y位置を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない、またはSpriteAnimeが組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_SETSPINE

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height, int posX, int posY`**

指定されたSpriteAnimeの現在のフレームにSpineアニメーションを設定します。各フレームで最後に設定された画像タイプのみが有効になります。

この指令は、組み込みではないSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int spineID**
  - SpineIDを指定します。
- **int x**
  - 選択範囲のX位置を指定します。
- **int y**
  - 選択範囲のY位置を指定します。
- **int width**
  - 選択範囲の幅を指定します。
- **int height**
  - 選択範囲の高さを指定します。
- **int posX**
  - 選択範囲の描画X位置を指定します。
- **int posY**
  - 選択範囲の描画Y位置を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない、またはSpriteAnimeが組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_TRANSITION

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton`**

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton, intArray2D bezierPointArray, int bezierPointCount`**

指定されたSpriteAnimeの現在のフレームに対してトランジション効果を有効または無効にします。このトランジション効果は、前のフレームを変形の開始点、現在のフレームを変形の終了点として使用します。  
非線形のトランジション効果を得るために、ベジェ曲線を記述する配列を渡すことができます。

- 以下の属性のみがトランジション効果の影響を受けます：
  - 変換行列
  - カラーマトリックス
  - ぼかし効果

この指令は、組み込みではないSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int useTransisiton**
  - トランジション効果を有効または無効にするか指定します。
- **intArray2D bezierPointArray**
  - ベジェ曲線を記述する配列を指定します。
- **int bezierPointCount**
  - 配列内の座標点の数を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない、またはSpriteAnimeが組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_TRANSLATE

**`int SPRITEFRAME_TRANSLATE str spriteAnime, int translateX, int translateY`**

指定されたSpriteAnimeの現在のフレームの変換行列に `平行移動` 効果を追加します。

追加された効果は元に戻すことができず、[**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 指令を呼び出して現在のフレームの変換行列をリセットするしかありません。

この指令は、組み込みではないSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int translateX**
  - 平行移動のXベクトルを指定します。
- **int translateY**
  - 平行移動のYベクトルを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない、またはSpriteAnimeが組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_SCALE

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY`**

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY, int posX, int posY`**

指定されたSpriteAnimeの現在のフレームの変換行列に `スケーリング` 効果を追加します。

追加された効果は元に戻すことができず、[**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 指令を呼び出して現在のフレームの変換行列をリセットするしかありません。

この指令は、組み込みではないSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int scaleX**
  - Xスケーリング量を指定します。`100` を入力すると `100%` になります。
- **int scaleY**
  - Yスケーリング量を指定します。`100` を入力すると `100%` になります。
- **int posX = 0**
  - スケーリング中心点のX位置を指定します。省略可 `(0)`。
- **int posY = 0**
  - スケーリング中心点のY位置を指定します。省略可 `(0)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない、またはSpriteAnimeが組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_ROTATE

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle`**

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle, int posX, int posY`**

指定されたSpriteAnimeの現在のフレームの変換行列に `回転` 効果を追加します。

追加された効果は元に戻すことができず、[**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 指令を呼び出して現在のフレームの変換行列をリセットするしかありません。

この指令は、組み込みではないSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int angle**
  - 回転角度を指定します。
- **int posX**
  - 回転中心点のX位置を指定します。省略可 `(0)`。
- **int posY**
  - 回転中心点のY位置を指定します。省略可 `(0)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない、またはSpriteAnimeが組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_SKEW

**`int SPRITEFRAME_SKEW str spriteAnime, int skewX, int skewY`**

指定されたSpriteAnimeの現在のフレームの変換行列に `傾斜` 効果を追加します。

追加された効果は元に戻すことができず、[**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 指令を呼び出して現在のフレームの変換行列をリセットするしかありません。

この指令は、組み込みではないSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int skewX**
  - X傾斜量を指定します。`100` を入力すると `100%` になります。
- **int skewY**
  - Y傾斜量を指定します。`100` を入力すると `100%` になります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない、またはSpriteAnimeが組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_RESETMATRIX

**`int SPRITEFRAME_RESETMATRIX str spriteAnime`**

指定されたSpriteAnimeの現在のフレームの変換行列をリセットします。

この指令は、組み込みではないSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない、またはSpriteAnimeが組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_COLORMATRIX

**`int SPRITEFRAME_COLORMATRIX str spriteAnime(, intArray colorMatrix)`**

指定されたSpriteAnimeの現在のフレームにカラーマトリックスを設定します。

カラーマトリックス配列は少なくとも `4行 x 5列` のサイズが必要です。最初の4列の入力範囲は `0-255` または `256-510` で、つまり最初の4列は2倍の過飽和をサポートします。第5列の入力範囲は `0-255` です。

カラーマトリックスをクリアする必要がある場合は、第2パラメータ `colorMatrix` を省略して再度この指令を呼び出してください。

この指令は、組み込みではないSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **intArray colorMatrix**
  - カラーマトリックスとして任意の整数配列を指定します。このパラメータを省略すると既存のカラーマトリックスがクリアされます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない、またはSpriteAnimeが組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_BLUR

**`int SPRITEFRAME_BLUR str spriteAnime(, int blur = 0)`**

指定されたSpriteAnimeの現在のフレームにぼかし効果を設定します。

この指令は、組み込みではないSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int blur = 0**
  - ぼかしの程度を指定します。入力範囲は `0-100` で、省略または `0` を入力するとぼかし効果がクリアされます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。SpriteAnimeが作成されていない、またはSpriteAnimeが組み込みの場合は `0` を返します。
:::

----
#### SPRITEENABLED

**`int SPRITEENABLED str sprite`**

指定されたSprite画像の `ENABLED` 値を取得します。この値は、その画像が最終的に画面に描画されるかどうかを制御するために使用されます。

:::tip[パラメータ]
- **str sprite**
  - Sprite画像を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定されたSprite画像の `ENABLED` 値を返します。Sprite画像が作成されていない場合は `0` を返します。
:::

----
#### SPRITESETENABLED

**`int SPRITESETENABLED str sprite, int enabled`**

この指令は、Sprite画像の位置情報を維持したまま、その画像が最終的に画面に描画されるかどうかを制御するために使用します。

:::tip[パラメータ]
- **str sprite**
  - Sprite画像を指定します。
- **int enabled**
  - このSprite画像を描画するかどうかを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。Sprite画像が作成されていない場合は `0` を返します。
:::

----
#### SPRITEEXIST

**`int SPRITEEXIST str sprite`**

使用方法は [**`SPRITECREATED`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITECREATED.20str.20spriteName) 指令と類似しており、指定されたSpriteの有無を検索しますが、その参照画像の自動ロードメカニズムはトリガーしません。

:::tip[パラメータ]
- **str sprite**
  - 検索するSprite名を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定されたSpriteが見つかったかどうかを示します。見つかった場合は `非0` を返します。
:::

----
#### SPRITEEXTEND

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height`**

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height, int posX, int posY`**

既存のSpriteに基づいて、新しい組み込みではないSpriteを作成します。新しいSpriteの選択範囲は、元のSpriteのサイズによって制限されます。

:::tip[パラメータ]
- **str newSprite**
  - 新しいSprite名を指定します。
- **str srcSprite**
  - 元のSprite名を指定します。
- **int x**
  - 選択範囲のX位置を指定します。
- **int y**
  - 選択範囲のY位置を指定します。
- **int width**
  - 選択範囲の幅を指定します。
- **int height**
  - 選択範囲の高さを指定します。
- **int posX**
  - 新しいSpriteの描画X位置を指定します。
- **int posY**
  - 新しいSpriteの描画Y位置を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 新しい組み込みではないSpriteの作成が成功したかどうかを示します。成功時は `非0` を返します。新しいSpriteと元のSpriteが同名、同じ名前の組み込みSpriteが既に存在する、元のSpriteが存在しない、元のSpriteが単一画像タイプのSpriteでない場合は `0` を返します。
:::

----
#### CONSTSPRITECREATE

**`int CONSTSPRITECREATE str sprite, str imgPath`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height, int posX, int posY`**

指定された `imgPath` 画像ファイルパスに基づいて、新しい組み込みSpriteを作成します。

この操作は既存の組み込みではないSpriteを置き換えます。

:::tip[パラメータ]
- **str sprite**
  - 新しいSprite名を指定します。
- **str imgPath**
  - 画像ファイルパスを指定します。
- **int x**
  - 選択範囲のX位置を指定します。
- **int y**
  - 選択範囲のY位置を指定します。
- **int width**
  - 選択範囲の幅を指定します。
- **int height**
  - 選択範囲の高さを指定します。
- **int posX**
  - 新しいSpriteの描画X位置を指定します。
- **int posY**
  - 新しいSpriteの描画Y位置を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 新しい組み込みSpriteの作成が成功したかどうかを示します。成功時は `非0` を返します。同じ名前の組み込みSpriteが既に存在する、指定された選択範囲が画像と交差していない場合は `0` を返します。
:::

----
### SPINE関連 {#SpineRelated}

----
#### SPINECREATE

**`int SPINECREATE int spineID, str spineResource`**

csvリソースファイルで定義されたSpineリソースに基づいて、指定された `spineID` にSpineアニメーションを作成します。

この指令は、Spineアニメーションを作成する前に既に作成されているSpineアニメーションを解放します。つまり、作成前に [**`SPINEDISPOSE`**](#spinedispose) 指令を呼び出す必要はありません。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **str spineResource**
  - Spineリソース名を指定します。名前は大文字小文字を区別しません。
:::

:::tip[戻り値]
- **RESULT:0**
  - Spineアニメーションの作成が成功したかどうかを示します。成功時は `非0` を返します。Spineアニメーションリソースが存在しない場合は `0` を返します。
:::

----
#### SPINECREATEFROMFILE

**`int SPINECREATEFROMFILE int spineID, str atlasFile, str dataFile`**

指定された `atlasファイル` と `dataファイル(.skelまたは.json)` に基づいて、指定された `spineID` にSpineアニメーションを作成します。

この指令は、Spineアニメーションを作成する前に既に作成されているSpineアニメーションを解放します。つまり、作成前に [**`SPINEDISPOSE`**](#spinedispose) 指令を呼び出す必要はありません。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **str atlasFile**
  - Spineアニメーションのatlasファイルを指定します。
- **str dataFile**
  - Spineアニメーションの.skelファイルまたは.jsonファイルを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Spineアニメーションの作成が成功したかどうかを示します。成功時は `非0` を返します。ファイルが存在しない、ファイル形式が適切でない場合は `0` を返します。
:::

----
#### SPINECREATED

**`int SPINECREATED int spineID`**

指定されたSpineアニメーションが作成されているかどうかをチェックします。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Spineアニメーションが作成されているかどうかを示します。作成済みの場合は `非0` を返します。
:::

----
#### SPINEDISPOSE

**`int SPINEDISPOSE int spineID(, int disposeImg = 0)`**

指定されたSpineアニメーションを削除します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int disposeImg = 0**
  - このSpineアニメーションが参照する画像を解放するかどうかを指定します。`非0` を入力すると画像が解放されます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 常に `非0` を返します。
:::

----
#### SPINEDISPOSEALL

**`int SPINEDISPOSEALL (int disposeImg = 0)`**

すべてのSpineアニメーションを削除します。

:::tip[パラメータ]
- **int disposeImg = 0**
  - すべてのSpineアニメーションが参照する画像を解放するかどうかを指定します。`非0` を入力すると画像が解放されます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 常に `非0` を返します。
:::

----
#### SPINEENABLED

**`int SPINEENABLED int spineID`**

指定されたSpineアニメーションの `ENABLED` 値を取得します。この値は、そのSpineアニメーションが最終的に画面に描画されるかどうかを制御するために使用されます。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定されたSpineアニメーションの `ENABLED` 値を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### SPINESETENABLED

**`int SPINESETENABLED int spineID, int enabled`**

この指令は、Spineアニメーションの位置情報を維持したまま、そのSpineアニメーションが最終的に画面に描画されるかどうかを制御するために使用します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int enabled**
  - このSpineアニメーションを描画するかどうかを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### GDRAWSPINE

**`int GDRAWSPINE int GID, int spineID`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

使用方法は [**`GDRAWG`**](modify_com#gdrawg) 指令と類似しており、指定された `GID` 画像上に `spineID` Spineアニメーションを描画します。

`colorMatrix` カラーマトリックスの使用方法については、[**`GSETCOLORMATRIX`**](#gsetcolormatrix) 指令の説明を参照してください。

:::tip[パラメータ]
- **int GID**
  - ターゲット画像IDを指定します。
- **int spineID**
  - ソースSpineIDを指定します。
- **int destX**
  - ターゲットX位置を指定します。
- **int destY**
  - ターゲットY位置を指定します。
- **int destWidth**
  - ターゲット幅を指定します。`負数` を渡すと反転した画像が描画されます。
- **int destHeight**
  - ターゲット高さを指定します。`負数` を渡すと反転した画像が描画されます。
- **int srcX**
  - ソースX位置を指定します。
- **int srcY**
  - ソースY位置を指定します。
- **int srcWidth**
  - ソース幅を指定します。
- **int srcHeight**
  - ソース高さを指定します。
- **intArray colorMatrix**
  - カラーマトリックスとして任意の整数配列を指定します。省略可能です。このカラーマトリックスは今回の描画時のみ有効で、描画完了後は自動的にクリアされます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 描画が成功したかどうかを示します。成功時は `非0` を返します。指定された画像またはSpineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### ASYNCGDRAWSPINE

この指令の呼び出し方法は [**`GDRAWSPINE`**](#gdrawspine) 指令と同じで、長時間のプログラム停止を避けるために非同期で描画操作を行います。

非同期タスクを送信した後、[**`ASYNCWAITALL`**](#asyncwaitall) 指令を呼び出して、すべての非同期タスクが完了するまでプログラムを強制的に待機させることができます。

:::tip[戻り値]
- **RESULT:0**
  - 非同期タスクの送信に成功した場合は `非0` を、指定された画像またはSpineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### ASYNCSPINELOAD

**`int ASYNCSPINELOAD int spineID`**

この指令は、長時間のプログラム停止を避けるために、指定されたSpineアニメーションが参照する画像を非同期でロードするために使用します。

非同期タスクを送信した後、[**`ASYNCWAITALL`**](#asyncwaitall) 指令を呼び出して、すべての非同期タスクが完了するまでプログラムを強制的に待機させることができます。

:::tip[パラメータ]
- **int spineID**
  - 非同期ロードしたいSpineIDを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 非同期タスクの送信に成功した場合は `非0` を、Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### SPINEPOSX, SPINEPOSY

**`int SPINEPOSX int spineID`**

**`int SPINEPOSY int spineID`**

指定されたSpineアニメーションの描画位置を取得します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Spineアニメーションの描画位置を返します。
:::

----
#### SPINESRCX, SPINESRCY

**`int SPINESRCX int spineID`**

**`int SPINESRCY int spineID`**

指定されたSpineアニメーションの元の座標軸位置を取得します。取得される値は [**`SPINESETSCALE`**](#spinesetscale) 指令の影響を受けます。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Spineアニメーションの元の座標軸位置を返します。
:::

----
#### SPINEWIDTH, SPINEHEIGHT

**`int SPINEWIDTH int spineID`**

**`int SPINEHEIGHT int spineID`**

指定されたSpineアニメーションの幅または高さを取得します。取得される値は [**`SPINESETSCALE`**](#spinesetscale) 指令の影響を受けます。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Spineアニメーションの幅または高さを返します。
:::

----
#### SPINESETPOS, SPINEMOVE

**`int SPINESETPOS int spineID, int posX, int posY`**

**`int SPINEMOVE int spineID, int offsetX, int offsetY`**

使用方法は [**`SPRITESETPOS`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITESETPOS.20str.20spriteName.2C.20int.20posx.2C.20int.20posy)、[**`SPRITEMOVE`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITEMOVE.20str.20spriteName.2C.20int.20movex.2C.20int.20movey) 指令と類似しており、指定されたSpineアニメーションの描画位置を設定またはオフセットするために使用します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int posX**
  - X描画位置を指定します。
- **int posY**
  - Y描画位置を指定します。
- **int offsetX**
  - X描画位置のオフセット量を指定します。
- **int offsetY**
  - Y描画位置のオフセット量を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### SPINESETSCALE

**`int SPINESETSCALE int spineID, int scale`**

**`int SPINESETSCALE int spineID, int scaleX, int scaleY`**

指定されたSpineアニメーションのスケーリング比率を設定します。

- この指令は以下の指令の出力結果に影響します：
  - [**`SPINESRCX, SPINESRCY`**](#spinesrcx-spinesrcy)
  - [**`SPINEWIDTH, SPINEHEIGHT`**](#spinewidth-spineheight)

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int scale**
  - 全体のスケーリング量を指定します。`100` を入力すると `100%` になります。
- **int scaleX**
  - Xスケーリング量を指定します。`100` を入力すると `100%` になります。
- **int scaleY**
  - Yスケーリング量を指定します。`100` を入力すると `100%` になります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### SPINEHASANIM, SPINEHASSKIN

**`int SPINEHASANIM int spineID, str animName`**

**`int SPINEHASSKIN int spineID, str skinName`**

指定されたSpineアニメーションに、指定されたアニメーションまたはスキンが存在するかどうかをチェックします。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **str animName**
  - アニメーション名を指定します。名前は大文字小文字を区別しません。
- **str skinName**
  - スキン名を指定します。名前は大文字小文字を区別しません。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定されたアニメーションまたはスキンが存在するかどうかを示します。存在する場合は `非0` を返します。
:::

----
#### SPINESETANIM

**`int SPINESETANIM int spineID, int trackIndex, str animName(, int isLoop = 0)`**

指定されたSpineアニメーションに、指定されたアニメーションを設定します。アニメーション名が空の場合、指定されたトラック番号内の既存のアニメーションがクリアされます。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int trackIndex**
  - アニメーションのトラック番号を指定します。
- **str animName**
  - アニメーション名を指定します。名前は大文字小文字を区別しません。アニメーション名が空の場合、指定されたトラック番号内の既存のアニメーションがクリアされます。
- **int isLoop = 0**
  - アニメーションがループするかどうかを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - アニメーションの設定が成功したかどうかを示します。成功した設定、または正常なクリアの場合は `非0` を返します。Spineアニメーションが作成されていない、指定されたアニメーションが存在しない場合は `0` を返します。
:::

----
#### SPINEADDANIM

**`int SPINEADDANIM int spineID, int trackIndex, str animName(, int isLoop = 0, int delay = 1000)`**

指定されたSpineアニメーションに、指定されたアニメーションを追加します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int trackIndex**
  - アニメーションのトラック番号を指定します。
- **str animName**
  - アニメーション名を指定します。名前は大文字小文字を区別しません。
- **int isLoop = 0**
  - アニメーションがループするかどうかを指定します。
- **int delay = 1000**
  - アニメーションの再生遅延をミリ秒単位で指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - アニメーションの追加が成功したかどうかを示します。成功時は `非0` を返します。Spineアニメーションが作成されていない、指定されたアニメーションが存在しない場合は `0` を返します。
:::

----
#### SPINESETSKIN

**`int SPINESETSKIN int spineID, str skinName`**

指定されたSpineアニメーションに、指定されたスキンを設定します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **str skinName**
  - スキン名を指定します。名前は大文字小文字を区別しません。
:::

:::tip[戻り値]
- **RESULT:0**
  - スキンの設定が成功したかどうかを示します。成功時は `非0` を返します。Spineアニメーションが作成されていない、指定されたスキンが存在しない場合は `0` を返します。
:::

----
#### SPINESETTIME, SPINEUPDATETIME

**`int SPINESETTIME int spineID, int millsec`**

**`int SPINEUPDATETIME int spineID, int millsec`**

指定されたSpineアニメーションに、指定された再生時間を設定または進行させます。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int millsec**
  - 再生時間をミリ秒単位で指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### SPINETIMESCALE

**`int SPINETIMESCALE int spineID, int timeScale`**

指定されたSpineアニメーションに、指定された時間倍率を設定します。この属性はSpineアニメーションの再生速度を制御するために使用されます。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int timeScale**
  - 時間倍率を指定します。`100` を入力すると `100%` になります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### SPINEANIMLIST, SPINESKINLIST

**`int SPINEANIMLIST int spineID, str Array_List_HashList`**

**`int SPINESKINLIST int spineID, str Array_List_HashList`**

指定されたSpineアニメーションのアニメーションリストまたはスキンリストを取得します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **str Array_List_HashList**
  - アニメーションリストまたはスキンリストを受け取るための文字列型参照可能な配列、リスト、ハッシュリストを指定します。
    - リスト、ハッシュリストの場合：変数内の既存の内容はクリアされ、新しい内容で埋められます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 取得されたアニメーションまたはスキンの数を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### CBGSETSPINE

**`int CBGSETSPINE int spineID, int x, int y, int zdepth`**

使用方法は [**`CBGSETG`**](https://osdn.net/projects/emuera/wiki/excom#h5-CBGSETG.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20zdepth) 指令と類似しており、指定されたSpineアニメーションをクライアントの背景に表示します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int x**
  - X位置を指定します。
- **int y**
  - Y位置を指定します。
- **int zdepth**
  - Z軸深度を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功したかどうかを示します。成功時は `非0` を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
### オーディオ関連 {#AudioRelated}

----
#### AUDIOCREATE

**`int AUDIOCREATE str audioName, str srcAudio(, int volume, any startTime, any duration)`**

既存の `srcAudio` に基づいて、新しいAudioを作成します。

`startTime` と `duration` を指定する際は、元のAudioが参照するオーディオファイルの総再生時間を基準にします。

`startTime` と `duration` には `TimeSpan` または `ms(ミリ秒)` を入力できます。`TimeSpan` の書式については、[**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) ドキュメントの例のセクションを参照してください。

:::tip[パラメータ]
- **str audioName**
  - 新しいAudioの名前を指定します。
- **str srcAudio**
  - 参照元のAudio名を指定します。
- **int volume**
  - 新しいAudioの再生音量を指定します。省略可 `(元のAudioのデフォルト音量)`。
- **any startTime**
  - 新しいAudioの開始時間を指定します。省略可 `(元のAudioの開始時間)`。
- **any duration**
  - 新しいAudioの再生時間を指定します。省略可 `(元のAudioの再生時間)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - Audioの作成が成功したかどうかを示します。成功時は `非0` を返します。Audio名が既に存在する、元のAudioが存在しない場合は `0` を返します。
:::

:::note[使用例]
```
AUDIOCREATE "New", "Old", 80			; 新しいAudio“New”を作成、音量は80
AUDIOCREATE "New", "Old", , "00:01:10", "10000"	; 新しいAudio“New”を作成、開始時間は1分10秒、再生時間は10000ミリ秒
```
:::

----
#### AUDIOCREATEFROMFILE

**`int AUDIOCREATEFROMFILE str audioName, str filePath(, int volume, any startTime, any duration)`**

指定された `filePath` オーディオファイルに基づいて、新しいAudioを作成します。

`startTime` と `duration` を指定する際は、オーディオファイルの総再生時間を基準にします。

`startTime` と `duration` パラメータは `TimeSpan` または `ms(ミリ秒)` 値を受け入れます。`TimeSpan` の書式については、[**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) ドキュメントの例のセクションを参照してください。

:::tip[パラメータ]
- **str audioName**
  - 新しいAudioの名前を指定します。
- **str filePath**
  - 参照するオーディオファイルの相対パスを指定します。このパスはメインディレクトリから始まることを保証する必要があります。
- **int volume**
  - 新しいAudioの再生音量を指定します。省略可 `(100)`。
- **any startTime**
  - 新しいAudioの開始時間を指定します。省略可 `(0)`。
- **any duration**
  - 新しいAudioの再生時間を指定します。省略可 `(オーディオファイルの総再生時間)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - Audioの作成が成功したかどうかを示します。成功時は `非0` を返します。Audio名が既に存在する、オーディオファイルが存在しない場合は `0` を返します。
:::

:::note[使用例]
```
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", 80			; 新しいAudio“New”を作成、音量は80
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", , "00:01:10"	; 新しいAudio“New”を作成、開始時間は1分10秒
```
:::

----
#### AUDIOCREATED

**`int AUDIOCREATED str audioName`**

指定されたAudioが作成されているかどうかをチェックします。

:::tip[パラメータ]
- **str audioName**
  - Audioの名前を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Audioが作成されているかどうかを示します。Audioが存在する場合は `非0` を返します。
:::

----
#### AUDIOVOLUME

**`int AUDIOVOLUME str audioName`**

指定されたAudioの音量を取得します。

:::tip[パラメータ]
- **str audioName**
  - Audioの名前を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Audioの音量を返します。Audioが存在しない場合は `0` を返します。
:::

----
#### AUDIOSTARTTIME

**`int AUDIOSTARTTIME str audioName`**

指定されたAudioの再生開始時間を `ms(ミリ秒)` 単位で取得します。

:::tip[パラメータ]
- **str audioName**
  - Audioの名前を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Audioの開始時間を返します。Audioが存在しない場合は `0` を返します。
:::

----
#### AUDIODURATION

**`int AUDIODURATION str audioName`**

指定されたAudioの再生持続時間を `ms(ミリ秒)` 単位で取得します。

:::tip[パラメータ]
- **str audioName**
  - Audioの名前を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Audioの持続時間を返します。Audioが存在しない場合は `0` を返します。
:::

----
#### AUDIODISPOSE

**`int AUDIODISPOSE str audioName`**

指定された一時Audioを削除します。Audioが占有するメモリは再生終了後に解放されます。実行時に作成された一時Audioのみが削除可能です。

:::tip[パラメータ]
- **str audioName**
  - 削除するAudioの名前を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Audioの削除が成功したかどうかを示します。成功時は `非0` を返します。Audioが存在しない、指定されたAudioが一時Audioでない場合は `0` を返します。
:::

----
#### AUDIODISPOSEALL

**`void AUDIODISPOSEALL`**

実行時に作成されたすべての一時Audioを削除します。Audioが占有するメモリは再生終了後に解放されます。組み込みAudioは影響を受けません。

----
#### CURRENTBGM

**`str CURRENTBGM`**

現在再生中の背景音楽名を取得します。

:::tip[パラメータ]
- なし
:::

:::tip[戻り値]
- **RESULTS:0**
  - 現在再生中の背景音楽名を返します。何も再生されていない場合は `空文字列` を返します。
:::

----
#### PAUSEBGM

**`void PAUSEBGM (int fadeOut = 0)`**

現在再生中の背景音楽を一時停止します。

:::tip[パラメータ]
- **int fadeOut = 0**
  - フェードアウト効果の持続時間をミリ秒単位で指定します。入力値が `省略` または `0以下` の場合は効果なし、最大値は `10000` です。
:::

----
### モジュール関連 {#ModuleRelated}

----
#### MODULELIST

**`int MODULELIST str Array_List_HashList`**

ロード済みのモジュールIDリストを取得します。

:::tip[パラメータ]
- **str Array_List_HashList**
  - モジュールIDリストを受け取るための文字列型参照可能な配列、リスト、ハッシュリストを指定します。
    - リスト、ハッシュリストの場合：変数内の既存の内容はクリアされ、新しい内容で埋められます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 取得されたモジュールIDの数を返します。  
    取得される数は配列の長さやハッシュリストの特性によって影響を受ける場合があります。
:::

----
#### MODULEPATH

**`str MODULEPATH str modID`**

指定されたロード済みモジュールのフォルダ相対パスを取得します。

:::tip[パラメータ]
- **str modID**
  - フォルダパスを取得するモジュールIDを指定します。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 取得されたフォルダ相対パスを返します。モジュールIDが存在しない、またはロードされていない場合は `空文字列` を返します。
:::

:::note[使用例]
```
PRINTSL MODULEPATH("MyMod")			; “mod/MyMod v1.0/”を表示
```
:::

----
#### GETRESOURCEEXT

**`int GETRESOURCEEXT str Array_List_HashList(, int option = 1P0 | 1P1)`**

すべてのランチャーでサポートされている画像、オーディオリソースファイルの拡張子を取得します。拡張子には `.` が含まれ、すべて小文字です。

:::tip[パラメータ]
- **str Array_List_HashList**
  - ファイル拡張子を受け取るための文字列型参照可能な配列、リスト、ハッシュリストを指定します。
    - リスト、ハッシュリストの場合：変数内の既存の内容はクリアされ、新しい内容で埋められます。
- **int option = 1P0 | 1P1**
  - 必要なリソースタイプを指定します。`1P0` = 画像リソース、`1P1` = オーディオリソース。省略可 `(1P0 | 1P1)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 取得された拡張子の数を返します。  
    取得される数は配列の長さやハッシュリストの特性によって影響を受ける場合があります。
:::

:::note[使用例]
```
GETRESOURCEEXT LOCALS, 1P0
PRINTS "画像拡張子:" 
FOR LOCAL, 0, RESULT
	PRINTS " " + LOCALS:LOCAL
NEXT
PRINTL

GETRESOURCEEXT LOCALS, 1P1
PRINTS "音声拡張子:" 
FOR LOCAL, 0, RESULT
	PRINTS " " + LOCALS:LOCAL
NEXT
PRINTW

; 出力結果
; 画像拡張子: .bmp .jpg .jpeg .png .webp .tiff .exif .gif
; 音声拡張子: .mp3 .mpeg3 .wav .wave .flac .fla .aiff .aif .aifc .aac .adt .adts .m2ts .mp2 .3g2 .3gp2 .3gp .3gpp .m4a .m4v .mp4v .mp4 .mov .asf .wm .wmv .wma .mp1 .avi .ac3 .ec3 .ogg
```
:::

----
#### TEXT

**`str TEXT anyParams keyName`**

指定されたキー名に基づいて多言語テキストを取得します。詳細な使用方法は [**`多言語機能`**](/#Multilingual) セクションを参照してください。

:::tip[パラメータ]
- **anyParams keyName**
  - 多言語テキストのキー名を指定します。入力されるキー名は大文字小文字を区別する必要はありません。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 指定された多言語テキストを返します。キー名が存在しない、パスエラーの場合は `空文字列` を返します。
:::

:::note[使用例]
```
LOCALS '= TEXT("START_GAME")
PRINTSL TEXT("ITEM")
PRINTSL TEXT("ITEM", "APPLE", "DESC")
```
:::

----
#### TEXTLIST

**`int TEXTLIST str Array_List_HashList, anyParams keyName`**

指定されたキー名に基づいて多言語テキストリストを取得します。詳細な使用方法は [**`多言語機能`**](/#Multilingual) セクションを参照してください。

:::tip[パラメータ]
- **str Array_List_HashList**
  - テキストリストを受け取るための文字列型参照可能な配列、リスト、ハッシュリストを指定します。
    - リスト、ハッシュリストの場合：変数内の既存の内容はクリアされ、新しい内容で埋められます。
- **anyParams keyName**
  - 多言語テキストのキー名を指定します。入力されるキー名は大文字小文字を区別する必要はありません。
:::

:::tip[戻り値]
- **RESULT:0**
  - 取得されたテキストリストの要素数を返します。キー名が存在しない、パスエラーの場合は `0` を返します。  
    取得される要素数は配列の長さやハッシュリストの特性によって影響を受ける場合があります。
:::

:::note[使用例]
```
TEXTLIST(LOCALS, "ITEM", "BANANA", "DESC")
FOR LOCAL, 0, RESULT
  PRINTSL LOCALS:LOCAL
NEXT
```
:::

----
#### LANGUAGELIST

**`int LANGUAGELIST str Array_List_HashList`**

ロード済みの多言語IDリストを取得します。取得されるIDは自動的に `ハイフン(-)` が `アンダースコア(_)` に置き換えられます。

:::tip[パラメータ]
- **str Array_List_HashList**
  - 多言語IDリストを受け取るための文字列型参照可能な配列、リスト、ハッシュリストを指定します。
    - リスト、ハッシュリストの場合：変数内の既存の内容はクリアされ、新しい内容で埋められます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 取得された多言語IDの数を返します。  
    取得されるIDの数は配列の長さやハッシュリストの特性によって影響を受ける場合があります。
:::

----
### MAPコレクション関連 {#MapCollectionRelated}

----
#### MAP_COPY

**`int MAP_COPY str srcMap, str destMap`**

指定されたソースMapのすべての要素をターゲットMapにコピーします。

:::tip[パラメータ]
- **str srcMap**
  - ソースMapを指定します。
- **str destMap**
  - ターゲットMapを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - ターゲットMapの要素数を返します。ソースMapまたはターゲットMapが見つからない場合は `(-1)` を返します。
:::

----
### 制御文 {#ControlStatement}

----
#### FOREACH-NEXTF

**`FOREACH-NEXTF same valueVar, any Collection(, VALUE)`**

**`FOREACH-NEXTF sameAsKey keyVar, any Dict, KEY`**

**`FOREACH-NEXTF sameAsDictKey dictKeyVar, any DictCollection, DICTKEY`**

**`FOREACH-NEXTF sameAsKey keyVar, same valueVar, any Dict`**

使用方法は [**`FOR-NEXT`**](https://osdn.net/projects/emuera/wiki/excom#h5-FOR.20.3C.E6.95.B0.E5.80.A4.E5.9E.8B.E5.A4.89.E6.95.B0.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E.7B.2C.20.3C.E6.95.B0.E5.BC.8F.3E.7D) 制御文と類似しており、指定されたコレクション内のすべての要素を走査するために使用します。

この制御文の列挙子パラメータは、関数とともにスタックに出入りします。

:::tip[パラメータ]
- **sameAsDictKey dictKeyVar**
  - 主キー名を受け取る変数を指定します。変数の値の型は辞書コレクションの主キーの型と一致している必要があります。
- **sameAsKey keyVar**
  - キー名を受け取る変数を指定します。変数の値の型は辞書のキーの型と一致している必要があります。
- **same valueVar**
  - 値を受け取る変数を指定します。変数の値の型はコレクションの値の型と一致している必要があります。
- **any Collection**
  - 走査する任意の配列、リスト、ハッシュリスト、辞書などのコレクションを指定します。
- **any Dict**
  - 走査する任意の辞書を指定します。
- **any DictCollection**
  - 走査する任意の辞書コレクションを指定します。
- **DICTKEY**
  - 辞書コレクションの主キー要素を走査することを指定します。省略不可。
- **KEY**
  - 辞書のキー要素を走査することを指定します。省略不可。
- **VALUE**
  - コレクションの値要素を走査することを指定します。省略可。
:::

:::note[使用例]
```
#DICTS_DICT_SI CREATURE_DICT

CREATURE_DICT:"動物":"🐶" = 11
CREATURE_DICT:"動物":"🐱" = 22
CREATURE_DICT:"植物":"🌳" = 33
CREATURE_DICT:"植物":"🌼" = 44

FOREACH LOCAL, CREATURE_DICT:"動物"
	PRINTFORM {LOCAL},
NEXTF
PRINTL
; “11,22,”を表示

FOREACH LOCALS, CREATURE_DICT:"動物", KEY
	PRINTFORM %LOCALS%,
NEXTF
PRINTL
; “🐶,🐱,”を表示

FOREACH LOCALS, CREATURE_DICT, DICTKEY
	PRINTFORM %LOCALS%,
NEXTF
PRINTL
; “動物,植物,”を表示

FOREACH LOCALS, LOCAL, CREATURE_DICT:"植物"
	PRINTFORM %LOCALS%-{LOCAL},
NEXTF
PRINTL
; “🌳-33,🌼-44,”を表示
```
:::

----
### 変数キーワード {#VariableKeyword}

----
#### RESIZE

このキーワードは、サイズを再設定する必要があるユーザー定義の配列変数をマークするために使用されます。例： `#DIM` や `#DICT_DIM` など。

このキーワードは、**`CONST`** 、**`REF`** 、**`SAVEDATA`**、**`CHARADATA`** キーワードと同時に宣言することはできません。

**`LOCAL`** と **`LOCALS`** 配列変数は既にこのキーワードを持っています。

----
#### HARDCHECK

このキーワードは、辞書変数がユーザー入力の主キーと第2キーに対して厳密なチェックを行うかどうかを制御するために使用されます。

- このキーワードが宣言されていない場合、存在しない主キーまたは第2キーに対して値を取得すると `0` または `空文字列` が返されます。存在しない主キーに対して値を割り当てると、その主キーが自動的に追加されて割り当てが成功します。
- このキーワードが宣言されている場合、存在しない主キーまたは第2キーに対して値を取得するとエラーになります。存在しない主キーに対して値を割り当てるとエラーになります。

このキーワードは、辞書変数と辞書コレクション変数に使用できます。例： `#DICT_II` 、`#DICT_DIM` や `#DICT_DICT_SS` など。

このキーワードは、**`REF`** キーワードと同時に宣言することはできません。
