---
sidebar_position: 1
sidebar_label: Introduction
slug: /
---

# Introduction {#Introduction}

<center>
![](/img/main_window.png)
</center>

**EmueraBA** Launcher is modified from the [**`EmueraEE+EM`**](https://gitlab.com/EvilMask/emuera.em) launcher and is currently built using the `.NET Framework 4.8` platform.

The default title of the launcher has been changed to `EmueraBA`, and the default icon of the launcher has been updated.

The graphics library has been replaced with [**`SkiaSharp`**](https://github.com/mono/SkiaSharp). All functions related to screen display and image rendering have been migrated to SkiaSharp, and the **`描画インターフェース`** (Drawing Interface) setting has been removed.

Automatic character range recognition has been implemented, allowing correct identification and length calculation for Chinese, Japanese, Korean, English, and Emoji characters. The **`内部で使用する東アジア言語`** (Internal language used) setting has been removed.

A new **`タブ文字幅`** (Tab Width) setting has been added to the display settings interface. This setting adjusts the character length of `tab characters (\t)` in text, with a default value of `8`.  
The tab character automatically adjusts its length based on the preceding text. For example, if the text before the tab is `111`, the tab will occupy 5 character spaces.

Added the user-defined variable keyword **`RESIZE`**, which is used to mark variables that require array resizing. For more details on using this keyword, please refer to [**`ARRAYRESIZE`**](new_com#arrayresize).  

----
### Mod Features {#ModuleFunc}

:::info[Mod Features]

**A new mod loading mechanism has been added, and a `Mod List` dialog window has been included in the launcher menu bar. Here, you can view, enable/disable mods, and adjust their loading order.**

<center>
![](/img/module_setting.png)
</center>

To add a mod, follow these steps:

- Create a new `mod` folder in the game's main directory. This folder will serve as the **main mod directory**.
- Inside the `mod` folder, create a new **mod folder** with any name, such as `MyMod`.
- Inside the `MyMod` folder, create a **mod identifier file** named `_mod.csv` and fill in the content according to the attributes in the table below:

|Attribute         |Description|
|:---:             |---|
|ID                |The unique identifier for the mod. If the ID is empty or conflicts with another mod, the mod will not be recognized. **Ensure the ID follows function naming conventions and avoid modifying it after creation**.|
|Name              |The display name of the mod.|
|Authors           |The author(s) of the mod.|
|Cover             |The display cover of the mod. To load an image from within the mod, use `{0}` as the mod's path, e.g., `{0}resources/cover.png`.|
|Description       |The display description of the mod. Line breaks are allowed. **Ensure the Description attribute is written after other attributes**.|

```csv title="File Path and Example Content: mod/MyMod/_mod.csv"
ID,MyMod
Name,My Mod v1.0
Authors,Tom & Jerry
Cover,{0}resources/cover.png
Description,Description of my mod
Description line 1
Description line 2
```

Next, you can add the following resource files to the mod folder:

- Create an `ERB` folder to add `ERB, ERH, ERD` files.
- Create a `resources` folder to add image resources such as `csv, png, jpg, webp`.
- Create a `sound` folder to add audio resources such as `csv, m4a, aac, wav, mp3`.
- Create a `text` folder to add multilingual resources in `json` format.
- Create a `font` folder to add font resources in `ttf, otf` formats.

Resource files within the mod folder are treated the same as those in the game's main directory. File names are unrestricted, but be mindful of resource conflicts between mods:

- If there are duplicate contents in `ERB, ERH, ERD` files, the content from the latter mod will be skipped, and a warning will be issued.
- If there are duplicate Sprite resource names, duplicates within the same mod will be skipped with a warning, while duplicates across different mods will prioritize the latter mod's content.
- If there are duplicate Audio resource names, duplicates within the same mod will be skipped with a warning, while duplicates across different mods will prioritize the latter mod's content.
- If there are duplicate key paths in multilingual resources, the latter text and mod content will take precedence.
- If there are duplicate font names, the latter mod's content will take precedence.

:::

----
### Multilingual Functionality {#Multilingual}

:::info[Multilingual Functionality]

**The multilingual feature allows developers to organize game text for localization. During runtime, the launcher will automatically integrate available and prioritized language content to quickly display multilingual text.**

To add multilingual text, follow these steps. We will use adding `Simplified Chinese` as an example:

- Create a new `text` folder in the game's main directory. This folder will serve as the **main multilingual directory**.
- Inside the `text` folder, create a **regional language folder**. The folder name should follow the [**`Locale Language`**](https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c) documentation's `Language tag`.
  - By referring to the above documentation, the regional name for `Chinese (Simplified)` is `zh-CN`, which will be used as the folder name.
  - Folder names are case-insensitive and can use either `underscore (_)` or `hyphen (-)`, but it is recommended to use uppercase and `underscore (_)`, e.g., `ZH_CN`.
- Inside the `ZH_CN` folder, create any `json` file and fill it with the following example content:

```json title="File Path and Example Content: text/ZH_CN/text.json"
{
  // This is a comment.

  "Key": "Content",
  "START_GAME": "Start Game",
  "ITEM": "Item",
  "ITEM":
  {
    "APPLE":
    {
      "NAME": "Apple",
      "DESC": "A type of fruit",
    },
    // Note: Avoid including line breaks (\n) in key names, e.g., BA\nNANA is an invalid key name. This is because the launcher uses this character to integrate language content.
    "BANANA":
    {
      "NAME": "Banana",
      "DESC":
      [
        "Big banana, a big banana",
        "Your feeling is really magical",
      ],
    },
  },
}
```

Now, we have successfully added `Simplified Chinese` multilingual text. Next, we need to enable this language in the settings:

- Open the launcher and go to the `Mod List`. You will see a `Multilingual List` option at the bottom left of the window, with `Chinese` added as an option. Double-click to enable it and click the `Save` button.
  - If you have added multiple languages, you can drag the enabled languages to adjust their display order, with the topmost language having the highest priority.
  - Additionally, in the `Mod List`, if there are duplicate key paths between mods, the text content from the latter mod will replace the former.
  - After modifying the `Multilingual List`, you must restart the program to reset the language text cache and all code refactored into constant strings.

Finally, use the [**`TEXT`**](new_com#text) and [**`TEXTLIST`**](new_com#textlist) commands in your code to retrieve multilingual text. Simply input the key path as defined in the json file:

```
LOCALS '= TEXT("start_game")		; Retrieve the text "Start Game". Key names are case-insensitive.
PRINTSL TEXT("ITEM")			; Print "Item"
PRINTSL TEXT("ITEM", "APPLE", "DESC")	; Print "A type of fruit"

TEXTLIST LOCALS, "ITEM", "APPLE", "DESC"
PRINTSL LOCALS:0			; Print "A type of fruit"
TEXTLIST LOCALS, "ITEM", "BANANA", "DESC"
PRINTSL LOCALS:0			; Print "Big banana, a big banana"
PRINTSL LOCALS:1			; Print "Your feeling is really magical"
```

:::

----
### Audio Functionality {#AudioFunc}

:::info[Audio Functionality]

**The audio component has been replaced with [**`CSCore`**](https://github.com/filoe/cscore), and a new `Audio` dialog window has been added to the launcher menu bar, where you can adjust various volume settings.**

<center>
![](/img/audio_setting.png)
</center>

You can place audio files in the `resources` folder, create CSV files, and define **Audio Resources** to achieve more customized audio effects, just like with image resources.  

```csv title="Audio Resource Format and Example Content:"
; Audio Name,Audio File Name,Volume (100),Start Time (00:00:00),Duration (Total Duration of Audio File)
MyMusic,MyMusic.mp3
MyMusic1,MyMusic1.mp3,100
MyMusic2,MyMusic2.m4a,80,00:01:30
MyMusic3,MyMusic3.wav,70,00:01:30,15000
```

The `Start Time` and `Duration` properties in the CSV file can accept either `TimeSpan` or `ms (milliseconds)` values. Refer to the [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) documentation for the `TimeSpan` format.

Please refer to the [**`Audio-related`**](new_com#AudioRelated) commands to learn more about audio features.

:::

----
### Spine Animation Functionality {#SpineAnimFunc}

:::info[Spine Animation Functionality]

Support for [**`Spine Runtime`**](https://zh.esotericsoftware.com/spine-runtimes) has been added. Spine animation files can now be read and rendered using [**`SkiaSharp`**](https://github.com/mono/SkiaSharp).

Currently, only Spine resources from version `3.8.xx` are supported.

To add Spine resources, follow a similar process to adding image resources. Place Spine resource files in the `resources` folder and create a csv file with the following content:

```csv title="Spine Resource Format and Example Content:"
; Spine Resource Name,Atlas File,Skel File or Json File
aris_spine, aris.atlas, aris.skel
```

You can then use the [**`SPINECREATE`**](new_com#spinecreate), [**`CBGSETSPINE`**](new_com#cbgsetspine) commands to load and display Spine animations on the screen.

```erb title="Example Usage of SPINE Commands:"
; Set animation refresh interval in milliseconds
SETANIMETIMER 1000 / 60

; Create a Spine animation with a specified ID
SPINECREATE 0, "aris_spine"

; Set the Spine animation's scale to 50%
SPINESETSCALE 0, 50

; Set ANIM for the Spine animation
SPINESETANIM 0, 0, "IDLE_01", 1
SPINESETANIM 0, 1, "00", 1

; Display the specified Spine animation on the screen
CBGSETSPINE 0, 0, 0, 1
```

Please refer to the [**`SPINE-related`**](new_com#SpineRelated) commands to learn more about Spine animation features.

:::

----
### Extended Variable Types {#ExtendedVariableType}

:::info[Extended Variable Types]

The following new variable types have been added:

- List (implementation of `List<value>`)
  - Declaration format: **`#LIST(S) <variable_name>`**  
    Example: `#LIST MY_LIST` declares a list variable named `MY_LIST` with integer values.

- Hash List (implementation of `HashSet<value>`)
  - Declaration format: **`#HASHLIST(S) <variable_name>`**  
    Example: `#HASHLISTS MY_HASHLIST` declares a hash list variable named `MY_HASHLIST` with string values.

- Dictionary (implementation of `Dictionary<key, value>`)
  - Declaration format: **`#DICT_(I|S)(I|S) <variable_name>`**  
    Example: `#DICT_IS MY_DICT` declares a dictionary variable named `MY_DICT` with integer keys and string values.

- List Dictionary (implementation of `Dictionary<dictKey, List<value>>`)
  - Declaration format: **`#DICT(S)_LIST(S) <variable_name>`**  
    Example: `#DICTS_LIST MY_DICTLIST` declares a list dictionary variable named `MY_DICTLIST` with string keys and integer values.

- Hash List Dictionary (implementation of `Dictionary<dictKey, HashSet<value>>`)
  - Declaration format: **`#DICT(S)_HASHLIST(S) <variable_name>`**  
    Example: `#DICTS_HASHLIST MY_DICTHASHLIST` declares a hash list dictionary variable named `MY_DICTHASHLIST` with string keys and integer values.

- Dictionary of Dictionaries (implementation of `Dictionary<dictKey, Dictionary<key, value>>`)
  - Declaration format: **`#DICT(S)_DICT_(I|S)(I|S) <variable_name>`**  
    Example: `#DICTS_DICT_IS MY_DICTDICT` declares a dictionary of dictionaries variable named `MY_DICTDICT` with string primary keys, integer secondary keys, and string values.

These extended variables can be declared with `GLOBAL`, `SAVEDATA`, `DYNAMIC`, and `REF` keywords.  
When using with `SAVEDATA` keyword, the **バイナリデータライターのバージョン** (BinaryDataWriter Version) setting must be set to `1809` or higher.

Refer to [**`List-related`**](new_com#ListRelated), [**`Hash List-related`**](new_com#HashListRelated), [**`Dictionary-related`**](new_com#DictRelated), [**`Dictionary Collection-related`**](new_com#DictItemRelated) commands for more functionality of extended variables.

```erb title="Example Usage of Extended Variables:"
#LIST MY_LIST
#HASHLISTS MY_HASHLIST
#DICT_IS MY_DICT
#DICTS_LIST MY_DICTLIST
#DICTS_HASHLIST MY_DICTHASHLIST
#DICTS_DICT_IS MY_DICTDICT

LISTADD MY_LIST, 10        ; Add element with value 10 to MY_LIST
PRINTVL MY_LIST:0          ; Print element at index 0 of MY_LIST (output: "10")

HASHLISTADD MY_HASHLIST, "TEXT"         ; Add value "TEXT" to MY_HASHLIST
PRINTVL HASHLISTHAS(MY_HASHLIST, "TEXT") ; Check if "TEXT" exists in MY_HASHLIST (output: "1")

MY_DICT:6 '= "TEXT"        ; Add key 6 with value "TEXT" to MY_DICT
PRINTSL MY_DICT:6          ; Print value for key 6 in MY_DICT (output: "TEXT")

DICTITEMCREATE MY_DICTLIST, "NEW"    ; Create list named "NEW" in MY_DICTLIST
LISTADD MY_DICTLIST:"NEW", 20        ; Add value 20 to "NEW" list
PRINTVL MY_DICTLIST:"NEW":0          ; Print index 0 of "NEW" list (output: "20")

DICTITEMCREATE MY_DICTHASHLIST, "NEW" ; Create hash list named "NEW" in MY_DICTHASHLIST
HASHLISTADD MY_DICTHASHLIST:"NEW", 20 ; Add value 20 to "NEW" hash list
PRINTVL HASHLISTHAS(MY_DICTHASHLIST:"NEW", 20) ; Check if 20 exists in "NEW" hash list (output: "1")

DICTITEMCREATE MY_DICTDICT, "NEW"     ; Create dictionary named "NEW" in MY_DICTDICT
MY_DICTDICT:"NEW":8 '= "TEXT"         ; Add key 8 with value "TEXT" to "NEW" dictionary
PRINTSL MY_DICTDICT:"NEW":8           ; Print value for key 8 in "NEW" dictionary (output: "TEXT")
```

:::

----
### Compatibility Changes in Programs and Commands {#CompatibilityChanges}

The functionality related to `function-like macro definitions` has been enabled, though its reliability has not been fully tested.

Two-dimensional character-type arrays support omitting the first parameter (when the **`キャラクタ変数の引数を補完しない`** (Don't autocomplete arguments in character variables) option is not enabled).

The backslashes `\\` in file paths retrieved by the `__FILE__` variable have been replaced with forward slashes `/`.

One of the parameter formats of the [**`REPLACE`**](modify_com#replace) command has been separated into a standalone command, [**`REPLACEBYARRAY`**](new_com#replacebyarray).

The following commands now support processing Emoji characters🎉. These commands calculate the display width to approximate the character length when handling Emoji characters.  
For example, `😀` has a character length of 2, and `👨‍👩‍👧‍👦` has a character length of 4.

- [**`STRLEN, STRLENFORM`**](modify_com#strlen-strlenform)
- [**`STRFIND`**](modify_com#strfind)
- [**`STRLENS`**](modify_com#strlens)
- [**`SUBSTRING`**](modify_com#substring)

The edge character handling logic of the [**`SUBSTRING`**](modify_com#substring) command has been changed. If the selected position is in the middle of a long character, it will backtrack to the start of that character.  
In other words, characters at the starting position will be included, while those at the ending position will be ignored.

When the third parameter of [**`ERDNAME`**](modify_com#erdname) is omitted, it will retrieve the key names of the indices in the array's last dimension.

The [**`INPUTMOUSEKEY`**](modify_com#inputmousekey) command will additionally change the values of `RESULTS:0` and `RESULT:3`.

The [**`GCREATE`**](modify_com#gcreate), [**`GCREATEFROMFILE`**](modify_com#gcreatefromfile), and [**`GLOAD`**](modify_com#gsave-gload) commands will release previously created images before creating new ones, eliminating the need to call [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) before creation.

The second parameter of the [**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) command must be a relative path starting from the main directory, and the third parameter has been removed.

The line cap effect of the [**`GDASHSTYLE`**](modify_com#gdashstyle) command has been changed.

The [**`GDRAWTEXT`**](modify_com#gdrawtext) command now only returns `RESULT:0`, and other return values are no longer valid.

The rendering result of [**`GDRAWGWITHMASK`**](modify_com#gdrawgwithmask) is affected by the alpha and blue values.

Due to the change in the graphics library, the usage of the color matrix in the [**`GDRAWG`**](modify_com#gdrawg) and [**`GDRAWSPRITE`**](modify_com#gdrawsprite) commands has been modified. Refer to the [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) command for details.

The [**`SETANIMETIMER`**](modify_com#setanimetimer) command will continue to refresh animations during timed waits, such as in [**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) or [**`INPUTMOUSEKEY`**](modify_com#inputmousekey).

The [**`SPRITECREATE`**](modify_com#spritecreate) and [**`SPRITEANIMECREATE`**](modify_com#spriteanimecreate) commands will release previously created non-built-in Sprites before creating new ones, eliminating the need to call [**`SPRITEDISPOSE`**](modify_com#spritedispose) before creation. If a built-in Sprite with the same name exists, creation will fail.

The [**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) command no longer removes built-in Sprites but can release all images referenced by built-in Sprites.

The first parameter of the [**`PLAYBGM`**](modify_com#playbgm) and [**`PLAYSOUND`**](modify_com#playsound) commands now only accepts Audio names. To play audio via file path, use the [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) command to create an Audio resource first.  
Refer to the [**`Audio Functionality`**](#AudioFunc) section for details on adding built-in Audio resources.

The [**`SETBGMVOLUME`**](modify_com#setbgmvolume) command now only changes the volume of the currently playing background music and no longer affects the global volume.

The [**`SETSOUNDVOLUME`**](modify_com#setsoundvolume) command has been deprecated and no longer has any effect.

The backslashes `\\` in file paths retrieved by the [**`ENUMFILES`**](modify_com#enumfiles) command have been replaced with forward slashes `/`.

Changes related to HTML code:
- The `bcolor` attribute of the `div` tag has been renamed to `bdcolor` (borderColor) to avoid confusion with `bcolor` (backgroundColor).
- The input format for the `bdcolor` attribute of the `div` tag has been changed to a single color value `'color'`, and it no longer accepts four-corner color values.
- The input format for the `border` attribute of the `div` tag has been changed to a single value `'thick'`, and it no longer accepts four-corner values.
- The `margin` attribute of the `div` tag now expands outward instead of squeezing inward.

When returning to the title screen via the `タイトルに戻る` (Return to Title) button in the menu bar, the following content will be cleared:

- All CBG images, including CBGBUTTON and CBGBMAP, will be cleared, equivalent to the [**`CBGCLEAR`**](https://osdn.net/projects/emuera/wiki/excom#h5-GCLEAR.20int.20ID.2C.20int.20cARGB) command.
- All runtime-created Sprites will be cleared, and all images referenced by Sprites will be released, equivalent to the [**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) command.
- All runtime-created Spine animations will be cleared, and all images referenced by Spine animations will be released, equivalent to the [**`SPINEDISPOSEALL`**](new_com#spinedisposeall) command.
- All runtime-created Audio will be cleared, and the audio cache will be released, equivalent to the [**`AUDIODISPOSEALL`**](new_com#audiodisposeall) command.

The `emuera.log` game log and `console.log` debug log are saved using `UTF-8-BOM` encoding.

The `watchlist.csv` variable watchlist is saved and read using `UTF-8-BOM` encoding.

The variable watchlist is no longer automatically saved when closing the debug window.
