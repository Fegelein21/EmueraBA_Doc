---
sidebar_position: 4
sidebar_label: 更新日志
---

# 更新日志 {#UpdateLog}

----
### 2025-06-08

为所有文档添加了AI翻译的英文、日文和韩文版本。

[**`Audio资源`**](/#AudioFunc) 从sound文件夹整合到resources中。

[**`GETRESOURCEEXT`**](new_com#getresourceext) 指令获取到的资源文件扩展名包含 `.` 号。

----
### 2025-05-07

新增用户定义变量关键字 **`RESIZE`** ，该关键字用于标记需要重设数组大小的变量。关于该关键字的更多使用事项请参阅 [**`ARRAYRESIZE`**](new_com#arrayresize)。

新增 [**`扩展变量类型`**](/#ExtendedVariableType)，支持列表、哈希列表、字典等变量类型。

角色型二维数组支持省略第1参数（当 **`キャラクタ変数の引数を補完しない`** (不自动补完角色变量的参数) 设置项未启用时）。

[**`ERDNAME`**](modify_com#erdname) 指令省略第3参数时将会查找数组最后一维的下标键名。

新增 [**`列表相关`**](new_com#ListRelated)、[**`哈希列表相关`**](new_com#HashListRelated)、[**`字典相关`**](new_com#DictRelated)、[**`字典集合相关`**](new_com#DictItemRelated) 指令。

新增 [**`SPRITEANIMEOFFSETTIME`**](new_com#spriteanimeoffsettime) 指令，可为指定SpriteAnime的播放时间添加一个偏移值。

新增 [**`MAP_COPY`**](new_com#map_copy) 指令，可将指定源Map的所有元素复制到目标Map中。
