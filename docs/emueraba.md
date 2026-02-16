---
sidebar_position: 1
sidebar_label: 介绍
slug: /
---

# EmueraBA

### 介绍 {#Introduction}

<center>
![](/img/main_window.png)
</center>

**EmueraBA** 启动器是由 [**`EmueraEE+EM`**](https://gitlab.com/EvilMask/emuera.em) 启动器修改而来，目前保持使用 `.NET Framework 4.8` 平台构建。

启动器的默认标题改为 `EmueraBA`，并更改了启动器的默认图标。

图形库更换为 [**`SkiaSharp`**](https://github.com/mono/SkiaSharp)，画面显示与图像绘制的相关功能已全面改用SkiaSharp，**`描画インターフェース`** (图形绘制接口) 配置项已被移除。  
请参阅 [**`GETRESOURCEEXT`**](new_com#getresourceext) 中的 `使用例` 部分以了解支持的图像格式。

支持读取和播放 `GIF` 、`WEBP` 动态图像，只需像静态图像那样在resources资源文件中定义，然后在ERB脚本中以同样的方式打印显示即可。  
可以使用 [**`SETANIMETIMER`**](modify_com#setanimetimer) 指令来刷新画面以获得流畅的播放效果。

实现了自动识别字符范围功能，已能正确识别中、日、韩、英、Emoji字符并计算长度，**`内部で使用する東アジア言語`** (内部使用的东亚语言) 配置项已被移除。

在 `显示设置` 界面中新增 **`タブ文字幅`** (制表符宽度) 配置项，该配置项可调整 `制表符(\t)` 在文本中的字符长度，默认值为 `8`。  
制表符会根据之前的文本的字符长度来自动调整自身的字符长度，例如制表符之前有文本 `111`，则当前制表符会占据5个字符长度。

新增用户定义变量关键字 **`RESIZE`** ，该关键字用于标记需要重设数组大小的变量。关于该关键字的更多使用事项请参阅 [**`ARRAYRESIZE`**](new_com#arrayresize)。

支持截图功能，可通过菜单栏中的 `帮助 → 截图按钮` 来将当前的画面保存为文件，或通过新增的 [**`GSNAPSHOT`**](new_com#gsnapshot) 指令来获取当前画面的图像数据。

----
### 模组功能 {#ModuleFunc}

:::info[模组功能]

**新增了模组读取机制，并在启动器菜单栏中新增了一个 `模组列表` 会话窗口，可在此查看、开关模组以及调整模组加载顺序。**

<center>
![](/img/module_setting.png)
</center>

添加模组的方法如下：

- 在游戏主目录下新建 `mod` 文件夹，该文件夹即为**模组主目录**。
- 在 `mod` 文件夹下新建一个**模组文件夹**，文件夹名称不限，例如 `MyMod`。
- 在 `MyMod` 文件夹下新建名为 `_mod.csv` 的**模组标识文件**，并根据下述表格中的属性填写内容：

|属性         |描述|
|:---:        |---|
|ID           |该模组的唯一标识。若该标识为空或是与其他模组重名，则模组不会被识别。**请确保ID名称符合函数命名规范，且制定后不建议二次修改**。|
|Name         |该模组的显示名称。|
|Authors      |该模组的作者名称。|
|Cover        |该模组的显示封面。若要读取模组内的图像，可填写 `{0}` 作为模组所在路径，例如 `{0}resources/cover.png`|
|Description  |该模组的显示简介，可换行续写。**请确保Description属性写在其他属性之后**。|

```csv title="文件路径与示例内容：mod/MyMod/_mod.csv"
ID,MyMod
Name,我的mod v1.0
Authors,Tom & Jerry
Cover,{0}resources/cover.png
Description,我的mod的简介
我的mod的简介1
我的mod的简介2
```

接下来，您可以在模组文件夹中添加如下资源文件：

- 创建 `ERB` 文件夹以添加 `ERB、ERH、ERD` 文件。
- 创建 `resources` 文件夹以添加 `csv、png、jpg、webp` 等图像资源。
- 创建 `sound` 文件夹以添加 `csv、ogg、m4a、wav、mp3` 等音频资源。
- 创建 `text` 文件夹以添加 `json` 格式的多语言资源。
- 创建 `font` 文件夹以添加 `ttf、otf` 格式的字体资源。

模组内的资源文件与游戏主目录下的资源文件并无区别，文件名称不限，但需要注意模组之间的资源重复问题：

-  `ERB、ERH、ERD` 文件中出现任何内容重复的情况时，后排模组的内容会被跳过并发出警告。
- Sprite资源出现名称重复的情况时，同模组内的重复内容会被跳过并发出警告，不同模组之间会优先保留后排模组的内容。
- Audio资源出现名称重复的情况时，同模组内的重复内容会被跳过并发出警告，不同模组之间会优先保留后排模组的内容。
- 多语言资源出现键名路径重复的情况时，优先保留靠后的文本以及后排模组的内容。
- 字体资源出现字体名重复的情况时，优先保留后排模组的内容。

:::

----
### 多语言功能 {#Multilingual}

:::info[多语言功能]

**多语言功能可以方便创作者整理游戏中的文本以进行本地化翻译，之后在游戏运行时启动器会自动整合可用和优先的语言内容，以快速呈现多语言文本。**

添加多语言文本的方法如下。我们将以添加 `简体中文` 语言作为示例：

- 在游戏主目录下新建 `text` 文件夹，该文件夹即为**多语言主目录**。
- 在 `text` 文件夹下新建一个**区域语言文件夹**，文件夹名称需参考 [**`区域性语言`**](https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c) 文档中的 `语言标签(Language tag)`。
  - 通过查询上述文档可得知 `Chinese (Simplified)` 的区域名称为 `zh-CN`，该名称将作为文件夹名称。
  - 文件夹名称不分大小写，且不分 `下划线(_)` 与 `减号(-)`，但建议统一改为大写和 `下划线(_)`，例如 `ZH_CN`。
- 在 `ZH_CN` 文件夹下新建任意 `json` 格式的文件，并在文件中填入如下示例内容：

```json title="文件路径与示例内容：text/ZH_CN/text.json"
{
  //这是一条注释。

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
    //注意：请避免键名中包含换行符(\n)，例如 BA\nNANA 是不合规的键名，这是因为启动器在整合语言内容时利用了该字符。
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

至此，我们已成功添加了 `简体中文` 的多语言文本，接下来我们需要在设置中启用该语言：

- 打开启动器并进入 `模组列表`，可以看到窗口左下角的 `多语言列表` 里多了 `中文` 的选项，请将该选项双击启用，并点击 `保存` 按钮。
  - 若您已添加了多个不同的语言，您可使用鼠标拖动已启用的语言以调整语言的呈现顺序，列表顶部的优先级最高。
  - 此外，在 `模组列表` 中，如果模组之间出现键名路径重复的情况，则优先采用后排模组的文本内容。
  - 每次改动 `多语言列表` 后只有重启程序才能重置语言文本缓存，以及重置所有被重构为常量字符串的代码。

最后，在代码中使用 [**`TEXT`**](new_com#text) 与 [**`TEXTLIST`**](new_com#textlist) 指令来获取多语言文本，调用时只需按照json文件中自行设定的键名路径来输入键名即可：

```
LOCALS '= TEXT("start_game")		; 获取文本“开始游戏”，输入的键名无需区分大小写
PRINTSL TEXT("ITEM")			; 打印“物品”
PRINTSL TEXT("ITEM", "APPLE", "DESC")	; 打印“一种水果”

TEXTLIST LOCALS, "ITEM", "APPLE", "DESC"
PRINTSL LOCALS:0			; 打印“一种水果”
TEXTLIST LOCALS, "ITEM", "BANANA", "DESC"
PRINTSL LOCALS:0			; 打印“大香蕉，一条大香蕉”
PRINTSL LOCALS:1			; 打印“你的感觉真的很奇妙”
```

:::

----
### 音频功能 {#AudioFunc}

:::info[音频功能]

**音频组件更换为 [**`CSCore`**](https://github.com/filoe/cscore) ，并在启动器菜单栏中新增了一个 `音频` 会话窗口，可在此调节各项音量。**

<center>
![](/img/audio_setting.png)
</center>

可以如图像资源那样，在 `resources` 资源文件夹下放置音频文件、创建csv文件并定义**Audio资源**以得到更加自定义的音频效果。

```csv title="Audio资源的填写格式与示例内容："
; Audio名称,音频文件名,音量(100),起始时间(00:00:00),播放时长(音频文件的总时长)
MyMusic,MyMusic.ogg
MyMusic1,MyMusic1.m4a,100
MyMusic2,MyMusic2.wav,80,00:01:30
MyMusic3,MyMusic3.mp3,70,00:01:30,15000
```

csv文件中的 `起始时间` 和 `播放时长` 属性可接收 `TimeSpan` 或 `ms(毫秒)` 值，`TimeSpan` 的书写格式请参阅 [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) 文档中的示例部分。

请参阅 [**`音频相关`**](new_com#AudioRelated) 指令以了解更多关于音频的功能。  
请参阅 [**`GETRESOURCEEXT`**](new_com#getresourceext) 中的 `使用例` 部分以了解支持的音频格式。

:::

----
### Spine动画功能 {#SpineAnimFunc}

:::info[Spine动画功能]

添加了对 [**`Spine 运行时`**](https://zh.esotericsoftware.com/spine-runtimes) 的支持，可读取Spine动画文件并通过 [**`SkiaSharp`**](https://github.com/mono/SkiaSharp) 来渲染绘制画面。

- 目前支持以下版本的Spine运行时：
  -  **3.8.xx**
  -  **4.2.xx**

添加Spine资源的方法与添加图像资源类似，请将Spine资源文件放置在 `resources` 文件夹下并创建csv文件，在csv文件中填写如下内容：

```csv title="Spine资源的填写格式与示例内容："
; Spine资源名称,atlas文件,skel文件或json文件
aris_spine, aris.atlas, aris.skel
```

之后可在代码中使用 [**`SPINECREATE`**](new_com#spinecreate)、[**`CBGSETSPINE`**](new_com#cbgsetspine) 等指令加载并显示Spine动画到屏幕画面上。

```erb title="SPINE相关指令的使用示例："
; 设置动画刷新间隔，单位为毫秒
SETANIMETIMER 1000 / 60

; 创建一个Spine动画到自行指定的ID中
SPINECREATE 0, "aris_spine"

; 设置Spine动画的缩放比例为50%
SPINESETSCALE 0, 50

; 为Spine动画设置ANIM
SPINESETANIM 0, 0, "IDLE_01", 1
SPINESETANIM 0, 1, "00", 1

; 将指定的Spine动画显示到屏幕画面上
CBGSETSPINE 0, 0, 0, 1
```

请参阅 [**`SPINE相关`**](new_com#SpineRelated) 指令以了解更多关于Spine动画的功能。

:::

----
### 新增扩展变量类型 {#ExtendedVariableType}

#### 列表 {#ExTypeList}

列表的声明格式为 **`#LIST(S) <变量名>`**

声明该变量时支持与 `GLOBAL` 、`SAVEDATA` 、`DYNAMIC` 、`REF` 关键字同时定义。  
与 `SAVEDATA` 关键字定义时需要将 **`バイナリデータライターのバージョン`** (二进制存档写入器版本) 配置项更改为 `1809` 及以上。

请参阅 [**`列表相关`**](new_com#ListRelated) 指令以了解更多功能。

```erb title="使用例"
#LIST MY_LIST			; 声明一个值为`整数`类型、名称为 `MY_LIST` 的列表变量

LISTADD MY_LIST, 10		; 向 MY_LIST 中添加一个值为 10 的元素
PRINTVL MY_LIST:0		; 打印 MY_LIST 的 0 号元素，打印结果为 "10"
```

----
#### 哈希列表 {#ExTypeHashList}

哈希列表的声明格式为 **`#HASHLIST(S) <变量名>`**

声明该变量时支持与 `GLOBAL` 、`SAVEDATA` 、`DYNAMIC` 、`REF` 关键字同时定义。  
与 `SAVEDATA` 关键字定义时需要将 **`バイナリデータライターのバージョン`** (二进制存档写入器版本) 配置项更改为 `1809` 及以上。

请参阅 [**`哈希列表相关`**](new_com#HashListRelated) 指令以了解更多功能。

```erb title="使用例"
#HASHLISTS MY_HASHLIST			; 声明一个值为`字符串`类型、名称为 `MY_HASHLIST` 的哈希列表变量

HASHLISTADD MY_HASHLIST, "TEXT"		; 向 MY_HASHLIST 中添加一个值为 "TEXT" 的元素
PRINTVL HASHLISTHAS(MY_HASHLIST, "TEXT"); 打印 MY_HASHLIST 对值 "TEXT" 的查找结果，打印结果为 "1"
```

----
#### 字典 {#ExTypeDict}

字典的声明格式为 **`#DICT_<I|S><I|S> <变量名>`**  
如果声明的键类型为 `整数`，则支持使用ERD键词功能。

声明该变量时支持与 `CONST` 、`GLOBAL` 、`SAVEDATA` 、`DYNAMIC` 、`REF` 、[**`HARDCHECK`**](new_com#hardcheck) 关键字同时定义。  
与 `SAVEDATA` 关键字定义时需要将 **`バイナリデータライターのバージョン`** (二进制存档写入器版本) 配置项更改为 `1809` 及以上。

请参阅 [**`字典相关`**](new_com#DictRelated) 指令以了解更多功能。

```erb title="使用例"
#DICT_IS MY_DICT		; 声明一个键为`整数`类型、值为`字符串`类型、名称为 `MY_DICT` 的字典变量

MY_DICT:6 '= "TEXT"		; 向 MY_DICT 中写入一个键为 6、值为 "TEXT" 的元素
PRINTSL MY_DICT:6		; 打印 MY_DICT 中的键为 6 的值，打印结果为 "TEXT"
```

----
#### 数组型字典 {#ExTypeDictDim}

数组型字典的声明格式为 **`#DICT(S)_DIM(S) <变量名>(, 数组长度 = 1)`**  
如果声明的主键类型为 `整数`，则支持使用ERD键词功能。  
变量的第二维数组下标默认支持使用ERD键词功能。

声明该变量时支持与 `GLOBAL` 、`SAVEDATA` 、`DYNAMIC` 、`REF` 、[**`HARDCHECK`**](new_com#hardcheck) 关键字同时定义。  
与 `SAVEDATA` 关键字定义时需要将 **`バイナリデータライターのバージョン`** (二进制存档写入器版本) 配置项更改为 `1809` 及以上。

请参阅 [**`字典集合相关`**](new_com#DictItemRelated) 指令以了解更多功能。

```erb title="使用例"
#DICTS_DIM MY_DICTDIM, 10		; 声明一个主键为`字符串`类型、值为`整数`类型、名称为 `MY_DICTDIM` 的数组型字典变量，该变量所创建的每个数组的长度为 `10`

DICTITEMCREATE MY_DICTDIM, "NEW"	; 在 MY_DICTDIM 中创建一个名称为 "NEW" 的数组
MY_DICTDIM:"NEW":0 = 20			; 将 MY_DICTDIM 中的 "NEW" 数组的 0 号元素赋值为 20
PRINTVL MY_DICTDIM:"NEW":0		; 打印 MY_DICTDIM 中的 "NEW" 数组的 0 号元素，打印结果为 "20"
```

----
#### 列表型字典 {#ExTypeDictList}

列表型字典的声明格式为 **`#DICT(S)_LIST(S) <变量名>`**  
如果声明的主键类型为 `整数`，则支持使用ERD键词功能。

声明该变量时支持与 `GLOBAL` 、`SAVEDATA` 、`DYNAMIC` 、`REF` 、[**`HARDCHECK`**](new_com#hardcheck) 关键字同时定义。  
与 `SAVEDATA` 关键字定义时需要将 **`バイナリデータライターのバージョン`** (二进制存档写入器版本) 配置项更改为 `1809` 及以上。

请参阅 [**`列表相关`**](new_com#ListRelated)、[**`字典集合相关`**](new_com#DictItemRelated) 指令以了解更多功能。

```erb title="使用例"
#DICTS_LIST MY_DICTLIST			; 声明一个主键为`字符串`类型、值为`整数`类型、名称为 `MY_DICTLIST` 的列表型字典变量

DICTITEMCREATE MY_DICTLIST, "NEW"	; 在 MY_DICTLIST 中创建一个名称为 "NEW" 的列表
LISTADD MY_DICTLIST:"NEW", 20		; 向 MY_DICTLIST 中的 "NEW" 列表添加一个值为 20 的元素
PRINTVL MY_DICTLIST:"NEW":0		; 打印 MY_DICTLIST 中的 "NEW" 列表的 0 号元素，打印结果为 "20"
```

----
#### 哈希列表型字典 {#ExTypeDictHashList}

哈希列表型字典的声明格式为 **`#DICT(S)_HASHLIST(S) <变量名>`**  
如果声明的主键类型为 `整数`，则支持使用ERD键词功能。

声明该变量时支持与 `GLOBAL` 、`SAVEDATA` 、`DYNAMIC` 、`REF` 、[**`HARDCHECK`**](new_com#hardcheck) 关键字同时定义。  
与 `SAVEDATA` 关键字定义时需要将 **`バイナリデータライターのバージョン`** (二进制存档写入器版本) 配置项更改为 `1809` 及以上。

请参阅 [**`哈希列表相关`**](new_com#HashListRelated)、[**`字典集合相关`**](new_com#DictItemRelated) 指令以了解更多功能。

```erb title="使用例"
#DICTS_HASHLIST MY_DICTHASHLIST			; 声明一个主键为`字符串`类型、值为`整数`类型、名称为 `MY_DICTHASHLIST` 的哈希列表型字典变量

DICTITEMCREATE MY_DICTHASHLIST, "NEW"		; 在 MY_DICTHASHLIST 中创建一个名称为 "NEW" 的哈希列表
HASHLISTADD MY_DICTHASHLIST:"NEW", 20		; 向 MY_DICTHASHLIST 中的 "NEW" 哈希列表添加一个值为 20 的元素
PRINTVL HASHLISTHAS(MY_DICTHASHLIST:"NEW", 20)	; 打印 MY_DICTHASHLIST 中的 "NEW" 哈希列表对值 20 的查找结果，打印结果为 "1"
```

----
#### 字典型字典 {#ExTypeDictDict}

字典型字典的声明格式为 **`#DICT(S)_DICT_<I|S><I|S> <变量名>`**  
如果声明的主键类型为 `整数`，则支持使用ERD键词功能。  
如果声明的次键类型为 `整数`，则支持使用ERD键词功能。

声明该变量时支持与 `GLOBAL` 、`SAVEDATA` 、`DYNAMIC` 、`REF` 、[**`HARDCHECK`**](new_com#hardcheck) 关键字同时定义。  
与 `SAVEDATA` 关键字定义时需要将 **`バイナリデータライターのバージョン`** (二进制存档写入器版本) 配置项更改为 `1809` 及以上。

请参阅 [**`字典相关`**](new_com#DictRelated)、[**`字典集合相关`**](new_com#DictItemRelated) 指令以了解更多功能。

```erb title="使用例"
#DICTS_DICT_IS MY_DICTDICT		; 声明一个主键为`字符串`类型、次键为`整数`类型、值为`字符串`类型、名称为 `MY_DICTDICT` 的字典型字典变量

DICTITEMCREATE MY_DICTDICT, "NEW"	; 在 MY_DICTDICT 中创建一个名称为 "NEW" 的字典
MY_DICTDICT:"NEW":8 '= "TEXT"		; 向 MY_DICTDICT 中的 "NEW" 字典写入一个键为 8、值为 "TEXT" 的元素
PRINTSL MY_DICTDICT:"NEW":8		; 打印 MY_DICTDICT 中的 "NEW" 字典中的键为 8 的元素，打印结果为 "TEXT"
```

----
### 语法、指令与程序的兼容性变动 {#CompatibilityChanges}

解禁了 `函数型宏定义` 的相关功能，尚未完全测试该功能的可靠性。

**ERD键词功能的相关改动：**

- 省略键词索引值时，系统会为该键词自动分配一个尚未使用的索引值。  
  **警告：带 `SAVEDATA` 声明的变量不建议省略索引值，以避免游戏存档数据错乱。**
- 填写已存在的键词名称作为索引值时，将会直接引用该键词的索引值。

```csv title="ERD键词功能示例：ERB/example.erd"
1,能量饮料	; "能量饮料"的索引值被分配为1
,酒		; "酒"的索引值被自动分配为0，因为索引值0未被占用
酒,Wine		; "Wine"的索引值将引用自"酒"，即为0
果汁,ジュース	; "ジュース"的索引值将引用自后续的"果汁"，即为2
,果汁		; "果汁"的索引值被自动分配为2，因为索引值0和1已被占用
```

**FORM语法的相关改动：**

- 使用内插变量时，不再需要根据其变量类型区分花括号(`{STR}`)与百分比号(`%STR%`)。
- 新增对齐关键字 **`CENTER`**，可使文本在指定的字符长度内居中对齐。例如 `{"确认", 6, CENTER}` 将会格式化为 `" 确认 "`。
- 可以传入数值表达式作为对齐参数，例如 `{"确认", 6, 1 + 1}` 将会格式化为 `" 确认 "`。  
  具体的数值及含义如下：
  - 0 = 左对齐，相当于 `LEFT` 关键字。
  - 1 = 右对齐，相当于 `RIGHT` 关键字。
  - 2 = 居中对齐，相当于 `CENTER` 关键字。

**HTML语法的相关改动：**

- `div` 标签的 `bcolor` 属性更名为 `bdcolor` (borderColor)，以避免与其他标签中的 `bcolor` (backgroundColor)属性混淆。
- `div` 标签的 `bdcolor` 属性的输入值格式改为 `'color'` 单颜色值，不再接收四角颜色值。
- `div` 标签的 `border` 属性的输入值格式改为 `'thick'` 单数值，不再接收四角数值。
- `div` 标签的 `margin` 属性的效果改为向外扩张，不再向内挤压。

角色型二维数组支持省略第1参数（当 **`キャラクタ変数の引数を補完しない`** (不自动补完角色变量的参数) 配置项未启用时）。

[**`FOR-NEXT`**](modify_com#for-next) 与 [**`REPEAT-REND`**](modify_com#repeat-rend) 控制语句的临时缓存会随函数一同进出堆栈。

`__FILE__` 变量获取的文件路径的反斜杠 `\\` 替换为正斜杠 `/`。

[**`REPLACE`**](modify_com#replace) 指令的其中一种参数格式已被分离为独立指令 [**`REPLACEBYARRAY`**](new_com#replacebyarray)。

下列指令现已支持处理Emoji字符🎉，这些指令在处理Emoji字符时会通过计算显示宽度得出大致的字符长度。  
例如 `😀` 的字符长度为2，`👨‍👩‍👧‍👦` 的字符长度为4。

- [**`STRLEN、STRLENFORM`**](modify_com#strlen-strlenform)
- [**`STRFIND`**](modify_com#strfind)
- [**`STRLENS`**](modify_com#strlens)
- [**`SUBSTRING`**](modify_com#substring)

[**`SUBSTRING`**](modify_com#substring) 指令处理边缘字符的逻辑已变更。如果文本的选定位置处在长字符的中间，则后退到该字符的起始位置。  
也就是说，卡在起始位置的字符会被计入，卡在末尾位置的字符会被无视。

[**`ERDNAME`**](modify_com#erdname) 省略第3参数时将会查找数组最后一维的下标键词。

[**`INPUTMOUSEKEY`**](modify_com#inputmousekey) 指令会额外变更 `RESULTS:0` 和 `RESULT:3` 的值。

[**`GCREATE`**](modify_com#gcreate)、[**`GCREATEFROMFILE`**](modify_com#gcreatefromfile)、[**`GLOAD`**](modify_com#gsave-gload) 指令在创建图像前会释放已创建的图像，即无需在创建前调用 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 指令。

[**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) 指令的第2参数必须确保是从主目录开始的相对路径，且第3参数已被移除。

[**`GDASHSTYLE`**](modify_com#gdashstyle) 指令的线帽效果已变更。

[**`GDRAWTEXT`**](modify_com#gdrawtext) 指令仅返回 `RESULT:0`，其他返回值已失效。

[**`GDRAWGWITHMASK`**](modify_com#gdrawgwithmask) 的绘制结果受 alpha值 和 blue值 影响。

由于图形库的更换，[**`GDRAWG`**](modify_com#gdrawg)、[**`GDRAWSPRITE`**](modify_com#gdrawsprite) 指令的颜色矩阵的使用方式已变更，具体请参阅 [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) 指令中的说明。

[**`SETANIMETIMER`**](modify_com#setanimetimer) 指令在 [**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) 或者 [**`INPUTMOUSEKEY`**](modify_com#inputmousekey) 之类的计时等待的情况下仍会继续刷新动画。

[**`SPRITECREATE`**](modify_com#spritecreate)、[**`SPRITEANIMECREATE`**](modify_com#spriteanimecreate) 指令在创建Sprite前会释放已创建的非内置Sprite，即无需在创建前调用 [**`SPRITEDISPOSE`**](modify_com#spritedispose) 指令。如果已存在同名的内置Sprite则会创建失败。

[**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) 指令不再具备移除内置Sprite的功能，且能够释放所有内置Sprite所引用的图像。

[**`PLAYBGM`**](modify_com#playbgm)、[**`PLAYSOUND`**](modify_com#playsound) 指令的第1参数仅支持输入Audio名称。若要通过音频文件路径来播放，请先使用 [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) 指令来创建Audio。  
关于如何添加内置Audio资源，请参阅 [**`音频功能`**](#AudioFunc) 部分。

[**`SETBGMVOLUME`**](modify_com#setbgmvolume) 指令只会变更当前正在播放的背景音乐的音量，不再影响全局音量。

[**`SETSOUNDVOLUME`**](modify_com#setsoundvolume) 指令已被弃用，不再有任何效果。

[**`ENUMFILES`**](modify_com#enumfiles) 指令获取的文件路径的反斜杠 `\\` 替换为正斜杠 `/`。

通过菜单栏中的 `タイトルに戻る` 按钮返回标题画面时将会额外清空如下内容：

- 清空所有CBG图像，包括CBGBUTTON、CBGBMAP等，效果与 [**`CBGCLEAR`**](https://osdn.net/projects/emuera/wiki/excom#h5-GCLEAR.20int.20ID.2C.20int.20cARGB) 指令相同。
- 清空所有运行时创建的Sprite，释放所有Sprite所引用的图像，效果与 [**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) 指令相同。
- 清空所有运行时创建的Spine动画，释放所有Spine动画所引用的图像，效果与 [**`SPINEDISPOSEALL`**](new_com#spinedisposeall) 指令相同。
- 清空所有运行时创建的Audio并释放音频缓存，效果与 [**`AUDIODISPOSEALL`**](new_com#audiodisposeall) 指令相同。

`emuera.log` 游戏日志和 `console.log` 调试日志使用 `UTF-8-BOM` 编码保存。

`watchlist.csv` 变量监视列表使用 `UTF-8-BOM` 编码保存和读取。

关闭调试窗口时不再自动保存变量监视列表。
