---
sidebar_position: 2
sidebar_label: Modified Instructions
---

# Modified Instructions {#ModifyCom}

### Display Related {#DisplayRelated}

----
#### SETCOLORBYNAME, SETBGCOLORBYNAME

**`void SETCOLORBYNAME form colorName`**

**`void SETBGCOLORBYNAME form colorName`**

The first parameter `colorName` of these instructions now accepts FORM syntax.

:::note[Usage Example]
```
SETCOLORBYNAME RED

LOCALS '= "BLUE"
SETBGCOLORBYNAME %LOCALS%
```
:::

----
### Text Processing Related {#TextProcessRelated}

----
#### REPLACE

**`str REPLACE str source, str match, str newvalue(, int flag = 0)`**

One of the other parameter formats of this instruction has been separated into the independent instruction [**`REPLACEBYARRAY`**](new_com#replacebyarray). The functionality of the `flag` parameter has also been changed.

:::tip[Parameters]
- **str source**
  - Specifies the text to be processed.
- **str match**
  - Specifies the text to match.
- **str newvalue**
  - Specifies the replacement text.
- **int flag = 0**
  - Specifies the text processing method. Default is regular expression replacement mode. Use plain text replacement mode when a `non-zero` value is input.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the replaced string.
:::

----
#### SPLIT

**`void SPLIT str text(, str delimiter = ","), strArray array(, int result)`**

The second parameter `delimiter` of this instruction can be omitted; the default value is `(",")`.

The third parameter `array` can accept multi-dimensional arrays.  
For multi-dimensional arrays: Only elements of the last dimension are processed, and preceding dimension index values must be specified manually.

----
#### STRCOUNT

**`int STRCOUNT str input, str match(, int option = 0)`**

- Added a third parameter `option`. Processing options can be adjusted by specifying this parameter.
  - `1P0` = Use plain text matching mode, faster but does not support regex syntax.
  - `1P1` = Ignore case.

----
#### STRFIND

This instruction calculates character length by computing display width when processing Emoji characters.

----
#### STRJOIN

**`str STRJOIN any Array_List_HashList(, str delimiter = ",", int start = 0, int count = lastDimLength)`**

The first parameter `Array_List_HashList` can accept any type of referable array, list, or hash list.

:::tip[Parameters]
- **any Array_List_HashList**
  - Specifies any type of referable array, list, or hash list whose strings are to be joined.
    - For multi-dimensional arrays: Only elements of the last dimension are processed, and preceding dimension index values must be specified manually.
- **str delimiter = ","**
  - Specifies the delimiter used when joining strings.
- **int start = 0**
  - Specifies the starting index for joining.
- **int count = lastDimLength**
  - Specifies the number of elements to join. Uses the length of the last dimension of the array when omitted.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the joined string.
:::

----
#### STRLEN, STRLENFORM

These instructions calculate character length by computing display width when processing Emoji characters.

----
#### STRLENS

This instruction calculates character length by computing display width when processing Emoji characters.

----
#### SUBSTRING

**`int SUBSTRING str text(, int start = 0, int length = totalLength)`**

This instruction calculates character length by computing display width when processing Emoji characters.  
If the selected position in the text falls in the middle of a wide character, it retreats to the starting position of that character. That is, characters caught at the start position are included, and characters caught at the end position are ignored.

:::note[Usage Example]
```
PRINTSL SUBSTRING("１２３", 1, 4)        ; Prints "１２".
PRINTSL SUBSTRING("１😀３", 1, 4)        ; Prints "１😀".
```
:::

----
### Variable and Array Related {#VarAndArrayRelated}

----
#### ARRAYCOPY

**`void ARRAYCOPY str srcArrayName, str destVarName(, int isLastDimOnly = 0)`**

Added a third parameter `isLastDimOnly` to specify whether to copy only the elements of the source array's last dimension. Can be omitted (`0`).

The second parameter `destVarName` supports passing in variable names of lists and hash lists. When the value of `isLastDimOnly` is `0`, all elements from the source array will be added to the target list.

----
#### ARRAYREMOVE

**`void ARRAYREMOVE anyArray1D array, int start, int count, same emptyVal`**

Added a fourth parameter `emptyVal` to specify the value to fill blanks after moving elements. The default fill value is `0` or `empty string`.

When the third parameter `count` is specified as a `negative number`, it is treated as the total length of the array.

----
#### ARRAYSHIFT

**`void ARRAYSHIFT anyArray1D array, int shiftCount, same emptyVal(, int start, int count)`**

When the fifth parameter `count` is specified as a `negative number`, it is treated as the total length of the array.

----
#### ARRAYSORT

**`void ARRAYSORT any Array1D_List(, FORWARD or BACK, int start, int count)`**

The first parameter `Array1D_List` supports passing in lists.

When the fourth parameter `count` is specified as a `negative number`, it is treated as the total length of the array or list.

----
#### ARRAYMSORT

**`int ARRAYMSORT any Array1D_List(, sameParams Array_List)`**

The first parameter `Array1D_List` can accept any type of referable one-dimensional array or list.

Subsequent parameters `Array_List` can accept arrays or lists.

:::tip[Parameters]
- **any Array1D_List**
  - Specifies any type of referable one-dimensional array or list used as the basis for sorting.  
    The values of this parameter itself will also be sorted.
- **sameParams Array_List**
  - Specifies one or more referable arrays or lists to be sorted. The value type must match the value type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the sorting result. Returns `non-zero` if sorting is successful or no sorting is needed; otherwise returns `0`.
:::

----
#### ERDNAME

When the third parameter is omitted, this instruction will look up the keyword for the last dimension subscript of the array.

----
#### FINDELEMENT, FINDLASTELEMENT

**`int FINDELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int FINDLASTELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

The first parameter `array` can accept multi-dimensional arrays. The usage of the fifth parameter `option` has been modified; processing options can be adjusted by specifying this parameter.

:::tip[Parameters]
- **anyArray array**
  - Specifies any array to search.
    - For multi-dimensional arrays: Only elements of the last dimension are processed, and preceding dimension index values must be specified manually.
- **same target**
  - Specifies the content to search for.
- **int start = 0**
  - Specifies the starting index for the search.
- **int end = lastDimLength**
  - Specifies the ending index+1 for the search. Uses the length of the last dimension of the array when omitted.
- **int option = 0**
  - Specifies processing options:
    - `1P0` = Use exact match.
    - `1P1` = Ignore case.
    - `1P2` = Invert the judgment result.
    - `1P3` = Use plain text matching.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the first index value that meets the search criteria. Returns `-1` if not found.
:::

:::note[Usage Example]
```
LOCAL = FINDELEMENT(LOCALS, "WORD", , , 1P0 | 1P1)
```
:::

----
#### INRANGE

**`int INRANGE any value, same minValue, same maxValue`**

The first parameter `value` can accept strings, used to determine if the collation order of the string is within the specified range.

:::tip[Parameters]
- **any value**
  - Specifies the value to be judged.
- **same minValue**
  - Specifies the minimum range value. The variable's value type must match the value type of the first parameter.
- **same maxValue**
  - Specifies the maximum range value. The variable's value type must match the value type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the judgment result. Returns `non-zero` if the value is within the specified range; otherwise returns `0`.
:::

:::note[Usage Example]
```
PRINTVL INRANGE(11, 10, 20)          ; Prints "1"
PRINTVL INRANGE(21, 10, 20)          ; Prints "0"
PRINTVL INRANGE("b", "a", "c")       ; Prints "1"
PRINTVL INRANGE("banana", "b", "c")  ; Prints "1"
PRINTVL INRANGE("can", "a", "c")     ; Prints "0"
```
:::

----
#### INRANGEARRAY

**`int INRANGEARRAY intArray array, int min, int max(, int start = 0, int end = lastDimLength)`**

The first parameter `array` can accept multi-dimensional integer arrays.

:::tip[Parameters]
- **intArray array**
  - Specifies any integer array.
    - For multi-dimensional arrays: Only elements of the last dimension are processed, and preceding dimension index values must be specified manually.
- **int min**
  - Specifies the minimum range value.
- **int max**
  - Specifies the maximum range value.
- **int start = 0**
  - Specifies the starting index.
- **int end = lastDimLength**
  - Specifies the ending index+1. Uses the length of the last dimension of the array when omitted.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of elements meeting the criteria.
:::

----
#### INRANGECARRAY

**`int INRANGECARRAY intCharaArray array, int min, int max(, int start = 0, int end = charaCount)`**

The first parameter `array` can accept two-dimensional character-type integer arrays.

:::tip[Parameters]
- **intCharaArray array**
  - Specifies any character-type integer array.
    - For multi-dimensional arrays: Only elements of the last dimension are processed, and preceding dimension index values must be specified manually.
- **int min**
  - Specifies the minimum range value.
- **int max**
  - Specifies the maximum range value.
- **int start = 0**
  - Specifies the starting character index.
- **int end = charaCount**
  - Specifies the ending character index+1. Uses the total number of characters when omitted.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of elements meeting the criteria.
:::

----
#### MINARRAY, MAXARRAY

**`int MINARRAY intArray array(, int start = 0, int end = lastDimLength)`**

**`int MAXARRAY intArray array(, int start = 0, int end = lastDimLength)`**

The first parameter `array` can accept multi-dimensional integer arrays.

:::tip[Parameters]
- **intArray array**
  - Specifies any integer array.
    - For multi-dimensional arrays: Only elements of the last dimension are processed, and preceding dimension index values must be specified manually.
- **int start = 0**
  - Specifies the starting index.
- **int end = lastDimLength**
  - Specifies the ending index+1. Uses the length of the last dimension of the array when omitted.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the element value meeting the criteria.
:::

----
#### MINCARRAY, MAXCARRAY

**`int MINCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

**`int MAXCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

The first parameter `array` can accept two-dimensional character-type integer arrays.

:::tip[Parameters]
- **intCharaArray array**
  - Specifies any character-type integer array.
    - For multi-dimensional arrays: Only elements of the last dimension are processed, and preceding dimension index values must be specified manually.
- **int start = 0**
  - Specifies the starting character index.
- **int end = charaCount**
  - Specifies the ending character index+1. Uses the total number of characters when omitted.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the element value meeting the criteria.
:::

----
#### MATCH

**`int MATCH anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

The first parameter `array` can accept multi-dimensional arrays. Added a fifth parameter `option`; processing options can be adjusted by specifying this parameter.

:::tip[Parameters]
- **anyArray array**
  - Specifies any array to search.
    - For multi-dimensional arrays: Only elements of the last dimension are processed, and preceding dimension index values must be specified manually.
- **same target**
  - Specifies the content to search for.
- **int start = 0**
  - Specifies the starting index for the search.
- **int end = lastDimLength**
  - Specifies the ending index+1 for the search. Uses the length of the last dimension of the array when omitted.
- **int option = 0**
  - Specifies processing options:
    - `1P0` = Use partial match.
    - `1P1` = Ignore case.
    - `1P2` = Invert the judgment result.
    - `1P3` = Use regular expression matching.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of elements meeting the search criteria.
:::

:::note[Usage Example]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P0 | 1P1)    ; Counts elements from ARRAY:0 to ARRAY:7 that contain "AA" (case-insensitive).
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P2)          ; Counts elements from ARRAY:0 to ARRAY:7 that are not equal to "AA".
PRINTVL MATCH(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)  ; Counts elements from ARRAY:0 to ARRAY:7 that partially match "\\d+".
PRINTVL MATCH(CARRAY_2D:TARGET:3:0, 22, 5)     ; Counts elements from character TARGET's CARRAY_2D:3:5 to CARRAY_2D:3:9 that equal 22.
```
:::

----
#### CMATCH

**`int CMATCH anyCharaArray array, same target(, int start = 0, int end = charaCount, int option = 0)`**

The first parameter `array` can accept two-dimensional character-type arrays. Added a fifth parameter `option`; processing options can be adjusted by specifying this parameter.

:::tip[Parameters]
- **anyCharaArray array**
  - Specifies any character-type array to search.
    - For multi-dimensional arrays: Only elements of the last dimension are processed, and preceding dimension index values must be specified manually.
- **same target**
  - Specifies the content to search for.
- **int start = 0**
  - Specifies the starting character index for the search.
- **int end = charaCount**
  - Specifies the ending character index+1 for the search. Uses the total number of characters when omitted.
- **int option = 0**
  - Specifies processing options:
    - `1P0` = Use partial match.
    - `1P1` = Ignore case.
    - `1P2` = Invert the judgment result.
    - `1P3` = Use regular expression matching.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of characters meeting the search criteria.
:::

:::note[Usage Example]
```
#DIMS CHARADATA CARRAY, 10
#DIMS CHARADATA CARRAY_2D, 10, 10
PRINTVL CMATCH(CARRAY:0:5, "A+", 0, 8, 1P0 | 1P3)     ; Counts characters from index 0 to 7 whose CARRAY:5 matches containing "A+".
PRINTVL CMATCH(CARRAY_2D:0:0:5, "Bb", 5, , 1P1 | 1P2) ; Counts characters from index 5 to last whose CARRAY_2D:0:5 is not equal to "Bb" (case-insensitive).
```
:::

----
#### SUMARRAY

**`int SUMARRAY intArray array(, int start = 0, int end = lastDimLength)`**

The first parameter `array` can accept multi-dimensional integer arrays.

:::tip[Parameters]
- **intArray array**
  - Specifies the integer array to sum.
    - For multi-dimensional arrays: Only elements of the last dimension are processed, and preceding dimension index values must be specified manually.
- **int start = 0**
  - Specifies the starting index for summation.
- **int end = lastDimLength**
  - Specifies the ending index+1 for summation. Uses the length of the last dimension of the array when omitted.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the sum of the array.
:::

:::note[Usage Example]
```
#DIM ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
#DIM ARRAY_3D, 10, 10, 10
PRINTVL SUMARRAY(ARRAY, 0, 8)                     ; Sums values from ARRAY:0 to ARRAY:7.
PRINTVL SUMARRAY(CARRAY_2D:TARGET:3:0, 5)         ; Sums values from character TARGET's CARRAY_2D:3:5 to CARRAY_2D:3:9.
```
:::

----
#### SUMCARRAY

**`int SUMCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

The first parameter `array` can accept two-dimensional character-type integer arrays.

:::tip[Parameters]
- **intCharaArray array**
  - Specifies the character-type integer array to sum.
    - For multi-dimensional arrays: Only elements of the last dimension are processed, and preceding dimension index values must be specified manually.
- **int start = 0**
  - Specifies the starting character index for summation.
- **int end = charaCount**
  - Specifies the ending character index+1 for summation. Uses the total number of characters when omitted.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the sum of the array.
:::

:::note[Usage Example]
```
#DIM CHARADATA CARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL SUMCARRAY(CARRAY:0:5, 0, 8)              ; Sums CARRAY:5 values for characters from index 0 to 7.
PRINTVL SUMCARRAY(CARRAY_2D:0:0:5, 5)            ; Sums CARRAY_2D:0:5 values for characters from index 5 to last.
```
:::

----
#### VARSET

**`void VARSET anyArray array(, same value, int start = 0, int end = lastDimLength, int option = 0)`**

Added a fifth parameter `option`. Processing options can be adjusted by specifying this parameter.

:::tip[Parameters]
- **anyArray array**
  - Specifies any array to fill.
    - For multi-dimensional arrays: By default, all dimensions' elements are processed. Can be changed to only process the last dimension by passing `1P4` in the `option` parameter.
- **same value**
  - Specifies the value to fill.
- **int start = 0**
  - Specifies the starting index for filling.
- **int end = lastDimLength**
  - Specifies the ending index+1 for filling. Uses the length of the last dimension of the array when omitted.
- **int option = 0**
  - Specifies processing options:
    - `1P4` = Only last dimension.
:::

:::note[Usage Example]
```
#DIM ARRAY, 10, 10
#DIM CHARADATA CARRAY, 10
VARSET ARRAY:0:0, 1, 5, 10       ; Fills elements within dimensions 5 to 9 with 1 for each dimension.
VARSET ARRAY:3:0, 1, 5, 10, 1P4  ; Fills elements from ARRAY:3:5 to ARRAY:3:9 with 1.
VARSET CARRAY:TARGET:0, 1, 5, 10 ; Fills elements from character TARGET's CARRAY:5 to CARRAY:9 with 1.
```
:::

----
#### CVARSET

**`void CVARSET anyCharaArray array(, any key, same value, int start, int end)`**

The first parameter `array` can accept two-dimensional character-type arrays. The second parameter `key` can input string key values.

----
#### VARSETEX

**`int VARSETEX string varName(, any value, int setAllDim, int start, int end)`**

The second parameter `value` can be omitted. An error will occur if the value type of the array referred to by `varName` differs from that of `value`.

----
#### VARSIZE

**`int VARSIZE string varName(, int dimension)`**

When the second parameter `dimension` is omitted, this instruction returns the length of the last dimension of the array. A `negative number` can be passed to obtain the total length of the array.

----
### Input Related {#InputRelated}

----
#### INPUTMOUSEKEY

**`void INPUTMOUSEKEY (int time = 0)`**

When numeric buttons are clicked, this instruction additionally outputs the received number to `RESULTS:0`.

When receiving keyboard input (i.e., RESULT:0 == 3), `RESULT:3` will receive the key code value of the modifier key.

----
#### TWAIT

**`void TWAIT int time(, int flag = 0)`**

The second parameter `flag` can be omitted `(0)`.

----
### Image Related {#ImageRelated}

----
#### GCREATE

**`int GCREATE int GID, int width, int height`**

This instruction releases already created images before creating a new one, meaning there is no need to call the [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) instruction before creation.

----
#### GCREATEFROMFILE

**`int GCREATEFROMFILE int GID, str filepath`**

The second parameter `filepath` must be a relative path starting from the main directory, e.g., `resources/image.png` or `erb/image.png`.

The third parameter `isRelative` has been removed.

This instruction releases already created images before creating a new one, meaning there is no need to call the [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) instruction before creation.

----
#### GDASHSTYLE

**`int GDASHSTYLE int GID, int DashStyle, int DashCap`**

- Due to the graphics library change, the input values and effects of `DashCap` have changed as follows:
  - `0` = No line cap.
  - `1` = Half-round line cap.
  - `2` = Half-square line cap.

----
#### GDRAWTEXT

**`int GDRAWTEXT int GID, str text(, int x = 0, int y = 0)`**

This instruction no longer returns the measurement result of the string; return values other than `RESULT:0` are invalid.

Because this measurement was an additional calculation, the result is the same as the [**`GGETTEXTSIZE`**](https://evilmask.gitlab.io/emuera.em.doc/zh/Reference/GGETTEXTSIZE.html) instruction, and it had a slight performance overhead, so it was removed.

----
#### GDRAWGWITHMASK

**`int GDRAWGWITHMASK int destID, int srcID, int maskID, int destX, int destY`**

Improved the color algorithm of this instruction. The alpha value and blue value of the `maskID` image both affect the drawing result.

----
#### GDRAWG

**`int GDRAWG int destID, int srcID`**

**`int GDRAWG int destID, int srcID, int destX, int destY`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

Added the above four parameter formats, and the `colorMatrix` parameter can accept a one-dimensional integer array.  
When the `colorMatrix` parameter is passed, the color matrix only takes effect for this drawing and is automatically cleared after drawing is complete.

The `destWidth` and `destHeight` parameters of all parameter formats can accept `negative numbers` to draw flipped images.

Due to the graphics library change, the usage of the color matrix has changed. For details, please refer to the explanation in the [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) instruction.

----
#### GDRAWSPRITE

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

Added the above two parameter formats, and the `colorMatrix` parameter can accept a one-dimensional integer array.  
When the `colorMatrix` parameter is passed, the color matrix only takes effect for this drawing and is automatically cleared after drawing is complete.

The `destWidth` and `destHeight` parameters of all parameter formats can accept `negative numbers` to draw flipped images.

Due to the graphics library change, the usage of the color matrix has changed. For details, please refer to the explanation in the [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) instruction.

----
#### GSAVE, GLOAD

**`int GSAVE int GID, any fileName`**

**`int GLOAD int GID, any fileName`**

The second parameter `fileName` can specify not only a number but also a string as the file save path.

The **`GLOAD`** instruction releases already created images before creating a new one, meaning there is no need to call the [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) instruction before creation.

:::note[Usage Example]
```
GSAVE 0, 11                               ; Exports file sav/img0011.png.
GSAVE 0, "sav/New Folder/image"           ; Exports file sav/New Folder/image.png.
GLOAD 0, "resources/New Folder/image"     ; Reads file resources/New Folder/image.png.
```
:::

----
#### SETANIMETIMER

**`void SETANIMETIMER int interval(, int duration)`**

Added a second parameter `duration` to specify the duration for refreshing animations, in milliseconds. After the duration, animation refresh automatically stops.

This instruction continues to refresh animations even during timed waits like [**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) or [**`INPUTMOUSEKEY`**](#inputmousekey).

----
#### SPRITECREATE

**`int SPRITECREATE str sprite, int GID`**

Added the above parameter format.

This instruction releases already created non-built-in Sprites before creating a new one, meaning there is no need to call the [**`SPRITEDISPOSE`**](#spritedispose) instruction before creation. If a built-in Sprite with the same name already exists, creation will fail.

----
#### SPRITEANIMECREATE

**`int SPRITEANIMECREATE str sprite, int width, int height(, int isLoopFrame = 1)`**

Added a fourth parameter `isLoopFrame` to specify whether the SpriteAnime loops. Omitted or a `non-zero` input value means loop playback.

This instruction releases already created non-built-in Sprites before creating a new one, meaning there is no need to call the [**`SPRITEDISPOSE`**](#spritedispose) instruction before creation. If a built-in Sprite with the same name already exists, creation will fail.

----
#### SPRITEANIMEADDFRAME

**`int SPRITEANIMEADDFRAME str sprite, int delay`**

Added the above parameter format.

This instruction can accept `delay` of 0 for delay frames, which can be used to create transition effects.

This instruction is only effective for non-built-in SpriteAnimes.

----
#### SPRITEDISPOSE

**`int SPRITEDISPOSE str sprite(, int disposeImg)`**

Added a second parameter `disposeImg` to specify whether to release the image referenced by this Sprite.

----
#### SPRITEDISPOSEALL

**`void SPRITEDISPOSEALL (int disposeImage = 0)`**

- Modified the functionality of the first parameter `disposeImage`. This instruction no longer has the ability to remove built-in Sprites. Can be omitted `(0)`.
  - `0` = Removes all runtime-created temporary Sprites.
  - `Non-zero` = Removes all temporary Sprites and releases all images referenced by built-in Sprites. Referenced images will be reloaded when called.

----
### Audio Related {#AudioRelated}

----
#### PLAYBGM

**`int PLAYBGM str name(, int volume, int fadeIn = 0, int delay = 0)`**

Added second to fourth parameters `volume`, `fadeIn`, `delay`.

The first parameter `name` only supports inputting Audio names. To play via an audio file path, first use the [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) instruction to create an Audio.  
For information on how to add built-in Audio resources, please refer to the [**`Audio Functionality`**](/#AudioFunc) section.

**`int PLAYBGM (int fadeIn = 0, int delay = 0)`**

Added the above parameter format. This format is used to resume playback of a paused background music.

:::tip[Parameters]
- **str name**
  - Specifies the Audio name to play.
- **int volume**
  - Specifies the playback volume for this instance. Can be omitted `(uses the Audio's preset volume)`.
- **int fadeIn = 0**
  - Specifies the fade-in effect duration in `ms (milliseconds)`. No effect if the input value is `omitted` or `less than or equal to 0`. Maximum value is `10000`.
- **int delay = 0**
  - Specifies the delay playback duration in `ms (milliseconds)`. No effect if the input value is `omitted` or `less than or equal to 0`. Maximum value is `10000`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether playback was successful. Returns `non-zero` on success. Returns `0` if the Audio does not exist or there is an error loading the Audio.
:::

:::note[Usage Example]
```
PLAYBGM "MyMusic"                     ; Plays background music "MyMusic".
PLAYBGM "MyMusic", 80                 ; Plays background music "MyMusic", volume 80 for this playback.
PLAYBGM "MyMusic", , 1500, 1000       ; Plays background music "MyMusic", starts after 1000ms with a 1500ms fade-in effect.
PAUSEBGM 1500                         ; Pauses current background music with a 1500ms fade-out effect.
PLAYBGM 1500                          ; Resumes playback of current background music with a 1500ms fade-in effect.
```
:::

----
#### PLAYSOUND

**`int PLAYSOUND str name(, int volume, int groupID = 0, int delay = 0)`**

Added a second parameter `volume` to specify the playback volume for this instance.  
Added a third parameter `groupID` to specify the sound effect group for this playback, which can be used with the [**`STOPSOUND`**](modify_com#stopsound) instruction to stop all sound effects in the same group.  
Added a fourth parameter `delay` to specify the playback delay for this instance, in milliseconds.

The first parameter `name` only supports inputting Audio names. To play via an audio file path, first use the [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) instruction to create an Audio.  
For information on how to add built-in Audio resources, please refer to the [**`Audio Functionality`**](/#AudioFunc) section.

:::tip[Parameters]
- **str name**
  - Specifies the Audio name to play.
- **int volume**
  - Specifies the playback volume for this instance. Can be omitted `(uses the audio's preset volume)`.
- **int groupID = 0**
  - Specifies the sound effect group for this playback. Can be omitted `(0)`.
- **int delay = 0**
  - Specifies the playback delay for this instance, in milliseconds. Can be omitted `(0)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether playback was successful. Returns `non-zero` on success. Returns `0` if the Audio does not exist or there is an error loading the Audio.
:::

:::note[Usage Example]
```
PLAYSOUND "MySOUND"     ; Plays sound effect "MySOUND".
PLAYSOUND "MySOUND", 80 ; Plays sound effect "MySOUND", volume 80 for this playback.
```
:::

----
#### SETBGMVOLUME

**`void SETBGMVOLUME int volume(, int fadeDuration = 0)`**

Added a second parameter `fadeDuration` to specify a fade effect when changing volume, in `ms (milliseconds)`. No effect if the input value is `omitted` or `less than or equal to 0`. Maximum value is `10000`.

This instruction only changes the volume of the currently playing background music and no longer affects the global volume.

----
#### SETSOUNDVOLUME

This instruction has been deprecated and no longer has any effect.

----
#### STOPBGM

**`void STOPBGM (int fadeOut = 0)`**

Added a `fadeOut` parameter. When a value `greater than 0` is input, the background music will have a fade-out effect when stopping.

:::tip[Parameters]
- **int fadeOut = 0**
  - Specifies the fade-out effect duration in `ms (milliseconds)`. No effect if the input value is `omitted` or `less than or equal to 0`. Maximum value is `10000`.
:::

:::note[Usage Example]
```
STOPBGM 1500            ; Stops background music with a 1500ms fade-out effect.
```
:::

----
#### STOPSOUND

**`void STOPSOUND (int groupID = 0)`**

Added a `groupID` parameter to specify the sound effect group to stop. When this parameter is omitted, all sound effects are stopped.

:::tip[Parameters]
- **int groupID = 0**
  - Specifies the sound effect group to stop. When this parameter is omitted, all sound effects are stopped.
:::

:::note[Usage Example]
```
PLAYSOUND "MySOUND1", , 1 ; Plays sound effect "MySOUND1", sound effect group set to 1.
PLAYSOUND "MySOUND2", , 2 ; Plays sound effect "MySOUND2", sound effect group set to 2.
STOPSOUND 2                ; Stops all sound effects in group 2.
```
:::

----
### File Related {#FileRelated}

----
#### ENUMFILES

**`int ENUMFILES string dir(, string pattern, int option)`**

The backslashes `\\` in file paths obtained by this instruction are replaced with forward slashes `/`.

----
#### EXISTFILE

**`int EXISTFILE str filePath(, int getInfo = 0)`**

Added a `getInfo` parameter to obtain file information.

:::tip[Parameters]
- **str filePath**
  - Specifies the file path.
- **int getInfo = 0**
  - Specifies whether to obtain file information. When `non-zero` is input, file information is output to `RESULT:1 - RESULT:4`. Can be omitted `(0)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the file exists. Returns `non-zero` if the file exists.
- **RESULT:1**
  - Indicates the file size in bytes.
- **RESULT:2**
  - Indicates the file creation time in milliseconds.
- **RESULT:3**
  - Indicates the file's last modification time in milliseconds.
- **RESULT:4**
  - Indicates the file's last access time in milliseconds.
:::

----
### Miscellaneous {#Misc}

----
#### GETCONFIG

**`int GETCONFIG str value`**

- Added the following configurable items that can be obtained.
  - `ウィンドウ高さ` (Window Height)
  - `フレーム毎秒` (Frames Per Second)
  - `タブ文字幅` (Tab Character Width)

----
### Control Statements {#ControlStatement}

----
#### FOR-NEXT

**`FOR-NEXT int counter, int start, int end(, int step)`**

Temporary parameters such as start value, end value, and step value of this control statement follow the function in and out of the stack.

----
#### REPEAT-REND

**`REPEAT-REND int loopCount`**

Temporary parameters such as start value, end value, and step value of this control statement follow the function in and out of the stack.
