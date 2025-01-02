---
sidebar_position: 3
sidebar_label: 新增指令
---

# 新增指令

### 文本处理相关

----
#### CHARATUW

**`str CHARATUW str text, int position`**

使用方式与 [**`CHARATU`**](https://osdn.net/projects/emuera/wiki/excom#h5-CHARATU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.96.87.E5.AD.97.E4.BD.8D.E7.BD.AE.3E) 指令类似，获取文本中指定位置的字符。

该指令会将复杂的Emoji字符视为一个整字。

:::tip[参数]
* **str text**
  * 指定文本。
* **int position**
  * 指定字符位置。
:::

:::tip[返回值]
* **RESULTS:0**
  * 返回指定位置的字符串。
:::

:::note[使用例]
```
PRINTSL CHARATUW("A👨‍👩‍👧‍👦A", 1)			;打印“👨‍👩‍👧‍👦”
```
:::

----
#### FINDEMOJI

**`int FINDEMOJI str text, strArray1D array`**

寻找文本中所有的Emoji字符，并将找到的结果输出到 `array` 数组中

:::tip[参数]
* **str text**
  * 指定文本。
* **strArray1D array**
  * 指定接收查找结果的数组。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回找到的Emoji字符数量。
:::

:::note[使用例]
```
PRINTVL FINDEMOJI("A👨‍👩‍👧‍👦AA😀A", LOCALS)		;打印“2”，LOCALS:0 ="👨‍👩‍👧‍👦"，LOCALS:1 ="😀"
```
:::

----
#### FLOATTOSTR

**`str FLOATTOSTR int value, int div(, str format = "")`**

用于实现对浮点数的格式化文本处理。

:::tip[参数]
* **int value**
  * 指定被除数。
* **int div**
  * 指定除数，当除数为 `0` 时会报错。
* **str format = ""**
  * 指定字符串格式。
:::

:::tip[返回值]
* **RESULTS:0**
  * 返回字符串结果。
:::

:::note[使用例]
```
PRINTSL FLOATTOSTR(13, 23)			;打印“0.5652174”
PRINTSL FLOATTOSTR(13, 23, "0.00")		;打印“0.57”
```
:::

----
#### REPLACEBYARRAY

**`str REPLACEBYARRAY str source, str match, strArray1D replaceArray`**

从 [**`REPLACE`**](modify_com#replace) 指令中分离出来的新指令，替换文本时会以 `replaceArray` 数组中的字符串来依次填补。

:::tip[参数]
* **str text**
  * 指定需要处理的文本。
* **str match**
  * 指定需要匹配的文本。
* **strArray1D replaceArray**
  * 指定用于替补的字符串数组。
:::

:::tip[返回值]
* **RESULTS:0**
  * 返回字符串结果。
:::

:::note[使用例]
```
LOCALS '= "111", "222", "333"
PRINTSL REPLACEBYARRAY("A A-A", "A", LOCALS)		; 打印“111 222-333”
```
:::

----
#### STRAPPEND

**`str STRAPPEND (str delimiter = ",", anyParams value)`**

实现 [**`string.join`**](https://learn.microsoft.com/zh-cn/dotnet/api/system.string.join?view=netframework-4.8#system-string-join(system-string-system-string())) 拼合文本。

:::tip[参数]
* **str delimiter = ","**
  * 指定用于拼合文本的分隔符， 可省略 `(",")` 。
* **anyParams value**
  * 指定0个或多个参数值。
:::

:::tip[返回值]
* **RESULTS:0**
  * 返回拼合字符串结果。
:::

:::note[使用例]
```
PRINTSL STRAPPEND(, "aaa", 222, 33)		;打印“aaa,222,33”
PRINTSL STRAPPEND("__", "aaa", 222, 33)		;打印“aaa__222__33”
```
:::

----
#### STRFINDUW

**`int STRFINDUW str text, str word(, int start = 0)`**

使用方式与 [**`STRFINDU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRFINDU.20.3C.E6.A4.9C.E7.B4.A2.E5.AF.BE.E8.B1.A1.3E.2C.20.3C.E6.A4.9C.E7.B4.A2.E3.81.99.E3.82.8B.E6.96.87.E5.AD.97.E5.88.97.3E.7B.2C.20.3C.E9.96.8B.E5.A7.8B.E3.82.A4.E3.83.B3.E3.83.87.E3.83.83.E3.82.AF.E3.82.B9.3E.7D) 指令类似，搜索文本中的指定字符串并获取索引位置。

该指令会将复杂的Emoji字符视为一个整字。

:::tip[参数]
* **str text**
  * 指定文本。
* **str word**
  * 指定搜索的字符串。
* **int start = 0**
  * 指定搜索的起始位置，可省略 `(0)` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回搜索到的索引位置，未找到时返回 `-1` 。
:::

:::note[使用例]
```
PRINTVL STRFINDUW("啊😀A啊B", "A")		;打印“2”
```
:::

----
#### STRFINDLAST 系列

**`int STRFINDLAST str text, str word(, int start = lastIndex)`**

**`int STRFINDLASTU str text, str word(, int start = lastIndex)`**

**`int STRFINDLASTUW str text, str word(, int start = lastIndex)`**

使用方式与 [**`STRFIND`**](modify_com#strfind) 指令类似，以“倒序”的方式搜索文本中的指定字符串并获取索引位置。

**`STRFINDLAST`** 指令在处理Emoji字符时会通过计算显示宽度得出字符长度。

**`STRFINDLASTUW`** 指令会将复杂的Emoji字符视为一个整字。

:::tip[参数]
* **str text**
  * 指定文本。
* **str word**
  * 指定搜索的字符串。
* **int start = lastIndex**
  * 指定搜索的起始位置，可省略 `(最后的索引位置)` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回搜索到的索引位置，未找到时返回 `-1` 。
:::

:::note[使用例]
```
PRINTVL STRFINDLAST("啊A啊BA", "B")		;打印“5”
PRINTVL STRFINDLAST("啊A啊BA", "A", 2)		;打印“2”
PRINTVL STRFINDLAST("啊A啊BA", "A", 1)		;打印“-1”
PRINTVL STRFINDLASTU("啊A啊BA", "B")		;打印“3”
PRINTVL STRFINDLASTUW("😀A啊B😀A", "B")	;打印“3”
```
:::

----
#### STRFORMAT

**`str STRFORMAT str formatText(, anyParams value)`**

实现 [**`string.format`**](https://learn.microsoft.com/zh-cn/dotnet/api/system.string.format?view=netframework-4.8#Starting) 格式化文本处理。

:::tip[参数]
* **str formatText**
  * 指定字符串格式文本。
* **anyParams value**
  * 指定0个或多个参数值。
:::

:::tip[返回值]
* **RESULTS:0**
  * 返回字符串结果，格式化失败时返回原文本。
:::

:::note[使用例]
```
PRINTSL STRFORMAT("aaa_{0}__{1}", 222, "33")	;打印“aaa_222__33”
```
:::

----
#### STRLENSUW

**`int STRLENSUW str text`**

使用方式与 [**`STRLENSU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRLENSU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E) 指令类似，根据Unicode编码获取文本的字符数。

该指令会将复杂的Emoji字符视为一个整字。

:::tip[参数]
* **str text**
  * 指定文本。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回指定文本的字符数。
:::

:::note[使用例]
```
PRINTVL STRLENSUW("A👪A")		;打印“3”
```
:::

----
#### STRREMOVE 系列

**`str STRREMOVE str text(, int start = 0, int count = totalLength)`**

**`str STRREMOVEU str text(, int start = 0, int count = totalLength)`**

**`str STRREMOVEUW str text(, int start = 0, int count = totalLength)`**

实现 [**`string.remove`**](https://learn.microsoft.com/zh-cn/dotnet/api/system.string.remove?view=netframework-4.8) 移除指定范围内的文本。

**`STRREMOVE`** 指令在处理Emoji字符时会通过计算显示宽度得出字符长度。  
如果文本的选定位置处在长字符的中间，则后退到该字符的起始位置。也就是说，卡在起始位置的字符会被计入，卡在末尾位置的字符会被无视。

**`STRREMOVEUW`** 指令会将复杂的Emoji字符视为一个整字。

:::tip[参数]
* **str text**
  * 指定需要处理的文本。
* **int start = 0**
  * 指定移除文本的起始位置，可省略 `(0)` 。
* **int count = totalLength**
  * 指定移除文本的字符数，可省略 `(文本总长度)` 。
:::

:::tip[返回值]
* **RESULTS:0**
  * 返回字符串结果。
:::

:::note[使用例]
```
PRINTSL STRREMOVE("１２３４５６", 2, 3)			;打印“１３４５６”。
PRINTSL STRREMOVEU("１２３４５６", 3)			;打印“１２３”。
PRINTSL STRREMOVEU("１２３４５６", 0, 3)			;打印“４５６”。
PRINTSL STRREMOVEUW("１２３４👨‍👩‍👧‍👦５６", 2, 3)		;打印“１２５６”。
```
:::

----
#### STRSPLIT

**`int STRSPLIT str text, strArray array(, str delimiter = ",")`**

使用方式与 [**`SPLIT`**](modify_com#split) 指令类似，根据指定的字符串来分割文本。

:::tip[参数]
* **str text**
  * 指定需要分割的文本。
* **strArray array**
  * 指定用于保存分割文本的数组。
* **str delimiter = ","**
  * 指定用于分割文本的分隔符， 可省略 `(",")` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回分割后的字符串个数。
:::

:::note[使用例]
```
LOCAL = STRSPLIT("111,AAA,22", LOCALS)			;LOCAL的值赋为3。
PRINTSL LOCALS:0					;打印“111”。
LOCAL = STRSPLIT("111,AAA__22", LOCALS, "__")		;LOCAL的值赋为2。
PRINTSL LOCALS:1					;打印“22”。
```
:::

----
#### STRTRIM

**`str STRTRIM str text(, str trimChars, int trimDirection = 0)`**

实现 [**`string.trim`**](https://learn.microsoft.com/zh-cn/dotnet/api/system.string.trim?view=netframework-4.8) 移除文本前后的指定字符。

:::tip[参数]
* **str text**
  * 指定需要处理的文本。
* **str trimChars**
  * 指定需要移除的字符，省略该参数时视为移除系统预设的多种空白字符，例如空格、制表符等。
* **int trimDirection = 0**
  * 指定移除方向， `1` = 移除前部， `2` = 移除后部，其他值为前后移除。
:::

:::tip[返回值]
* **RESULTS:0**
  * 返回字符串结果。
:::

:::note[使用例]
```
PRINTSL STRTRIM(" 111 AAA  22  ")			;打印“111 AAA  22”。
PRINTSL STRTRIM(" 111 AAA  22  ", " 12")		;打印“AAA”。
PRINTSL STRTRIM(" 111 AAA  22  ", " 12", 1)		;打印“AAA  22  ”。
```
:::

----
#### SUBSTRINGUW

**`str SUBSTRINGUW str text(, int start = 0, int length = totalLength)`**

使用方式与 [**`SUBSTRINGU`**](https://osdn.net/projects/emuera/wiki/excom#h5-SUBSTRINGU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E) 指令类似，根据指定的位置和长度来截取文本。

该指令会将复杂的Emoji字符视为一个整字。

:::tip[参数]
* **str text**
  * 指定文本。
* **int start = 0**
  * 指定截取的起始位置，可省略 `(0)` 。
* **int length = totalLength**
  * 指定截取长度， 输入值为 `负数` 时将截取文本总长度。
:::

:::tip[返回值]
* **RESULTS:0**
  * 返回截取出的文本。
:::

:::note[使用例]
```
PRINTSL SUBSTRINGUW("A👪BAB👪A", 0, 4)		;打印“A👪BA”
PRINTSL SUBSTRINGUW("A👪BAB👪A", 5)		;打印“👪A”
```
:::

----
#### TRYTOINT

**`int TRYTOINT str text`**

使用方式与 [**`TOINT`**](https://osdn.net/projects/emuera/wiki/excom#h5-TOINT.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E) 指令类似，可避免 ISNUMERIC + TOINT 的功能重复问题。

:::tip[参数]
* **str text**
  * 指定需要转换成整数的字符串。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否转换成功，成功时返回 `非0` 。
* **RESULT:1**
  * 返回转换结果，转换失败时返回 `0` 。
:::

:::note[使用例]
```
LOCAL = TRYTOINT("IO") ? RESULT:1 # 10
```
:::

----
### 变量、数组相关

----
#### ARRAYBIT

**`int ARRAYBIT anyArray array, str keyName(, int dimension = lastDim, str delimiter = ",")`**

根据第2参数 `keyName` 中指定的多个索引键名来检索第1参数 `array` 中的各个索引键所在的索引值，并将索引值进行或值(OR)叠加。

除了检索数组的索引键来作为索引值，也可以将第3参数 `dimension` 指定为 `0` 以直接检索数组内的元素来作为索引值。

若未找到指定的索引键、或者索引值的范围在 `0 - 63` 之外，则会直接报错。

该指令为实验性功能，旨在利用系统会将合适的代码重构为常量的特性来提高程序的运行效率。

:::tip[参数]
* **anyArray array**
  * 指定任意数组。
* **str keyName**
  * 指定需要叠加索引值的索引键名。
* **int dimension = lastDim**
  * 指定数组的索引键所在的维数，省略时使用数组最后一维。当该参数指定为 `0` 时，检索数组内的元素来作为索引值。
* **str delimiter = ","**
  * 指定用于分割键名的分隔符， 可省略 `(",")` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回所有索引值叠加后的或值。
:::

:::note[使用例]
```erh title="EXAMPLE_ARRAY.erh文件"
#DIMS EXAMPLE_ARRAY, 20 = "VALUE_0", "VALUE_1", "VALUE_2", "VALUE_3"
```

```erd title="EXAMPLE_ARRAY.erd文件"
0,AAA
1,BBB
2,CCC
3,DDD
```

```erb title="erb文件"
LOCAL = ARRAYBIT(EXAMPLE_ARRAY, "AAA, BBB, DDD")	; LOCAL = 0B1011
; 上述代码的运行效果相当于：
LOCAL = 1 << GETNUM(EXAMPLE_ARRAY, "AAA")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "BBB")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "DDD")

LOCAL = ARRAYBIT(EXAMPLE_ARRAY, "VALUE_0, VALUE_2", 0)	; LOCAL = 0B0101
; 上述代码的运行效果相当于：
LOCAL = 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_0")
LOCAL |= 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_2")
```
:::

----
#### ARRAYTIDY

**`int ARRAYTIDY anyArray array(, int start = 0, int end = lastDimLength, same emptyVal)`**

该指令可整理数组中的元素之间的空值，以得到一个没有空隙、元素连贯的数组。

对于多维数组，该指令仅处理最后一维的元素，且需要自行指定之前的维索引值。

:::tip[参数]
* **anyArray array**
  * 指定需要整理的任意数组。
* **int start = 0**
  * 指定整理的开始索引。
* **int end = lastDimLength**
  * 指定整理的结束索引+1，省略时使用数组最后一维的长度。
* **same emptyVal**
  * 指定处理时会被视作空值的数值或字符串，可省略( `0` 或 `空字符串` )。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回整理完毕后的元素个数。
:::

----
#### ARRAYFIND, ARRAYFINDLAST

**`int ARRAYFIND anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int ARRAYFINDLAST anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

使用方式与 [**`FINDELEMENT, FINDLASTELEMENT`**](modify_com#findelement-findlastelement) 指令类似，用于检索数组中符合要求的元素。

该指令默认 `不使用正则匹配` 、 `不使用部分匹配` 且 `区分大小写` ，可通过指定 `option` 参数调整处理选项。

对于多维数组，该指令仅处理最后一维的元素，且需要自行指定之前的维索引值。

:::tip[参数]
* **anyArray array**
  * 指定需要检索的任意数组。
* **same target**
  * 指定需要检索的内容。
* **int start = 0**
  * 指定检索的开始索引。
* **int end = lastDimLength**
  * 指定检索的结束索引+1，省略时使用数组最后一维的长度。
* **int option = 0**
  * 指定处理选项：
    *  `1P0` = 使用部分匹配
    *  `1P1` = 忽略大小写
    *  `1P2` = 反转判断结果
    *  `1P3` = 使用正则匹配
:::

:::tip[返回值]
* **RESULT:0**
  * 返回符合检索要求的首个索引值，未找到时返回 `-1` 。
:::

:::note[使用例]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P0 | 1P1)		;检索 ARRAY:0 至 ARRAY:7 中包含"AA"且忽略大小写的元素
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P2)		;检索 ARRAY:0 至 ARRAY:7 中不等于"AA"的元素
PRINTVL ARRAYFINDLAST(ARRAY, "AA", 0, 8, 1P2)		;从后往前检索 ARRAY:0 至 ARRAY:7 中不等于"AA"的元素
PRINTVL ARRAYFIND(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)	;检索 ARRAY:0 至 ARRAY:7 中部分匹配到"\\d+"的元素
PRINTVL ARRAYFIND(CARRAY_2D:TARGET:3:0, 22, 5)		;检索角色TARGET的 CARRAY_2D:3:5 至 CARRAY_2D:3:9 中等于22的元素
```
:::

----
#### VARLENGTH

**`int VARLENGTH anyArray array(, int dimension)`**

使用方式与 [**`VARSIZE`**](modify_com#varsize) 指令类似，获取数组各维数的长度。

省略第2参数 `dimension` 时，该指令将返回数组最后一维的长度，且传入 `负数` 时可获取数组的总长度。

:::tip[参数]
* **anyArray array**
  * 指定任意数组。
* **int dimension**
  * 指定数组的维数，省略时将返回数组最后一维的长度，且传入 `负数` 时可获取数组的总长度。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回指定维数的数组长度。
:::

----
### 输入相关

----
#### CHKKEYDATA

**`int CHKKEYDATA int keyData(, str keyName, int modifier)`**

检查用户输入的 `keyData` 键码值是否与指定的 `keyName` 按键名和 `modifier` 修改键匹配。`keyData` 键码值可通过 [**`INPUTMOUSEKEY`**](modify_com#inputmousekey) 指令获取。

具体的 `keyName` 按键名对应列表请参阅 [**`Keys 枚举`**](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.forms.keys?view=netframework-4.8) 文档。

:::tip[参数]
* **int keyData**
  * 指定用户输入的键码值数据。
* **str keyName**
  * 指定需要匹配的按键名，按键名无视大小写，可省略。
* **int modifier**
  * 指定需要匹配的修改键，可省略。
    *  `1P0` = Shift
    *  `1P1` = Ctrl
    *  `1P2` = Alt
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功匹配指定的按键名和修改键，成功时返回 `非0` 。
:::

:::note[使用例]
```
INPUTMOUSEKEY 0
IF RESULT:0 == 3
  PRINTVL CHKKEYDATA(RESULT:2, "A")		; 检查用户是否键入 "A"
  PRINTVL CHKKEYDATA(RESULT:2, , 1P0 | 1P1)	; 检查用户是否键入 "Ctrl + Shift"
  PRINTVL CHKKEYDATA(RESULT:2, "/", 1P1 | 1P2)	; 检查用户是否键入 "Ctrl + Alt + /"
ENDIF
```
:::

----
### 图像相关

----
#### ASYNCGDRAWG

该指令的调用方式与 [**`GDRAWG`**](modify_com#gdrawg) 指令相同，用于异步进行绘图操作以避免长时间的程序停滞。

发送异步任务后，可调用 [**`ASYNCWAITALL`**](#asyncwaitall) 指令使程序强制等待所有异步任务直到完成。

:::tip[返回值]
* **RESULT:0**
  * 成功发送异步任务时返回 `非0` ，指定的图像未创建时返回 `0` 。
:::

----
#### ASYNCGDRAWSPRITE

该指令的调用方式与 [**`GDRAWSPRITE`**](modify_com#gdrawsprite) 指令相同，用于异步进行绘图操作以避免长时间的程序停滞。

发送异步任务后，可调用 [**`ASYNCWAITALL`**](#asyncwaitall) 指令使程序强制等待所有异步任务直到完成。

:::tip[返回值]
* **RESULT:0**
  * 成功发送异步任务时返回 `非0` ，指定的图像或Sprite未创建时返回 `0` 。
:::

----
#### ASYNCGCREATEFROMFILE

**`int ASYNCGCREATEFROMFILE int GID, str filepath`**

该指令的调用方式与 [**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) 指令相同，用于异步加载指定的图像文件以避免长时间的程序停滞。

发送异步任务后，可调用 [**`ASYNCWAITALL`**](#asyncwaitall) 指令使程序强制等待所有异步任务直到完成。

:::tip[返回值]
* **RESULT:0**
  * 总是返回 `非0` 。
:::

----
#### ASYNCGDISPOSE

**`int ASYNCGDISPOSE int GID`**

该指令的调用方式与 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 指令相同，用于与其他异步指令配合使用以释放图像。

发送异步任务后，可调用 [**`ASYNCWAITALL`**](#asyncwaitall) 指令使程序强制等待所有异步任务直到完成。

:::tip[返回值]
* **RESULT:0**
  * 成功发送异步任务时返回 `非0` ，指定的图像未创建时返回 `0` 。
:::

----
#### ASYNCSPRITELOAD

**`int ASYNCSPRITELOAD str sprite`**

该指令用于异步加载指定的Sprite所引用的图像以避免长时间的程序停滞。

发送异步任务后，可调用 [**`ASYNCWAITALL`**](#asyncwaitall) 指令使程序强制等待所有异步任务直到完成。

:::tip[参数]
* **str sprite**
  * 指定想要异步加载的Sprite名称。
:::

:::tip[返回值]
* **RESULT:0**
  * 成功发送异步任务、或Sprite已加载图像时返回 `非0` ，未找到Sprite时返回 `0` 。
:::

----
#### ASYNCWAITALL

**`void ASYNCWAITALL`**

该指令用于强制等待所有异步任务直到完成。

----
#### GETBEZIERPATH

**`int GETBEZIERPATH intArray2|3D pointArray, int pointCount, intArray2D outputArray, int outputCount`**

用于生成贝塞尔曲线，并将曲线上所有的坐标点存入到 `outputArray` 数组中。

:::tip[参数]
* **intArray2|3D pointArray**
  * 指定生成曲线的起点、多个控制点、终点坐标，数组最后一维的长度必须 `大于等于2` 。
* **int pointCount**
  * 指定 `pointArray` 中的坐标点数量。
* **intArray2D outputArray**
  * 生成曲线的坐标将会存入到该数组中，数组最后一维的长度必须 `大于等于2` 。
* **int outputCount**
  * 指定生成坐标点的数量。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功执行指令，成功时返回 `非0` 。
:::

----
#### GETBEZIERPOINT

**`int GETBEZIERPOINT intArray2|3D pointArray, int pointCount, int t, int tMax`**

根据指定的控制点和路程来获取贝塞尔曲线上的坐标点。

:::tip[参数]
* **intArray2|3D pointArray**
  * 指定生成曲线的起点、多个控制点、终点坐标，数组最后一维的长度必须 `大于等于2` 。
* **int pointCount**
  * 指定 `pointArray` 中的坐标点数量。
* **int t**
  * 指定需要的坐标点所在的路程。
* **int tMax**
  * 指定最大路程。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功执行指令，成功时返回 `非0` 。
* **RESULT:1**
  * 坐标点的X值。
* **RESULT:2**
  * 坐标点的Y值。
:::

----
#### GDISPOSEALL

**`void GDISPOSEALL`**

释放并清空所有Graphics图像。

----
#### GENABLED

**`int GENABLED int GID`**

获取指定图像的 `ENABLED` 值，该值用于控制该图像是否能最终绘制到屏幕上。

:::tip[参数]
* **int GID**
  * 指定图像ID。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回指定图像的 `ENABLED` 值。图像未创建时返回 `0` 。
:::

----
#### GSETENABLED

**`int GSETENABLED int GID, int enabled`**

该指令用于在保持图像的位置信息的前提下，控制该图像是否能最终绘制到屏幕上。

:::tip[参数]
* **int GID**
  * 指定图像ID。
* **int enabled**
  * 指定该图像是否绘制。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。图像未创建时返回 `0` 。
:::

----
#### GFILLELLIPSE

**`int GFILLELLIPSE int GID, int x, int y, int width, int height`**

用于绘制椭圆图形，使用方式与 [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) 指令类似，通过 [**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) 指令来指定颜色。

:::tip[参数]
* **int GID**
  * 指定图像ID。
* **int x**
  * 指定椭圆的X位置。
* **int y**
  * 指定椭圆的Y位置。
* **int width**
  * 指定椭圆宽度。
* **int height**
  * 指定椭圆高度。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功绘制图形，成功时返回 `非0` ，指定的图像未创建时返回 `0` 。
:::

----
#### GFILLROUNDRECT

**`int GFILLROUNDRECT int GID, int x, int y, int width, int height, int radiusX(, int radiusY)`**

用于绘制圆角矩形，使用方式与 [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) 指令类似，通过 [**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) 指令来指定颜色。

:::tip[参数]
* **int GID**
  * 指定图像ID。
* **int x**
  * 指定圆角矩形的X位置。
* **int y**
  * 指定圆角矩形的Y位置。
* **int width**
  * 指定圆角矩形宽度。
* **int height**
  * 指定圆角矩形高度。
* **int radiusX**
  * 指定圆角的X半径。
* **int radiusY**
  * 指定圆角的Y半径，省略时使用 `radiusX` 相同值。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功绘制图形，成功时返回 `非0` ，指定的图像未创建时返回 `0` 。
:::

----
#### GRESAMPLESAVE

**`int GRESAMPLESAVE int GID, any fileName, int width, int height`**

使用方式与 [**`GSAVE`**](modify_com#gsave-gload) 指令类似，通过更高质量的重采样来生成更清晰的缩放图像并保存为文件，但代价是耗时更长。

:::tip[参数]
* **int GID**
  * 指定图像ID。
* **any fileName**
  * 指定保存的文件序号或文件路径。
* **int width**
  * 指定缩放宽度。
* **int height**
  * 指定缩放高度。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功保存为文件，成功时返回 `非0` ，指定的图像未创建、文件路径不合法、保存文件出错时返回 `0` 。
:::

----
#### GRESETMATRIX

**`int GRESETMATRIX int GID`**

重置指定图像的变换矩阵。

:::tip[参数]
* **int GID**
  * 指定图像ID。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置图像的变换矩阵，成功时返回 `非0` 。图像未创建时返回 `0` 。
:::

----
#### GRESETSTATE

**`int GRESETSTATE int GID`**

重置指定图像的所有附加状态，具体的重置内容如下：

* `BRUSH`的颜色重置为默认文字颜色。
* `PEN`的颜色重置为默认文字颜色，笔粗重置为`1`，所有划线效果被重置。
* 抗锯齿效果重置为`1(开启)`。
* 过滤质量重置为`3(高质量)`。
* 模糊效果被清除。
* `ColorMatrix(颜色矩阵)`被清除。
* `TransformMatrix(变换矩阵)`被重置。

:::tip[参数]
* **int GID**
  * 指定图像ID。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功重置图像的状态，成功时返回 `非0` 。图像未创建时返回 `0` 。
:::

----
#### GSETANTIALIAS

**`int GSETANTIALIAS int GID(, int mode = 0)`**

用于设置图像绘制时是否启用抗锯齿。

所有新创建的图像默认开启抗锯齿。

:::tip[参数]
* **int GID**
  * 指定图像ID。
* **int mode = 0**
  * 指定是否启用抗锯齿，输入 `非0` 开启抗锯齿，否则为关闭，可省略 `(0)` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置了图像的抗锯齿，成功时返回 `非0` 。图像未创建时返回 `0` 。
:::

----
#### GSETBLUR

**`int GSETBLUR int GID(, int blur = 0)`**

用于设置图像绘制时是否启用模糊效果。

所有新创建的图像默认无模糊效果。

:::tip[参数]
* **int GID**
  * 指定图像ID。
* **int blur = 0**
  * 指定模糊程度，输入范围为 `0-100`，省略或输入 `0` 将会清除模糊效果。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置了图像的模糊效果，成功时返回 `非0` 。图像未创建时返回 `0` 。
:::

----
#### GSETCOLORMATRIX

**`int GSETCOLORMATRIX int GID(, intArray colorMatrix)`**

用于设置图像绘制时是否启用颜色矩阵。

颜色矩阵数组至少需要 `4行 x 5列` 大小，前4列的输入范围为 `0-510` ，即前4列支持2倍过饱和，第5列的输入范围为 `0-255` 。

不需要颜色矩阵时请再次调用该指令并省略第2参数 `colorMatrix` 。

:::tip[参数]
* **int GID**
  * 指定图像ID。
* **intArray colorMatrix**
  * 指定任意整数数组作为颜色矩阵，省略该参数将会清除已有的颜色矩阵。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置了图像的颜色矩阵，成功时返回 `非0` 。图像未创建时返回 `0` 。
:::

:::note[使用例]
```
#DIM COLOR_MATRIX, 4, 5

COLOR_MATRIX:0:0 = 255, 0, 0, 0, 0	; Red
COLOR_MATRIX:1:0 = 0, 255, 0, 0, 0	; Green
COLOR_MATRIX:2:0 = 0, 0, 255, 0, 0	; Blue
COLOR_MATRIX:3:0 = 0, 0, 0, 0XFF, 0	; Alpha

GCREATE 0, 100, 100
GSETCOLORMATRIX 0, COLOR_MATRIX:0:0
```
:::

----
#### GSETQUALITY

**`int GSETQUALITY int GID(, int quality = 3)`**

用于设置图像绘制时的过滤质量等级，该设置会影响缩放图像时的清晰度。

所有新创建的图像默认使用 `3(高质量)` 。

:::tip[参数]
* **int GID**
  * 指定图像ID。
* **int quality = 3**
  * 指定质量等级，输入范围为 `0-3` ， `0` = 无过滤， `1` = 低质量， `2` = 中质量， `3` = 高质量。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置了图像的过滤质量，成功时返回 `非0` 。图像未创建时返回 `0` 。
:::

----
#### GSETSCALE

**`int GSETSCALE int GID, int scaleX, int scaleY(, int posX = 0, int posY = 0)`**

为图像的变换矩阵附加 `缩放` 效果。

附加后的效果无法撤销，只能通过调用 [**`GRESETMATRIX`**](#gresetmatrix) 指令全部重置。

:::tip[参数]
* **int GID**
  * 指定图像ID。
* **int scaleX**
  * 指定X缩放量，输入 `100` 即为 `100%` 。
* **int scaleY**
  * 指定Y缩放量，输入 `100` 即为 `100%` 。
* **int posX = 0**
  * 指定缩放中心点的X位置，可省略 `(0)` 。
* **int posY = 0**
  * 指定缩放中心点的Y位置，可省略 `(0)` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置了图像的变换矩阵，成功时返回 `非0` 。图像未创建时返回 `0` 。
:::

----
#### GSETSKEW

**`int GSETSKEW int GID, int skewX, int skewY`**

为图像的变换矩阵附加 `倾斜` 效果。

附加后的效果无法撤销，只能通过调用 [**`GRESETMATRIX`**](#gresetmatrix) 指令全部重置。

:::tip[参数]
* **int GID**
  * 指定图像ID。
* **int skewX**
  * 指定X倾斜量，输入 `100` 即为 `100%` 。
* **int skewY**
  * 指定Y倾斜量，输入 `100` 即为 `100%` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置了图像的变换矩阵，成功时返回 `非0` 。图像未创建时返回 `0` 。
:::

----
#### GSETROTATE

**`int GSETROTATE int GID, int angle`**

**`int GSETROTATE int GID, int angle, int posX = 0, int posY = 0`**

为图像的变换矩阵附加 `旋转` 效果。

附加后的效果无法撤销，只能通过调用 [**`GRESETMATRIX`**](#gresetmatrix) 指令全部重置。

:::tip[参数]
* **int GID**
  * 指定图像ID。
* **int angle**
  * 指定旋转角度。
* **int posX = 0**
  * 指定旋转中心点的X位置，可省略 `(0)` 。
* **int posY = 0**
  * 指定旋转中心点的Y位置，可省略 `(0)` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置了图像的变换矩阵，成功时返回 `非0` 。图像未创建时返回 `0` 。
:::

----
#### GSETTRANSLATE

**`int GSETTRANSLATE int GID, int translateX, int translateY`**

为图像的变换矩阵附加 `平移` 效果。

附加后的效果无法撤销，只能通过调用 [**`GRESETMATRIX`**](#gresetmatrix) 指令全部重置。

:::tip[参数]
* **int GID**
  * 指定图像ID。
* **int translateX**
  * 指定平移的X向量。
* **int translateY**
  * 指定平移的Y向量。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置了图像的变换矩阵，成功时返回 `非0` 。图像未创建时返回 `0` 。
:::

----
#### SPRITEANIMECLEARFRAME

**`int SPRITEANIMECLEARFRAME str spriteAnime(, int removeStart = 0, int removeCount = frameCount)`**

清除指定SpriteAnime的帧。

该指令仅对非内置SpriteAnime有效。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
* **int removeStart = 0**
  * 指定清除的起始位置。
* **int removeCount = frameCount**
  * 指定清除的帧个数，省略时将会清除从 `removeStart` 开始的所有帧。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功清除，成功时返回 `非0` 。SpriteAnime未创建、SpriteAnime是内置时返回 `0` 。
:::

----
#### SPRITEANIMEFRAMECOUNT

**`int SPRITEANIMEFRAMECOUNT str spriteAnime`**

获取指定SpriteAnime的已添加的帧数量。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回指定SpriteAnime的帧数量。SpriteAnime未创建时返回 `0` 。
:::

----
#### SPRITEANIMERESETTIME

**`int SPRITEANIMERESETTIME str spriteAnime`**

重置指定SpriteAnime的播放时间，使动画从第一帧重新开始。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。SpriteAnime未创建时返回 `0` 。
:::

----
#### SPRITEFRAME_SETG

**`int SPRITEFRAME_SETG str spriteAnime, int GID`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height, int posX, int posY`**

为指定SpriteAnime的当前帧设置图像，每一帧只有最后设置的图像类型会生效。

该指令仅对非内置SpriteAnime有效。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
* **int GID**
  * 指定图像ID。
* **int x**
  * 指定框选的位置X。
* **int y**
  * 指定框选的位置Y。
* **int width**
  * 指定框选的宽度。
* **int height**
  * 指定框选的高度。
* **int posX**
  * 指定框选的绘制位置X。
* **int posY**
  * 指定框选的绘制位置Y。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。SpriteAnime未创建、SpriteAnime是内置时返回 `0` 。
:::

----
#### SPRITEFRAME_SETSPRITE

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height, int posX, int posY`**

为指定SpriteAnime的当前帧设置Sprite图像，每一帧只有最后设置的图像类型会生效。

该指令仅对非内置SpriteAnime有效。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
* **str sprite**
  * 指定Sprite。
* **int x**
  * 指定框选的位置X。
* **int y**
  * 指定框选的位置Y。
* **int width**
  * 指定框选的宽度。
* **int height**
  * 指定框选的高度。
* **int posX**
  * 指定框选的绘制位置X。
* **int posY**
  * 指定框选的绘制位置Y。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。SpriteAnime未创建、SpriteAnime是内置时返回 `0` 。
:::

----
#### SPRITEFRAME_SETSPINE

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height, int posX, int posY`**

为指定SpriteAnime的当前帧设置Spine动画，每一帧只有最后设置的图像类型会生效。

该指令仅对非内置SpriteAnime有效。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
* **int spineID**
  * 指定SpineID。
* **int x**
  * 指定框选的X位置。
* **int y**
  * 指定框选的Y位置。
* **int width**
  * 指定框选的宽度。
* **int height**
  * 指定框选的高度。
* **int posX**
  * 指定框选的X绘制位置。
* **int posY**
  * 指定框选的Y绘制位置。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。SpriteAnime未创建、SpriteAnime是内置时返回 `0` 。
:::

----
#### SPRITEFRAME_TRANSITION

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton`**

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton, intArray2D bezierPointArray, int bezierPointCount`**

为指定SpriteAnime的当前帧启用或禁用过渡效果，该过渡效果将以前一帧作为变换起点，以当前帧作为变换终点。  
可传入一个用于描述贝塞尔曲线的数组以获得非匀速的过渡效果。

* 仅以下属性会受到过渡效果的影响：
  * 变换矩阵
  * 颜色矩阵
  * 模糊效果

该指令仅对非内置SpriteAnime有效。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
* **int useTransisiton**
  * 指定启用或禁用过渡效果。
* **intArray2D bezierPointArray**
  * 指定用于描述贝塞尔曲线的数组。
* **int bezierPointCount**
  * 指定数组中的坐标点个数。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。SpriteAnime未创建、SpriteAnime是内置时返回 `0` 。
:::

----
#### SPRITEFRAME_TRANSLATE

**`int SPRITEFRAME_TRANSLATE str spriteAnime, int translateX, int translateY`**

为指定SpriteAnime的当前帧的变换矩阵附加 `平移` 效果。

附加后的效果无法撤销，只能通过调用 [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 指令重置当前帧的变换矩阵。

该指令仅对非内置SpriteAnime有效。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
* **int translateX**
  * 指定平移的X向量。
* **int translateY**
  * 指定平移的Y向量。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。SpriteAnime未创建、SpriteAnime是内置时返回 `0` 。
:::

----
#### SPRITEFRAME_SCALE

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY`**

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY, int posX, int posY`**

为指定SpriteAnime的当前帧的变换矩阵附加 `缩放` 效果。

附加后的效果无法撤销，只能通过调用 [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 指令重置当前帧的变换矩阵。

该指令仅对非内置SpriteAnime有效。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
* **int scaleX**
  * 指定X缩放量，输入 `100` 即为 `100%` 。
* **int scaleY**
  * 指定Y缩放量，输入 `100` 即为 `100%` 。
* **int posX = 0**
  * 指定缩放中心点的X位置，可省略 `(0)` 。
* **int posY = 0**
  * 指定缩放中心点的Y位置，可省略 `(0)` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。SpriteAnime未创建、SpriteAnime是内置时返回 `0` 。
:::

----
#### SPRITEFRAME_ROTATE

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle`**

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle, int posX, int posY`**

为指定SpriteAnime的当前帧的变换矩阵附加 `旋转` 效果。

附加后的效果无法撤销，只能通过调用 [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 指令重置当前帧的变换矩阵。

该指令仅对非内置SpriteAnime有效。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
* **int angle**
  * 指定旋转角度。
* **int posX**
  * 指定旋转中心点的X位置，可省略 `(0)` 。
* **int posY**
  * 指定旋转中心点的Y位置，可省略 `(0)` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。SpriteAnime未创建、SpriteAnime是内置时返回 `0` 。
:::

----
#### SPRITEFRAME_SKEW

**`int SPRITEFRAME_SKEW str spriteAnime, int skewX, int skewY`**

为指定SpriteAnime的当前帧的变换矩阵附加 `倾斜` 效果。

附加后的效果无法撤销，只能通过调用 [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 指令重置当前帧的变换矩阵。

该指令仅对非内置SpriteAnime有效。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
* **int skewX**
  * 指定X倾斜量，输入 `100` 即为 `100%` 。
* **int skewY**
  * 指定Y倾斜量，输入 `100` 即为 `100%` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。SpriteAnime未创建、SpriteAnime是内置时返回 `0` 。
:::

----
#### SPRITEFRAME_RESETMATRIX

**`int SPRITEFRAME_RESETMATRIX str spriteAnime`**

重置指定SpriteAnime的当前帧的变换矩阵。

该指令仅对非内置SpriteAnime有效。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。SpriteAnime未创建、SpriteAnime是内置时返回 `0` 。
:::

----
#### SPRITEFRAME_COLORMATRIX

**`int SPRITEFRAME_COLORMATRIX str spriteAnime(, intArray colorMatrix)`**

为指定SpriteAnime的当前帧设置颜色矩阵。

颜色矩阵数组至少需要 `4行 x 5列` 大小，前4列的输入范围为 `0-510` ，即前4列支持2倍过饱和，第5列的输入范围为 `0-255` 。

不需要颜色矩阵时请再次调用该指令并省略第2参数 `colorMatrix` 。

该指令仅对非内置SpriteAnime有效。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
* **intArray colorMatrix**
  * 指定任意整数数组作为颜色矩阵，省略该参数将会清除已有的颜色矩阵。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。SpriteAnime未创建、SpriteAnime是内置时返回 `0` 。
:::

----
#### SPRITEFRAME_BLUR

**`int SPRITEFRAME_BLUR str spriteAnime(, int blur = 0)`**

为指定SpriteAnime的当前帧设置模糊效果。

该指令仅对非内置SpriteAnime有效。

:::tip[参数]
* **str spriteAnime**
  * 指定SpriteAnime名称。
* **int blur = 0**
  * 指定模糊程度，输入范围为 `0-100`，省略或输入 `0` 将会清除模糊效果。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。SpriteAnime未创建、SpriteAnime是内置时返回 `0` 。
:::

----
#### SPRITEENABLED

**`int SPRITEENABLED str sprite`**

获取指定Sprite图像的 `ENABLED` 值，该值用于控制该图像是否能最终绘制到屏幕上。

:::tip[参数]
* **str sprite**
  * 指定Sprite图像。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回指定Sprite图像的 `ENABLED` 值。Sprite图像未创建时返回 `0` 。
:::

----
#### SPRITESETENABLED

**`int SPRITESETENABLED str sprite, int enabled`**

该指令用于在保持Sprite图像的位置信息的前提下，控制该图像是否能最终绘制到屏幕上。

:::tip[参数]
* **str sprite**
  * 指定Sprite图像。
* **int enabled**
  * 指定该Sprite图像是否绘制。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。Sprite图像未创建时返回 `0` 。
:::

----
#### SPRITEEXIST

**`int SPRITEEXIST str sprite`**

使用方式与 [**`SPRITECREATED`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITECREATED.20str.20spriteName) 指令类似，检索有无指定Sprite但不会触发其引用图像的自动加载机制。

:::tip[参数]
* **str sprite**
  * 指定需要检索的Sprite名称。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否检索到指定的Sprite，找到时返回 `非0` 。
:::

----
#### SPRITEEXTEND

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height`**

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height, int posX, int posY`**

根据已有的Sprite来创建新的非内置Sprite，新Sprite的框选区域会受限于原Sprite的大小。

:::tip[参数]
* **str newSprite**
  * 指定新Sprite名称。
* **str srcSprite**
  * 指定原Sprite名称。
* **int x**
  * 指定框选的X位置。
* **int y**
  * 指定框选的Y位置。
* **int width**
  * 指定框选的宽度。
* **int height**
  * 指定框选的高度。
* **int posX**
  * 指定新Sprite的X绘制位置。
* **int posY**
  * 指定新Sprite的Y绘制位置。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功创建新的非内置Sprite，成功时返回 `非0` 。新Sprite与原Sprite同名、已存在同名的内置Sprite、原Sprite不存在、原Sprite不是单图类型的Sprite时返回 `0` 。
:::

----
#### CONSTSPRITECREATE

**`int CONSTSPRITECREATE str sprite, str imgPath`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height, int posX, int posY`**

根据指定的 `imgPath` 图像文件路径来创建新的内置Sprite。

该操作会取代已存在的非内置Sprite。

:::tip[参数]
* **str sprite**
  * 指定新Sprite名称。
* **str imgPath**
  * 指定图像文件路径。
* **int x**
  * 指定框选的X位置。
* **int y**
  * 指定框选的Y位置。
* **int width**
  * 指定框选的宽度。
* **int height**
  * 指定框选的高度。
* **int posX**
  * 指定新Sprite的X绘制位置。
* **int posY**
  * 指定新Sprite的Y绘制位置。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功创建新的内置Sprite，成功时返回 `非0` 。已存在同名的内置Sprite、指定的框选区域与图像不相交时返回 `0` 。
:::

----
### SPINE相关

----
#### SPINECREATE

**`int SPINECREATE int spineID, str spineResource`**

根据csv资源文件中定义的Spine资源来创建Spine动画到指定的 `spineID` 中。

该指令在创建Spine动画前会释放已创建的Spine动画，即无需在创建前调用 [**`SPINEDISPOSE`**](#spinedispose) 指令。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **str spineResource**
  * 指定Spine资源名称，名称忽略大小写。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功创建Spine动画，成功时返回 `非0` 。Spine动画资源不存在时返回 `0` 。
:::

----
#### SPINECREATEFROMFILE

**`int SPINECREATEFROMFILE int spineID, str atlasFile, str dataFile`**

根据指定的 `atlas文件` 和 `data文件(.skel或.json)` 来创建Spine动画到指定的 `spineID` 中。

该指令在创建Spine动画前会释放已创建的Spine动画，即无需在创建前调用 [**`SPINEDISPOSE`**](#spinedispose) 指令。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **str atlasFile**
  * 指定Spine动画的atlas文件。
* **str dataFile**
  * 指定Spine动画的.skel文件或.json文件。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功创建Spine动画，成功时返回 `非0` 。文件不存在、文件格式不符合时返回 `0` 。
:::

----
#### SPINECREATED

**`int SPINECREATED int spineID`**

检查指定的Spine动画是否已创建。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否已创建Spine动画，已创建时返回 `非0` 。
:::

----
#### SPINEDISPOSE

**`int SPINEDISPOSE int spineID(, int disposeImg = 0)`**

移除指定的Spine动画。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **int disposeImg = 0**
  * 指定是否释放该Spine动画所引用的图像，输入 `非0` 时将会释放图像。
:::

:::tip[返回值]
* **RESULT:0**
  * 总是返回 `非0` 。
:::

----
#### SPINEDISPOSEALL

**`int SPINEDISPOSEALL (int disposeImg = 0)`**

移除所有Spine动画。

:::tip[参数]
* **int disposeImg = 0**
  * 指定是否释放所有Spine动画所引用的图像，输入 `非0` 时将会释放图像。
:::

:::tip[返回值]
* **RESULT:0**
  * 总是返回 `非0` 。
:::

----
#### SPINEENABLED

**`int SPINEENABLED int spineID`**

获取指定Spine动画的 `ENABLED` 值，该值用于控制该Spine动画是否能最终绘制到屏幕上。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回指定Spine动画的 `ENABLED` 值。Spine动画未创建时返回 `0` 。
:::

----
#### SPINESETENABLED

**`int SPINESETENABLED int spineID, int enabled`**

该指令用于在保持Spine动画的位置信息的前提下，控制该Spine动画是否能最终绘制到屏幕上。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **int enabled**
  * 指定该Spine动画是否绘制。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。Spine动画未创建时返回 `0` 。
:::

----
#### GDRAWSPINE

**`int GDRAWSPINE int GID, int spineID`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

使用方式与 [**`GDRAWG`**](modify_com#gdrawg) 指令类似，在指定的 `GID` 图像上绘制 `spineID` Spine动画。

`colorMatrix` 颜色矩阵的使用方式请参阅 [**`GSETCOLORMATRIX`**](#gsetcolormatrix) 指令中的说明。

:::tip[参数]
* **int GID**
  * 指定目标图像ID。
* **int spineID**
  * 指定源SpineID。
* **int destX**
  * 指定目标X位置。
* **int destY**
  * 指定目标Y位置。
* **int destWidth**
  * 指定目标宽度，可传入 `负数` 以绘制翻转的图像。
* **int destHeight**
  * 指定目标高度，可传入 `负数` 以绘制翻转的图像。
* **int srcX**
  * 指定源X位置。
* **int srcY**
  * 指定源Y位置。
* **int srcWidth**
  * 指定源宽度。
* **int srcHeight**
  * 指定源高度。
* **intArray colorMatrix**
  * 指定任意整数数组作为颜色矩阵，可省略。该颜色矩阵仅在本次绘制时生效，绘制完成后会被自动清除。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功绘制，成功时返回 `非0` 。指定的图像或Spine动画未创建时返回 `0` 。
:::

----
#### ASYNCGDRAWSPINE

该指令的调用方式与 [**`GDRAWSPINE`**](#gdrawspine) 指令相同，用于异步进行绘图操作以避免长时间的程序停滞。

发送异步任务后，可调用 [**`ASYNCWAITALL`**](#asyncwaitall) 指令使程序强制等待所有异步任务直到完成。

:::tip[返回值]
* **RESULT:0**
  * 成功发送异步任务时返回 `非0` ，指定的图像或Spine动画未创建时返回 `0` 。
:::

----
#### ASYNCSPINELOAD

**`int ASYNCSPINELOAD int spineID`**

该指令用于异步加载指定的Spine动画所引用的图像以避免长时间的程序停滞。

发送异步任务后，可调用 [**`ASYNCWAITALL`**](#asyncwaitall) 指令使程序强制等待所有异步任务直到完成。

:::tip[参数]
* **int spineID**
  * 指定想要异步加载的SpineID。
:::

:::tip[返回值]
* **RESULT:0**
  * 成功发送异步任务时返回 `非0` ，Spine动画未创建时返回 `0` 。
:::

----
#### SPINEPOSX, SPINEPOSY

**`int SPINEPOSX int spineID`**

**`int SPINEPOSY int spineID`**

获取指定Spine动画的绘制位置。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回Spine动画的绘制位置。
:::

----
#### SPINESRCX, SPINESRCY

**`int SPINESRCX int spineID`**

**`int SPINESRCY int spineID`**

获取指定Spine动画的原坐标轴位置，获取的值会受到 [**`SPINESETSCALE`**](#spinesetscale) 指令的影响。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回Spine动画的原坐标轴位置。
:::

----
#### SPINEWIDTH, SPINEHEIGHT

**`int SPINEWIDTH int spineID`**

**`int SPINEHEIGHT int spineID`**

获取指定Spine动画的宽度或高度，获取的值会受到 [**`SPINESETSCALE`**](#spinesetscale) 指令的影响。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回Spine动画的宽度或高度。
:::

----
#### SPINESETPOS, SPINEMOVE

**`int SPINESETPOS int spineID, int posX, int posY`**

**`int SPINEMOVE int spineID, int offsetX, int offsetY`**

使用方式与 [**`SPRITESETPOS`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITESETPOS.20str.20spriteName.2C.20int.20posx.2C.20int.20posy)、[**`SPRITEMOVE`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITEMOVE.20str.20spriteName.2C.20int.20movex.2C.20int.20movey) 指令类似，用于设置或偏移指定Spine动画的绘制位置。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **int posX**
  * 指定X绘制位置。
* **int posY**
  * 指定Y绘制位置。
* **int offsetX**
  * 指定X绘制位置的偏移量。
* **int offsetY**
  * 指定Y绘制位置的偏移量。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。Spine动画未创建时返回 `0` 。
:::

----
#### SPINESETSCALE

**`int SPINESETSCALE int spineID, int scale`**

**`int SPINESETSCALE int spineID, int scaleX, int scaleY`**

设置指定Spine动画的缩放比例。

* 该指令会影响以下指令的输出结果：
  * [**`SPINESRCX, SPINESRCY`**](#spinesrcx-spinesrcy)
  * [**`SPINEWIDTH, SPINEHEIGHT`**](#spinewidth-spineheight)

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **int scale**
  * 指定整体缩放量，输入 `100` 即为 `100%` 。
* **int scaleX**
  * 指定X缩放量，输入 `100` 即为 `100%` 。
* **int scaleY**
  * 指定Y缩放量，输入 `100` 即为 `100%` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。Spine动画未创建时返回 `0` 。
:::

----
#### SPINEHASANIM, SPINEHASSKIN

**`int SPINEHASANIM int spineID, str animName`**

**`int SPINEHASSKIN int spineID, str skinName`**

检查指定Spine动画是否存在指定的动画或皮肤。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **str animName**
  * 指定动画名称，名称忽略大小写。
* **str skinName**
  * 指定皮肤名称，名称忽略大小写。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否存在指定的动画或皮肤，存在时返回 `非0` 。
:::

----
#### SPINESETANIM

**`int SPINESETANIM int spineID, int trackIndex, str animName(, int isLoop = 0)`**

为指定Spine动画设置指定的动画。若动画名称为空，则会清除指定的通道序号中原有的动画。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **int trackIndex**
  * 指定动画的通道序号。
* **str animName**
  * 指定动画名称，名称忽略大小写。若动画名称为空，则会清除指定的通道序号中原有的动画。
* **int isLoop = 0**
  * 指定动画是否循环。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置动画，成功设置、成功清除时返回 `非0` 。Spine动画未创建、指定的动画不存在时返回 `0` 。
:::

----
#### SPINEADDANIM

**`int SPINEADDANIM int spineID, int trackIndex, str animName(, int isLoop = 0, int delay = 1000)`**

为指定Spine动画叠加指定的动画。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **int trackIndex**
  * 指定动画的通道序号。
* **str animName**
  * 指定动画名称，名称忽略大小写。
* **int isLoop = 0**
  * 指定动画是否循环。
* **int delay = 1000**
  * 指定动画的播放延时，单位为毫秒。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功叠加动画，成功时返回 `非0` 。Spine动画未创建、指定的动画不存在时返回 `0` 。
:::

----
#### SPINESETSKIN

**`int SPINESETSKIN int spineID, str skinName`**

为指定Spine动画设置指定的皮肤。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **str skinName**
  * 指定皮肤名称，名称忽略大小写。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置皮肤，成功时返回 `非0` 。Spine动画未创建、指定的皮肤不存在时返回 `0` 。
:::

----
#### SPINESETTIME, SPINEUPDATETIME

**`int SPINESETTIME int spineID, int millsec`**

**`int SPINEUPDATETIME int spineID, int millsec`**

为指定Spine动画设置或推进指定的播放时间。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **int millsec**
  * 指定播放时间，单位为毫秒。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。Spine动画未创建时返回 `0` 。
:::

----
#### SPINETIMESCALE

**`int SPINETIMESCALE int spineID, int timeScale`**

为指定Spine动画设置指定的时间倍数，该属性用于控制Spine动画的播放速度。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **int timeScale**
  * 指定时间倍数，输入 `100` 即为 `100%` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。Spine动画未创建时返回 `0` 。
:::

----
#### SPINEANIMLIST, SPINESKINLIST

**`int SPINEANIMLIST int spineID, strArray outputArray`**

**`int SPINESKINLIST int spineID, strArray outputArray`**

获取指定Spine动画的动画列表或皮肤列表。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **strArray outputArray**
  * 指定用于获取列表的任意字符串数组。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回获取到的动画或皮肤个数。Spine动画未创建时返回 `0` 。
:::

----
#### CBGSETSPINE

**`int CBGSETSPINE int spineID, int x, int y, int zdepth`**

使用方式与 [**`CBGSETG`**](https://osdn.net/projects/emuera/wiki/excom#h5-CBGSETG.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20zdepth) 指令类似，将指定Spine动画显示到客户端背景上。

:::tip[参数]
* **int spineID**
  * 指定SpineID。
* **int x**
  * 指定X位置。
* **int y**
  * 指定Y位置。
* **int zdepth**
  * 指定Z轴深度。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功设置，成功时返回 `非0` 。Spine动画未创建时返回 `0` 。
:::

----
### 音频相关

----
#### AUDIOCREATE

**`int AUDIOCREATE str audioName, str srcAudio(, int volume, any startTime, any duration)`**

根据已有的 `srcAudio` 来创建新的Audio。

指定 `startTime` 和 `duration` 时只需参考原Audio所引用的音频文件的总时长。

`startTime` 和 `duration` 可输入 `TimeSpan` 或 `ms(毫秒)` ， `TimeSpan` 的书写格式请参阅 [**`TimeSpan.TryParse`**](https://learn.microsoft.com/zh-cn/dotnet/api/system.timespan.tryparse?view=netframework-4.8) 文档中的示例部分。

:::tip[参数]
* **str audioName**
  * 指定新Audio的名称。
* **str srcAudio**
  * 指定引用的原Audio名称。
* **int volume**
  * 指定新Audio的播放音量，可省略 `(原Audio的默认音量)` 。
* **any startTime**
  * 指定新Audio的起始时间，可省略 `(原Audio的起始时间)` 。
* **any duration**
  * 指定新Audio的播放时长，可省略 `(原Audio的播放时长)` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功创建Audio，成功时返回 `非0` 。Audio名称已存在、原Audio不存在时返回 `0` 。
:::

:::note[使用例]
```
AUDIOCREATE "New", "Old", 80			;创建新Audio“New”，音量为80
AUDIOCREATE "New", "Old", , "00:01:10", "10000"	;创建新Audio“New”，起始时间为1分10秒，播放时长为10000毫秒
```
:::

----
#### AUDIOCREATEFROMFILE

**`int AUDIOCREATEFROMFILE str audioName, str filePath(, int volume, any startTime, any duration)`**

根据指定的 `filePath` 音频文件来创建新的Audio。

指定 `startTime` 和 `duration` 时只需参考音频文件的总时长。

`startTime` 和 `duration` 参数可接收 `TimeSpan` 或 `ms(毫秒)` 值， `TimeSpan` 的书写格式请参阅 [**`TimeSpan.TryParse`**](https://learn.microsoft.com/zh-cn/dotnet/api/system.timespan.tryparse?view=netframework-4.8) 文档中的示例部分。

:::tip[参数]
* **str audioName**
  * 指定新Audio的名称。
* **str filePath**
  * 指定引用的音频文件相对路径，该路径必须确保从主目录开始。
* **int volume**
  * 指定新Audio的播放音量，可省略 `(100)` 。
* **any startTime**
  * 指定新Audio的起始时间，可省略 `(0)` 。
* **any duration**
  * 指定新Audio的播放时长，可省略 `(音频文件的总时长)` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功创建Audio，成功时返回 `非0` 。Audio名称已存在、音频文件不存在时返回 `0` 。
:::

:::note[使用例]
```
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", 80			;创建新Audio“New”，音量为80
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", , "00:01:10"	;创建新Audio“New”，起始时间为1分10秒
```
:::

----
#### AUDIOCREATED

**`int AUDIOCREATED str audioName`**

检查指定的Audio是否已创建。

:::tip[参数]
* **str audioName**
  * 指定Audio的名称。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示Audio是否已创建，Audio存在时返回 `非0` 。
:::

----
#### AUDIOVOLUME

**`int AUDIOVOLUME str audioName`**

获取指定Audio的音量。

:::tip[参数]
* **str audioName**
  * 指定Audio的名称。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回Audio的音量，Audio不存在时返回 `0` 。
:::

----
#### AUDIOSTARTTIME

**`int AUDIOSTARTTIME str audioName`**

获取指定Audio的播放起始时间，单位为 `ms(毫秒)` 。

:::tip[参数]
* **str audioName**
  * 指定Audio的名称。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回Audio的起始时间，Audio不存在时返回 `0` 。
:::

----
#### AUDIODURATION

**`int AUDIODURATION str audioName`**

获取指定Audio的播放持续时间，单位为 `ms(毫秒)` 。

:::tip[参数]
* **str audioName**
  * 指定Audio的名称。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回Audio的持续时间，Audio不存在时返回 `0` 。
:::

----
#### AUDIODISPOSE

**`int AUDIODISPOSE str audioName`**

移除指定的临时Audio，Audio所占用的内存会在播放结束后释放。只有运行时创建的临时Audio才能被移除。

:::tip[参数]
* **str audioName**
  * 指定需要移除的Audio的名称。
:::

:::tip[返回值]
* **RESULT:0**
  * 指示是否成功移除Audio，成功时返回 `非0` 。Audio不存在、指定的Audio不是临时Audio时返回 `0` 。
:::

----
#### AUDIODISPOSEALL

**`void AUDIODISPOSEALL`**

移除所有运行时创建的临时Audio，Audio所占用的内存会在播放结束后释放。内置Audio不受影响。

----
#### CURRENTBGM

**`str CURRENTBGM`**

获取当前正在播放的背景音乐名称。

:::tip[参数]
* 无
:::

:::tip[返回值]
* **RESULTS:0**
  * 当前正在播放的背景音乐名称，未播放任何音乐时返回 `空字符串` 。
:::

----
#### PAUSEBGM

**`void PAUSEBGM (int fadeOut = 0)`**

暂停当前正在播放的背景音乐。

:::tip[参数]
* **int fadeOut = 0**
  * 指定淡出效果的持续时间，单位为 `ms(毫秒)` ，输入值 `省略` 或 `小于等于0` 时无效果，最大值为 `10000` 。
:::

----
### 模组相关

----
#### MODULELIST

**`int MODULELIST strArray1D array`**

获取已加载的模组ID列表。

:::tip[参数]
* **strArray1D array**
  * 指定存入模组ID列表的一维数组。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回获取到的模组ID数量。
:::

----
#### MODULEPATH

**`str MODULEPATH str modID`**

获取指定的已加载模组的文件夹相对路径。

:::tip[参数]
* **str modID**
  * 指定需要获取文件夹路径的模组ID。
:::

:::tip[返回值]
* **RESULTS:0**
  * 返回获取到的文件夹相对路径，模组ID不存在或未加载时返回 `空字符串` 。
:::

:::note[使用例]
```
PRINTSL MODULEPATH("MyMod")			; 打印“mod/MyMod v1.0/”
```
:::

----
#### GETRESOURCEEXT

**`int GETRESOURCEEXT strArray1D array(, int option = 1P0 | 1P1)`**

获取所有启动器支持的资源文件扩展名，扩展名不带 `.` 号，且全部为小写。

:::tip[参数]
* **strArray1D array**
  * 指定存入文件扩展名的一维数组。
* **int option = 1P0 | 1P1**
  * 指定需要的资源类型， `1P0` = 图像资源， `1P1` = 音频资源，可省略 `(1P0 | 1P1)` 。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回获取到的扩展名数量。
:::

:::note[使用例]
```
GETRESOURCEEXT LOCALS, 1P0
PRINTS "Image Ext:" 
FOR LOCAL, 0, RESULT
	PRINTS " "
	PRINTS LOCALS:LOCAL
NEXT
PRINTL

GETRESOURCEEXT LOCALS, 1P1
PRINTS "Audio Ext:" 
FOR LOCAL, 0, RESULT
	PRINTS " "
	PRINTS LOCALS:LOCAL
NEXT
PRINTL

; 输出结果
; Image Ext: bmp jpg jpeg png webp tiff exif gif
; Audio Ext: mp3 mpeg3 wav wave flac fla aiff aif aifc aac adt adts m2ts mp2 3g2 3gp2 3gp 3gpp m4a m4v mp4v mp4 mov asf wm wmv wma mp1 avi ac3 ec3
```
:::

----
#### TEXT

**`str TEXT anyParams keyName`**

根据指定的键名获取多语言文本，具体用法请参阅 [**`多语言功能`**](/#多语言功能) 部分。

:::tip[参数]
* **anyParams keyName**
  * 指定多语言文本的键名，输入的键名不需要区分大小写。
:::

:::tip[返回值]
* **RESULTS:0**
  * 返回指定的多语言文本，键名不存在、路径错误时返回 `空字符串`。
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

根据指定的键名获取多语言文本列表，具体用法请参阅 [**`多语言功能`**](/#多语言功能) 部分。

:::tip[参数]
* **strArray array**
  * 指定用于接收文本列表的数组。
* **anyParams keyName**
  * 指定多语言文本的键名，输入的键名不需要区分大小写。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回获取到的文本列表元素数，键名不存在、路径错误时返回 `0`。
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

**`int LANGUAGELIST strArray1D array`**

获取已加载的多语言ID列表，获取的ID会自动将 `减号(-)` 替换为 `下划线(_)`。

:::tip[参数]
* **strArray1D array**
  * 指定存入多语言ID列表的一维数组。
:::

:::tip[返回值]
* **RESULT:0**
  * 返回获取到的多语言ID数量。
:::
