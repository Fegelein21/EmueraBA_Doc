---
sidebar_position: 4
sidebar_label: Update Log
---

# Update Log {#UpdateLog}

----
### 2025-06-08

Added AI-translated English, Japanese, and Korean versions for all documents.

[**`Audio Resources`**](/#AudioFunc) have been integrated from the sound folder into resources.

[**`GETRESOURCEEXT`**](new_com#getresourceext) The resource file extension obtained by the command includes the period (`.`).

----
### 2025-05-07

Added the user-defined variable keyword **`RESIZE`**, which is used to mark variables that require array resizing. For more details on using this keyword, please refer to [**`ARRAYRESIZE`**](new_com#arrayresize).

Added [**`Extended Variable Types`**](/#ExtendedVariableType), supporting variable types such as lists, hash lists, and dictionaries.

Two-dimensional character-type arrays support omitting the first parameter (when the **`キャラクタ変数の引数を補完しない`** (Don't autocomplete arguments in character variables) option is not enabled).

When the third parameter of [**`ERDNAME`**](modify_com#erdname) is omitted, it will retrieve the key names of the indices in the array's last dimension.

Added [**`List-related`**](new_com#ListRelated), [**`Hash List-related`**](new_com#HashListRelated), [**`Dictionary-related`**](new_com#DictRelated), [**`Dictionary Collection-related`**](new_com#DictItemRelated) commands.

Added the [**`SPRITEANIMEOFFSETTIME`**](new_com#spriteanimeoffsettime) command, which adds an offset value to the playback time of a specified SpriteAnime.

Added the [**`MAP_COPY`**](new_com#map_copy) command, which copies all elements from a specified source Map to a target Map.