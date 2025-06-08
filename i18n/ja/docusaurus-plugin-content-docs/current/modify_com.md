---
sidebar_position: 2
sidebar_label: 変更コマンド
---

# 変更コマンド {#ModifyCom}

### 表示関連 {#DisplayRelated}

----
#### SETCOLORBYNAME, SETBGCOLORBYNAME

**`void SETCOLORBYNAME form colorName`**

**`void SETBGCOLORBYNAME form colorName`**

このコマンドの第1引数 `colorName` は、FORM構文を受け取るように変更されました。

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

このコマンドの別のパラメータ形式は、独立したコマンド [**`REPLACEBYARRAY`**](new_com#replacebyarray) に分離され、`flag` パラメータの機能が変更されました。

:::tip[パラメータ]
- **str source**
  - 処理するテキストを指定します。
- **str match**
  - マッチングに使用するテキストを指定します。
- **str newvalue**
  - 置換に使用するテキストを指定します。
- **int flag = 0**
  - テキスト処理方法を指定します。デフォルトは正規表現置換モードで、`非0` を指定するとプレーンテキスト置換モードになります。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 置換後の文字列を返します。
:::

----
#### SPLIT

**`void SPLIT str text(, str delimiter = ","), strArray array(, int result)`**

このコマンドの第2引数 `delimiter` は省略可能で、デフォルト値は `(",")` です。

第3引数 `array` には任意の文字列配列を渡すことができます。多次元配列の場合、このコマンドは最後の次元の要素のみを処理し、それ以前の次元のインデックス値を指定する必要があります。

----
#### STRCOUNT

**`int STRCOUNT str input, str match(, int option = 0)`**

- 第3引数 `option` が追加され、このパラメータを指定して処理オプションを調整できます。
  -  `1P0` = プレーンテキストマッチングモードを使用します。処理速度が速くなりますが、正規表現構文はサポートされません。
  -  `1P1` = 大文字と小文字を区別しません。

----
#### STRFIND

このコマンドは、Emoji文字を処理する際に表示幅を計算して文字の長さを取得します。

----
#### STRJOIN

**`str STRJOIN anyArray array(, str delimiter = ",", int start = 0, int count = lastDimLength)`**

このコマンドの第1引数 `array` には任意の配列を渡すことができます。

多次元配列の場合、このコマンドは最後の次元の要素のみを処理し、それ以前の次元のインデックス値を指定する必要があります。

:::tip[パラメータ]
- **anyArray array**
  - 結合する文字列の配列を指定します。
- **str delimiter = ","**
  - 文字列を結合する際に使用する区切り文字を指定します。
- **int start = 0**
  - 結合を開始するインデックスを指定します。
- **int count = lastDimLength**
  - 結合する要素数を指定します。省略時は配列の最終次元の長さが使用されます。
:::

:::tip[戻り値]
- **RESULTS:0**
  - 結合された文字列を返します。
:::

----
#### STRLEN, STRLENFORM

このコマンドは、Emoji文字を処理する際に表示幅を計算して文字の長さを取得します。

----
#### STRLENS

このコマンドは、Emoji文字を処理する際に表示幅を計算して文字の長さを取得します。

----
#### SUBSTRING

**`int SUBSTRING str text(, int start = 0, int length = totalLength)`**

このコマンドは、Emoji文字を処理する際に表示幅を計算して文字の長さを取得します。  
テキストの選択位置が長い文字の途中にある場合、その文字の開始位置に戻ります。つまり、開始位置にある文字はカウントされ、終了位置にある文字は無視されます。

----
### 変数、配列関連 {#VarAndArrayRelated}

----
#### ARRAYREMOVE

**`ARRAYREMOVE anyArray1D array, int start, int count, same emptyVal`**

第4引数 `emptyVal` が追加され、要素を移動した後の空白を埋める値を指定できます。デフォルトの埋め値は `0` または `空文字列` です。

このコマンドの第3引数 `count` に `負数` を指定すると、配列の全長として扱われます。

----
#### ARRAYSHIFT

**`ARRAYSHIFT anyArray1D array, int shiftCount, same emptyVal(, int start, int count)`**

このコマンドの第5引数 `count` に `負数` を指定すると、配列の全長として扱われます。

----
#### ARRAYSORT

**`ARRAYSORT anyArray1D array(, FORWARD or BACK, int start, int count)`**

このコマンドの第4引数 `count` に `負数` を指定すると、配列の全長として扱われます。

----
#### ERDNAME

この命令の第3引数を省略した場合、配列の最終次元にあるインデックスのキー名を取得します。

----
#### FINDELEMENT, FINDLASTELEMENT

**`int FINDELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int FINDLASTELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

このコマンドの第1引数 `array` には任意の配列を渡すことができます。第5引数 `option` の使用方法が変更され、このパラメータを指定して処理オプションを調整できます。

多次元配列の場合、このコマンドは最後の次元の要素のみを処理し、それ以前の次元のインデックス値を指定する必要があります。

:::tip[パラメータ]
- **anyArray array**
  - 検索する配列を指定します。
- **same target**
  - 検索する内容を指定します。
- **int start = 0**
  - 検索を開始するインデックスを指定します。
- **int end = lastDimLength**
  - 検索を終了するインデックス+1を指定します。省略時は配列の最後の次元の長さを使用します。
- **int option = 0**
  - 処理オプションを指定します：
    -  `1P0` = 完全一致を使用します。
    -  `1P1` = 大文字と小文字を区別しません。
    -  `1P2` = 判定結果を反転します。
    -  `1P3` = プレーンテキストマッチングを使用します。
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
#### INRANGEARRAY

**`int INRANGEARRAY intArray array, int min, int max(, int start = 0, int end = lastDimLength)`**

このコマンドの第1引数 `array` には任意の整数配列を渡すことができます。

多次元配列の場合、このコマンドは最後の次元の要素のみを処理し、それ以前の次元のインデックス値を指定する必要があります。

:::tip[パラメータ]
- **intArray array**
  - 任意の整数配列を指定します。
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

このコマンドの第1引数 `array` には任意のキャラクター型整数配列を渡すことができます。

多次元配列の場合、このコマンドは最後の次元の要素のみを処理し、それ以前の次元のインデックス値を指定する必要があります。

:::tip[パラメータ]
- **intCharaArray array**
  - 任意のキャラクター型整数配列を指定します。
- **int min**
  - 最小範囲値を指定します。
- **int max**
  - 最大範囲値を指定します。
- **int start = 0**
  - 開始キャラクターインデックスを指定します。
- **int end = charaCount**
  - 終了キャラクターインデックス+1を指定します。省略時はキャラクターの総数を使用します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 条件に合致する要素の数を返します。
:::

----
#### MINARRAY, MAXARRAY

**`int MINARRAY intArray array(, int start = 0, int end = lastDimLength)`**

**`int MAXARRAY intArray array(, int start = 0, int end = lastDimLength)`**

このコマンドの第1引数 `array` には任意の整数配列を渡すことができます。

多次元配列の場合、このコマンドは最後の次元の要素のみを処理し、それ以前の次元のインデックス値を指定する必要があります。

:::tip[パラメータ]
- **intArray array**
  - 任意の整数配列を指定します。
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

このコマンドの第1引数 `array` には任意の整数配列を渡すことができます。

多次元配列の場合、このコマンドは最後の次元の要素のみを処理し、それ以前の次元のインデックス値を指定する必要があります。

:::tip[パラメータ]
- **intCharaArray array**
  - 任意のキャラクター型整数配列を指定します。
- **int start = 0**
  - 開始キャラクターインデックスを指定します。
- **int end = charaCount**
  - 終了キャラクターインデックス+1を指定します。省略時はキャラクターの総数を使用します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 条件に合致する要素の値を返します。
:::

----
#### MATCH

**`int MATCH anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

このコマンドの第1引数 `array` には任意の配列を渡すことができます。第5引数 `option` が追加され、このパラメータを指定して処理オプションを調整できます。

多次元配列の場合、このコマンドは最後の次元の要素のみを処理し、それ以前の次元のインデックス値を指定する必要があります。

:::tip[パラメータ]
- **anyArray array**
  - 検索する配列を指定します。
- **same target**
  - 検索する内容を指定します。
- **int start = 0**
  - 検索を開始するインデックスを指定します。
- **int end = lastDimLength**
  - 検索を終了するインデックス+1を指定します。省略時は配列の最後の次元の長さを使用します。
- **int option = 0**
  - 処理オプションを指定します：
    -  `1P0` = 部分一致を使用します。
    -  `1P1` = 大文字と小文字を区別しません。
    -  `1P2` = 判定結果を反転します。
    -  `1P3` = 正規表現マッチングを使用します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 検索条件に合致する要素の数を返します。
:::

:::note[使用例]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P0 | 1P1)	; ARRAY:0 から ARRAY:7 の間で "AA" を含み、大文字と小文字を区別しない要素の数をカウントします。
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P2)		; ARRAY:0 から ARRAY:7 の間で "AA" と等しくない要素の数をカウントします。
PRINTVL MATCH(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)	; ARRAY:0 から ARRAY:7 の間で "\\d+" に部分一致する要素の数をカウントします。
PRINTVL MATCH(CARRAY_2D:TARGET:3:0, 22, 5)	; キャラクターTARGETの CARRAY_2D:3:5 から CARRAY_2D:3:9 の間で 22 と等しい要素の数をカウントします。
```
:::

----
#### CMATCH

**`int CMATCH anyCharaArray array, same target(, int start = 0, int end = charaCount, int option = 0)`**

このコマンドの第1引数 `array` には任意のキャラクター型配列を渡すことができます。第5引数 `option` が追加され、このパラメータを指定して処理オプションを調整できます。

多次元配列の場合、このコマンドは最後の次元の要素のみを処理し、それ以前の次元のインデックス値を指定する必要があります。

:::tip[パラメータ]
- **anyCharaArray array**
  - 検索するキャラクター型配列を指定します。
- **same target**
  - 検索する内容を指定します。
- **int start = 0**
  - 検索を開始するキャラクターインデックスを指定します。
- **int end = charaCount**
  - 検索を終了するキャラクターインデックス+1を指定します。省略時はキャラクターの総数を使用します。
- **int option = 0**
  - 処理オプションを指定します：
    -  `1P0` = 部分一致を使用します。
    -  `1P1` = 大文字と小文字を区別しません。
    -  `1P2` = 判定結果を反転します。
    -  `1P3` = 正規表現マッチングを使用します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 検索条件に合致するキャラクターの数を返します。
:::

:::note[使用例]
```
#DIMS CHARADATA CARRAY, 10
#DIMS CHARADATA CARRAY_2D, 10, 10
PRINTVL CMATCH(CARRAY:0:5, "A+", 0, 8, 1P0 | 1P3)	; キャラクターインデックス 0から7 の間で CARRAY:5 が "A+" にマッチするキャラクターの数をカウントします。
PRINTVL CMATCH(CARRAY_2D:0:0:5, "Bb", 5, , 1P1 | 1P2)	; キャラクターインデックス 5から最後のキャラクター の間で CARRAY_2D:0:5 が "Bb" と等しくない（大文字と小文字を区別しない）キャラクターの数をカウントします。
```
:::

----
#### SUMARRAY

**`int SUMARRAY intArray array(, int start = 0, int end = lastDimLength)`**

このコマンドの第1引数 `array` には任意の整数配列を渡すことができます。

多次元配列の場合、このコマンドは最後の次元の要素のみを処理し、それ以前の次元のインデックス値を指定する必要があります。

:::tip[パラメータ]
- **intArray array**
  - 合計を求める整数配列を指定します。
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
PRINTVL SUMARRAY(ARRAY, 0, 8)			; ARRAY:0 から ARRAY:7 の値を合計します。
PRINTVL SUMARRAY(CARRAY_2D:TARGET:3:0, 5)	; キャラクターTARGETの CARRAY_2D:3:5 から CARRAY_2D:3:9 の値を合計します。
```
:::

----
#### SUMCARRAY

**`int SUMCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

このコマンドの第1引数 `array` には任意のキャラクター型整数配列を渡すことができます。

多次元配列の場合、このコマンドは最後の次元の要素のみを処理し、それ以前の次元のインデックス値を指定する必要があります。

:::tip[パラメータ]
- **intCharaArray array**
  - 合計を求めるキャラクター型整数配列を指定します。
- **int start = 0**
  - 合計を開始するキャラクターインデックスを指定します。
- **int end = charaCount**
  - 合計を終了するキャラクターインデックス+1を指定します。省略時はキャラクターの総数を使用します。
:::

:::tip[戻り値]
- **RESULT:0**
  - 配列の合計値を返します。
:::

:::note[使用例]
```
#DIM CHARADATA CARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL SUMCARRAY(CARRAY:0:5, 0, 8)		; キャラクターインデックス 0から7 の CARRAY:5 の値を合計します。
PRINTVL SUMCARRAY(CARRAY_2D:0:0:5, 5)		; キャラクターインデックス 5から最後のキャラクター の CARRAY_2D:0:5 の値を合計します。
```
:::

----
#### VARSET

**`void VARSET anyArray array(, same value, int start = 0, int end = lastDimLength, int option = 0)`**

第5引数 `option` が追加され、このパラメータを指定して処理オプションを調整できます。

多次元配列の場合、デフォルトではすべての次元の要素を処理しますが、`option` パラメータに `1P4` を指定すると、最後の次元のみを処理します。

:::tip[パラメータ]
- **anyArray array**
  - 値を設定する任意の配列を指定します。
- **same value**
  - 設定する値を指定します。
- **int start = 0**
  - 設定を開始するインデックスを指定します。
- **int end = lastDimLength**
  - 設定を終了するインデックス+1を指定します。省略時は配列の最後の次元の長さを使用します。
- **int option = 0**
  - 処理オプションを指定します：
    -  `1P4` = 最後の次元のみを処理します。
:::

:::note[使用例]
```
#DIM ARRAY, 10, 10
#DIM CHARADATA CARRAY, 10
VARSET ARRAY:0:0, 1, 5, 10		; すべての次元の 5から9 の要素を1に設定します。
VARSET ARRAY:3:0, 1, 5, 10, 1P4		; ARRAY:3:5 から ARRAY:3:9 の要素を1に設定します。
VARSET CARRAY:TARGET:0, 1, 5, 10	; キャラクターTARGETの CARRAY:5 から CARRAY:9 の要素を1に設定します。
```
:::

----
#### CVARSET

**`void CVARSET anyCharaArray array(, any key, same value, int start, int end)`**

このコマンドの第1引数 `array` には任意のキャラクター型配列を渡すことができます。第2引数 `key` には文字列キーを指定できます。

----
#### VARSETEX

**`int VARSETEX string varName(, any value, int setAllDim, int start, int end)`**

このコマンドの第2引数 `value` は省略可能です。`varName` が指す配列と `value` の型が異なる場合、エラーが発生します。

----
#### VARSIZE

**`int VARSIZE string varName(, int dimension)`**

第2引数 `dimension` を省略すると、このコマンドは配列の最後の次元の長さを返します。`負数` を指定すると、配列の全長を取得できます。

----
### 入力関連 {#InputRelated}

----
#### INPUTMOUSEKEY

**`void INPUTMOUSEKEY (int time = 0)`**

数字ボタンをクリックすると、このコマンドは受け取った数字を `RESULTS:0` に出力します。

キーボード入力を受け取った場合（RESULT:0 == 3）、`RESULT:3` には修飾キーのキーコードが出力されます。

----
#### TWAIT

**`void TWAIT int time(, int flag = 0)`**

このコマンドの第2引数 `flag` は省略可能で、デフォルト値は `0` です。

----
### 画像関連 {#ImageRelated}

----
#### GCREATE

**`int GCREATE int GID, int width, int height`**

このコマンドは、画像を作成する前に既存の画像を解放するため、事前に [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) コマンドを呼び出す必要はありません。

----
#### GCREATEFROMFILE

**`int GCREATEFROMFILE int GID, str filepath`**

このコマンドの第2引数 `filepath` は、メインディレクトリからの相対パスである必要があります。例えば `resources/image.png` や `erb/image.png` などです。

第3引数 `isRelative` は削除されました。

このコマンドは、画像を作成する前に既存の画像を解放するため、事前に [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) コマンドを呼び出す必要はありません。

----
#### GDASHSTYLE

**`int GDASHSTYLE int GID, int DashStyle, int DashCap`**

- グラフィックライブラリの変更により、`DashCap` の入力値と効果が以下のように変更されました：
  -  `0` = 線キャップなし
  -  `1` = 半円線キャップ
  -  `2` = 半方形線キャップ

----
#### GDRAWTEXT

**`int GDRAWTEXT int GID, str text(, int x = 0, int y = 0)`**

このコマンドは、文字列の測定結果を返さなくなりました。つまり、`RESULT:0` 以外の戻り値は無効です。

この測定結果は追加で計算されており、その結果は [**`GGETTEXTSIZE`**](https://evilmask.gitlab.io/emuera.em.doc/zh/Reference/GGETTEXTSIZE.html) コマンドと同じです。パフォーマンスのオーバーヘッドが若干高いため、削除されました。

----
#### GDRAWGWITHMASK

**`int GDRAWGWITHMASK int destID, int srcID, int maskID, int destX, int destY`**

このコマンドのカラーアルゴリズムが改善され、`maskID` 画像のアルファ値とブルー値が描画結果に影響を与えるようになりました。

----
#### GDRAWG

**`int GDRAWG int destID, int srcID`**

**`int GDRAWG int destID, int srcID, int destX, int destY`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

上記の4つのパラメータ形式が追加され、`colorMatrix` パラメータには任意の整数配列を渡すことができます。  
`colorMatrix` パラメータを指定すると、このカラーマトリックスは今回の描画にのみ適用され、描画後に自動的にクリアされます。

すべてのパラメータ形式で、`destWidth` と `destHeight` に `負数` を指定すると、反転した画像を描画します。

グラフィックライブラリの変更により、カラーマトリックスの使用方法が変更されました。詳細は [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) コマンドの説明を参照してください。

----
#### GDRAWSPRITE

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

上記の2つのパラメータ形式が追加され、`colorMatrix` パラメータには任意の整数配列を渡すことができます。  
`colorMatrix` パラメータを指定すると、このカラーマトリックスは今回の描画にのみ適用され、描画後に自動的にクリアされます。

すべてのパラメータ形式で、`destWidth` と `destHeight` に `負数` を指定すると、反転した画像を描画します。

グラフィックライブラリの変更により、カラーマトリックスの使用方法が変更されました。詳細は [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) コマンドの説明を参照してください。

----
#### GSAVE, GLOAD

**`int GSAVE int GID, any fileName`**

**`int GLOAD int GID, any fileName`**

このコマンドの第2引数 `fileName` には、数字だけでなく、ファイルの保存パスとして文字列を指定することもできます。

**`GLOAD`** コマンドは、画像を作成する前に既存の画像を解放するため、事前に [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) コマンドを呼び出す必要はありません。

:::note[使用例]
```
GSAVE 0, 11				; sav/img0011.png ファイルをエクスポートします。
GSAVE 0, "sav/New Folder/image"		; sav/New Folder/image.png ファイルをエクスポートします。
GLOAD 0, "resources/New Folder/image"	; resources/New Folder/image.png ファイルを読み込みます。
```
:::

----
#### SETANIMETIMER

**`void SETANIMETIMER int interval(, int duration)`**

第2引数 `duration` が追加され、アニメーションの更新期間を指定できます。単位はミリ秒で、指定時間が経過すると自動的にアニメーションの更新が停止します。

このコマンドは、[**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) や [**`INPUTMOUSEKEY`**](#inputmousekey) のようなタイマー待機中でもアニメーションの更新を続けます。

----
#### SPRITECREATE

**`int SPRITECREATE str sprite, int GID`**

上記の1つのパラメータ形式が追加されました。

このコマンドは、Spriteを作成する前に既存の非組み込みSpriteを解放するため、事前に [**`SPRITEDISPOSE`**](#spritedispose) コマンドを呼び出す必要はありません。同じ名前の組み込みSpriteが既に存在する場合、作成に失敗します。

----
#### SPRITEANIMECREATE

**`int SPRITEANIMECREATE str sprite, int width, int height(, int isLoopFrame = 1)`**

第4引数 `isLoopFrame` が追加され、このSpriteAnimeがループ再生するかどうかを指定できます。省略または `非0` の値を指定するとループ再生します。

このコマンドは、Spriteを作成する前に既存の非組み込みSpriteを解放するため、事前に [**`SPRITEDISPOSE`**](#spritedispose) コマンドを呼び出す必要はありません。同じ名前の組み込みSpriteが既に存在する場合、作成に失敗します。

----
#### SPRITEANIMEADDFRAME

**`int SPRITEANIMEADDFRAME str sprite, int delay`**

上記の1つのパラメータ形式が追加されました。

このコマンドは、`delay` に0を指定することができ、変化効果を作成するために使用できます。

このコマンドは、非組み込みのSpriteAnimeに対してのみ有効です。

----
#### SPRITEDISPOSE

**`int SPRITEDISPOSE str sprite(, int disposeImg)`**

第2引数 `disposeImg` が追加され、このSpriteが参照する画像を解放するかどうかを指定できます。

----
#### SPRITEDISPOSEALL

**`void SPRITEDISPOSEALL (int disposeImage = 0)`**

- 第1引数 `disposeImage` の機能が変更され、このコマンドは組み込みSpriteを削除する機能を持たなくなりました。省略可能で、デフォルト値は `0` です。
  -  `0` = 実行時に作成されたすべての一時的なSpriteを削除します。
  -  `非0` = すべての一時的なSpriteを削除し、すべての組み込みSpriteが参照する画像を解放します。参照する画像は呼び出し時に再読み込みされます。

----
### オーディオ関連 {#AudioRelated}

----
#### PLAYBGM

**`int PLAYBGM str name(, int volume, int fadeIn = 0, int delay = 0)`**

第2から第4引数 `volume`、`fadeIn`、`delay` が追加されました。

第1引数 `name` はAudio名のみをサポートします。オーディオファイルのパスで再生する場合は、先に [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) コマンドを使用してAudioを作成してください。  
組み込みのAudioリソースを追加する方法については、[**`オーディオ機能`**](/#AudioFunc) のセクションを参照してください。

**`int PLAYBGM (int fadeIn = 0, int delay = 0)`**

上記の1つのパラメータ形式が追加されました。この形式は、一時停止中のBGMを再開するために使用されます。

:::tip[パラメータ]
- **str name**
  - 再生するAudio名を指定します。
- **int volume**
  - 今回の再生音量を指定します。省略可能で、デフォルトはAudioのプリセット音量です。
- **int fadeIn = 0**
  - フェードイン効果の持続時間を指定します。単位は `ms(ミリ秒)` で、省略または `0以下` の場合は効果なし、最大値は `10000` です。
- **int delay = 0**
  - 遅延再生の持続時間を指定します。単位は `ms(ミリ秒)` で、省略または `0以下` の場合は効果なし、最大値は `10000` です。
:::

:::tip[戻り値]
- **RESULT:0**
  - 再生が成功したかどうかを示します。成功時は `非0` を返します。Audioが存在しないか、Audioの読み込みエラーが発生した場合は `0` を返します。
:::

:::note[使用例]
```
PLAYBGM "MyMusic"			; BGM「MyMusic」を再生します。
PLAYBGM "MyMusic", 80			; BGM「MyMusic」を再生し、今回の音量を80に設定します。
PLAYBGM "MyMusic", , 1500, 1000		; BGM「MyMusic」を再生し、1000ms後に再生を開始し、1500msのフェードイン効果を適用します。
PAUSEBGM 1500				; 現在のBGMを一時停止し、1500msのフェードアウト効果を適用します。
PLAYBGM 1500				; 現在のBGMを再開し、1500msのフェードイン効果を適用します。
```
:::

----
#### PLAYSOUND

**`int PLAYSOUND str name(, int volume)`**

第2引数 `volume` が追加され、今回の再生音量を指定できます。

第1引数 `name` はAudio名のみをサポートします。オーディオファイルのパスで再生する場合は、先に [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) コマンドを使用してAudioを作成してください。  
組み込みのAudioリソースを追加する方法については、[**`オーディオ機能`**](/#AudioFunc) のセクションを参照してください。

:::tip[パラメータ]
- **str name**
  - 再生するAudio名を指定します。
- **int volume**
  - 今回の再生音量を指定します。省略可能で、デフォルトはオーディオのプリセット音量です。
:::

:::tip[戻り値]
- **RESULT:0**
  - 再生が成功したかどうかを示します。成功時は `非0` を返します。Audioが存在しないか、Audioの読み込みエラーが発生した場合は `0` を返します。
:::

:::note[使用例]
```
PLAYSOUND "MySOUND"			; 効果音「MySOUND」を再生します。
PLAYSOUND "MySOUND", 80			; 効果音「MySOUND」を再生し、今回の音量を80に設定します。
```
:::

----
#### SETBGMVOLUME

**`void SETBGMVOLUME int volume(, int fadeDuration = 0)`**

第2引数 `fadeDuration` が追加され、音量変更時のフェード効果を指定できます。単位は `ms(ミリ秒)` で、省略または `0以下` の場合は効果なし、最大値は `10000` です。

このコマンドは、現在再生中のBGMの音量のみを変更し、グローバル音量には影響しません。

----
#### SETSOUNDVOLUME

このコマンドは非推奨となり、効果はありません。

----
#### STOPBGM

**`void STOPBGM (int fadeOut = 0)`**

`fadeOut` パラメータが追加され、`0より大きい` 値を指定すると、BGM停止時にフェードアウト効果が適用されます。

:::tip[パラメータ]
- **int fadeOut = 0**
  - フェードアウト効果の持続時間を指定します。単位は `ms(ミリ秒)` で、省略または `0以下` の場合は効果なし、最大値は `10000` です。
:::

:::note[使用例]
```
STOPBGM	1500			; BGMを停止し、1500msのフェードアウト効果を適用します。
```
:::

----
### ファイル関連 {#FileRelated}

----
#### ENUMFILES

**`int ENUMFILES string dir(, string pattern, int option)`**

このコマンドで取得するファイルパスのバックスラッシュ `\\` は、スラッシュ `/` に置き換えられます。

----
#### EXISTFILE

**`int EXISTFILE str filePath(, int getInfo = 0)`**

`getInfo` パラメータが追加され、ファイル情報を取得できます。

:::tip[パラメータ]
- **str filePath**
  - ファイルパスを指定します。
- **int getInfo = 0**
  - ファイル情報を取得するかどうかを指定します。`非0` を指定すると、ファイル情報が `RESULT:1 - RESULT:4` に出力されます。省略可能で、デフォルトは `0` です。
:::

:::tip[戻り値]
- **RESULT:0**
  - ファイルが存在するかどうかを示します。ファイルが存在する場合は `非0` を返します。
- **RESULT:1**
  - ファイルのサイズをバイト単位で示します。
- **RESULT:2**
  - ファイルの作成時間をミリ秒単位で示します。
- **RESULT:3**
  - ファイルの最終更新時間をミリ秒単位で示します。
- **RESULT:4**
  - ファイルの最終アクセス時間をミリ秒単位で示します。
:::

----
### その他 {#Misc}

----
#### GETCONFIG

**`int GETCONFIG str value`**

- 以下の設定項目を取得できるようになりました。
  - `ウィンドウ高さ`
  - `フレーム毎秒`
  - `タブ文字幅`
