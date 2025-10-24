---
sidebar_position: 4
sidebar_label: 更新日志
---

# 更新日志 {#UpdateLog}

----
### 2025-10-24

支持读取和播放 `GIF` 、`WEBP` 动态图像，只需像静态图像那样在resources资源文件中定义，然后在ERB脚本中以同样的方式打印显示即可。  
可以使用 [**`SETANIMETIMER`**](modify_com#setanimetimer) 指令来刷新画面以获得流畅的播放效果。

[**`INRANGE`**](modify_com#inrange) 指令的第1参数 `value` 可传入字符串，用于判断字符串的顺位是否在指定范围内。

----
### 2025-10-01

[**`FOR-NEXT`**](modify_com#for-next) 与 [**`REPEAT-REND`**](modify_com#repeat-rend) 控制语句的起始值、结束值、步进值等临时参数会随函数一同进出堆栈。

新增 [**`FOREACH-NEXTF`**](new_com#foreach-nextf) 控制语句，用于遍历指定的集合中的所有元素。

新增扩展变量类型 [**`数组型字典`**](/#ExTypeDictDim)。

新增变量关键字 [**`HARDCHECK`**](new_com#hardcheck)，用于控制字典变量是否对用户输入的主键和次键进行严格检查。

新增 [**`HASH`**](new_com#hash) 指令，用于为指定的参数值生成哈希码。

扩展变量类型 [**`字典`**](/#ExTypeDict) 支持声明 `CONST` 关键字。

- [**`ARRAYCOPY`**](modify_com#arraycopy) 指令改动：
  - 新增第3参数 `isLastDimOnly` ，用于指定是否仅复制源数组的最后一维的元素，可省略 (`0`) 。
  - 第2参数 `destVarName` 支持传入列表和哈希列表的变量名，当 `isLastDimOnly` 的参数值为 `0` 时，源数组中的所有元素将会添加到目标列表中。

----
### 2025-09-11

[**`ARRAYTIDY`**](new_com#arraytidy) 指令在整理完列表后将会移除空元素。

[**`DICTCOPY`**](new_com#dictcopy) 指令在填充字典后将返回目标变量中的元素总数。

- 以下指令在填充数组后将返回成功复制的元素数，在填充列表、哈希列表后将返回目标变量中的元素总数：
  - [**`LISTCOPY`**](new_com#listcopy)
  - [**`HASHLISTCOPY`**](new_com#hashlistcopy)
  - [**`DICTGETKEYS`**](new_com#dictgetkeys)
  - [**`DICTGETVALUES`**](new_com#dictgetvalues)
  - [**`DICTITEMGETKEYS`**](new_com#dictitemgetkeys)

新增 [**`ANYSAME`**](new_com#anysame) 指令，用于查找给定的参数中有无相同的值。

- 为以下指令添加了可传入数组、列表、哈希列表的参数格式：
  - [**`STRJOIN`**](modify_com#strjoin)
  - [**`SPINEANIMLIST`**](new_com#spineanimlist-spineskinlist)
  - [**`SPINESKINLIST`**](new_com#spineanimlist-spineskinlist)

- 为以下指令添加了可传入数组、列表的参数格式：
  - [**`ARRAYMSORT`**](modify_com#arraymsort)

----
### 2025-07-11

支持 **4.2.xx** 版本的Spine运行时。

新增 [**`DICTITEMGETKEYS`**](new_com#dictitemgetkeys) 指令，用于获取指定的字典集合中的所有主键名。

[**`STRSPLIT`**](new_com#strsplit) 指令新增第4参数 `removeEmpty` ，用于指定是否移除分割后的空元素。

[**`LISTREMOVEAT`**](new_com#listremoveat) 指令新增第3参数 `removeCount` ，用于指定移除的元素数，默认值为 `1` 。

- 为以下指令添加了可传入数组、列表、哈希列表的参数格式：
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

- 为以下指令添加了可传入数组、列表的参数格式：
  - [**`ARRAYTIDY`**](new_com#arraytidy)  
    对于列表，整理完毕后的空元素不会被移除。

----
### 2025-06-08

为所有文档添加了AI翻译的英文、日文和韩文版本。

[**`Audio资源`**](/#AudioFunc) 从sound文件夹整合到resources中。

[**`GETRESOURCEEXT`**](new_com#getresourceext) 指令获取到的资源文件扩展名包含 `.` 号。

----
### 2025-05-07

新增用户定义变量关键字 [**`RESIZE`**](new_com#resize)，该关键字用于标记需要重设大小的数组变量。

新增 [**`ARRAYRESIZE`**](new_com#arrayresize) 指令，用于重设指定的用户定义数组的大小。

新增 [**`扩展变量类型`**](/#ExtendedVariableType)，支持列表、哈希列表、字典等变量类型。

角色型二维数组支持省略第1参数（当 **`キャラクタ変数の引数を補完しない`** (不自动补完角色变量的参数) 设置项未启用时）。

[**`ERDNAME`**](modify_com#erdname) 指令省略第3参数时将会查找数组最后一维的下标键词。

新增 [**`列表相关`**](new_com#ListRelated)、[**`哈希列表相关`**](new_com#HashListRelated)、[**`字典相关`**](new_com#DictRelated)、[**`字典集合相关`**](new_com#DictItemRelated) 指令。

新增 [**`SPRITEANIMEOFFSETTIME`**](new_com#spriteanimeoffsettime) 指令，可为指定SpriteAnime的播放时间添加一个偏移值。

新增 [**`MAP_COPY`**](new_com#map_copy) 指令，可将指定源Map的所有元素复制到目标Map中。
