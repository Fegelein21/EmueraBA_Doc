---
sidebar_position: 2
sidebar_label: Modification Commands
---

# Modification Commands {#ModifyCom}

### Display Related {#DisplayRelated}

----
#### SETCOLORBYNAME, SETBGCOLORBYNAME

**`void SETCOLORBYNAME form colorName`**

**`void SETBGCOLORBYNAME form colorName`**

The first parameter `colorName` of these commands now accepts FORM syntax.

:::note[Example]
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

Another parameter format of this command has been separated into an independent command [**`REPLACEBYARRAY`**](new_com#replacebyarray), and the functionality of the `flag` parameter has been changed.

:::tip[Parameters]
- **str source**
  - Specifies the text to be processed.
- **str match**
  - Specifies the text to be matched.
- **str newvalue**
  - Specifies the text to replace with.
- **int flag = 0**
  - Specifies the text processing mode. The default is regex replacement mode. Use plain text replacement mode when a non-zero value is input.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the replaced string.
:::

----
#### SPLIT

**`void SPLIT str text(, str delimiter = ","), strArray array(, int result)`**

The second parameter `delimiter` can be omitted, with the default value being `(",")`.

The third parameter `array` can accept any string array. For multi-dimensional arrays, this command only processes the elements of the last dimension, and you need to specify the indices of the previous dimensions yourself.

----
#### STRCOUNT

**`int STRCOUNT str input, str match(, int option = 0)`**

- Added a third parameter `option`, which can be specified to adjust processing options.
  -  `1P0` = Use plain text matching mode, faster but does not support regex syntax.
  -  `1P1` = Ignore case.

----
#### STRFIND

This command calculates the display width of Emoji characters to determine their length.

----
#### STRJOIN

**`str STRJOIN anyArray array(, str delimiter = ",", int start = 0, int count = lastDimLength)`**

The first parameter `array` can accept any array.

For multi-dimensional arrays, this command only processes the elements of the last dimension, and you need to specify the indices of the previous dimensions yourself.

:::tip[Parameters]
- **anyArray array**
  - Specifies any array whose strings need to be joined.
- **str delimiter = ","**
  - Specifies the delimiter used to join the strings.
- **int start = 0**
  - Specifies the starting index for joining.
- **int count = lastDimLength**
  - Specifies the number of elements to join. If omitted, the length of the last dimension of the array will be used.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the joined string.
:::

----
#### STRLEN, STRLENFORM

These commands calculate the display width of Emoji characters to determine their length.

----
#### STRLENS

This command calculates the display width of Emoji characters to determine their length.

----
#### SUBSTRING

**`int SUBSTRING str text(, int start = 0, int length = totalLength)`**

This command calculates the display width of Emoji characters to determine their length.  
If the selected position in the text is in the middle of a long character, it will move back to the starting position of that character. In other words, characters stuck at the starting position will be included, while those stuck at the ending position will be ignored.

----
### Variable and Array Related {#VarAndArrayRelated}

----
#### ARRAYREMOVE

**`ARRAYREMOVE anyArray1D array, int start, int count, same emptyVal`**

Added a fourth parameter `emptyVal`, which specifies the value to fill the blank after moving elements. The default fill value is `0` or `empty string`.

When the third parameter `count` is specified as a negative number, it is treated as the total length of the array.

----
#### ARRAYSHIFT

**`ARRAYSHIFT anyArray1D array, int shiftCount, same emptyVal(, int start, int count)`**

When the fifth parameter `count` is specified as a negative number, it is treated as the total length of the array.

----
#### ARRAYSORT

**`ARRAYSORT anyArray1D array(, FORWARD or BACK, int start, int count)`**

When the fourth parameter `count` is specified as a negative number, it is treated as the total length of the array.

----
#### ERDNAME

When the third parameter of this instruction is omitted, it will retrieve the key names of the indices in the array's last dimension.

----
#### FINDELEMENT, FINDLASTELEMENT

**`int FINDELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int FINDLASTELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

The first parameter `array` can accept any array. The usage of the fifth parameter `option` has been modified, allowing you to specify it to adjust processing options.

For multi-dimensional arrays, this command only processes the elements of the last dimension, and you need to specify the indices of the previous dimensions yourself.

:::tip[Parameters]
- **anyArray array**
  - Specifies any array to be searched.
- **same target**
  - Specifies the content to be searched for.
- **int start = 0**
  - Specifies the starting index for the search.
- **int end = lastDimLength**
  - Specifies the ending index + 1 for the search. If omitted, the length of the last dimension of the array is used.
- **int option = 0**
  - Specifies processing options:
    -  `1P0` = Use exact match.
    -  `1P1` = Ignore case.
    -  `1P2` = Invert the judgment result.
    -  `1P3` = Use plain text matching.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the first index that meets the search criteria. Returns `-1` if not found.
:::

:::note[Example]
```
LOCAL = FINDELEMENT(LOCALS, "WORD", , , 1P0 | 1P1)
```
:::

----
#### INRANGEARRAY

**`int INRANGEARRAY intArray array, int min, int max(, int start = 0, int end = lastDimLength)`**

The first parameter `array` can accept any integer array.

For multi-dimensional arrays, this command only processes the elements of the last dimension, and you need to specify the indices of the previous dimensions yourself.

:::tip[Parameters]
- **intArray array**
  - Specifies any integer array.
- **int min**
  - Specifies the minimum range value.
- **int max**
  - Specifies the maximum range value.
- **int start = 0**
  - Specifies the starting index.
- **int end = lastDimLength**
  - Specifies the ending index + 1. If omitted, the length of the last dimension of the array is used.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of elements that meet the criteria.
:::

----
#### INRANGECARRAY

**`int INRANGECARRAY intCharaArray array, int min, int max(, int start = 0, int end = charaCount)`**

The first parameter `array` can accept any character-type integer array.

For multi-dimensional arrays, this command only processes the elements of the last dimension, and you need to specify the indices of the previous dimensions yourself.

:::tip[Parameters]
- **intCharaArray array**
  - Specifies any character-type integer array.
- **int min**
  - Specifies the minimum range value.
- **int max**
  - Specifies the maximum range value.
- **int start = 0**
  - Specifies the starting character index.
- **int end = charaCount**
  - Specifies the ending character index + 1. If omitted, the total number of characters is used.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of elements that meet the criteria.
:::

----
#### MINARRAY, MAXARRAY

**`int MINARRAY intArray array(, int start = 0, int end = lastDimLength)`**

**`int MAXARRAY intArray array(, int start = 0, int end = lastDimLength)`**

The first parameter `array` can accept any integer array.

For multi-dimensional arrays, this command only processes the elements of the last dimension, and you need to specify the indices of the previous dimensions yourself.

:::tip[Parameters]
- **intArray array**
  - Specifies any integer array.
- **int start = 0**
  - Specifies the starting index.
- **int end = lastDimLength**
  - Specifies the ending index + 1. If omitted, the length of the last dimension of the array is used.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the value of the element that meets the criteria.
:::

----
#### MINCARRAY, MAXCARRAY

**`int MINCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

**`int MAXCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

The first parameter `array` can accept any integer array.

For multi-dimensional arrays, this command only processes the elements of the last dimension, and you need to specify the indices of the previous dimensions yourself.

:::tip[Parameters]
- **intCharaArray array**
  - Specifies any character-type integer array.
- **int start = 0**
  - Specifies the starting character index.
- **int end = charaCount**
  - Specifies the ending character index + 1. If omitted, the total number of characters is used.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the value of the element that meets the criteria.
:::

----
#### MATCH

**`int MATCH anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

The first parameter `array` can accept any array. Added a fifth parameter `option`, which can be specified to adjust processing options.

For multi-dimensional arrays, this command only processes the elements of the last dimension, and you need to specify the indices of the previous dimensions yourself.

:::tip[Parameters]
- **anyArray array**
  - Specifies any array to be searched.
- **same target**
  - Specifies the content to be searched for.
- **int start = 0**
  - Specifies the starting index for the search.
- **int end = lastDimLength**
  - Specifies the ending index + 1 for the search. If omitted, the length of the last dimension of the array is used.
- **int option = 0**
  - Specifies processing options:
    -  `1P0` = Use partial match.
    -  `1P1` = Ignore case.
    -  `1P2` = Invert the judgment result.
    -  `1P3` = Use regex matching.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of elements that meet the search criteria.
:::

:::note[Example]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P0 | 1P1)	;Counts the number of elements in ARRAY:0 to ARRAY:7 that contain "AA" (case-insensitive).
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P2)		;Counts the number of elements in ARRAY:0 to ARRAY:7 that do not equal "AA".
PRINTVL MATCH(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)	;Counts the number of elements in ARRAY:0 to ARRAY:7 that partially match "\\d+".
PRINTVL MATCH(CARRAY_2D:TARGET:3:0, 22, 5)	;Counts the number of elements in CARRAY_2D:3:5 to CARRAY_2D:3:9 for character TARGET that equal 22.
```
:::

----
#### CMATCH

**`int CMATCH anyCharaArray array, same target(, int start = 0, int end = charaCount, int option = 0)`**

The first parameter `array` can accept any character-type array. Added a fifth parameter `option`, which can be specified to adjust processing options.

For multi-dimensional arrays, this command only processes the elements of the last dimension, and you need to specify the indices of the previous dimensions yourself.

:::tip[Parameters]
- **anyCharaArray array**
  - Specifies any character-type array to be searched.
- **same target**
  - Specifies the content to be searched for.
- **int start = 0**
  - Specifies the starting character index for the search.
- **int end = charaCount**
  - Specifies the ending character index + 1 for the search. If omitted, the total number of characters is used.
- **int option = 0**
  - Specifies processing options:
    -  `1P0` = Use partial match.
    -  `1P1` = Ignore case.
    -  `1P2` = Invert the judgment result.
    -  `1P3` = Use regex matching.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of characters that meet the search criteria.
:::

:::note[Example]
```
#DIMS CHARADATA CARRAY, 10
#DIMS CHARADATA CARRAY_2D, 10, 10
PRINTVL CMATCH(CARRAY:0:5, "A+", 0, 8, 1P0 | 1P3)	;Counts the number of characters with indices 0 to 7 where CARRAY:5 matches "A+".
PRINTVL CMATCH(CARRAY_2D:0:0:5, "Bb", 5, , 1P1 | 1P2)	;Counts the number of characters with indices 5 to the last where CARRAY_2D:0:5 does not equal "Bb" (case-insensitive).
```
:::

----
#### SUMARRAY

**`int SUMARRAY intArray array(, int start = 0, int end = lastDimLength)`**

The first parameter `array` can accept any integer array.

For multi-dimensional arrays, this command only processes the elements of the last dimension, and you need to specify the indices of the previous dimensions yourself.

:::tip[Parameters]
- **intArray array**
  - Specifies any integer array to be summed.
- **int start = 0**
  - Specifies the starting index for the summation.
- **int end = lastDimLength**
  - Specifies the ending index + 1 for the summation. If omitted, the length of the last dimension of the array is used.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the sum of the array.
:::

:::note[Example]
```
#DIM ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
#DIM ARRAY_3D, 10, 10, 10
PRINTVL SUMARRAY(ARRAY, 0, 8)            ;Sums the values of ARRAY:0 to ARRAY:7.
PRINTVL SUMARRAY(CARRAY_2D:TARGET:3:0, 5)    ;Sums the values of CARRAY_2D:3:5 to CARRAY_2D:3:9 for character TARGET.
```
:::

----
#### SUMCARRAY

**`int SUMCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

The first parameter `array` can accept any character-type integer array.

For multi-dimensional arrays, this command only processes the elements of the last dimension, and you need to specify the indices of the previous dimensions yourself.

:::tip[Parameters]
- **intCharaArray array**
  - Specifies any character-type integer array to be summed.
- **int start = 0**
  - Specifies the starting character index for the summation.
- **int end = charaCount**
  - Specifies the ending character index + 1 for the summation. If omitted, the total number of characters is used.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the sum of the array.
:::

:::note[Example]
```
#DIM CHARADATA CARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL SUMCARRAY(CARRAY:0:5, 0, 8)        ;Sums the values of CARRAY:5 for character indices 0 to 7.
PRINTVL SUMCARRAY(CARRAY_2D:0:0:5, 5)        ;Sums the values of CARRAY_2D:0:5 for character indices 5 to the last.
```
:::

----
#### VARSET

**`void VARSET anyArray array(, same value, int start = 0, int end = lastDimLength, int option = 0)`**

Added a fifth parameter `option`, which can be specified to adjust processing options.

For multi-dimensional arrays, by default, all dimensions are processed. You can pass `1P4` in the `option` parameter to process only the last dimension.

:::tip[Parameters]
- **anyArray array**
  - Specifies any array to be filled.
- **same value**
  - Specifies the value to fill.
- **int start = 0**
  - Specifies the starting index for filling.
- **int end = lastDimLength**
  - Specifies the ending index + 1 for filling. If omitted, the length of the last dimension of the array is used.
- **int option = 0**
  - Specifies processing options:
    -  `1P4` = Only the last dimension.
:::

:::note[Example]
```
#DIM ARRAY, 10, 10
#DIM CHARADATA CARRAY, 10
VARSET ARRAY:0:0, 1, 5, 10        ;Fills elements from 5 to 9 in each dimension with 1.
VARSET ARRAY:3:0, 1, 5, 10, 1P4        ;Fills elements from ARRAY:3:5 to ARRAY:3:9 with 1.
VARSET CARRAY:TARGET:0, 1, 5, 10    ;Fills elements from CARRAY:5 to CARRAY:9 for character TARGET with 1.
```
:::

----
#### CVARSET

**`void CVARSET anyCharaArray array(, any key, same value, int start, int end)`**

The first parameter `array` can accept any character-type array. The second parameter `key` can be a string key.

----
#### VARSETEX

**`int VARSETEX string varName(, any value, int setAllDim, int start, int end)`**

The second parameter `value` can be omitted. If the array referred to by `varName` and the type of `value` are different, an error will occur.

----
#### VARSIZE

**`int VARSIZE string varName(, int dimension)`**

If the second parameter `dimension` is omitted, this command returns the length of the last dimension of the array. If a negative number is passed, it returns the total length of the array.

----
### Input Related {#InputRelated}

----
#### INPUTMOUSEKEY

**`void INPUTMOUSEKEY (int time = 0)`**

When clicking numeric buttons, this command will additionally output the received number to `RESULTS:0`.

When receiving keyboard input (i.e., RESULT:0 == 3), `RESULT:3` will receive the modifier key code.

----
#### TWAIT

**`void TWAIT int time(, int flag = 0)`**

The second parameter `flag` can be omitted `(0)`.

----
### Image Related {#ImageRelated}

----
#### GCREATE

**`int GCREATE int GID, int width, int height`**

This command releases any previously created images before creating a new one, so there is no need to call [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) before creating an image.

----
#### GCREATEFROMFILE

**`int GCREATEFROMFILE int GID, str filepath`**

The second parameter `filepath` must be a relative path starting from the main directory, such as `resources/image.png` or `erb/image.png`.

The third parameter `isRelative` has been removed.

This command releases any previously created images before creating a new one, so there is no need to call [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) before creating an image.

----
#### GDASHSTYLE

**`int GDASHSTYLE int GID, int DashStyle, int DashCap`**

- Due to changes in the graphics library, the input values and effects of `DashCap` have changed as follows:
  -  `0` = No line cap.
  -  `1` = Round line cap.
  -  `2` = Square line cap.

----
#### GDRAWTEXT

**`int GDRAWTEXT int GID, str text(, int x = 0, int y = 0)`**

This command no longer returns the measurement result of the string, meaning that return values other than `RESULT:0` are invalid.

Because the measurement result is calculated separately, the result is the same as the [**`GGETTEXTSIZE`**](https://evilmask.gitlab.io/emuera.em.doc/zh/Reference/GGETTEXTSIZE.html) command, and the performance overhead is slightly higher, so it has been removed.

----
#### GDRAWGWITHMASK

**`int GDRAWGWITHMASK int destID, int srcID, int maskID, int destX, int destY`**

Improved the color algorithm of this command. The alpha value and blue value of the `maskID` image will both affect the drawing result.

----
#### GDRAWG

**`int GDRAWG int destID, int srcID`**

**`int GDRAWG int destID, int srcID, int destX, int destY`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

Added the above four parameter formats, and the `colorMatrix` parameter can accept any integer array.  
When the `colorMatrix` parameter is passed, the color matrix is only effective for this drawing and will be automatically cleared after drawing.

For all parameter formats, the `destWidth` and `destHeight` parameters can accept negative numbers to draw flipped images.

Due to changes in the graphics library, the usage of the color matrix has changed. For details, refer to the explanation in the [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) command.

----
#### GDRAWSPRITE

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

Added the above two parameter formats, and the `colorMatrix` parameter can accept any integer array.  
When the `colorMatrix` parameter is passed, the color matrix is only effective for this drawing and will be automatically cleared after drawing.

For all parameter formats, the `destWidth` and `destHeight` parameters can accept negative numbers to draw flipped images.

Due to changes in the graphics library, the usage of the color matrix has changed. For details, refer to the explanation in the [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) command.

----
#### GSAVE, GLOAD

**`int GSAVE int GID, any fileName`**

**`int GLOAD int GID, any fileName`**

The second parameter `fileName` can now specify a string as the file save path in addition to a number.

The **`GLOAD`** command releases any previously created images before creating a new one, so there is no need to call [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) before creating an image.

:::note[Example]
```
GSAVE 0, 11                ;Exports the file sav/img0011.png.
GSAVE 0, "sav/New Folder/image"        ;Exports the file sav/New Folder/image.png.
GLOAD 0, "resources/New Folder/image"    ;Loads the file resources/New Folder/image.png.
```
:::

----
#### SETANIMETIMER

**`void SETANIMETIMER int interval(, int duration)`**

Added a second parameter `duration`, which specifies the duration of the animation refresh in milliseconds. After the duration, the animation refresh will automatically stop.

This command will continue to refresh the animation even during timed waits like [**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) or [**`INPUTMOUSEKEY`**](#inputmousekey).

----
#### SPRITECREATE

**`int SPRITECREATE str sprite, int GID`**

Added the above parameter format.

This command releases any previously created non-built-in Sprites before creating a new one, so there is no need to call [**`SPRITEDISPOSE`**](#spritedispose) before creating a Sprite. If a built-in Sprite with the same name already exists, the creation will fail.

----
#### SPRITEANIMECREATE

**`int SPRITEANIMECREATE str sprite, int width, int height(, int isLoopFrame = 1)`**

Added a fourth parameter `isLoopFrame`, which specifies whether the SpriteAnime should loop. If omitted or a non-zero value is input, it will loop.

This command releases any previously created non-built-in Sprites before creating a new one, so there is no need to call [**`SPRITEDISPOSE`**](#spritedispose) before creating a Sprite. If a built-in Sprite with the same name already exists, the creation will fail.

----
#### SPRITEANIMEADDFRAME

**`int SPRITEANIMEADDFRAME str sprite, int delay`**

Added the above parameter format.

This command can accept `delay` as 0 for delay frames, which can be used to create transition effects.

This command is only effective for non-built-in SpriteAnime.

----
#### SPRITEDISPOSE

**`int SPRITEDISPOSE str sprite(, int disposeImg)`**

Added a second parameter `disposeImg`, which specifies whether to release the image referenced by the Sprite.

----
#### SPRITEDISPOSEALL

**`void SPRITEDISPOSEALL (int disposeImage = 0)`**

- Modified the functionality of the first parameter `disposeImage`. This command no longer has the ability to remove built-in Sprites and can be omitted `(0)`.
  -  `0` = Removes all runtime-created temporary Sprites.
  -  `Non-zero` = Removes all temporary Sprites and releases all images referenced by built-in Sprites. The referenced images will be reloaded when called.

----
### Audio Related {#AudioRelated}

----
#### PLAYBGM

**`int PLAYBGM str name(, int volume, int fadeIn = 0, int delay = 0)`**

Added the second to fourth parameters `volume`, `fadeIn`, and `delay`.

The first parameter `name` only supports Audio names. To play via an audio file path, use the [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) command to create an Audio first.  
For information on how to add built-in Audio resources, refer to the [**`Audio Function`**](/#AudioFunc) section.

**`int PLAYBGM (int fadeIn = 0, int delay = 0)`**

Added the above parameter format, which is used to resume playback of a paused background music.

:::tip[Parameters]
- **str name**
  - Specifies the Audio name to be played.
- **int volume**
  - Specifies the playback volume for this instance. Can be omitted `(uses the default volume of the Audio)`.
- **int fadeIn = 0**
  - Specifies the duration of the fade-in effect in `ms (milliseconds)`. If omitted or a value less than or equal to 0 is input, there will be no effect. The maximum value is `10000`.
- **int delay = 0**
  - Specifies the duration of the delayed playback in `ms (milliseconds)`. If omitted or a value less than or equal to 0 is input, there will be no effect. The maximum value is `10000`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the playback was successful. Returns `non-zero` if successful. Returns `0` if the Audio does not exist or if there is an error loading the Audio.
:::

:::note[Example]
```
PLAYBGM "MyMusic"            ;Plays the background music "MyMusic".
PLAYBGM "MyMusic", 80            ;Plays the background music "MyMusic" with a volume of 80.
PLAYBGM "MyMusic", , 1500, 1000        ;Plays the background music "MyMusic" after a 1000ms delay with a 1500ms fade-in effect.
PAUSEBGM 1500                ;Pauses the current background music with a 1500ms fade-out effect.
PLAYBGM 1500                ;Resumes playback of the current background music with a 1500ms fade-in effect.
```
:::

----
#### PLAYSOUND

**`int PLAYSOUND str name(, int volume)`**

Added a second parameter `volume`, which specifies the playback volume for this instance.

The first parameter `name` only supports Audio names. To play via an audio file path, use the [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) command to create an Audio first.  
For information on how to add built-in Audio resources, refer to the [**`Audio Function`**](/#AudioFunc) section.

:::tip[Parameters]
- **str name**
  - Specifies the Audio name to be played.
- **int volume**
  - Specifies the playback volume for this instance. Can be omitted `(uses the default volume of the Audio)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the playback was successful. Returns `non-zero` if successful. Returns `0` if the Audio does not exist or if there is an error loading the Audio.
:::

:::note[Example]
```
PLAYSOUND "MySOUND"            ;Plays the sound effect "MySOUND".
PLAYSOUND "MySOUND", 80            ;Plays the sound effect "MySOUND" with a volume of 80.
```
:::

----
#### SETBGMVOLUME

**`void SETBGMVOLUME int volume(, int fadeDuration = 0)`**

Added a second parameter `fadeDuration`, which specifies the duration of the fade effect when changing the volume, in `ms (milliseconds)`. If omitted or a value less than or equal to 0 is input, there will be no effect. The maximum value is `10000`.

This command only changes the volume of the currently playing background music and no longer affects the global volume.

----
#### SETSOUNDVOLUME

This command has been deprecated and no longer has any effect.

----
#### STOPBGM

**`void STOPBGM (int fadeOut = 0)`**

Added the `fadeOut` parameter. If a value greater than 0 is input, the background music will stop with a fade-out effect.

:::tip[Parameters]
- **int fadeOut = 0**
  - Specifies the duration of the fade-out effect in `ms (milliseconds)`. If omitted or a value less than or equal to 0 is input, there will be no effect. The maximum value is `10000`.
:::

:::note[Example]
```
STOPBGM 1500            ;Stops the background music with a 1500ms fade-out effect.
```
:::

----
### File Related {#FileRelated}

----
#### ENUMFILES

**`int ENUMFILES string dir(, string pattern, int option)`**

The file paths obtained by this command will have backslashes `\\` replaced with forward slashes `/`.

----
#### EXISTFILE

**`int EXISTFILE str filePath(, int getInfo = 0)`**

Added the `getInfo` parameter to retrieve file information.

:::tip[Parameters]
- **str filePath**
  - Specifies the file path.
- **int getInfo = 0**
  - Specifies whether to retrieve file information. If a non-zero value is input, file information will be output to `RESULT:1 - RESULT:4`. Can be omitted `(0)`.
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

- Added the following configurable items:
  - `ウィンドウ高さ` (Window height)
  - `フレーム毎秒` (FPS)
  - `タブ文字幅` (Tab width)
