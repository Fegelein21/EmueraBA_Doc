---
sidebar_position: 3
sidebar_label: 新規コマンド
---

# 新規コマンド {#NewCom}

### テキスト処理関連 {#TextProcessRelated}

----
#### CHARATUW

**`str CHARATUW str text, int position`**

[**`CHARATU`**](https://osdn.net/projects/emuera/wiki/excom#h5-CHARATU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.96.87.E5.AD.97.E4.BD.8D.E7.BD.AE.3E)コマンドと同様の使用方法で、テキスト内の指定位置の文字を取得します。

このコマンドは複雑な絵文字を1文字として扱います。

:::tip[パラメータ]
- **str text**
  - 対象テキスト。
- **int position**
  - 文字位置。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 指定位置の文字列を返します。
:::

:::note[使用例]
```
PRINTSL CHARATUW("A👨‍👩‍👧‍👦A", 1)			;「👨‍👩‍👧‍👦」を表示
```
:::

----
#### FINDEMOJI

**`int FINDEMOJI str text, strArray array`**

テキスト内の全ての絵文字を検索し、結果を`array`配列に出力します。

:::tip[パラメータ]
- **str text**
  - 対象テキスト。
- **strArray array**
  - 絵文字結果を受け取る文字列型配列。
:::

:::tip[戻り値]
- **RESULT:0**
  - 検出した絵文字の数を返します。  
    受け取り配列の次元長によって結果数が制限される場合があります。
:::

:::note[使用例]
```
PRINTVL FINDEMOJI("A👨‍👩‍👧‍👦AA😀A", LOCALS)		;「2」を表示、LOCALS:0 ="👨‍👩‍👧‍👦"、LOCALS:1 ="😀"
```
:::

----
#### FLOATTOSTR

**`str FLOATTOSTR int value, int div(, str format = "")`**

浮動小数点数のフォーマット処理を行います。

:::tip[パラメータ]
- **int value**
  - 被除数。
- **int div**
  - 除数。`0`指定時はエラーになります。
- **str format = ""**
  - 文字列フォーマット。
:::

:::tip[戻り値]
- **RESULTS:0**
  - フォーマット結果の文字列。
:::

:::note[使用例]
```
PRINTSL FLOATTOSTR(13, 23)			;「0.5652174」を表示
PRINTSL FLOATTOSTR(13, 23, "0.00")		;「0.57」を表示
```
:::

----
#### REPLACEBYARRAY

**`str REPLACEBYARRAY str source, str match, strArray1D replaceArray`**

[**`REPLACE`**](modify_com#replace)コマンドから分離された新コマンドで、`replaceArray`配列の文字列を順番に置換します。

:::tip[パラメータ]
- **str text**
  - 処理対象テキスト。
- **str match**
  - 置換対象テキスト。
- **strArray1D replaceArray**
  - 置換用文字列配列。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 置換結果の文字列。
:::

:::note[使用例]
```
LOCALS '= "111", "222", "333"
PRINTSL REPLACEBYARRAY("A A-A", "A", LOCALS)		; 「111 222-333」を表示
```
:::

----
#### STRAPPEND

**`str STRAPPEND (str delimiter = ",", anyParams value)`**

[**`string.join`**](https://learn.microsoft.com/dotnet/api/system.string.join?view=netframework-4.8#system-string-join(system-string-system-string()))と同様の文字列結合機能を実装。

:::tip[パラメータ]
- **str delimiter = ","**
  - 区切り文字。省略可`(",")`。
- **anyParams value**
  - 結合する値（複数可）。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 結合結果の文字列。
:::

:::note[使用例]
```
PRINTSL STRAPPEND(, "aaa", 222, 33)		;「aaa,222,33」を表示
PRINTSL STRAPPEND("__", "aaa", 222, 33)		;「aaa__222__33」を表示
```
:::

----
#### STRFINDUW

**`int STRFINDUW str text, str word(, int start = 0)`**

[**`STRFINDU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRFINDU.20.3C.E6.A4.9C.E7.B4.A2.E5.AF.BE.E8.B1.A1.3E.2C.20.3C.E6.A4.9C.E7.B4.A2.E3.81.99.E3.82.8B.E6.96.87.E5.AD.97.E5.88.97.3E.7B.2C.20.3C.E9.96.8B.E5.A7.8B.E3.82.A4.E3.83.B3.E3.83.87.E3.83.83.E3.82.AF.E3.82.B9.3E.7D)と同様の使用方法で、テキスト内の文字列を検索しインデックス位置を取得します。

このコマンドは複雑な絵文字を1文字として扱います。

:::tip[パラメータ]
- **str text**
  - 対象テキスト。
- **str word**
  - 検索文字列。
- **int start = 0**
  - 検索開始位置。省略可`(0)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 検索位置のインデックス。未検出時は`-1`。
:::

:::note[使用例]
```
PRINTVL STRFINDUW("啊😀A啊B", "A")		;「2」を表示
```
:::

----
#### STRFINDLAST シリーズ {#STRFINDLAST_Series}

**`int STRFINDLAST str text, str word(, int start = lastIndex)`**

**`int STRFINDLASTU str text, str word(, int start = lastIndex)`**

**`int STRFINDLASTUW str text, str word(, int start = lastIndex)`**

[**`STRFIND`**](modify_com#strfind)と同様の使用方法で、逆順検索を行いインデックス位置を取得します。

**`STRFINDLAST`**は絵文字の表示幅を計算して文字長を判定します。

**`STRFINDLASTUW`**は複雑な絵文字を1文字として扱います。

:::tip[パラメータ]
- **str text**
  - 対象テキスト。
- **str word**
  - 検索文字列。
- **int start = lastIndex**
  - 検索開始位置。省略可`(最終インデックス)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 検索位置のインデックス。未検出時は`-1`。
:::

:::note[使用例]
```
PRINTVL STRFINDLAST("啊A啊BA", "B")		;「5」を表示
PRINTVL STRFINDLAST("啊A啊BA", "A", 2)		;「2」を表示
PRINTVL STRFINDLAST("啊A啊BA", "A", 1)		;「-1」を表示
PRINTVL STRFINDLASTU("啊A啊BA", "B")		;「3」を表示
PRINTVL STRFINDLASTUW("😀A啊B😀A", "B")	;「3」を表示
```
:::

----
#### STRFORMAT

**`str STRFORMAT str formatText(, anyParams value)`**

[**`string.format`**](https://learn.microsoft.com/dotnet/api/system.string.format?view=netframework-4.8#Starting)と同様のフォーマット処理を行います。

:::tip[パラメータ]
- **str formatText**
  - フォーマット文字列。
- **anyParams value**
  - フォーマット用値（複数可）。
:::

:::tip[戻り値]
- **RESULTS:0**
  - フォーマット結果の文字列。失敗時は元のテキストを返します。
:::

:::note[使用例]
```
PRINTSL STRFORMAT("aaa_{0}__{1}", 222, "33")	;「aaa_222__33」を表示
```
:::

----
#### STRLENSUW

**`int STRLENSUW str text`**

[**`STRLENSU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRLENSU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E)と同様にUnicodeエンコーディングで文字数を取得します。

このコマンドは複雑な絵文字を1文字として扱います。

:::tip[パラメータ]
- **str text**
  - 対象テキスト。
:::

:::tip[戻り値]
- **RESULT:0**
  - 文字数。
:::

:::note[使用例]
```
PRINTVL STRLENSUW("A👪A")		;「3」を表示
```
:::

----
#### STRREMOVE シリーズ {#STRREMOVE_Series}

**`str STRREMOVE str text(, int start = 0, int count = totalLength)`**

**`str STRREMOVEU str text(, int start = 0, int count = totalLength)`**

**`str STRREMOVEUW str text(, int start = 0, int count = totalLength)`**

[**`string.remove`**](https://learn.microsoft.com/dotnet/api/system.string.remove?view=netframework-4.8)と同様に指定範囲のテキストを削除します。

**`STRREMOVE`**は絵文字の表示幅を計算して文字長を判定します。  
選択位置が長い文字の中間にある場合、その文字の開始位置まで後退します。つまり、開始位置の文字は含まれ、終了位置の文字は無視されます。

**`STRREMOVEUW`**は複雑な絵文字を1文字として扱います。

:::tip[パラメータ]
- **str text**
  - 処理対象テキスト。
- **int start = 0**
  - 削除開始位置。省略可`(0)`。
- **int count = totalLength**
  - 削除文字数。省略可`(テキスト全長)`。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 処理結果の文字列。
:::

:::note[使用例]
```
PRINTSL STRREMOVE("１２３４５６", 2, 3)			;「１３４５６」を表示
PRINTSL STRREMOVEU("１２３４５６", 3)			;「１２３」を表示
PRINTSL STRREMOVEU("１２３４５６", 0, 3)			;「４５６」を表示
PRINTSL STRREMOVEUW("１２３４👨‍👩‍👧‍👦５６", 2, 3)		;「１２５６」を表示
```
:::

----
#### STRSPLIT

**`int STRSPLIT str text, strArray array(, str delimiter = ",")`**

[**`SPLIT`**](modify_com#split)と同様の使用方法で、指定文字列でテキストを分割します。

:::tip[パラメータ]
- **str text**
  - 分割対象テキスト。
- **strArray array**
  - 分割結果を格納する配列。
- **str delimiter = ","**
  - 区切り文字。省略可`(",")`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 分割後の要素数。
:::

:::note[使用例]
```
LOCAL = STRSPLIT("111,AAA,22", LOCALS)			;LOCALに3を代入
PRINTSL LOCALS:0					;「111」を表示
LOCAL = STRSPLIT("111,AAA__22", LOCALS, "__")		;LOCALに2を代入
PRINTSL LOCALS:1					;「22」を表示
```
:::

----
#### STRTRIM

**`str STRTRIM str text(, str trimChars, int trimDirection = 0)`**

[**`string.trim`**](https://learn.microsoft.com/dotnet/api/system.string.trim?view=netframework-4.8) を実装し、文字列の前後から指定された文字を削除します。

:::tip[引数]
- **str text**
  - 処理対象の文字列。
- **str trimChars**
  - 削除する文字。省略時は空白文字（スペース、タブなど）が削除されます。
- **int trimDirection = 0**
  - 削除方向: `1` = 先頭、`2` = 末尾、それ以外 = 両方。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 処理後の文字列。
:::

:::note[使用例]
```
PRINTSL STRTRIM(" 111 AAA  22  ")            ; 「111 AAA  22」を表示。
PRINTSL STRTRIM(" 111 AAA  22  ", " 12")     ; 「AAA」を表示。
PRINTSL STRTRIM(" 111 AAA  22  ", " 12", 1)  ; 「AAA  22  」を表示。
```
:::

----
#### SUBSTRINGUW

**`str SUBSTRINGUW str text(, int start = 0, int length = totalLength)`**

[**`SUBSTRINGU`**](https://osdn.net/projects/emuera/wiki/excom#h5-SUBSTRINGU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E) と同様に、位置と長さで部分文字列を抽出します。

複雑な絵文字を1文字として扱います。

:::tip[引数]
- **str text**
  - 対象の文字列。
- **int start = 0**
  - 開始位置（省略時: `0`）。
- **int length = totalLength**
  - 抽出する長さ。負の値は残り全体を抽出。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 抽出された部分文字列。
:::

:::note[使用例]
```
PRINTSL SUBSTRINGUW("A👪BAB👪A", 0, 4)  ; 「A👪BA」を表示。
PRINTSL SUBSTRINGUW("A👪BAB👪A", 5)    ; 「👪A」を表示。
```
:::

----
#### TRYTOINT

**`int TRYTOINT str text`**

[**`TOINT`**](https://osdn.net/projects/emuera/wiki/excom#h5-TOINT.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E) と同様ですが、`ISNUMERIC + TOINT` のような冗長なチェックを回避します。

:::tip[引数]
- **str text**
  - 変換対象の文字列。
:::

:::tip[戻り値]
- **RESULT:0**
  - 成功時は `非0`。
- **RESULT:1**
  - 変換結果。失敗時は `0`。
:::

:::note[使用例]
```
LOCAL = TRYTOINT("IO") ? RESULT:1 # 10
```
:::

----
### 変数・配列関連 {#VarAndArrayRelated}

---
#### ARRAYBIT

**`int ARRAYBIT anyArray array, str keyName(, int dimension = lastDim, str delimiter = ",")`**

`keyName` で指定された複数のキー名に対応するインデックス値を `array` から取得し、それらの値をビットOR演算で重ね合わせます。

`dimension` を `0` に設定すると、配列内の要素を直接インデックス値として取得できます。

指定されたキーが見つからない場合や、インデックス値が `0–63` の範囲外の場合、エラーが発生します。

この機能は実験的で、システムが適切なコードを定数に最適化する特性を利用してプログラムの実行効率を向上させることを目的としています。

:::tip[パラメータ]
- **anyArray array**
  - 任意の配列を指定します。
- **str keyName**
  - インデックス値を重ね合わせるキー名を指定します。
- **int dimension = lastDim**
  - キーが存在する配列の次元を指定します。省略時は最終次元が使用されます。`0` を指定すると、配列の要素を直接インデックス値として取得します。
- **str delimiter = ","**
  - キー名を分割する区切り文字を指定します。省略可能 `(",")`。
:::

:::tip[戻り値]
- **RESULT:0**
  - すべてのインデックス値をビットOR演算した結果を返します。
:::

:::note[使用例]
```erh title="EXAMPLE_ARRAY.erh ファイル"
#DIMS EXAMPLE_ARRAY, 20 = "VALUE_0", "VALUE_1", "VALUE_2", "VALUE_3"
```

```erd title="EXAMPLE_ARRAY.erd ファイル"
0,AAA
1,BBB
2,CCC
3,DDD
```

```erb title="erb ファイル"
LOCAL = ARRAYBIT(EXAMPLE_ARRAY, "AAA, BBB, DDD")	; LOCAL = 0B1011
; 以下のコードと同等:
LOCAL = 1 << GETNUM(EXAMPLE_ARRAY, "AAA")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "BBB")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "DDD")

LOCAL = ARRAYBIT(EXAMPLE_ARRAY, "VALUE_0, VALUE_2", 0)	; LOCAL = 0B0101
; 以下のコードと同等:
LOCAL = 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_0")
LOCAL |= 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_2")
```
:::

---
#### ARRAYRESIZE

**`void ARRAYRESIZE anyArray1D array, int size1D(, int keepData = 0)`**

**`void ARRAYRESIZE anyArray2D array, int size1D, int size2D(, int keepData = 0)`**

**`void ARRAYRESIZE anyArray3D array, int size1D, int size2D, int size3D(, int keepData = 0)`**

指定された配列のサイズを変更します。

`array` パラメータには、**`RESIZE`** キーワードが付与されたユーザー定義の配列変数のみ指定できます:

- **`RESIZE`** キーワードはユーザー定義の配列変数でのみ使用可能で、**`GLOBAL`**、**`STATIC`**、**`DYNAMIC`** キーワードと共存できます。
- `LOCAL` および `LOCALS` 配列変数には、デフォルトで `RESIZE` キーワードが含まれます。

配列の総長は `1,000,000` を超えてはいけません。  
指定されたサイズが現在の配列サイズと一致し、`keepData` が `非0` の場合、何も行われません。

静的配列は、[**`RESETDATA`**](https://osdn.net/projects/emuera/wiki/excom#h5-RESETDATA) で元のサイズにリセットされるまで変更された状態を維持します。  
動的配列は現在の関数スタック内でのみサイズが変更され、以降の関数スタックで作成される配列には影響しません。

:::tip[パラメータ]
- **anyArray1|2|3D array**
  - サイズを変更する配列を指定します。
- **int size1D**
  - 第1次元の長さを指定します。
- **int size2D**
  - 第2次元の長さを指定します。
- **int size3D**
  - 第3次元の長さを指定します。
- **int keepData = 0**
  - 元のデータを保持するかどうかを指定します。`非0` の場合、データが保持されます。
:::

:::note[使用例]
```
@TEST
#LOCALSIZE 1
#DIM DYNAMIC RESIZE DYNAMIC_ARRAY, 1, 1
#DIM STATIC_ARRAY, 1, 1, 1

ARRAYRESIZE LOCAL, 2		; TEST関数内のLOCAL配列のサイズを変更します。
ARRAYRESIZE DYNAMIC_ARRAY, 2, 2	; DYNAMIC_ARRAYのサイズを変更します。
CALL TEST_1(DYNAMIC_ARRAY, STATIC_ARRAY)

@TEST_1(REF_ARRAY1, REF_ARRAY2)
#DIM REF REF_ARRAY1, 0, 0
#DIM REF REF_ARRAY2, 0, 0, 0

ARRAYRESIZE REF_ARRAY1, 2, 2	; 参照先のDYNAMIC_ARRAYのサイズを変更します。
ARRAYRESIZE REF_ARRAY2, 2, 2, 2	; STATIC_ARRAYにRESIZEキーワードがないためエラーが発生します。
```
:::

---
#### ARRAYTIDY

**`int ARRAYTIDY anyArray array(, int start = 0, int end = lastDimLength, same emptyVal)`**

配列内の要素の隙間を詰め、連続した配列に整理します。

多次元配列の場合、最終次元のみが処理され、それ以前の次元のインデックスは手動で指定する必要があります。

:::tip[パラメータ]
- **anyArray array**
  - 整理する配列を指定します。
- **int start = 0**
  - 整理を開始するインデックスを指定します。
- **int end = lastDimLength**
  - 整理を終了するインデックス（含まない）を指定します。省略時は最終次元の長さが使用されます。
- **same emptyVal**
  - 空値として扱う値（例: `0` または空文字列）を指定します。型は配列の要素型と一致する必要があります。省略可能です。
:::

:::tip[戻り値]
- **RESULT:0**
  - 整理後の要素数を返します。
:::

---
#### ARRAYFIND, ARRAYFINDLAST

**`int ARRAYFIND anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int ARRAYFINDLAST anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

[**`FINDELEMENT, FINDLASTELEMENT`**](modify_com#findelement-findlastelement) と類似しており、指定された条件に一致する配列内の要素を検索します。

デフォルトでは、大文字と小文字を区別し、部分一致や正規表現を使用しません。これらの動作は `option` パラメータで調整できます。

多次元配列の場合、最終次元のみが処理され、それ以前の次元のインデックスは手動で指定する必要があります。

:::tip[パラメータ]
- **anyArray array**
  - 検索対象の配列を指定します。
- **same target**
  - 検索対象を指定します。型は配列の要素型と一致する必要があります。
- **int start = 0**
  - 検索を開始するインデックスを指定します。
- **int end = lastDimLength**
  - 検索を終了するインデックス（含まない）を指定します。省略時は最終次元の長さが使用されます。
- **int option = 0**
  - 検索オプションを指定します:
    - `1P0` = 部分一致
    - `1P1` = 大文字と小文字を区別しない
    - `1P2` = 反転一致
    - `1P3` = 正規表現
:::

:::tip[戻り値]
- **RESULT:0**
  - 最初に一致した要素のインデックスを返します。一致する要素がない場合は `-1` を返します。
:::

:::note[使用例]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P0 | 1P1)	; ARRAY:0 から ARRAY:7 で "AA" を含む要素（大文字小文字を区別しない）を検索します。
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P2)		; ARRAY:0 から ARRAY:7 で "AA" と等しくない要素を検索します。
PRINTVL ARRAYFINDLAST(ARRAY, "AA", 0, 8, 1P2)		; ARRAY:0 から ARRAY:7 を逆順で検索し、"AA" と等しくない要素を探します。
PRINTVL ARRAYFIND(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)	; ARRAY:0 から ARRAY:7 で "\\d+" に部分一致する要素を検索します。
PRINTVL ARRAYFIND(CARRAY_2D:TARGET:3:0, 22, 5)		; キャラクターTARGETの CARRAY_2D:3:5 から CARRAY_2D:3:9 で 22 と等しい要素を検索します。
```
:::

---
#### VARLENGTH

**`int VARLENGTH anyArray array(, int dimension)`**

[**`VARSIZE`**](modify_com#varsize) と類似しており、配列の各次元の長さを取得します。

`dimension` パラメータを省略すると、最終次元の長さを返します。負の値を指定すると、配列の総長を返します。

:::tip[パラメータ]
- **anyArray array**
  - 任意の配列を指定します。
- **int dimension**
  - 次元を指定します。省略時は最終次元の長さを返します。負の値を指定すると、配列の総長を返します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定された次元の長さを返します。
:::

---
### リスト関連 {#ListRelated}

---
#### LISTSIZE

**`int LISTSIZE anyList list`**

**`int LISTSIZE anyDict_anyList dictList`**

指定されたリストの要素数を取得します。

リスト型ディクショナリのリスト数を取得する場合は、[**`DICTITEMCOUNT`**](new_com#dictitemcount) を使用してください。

:::tip[パラメータ]
- **anyList list**
  - 任意のリストを指定します。
- **anyDict_anyList dictList**
  - 任意のリスト型ディクショナリを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - リストの要素数を返します。
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
  - 削除開始位置を指定します。省略可 `(0)`。
- **int count = listCount**
  - 削除する要素数を指定します。省略可 `(リストの要素数)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 常に `非0` を返します。
:::

----
#### LISTADD

**`int LISTADD anyList list, same value(, int index = listCount)`**

**`int LISTADD anyDict_anyList dictList, same value(, int index = listCount)`**

指定されたリストに要素を追加します。

:::tip[パラメータ]
- **anyList list**
  - 任意のリストを指定します。
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **same value**
  - 追加する要素を指定します。値の型は最初の引数の値の型と同じである必要があります。
- **int index = listCount**
  - 追加位置を指定します。省略可 `(リストの末尾)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 要素が追加されたインデックス位置を返します。
:::

----
#### LISTFIND

**`int LISTFIND anyList list, same value(, int start = 0, int count = listCount)`**

**`int LISTFIND anyDict_anyList dictList, same value(, int start = 0, int count = listCount)`**

指定されたリストで要素を検索します。

:::tip[パラメータ]
- **anyList list**
  - 任意のリストを指定します。
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **same value**
  - 検索する要素を指定します。値の型は最初の引数の値の型と同じである必要があります。
- **int start = 0**
  - 検索開始位置を指定します。省略可 `(0)`。
- **int count = listCount**
  - 検索する要素数を指定します。省略可 `(リストの要素数)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 見つかった要素のインデックス位置を返します。見つからない場合は `(-1)` を返します。
:::

----
#### LISTREMOVE

**`int LISTREMOVE anyList list, same value`**

**`int LISTREMOVE anyDict_anyList dictList, same value`**

指定されたリストから要素を削除します。

:::tip[パラメータ]
- **anyList list**
  - 任意のリストを指定します。
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **same value**
  - 削除する要素を指定します。値の型は最初の引数の値の型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 削除結果を返します。要素が見つかり削除された場合は `(非0)`、見つからない場合は `(0)` を返します。
:::

----
#### LISTREMOVEAT

**`int LISTREMOVEAT anyList list, int index`**

**`int LISTREMOVEAT anyDict_anyList dictList, int index`**

指定されたリストからインデックス位置の要素を削除します。

:::tip[パラメータ]
- **anyList list**
  - 任意のリストを指定します。
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **int index**
  - 削除する要素のインデックス位置を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 常に `(非0)` を返します。
:::

----
#### LISTCOPY

**`int LISTCOPY anyList srcList, sameArray destArray`**

**`int LISTCOPY anyList srcList, sameList destList`**

**`int LISTCOPY anyList srcList, sameHashList destHashList`**

**`int LISTCOPY anyList srcList, anyDict_sameList destDictList`**

**`int LISTCOPY anyList srcList, anyDict_sameHashList destDictHashList`**

**`int LISTCOPY anyDict_anyList srcDictList, sameArray destArray`**

**`int LISTCOPY anyDict_anyList srcDictList, sameList destList`**

**`int LISTCOPY anyDict_anyList srcDictList, sameHashList destHashList`**

**`int LISTCOPY anyDict_anyList srcDictList, anyDict_sameList destDictList`**

**`int LISTCOPY anyDict_anyList srcDictList, anyDict_sameHashList destDictHashList`**

指定されたソースリストの全要素を対象の配列またはリストにコピーします。

:::tip[パラメータ]
- **anyList srcList**
  - 任意のソースリストを指定します。
- **anyDict_anyList srcDictList**
  - 任意のソースリスト型辞書を指定します。
- **sameArray destArray**
  - 対象配列を指定します。値の型は最初の引数の値の型と同じである必要があります。
- **sameList destList**
  - 対象リストを指定します。値の型は最初の引数の値の型と同じである必要があります。
- **sameHashList destHashList**
  - 対象ハッシュリストを指定します。値の型は最初の引数の値の型と同じである必要があります。
- **anyDict_sameList destDictList**
  - 対象リスト型辞書を指定します。値の型は最初の引数の値の型と同じである必要があります。
- **anyDict_sameHashList destDictHashList**
  - 対象ハッシュリスト型辞書を指定します。値の型は最初の引数の値の型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 対象配列の場合はコピーに成功した要素数、対象リスト/リスト型辞書の場合はコピー後の要素総数を返します。
:::

----
### ハッシュリスト関連 {#HashListRelated}

----
#### HASHLISTSIZE

**`int HASHLISTSIZE anyHashList list`**

**`int HASHLISTSIZE anyDict_anyHashList dictList`**

指定されたハッシュリストの要素数を取得します。

ハッシュリスト型辞書のハッシュリスト数を取得するには [**`DICTITEMCOUNT`**](new_com#dictitemcount) 命令を使用してください。

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

指定されたハッシュリストの全要素をクリアします。

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

指定されたハッシュリストに値を追加します。

:::tip[パラメータ]
- **anyHashList list**
  - 任意のハッシュリストを指定します。
- **anyDict_anyHashList dictList**
  - 任意のハッシュリスト型辞書を指定します。
- **same value**
  - 追加する値を指定します。値の型は最初の引数の値の型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 追加結果を返します。値が追加された場合は `非0`、値が既に存在する場合は `0` を返します。
:::

----
#### HASHLISTHAS

**`int HASHLISTHAS anyHashList list, same value`**

**`int HASHLISTHAS anyDict_anyHashList dictList, same value`**

指定されたハッシュリストに値が存在するか確認します。

:::tip[パラメータ]
- **anyHashList list**
  - 任意のハッシュリストを指定します。
- **anyDict_anyHashList dictList**
  - 任意のハッシュリスト型辞書を指定します。
- **same value**
  - 検索する値を指定します。値の型は最初の引数の値の型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 存在する場合は `非0`、存在しない場合は `0` を返します。
:::

----
#### HASHLISTREMOVE

**`int HASHLISTREMOVE anyHashList list, same value`**

**`int HASHLISTREMOVE anyDict_anyHashList dictList, same value`**

指定されたハッシュリストから値を削除します。

:::tip[パラメータ]
- **anyHashList list**
  - 任意のハッシュリストを指定します。
- **anyDict_anyHashList dictList**
  - 任意のハッシュリスト型辞書を指定します。
- **same value**
  - 削除する値を指定します。値の型は最初の引数の値の型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 削除結果を返します。値が見つかり削除された場合は `非0`、見つからない場合は `0` を返します。
:::

----
#### HASHLISTCOPY

**`int HASHLISTCOPY anyHashList srcList, sameArray destArray`**

**`int HASHLISTCOPY anyHashList srcList, sameList destList`**

**`int HASHLISTCOPY anyHashList srcList, sameHashList destHashList`**

**`int HASHLISTCOPY anyHashList srcList, anyDict_sameList destDictList`**

**`int HASHLISTCOPY anyHashList srcList, anyDict_sameHashList destDictHashList`**

**`int HASHLISTCOPY anyDict_anyHashList srcDictList, sameArray destArray`**

**`int HASHLISTCOPY anyDict_anyHashList srcDictList, sameList destList`**

**`int HASHLISTCOPY anyDict_anyHashList srcDictList, sameHashList destHashList`**

**`int HASHLISTCOPY anyDict_anyHashList srcDictList, anyDict_sameList destDictList`**

**`int HASHLISTCOPY anyDict_anyHashList srcDictList, anyDict_sameHashList destDictHashList`**

指定されたソースハッシュリストの全要素を対象の配列またはリストにコピーします。

:::tip[パラメータ]
- **anyHashList srcList**
  - 任意のソースハッシュリストを指定します。
- **anyDict_anyHashList srcDictList**
  - 任意のソースハッシュリスト型辞書を指定します。
- **sameArray destArray**
  - 対象配列を指定します。値の型は最初の引数の値の型と同じである必要があります。
- **sameList destList**
  - 対象リストを指定します。値の型は最初の引数の値の型と同じである必要があります。
- **sameHashList destHashList**
  - 対象ハッシュリストを指定します。値の型は最初の引数の値の型と同じである必要があります。
- **anyDict_sameList destDictList**
  - 対象リスト型辞書を指定します。値の型は最初の引数の値の型と同じである必要があります。
- **anyDict_sameHashList destDictHashList**
  - 対象ハッシュリスト型辞書を指定します。値の型は最初の引数の値の型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 対象配列の場合はコピーに成功した要素数、対象リスト/リスト型辞書の場合はコピー後の要素総数を返します。
:::

----
### 辞書関連 {#DictRelated}

----
#### DICTSIZE

**`int DICTSIZE anyanyDict dict`**

**`int DICTSIZE anyDict_anyanyDict dictDict`**

指定された辞書の要素数を取得します。

辞書型辞書の辞書数を取得するには [**`DICTITEMCOUNT`**](new_com#dictitemcount) 命令を使用してください。

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

指定された辞書の全要素をクリアします。

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

指定された辞書にキーと値を追加します（キーが既存の場合は追加されません）。

:::tip[パラメータ]
- **anyanyDict dict**
  - 任意の辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **sameAsKey key**
  - キー名を指定します。キーの値の型は最初の引数のキーの型と同じである必要があります。
- **same value**
  - 値を指定します。値の型は最初の引数の値の型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 追加結果を返します。キーと値が追加された場合は `非0`、キーが既存の場合は `0` を返します。
:::

----
#### DICTHAS

**`int DICTHAS anyanyDict dict, sameAsKey key`**

**`int DICTHAS anyDict_anyanyDict dictDict, sameAsKey key`**

指定された辞書にキー名が存在するか確認します。

:::tip[パラメータ]
- **anyanyDict dict**
  - 任意の辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **sameAsKey key**
  - キー名を指定します。キーの値の型は最初の引数のキーの型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 存在する場合は `非0`、存在しない場合は `0` を返します。
:::

----
#### DICTREMOVE

**`int DICTREMOVE anyanyDict dict, sameAsKey key`**

**`int DICTREMOVE anyDict_anyanyDict dictDict, sameAsKey key`**

指定された辞書からキー値を削除します。

:::tip[パラメータ]
- **anyanyDict dict**
  - 任意の辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **sameAsKey key**
  - キー名を指定します。キーの値の型は最初の引数のキーの型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 削除結果を返します。キーが見つかり削除された場合は `非0`、見つからない場合は `0` を返します。
:::

----
#### DICTTRYGET

**`int DICTTRYGET anyanyDict dict, same outValue`**

**`int DICTTRYGET anyDict_anyanyDict dictDict, same outValue`**

指定された辞書からキー値を取得します（エラーを発生させません）。

:::tip[パラメータ]
- **anyanyDict dict**
  - 任意の辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **same outValue**
  - 値を取得する変数を指定します。変数の値の型は最初の引数の値の型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 取得結果を返します。キーが見つかった場合は `非0`（値は **outValue** に出力）、見つからない場合は `0` を返します。
:::

----
#### DICTGETKEYS

**`int DICTGETKEYS anyanyDict srcDict, sameAsKeyArray destArray`**

**`int DICTGETKEYS anyanyDict srcDict, sameAsKeyList destList`**

**`int DICTGETKEYS anyanyDict srcDict, sameAsKeyHashList destHashList`**

**`int DICTGETKEYS anyanyDict srcDict, anyDict_sameAsKeyList destDictList`**

**`int DICTGETKEYS anyanyDict srcDict, anyDict_sameAsKeyHashList destDictHashList`**

**`int DICTGETKEYS anyDict_anyanyDict srcDictDict, sameAsKeyArray destArray`**

**`int DICTGETKEYS anyDict_anyanyDict srcDictDict, sameAsKeyList destList`**

**`int DICTGETKEYS anyDict_anyanyDict srcDictDict, sameAsKeyHashList destHashList`**

**`int DICTGETKEYS anyDict_anyanyDict srcDictDict, anyDict_sameAsKeyList destDictList`**

**`int DICTGETKEYS anyDict_anyanyDict srcDictDict, anyDict_sameAsKeyHashList destDictHashList`**

指定されたソース辞書の全キー名を対象の配列またはリストにコピーします。

:::tip[パラメータ]
- **anyanyDict srcDict**
  - 任意のソース辞書を指定します。
- **anyDict_anyanyDict srcDictDict**
  - 任意のソース辞書型辞書を指定します。
- **sameAsKeyArray destArray**
  - 対象配列を指定します。値の型は最初の引数のキーの型と同じである必要があります。
- **sameAsKeyList destList**
  - 対象リストを指定します。値の型は最初の引数のキーの型と同じである必要があります。
- **sameAsKeyHashList destHashList**
  - 対象ハッシュリストを指定します。値の型は最初の引数のキーの型と同じである必要があります。
- **anyDict_sameAsKeyList destDictList**
  - 対象リスト型辞書を指定します。値の型は最初の引数のキーの型と同じである必要があります。
- **anyDict_sameAsKeyHashList destDictHashList**
  - 対象ハッシュリスト型辞書を指定します。値の型は最初の引数のキーの型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 対象配列の場合はコピーに成功した要素数、対象リスト/リスト型辞書の場合はコピー後の要素総数を返します。
:::

----
#### DICTGETVALUES

**`int DICTGETVALUES anyanyDict srcDict, sameArray destArray`**

**`int DICTGETVALUES anyanyDict srcDict, sameList destList`**

**`int DICTGETVALUES anyanyDict srcDict, sameHashList destHashList`**

**`int DICTGETVALUES anyanyDict srcDict, anyDict_sameList destDictList`**

**`int DICTGETVALUES anyanyDict srcDict, anyDict_sameHashList destDictHashList`**

**`int DICTGETVALUES anyDict_anyanyDict srcDictDict, sameArray destArray`**

**`int DICTGETVALUES anyDict_anyanyDict srcDictDict, sameList destList`**

**`int DICTGETVALUES anyDict_anyanyDict srcDictDict, sameHashList destHashList`**

**`int DICTGETVALUES anyDict_anyanyDict srcDictDict, anyDict_sameList destDictList`**

**`int DICTGETVALUES anyDict_anyanyDict srcDictDict, anyDict_sameHashList destDictHashList`**

指定されたソース辞書の全値を対象の配列またはリストにコピーします。

:::tip[パラメータ]
- **anyanyDict srcDict**
  - 任意のソース辞書を指定します。
- **anyDict_anyanyDict srcDictDict**
  - 任意のソース辞書型辞書を指定します。
- **sameAsKeyArray destArray**
  - 対象配列を指定します。値の型は最初の引数の値の型と同じである必要があります。
- **sameAsKeyList destList**
  - 対象リストを指定します。値の型は最初の引数の値の型と同じである必要があります。
- **sameAsKeyHashList destHashList**
  - 対象ハッシュリストを指定します。値の型は最初の引数の値の型と同じである必要があります。
- **anyDict_sameAsKeyList destDictList**
  - 対象リスト型辞書を指定します。値の型は最初の引数の値の型と同じである必要があります。
- **anyDict_sameAsKeyHashList destDictHashList**
  - 対象ハッシュリスト型辞書を指定します。値の型は最初の引数の値の型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 対象配列の場合はコピーに成功した要素数、対象リスト/リスト型辞書の場合はコピー後の要素総数を返します。
:::

----
#### DICTCOPY

**`int DICTCOPY anyanyDict srcDict, sameAsKeysameAsKeyDict destDict`**

**`int DICTCOPY anyanyDict srcDict, anyDict_sameAsKeysameDict destDictDict`**

**`int DICTCOPY anyDict_anyanyDict srcDictDict, sameAsKeysameAsKeyDict destDict`**

**`int DICTCOPY anyDict_anyanyDict srcDictDict, anyDict_sameAsKeysameDict destDictDict`**

指定されたソース辞書の全要素を対象の辞書にコピーします。

:::tip[パラメータ]
- **anyanyDict srcDict**
  - 任意のソース辞書を指定します。
- **anyDict_anyanyDict srcDictDict**
  - 任意のソース辞書型辞書を指定します。
- **sameAsKeysameAsKeyDict destDict**
  - 対象辞書を指定します。キーの型と値の型は最初の引数と同じである必要があります。
- **anyDict_sameAsKeysameDict destDictDict**
  - 対象辞書型辞書を指定します。サブキーの型と値の型は最初の引数と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 対象配列の場合はコピーに成功した要素数、対象リスト/リスト型辞書の場合はコピー後の要素総数を返します。
:::

----
### 辞書コレクション関連 {#DictItemRelated}

----
#### DICTITEMCREATE

**`int DICTITEMCREATE anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMCREATE anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMCREATE anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

指定された辞書コレクション変数に新しいコレクションを作成します。

:::tip[パラメータ]
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **anyDict_anyHashList dictHashList**
  - 任意のハッシュリスト型辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **sameAsDictKey dictKey**
  - 作成するメインキー名を指定します。キーの値の型は最初の引数のメインキーの型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - メインキー名が作成された場合は `非0`、既に同じキー名のコレクションが存在する場合は `0` を返します。
:::

----
#### DICTITEMEXIST

**`int DICTITEMEXIST anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMEXIST anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMEXIST anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

指定された辞書コレクション変数でメインキー名を検索します。

:::tip[パラメータ]
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **anyDict_anyHashList dictHashList**
  - 任意のハッシュリスト型辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **sameAsDictKey dictKey**
  - 検索するメインキー名を指定します。キーの値の型は最初の引数のメインキーの型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - メインキー名が見つかった場合は `非0`、見つからない場合は `0` を返します。
:::

----
#### DICTITEMRELEASE

**`int DICTITEMRELEASE anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMRELEASE anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMRELEASE anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

指定された辞書コレクション変数からメインキー名とコレクションを削除します。

:::tip[パラメータ]
- **anyDict_anyList dictList**
  - 任意のリスト型辞書を指定します。
- **anyDict_anyHashList dictHashList**
  - 任意のハッシュリスト型辞書を指定します。
- **anyDict_anyanyDict dictDict**
  - 任意の辞書型辞書を指定します。
- **sameAsDictKey dictKey**
  - 削除するメインキー名を指定します。キーの値の型は最初の引数のメインキーの型と同じである必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - メインキー名とコレクションが見つかり削除された場合は `非0`、見つからない場合は `0` を返します。
:::

----
#### DICTITEMRELEASEALL

**`int DICTITEMRELEASEALL anyDict_anyList dictList`**

**`int DICTITEMRELEASEALL anyDict_anyHashList dictHashList`**

**`int DICTITEMRELEASEALL anyDict_anyanyDict dictDict`**

指定された辞書コレクション変数から全メインキー名とコレクションを削除します。

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

指定された辞書コレクション変数のコレクション数を取得します。

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
  - 辞書コレクション変数のコレクション数を返します。
:::

----
### 入力関連 {#InputRelated}

----
#### CHKKEYDATA

**`int CHKKEYDATA int keyData(, str keyName, int modifier)`**

ユーザー入力の `keyData` キーコード値が指定された `keyName` キー名および `modifier` 修飾キーと一致するか確認します。`keyData` キーコード値は [**`INPUTMOUSEKEY`**](modify_com#inputmousekey) 命令で取得できます。

具体的な `keyName` キー名の対応リストは [**`Keys 列挙型`**](https://learn.microsoft.com/dotnet/api/system.windows.forms.keys?view=netframework-4.8) ドキュメントを参照してください。

:::tip[パラメータ]
- **int keyData**
  - ユーザー入力のキーコード値データを指定します。
- **str keyName**
  - 照合するキー名を指定します（大文字小文字を区別しません）。省略可。
- **int modifier**
  - 照合する修飾キーを指定します。省略可。
    - `1P0` = Shift
    - `1P1` = Ctrl
    - `1P2` = Alt
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定されたキー名と修飾キーが一致した場合は `非0` を返します。
:::

:::note[使用例]
```
INPUTMOUSEKEY 0
IF RESULT:0 == 3
  PRINTVL CHKKEYDATA(RESULT:2, "A")        ; 「A」キーが押されたか確認
  PRINTVL CHKKEYDATA(RESULT:2, , 1P0 | 1P1) ; 「Ctrl + Shift」が押されたか確認
  PRINTVL CHKKEYDATA(RESULT:2, "/", 1P1 | 1P2) ; 「Ctrl + Alt + /」が押されたか確認
ENDIF
```
:::

----
### 画像関連 {#ImageRelated}

----
#### ASYNCGDRAWG

この命令の使用方法は [**`GDRAWG`**](modify_com#gdrawg) 命令と同じで、長時間のプログラム停止を避けるために非同期で描画操作を行います。

非同期タスク送信後、[**`ASYNCWAITALL`**](#asyncwaitall) 命令を呼び出してすべての非同期タスクが完了するまでプログラムを待機させることができます。

:::tip[戻り値]
- **RESULT:0**
  - 非同期タスクの送信に成功した場合は `非0`、指定された画像が作成されていない場合は `0` を返します。
:::

----
#### ASYNCGDRAWSPRITE

この命令の使用方法は [**`GDRAWSPRITE`**](modify_com#gdrawsprite) 命令と同じで、長時間のプログラム停止を避けるために非同期で描画操作を行います。

非同期タスク送信後、[**`ASYNCWAITALL`**](#asyncwaitall) 命令を呼び出してすべての非同期タスクが完了するまでプログラムを待機させることができます。

:::tip[戻り値]
- **RESULT:0**
  - 非同期タスクの送信に成功した場合は `非0`、指定された画像またはSpriteが作成されていない場合は `0` を返します。
:::

----
#### ASYNCGCREATEFROMFILE

**`int ASYNCGCREATEFROMFILE int GID, str filepath`**

この命令の使用方法は [**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) 命令と同じで、長時間のプログラム停止を避けるために非同期で画像ファイルをロードします。

非同期タスク送信後、[**`ASYNCWAITALL`**](#asyncwaitall) 命令を呼び出してすべての非同期タスクが完了するまでプログラムを待機させることができます。

:::tip[戻り値]
- **RESULT:0**
  - 常に `非0` を返します。
:::

----
#### ASYNCGDISPOSE

**`int ASYNCGDISPOSE int GID`**

この命令の使用方法は [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 命令と同じで、他の非同期命令と連携して画像を解放します。

非同期タスク送信後、[**`ASYNCWAITALL`**](#asyncwaitall) 命令を呼び出してすべての非同期タスクが完了するまでプログラムを待機させることができます。

:::tip[戻り値]
- **RESULT:0**
  - 非同期タスクの送信に成功した場合は `非0`、指定された画像が作成されていない場合は `0` を返します。
:::

----
#### ASYNCSPRITELOAD

**`int ASYNCSPRITELOAD str sprite`**

指定されたSpriteが参照する画像を非同期でロードし、長時間のプログラム停止を避けます。

非同期タスク送信後、[**`ASYNCWAITALL`**](#asyncwaitall) 命令を呼び出してすべての非同期タスクが完了するまでプログラムを待機させることができます。

:::tip[パラメータ]
- **str sprite**
  - 非同期ロードするSprite名を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 非同期タスクの送信に成功した場合、またはSpriteが既に画像をロードしている場合は `非0`、Spriteが見つからない場合は `0` を返します。
:::

----
#### ASYNCWAITALL

**`void ASYNCWAITALL`**

すべての非同期タスクが完了するまでプログラムを強制待機させます。

----
#### GETBEZIERPATH

**`int GETBEZIERPATH intArray2|3D pointArray, int pointCount, intArray2D outputArray, int outputCount`**

ベジェ曲線を生成し、曲線上のすべての座標点を `outputArray` 配列に格納します。

:::tip[パラメータ]
- **intArray2|3D pointArray**
  - 曲線の開始点、複数の制御点、終了点の座標を指定します。配列の最後の次元の長さは `2以上` である必要があります。
- **int pointCount**
  - `pointArray` 内の座標点数を指定します。
- **intArray2D outputArray**
  - 生成された曲線の座標が格納される配列を指定します。配列の最後の次元の長さは `2以上` である必要があります。
- **int outputCount**
  - 生成する座標点数を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 命令が正常に実行された場合は `非0` を返します。
:::

----
#### GETBEZIERPOINT

**`int GETBEZIERPOINT intArray2|3D pointArray, int pointCount, int t, int tMax`**

指定された制御点と進行値に基づいてベジェ曲線上の座標点を取得します。

:::tip[パラメータ]
- **intArray2|3D pointArray**
  - 曲線の開始点、複数の制御点、終了点の座標を指定します。配列の最後の次元の長さは `2以上` である必要があります。
- **int pointCount**
  - `pointArray` 内の座標点数を指定します。
- **int t**
  - 取得する座標点の進行値を指定します。
- **int tMax**
  - 最大進行値を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 命令が正常に実行された場合は `非0` を返します。
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

指定された画像の `ENABLED` 値を取得します。この値は画像が最終的に画面に描画されるかどうかを制御します。

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

画像の位置情報を維持したまま、画像が最終的に画面に描画されるかどうかを制御します。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int enabled**
  - 画像を描画するかどうかを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定が成功した場合は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GFILLELLIPSE

**`int GFILLELLIPSE int GID, int x, int y, int width, int height`**

楕円図形を描画します。使用方法は [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) 命令と類似しており、[**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) 命令で色を指定します。

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
  - 図形の描画に成功した場合は `非0`、指定された画像が作成されていない場合は `0` を返します。
:::

----
#### GFILLROUNDRECT

**`int GFILLROUNDRECT int GID, int x, int y, int width, int height, int radiusX(, int radiusY)`**

角丸矩形を描画します。使用方法は [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) 命令と類似しており、[**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) 命令で色を指定します。

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
  - 角丸のX半径を指定します。
- **int radiusY**
  - 角丸のY半径を指定します。省略時は `radiusX` と同じ値を使用。
:::

:::tip[戻り値]
- **RESULT:0**
  - 図形の描画に成功した場合は `非0`、指定された画像が作成されていない場合は `0` を返します。
:::

----
#### GRESAMPLESAVE

**`int GRESAMPLESAVE int GID, any fileName, int width, int height`**

使用方法は [**`GSAVE`**](modify_com#gsave-gload) 命令と類似していますが、より高品質なリサンプリングを使用してより鮮明な縮小画像を生成しファイルに保存します（処理時間が長くなります）。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **any fileName**
  - 保存するファイル番号またはファイルパスを指定します。
- **int width**
  - 縮小幅を指定します。
- **int height**
  - 縮小高さを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - ファイルの保存に成功した場合は `非0`、指定された画像が作成されていない、ファイルパスが不正、ファイル保存エラー時は `0` を返します。
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
  - 画像の変換行列の設定に成功した場合は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GRESETSTATE

**`int GRESETSTATE int GID`**

指定された画像のすべての付加状態をリセットします。具体的なリセット内容は以下の通りです：

- `BRUSH`の色をデフォルト文字色にリセット
- `PEN`の色をデフォルト文字色にリセット、線幅を`1`にリセット、すべての線効果をリセット
- アンチエイリアス効果を`1(有効)`にリセット
- フィルタ品質を`3(高品質)`にリセット
- ぼかし効果をクリア
- `ColorMatrix(カラーマトリックス)`をクリア
- `TransformMatrix(変換行列)`をリセット

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像の状態リセットに成功した場合は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETANTIALIAS

**`int GSETANTIALIAS int GID(, int mode = 0)`**

画像描画時のアンチエイリアスを有効にするかどうかを設定します。

新しく作成されたすべての画像はデフォルトでアンチエイリアスが有効です。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int mode = 0**
  - アンチエイリアスを有効にするかどうかを指定します。`非0` 入力で有効、それ以外は無効。省略可 `(0)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像のアンチエイリアス設定に成功した場合は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETBLUR

**`int GSETBLUR int GID(, int blur = 0)`**

画像描画時のぼかし効果を設定します。

新しく作成されたすべての画像はデフォルトでぼかし効果なしです。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int blur = 0**
  - ぼかしの程度を指定します。入力範囲は `0-100`。省略または `0` 入力でぼかし効果をクリア。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像のぼかし効果設定に成功した場合は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETCOLORMATRIX

**`int GSETCOLORMATRIX int GID(, intArray colorMatrix)`**

画像描画時にカラーマトリックスを適用するかどうかを設定します。

カラーマトリックス配列は少なくとも `4行 x 5列` のサイズが必要です。最初の4列の入力範囲は `0-510`（2倍の過飽和をサポート）、5列目の入力範囲は `0-255` です。

カラーマトリックスが必要ない場合は、再度この命令を呼び出して第2パラメータ `colorMatrix` を省略してください。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **intArray colorMatrix**
  - カラーマトリックスとして使用する任意の整数配列を指定します。省略時は既存のカラーマトリックスをクリアします。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像のカラーマトリックス設定に成功した場合は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

:::note[使用例]
```
#DIM COLOR_MATRIX, 4, 5

COLOR_MATRIX:0:0 = 255, 0, 0, 0, 0    ; 赤
COLOR_MATRIX:1:0 = 0, 255, 0, 0, 0    ; 緑
COLOR_MATRIX:2:0 = 0, 0, 255, 0, 0    ; 青
COLOR_MATRIX:3:0 = 0, 0, 0, 0XFF, 0   ; アルファ

GCREATE 0, 100, 100
GSETCOLORMATRIX 0, COLOR_MATRIX:0:0
```
:::

----
#### GSETQUALITY

**`int GSETQUALITY int GID(, int quality = 3)`**

画像描画時のフィルタ品質レベルを設定します。この設定は画像の縮小時の鮮明さに影響します。

新しく作成されたすべての画像はデフォルトで `3(高品質)` を使用します。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int quality = 3**
  - 品質レベルを指定します。入力範囲 `0-3`：
    - `0` = フィルタリングなし
    - `1` = 低品質
    - `2` = 中品質
    - `3` = 高品質
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像のフィルタ品質設定に成功した場合は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETSCALE

**`int GSETSCALE int GID, int scaleX, int scaleY(, int posX = 0, int posY = 0)`**

画像の変換行列に `拡大縮小` 効果を追加します。

追加された効果は取り消せません。[**`GRESETMATRIX`**](#gresetmatrix) 命令を呼び出して全リセットする必要があります。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int scaleX**
  - X方向の拡大縮小量を指定します。`100` 入力で `100%`。
- **int scaleY**
  - Y方向の拡大縮小量を指定します。`100` 入力で `100%`。
- **int posX = 0**
  - 拡大縮小中心点のX位置を指定します。省略可 `(0)`。
- **int posY = 0**
  - 拡大縮小中心点のY位置を指定します。省略可 `(0)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像の変換行列設定に成功した場合は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETSKEW

**`int GSETSKEW int GID, int skewX, int skewY`**

画像の変換行列に `傾斜` 効果を追加します。

追加された効果は取り消せません。[**`GRESETMATRIX`**](#gresetmatrix) 命令を呼び出して全リセットする必要があります。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int skewX**
  - X方向の傾斜量を指定します。`100` 入力で `100%`。
- **int skewY**
  - Y方向の傾斜量を指定します。`100` 入力で `100%`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像の変換行列設定に成功した場合は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETROTATE

**`int GSETROTATE int GID, int angle`**

**`int GSETROTATE int GID, int angle, int posX = 0, int posY = 0`**

画像の変換行列に `回転` 効果を追加します。

追加された効果は取り消せません。[**`GRESETMATRIX`**](#gresetmatrix) 命令を呼び出して全リセットする必要があります。

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
  - 画像の変換行列設定に成功した場合は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### GSETTRANSLATE

**`int GSETTRANSLATE int GID, int translateX, int translateY`**

画像の変換行列に `平行移動` 効果を追加します。

追加された効果は取り消せません。[**`GRESETMATRIX`**](#gresetmatrix) 命令を呼び出して全リセットする必要があります。

:::tip[パラメータ]
- **int GID**
  - 画像IDを指定します。
- **int translateX**
  - X方向の移動量を指定します。
- **int translateY**
  - Y方向の移動量を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 画像の変換行列設定に成功した場合は `非0` を返します。画像が作成されていない場合は `0` を返します。
:::

----
#### SPRITEANIMECLEARFRAME

**`int SPRITEANIMECLEARFRAME str spriteAnime(, int removeStart = 0, int removeCount = frameCount)`**

指定されたSpriteAnimeのフレームをクリアします。

この命令は非組み込みのSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int removeStart = 0**
  - クリア開始位置を指定します。
- **int removeCount = frameCount**
  - クリアするフレーム数を指定します。省略時は `removeStart` 以降の全フレームをクリア。
:::

:::tip[戻り値]
- **RESULT:0**
  - クリアに成功した場合は `非0` を返します。SpriteAnimeが作成されていない、または組み込みの場合は `0` を返します。
:::

----
#### SPRITEANIMEFRAMECOUNT

**`int SPRITEANIMEFRAMECOUNT str spriteAnime`**

指定されたSpriteAnimeの追加済みフレーム数を取得します。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - SpriteAnimeのフレーム数を返します。SpriteAnimeが作成されていない場合は `0` を返します。
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
  - 設定に成功した場合は `非0` を返します。SpriteAnimeが作成されていない場合は `0` を返します。
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
  - 設定に成功した場合は `非0` を返します。SpriteAnimeが作成されていない場合は `0` を返します。
:::

----
#### SPRITEFRAME_SETG

**`int SPRITEFRAME_SETG str spriteAnime, int GID`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height, int posX, int posY`**

指定されたSpriteAnimeの現在のフレームに画像を設定します。各フレームで最後に設定された画像タイプのみが有効になります。

この命令は非組み込みのSpriteAnimeに対してのみ有効です。

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
  - 設定に成功した場合は `非0` を返します。SpriteAnimeが作成されていない、または組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_SETSPRITE

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height, int posX, int posY`**

指定されたSpriteAnimeの現在のフレームにSprite画像を設定します。各フレームで最後に設定された画像タイプのみが有効になります。

この命令は非組み込みのSpriteAnimeに対してのみ有効です。

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
  - 設定に成功した場合は `非0` を返します。SpriteAnimeが作成されていない、または組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_SETSPINE

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height, int posX, int posY`**

指定されたSpriteAnimeの現在のフレームにSpineアニメーションを設定します。各フレームで最後に設定された画像タイプのみが有効になります。

この命令は非組み込みのSpriteAnimeに対してのみ有効です。

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
  - 設定に成功した場合は `非0` を返します。SpriteAnimeが作成されていない、または組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_TRANSITION

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton`**

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton, intArray2D bezierPointArray, int bezierPointCount`**

指定されたSpriteAnimeの現在のフレームでトランジション効果を有効/無効にします。このトランジション効果は、前のフレームを変換開始点、現在のフレームを変換終了点として使用します。  
非等速のトランジション効果を得るために、ベジェ曲線を記述する配列を渡すことができます。

- 以下のプロパティのみがトランジション効果の影響を受けます：
  - 変換行列
  - カラーマトリックス
  - ぼかし効果

この命令は非組み込みのSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int useTransisiton**
  - トランジション効果を有効/無効に指定します。
- **intArray2D bezierPointArray**
  - ベジェ曲線を記述する配列を指定します。
- **int bezierPointCount**
  - 配列内の座標点数を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定に成功した場合は `非0` を返します。SpriteAnimeが作成されていない、または組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_TRANSLATE

**`int SPRITEFRAME_TRANSLATE str spriteAnime, int translateX, int translateY`**

指定されたSpriteAnimeの現在のフレームの変換行列に `平行移動` 効果を追加します。

追加された効果は取り消せません。[**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 命令を呼び出して現在のフレームの変換行列をリセットする必要があります。

この命令は非組み込みのSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int translateX**
  - X方向の移動量を指定します。
- **int translateY**
  - Y方向の移動量を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定に成功した場合は `非0` を返します。SpriteAnimeが作成されていない、または組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_SCALE

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY`**

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY, int posX, int posY`**

指定されたSpriteAnimeの現在のフレームの変換行列に `拡大縮小` 効果を追加します。

追加された効果は取り消せません。[**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 命令を呼び出して現在のフレームの変換行列をリセットする必要があります。

この命令は非組み込みのSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int scaleX**
  - X方向の拡大縮小量を指定します。`100` 入力で `100%`。
- **int scaleY**
  - Y方向の拡大縮小量を指定します。`100` 入力で `100%`。
- **int posX = 0**
  - 拡大縮小中心点のX位置を指定します。省略可 `(0)`。
- **int posY = 0**
  - 拡大縮小中心点のY位置を指定します。省略可 `(0)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定に成功した場合は `非0` を返します。SpriteAnimeが作成されていない、または組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_ROTATE

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle`**

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle, int posX, int posY`**

指定されたSpriteAnimeの現在のフレームの変換行列に `回転` 効果を追加します。

追加された効果は取り消せません。[**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 命令を呼び出して現在のフレームの変換行列をリセットする必要があります。

この命令は非組み込みのSpriteAnimeに対してのみ有効です。

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
  - 設定に成功した場合は `非0` を返します。SpriteAnimeが作成されていない、または組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_SKEW

**`int SPRITEFRAME_SKEW str spriteAnime, int skewX, int skewY`**

指定されたSpriteAnimeの現在のフレームの変換行列に `傾斜` 効果を追加します。

追加された効果は取り消せません。[**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 命令を呼び出して現在のフレームの変換行列をリセットする必要があります。

この命令は非組み込みのSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int skewX**
  - X方向の傾斜量を指定します。`100` 入力で `100%`。
- **int skewY**
  - Y方向の傾斜量を指定します。`100` 入力で `100%`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定に成功した場合は `非0` を返します。SpriteAnimeが作成されていない、または組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_RESETMATRIX

**`int SPRITEFRAME_RESETMATRIX str spriteAnime`**

指定されたSpriteAnimeの現在のフレームの変換行列をリセットします。

この命令は非組み込みのSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定に成功した場合は `非0` を返します。SpriteAnimeが作成されていない、または組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_COLORMATRIX

**`int SPRITEFRAME_COLORMATRIX str spriteAnime(, intArray colorMatrix)`**

指定されたSpriteAnimeの現在のフレームにカラーマトリックスを設定します。

カラーマトリックス配列は少なくとも `4行 x 5列` のサイズが必要です。最初の4列の入力範囲は `0-510`（2倍の過飽和をサポート）、5列目の入力範囲は `0-255` です。

カラーマトリックスが必要ない場合は、再度この命令を呼び出して第2パラメータ `colorMatrix` を省略してください。

この命令は非組み込みのSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **intArray colorMatrix**
  - カラーマトリックスとして使用する任意の整数配列を指定します。省略時は既存のカラーマトリックスをクリアします。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定に成功した場合は `非0` を返します。SpriteAnimeが作成されていない、または組み込みの場合は `0` を返します。
:::

----
#### SPRITEFRAME_BLUR

**`int SPRITEFRAME_BLUR str spriteAnime(, int blur = 0)`**

指定されたSpriteAnimeの現在のフレームにぼかし効果を設定します。

この命令は非組み込みのSpriteAnimeに対してのみ有効です。

:::tip[パラメータ]
- **str spriteAnime**
  - SpriteAnime名を指定します。
- **int blur = 0**
  - ぼかしの程度を指定します。入力範囲は `0-100`。省略または `0` 入力でぼかし効果をクリア。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定に成功した場合は `非0` を返します。SpriteAnimeが作成されていない、または組み込みの場合は `0` を返します。
:::

----
#### SPRITEENABLED

**`int SPRITEENABLED str sprite`**

指定されたSprite画像の `ENABLED` 値を取得します。この値は画像が最終的に画面に描画されるかどうかを制御します。

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

Sprite画像の位置情報を維持したまま、画像が最終的に画面に描画されるかどうかを制御します。

:::tip[パラメータ]
- **str sprite**
  - Sprite画像を指定します。
- **int enabled**
  - 画像を描画するかどうかを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定に成功した場合は `非0` を返します。Sprite画像が作成されていない場合は `0` を返します。
:::

----
#### SPRITEEXIST

**`int SPRITEEXIST str sprite`**

使用方法は [**`SPRITECREATED`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITECREATED.20str.20spriteName) 命令と類似しており、指定されたSpriteの存在を確認しますが、参照画像の自動ロードはトリガーしません。

:::tip[パラメータ]
- **str sprite**
  - 検索するSprite名を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定されたSpriteが見つかった場合は `非0` を返します。
:::

----
#### SPRITEEXTEND

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height`**

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height, int posX, int posY`**

既存のSpriteに基づいて新しい非組み込みSpriteを作成します。新しいSpriteの選択範囲は元のSpriteのサイズに制限されます。

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
  - 新しい非組み込みSpriteの作成に成功した場合は `非0` を返します。新しいSpriteと元のSpriteが同名、同名の組み込みSpriteが既に存在する、元のSpriteが存在しない、元のSpriteが単一画像タイプでない場合は `0` を返します。
:::

----
#### CONSTSPRITECREATE

**`int CONSTSPRITECREATE str sprite, str imgPath`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height, int posX, int posY`**

指定された `imgPath` 画像ファイルパスに基づいて新しい組み込みSpriteを作成します。

この操作は既存の非組み込みSpriteを置き換えます。

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
  - 新しい組み込みSpriteの作成に成功した場合は `非0` を返します。同名の組み込みSpriteが既に存在する、指定された選択範囲が画像と交差しない場合は `0` を返します。
:::

----
### SPINE関連 {#SpineRelated}

----
#### SPINECREATE

**`int SPINECREATE int spineID, str spineResource`**

csvリソースファイルで定義されたSpineリソースに基づいて、指定された `spineID` にSpineアニメーションを作成します。

この命令はSpineアニメーションを作成する前に既存のSpineアニメーションを解放するため、作成前に [**`SPINEDISPOSE`**](#spinedispose) 命令を呼び出す必要はありません。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **str spineResource**
  - Spineリソース名を指定します（大文字小文字を区別しません）。
:::

:::tip[戻り値]
- **RESULT:0**
  - Spineアニメーションの作成に成功した場合は `非0` を返します。Spineアニメーションリソースが存在しない場合は `0` を返します。
:::

----
#### SPINECREATEFROMFILE

**`int SPINECREATEFROMFILE int spineID, str atlasFile, str dataFile`**

指定された `atlasファイル` と `dataファイル(.skelまたは.json)` に基づいて、指定された `spineID` にSpineアニメーションを作成します。

この命令はSpineアニメーションを作成する前に既存のSpineアニメーションを解放するため、作成前に [**`SPINEDISPOSE`**](#spinedispose) 命令を呼び出す必要はありません。

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
  - Spineアニメーションの作成に成功した場合は `非0` を返します。ファイルが存在しない、ファイル形式が不正な場合は `0` を返します。
:::

----
#### SPINECREATED

**`int SPINECREATED int spineID`**

指定されたSpineアニメーションが作成されているか確認します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Spineアニメーションが作成されている場合は `非0` を返します。
:::

----
#### SPINEDISPOSE

**`int SPINEDISPOSE int spineID(, int disposeImg = 0)`**

指定されたSpineアニメーションを削除します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int disposeImg = 0**
  - 参照画像を解放するかどうかを指定します。`非0` 入力で画像を解放。
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
  - すべての参照画像を解放するかどうかを指定します。`非0` 入力で画像を解放。
:::

:::tip[戻り値]
- **RESULT:0**
  - 常に `非0` を返します。
:::

----
#### SPINEENABLED

**`int SPINEENABLED int spineID`**

指定されたSpineアニメーションの `ENABLED` 値を取得します。この値はアニメーションが最終的に画面に描画されるかどうかを制御します。

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

Spineアニメーションの位置情報を維持したまま、アニメーションが最終的に画面に描画されるかどうかを制御します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int enabled**
  - アニメーションを描画するかどうかを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定に成功した場合は `非0` を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### GDRAWSPINE

**`int GDRAWSPINE int GID, int spineID`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

使用方法は [**`GDRAWG`**](modify_com#gdrawg) 命令と類似しており、指定された `GID` 画像上に `spineID` Spineアニメーションを描画します。

`colorMatrix` カラーマトリックスの使用方法は [**`GSETCOLORMATRIX`**](#gsetcolormatrix) 命令の説明を参照してください。

:::tip[パラメータ]
- **int GID**
  - 対象画像IDを指定します。
- **int spineID**
  - ソースSpineIDを指定します。
- **int destX**
  - 対象X位置を指定します。
- **int destY**
  - 対象Y位置を指定します。
- **int destWidth**
  - 対象幅を指定します。`負数` を渡すと反転画像を描画します。
- **int destHeight**
  - 対象高さを指定します。`負数` を渡すと反転画像を描画します。
- **int srcX**
  - ソースX位置を指定します。
- **int srcY**
  - ソースY位置を指定します。
- **int srcWidth**
  - ソース幅を指定します。
- **int srcHeight**
  - ソース高さを指定します。
- **intArray colorMatrix**
  - カラーマトリックスとして使用する任意の整数配列を指定します。省略可。このカラーマトリックスは今回の描画のみ有効で、描画後は自動的にクリアされます。
:::

:::tip[戻り値]
- **RESULT:0**
  - 描画に成功した場合は `非0` を返します。指定された画像またはSpineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### ASYNCGDRAWSPINE

この命令の使用方法は [**`GDRAWSPINE`**](#gdrawspine) 命令と同じで、長時間のプログラム停止を避けるために非同期で描画操作を行います。

非同期タスク送信後、[**`ASYNCWAITALL`**](#asyncwaitall) 命令を呼び出してすべての非同期タスクが完了するまでプログラムを待機させることができます。

:::tip[戻り値]
- **RESULT:0**
  - 非同期タスクの送信に成功した場合は `非0`、指定された画像またはSpineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### ASYNCSPINELOAD

**`int ASYNCSPINELOAD int spineID`**

指定されたSpineアニメーションが参照する画像を非同期でロードし、長時間のプログラム停止を避けます。

非同期タスク送信後、[**`ASYNCWAITALL`**](#asyncwaitall) 命令を呼び出してすべての非同期タスクが完了するまでプログラムを待機させることができます。

:::tip[パラメータ]
- **int spineID**
  - 非同期ロードするSpineIDを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 非同期タスクの送信に成功した場合は `非0`、Spineアニメーションが作成されていない場合は `0` を返します。
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

指定されたSpineアニメーションの元の座標軸位置を取得します。取得値は [**`SPINESETSCALE`**](#spinesetscale) 命令の影響を受けます。

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

指定されたSpineアニメーションの幅または高さを取得します。取得値は [**`SPINESETSCALE`**](#spinesetscale) 命令の影響を受けます。

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

使用方法は [**`SPRITESETPOS`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITESETPOS.20str.20spriteName.2C.20int.20posx.2C.20int.20posy)、[**`SPRITEMOVE`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITEMOVE.20str.20spriteName.2C.20int.20movex.2C.20int.20movey) 命令と類似しており、指定されたSpineアニメーションの描画位置を設定または移動します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int posX**
  - 描画X位置を指定します。
- **int posY**
  - 描画Y位置を指定します。
- **int offsetX**
  - 描画X位置の移動量を指定します。
- **int offsetY**
  - 描画Y位置の移動量を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定に成功した場合は `非0` を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### SPINESETSCALE

**`int SPINESETSCALE int spineID, int scale`**

**`int SPINESETSCALE int spineID, int scaleX, int scaleY`**

指定されたSpineアニメーションの拡大縮小率を設定します。

- この命令は以下の命令の出力結果に影響します：
  - [**`SPINESRCX, SPINESRCY`**](#spinesrcx-spinesrcy)
  - [**`SPINEWIDTH, SPINEHEIGHT`**](#spinewidth-spineheight)

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int scale**
  - 全体の拡大縮小量を指定します。`100` 入力で `100%`。
- **int scaleX**
  - X方向の拡大縮小量を指定します。`100` 入力で `100%`。
- **int scaleY**
  - Y方向の拡大縮小量を指定します。`100` 入力で `100%`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定に成功した場合は `非0` を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### SPINEHASANIM, SPINEHASSKIN

**`int SPINEHASANIM int spineID, str animName`**

**`int SPINEHASSKIN int spineID, str skinName`**

指定されたSpineアニメーションに指定されたアニメーションまたはスキンが存在するか確認します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **str animName**
  - アニメーション名を指定します（大文字小文字を区別しません）。
- **str skinName**
  - スキン名を指定します（大文字小文字を区別しません）。
:::

:::tip[戻り値]
- **RESULT:0**
  - 指定されたアニメーションまたはスキンが存在する場合は `非0` を返します。
:::

----
#### SPINESETANIM

**`int SPINESETANIM int spineID, int trackIndex, str animName(, int isLoop = 0)`**

指定されたSpineアニメーションにアニメーションを設定します。アニメーション名が空の場合、指定されたトラックインデックスの既存アニメーションをクリアします。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int trackIndex**
  - アニメーションのトラックインデックスを指定します。
- **str animName**
  - アニメーション名を指定します（大文字小文字を区別しません）。空の場合、指定されたトラックインデックスの既存アニメーションをクリアします。
- **int isLoop = 0**
  - アニメーションをループするかどうかを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - アニメーションの設定に成功した場合、またはクリアに成功した場合は `非0` を返します。Spineアニメーションが作成されていない、または指定されたアニメーションが存在しない場合は `0` を返します。
:::

----
#### SPINEADDANIM

**`int SPINEADDANIM int spineID, int trackIndex, str animName(, int isLoop = 0, int delay = 1000)`**

指定されたSpineアニメーションにアニメーションを追加します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int trackIndex**
  - アニメーションのトラックインデックスを指定します。
- **str animName**
  - アニメーション名を指定します（大文字小文字を区別しません）。
- **int isLoop = 0**
  - アニメーションをループするかどうかを指定します。
- **int delay = 1000**
  - アニメーションの再生遅延をミリ秒単位で指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - アニメーションの追加に成功した場合は `非0` を返します。Spineアニメーションが作成されていない、または指定されたアニメーションが存在しない場合は `0` を返します。
:::

----
#### SPINESETSKIN

**`int SPINESETSKIN int spineID, str skinName`**

指定されたSpineアニメーションにスキンを設定します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **str skinName**
  - スキン名を指定します（大文字小文字を区別しません）。
:::

:::tip[戻り値]
- **RESULT:0**
  - スキンの設定に成功した場合は `非0` を返します。Spineアニメーションが作成されていない、または指定されたスキンが存在しない場合は `0` を返します。
:::

----
#### SPINESETTIME, SPINEUPDATETIME

**`int SPINESETTIME int spineID, int millsec`**

**`int SPINEUPDATETIME int spineID, int millsec`**

指定されたSpineアニメーションの再生時間を設定または進めます。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int millsec**
  - 再生時間をミリ秒単位で指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定に成功した場合は `非0` を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### SPINETIMESCALE

**`int SPINETIMESCALE int spineID, int timeScale`**

指定されたSpineアニメーションの時間倍率を設定します。このプロパティはSpineアニメーションの再生速度を制御します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **int timeScale**
  - 時間倍率を指定します。`100` 入力で `100%`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 設定に成功した場合は `非0` を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### SPINEANIMLIST, SPINESKINLIST

**`int SPINEANIMLIST int spineID, strArray outputArray`**

**`int SPINESKINLIST int spineID, strArray outputArray`**

指定されたSpineアニメーションのアニメーションリストまたはスキンリストを取得します。

:::tip[パラメータ]
- **int spineID**
  - SpineIDを指定します。
- **strArray outputArray**
  - リストを取得する任意の文字列配列を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 取得したアニメーションまたはスキンの数を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
#### CBGSETSPINE

**`int CBGSETSPINE int spineID, int x, int y, int zdepth`**

使用方法は [**`CBGSETG`**](https://osdn.net/projects/emuera/wiki/excom#h5-CBGSETG.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20zdepth) 命令と類似しており、指定されたSpineアニメーションをクライアント背景に表示します。

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
  - 設定に成功した場合は `非0` を返します。Spineアニメーションが作成されていない場合は `0` を返します。
:::

----
### オーディオ関連 {#AudioRelated}

----
#### AUDIOCREATE

**`int AUDIOCREATE str audioName, str srcAudio(, int volume, any startTime, any duration)`**

既存の `srcAudio` に基づいて新しいAudioを作成します。

`startTime` と `duration` を指定する場合は、元のAudioが参照するオーディオファイルの合計再生時間を基準にします。

`startTime` と `duration` には `TimeSpan` または `ms(ミリ秒)` を入力できます。`TimeSpan` の書式は [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) ドキュメントの例を参照してください。

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
  - Audioの作成に成功した場合は `非0` を返します。Audio名が既に存在する、元のAudioが存在しない場合は `0` を返します。
:::

:::note[使用例]
```
AUDIOCREATE "New", "Old", 80            ; 新規Audio「New」を作成、音量80
AUDIOCREATE "New", "Old", , "00:01:10", "10000" ; 新規Audio「New」を作成、開始時間1分10秒、再生時間10000ミリ秒
```
:::

----
#### AUDIOCREATEFROMFILE

**`int AUDIOCREATEFROMFILE str audioName, str filePath(, int volume, any startTime, any duration)`**

指定された `filePath` オーディオファイルに基づいて新しいAudioを作成します。

`startTime` と `duration` を指定する場合は、オーディオファイルの合計再生時間を基準にします。

`startTime` と `duration` パラメータは `TimeSpan` または `ms(ミリ秒)` 値を受け取ります。`TimeSpan` の書式は [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) ドキュメントの例を参照してください。

:::tip[パラメータ]
- **str audioName**
  - 新しいAudioの名前を指定します。
- **str filePath**
  - 参照するオーディオファイルの相対パスを指定します。このパスはメインディレクトリから開始する必要があります。
- **int volume**
  - 新しいAudioの再生音量を指定します。省略可 `(100)`。
- **any startTime**
  - 新しいAudioの開始時間を指定します。省略可 `(0)`。
- **any duration**
  - 新しいAudioの再生時間を指定します。省略可 `(オーディオファイルの合計再生時間)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - Audioの作成に成功した場合は `非0` を返します。Audio名が既に存在する、オーディオファイルが存在しない場合は `0` を返します。
:::

:::note[使用例]
```
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", 80            ; 新規Audio「New」を作成、音量80
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", , "00:01:10" ; 新規Audio「New」を作成、開始時間1分10秒
```
:::

----
#### AUDIOCREATED

**`int AUDIOCREATED str audioName`**

指定されたAudioが作成されているか確認します。

:::tip[パラメータ]
- **str audioName**
  - Audio名を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Audioが存在する場合は `非0` を返します。
:::

----
#### AUDIOVOLUME

**`int AUDIOVOLUME str audioName`**

指定されたAudioの音量を取得します。

:::tip[パラメータ]
- **str audioName**
  - Audio名を指定します。
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
  - Audio名を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Audioの開始時間を返します。Audioが存在しない場合は `0` を返します。
:::

----
#### AUDIODURATION

**`int AUDIODURATION str audioName`**

指定されたAudioの再生継続時間を `ms(ミリ秒)` 単位で取得します。

:::tip[パラメータ]
- **str audioName**
  - Audio名を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Audioの継続時間を返します。Audioが存在しない場合は `0` を返します。
:::

----
#### AUDIODISPOSE

**`int AUDIODISPOSE str audioName`**

指定された一時Audioを削除します。Audioが占有するメモリは再生終了後に解放されます。実行時に作成された一時Audioのみ削除可能です。

:::tip[パラメータ]
- **str audioName**
  - 削除するAudio名を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - Audioの削除に成功した場合は `非0` を返します。Audioが存在しない、指定されたAudioが一時Audioでない場合は `0` を返します。
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
  - 現在再生中の背景音楽名。何も再生されていない場合は `空文字列` を返します。
:::

----
#### PAUSEBGM

**`void PAUSEBGM (int fadeOut = 0)`**

現在再生中の背景音楽を一時停止します。

:::tip[パラメータ]
- **int fadeOut = 0**
  - フェードアウト効果の継続時間をミリ秒単位で指定します。`省略` または `0以下` の場合は効果なし。最大値 `10000`。
:::

----
### モジュール関連 {#ModuleRelated}

----
#### MODULELIST

**`int MODULELIST strArray array`**

ロード済みのモジュールIDリストを取得します。

:::tip[パラメータ]
- **strArray array**
  - モジュールIDリストを受け取る任意の文字列型配列を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 取得したモジュールID数を返します。  
    取得数は受信配列の最後の次元の長さによって制限される場合があります。
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
  - 取得したフォルダ相対パスを返します。モジュールIDが存在しない、またはロードされていない場合は `空文字列` を返します。
:::

:::note[使用例]
```
PRINTSL MODULEPATH("MyMod")            ; 「mod/MyMod v1.0/」を出力
```
:::

----
#### GETRESOURCEEXT

**`int GETRESOURCEEXT strArray array(, int option = 1P0 | 1P1)`**

起動ツールがサポートするすべての画像、オーディオリソースファイルの拡張子を取得します。拡張子には `.` が含まれ、すべて小文字です。

:::tip[パラメータ]
- **strArray array**
  - ファイル拡張子を受け取る任意の文字列型配列を指定します。
- **int option = 1P0 | 1P1**
  - 必要なリソースタイプを指定します。`1P0` = 画像リソース、`1P1` = オーディオリソース。省略可 `(1P0 | 1P1)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 取得した拡張子の数を返します。  
    取得数は受信配列の最後の次元の長さによって制限される場合があります。
:::

:::note[使用例]
```
GETRESOURCEEXT LOCALS, 1P0
PRINTS "画像拡張子:" 
FOR LOCAL, 0, RESULT
	PRINTS " "
	PRINTS LOCALS:LOCAL
NEXT
PRINTL

GETRESOURCEEXT LOCALS, 1P1
PRINTS "音声拡張子:" 
FOR LOCAL, 0, RESULT
	PRINTS " "
	PRINTS LOCALS:LOCAL
NEXT
PRINTL

; 出力例:
; 画像拡張子: .bmp .jpg .jpeg .png .webp .tiff .exif .gif
; 音声拡張子: .mp3 .mpeg3 .wav .wave .flac .fla .aiff .aif .aifc .aac .adt .adts .m2ts .mp2 .3g2 .3gp2 .3gp .3gpp .m4a .m4v .mp4v .mp4 .mov .asf .wm .wmv .wma .mp1 .avi .ac3 .ec3
```
:::

----
#### TEXT

**`str TEXT anyParams keyName`**

指定されたキー名に基づいて多言語テキストを取得します。詳細な使用方法は [**`多言語機能`**](/#Multilingual) セクションを参照してください。

:::tip[パラメータ]
- **anyParams keyName**
  - 多言語テキストのキー名を指定します。入力するキー名は大文字小文字を区別しません。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 指定された多言語テキストを返します。キー名が存在しない、パスが不正な場合は `空文字列` を返します。
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

**`int TEXTLIST strArray array, anyParams keyName`**

指定されたキー名に基づいて多言語テキストリストを取得します。詳細な使用方法は [**`多言語機能`**](/#Multilingual) セクションを参照してください。

:::tip[パラメータ]
- **strArray array**
  - テキストリストを受け取る任意の文字列型配列を指定します。
- **anyParams keyName**
  - 多言語テキストのキー名を指定します。入力するキー名は大文字小文字を区別しません。
:::

:::tip[戻り値]
- **RESULT:0**
  - 正常に取得したテキストリストの要素数を返します。キー名が存在しない、パスが不正な場合は `0` を返します。  
    取得された要素数は受信配列の最後の次元の長さによって制限される場合があります。
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

**`int LANGUAGELIST strArray array`**

ロード済みの多言語IDリストを取得します。取得されたIDは自動的に `ハイフン(-)` を `アンダースコア(_)` に置換します。

:::tip[パラメータ]
- **strArray array**
  - 多言語IDリストを受け取る任意の文字列型配列を指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 取得した多言語ID数を返します。  
    取得数は受信配列の最後の次元の長さによって制限される場合があります。
:::

----
### MAPコレクション関連 {#MapCollectionRelated}

----
#### MAP_COPY

**`int MAP_COPY str srcMap, str destMap`**

指定されたソースMAPの全要素を対象MAPにコピーします。

:::tip[パラメータ]
- **str srcMap**
  - ソースMAPを指定します。
- **str destMap**
  - 対象MAPを指定します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 対象MAPの要素数を返します。ソースMAPまたは対象MAPが見つからない場合は `(-1)` を返します。
:::
