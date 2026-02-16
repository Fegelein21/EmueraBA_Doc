---
sidebar_position: 2
sidebar_label: 改动指令
---

# 改动指令 {#ModifyCom}

### 显示相关 {#DisplayRelated}

----
#### SETCOLORBYNAME, SETBGCOLORBYNAME

**`void SETCOLORBYNAME form colorName`**

**`void SETBGCOLORBYNAME form colorName`**

该指令的第1参数 `colorName` 改为接收FORM语法。

:::note[使用例]
```
SETCOLORBYNAME RED

LOCALS '= "BLUE"
SETBGCOLORBYNAME %LOCALS%
```
:::

----
### 文本处理相关 {#TextProcessRelated}

----
#### REPLACE

**`str REPLACE str source, str match, str newvalue(, int flag = 0)`**

该指令的另外1种参数格式被分离为独立指令 [**`REPLACEBYARRAY`**](new_com#replacebyarray) ，以及更改了 `flag` 参数的功能。

:::tip[参数]
- **str source**
  - 指定需要处理的文本。
- **str match**
  - 指定用于匹配的文本。
- **str newvalue**
  - 指定用于替换的文本。
- **int flag = 0**
  - 指定文本处理方式，默认为正则替换模式，输入 `非0` 时使用纯文本替换模式。
:::

:::tip[返回值]
- **RESULTS:0**
  - 返回替换后的字符串。
:::

----
#### SPLIT

**`void SPLIT str text(, str delimiter = ","), strArray array(, int result)`**

该指令的第2参数 `delimiter` 可省略，默认值为 `(",")`。

第3参数 `array` 可传入多维数组。  
对于多维数组：仅处理最后一维的元素，且需要自行指定之前的维索引值。

----
#### STRCOUNT

**`int STRCOUNT str input, str match(, int option = 0)`**

- 新增第3参数 `option`，可通过指定该参数调整处理选项。
  -  `1P0` = 使用纯文本匹配模式，处理速度更快但不支持正则语法
  -  `1P1` = 忽略大小写

----
#### STRFIND

该指令在处理Emoji字符时会通过计算显示宽度得出字符长度。

----
#### STRJOIN

**`str STRJOIN any Array_List_HashList(, str delimiter = ",", int start = 0, int count = lastDimLength)`**

该指令的第1参数 `Array_List_HashList` 可传入任意型可引用数组、列表、哈希列表。

:::tip[参数]
- **any Array_List_HashList**
  - 指定需要合并字符串的任意型可引用数组、列表、哈希列表。
    - 对于多维数组：仅处理最后一维的元素，且需要自行指定之前的维索引值。
- **str delimiter = ","**
  - 指定合并字符串时使用的分隔符。
- **int start = 0**
  - 指定合并的开始索引。
- **int count = lastDimLength**
  - 指定合并的元素数，省略时使用数组最后一维的长度、或列表的总长度。
:::

:::tip[返回值]
- **RESULTS:0**
  - 返回合并后的字符串。
:::

----
#### STRLEN, STRLENFORM

该指令在处理Emoji字符时会通过计算显示宽度得出字符长度。

----
#### STRLENS

该指令在处理Emoji字符时会通过计算显示宽度得出字符长度。

----
#### SUBSTRING

**`int SUBSTRING str text(, int start = 0, int length = totalLength)`**

该指令在处理Emoji字符时会通过计算显示宽度得出字符长度。  
如果文本的选定位置处在长字符的中间，则后退到该字符的起始位置。也就是说，卡在起始位置的字符会被计入，卡在末尾位置的字符会被无视。

:::note[使用例]
```
PRINTSL SUBSTRING("１２３", 1, 4)		;打印“１２”。
PRINTSL SUBSTRING("１😀３", 1, 4)		;打印“１😀”。
```
:::

----
### 变量、数组相关 {#VarAndArrayRelated}

----
#### ARRAYCOPY

**`void ARRAYCOPY str srcArrayName, str destVarName(, int isLastDimOnly = 0)`**

新增第3参数 `isLastDimOnly`，用于指定是否仅复制源数组的最后一维的元素，可省略 (`0`) 。

第2参数 `destVarName` 支持传入列表和哈希列表的变量名，当 `isLastDimOnly` 的参数值为 `0` 时，源数组中的所有元素将会添加到目标列表中。

----
#### ARRAYREMOVE

**`void ARRAYREMOVE anyArray1D array, int start, int count, same emptyVal`**

新增第4参数 `emptyVal`，用于指定移动元素后的空白填充值，默认的填充值为 `0` 或 `空字符串`。

该指令的第3参数 `count` 指定为 `负数` 时视为数组的总长度。

----
#### ARRAYSHIFT

**`void ARRAYSHIFT anyArray1D array, int shiftCount, same emptyVal(, int start, int count)`**

该指令的第5参数 `count` 指定为 `负数` 时视为数组的总长度。

----
#### ARRAYSORT

**`void ARRAYSORT any Array1D_List(, FORWARD or BACK, int start, int count)`**

该指令的第1参数 `Array1D_List` 支持传入列表。

第4参数 `count` 指定为 `负数` 时视为数组或列表的总长度。

----
#### ARRAYMSORT

**`int ARRAYMSORT any Array1D_List(, sameParams Array_List)`**

该指令的第1参数 `Array1D_List` 可传入任意型可引用一维数组、列表。

后续的参数 `Array_List` 可传入数组、列表。

:::tip[参数]
- **any Array1D_List**
  - 指定用于作为排序依据的任意型可引用一维数组、列表。  
    此参数本身的值也会被排序。
- **sameParams Array_List**
  - 指定一个或多个需要排序的可引用数组、列表，值类型要与首个参数的值类型一致。
:::

:::tip[返回值]
- **RESULT:0**
  - 返回排序结果，排序成功或无需排序时返回 `非0`，否则返回 `0`。
:::

----
#### ERDNAME

该指令省略第3参数时将会查找数组最后一维的下标键词。

----
#### FINDELEMENT, FINDLASTELEMENT

**`int FINDELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int FINDLASTELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

该指令的第1参数 `array` 可传入多维数组。修改了第5参数 `option` 的用法，可通过指定该参数调整处理选项。

:::tip[参数]
- **anyArray array**
  - 指定需要检索的任意数组。
    - 对于多维数组：仅处理最后一维的元素，且需要自行指定之前的维索引值。
- **same target**
  - 指定需要检索的内容。
- **int start = 0**
  - 指定检索的开始索引。
- **int end = lastDimLength**
  - 指定检索的结束索引+1，省略时使用数组最后一维的长度。
- **int option = 0**
  - 指定处理选项：
    -  `1P0` = 使用完全匹配
    -  `1P1` = 忽略大小写
    -  `1P2` = 反转判断结果
    -  `1P3` = 使用纯文本匹配
:::

:::tip[返回值]
- **RESULT:0**
  - 返回符合检索要求的首个索引值，未找到时返回 `-1`。
:::

:::note[使用例]
```
LOCAL = FINDELEMENT(LOCALS, "WORD", , , 1P0 | 1P1)
```
:::

----
#### INRANGE

**`int INRANGE any value, same minValue, same maxValue`**

该指令的第1参数 `value` 可传入字符串，用于判断字符串的顺位是否在指定范围内。

:::tip[参数]
- **any value**
  - 指定需要判断的值。
- **same minValue**
  - 指定最小范围值，变量的值类型要与首个参数的值类型一致。
- **same maxValue**
  - 指定最大范围值，变量的值类型要与首个参数的值类型一致。
:::

:::tip[返回值]
- **RESULT:0**
  - 返回判断结果，值在指定范围内时返回 `非0`，否则返回 `0`。
:::

:::note[使用例]
```
PRINTVL INRANGE(11, 10, 20)		; 打印“1”
PRINTVL INRANGE(21, 10, 20)		; 打印“0”
PRINTVL INRANGE("b", "a", "c")		; 打印“1”
PRINTVL INRANGE("banana", "b", "c")	; 打印“1”
PRINTVL INRANGE("can", "a", "c")	; 打印“0”
```
:::

----
#### INRANGEARRAY

**`int INRANGEARRAY intArray array, int min, int max(, int start = 0, int end = lastDimLength)`**

该指令的第1参数 `array` 可传入多维整数数组。

:::tip[参数]
- **intArray array**
  - 指定任意整数数组。
    - 对于多维数组：仅处理最后一维的元素，且需要自行指定之前的维索引值。
- **int min**
  - 指定最小范围值。
- **int max**
  - 指定最大范围值。
- **int start = 0**
  - 指定开始索引。
- **int end = lastDimLength**
  - 指定结束索引+1，省略时使用数组最后一维的长度。
:::

:::tip[返回值]
- **RESULT:0**
  - 返回符合要求的元素个数。
:::

----
#### INRANGECARRAY

**`int INRANGECARRAY intCharaArray array, int min, int max(, int start = 0, int end = charaCount)`**

该指令的第1参数 `array` 可传入二维角色型整数数组。

:::tip[参数]
- **intCharaArray array**
  - 指定任意角色型整数数组。
    - 对于多维数组：仅处理最后一维的元素，且需要自行指定之前的维索引值。
- **int min**
  - 指定最小范围值。
- **int max**
  - 指定最大范围值。
- **int start = 0**
  - 指定开始角色索引。
- **int end = charaCount**
  - 指定结束角色索引+1，省略时使用角色总数。
:::

:::tip[返回值]
- **RESULT:0**
  - 返回符合要求的元素个数。
:::

----
#### MINARRAY, MAXARRAY

**`int MINARRAY intArray array(, int start = 0, int end = lastDimLength)`**

**`int MAXARRAY intArray array(, int start = 0, int end = lastDimLength)`**

该指令的第1参数 `array` 可传入多维整数数组。

:::tip[参数]
- **intArray array**
  - 指定任意整数数组。
    - 对于多维数组：仅处理最后一维的元素，且需要自行指定之前的维索引值。
- **int start = 0**
  - 指定开始索引。
- **int end = lastDimLength**
  - 指定结束索引+1，省略时使用数组最后一维的长度。
:::

:::tip[返回值]
- **RESULT:0**
  - 返回符合要求的元素值。
:::

----
#### MINCARRAY, MAXCARRAY

**`int MINCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

**`int MAXCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

该指令的第1参数 `array` 可传入二维整数数组。

:::tip[参数]
- **intCharaArray array**
  - 指定任意角色型整数数组。
    - 对于多维数组：仅处理最后一维的元素，且需要自行指定之前的维索引值。
- **int start = 0**
  - 指定开始角色索引。
- **int end = charaCount**
  - 指定结束角色索引+1，省略时使用角色总数。
:::

:::tip[返回值]
- **RESULT:0**
  - 返回符合要求的元素值。
:::

----
#### MATCH

**`int MATCH anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

该指令的第1参数 `array` 可传入多维数组。新增第5参数 `option`，可通过指定该参数调整处理选项。

:::tip[参数]
- **anyArray array**
  - 指定需要检索的任意数组。
    - 对于多维数组：仅处理最后一维的元素，且需要自行指定之前的维索引值。
- **same target**
  - 指定需要检索的内容。
- **int start = 0**
  - 指定检索的开始索引。
- **int end = lastDimLength**
  - 指定检索的结束索引+1，省略时使用数组最后一维的长度。
- **int option = 0**
  - 指定处理选项：
    -  `1P0` = 使用部分匹配
    -  `1P1` = 忽略大小写
    -  `1P2` = 反转判断结果
    -  `1P3` = 使用正则匹配
:::

:::tip[返回值]
- **RESULT:0**
  - 返回符合检索要求的元素个数。
:::

:::note[使用例]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P0 | 1P1)	;统计 ARRAY:0 至 ARRAY:7 中包含"AA"且忽略大小写的元素个数
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P2)		;统计 ARRAY:0 至 ARRAY:7 中不等于"AA"的元素个数
PRINTVL MATCH(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)	;统计 ARRAY:0 至 ARRAY:7 中部分匹配到"\\d+"的元素个数
PRINTVL MATCH(CARRAY_2D:TARGET:3:0, 22, 5)	;统计角色TARGET的 CARRAY_2D:3:5 至 CARRAY_2D:3:9 中等于22的元素个数
```
:::

----
#### CMATCH

**`int CMATCH anyCharaArray array, same target(, int start = 0, int end = charaCount, int option = 0)`**

该指令的第1参数 `array` 可传入二维角色型数组。新增第5参数 `option`，可通过指定该参数调整处理选项。

:::tip[参数]
- **anyCharaArray array**
  - 指定需要检索的角色型数组。
    - 对于多维数组：仅处理最后一维的元素，且需要自行指定之前的维索引值。
- **same target**
  - 指定需要检索的内容。
- **int start = 0**
  - 指定检索的开始角色索引。
- **int end = charaCount**
  - 指定检索的结束角色索引+1，省略时使用角色总数。
- **int option = 0**
  - 指定处理选项：
    -  `1P0` = 使用部分匹配
    -  `1P1` = 忽略大小写
    -  `1P2` = 反转判断结果
    -  `1P3` = 使用正则匹配
:::

:::tip[返回值]
- **RESULT:0**
  - 返回符合检索要求的角色个数。
:::

:::note[使用例]
```
#DIMS CHARADATA CARRAY, 10
#DIMS CHARADATA CARRAY_2D, 10, 10
PRINTVL CMATCH(CARRAY:0:5, "A+", 0, 8, 1P0 | 1P3)	;统计角色索引 0至7 中 CARRAY:5 匹配到包含"A+"的角色个数
PRINTVL CMATCH(CARRAY_2D:0:0:5, "Bb", 5, , 1P1 | 1P2)	;统计角色索引 5至最后一位 中 CARRAY_2D:0:5 不等于忽略大小写的"Bb"的角色个数
```
:::

----
#### SUMARRAY

**`int SUMARRAY intArray array(, int start = 0, int end = lastDimLength)`**

该指令的第1参数 `array` 可传入多维整数数组。

:::tip[参数]
- **intArray array**
  - 指定需要总和的整数数组。
    - 对于多维数组：仅处理最后一维的元素，且需要自行指定之前的维索引值。
- **int start = 0**
  - 指定总和的开始索引。
- **int end = lastDimLength**
  - 指定总和的结束索引+1，省略时使用数组最后一维的长度。
:::

:::tip[返回值]
- **RESULT:0**
  - 返回数组的总和值。
:::

:::note[使用例]
```
#DIM ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
#DIM ARRAY_3D, 10, 10, 10
PRINTVL SUMARRAY(ARRAY, 0, 8)			;总和 ARRAY:0 - ARRAY:7 的值
PRINTVL SUMARRAY(CARRAY_2D:TARGET:3:0, 5)	;总和角色TARGET的 CARRAY_2D:3:5 - CARRAY_2D:3:9 的值
```
:::

----
#### SUMCARRAY

**`int SUMCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

该指令的第1参数 `array` 可传入二维角色型整数数组。

:::tip[参数]
- **intCharaArray array**
  - 指定需要总和的角色型整数数组。
    - 对于多维数组：仅处理最后一维的元素，且需要自行指定之前的维索引值。
- **int start = 0**
  - 指定总和的开始角色索引。
- **int end = charaCount**
  - 指定总和的结束角色索引+1，省略时使用角色总数。
:::

:::tip[返回值]
- **RESULT:0**
  - 返回数组的总和值。
:::

:::note[使用例]
```
#DIM CHARADATA CARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL SUMCARRAY(CARRAY:0:5, 0, 8)		;总和角色索引 0-7 的 CARRAY:5 的值
PRINTVL SUMCARRAY(CARRAY_2D:0:0:5, 5)		;总和角色索引 5-最后一位 的 CARRAY_2D:0:5 的值
```
:::

----
#### VARSET

**`void VARSET anyArray array(, same value, int start = 0, int end = lastDimLength, int option = 0)`**

新增第5参数 `option`，可通过指定该参数调整处理选项。

:::tip[参数]
- **anyArray array**
  - 指定需要填充的任意数组。
    - 对于多维数组：默认处理所有维数的元素，可在 `option` 参数中传入 `1P4` 改为仅处理最后一维。
- **same value**
  - 指定需要填充的值。
- **int start = 0**
  - 指定填充的开始索引。
- **int end = lastDimLength**
  - 指定填充的结束索引+1，省略时使用数组最后一维的长度。
- **int option = 0**
  - 指定处理选项：
    -  `1P4` = 仅最后一维
:::

:::note[使用例]
```
#DIM ARRAY, 10, 10
#DIM CHARADATA CARRAY, 10
VARSET ARRAY:0:0, 1, 5, 10		; 把每一维的 5至9 以内的元素填充为1
VARSET ARRAY:3:0, 1, 5, 10, 1P4		; 把 ARRAY:3:5 至 ARRAY:3:9 以内的元素填充为1
VARSET CARRAY:TARGET:0, 1, 5, 10	; 把角色TARGET的 CARRAY:5 至 CARRAY:9 以内的元素填充为1
```
:::

----
#### CVARSET

**`void CVARSET anyCharaArray array(, any key, same value, int start, int end)`**

该指令的第1参数 `array` 可传入二维角色型数组。第2参数 `key` 可输入字符串键值。

----
#### VARSETEX

**`int VARSETEX string varName(, any value, int setAllDim, int start, int end)`**

该指令的第2参数 `value` 可省略，当 `varName` 代指的数组与 `value` 的值类型不同时会报错。

----
#### VARSIZE

**`int VARSIZE string varName(, int dimension)`**

省略第2参数 `dimension` 时，该指令将返回数组最后一维的长度，且传入 `负数` 时可获取数组的总长度。

----
### 输入相关 {#InputRelated}

----
#### INPUTMOUSEKEY

**`void INPUTMOUSEKEY (int time = 0)`**

点击数字按钮时，该指令会额外将接收到的数字输出到 `RESULTS:0` 中。

接收键盘输入时(即RESULT:0 == 3)，`RESULT:3` 将会接收修改键的键码值。

----
#### TWAIT

**`void TWAIT int time(, int flag = 0)`**

该指令的第2参数 `flag` 可省略 `(0)`。

----
### 图像相关 {#ImageRelated}

----
#### GCREATE

**`int GCREATE int GID, int width, int height`**

该指令在创建图像前会释放已创建的图像，即无需在创建前调用 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 指令。

----
#### GCREATEFROMFILE

**`int GCREATEFROMFILE int GID, str filepath`**

该指令的第2参数 `filepath` 必须确保是从主目录开始的相对路径，例如 `resources/image.png` 或者 `erb/image.png`。

该指令的第3参数 `isRelative` 已被移除。

该指令在创建图像前会释放已创建的图像，即无需在创建前调用 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 指令。

----
#### GDASHSTYLE

**`int GDASHSTYLE int GID, int DashStyle, int DashCap`**

- 由于图形库的更换，`DashCap` 的输入值与效果改变如下：
  -  `0` = 没有线帽
  -  `1` = 半圆线帽
  -  `2` = 半方线帽

----
#### GDRAWTEXT

**`int GDRAWTEXT int GID, str text(, int x = 0, int y = 0)`**

该指令不再返回字符串的测量结果，即 `RESULT:0` 以外的返回值失效。

因为该测量结果是额外计算的，计算结果与 [**`GGETTEXTSIZE`**](https://evilmask.gitlab.io/emuera.em.doc/zh/Reference/GGETTEXTSIZE.html) 指令相同，且性能开销稍高，因此移除。

----
#### GDRAWGWITHMASK

**`int GDRAWGWITHMASK int destID, int srcID, int maskID, int destX, int destY`**

改进了该指令的颜色算法，`maskID` 图像的 alpha值 和 blue值 会同时影响绘制结果。

----
#### GDRAWG

**`int GDRAWG int destID, int srcID`**

**`int GDRAWG int destID, int srcID, int destX, int destY`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

新增以上4种参数格式，且 `colorMatrix` 参数可传入一维整数数组。  
传入 `colorMatrix` 参数时，该颜色矩阵仅在本次绘制时生效，绘制完成后会被自动清除。

所有参数格式的 `destWidth` 和 `destHeight` 参数可传入 `负数` 以绘制翻转的图像。

由于图形库的更换，颜色矩阵的使用方式已变更，具体请参阅 [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) 指令中的说明。

----
#### GDRAWSPRITE

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

新增以上2种参数格式，且 `colorMatrix` 参数可传入一维整数数组。  
传入 `colorMatrix` 参数时，该颜色矩阵仅在本次绘制时生效，绘制完成后会被自动清除。

所有参数格式的 `destWidth` 和 `destHeight` 参数可传入 `负数` 以绘制翻转的图像。

由于图形库的更换，颜色矩阵的使用方式已变更，具体请参阅 [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) 指令中的说明。

----
#### GSAVE, GLOAD

**`int GSAVE int GID, any fileName`**

**`int GLOAD int GID, any fileName`**

该指令的第2参数 `fileName` 除了可以指定数字，还可以指定字符串作为文件保存路径。

**`GLOAD`** 指令在创建图像前会释放已创建的图像，即无需在创建前调用 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 指令。

:::note[使用例]
```
GSAVE 0, 11				;会导出sav/img0011.png文件。
GSAVE 0, "sav/New Folder/image"		;会导出sav/New Folder/image.png文件。
GLOAD 0, "resources/New Folder/image"	;会读取resources/New Folder/image.png文件。
```
:::

----
#### SETANIMETIMER

**`void SETANIMETIMER int interval(, int duration)`**

新增第2参数 `duration`，用于指定刷新动画的持续时间，单位为毫秒。持续时间过后会自动停止刷新动画。

该指令在 [**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) 或者 [**`INPUTMOUSEKEY`**](#inputmousekey) 之类的计时等待的情况下仍会继续刷新动画。

----
#### SPRITECREATE

**`int SPRITECREATE str sprite, int GID`**

新增以上1种参数格式。

该指令在创建Sprite前会释放已创建的非内置Sprite，即无需在创建前调用 [**`SPRITEDISPOSE`**](#spritedispose) 指令。如果已存在同名的内置Sprite则会创建失败。

----
#### SPRITEANIMECREATE

**`int SPRITEANIMECREATE str sprite, int width, int height(, int isLoopFrame = 1)`**

新增第4参数 `isLoopFrame`，用于指定该SpriteAnime是否循环播放，省略或输入值为 `非0` 时为循环播放。

该指令在创建Sprite前会释放已创建的非内置Sprite，即无需在创建前调用 [**`SPRITEDISPOSE`**](#spritedispose) 指令。如果已存在同名的内置Sprite则会创建失败。

----
#### SPRITEANIMEADDFRAME

**`int SPRITEANIMEADDFRAME str sprite, int delay`**

新增以上1种参数格式。

该指令可接受 `delay` 为0的延时帧，可用于制作变换效果。

该指令仅对非内置SpriteAnime有效。

----
#### SPRITEDISPOSE

**`int SPRITEDISPOSE str sprite(, int disposeImg)`**

新增第2参数 `disposeImg`，用于指定是否释放该Sprite所引用的图像。

----
#### SPRITEDISPOSEALL

**`void SPRITEDISPOSEALL (int disposeImage = 0)`**

- 修改了第1参数 `disposeImage` 的功能，该指令不再具备移除内置Sprite的功能，可省略 `(0)`。
  -  `0` = 移除所有运行时创建的临时Sprite。
  -  `非0` = 移除所有临时Sprite，并释放所有内置Sprite所引用的图像。其引用的图像会在调用时重新加载。

----
### 音频相关 {#AudioRelated}

----
#### PLAYBGM

**`int PLAYBGM str name(, int volume, int fadeIn = 0, int delay = 0)`**

新增第2至第4参数 `volume` , `fadeIn` , `delay`。

第1参数 `name` 仅支持输入Audio名称。若要通过音频文件路径来播放，请先使用 [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) 指令来创建Audio。  
关于如何添加内置Audio资源，请参阅 [**`音频功能`**](/#AudioFunc) 部分。

**`int PLAYBGM (int fadeIn = 0, int delay = 0)`**

新增以上1种参数格式，该格式用于使已暂停的背景音乐恢复播放。

:::tip[参数]
- **str name**
  - 指定播放的Audio名称。
- **int volume**
  - 指定本次的播放音量，可省略 `(使用Audio的预设音量)`。
- **int fadeIn = 0**
  - 指定淡入效果的持续时间，单位为 `ms(毫秒)`，输入值 `省略` 或 `小于等于0` 时无效果，最大值为 `10000`。
- **int delay = 0**
  - 指定延时播放的持续时间，单位为 `ms(毫秒)`，输入值 `省略` 或 `小于等于0` 时无效果，最大值为 `10000`。
:::

:::tip[返回值]
- **RESULT:0**
  - 指示是否成功播放，成功时返回 `非0`。Audio不存在、Audio加载出错时返回 `0`。
:::

:::note[使用例]
```
PLAYBGM "MyMusic"			;播放背景音乐“MyMusic”
PLAYBGM "MyMusic", 80			;播放背景音乐“MyMusic”，本次播放音量为80
PLAYBGM "MyMusic", , 1500, 1000		;播放背景音乐“MyMusic”，1000ms后开始播放，开始时带有1500ms的淡入效果
PAUSEBGM 1500				;暂停当前背景音乐，停止时带有1500ms的淡出效果
PLAYBGM 1500				;恢复播放当前背景音乐，开始时带有1500ms的淡入效果
```
:::

----
#### PLAYSOUND

**`int PLAYSOUND str name(, int volume, int groupID = 0, int delay = 0)`**

新增第2参数 `volume`，用于指定本次的播放音量。  
新增第3参数 `groupID`，用于指定本次的播放音效组，可配合 [**`STOPSOUND`**](modify_com#stopsound) 指令来停止相同音效组的所有音效。  
新增第4参数 `delay`，用于指定本次的播放延时，单位为毫秒。

第1参数 `name` 仅支持输入Audio名称。若要通过音频文件路径来播放，请先使用 [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) 指令来创建Audio。  
关于如何添加内置Audio资源，请参阅 [**`音频功能`**](/#AudioFunc) 部分。

:::tip[参数]
- **str name**
  - 指定播放的Audio名称。
- **int volume**
  - 指定本次的播放音量，可省略 `(使用音频的预设音量)`。
- **int groupID = 0**
  - 指定本次的播放音效组，可省略 `(0)`。
- **int delay = 0**
  - 指定本次的播放延时，单位为毫秒，可省略 `(0)`。
:::

:::tip[返回值]
- **RESULT:0**
  - 指示是否成功播放，成功时返回 `非0`。Audio不存在、Audio加载出错时返回 `0`。
:::

:::note[使用例]
```
PLAYSOUND "MySOUND"		; 播放音效“MySOUND”
PLAYSOUND "MySOUND", 80		; 播放音效“MySOUND”，本次播放音量为80
```
:::

----
#### SETBGMVOLUME

**`void SETBGMVOLUME int volume(, int fadeDuration = 0)`**

新增第2参数 `fadeDuration`，用于指定音量变化时的渐变效果，单位为 `ms(毫秒)`，输入值 `省略` 或 `小于等于0` 时无效果，最大值为 `10000`。

该指令只会变更当前正在播放的背景音乐的音量，不再影响全局音量。

----
#### SETSOUNDVOLUME

该指令已被弃用，不再有任何效果。

----
#### STOPBGM

**`void STOPBGM (int fadeOut = 0)`**

新增了 `fadeOut` 参数，输入值 `大于0` 时可让背景音乐停止时带有淡出效果。

:::tip[参数]
- **int fadeOut = 0**
  - 指定淡出效果的持续时间，单位为 `ms(毫秒)`，输入值 `省略` 或 `小于等于0` 时无效果，最大值为 `10000`。
:::

:::note[使用例]
```
STOPBGM	1500			;停止背景音乐并带有1500ms的淡出效果
```
:::

----
#### STOPSOUND

**`void STOPSOUND (int groupID = 0)`**

新增 `groupID` 参数，用于指定想要停止播放的音效组，省略该参数时即为停止播放所有音效。

:::tip[参数]
- **int groupID = 0**
  - 指定想要停止播放的音效组，省略该参数时即为停止播放所有音效。
:::

:::note[使用例]
```
PLAYSOUND "MySOUND1", , 1	; 播放音效“MySOUND1”，音效组设为1
PLAYSOUND "MySOUND2", , 2	; 播放音效“MySOUND2”，音效组设为2
STOPSOUND 2			; 停止播放所有音效组为2的音效
```
:::

----
### 文件相关 {#FileRelated}

----
#### ENUMFILES

**`int ENUMFILES string dir(, string pattern, int option)`**

该指令获取的文件路径的反斜杠 `\\` 替换为正斜杠 `/`。

----
#### EXISTFILE

**`int EXISTFILE str filePath(, int getInfo = 0)`**

新增了 `getInfo` 参数，用于获取文件信息。

:::tip[参数]
- **str filePath**
  - 指定文件路径。
- **int getInfo = 0**
  - 指定是否获取文件信息，输入 `非0` 时会将文件信息输出到 `RESULT:1 - RESULT:4`，可省略 `(0)`。
:::

:::tip[返回值]
- **RESULT:0**
  - 指示文件是否存在，文件存在时返回 `非0`。
- **RESULT:1**
  - 指示文件的体积大小，单位为byte。
- **RESULT:2**
  - 指示文件的创建时间，单位为毫秒。
- **RESULT:3**
  - 指示文件的最后修改时间，单位为毫秒。
- **RESULT:4**
  - 指示文件的最后访问时间，单位为毫秒。
:::

----
### 其他 {#Misc}

----
#### GETCONFIG

**`int GETCONFIG str value`**

- 添加了以下可获取的配置项。
  - `ウィンドウ高さ` (窗口高度)
  - `フレーム毎秒` (每秒帧数)
  - `タブ文字幅` (制表符宽度)

----
### 控制语句 {#ControlStatement}

----
#### FOR-NEXT

**`FOR-NEXT int counter, int start, int end(, int step)`**

该控制语句的起始值、结束值、步进值等临时参数会随函数一同进出堆栈。

----
#### REPEAT-REND

**`REPEAT-REND int loopCount`**

该控制语句的起始值、结束值、步进值等临时参数会随函数一同进出堆栈。
