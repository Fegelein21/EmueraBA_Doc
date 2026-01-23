---
sidebar_position: 2
sidebar_label: 変更された命令
---

# 変更された命令 {#ModifyCom}

### 表示関連 {#DisplayRelated}

----
#### SETCOLORBYNAME, SETBGCOLORBYNAME

**`void SETCOLORBYNAME form colorName`**

**`void SETBGCOLORBYNAME form colorName`**

これらの命令の第1パラメータ `colorName` がFORM構文を受け入れるようになりました。

:::note[使用例]
```
SETCOLORBYNAME RED

LOCALS '= "BLUE"
SETBGCOLORBYNAME %LOCALS%
```
:::

----
### テキスト処理関連 {#TextProcessRelated}

----
#### REPLACE

**`str REPLACE str source, str match, str newvalue(, int flag = 0)`**

この命令の別のパラメータ形式の1つが独立した命令 [**`REPLACEBYARRAY`**](new_com#replacebyarray) に分離されました。また、`flag` パラメータの機能が変更されました。

:::tip[パラメータ]
- **str source**
  - 処理するテキストを指定します。
- **str match**
  - マッチするテキストを指定します。
- **str newvalue**
  - 置換するテキストを指定します。
- **int flag = 0**
  - テキスト処理方法を指定します。デフォルトは正規表現置換モードです。`非0` を入力するとプレーンテキスト置換モードを使用します。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 置換後の文字列を返します。
:::

----
#### SPLIT

**`void SPLIT str text(, str delimiter = ","), strArray array(, int result)`**

この命令の第2パラメータ `delimiter` は省略可能で、デフォルト値は `(",")` です。

第3パラメータ `array` は多次元配列を渡すことができます。  
多次元配列の場合：最後の次元の要素のみを処理し、前の次元のインデックス値は自分で指定する必要があります。

----
#### STRCOUNT

**`int STRCOUNT str input, str match(, int option = 0)`**

- 第3パラメータ `option` を追加しました。このパラメータを指定することで処理オプションを調整できます。
  - `1P0` = プレーンテキストマッチングモードを使用（高速ですが正規表現構文をサポートしません）
  - `1P1` = 大文字小文字を無視

----
#### STRFIND

この命令は絵文字を処理する際、表示幅を計算して文字長を導き出します。

----
#### STRJOIN

**`str STRJOIN any Array_List_HashList(, str delimiter = ",", int start = 0, int count = lastDimLength)`**

第1パラメータ `Array_List_HashList` は任意型の参照可能な配列、リスト、ハッシュリストを渡すことができます。

:::tip[パラメータ]
- **any Array_List_HashList**
  - 文字列を結合する任意型の参照可能な配列、リスト、ハッシュリストを指定します。
    - 多次元配列の場合：最後の次元の要素のみを処理し、前の次元のインデックス値は自分で指定する必要があります。
- **str delimiter = ","**
  - 文字列結合時に使用する区切り文字を指定します。
- **int start = 0**
  - 結合を開始するインデックスを指定します。
- **int count = lastDimLength**
  - 結合する要素数を指定します。省略時は配列の最後の次元の長さを使用します。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 結合された文字列を返します。
:::

----
#### STRLEN, STRLENFORM

これらの命令は絵文字を処理する際、表示幅を計算して文字長を導き出します。

----
#### STRLENS

この命令は絵文字を処理する際、表示幅を計算して文字長を導き出します。

----
#### SUBSTRING

**`int SUBSTRING str text(, int start = 0, int length = totalLength)`**

この命令は絵文字を処理する際、表示幅を計算して文字長を導き出します。  
テキストの選択位置が長い文字の中間に位置する場合、その文字の開始位置まで戻ります。つまり、開始位置にかかる文字は含まれ、終了位置にかかる文字は無視されます。

:::note[使用例]
```
PRINTSL SUBSTRING("１２３", 1, 4)        ; "１２" を印刷します。
PRINTSL SUBSTRING("１😀３", 1, 4)        ; "１😀" を印刷します。
```
:::

----
### 変数・配列関連 {#VarAndArrayRelated}

----
#### ARRAYCOPY

**`void ARRAYCOPY str srcArrayName, str destVarName(, int isLastDimOnly = 0)`**

第3パラメータ `isLastDimOnly` を追加しました。ソース配列の最後の次元の要素のみをコピーするかどうかを指定します。省略可能 (`0`) 。

第2パラメータ `destVarName` はリストとハッシュリストの変数名を渡すことをサポートします。`isLastDimOnly` のパラメータ値が `0` の場合、ソース配列のすべての要素がターゲットリストに追加されます。

----
#### ARRAYREMOVE

**`void ARRAYREMOVE anyArray1D array, int start, int count, same emptyVal`**

第4パラメータ `emptyVal` を追加しました。要素を移動した後の空白を埋める値を指定します。デフォルトの埋め込み値は `0` または `空文字列` です。

この命令の第3パラメータ `count` が `負数` で指定された場合、配列の総長として扱われます。

----
#### ARRAYSHIFT

**`void ARRAYSHIFT anyArray1D array, int shiftCount, same emptyVal(, int start, int count)`**

第5パラメータ `count` が `負数` で指定された場合、配列の総長として扱われます。

----
#### ARRAYSORT

**`void ARRAYSORT any Array1D_List(, FORWARD or BACK, int start, int count)`**

第1パラメータ `Array1D_List` はリストを渡すことをサポートします。

第4パラメータ `count` が `負数` で指定された場合、配列またはリストの総長として扱われます。

----
#### ARRAYMSORT

**`int ARRAYMSORT any Array1D_List(, sameParams Array_List)`**

第1パラメータ `Array1D_List` は任意型の参照可能な一次元配列、リストを渡すことができます。

後続のパラメータ `Array_List` は配列、リストを渡すことができます。

:::tip[パラメータ]
- **any Array1D_List**
  - ソートの基準として使用する任意型の参照可能な一次元配列、リストを指定します。  
    このパラメータ自体の値もソートされます。
- **sameParams Array_List**
  - ソートする参照可能な配列、リストを一つ以上指定します。値の型は最初のパラメータの値の型と一致する必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - ソート結果を返します。ソート成功またはソート不要の場合は `非0` を返し、それ以外の場合は `0` を返します。
:::

----
#### ERDNAME

この命令は第3パラメータを省略した場合、配列の最後の次元の添字キーワードを検索します。

----
#### FINDELEMENT, FINDLASTELEMENT

**`int FINDELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int FINDLASTELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

第1パラメータ `array` は多次元配列を渡すことができます。第5パラメータ `option` の用法が変更されました。このパラメータを指定することで処理オプションを調整できます。

:::tip[パラメータ]
- **anyArray array**
  - 検索する任意の配列を指定します。
    - 多次元配列の場合：最後の次元の要素のみを処理し、前の次元のインデックス値は自分で指定する必要があります。
- **same target**
  - 検索する内容を指定します。
- **int start = 0**
  - 検索を開始するインデックスを指定します。
- **int end = lastDimLength**
  - 検索を終了するインデックス+1を指定します。省略時は配列の最後の次元の長さを使用します。
- **int option = 0**
  - 処理オプションを指定します：
    - `1P0` = 完全一致を使用
    - `1P1` = 大文字小文字を無視
    - `1P2` = 判定結果を反転
    - `1P3` = プレーンテキストマッチングを使用
:::

:::tip[戻り値]
- **RESULT:0**
  - 検索条件に合致する最初のインデックス値を返します。見つからない場合は `-1` を返します。
:::

:::note[使用例]
```
LOCAL = FINDELEMENT(LOCALS, "WORD", , , 1P0 | 1P1)
```
:::

----
#### INRANGE

**`int INRANGE any value, same minValue, same maxValue`**

第1パラメータ `value` は文字列を渡すことができ、文字列の照合順序が指定範囲内にあるかどうかを判断するために使用されます。

:::tip[パラメータ]
- **any value**
  - 判断する値を指定します。
- **same minValue**
  - 最小範囲値を指定します。変数の値の型は最初のパラメータの値の型と一致する必要があります。
- **same maxValue**
  - 最大範囲値を指定します。変数の値の型は最初のパラメータの値の型と一致する必要があります。
:::

:::tip[戻り値]
- **RESULT:0**
  - 判断結果を返します。値が指定範囲内にある場合は `非0` を返し、それ以外の場合は `0` を返します。
:::

:::note[使用例]
```
PRINTVL INRANGE(11, 10, 20)          ; "1" を印刷します。
PRINTVL INRANGE(21, 10, 20)          ; "0" を印刷します。
PRINTVL INRANGE("b", "a", "c")       ; "1" を印刷します。
PRINTVL INRANGE("banana", "b", "c")  ; "1" を印刷します。
PRINTVL INRANGE("can", "a", "c")     ; "0" を印刷します。
```
:::

----
#### INRANGEARRAY

**`int INRANGEARRAY intArray array, int min, int max(, int start = 0, int end = lastDimLength)`**

第1パラメータ `array` は多次元整数配列を渡すことができます。

:::tip[パラメータ]
- **intArray array**
  - 任意の整数配列を指定します。
    - 多次元配列の場合：最後の次元の要素のみを処理し、前の次元のインデックス値は自分で指定する必要があります。
- **int min**
  - 最小範囲値を指定します。
- **int max**
  - 最大範囲値を指定します。
- **int start = 0**
  - 開始インデックスを指定します。
- **int end = lastDimLength**
  - 終了インデックス+1を指定します。省略時は配列の最後の次元の長さを使用します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 条件に合致する要素の数を返します。
:::

----
#### INRANGECARRAY

**`int INRANGECARRAY intCharaArray array, int min, int max(, int start = 0, int end = charaCount)`**

第1パラメータ `array` は二次元キャラクター型整数配列を渡すことができます。

:::tip[パラメータ]
- **intCharaArray array**
  - 任意のキャラクター型整数配列を指定します。
    - 多次元配列の場合：最後の次元の要素のみを処理し、前の次元のインデックス値は自分で指定する必要があります。
- **int min**
  - 最小範囲値を指定します。
- **int max**
  - 最大範囲値を指定します。
- **int start = 0**
  - 開始キャラクターインデックスを指定します。
- **int end = charaCount**
  - 終了キャラクターインデックス+1を指定します。省略時はキャラクター総数を使用します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 条件に合致する要素の数を返します。
:::

----
#### MINARRAY, MAXARRAY

**`int MINARRAY intArray array(, int start = 0, int end = lastDimLength)`**

**`int MAXARRAY intArray array(, int start = 0, int end = lastDimLength)`**

第1パラメータ `array` は多次元整数配列を渡すことができます。

:::tip[パラメータ]
- **intArray array**
  - 任意の整数配列を指定します。
    - 多次元配列の場合：最後の次元の要素のみを処理し、前の次元のインデックス値は自分で指定する必要があります。
- **int start = 0**
  - 開始インデックスを指定します。
- **int end = lastDimLength**
  - 終了インデックス+1を指定します。省略時は配列の最後の次元の長さを使用します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 条件に合致する要素の値を返します。
:::

----
#### MINCARRAY, MAXCARRAY

**`int MINCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

**`int MAXCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

第1パラメータ `array` は二次元キャラクター型整数配列を渡すことができます。

:::tip[パラメータ]
- **intCharaArray array**
  - 任意のキャラクター型整数配列を指定します。
    - 多次元配列の場合：最後の次元の要素のみを処理し、前の次元のインデックス値は自分で指定する必要があります。
- **int start = 0**
  - 開始キャラクターインデックスを指定します。
- **int end = charaCount**
  - 終了キャラクターインデックス+1を指定します。省略時はキャラクター総数を使用します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 条件に合致する要素の値を返します。
:::

----
#### MATCH

**`int MATCH anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

第1パラメータ `array` は多次元配列を渡すことができます。第5パラメータ `option` を追加しました。このパラメータを指定することで処理オプションを調整できます。

:::tip[パラメータ]
- **anyArray array**
  - 検索する任意の配列を指定します。
    - 多次元配列の場合：最後の次元の要素のみを処理し、前の次元のインデックス値は自分で指定する必要があります。
- **same target**
  - 検索する内容を指定します。
- **int start = 0**
  - 検索を開始するインデックスを指定します。
- **int end = lastDimLength**
  - 検索を終了するインデックス+1を指定します。省略時は配列の最後の次元の長さを使用します。
- **int option = 0**
  - 処理オプションを指定します：
    - `1P0` = 部分一致を使用
    - `1P1` = 大文字小文字を無視
    - `1P2` = 判定結果を反転
    - `1P3` = 正規表現マッチングを使用
:::

:::tip[戻り値]
- **RESULT:0**
  - 検索条件に合致する要素の数を返します。
:::

:::note[使用例]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P0 | 1P1)    ; ARRAY:0 から ARRAY:7 までで "AA" を含み（大文字小文字無視）、かつ部分一致する要素の数を数えます。
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P2)          ; ARRAY:0 から ARRAY:7 までで "AA" と等しくない要素の数を数えます。
PRINTVL MATCH(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)  ; ARRAY:0 から ARRAY:7 までで "\\d+" に部分一致する要素の数を数えます。
PRINTVL MATCH(CARRAY_2D:TARGET:3:0, 22, 5)     ; キャラクターTARGETの CARRAY_2D:3:5 から CARRAY_2D:3:9 までで 22 と等しい要素の数を数えます。
```
:::

----
#### CMATCH

**`int CMATCH anyCharaArray array, same target(, int start = 0, int end = charaCount, int option = 0)`**

第1パラメータ `array` は二次元キャラクター型配列を渡すことができます。第5パラメータ `option` を追加しました。このパラメータを指定することで処理オプションを調整できます。

:::tip[パラメータ]
- **anyCharaArray array**
  - 検索するキャラクター型配列を指定します。
    - 多次元配列の場合：最後の次元の要素のみを処理し、前の次元のインデックス値は自分で指定する必要があります。
- **same target**
  - 検索する内容を指定します。
- **int start = 0**
  - 検索を開始するキャラクターインデックスを指定します。
- **int end = charaCount**
  - 検索を終了するキャラクターインデックス+1を指定します。省略時はキャラクター総数を使用します。
- **int option = 0**
  - 処理オプションを指定します：
    - `1P0` = 部分一致を使用
    - `1P1` = 大文字小文字を無視
    - `1P2` = 判定結果を反転
    - `1P3` = 正規表現マッチングを使用
:::

:::tip[戻り値]
- **RESULT:0**
  - 検索条件に合致するキャラクターの数を返します。
:::

:::note[使用例]
```
#DIMS CHARADATA CARRAY, 10
#DIMS CHARADATA CARRAY_2D, 10, 10
PRINTVL CMATCH(CARRAY:0:5, "A+", 0, 8, 1P0 | 1P3)     ; インデックス 0 から 7 までのキャラクターの CARRAY:5 が "A+" を含む（部分一致）キャラクターの数を数えます。
PRINTVL CMATCH(CARRAY_2D:0:0:5, "Bb", 5, , 1P1 | 1P2) ; インデックス 5 から最後までのキャラクターの CARRAY_2D:0:5 が "Bb" と等しくない（大文字小文字無視）キャラクターの数を数えます。
```
:::

----
#### SUMARRAY

**`int SUMARRAY intArray array(, int start = 0, int end = lastDimLength)`**

第1パラメータ `array` は多次元整数配列を渡すことができます。

:::tip[パラメータ]
- **intArray array**
  - 合計する整数配列を指定します。
    - 多次元配列の場合：最後の次元の要素のみを処理し、前の次元のインデックス値は自分で指定する必要があります。
- **int start = 0**
  - 合計を開始するインデックスを指定します。
- **int end = lastDimLength**
  - 合計を終了するインデックス+1を指定します。省略時は配列の最後の次元の長さを使用します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 配列の合計値を返します。
:::

:::note[使用例]
```
#DIM ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
#DIM ARRAY_3D, 10, 10, 10
PRINTVL SUMARRAY(ARRAY, 0, 8)                     ; ARRAY:0 から ARRAY:7 までの値を合計します。
PRINTVL SUMARRAY(CARRAY_2D:TARGET:3:0, 5)         ; キャラクターTARGETの CARRAY_2D:3:5 から CARRAY_2D:3:9 までの値を合計します。
```
:::

----
#### SUMCARRAY

**`int SUMCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

第1パラメータ `array` は二次元キャラクター型整数配列を渡すことができます。

:::tip[パラメータ]
- **intCharaArray array**
  - 合計するキャラクター型整数配列を指定します。
    - 多次元配列の場合：最後の次元の要素のみを処理し、前の次元のインデックス値は自分で指定する必要があります。
- **int start = 0**
  - 合計を開始するキャラクターインデックスを指定します。
- **int end = charaCount**
  - 合計を終了するキャラクターインデックス+1を指定します。省略時はキャラクター総数を使用します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 配列の合計値を返します。
:::

:::note[使用例]
```
#DIM CHARADATA CARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL SUMCARRAY(CARRAY:0:5, 0, 8)              ; インデックス 0 から 7 までのキャラクターの CARRAY:5 の値を合計します。
PRINTVL SUMCARRAY(CARRAY_2D:0:0:5, 5)            ; インデックス 5 から最後までのキャラクターの CARRAY_2D:0:5 の値を合計します。
```
:::

----
#### VARSET

**`void VARSET anyArray array(, same value, int start = 0, int end = lastDimLength, int option = 0)`**

第5パラメータ `option` を追加しました。このパラメータを指定することで処理オプションを調整できます。

:::tip[パラメータ]
- **anyArray array**
  - 埋める任意の配列を指定します。
    - 多次元配列の場合：デフォルトではすべての次元の要素を処理します。`option` パラメータに `1P4` を渡すと、最後の次元のみを処理するように変更できます。
- **same value**
  - 埋める値を指定します。
- **int start = 0**
  - 埋め込みを開始するインデックスを指定します。
- **int end = lastDimLength**
  - 埋め込みを終了するインデックス+1を指定します。省略時は配列の最後の次元の長さを使用します。
- **int option = 0**
  - 処理オプションを指定します：
    - `1P4` = 最後の次元のみ
:::

:::note[使用例]
```
#DIM ARRAY, 10, 10
#DIM CHARADATA CARRAY, 10
VARSET ARRAY:0:0, 1, 5, 10       ; 各次元の 5 から 9 までの要素を 1 で埋めます。
VARSET ARRAY:3:0, 1, 5, 10, 1P4  ; ARRAY:3:5 から ARRAY:3:9 までの要素を 1 で埋めます。
VARSET CARRAY:TARGET:0, 1, 5, 10 ; キャラクターTARGETの CARRAY:5 から CARRAY:9 までの要素を 1 で埋めます。
```
:::

----
#### CVARSET

**`void CVARSET anyCharaArray array(, any key, same value, int start, int end)`**

第1パラメータ `array` は二次元キャラクター型配列を渡すことができます。第2パラメータ `key` は文字列キー値を入力できます。

----
#### VARSETEX

**`int VARSETEX string varName(, any value, int setAllDim, int start, int end)`**

第2パラメータ `value` は省略可能です。`varName` が指す配列の値の型と `value` の値の型が異なる場合、エラーが発生します。

----
#### VARSIZE

**`int VARSIZE string varName(, int dimension)`**

第2パラメータ `dimension` を省略すると、この命令は配列の最後の次元の長さを返します。`負数` を渡すと配列の総長を取得できます。

----
### 入力関連 {#InputRelated}

----
#### INPUTMOUSEKEY

**`void INPUTMOUSEKEY (int time = 0)`**

数字ボタンをクリックしたとき、この命令は受け取った数字を追加で `RESULTS:0` に出力します。

キーボード入力を受け取ったとき（つまり RESULT:0 == 3）、`RESULT:3` は修飾キーのキーコード値を受け取ります。

----
#### TWAIT

**`void TWAIT int time(, int flag = 0)`**

第2パラメータ `flag` は省略可能 `(0)` です。

----
### 画像関連 {#ImageRelated}

----
#### GCREATE

**`int GCREATE int GID, int width, int height`**

この命令は、画像を作成する前に既に作成された画像を解放します。つまり、作成前に [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 命令を呼び出す必要はありません。

----
#### GCREATEFROMFILE

**`int GCREATEFROMFILE int GID, str filepath`**

第2パラメータ `filepath` は、メインディレクトリからの相対パスであることを保証しなければなりません。例：`resources/image.png` または `erb/image.png`。

第3パラメータ `isRelative` は削除されました。

この命令は、画像を作成する前に既に作成された画像を解放します。つまり、作成前に [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 命令を呼び出す必要はありません。

----
#### GDASHSTYLE

**`int GDASHSTYLE int GID, int DashStyle, int DashCap`**

- グラフィックスライブラリの変更により、`DashCap` の入力値と効果は以下のように変更されました：
  - `0` = 線帽なし
  - `1` = 半円線帽
  - `2` = 半角線帽

----
#### GDRAWTEXT

**`int GDRAWTEXT int GID, str text(, int x = 0, int y = 0)`**

この命令は文字列の測定結果を返さなくなりました。つまり、`RESULT:0` 以外の戻り値は無効です。

この測定は追加の計算であり、結果は [**`GGETTEXTSIZE`**](https://evilmask.gitlab.io/emuera.em.doc/zh/Reference/GGETTEXTSIZE.html) 命令と同じであり、パフォーマンスオーバーヘッドがわずかにあるため、削除されました。

----
#### GDRAWGWITHMASK

**`int GDRAWGWITHMASK int destID, int srcID, int maskID, int destX, int destY`**

この命令のカラーアルゴリズムが改善され、`maskID` 画像のアルファ値とブルー値の両方が描画結果に影響を与えます。

----
#### GDRAWG

**`int GDRAWG int destID, int srcID`**

**`int GDRAWG int destID, int srcID, int destX, int destY`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

上記の4つのパラメータ形式を追加しました。また、`colorMatrix` パラメータは一次元整数配列を渡すことができます。  
`colorMatrix` パラメータを渡した場合、そのカラーマトリックスはこの描画時にのみ有効で、描画完了後に自動的にクリアされます。

すべてのパラメータ形式の `destWidth` と `destHeight` パラメータは `負数` を渡すことができ、反転した画像を描画します。

グラフィックスライブラリの変更により、カラーマトリックスの使用方法が変更されました。詳細は [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) 命令の説明を参照してください。

----
#### GDRAWSPRITE

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

上記の2つのパラメータ形式を追加しました。また、`colorMatrix` パラメータは一次元整数配列を渡すことができます。  
`colorMatrix` パラメータを渡した場合、そのカラーマトリックスはこの描画時にのみ有効で、描画完了後に自動的にクリアされます。

すべてのパラメータ形式の `destWidth` と `destHeight` パラメータは `負数` を渡すことができ、反転した画像を描画します。

グラフィックスライブラリの変更により、カラーマトリックスの使用方法が変更されました。詳細は [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) 命令の説明を参照してください。

----
#### GSAVE, GLOAD

**`int GSAVE int GID, any fileName`**

**`int GLOAD int GID, any fileName`**

第2パラメータ `fileName` は、数字だけでなく文字列もファイル保存パスとして指定できます。

**`GLOAD`** 命令は、画像を作成する前に既に作成された画像を解放します。つまり、作成前に [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 命令を呼び出す必要はありません。

:::note[使用例]
```
GSAVE 0, 11                               ; sav/img0011.png ファイルをエクスポートします。
GSAVE 0, "sav/New Folder/image"           ; sav/New Folder/image.png ファイルをエクスポートします。
GLOAD 0, "resources/New Folder/image"     ; resources/New Folder/image.png ファイルを読み込みます。
```
:::

----
#### SETANIMETIMER

**`void SETANIMETIMER int interval(, int duration)`**

第2パラメータ `duration` を追加しました。アニメーションを更新する持続時間をミリ秒単位で指定します。持続時間が過ぎると自動的にアニメーションの更新を停止します。

この命令は [**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) や [**`INPUTMOUSEKEY`**](#inputmousekey) などの時間待ちの場合でもアニメーションの更新を続けます。

----
#### SPRITECREATE

**`int SPRITECREATE str sprite, int GID`**

上記のパラメータ形式を追加しました。

この命令は、Spriteを作成する前に既に作成された非組み込みSpriteを解放します。つまり、作成前に [**`SPRITEDISPOSE`**](#spritedispose) 命令を呼び出す必要はありません。同じ名前の組み込みSpriteが既に存在する場合、作成は失敗します。

----
#### SPRITEANIMECREATE

**`int SPRITEANIMECREATE str sprite, int width, int height(, int isLoopFrame = 1)`**

第4パラメータ `isLoopFrame` を追加しました。このSpriteAnimeがループ再生するかどうかを指定します。省略または `非0` を入力するとループ再生します。

この命令は、Spriteを作成する前に既に作成された非組み込みSpriteを解放します。つまり、作成前に [**`SPRITEDISPOSE`**](#spritedispose) 命令を呼び出す必要はありません。同じ名前の組み込みSpriteが既に存在する場合、作成は失敗します。

----
#### SPRITEANIMEADDFRAME

**`int SPRITEANIMEADDFRAME str sprite, int delay`**

上記のパラメータ形式を追加しました。

この命令は `delay` が0の遅延フレームを受け入れることができ、変形効果を作成するために使用できます。

この命令は非組み込みSpriteAnimeに対してのみ有効です。

----
#### SPRITEDISPOSE

**`int SPRITEDISPOSE str sprite(, int disposeImg)`**

第2パラメータ `disposeImg` を追加しました。このSpriteが参照する画像を解放するかどうかを指定します。

----
#### SPRITEDISPOSEALL

**`void SPRITEDISPOSEALL (int disposeImage = 0)`**

- 第1パラメータ `disposeImage` の機能を変更しました。この命令は組み込みSpriteを削除する機能を持たなくなりました。省略可能 `(0)`。
  - `0` = すべてのランタイム作成の一時Spriteを削除します。
  - `非0` = すべての一時Spriteを削除し、すべての組み込みSpriteが参照する画像を解放します。参照する画像は呼び出し時に再ロードされます。

----
### オーディオ関連 {#AudioRelated}

----
#### PLAYBGM

**`int PLAYBGM str name(, int volume, int fadeIn = 0, int delay = 0)`**

第2から第4パラメータ `volume`、`fadeIn`、`delay` を追加しました。

第1パラメータ `name` はAudio名のみの入力をサポートします。オーディオファイルパスを介して再生するには、まず [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) 命令を使用してAudioを作成してください。  
組み込みAudioリソースを追加する方法については、[**`オーディオ機能`**](/#AudioFunc) セクションを参照してください。

**`int PLAYBGM (int fadeIn = 0, int delay = 0)`**

上記のパラメータ形式を追加しました。この形式は、一時停止した背景音楽の再生を再開するために使用します。

:::tip[パラメータ]
- **str name**
  - 再生するAudio名を指定します。
- **int volume**
  - 今回の再生音量を指定します。省略可能 `(Audioのプリセット音量を使用)`。
- **int fadeIn = 0**
  - フェードイン効果の持続時間を `ms（ミリ秒）` で指定します。入力値が `省略` または `0以下` の場合は効果なし。最大値は `10000` です。
- **int delay = 0**
  - 遅延再生の持続時間を `ms（ミリ秒）` で指定します。入力値が `省略` または `0以下` の場合は効果なし。最大値は `10000` です。
:::

:::tip[戻り値]
- **RESULT:0**
  - 再生が成功したかどうかを示します。成功時は `非0` を返します。Audioが存在しない、またはAudioの読み込みエラー時は `0` を返します。
:::

:::note[使用例]
```
PLAYBGM "MyMusic"                     ; 背景音楽 "MyMusic" を再生します。
PLAYBGM "MyMusic", 80                 ; 背景音楽 "MyMusic" を再生し、今回の再生音量は80です。
PLAYBGM "MyMusic", , 1500, 1000       ; 背景音楽 "MyMusic" を再生し、1000ms後に再生を開始し、開始時に1500msのフェードイン効果があります。
PAUSEBGM 1500                         ; 現在の背景音楽を一時停止し、停止時に1500msのフェードアウト効果があります。
PLAYBGM 1500                          ; 現在の背景音楽の再生を再開し、開始時に1500msのフェードイン効果があります。
```
:::

----
#### PLAYSOUND

**`int PLAYSOUND str name(, int volume, int groupID = 0, int delay = 0)`**

第2パラメータ `volume` を追加しました。今回の再生音量を指定します。  
第3パラメータ `groupID` を追加しました。今回の再生サウンドエフェクトグループを指定します。[**`STOPSOUND`**](modify_com#stopsound) 命令と組み合わせて同じサウンドエフェクトグループのすべてのサウンドエフェクトを停止できます。  
第4パラメータ `delay` を追加しました。今回の再生遅延をミリ秒単位で指定します。

第1パラメータ `name` はAudio名のみの入力をサポートします。オーディオファイルパスを介して再生するには、まず [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) 命令を使用してAudioを作成してください。  
組み込みAudioリソースを追加する方法については、[**`オーディオ機能`**](/#AudioFunc) セクションを参照してください。

:::tip[パラメータ]
- **str name**
  - 再生するAudio名を指定します。
- **int volume**
  - 今回の再生音量を指定します。省略可能 `(オーディオのプリセット音量を使用)`。
- **int groupID = 0**
  - 今回の再生サウンドエフェクトグループを指定します。省略可能 `(0)`。
- **int delay = 0**
  - 今回の再生遅延をミリ秒単位で指定します。省略可能 `(0)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - 再生が成功したかどうかを示します。成功時は `非0` を返します。Audioが存在しない、またはAudioの読み込みエラー時は `0` を返します。
:::

:::note[使用例]
```
PLAYSOUND "MySOUND"     ; サウンドエフェクト "MySOUND" を再生します。
PLAYSOUND "MySOUND", 80 ; サウンドエフェクト "MySOUND" を再生し、今回の再生音量は80です。
```
:::

----
#### SETBGMVOLUME

**`void SETBGMVOLUME int volume(, int fadeDuration = 0)`**

第2パラメータ `fadeDuration` を追加しました。音量変化時のフェード効果を `ms（ミリ秒）` で指定します。入力値が `省略` または `0以下` の場合は効果なし。最大値は `10000` です。

この命令は現在再生中の背景音楽の音量のみを変更し、グローバル音量には影響しなくなりました。

----
#### SETSOUNDVOLUME

この命令は廃止され、効果がなくなりました。

----
#### STOPBGM

**`void STOPBGM (int fadeOut = 0)`**

`fadeOut` パラメータを追加しました。入力値が `0より大きい` 場合、背景音楽停止時にフェードアウト効果があります。

:::tip[パラメータ]
- **int fadeOut = 0**
  - フェードアウト効果の持続時間を `ms（ミリ秒）` で指定します。入力値が `省略` または `0以下` の場合は効果なし。最大値は `10000` です。
:::

:::note[使用例]
```
STOPBGM 1500            ; 背景音楽を停止し、1500msのフェードアウト効果があります。
```
:::

----
#### STOPSOUND

**`void STOPSOUND (int groupID = 0)`**

`groupID` パラメータを追加しました。停止したいサウンドエフェクトグループを指定します。このパラメータを省略すると、すべてのサウンドエフェクトを停止します。

:::tip[パラメータ]
- **int groupID = 0**
  - 停止したいサウンドエフェクトグループを指定します。このパラメータを省略すると、すべてのサウンドエフェクトを停止します。
:::

:::note[使用例]
```
PLAYSOUND "MySOUND1", , 1 ; サウンドエフェクト "MySOUND1" を再生し、サウンドエフェクトグループを1に設定します。
PLAYSOUND "MySOUND2", , 2 ; サウンドエフェクト "MySOUND2" を再生し、サウンドエフェクトグループを2に設定します。
STOPSOUND 2                ; グループ2のすべてのサウンドエフェクトを停止します。
```
:::

----
### ファイル関連 {#FileRelated}

----
#### ENUMFILES

**`int ENUMFILES string dir(, string pattern, int option)`**

この命令で取得されるファイルパスのバックスラッシュ `\\` はスラッシュ `/` に置き換えられます。

----
#### EXISTFILE

**`int EXISTFILE str filePath(, int getInfo = 0)`**

`getInfo` パラメータを追加しました。ファイル情報を取得します。

:::tip[パラメータ]
- **str filePath**
  - ファイルパスを指定します。
- **int getInfo = 0**
  - ファイル情報を取得するかどうかを指定します。`非0` を入力すると、ファイル情報を `RESULT:1 - RESULT:4` に出力します。省略可能 `(0)`。
:::

:::tip[戻り値]
- **RESULT:0**
  - ファイルが存在するかどうかを示します。ファイルが存在する場合は `非0` を返します。
- **RESULT:1**
  - ファイルのサイズ（バイト単位）を示します。
- **RESULT:2**
  - ファイルの作成時刻（ミリ秒単位）を示します。
- **RESULT:3**
  - ファイルの最終変更時刻（ミリ秒単位）を示します。
- **RESULT:4**
  - ファイルの最終アクセス時刻（ミリ秒単位）を示します。
:::

----
### その他 {#Misc}

----
#### GETCONFIG

**`int GETCONFIG str value`**

- 取得可能な設定項目を以下に追加しました。
  - `ウィンドウ高さ` (Window Height)
  - `フレーム毎秒` (Frames Per Second)
  - `タブ文字幅` (Tab Character Width)

----
### 制御文 {#ControlStatement}

----
#### FOR-NEXT

**`FOR-NEXT int counter, int start, int end(, int step)`**

この制御文の開始値、終了値、ステップ値などの一時パラメータは、関数とともにスタックに出入りします。

----
#### REPEAT-REND

**`REPEAT-REND int loopCount`**

この制御文の開始値、終了値、ステップ値などの一時パラメータは、関数とともにスタックに出入りします。
