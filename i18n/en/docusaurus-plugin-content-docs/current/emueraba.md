---
sidebar_position: 1
sidebar_label: Introduction
slug: /
---

# EmueraBA

### Introduction {#Introduction}

<center>
![](/img/main_window.png)
</center>

**EmueraBA** is a launcher derived from modifications of the [**`EmueraEE+EM`**](https://gitlab.com/EvilMask/emuera.em) launcher. It is currently built using the **`.NET Framework 4.8`** platform.

The launcher's default title has been changed to `EmueraBA`, and its default icon has been updated.

The graphics library has been replaced with [**`SkiaSharp`**](https://github.com/mono/SkiaSharp). All functionalities related to screen display and image drawing have been migrated to SkiaSharp, and the **`描画インターフェース`** (Graphics Drawing Interface) setting item has been removed.  
Please refer to the `使用例` (Usage Example) section in [**`GETRESOURCEEXT`**](new_com#getresourceext) for information on supported image formats.

Supports reading and playing dynamic images like `GIF` and `WEBP`. Simply define them in the resources file like static images and then print/display them in ERB scripts in the same way.  
You can use the [**`SETANIMETIMER`**](modify_com#setanimetimer) instruction to refresh the screen for smooth playback.

Implemented automatic character range recognition. It can now correctly identify and calculate the length of Chinese, Japanese, Korean, English, and Emoji characters. The **`内部で使用する東アジア言語`** (Internally Used East Asian Languages) setting item has been removed.

Added a **`タブ文字幅`** (Tab Character Width) setting item in the `Display Settings` interface. This setting adjusts the character length of `tab characters (\t)` in text, with a default value of `8`.  
Tab characters automatically adjust their own character length based on the length of preceding text. For example, if the text before a tab is `111`, the current tab will occupy 5 character spaces.

Added the user-defined variable keyword **`RESIZE`**, which is used to mark variables that require array resizing. For more details on using this keyword, please refer to [**`ARRAYRESIZE`**](new_com#arrayresize).

Supports screenshot functionality. You can save the current screen as a file via `Help → Screenshot Button` in the menu bar, or obtain the current screen's image data via the newly added [**`GSNAPSHOT`**](new_com#gsnapshot) instruction.

---
### Module Functionality {#ModuleFunc}

:::info[Module Functionality]

**Added a module loading mechanism and a new `Module List` dialog window in the launcher's menu bar, where you can view, enable/disable modules, and adjust their loading order.**

<center>
![](/img/module_setting.png)
</center>

The method for adding modules is as follows:

- Create a new `mod` folder in the game's main directory. This folder serves as the **Module Main Directory**.
- Create a **Module Folder** inside the `mod` folder. The folder name can be arbitrary, e.g., `MyMod`.
- Create a **Module Identifier File** named `_mod.csv` inside the `MyMod` folder, and fill in its content according to the attributes in the table below:

| Attribute    | Description                                                                                                                                                                                                                               |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ID           | The unique identifier for this module. If this ID is empty or duplicates another module's ID, the module will not be recognized. **Ensure the ID name follows function naming conventions, and it is not recommended to modify it after creation.** |
| Name         | The display name of this module.                                                                                                                                                                                                          |
| Authors      | The author(s) of this module.                                                                                                                                                                                                             |
| Cover        | The display cover image for this module. To load an image from within the module, you can use `{0}` as the module's path, e.g., `{0}resources/cover.png`.                                                                                |
| Description  | The display description for this module. Multi-line descriptions are supported. **Ensure the Description attribute is written after all other attributes.**                                                                               |

```csv title="File Path and Example Content: mod/MyMod/_mod.csv"
ID,MyMod
Name,My Mod v1.0
Authors,Tom & Jerry
Cover,{0}resources/cover.png
Description,Description of my mod
Description line 1 of my mod
Description line 2 of my mod
```

Next, you can add the following resource files within the module folder:

- Create an `ERB` folder to add `ERB, ERH, ERD` files.
- Create a `resources` folder to add image resources like `csv, png, jpg, webp`.
- Create a `sound` folder to add audio resources like `csv, ogg, m4a, wav, mp3`.
- Create a `text` folder to add multi-language resources in `json` format.
- Create a `font` folder to add font resources in `ttf, otf` format.

Resource files within a module are no different from those in the game's main directory. Filenames are not restricted, but note potential resource duplication between modules:

- For `ERB, ERH, ERD` files, if any content is duplicated, content from modules loaded later will be skipped and a warning will be issued.
- For Sprite resources, duplicate names within the same module will be skipped with a warning. Between different modules, content from modules loaded later will be prioritized.
- For Audio resources, duplicate names within the same module will be skipped with a warning. Between different modules, content from modules loaded later will be prioritized.
- For multi-language resources, if key path names are duplicated, the text from later entries and modules loaded later will be prioritized.
- For font resources, if font names are duplicated, content from modules loaded later will be prioritized.

:::

---
### Multi-Language Functionality {#Multilingual}

:::info[Multi-Language Functionality]

**The multi-language functionality facilitates creators in organizing in-game text for localization. During runtime, the launcher automatically integrates available and prioritized language content to quickly present multi-language text.**

The method for adding multi-language text is as follows. We'll use adding `Simplified Chinese` as an example:

- Create a new `text` folder in the game's main directory. This folder serves as the **Multi-Language Main Directory**.
- Create a **Locale Language Folder** inside the `text` folder. The folder name should refer to the `Language tag` in the [**`Locale Language`**](https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c) documentation.
  - By consulting the documentation, we find the locale name for `Chinese (Simplified)` is `zh-CN`. This name will be used as the folder name.
  - Folder names are case-insensitive, and `underscore(_)` and `hyphen(-)` are treated the same. However, it is recommended to use uppercase and `underscore(_)` consistently, e.g., `ZH_CN`.
- Create any `json` format file inside the `ZH_CN` folder, and fill it with example content like below:

```json title="File Path and Example Content: text/ZH_CN/text.json"
{
  // This is a comment.

  "KeyName": "Content",
  "START_GAME": "Start Game",
  "ITEM": "Item",
  "ITEM":
  {
    "APPLE":
    {
      "NAME": "Apple",
      "DESC": "A type of fruit",
    },
    // Note: Avoid line breaks (\n) in key names, e.g., BA\nNANA is invalid because the launcher uses this character when integrating language content.
    "BANANA":
    {
      "NAME": "Banana",
      "DESC":
      [
        "Big banana, a big banana",
        "Your feeling is truly wonderful",
      ],
    },
  },
}
```

Now we have successfully added multi-language text for `Simplified Chinese`. Next, we need to enable this language in the settings:

- Open the launcher and enter the `Module List`. You will see an additional `Chinese` option in the `Multi-Language List` at the bottom left of the window. Double-click to enable this option and click the `Save` button.
  - If you have added multiple different languages, you can drag and drop the enabled languages to adjust their presentation order. The top of the list has the highest priority.
  - Also, in the `Module List`, if key path names are duplicated between modules, the text content from modules loaded later will be prioritized.
  - Each time the `Multi-Language List` is modified, you must restart the program to reset the language text cache and all code that has been reconstructed into constant strings.

Finally, use the [**`TEXT`**](new_com#text) and [**`TEXTLIST`**](new_com#textlist) instructions in your code to retrieve multi-language text. When calling, simply input the key name according to the key path you defined in the json file:

```
LOCALS '= TEXT("start_game")        ; Retrieves text "Start Game". Input key name is case-insensitive.
PRINTSL TEXT("ITEM")                ; Prints "Item"
PRINTSL TEXT("ITEM", "APPLE", "DESC") ; Prints "A type of fruit"

TEXTLIST LOCALS, "ITEM", "APPLE", "DESC"
PRINTSL LOCALS:0                    ; Prints "A type of fruit"
TEXTLIST LOCALS, "ITEM", "BANANA", "DESC"
PRINTSL LOCALS:0                    ; Prints "Big banana, a big banana"
PRINTSL LOCALS:1                    ; Prints "Your feeling is truly wonderful"
```

:::

---
### Audio Functionality {#AudioFunc}

:::info[Audio Functionality]

**The audio component has been replaced with [**`CSCore`**](https://github.com/filoe/cscore), and a new `Audio` dialog window has been added to the launcher's menu bar, where you can adjust various volume settings.**

<center>
![](/img/audio_setting.png)
</center>

Similar to image resources, you can place audio files in the `resources` folder, create csv files, and define **Audio Resources** for more customized audio effects.

```csv title="Audio Resource Format and Example Content:"
; AudioName,AudioFileName,Volume(100),StartTime(00:00:00),Duration(TotalDurationOfAudioFile)
MyMusic,MyMusic.ogg
MyMusic1,MyMusic1.m4a,100
MyMusic2,MyMusic2.wav,80,00:01:30
MyMusic3,MyMusic3.mp3,70,00:01:30,15000
```

In the csv file, the `StartTime` and `Duration` properties can accept `TimeSpan` or `ms (milliseconds)` values. For the `TimeSpan` format, please refer to the example section in the [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) documentation.

Please refer to the [**`Audio Related`**](new_com#AudioRelated) instructions for more details on audio functionality.  
Please refer to the `使用例` (Usage Example) section in [**`GETRESOURCEEXT`**](new_com#getresourceext) for information on supported audio formats.

:::

---
### Spine Animation Functionality {#SpineAnimFunc}

:::info[Spine Animation Functionality]

Added support for the [**`Spine Runtime`**](https://zh.esotericsoftware.com/spine-runtumes), allowing the reading of Spine animation files and rendering them via [**`SkiaSharp`**](https://github.com/mono/SkiaSharp).

- Currently supports the following Spine runtime versions:
    -  **3.8.xx**
    -  **4.2.xx**

The method for adding Spine resources is similar to adding image resources. Place Spine resource files in the `resources` folder, create a csv file, and fill it with the following content:

```csv title="Spine Resource Format and Example Content:"
; SpineResourceName,atlasFile,skelFileOrJsonFile
aris_spine, aris.atlas, aris.skel
```

You can then use instructions like [**`SPINECREATE`**](new_com#spinecreate) and [**`CBGSETSPINE`**](new_com#cbgsetspine) in your code to load and display Spine animations on the screen.

```erb title="Example Usage of SPINE-related Instructions:"
; Set animation refresh interval in milliseconds
SETANIMETIMER 1000 / 60

; Create a Spine animation with a self-specified ID
SPINECREATE 0, "aris_spine"

; Set the Spine animation's scale to 50%
SPINESETSCALE 0, 50

; Set ANIM for the Spine animation
SPINESETANIM 0, 0, "IDLE_01", 1
SPINESETANIM 0, 1, "00", 1

; Display the specified Spine animation on the screen
CBGSETSPINE 0, 0, 0, 1
```

Please refer to the [**`SPINE Related`**](new_com#SpineRelated) instructions for more details on Spine animation functionality.

:::

---
### New Extended Variable Types {#ExtendedVariableType}

#### List {#ExTypeList}

The declaration format for a List is **`#LIST(S) <VariableName>`**

Supports simultaneous definition with `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF` keywords when declaring this variable.  
When defined with the `SAVEDATA` keyword, the **`バイナリデータライターのバージョン`** (Binary Archive Writer Version) setting must be changed to `1809` or higher.

Please refer to the [**`List Related`**](new_com#ListRelated) instructions for more functionality.

:::note[Usage Example]
```erb
#LIST MY_LIST             ; Declare a List variable named `MY_LIST` with `integer` type values

LISTADD MY_LIST, 10       ; Add an element with value 10 to MY_LIST
PRINTVL MY_LIST:0         ; Print the 0th element of MY_LIST, result is "10"
```
:::

---
#### Hash List {#ExTypeHashList}

The declaration format for a Hash List is **`#HASHLIST(S) <VariableName>`**

Supports simultaneous definition with `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF` keywords when declaring this variable.  
When defined with the `SAVEDATA` keyword, the **`バイナリデータライターのバージョン`** (Binary Archive Writer Version) setting must be changed to `1809` or higher.

Please refer to the [**`Hash List Related`**](new_com#HashListRelated) instructions for more functionality.

:::note[Usage Example]
```erb
#HASHLISTS MY_HASHLIST            ; Declare a Hash List variable named `MY_HASHLIST` with `string` type values

HASHLISTADD MY_HASHLIST, "TEXT"   ; Add an element with value "TEXT" to MY_HASHLIST
PRINTVL HASHLISTHAS(MY_HASHLIST, "TEXT") ; Print the search result for value "TEXT" in MY_HASHLIST, result is "1"
```
:::

---
#### Dictionary {#ExTypeDict}

The declaration format for a Dictionary is **`#DICT_<I|S><I|S> <VariableName>`**  
If the declared key type is `integer`, it supports the ERD keyword feature.

Supports simultaneous definition with `CONST`, `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) keywords when declaring this variable.  
When defined with the `SAVEDATA` keyword, the **`バイナリデータライターのバージョン`** (Binary Archive Writer Version) setting must be changed to `1809` or higher.

Please refer to the [**`Dictionary Related`**](new_com#DictRelated) instructions for more functionality.

:::note[Usage Example]
```erb
#DICT_IS MY_DICT      ; Declare a Dictionary variable named `MY_DICT` with `integer` type keys and `string` type values

MY_DICT:6 '= "TEXT"   ; Write an element with key 6 and value "TEXT" into MY_DICT
PRINTSL MY_DICT:6     ; Print the value for key 6 in MY_DICT, result is "TEXT"
```
:::

---
#### Array-Type Dictionary {#ExTypeDictDim}

The declaration format for an Array-Type Dictionary is **`#DICT(S)_DIM(S) <VariableName>(, ArrayLength = 1)`**  
If the declared primary key type is `integer`, it supports the ERD keyword feature.  
The second dimension array subscript of the variable supports the ERD keyword feature by default.

Supports simultaneous definition with `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) keywords when declaring this variable.  
When defined with the `SAVEDATA` keyword, the **`バイナリデータライターのバージョン`** (Binary Archive Writer Version) setting must be changed to `1809` or higher.

Please refer to the [**`Dictionary Collection Related`**](new_com#DictItemRelated) instructions for more functionality.

:::note[Usage Example]
```erb
#DICTS_DIM MY_DICTDIM, 10        ; Declare an Array-Type Dictionary variable named `MY_DICTDIM` with `string` type primary keys and `integer` type values. Each array created by this variable has a length of `10`.

DICTITEMCREATE MY_DICTDIM, "NEW" ; Create an array named "NEW" in MY_DICTDIM
MY_DICTDIM:"NEW":0 = 20          ; Assign the value 20 to the 0th element of the "NEW" array in MY_DICTDIM
PRINTVL MY_DICTDIM:"NEW":0       ; Print the 0th element of the "NEW" array in MY_DICTDIM, result is "20"
```
:::

---
#### List-Type Dictionary {#ExTypeDictList}

The declaration format for a List-Type Dictionary is **`#DICT(S)_LIST(S) <VariableName>`**  
If the declared primary key type is `integer`, it supports the ERD keyword feature.

Supports simultaneous definition with `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) keywords when declaring this variable.  
When defined with the `SAVEDATA` keyword, the **`バイナリデータライターのバージョン`** (Binary Archive Writer Version) setting must be changed to `1809` or higher.

Please refer to the [**`List Related`**](new_com#ListRelated) and [**`Dictionary Collection Related`**](new_com#DictItemRelated) instructions for more functionality.

:::note[Usage Example]
```erb
#DICTS_LIST MY_DICTLIST          ; Declare a List-Type Dictionary variable named `MY_DICTLIST` with `string` type primary keys and `integer` type values

DICTITEMCREATE MY_DICTLIST, "NEW" ; Create a list named "NEW" in MY_DICTLIST
LISTADD MY_DICTLIST:"NEW", 20    ; Add an element with value 20 to the "NEW" list in MY_DICTLIST
PRINTVL MY_DICTLIST:"NEW":0      ; Print the 0th element of the "NEW" list in MY_DICTLIST, result is "20"
```
:::

---
#### Hash List-Type Dictionary {#ExTypeDictHashList}

The declaration format for a Hash List-Type Dictionary is **`#DICT(S)_HASHLIST(S) <VariableName>`**  
If the declared primary key type is `integer`, it supports the ERD keyword feature.

Supports simultaneous definition with `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) keywords when declaring this variable.  
When defined with the `SAVEDATA` keyword, the **`バイナリデータライターのバージョン`** (Binary Archive Writer Version) setting must be changed to `1809` or higher.

Please refer to the [**`Hash List Related`**](new_com#HashListRelated) and [**`Dictionary Collection Related`**](new_com#DictItemRelated) instructions for more functionality.

:::note[Usage Example]
```erb
#DICTS_HASHLIST MY_DICTHASHLIST          ; Declare a Hash List-Type Dictionary variable named `MY_DICTHASHLIST` with `string` type primary keys and `integer` type values

DICTITEMCREATE MY_DICTHASHLIST, "NEW"    ; Create a hash list named "NEW" in MY_DICTHASHLIST
HASHLISTADD MY_DICTHASHLIST:"NEW", 20    ; Add an element with value 20 to the "NEW" hash list in MY_DICTHASHLIST
PRINTVL HASHLISTHAS(MY_DICTHASHLIST:"NEW", 20) ; Print the search result for value 20 in the "NEW" hash list of MY_DICTHASHLIST, result is "1"
```
:::

---
#### Dictionary-Type Dictionary {#ExTypeDictDict}

The declaration format for a Dictionary-Type Dictionary is **`#DICT(S)_DICT_<I|S><I|S> <VariableName>`**  
If the declared primary key type is `integer`, it supports the ERD keyword feature.  
If the declared secondary key type is `integer`, it supports the ERD keyword feature.

Supports simultaneous definition with `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) keywords when declaring this variable.  
When defined with the `SAVEDATA` keyword, the **`バイナリデータライターのバージョン`** (Binary Archive Writer Version) setting must be changed to `1809` or higher.

Please refer to the [**`Dictionary Related`**](new_com#DictRelated) and [**`Dictionary Collection Related`**](new_com#DictItemRelated) instructions for more functionality.

:::note[Usage Example]
```erb
#DICTS_DICT_IS MY_DICTDICT      ; Declare a Dictionary-Type Dictionary variable named `MY_DICTDICT` with `string` type primary keys, `integer` type secondary keys, and `string` type values

DICTITEMCREATE MY_DICTDICT, "NEW" ; Create a dictionary named "NEW" in MY_DICTDICT
MY_DICTDICT:"NEW":8 '= "TEXT"   ; Write an element with secondary key 8 and value "TEXT" into the "NEW" dictionary within MY_DICTDICT
PRINTSL MY_DICTDICT:"NEW":8     ; Print the value for secondary key 8 in the "NEW" dictionary of MY_DICTDICT, result is "TEXT"
```
:::

---
### Program and Instruction Compatibility Changes {#CompatibilityChanges}

Unbanned the related functionalities of `Function-Type Macro Definitions`. The reliability of this feature has not been fully tested.

- Improvements to the ERD Keyword feature:
    - When the keyword index value is omitted, the system automatically assigns an unused index value to that keyword.  
      **Warning: Variables declared with SAVEDATA are not recommended to omit index values to avoid game save data corruption.**
    - When an existing keyword name is entered as an index value, it will directly reference that keyword's index value.

```csv title="ERD Keyword Feature Example: ERB/example.erd"
1,能量饮料	; Index value for "能量饮料" is assigned as 1
,酒		; Index value for "酒" is automatically assigned as 0 because index 0 is unused
酒,Wine		; Index value for "Wine" references "酒", i.e., 0
果汁,ジュース	; Index value for "ジュース" references the subsequent "果汁", i.e., 2
,果汁		; Index value for "果汁" is automatically assigned as 2 because indices 0 and 1 are already occupied
```

Character-type two-dimensional arrays support omitting the first parameter (when the **`キャラクタ変数の引数を補完しない`** (Do Not Auto-Complete Character Variable Parameters) setting is not enabled).

Temporary caches for the [**`FOR-NEXT`**](modify_com#for-next) and [**`REPEAT-REND`**](modify_com#repeat-rend) control statements follow the function in and out of the stack.

The backslashes `\\` in the file path obtained by the `__FILE__` variable are replaced with forward slashes `/`.

One of the parameter formats of the [**`REPLACE`**](modify_com#replace) instruction has been separated into an independent instruction [**`REPLACEBYARRAY`**](new_com#replacebyarray).

The following instructions now support processing Emoji characters 🎉. When handling Emoji characters, these instructions calculate the approximate character length based on display width.  
For example, `😀` has a character length of 2, and `👨‍👩‍👧‍👦` has a character length of 4.

- [**`STRLEN, STRLENFORM`**](modify_com#strlen-strlenform)
- [**`STRFIND`**](modify_com#strfind)
- [**`STRLENS`**](modify_com#strlens)
- [**`SUBSTRING`**](modify_com#substring)

The edge character handling logic of the [**`SUBSTRING`**](modify_com#substring) instruction has been changed. If the selected position in the text falls in the middle of a wide character, it retreats to the starting position of that character.  
That is, characters caught at the start position are included, and characters caught at the end position are ignored.

When the third parameter is omitted in [**`ERDNAME`**](modify_com#erdname), it will look up the keyword for the last dimension subscript of the array.

The [**`INPUTMOUSEKEY`**](modify_com#inputmousekey) instruction will additionally change the values of `RESULTS:0` and `RESULT:3`.

The [**`GCREATE`**](modify_com#gcreate), [**`GCREATEFROMFILE`**](modify_com#gcreatefromfile), and [**`GLOAD`**](modify_com#gsave-gload) instructions will release already created images before creating a new one, meaning there's no need to call the [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) instruction before creation.

The second parameter of [**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) must be a relative path starting from the main directory, and the third parameter has been removed.

The line cap effect of the [**`GDASHSTYLE`**](modify_com#gdashstyle) instruction has been changed.

The [**`GDRAWTEXT`**](modify_com#gdrawtext) instruction now only returns `RESULT:0`; other return values are no longer valid.

The drawing result of [**`GDRAWGWITHMASK`**](modify_com#gdrawgwithmask) is affected by alpha value and blue value.

Due to the graphics library change, the usage of the color matrix in the [**`GDRAWG`**](modify_com#gdrawg) and [**`GDRAWSPRITE`**](modify_com#gdrawsprite) instructions has changed. For details, please refer to the explanation in the [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) instruction.

The [**`SETANIMETIMER`**](modify_com#setanimetimer) instruction will continue to refresh animations even during timed waits like [**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) or [**`INPUTMOUSEKEY`**](modify_com#inputmousekey).

The [**`SPRITECREATE`**](modify_com#spritecreate) and [**`SPRITEANIMECREATE`**](modify_com#spriteanimecreate) instructions will release already created non-built-in Sprites before creating a new one, meaning there's no need to call [**`SPRITEDISPOSE`**](modify_com#spritedispose) before creation. If a built-in Sprite with the same name already exists, creation will fail.

The [**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) instruction no longer has the ability to remove built-in Sprites, but it can release all images referenced by built-in Sprites.

The first parameter of the [**`PLAYBGM`**](modify_com#playbgm) and [**`PLAYSOUND`**](modify_com#playsound) instructions now only supports inputting an Audio Name. To play via an audio file path, first use the [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) instruction to create an Audio.  
For information on how to add built-in Audio resources, please refer to the [**`Audio Functionality`**](#AudioFunc) section.

The [**`SETBGMVOLUME`**](modify_com#setbgmvolume) instruction now only changes the volume of the currently playing background music and no longer affects the global volume.

The [**`SETSOUNDVOLUME`**](modify_com#setsoundvolume) instruction has been deprecated and no longer has any effect.

The backslashes `\\` in file paths obtained by the [**`ENUMFILES`**](modify_com#enumfiles) instruction are replaced with forward slashes `/`.

HTML code related changes:
- The `bcolor` attribute of the `div` tag has been renamed to `bdcolor` (borderColor) to avoid confusion with `bcolor` (backgroundColor).
- The input value format for the `bdcolor` attribute of the `div` tag has been changed to a single color value `'color'` and no longer accepts four-corner color values.
- The input value format for the `border` attribute of the `div` tag has been changed to a single numeric value `'thick'` and no longer accepts four-corner numeric values.
- The effect of the `margin` attribute of the `div` tag has been changed to expand outward, no longer squeezing inward.

When returning to the title screen via the `タイトルに戻る` (Return to Title) button in the menu bar, the following content will be additionally cleared:

- Clear all CBG images, including CBGBUTTON, CBGBMAP, etc. The effect is the same as the [**`CBGCLEAR`**](https://osdn.net/projects/emuera/wiki/excom#h5-GCLEAR.20int.20ID.2C.20int.20cARGB) instruction.
- Clear all Sprites created during runtime, releasing all images referenced by Sprites. The effect is the same as the [**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) instruction.
- Clear all Spine animations created during runtime, releasing all images referenced by Spine animations. The effect is the same as the [**`SPINEDISPOSEALL`**](new_com#spinedisposeall) instruction.
- Clear all Audios created during runtime and release the audio cache. The effect is the same as the [**`AUDIODISPOSEALL`**](new_com#audiodisposeall) instruction.

The `emuera.log` game log and `console.log` debug log are saved using `UTF-8-BOM` encoding.

The `watchlist.csv` variable watch list is saved and read using `UTF-8-BOM` encoding.

The variable watch list is no longer automatically saved when the debug window is closed.
