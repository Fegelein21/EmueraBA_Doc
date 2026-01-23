---
sidebar_position: 3
sidebar_label: New Commands
---

# New Commands {#NewCom}

### Text Processing Related {#TextProcessRelated}

----
#### CHARATUW

**`str CHARATUW str text, int position`**

Usage is similar to the [**`CHARATU`**](https://osdn.net/projects/emuera/wiki/excom#h5-CHARATU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.96.87.E5.AD.97.E4.BD.8D.E7.BD.AE.3E) command, retrieving the character at the specified position in the text.

This command treats complex Emoji characters as a single whole character.

:::tip[Parameters]
- **str text**
  - Specifies the text.
- **int position**
  - Specifies the character position.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the string at the specified position.
:::

:::note[Example]
```
PRINTSL CHARATUW("A👨‍👩‍👧‍👦A", 1)			;Prints "👨‍👩‍👧‍👦"
```
:::

----
#### FINDEMOJI

**`int FINDEMOJI str text, str Array_List_HashList`**

Finds all Emoji characters in the text and outputs the results to the specified array, list, or hash list.

:::tip[Parameters]
- **str text**
  - Specifies the text.
- **str Array_List_HashList**
  - Specifies a string-type referable array, list, or hash list to receive the Emoji character results.
    - For lists and hash lists: Existing content in the variable will be cleared and replaced with new content.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of Emoji characters found.  
    The count may be affected by array length or hash list characteristics.
:::

:::note[Example]
```
PRINTVL FINDEMOJI("A👨‍👩‍👧‍👦AA😀A", LOCALS)		;Prints "2", LOCALS:0 ="👨‍👩‍👧‍👦", LOCALS:1 ="😀"
```
:::

----
#### FLOATTOSTR

**`str FLOATTOSTR int value, int div(, str format = "")`**

Used for formatted text processing of floating-point numbers.

:::tip[Parameters]
- **int value**
  - Specifies the dividend.
- **int div**
  - Specifies the divisor. An error occurs if the divisor is `0`.
- **str format = ""**
  - Specifies the string format.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the string result.
:::

:::note[Example]
```
PRINTSL FLOATTOSTR(13, 23)			;Prints "0.5652174"
PRINTSL FLOATTOSTR(13, 23, "0.00")		;Prints "0.57"
```
:::

----
#### REPLACEBYARRAY

**`str REPLACEBYARRAY str source, str match, strArray1D replaceArray`**

A new command separated from the [**`REPLACE`**](modify_com#replace) command, replacing text sequentially with strings from the `replaceArray` array.

:::tip[Parameters]
- **str text**
  - Specifies the text to be processed.
- **str match**
  - Specifies the text to match.
- **strArray1D replaceArray**
  - Specifies the string array for replacement.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the string result.
:::

:::note[Example]
```
LOCALS '= "111", "222", "333"
PRINTSL REPLACEBYARRAY("A A-A", "A", LOCALS)		; Prints "111 222-333"
```
:::

----
#### STRAPPEND

**`str STRAPPEND (str delimiter = ",", anyParams value)`**

Implements [**`string.join`**](https://learn.microsoft.com/dotnet/api/system.string.join?view=netframework-4.8#system-string-join(system-string-system-string())) to concatenate text.

:::tip[Parameters]
- **str delimiter = ","**
  - Specifies the delimiter for concatenation, can be omitted `(",")`.
- **anyParams value**
  - Specifies zero or more parameter values.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the concatenated string result.
:::

:::note[Example]
```
PRINTSL STRAPPEND(, "aaa", 222, 33)		;Prints "aaa,222,33"
PRINTSL STRAPPEND("__", "aaa", 222, 33)		;Prints "aaa__222__33"
```
:::

----
#### STRFINDUW

**`int STRFINDUW str text, str word(, int start = 0)`**

Usage is similar to the [**`STRFINDU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRFINDU.20.3C.E6.A4.9C.E7.B4.A2.E5.AF.BE.E8.B1.A1.3E.2C.20.3C.E6.A4.9C.E7.B4.A2.E3.81.99.E3.82.8B.E6.96.87.E5.AD.97.E5.88.97.3E.7B.2C.20.3C.E9.96.8B.E5.A7.8B.E3.82.A4.E3.83.B3.E3.83.87.E3.83.83.E3.82.AF.E3.82.B9.3E.7D) command, searching for a specified string in the text and retrieving its index position.

This command treats complex Emoji characters as a single whole character.

:::tip[Parameters]
- **str text**
  - Specifies the text.
- **str word**
  - Specifies the string to search for.
- **int start = 0**
  - Specifies the starting position for the search, can be omitted `(0)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the index position found, or `-1` if not found.
:::

:::note[Example]
```
PRINTVL STRFINDUW("啊😀A啊B", "A")		;Prints "2"
```
:::

----
#### STRFINDLAST Series {#STRFINDLAST_Series}

**`int STRFINDLAST str text, str word(, int start = lastIndex)`**

**`int STRFINDLASTU str text, str word(, int start = lastIndex)`**

**`int STRFINDLASTUW str text, str word(, int start = lastIndex)`**

Usage is similar to the [**`STRFIND`**](modify_com#strfind) command, searching for a specified string in the text in "reverse order" and retrieving its index position.

The **`STRFINDLAST`** command calculates character length via display width when processing Emoji characters.

The **`STRFINDLASTUW`** command treats complex Emoji characters as a single whole character.

:::tip[Parameters]
- **str text**
  - Specifies the text.
- **str word**
  - Specifies the string to search for.
- **int start = lastIndex**
  - Specifies the starting position for the search, can be omitted `(the last index position)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the index position found, or `-1` if not found.
:::

:::note[Example]
```
PRINTVL STRFINDLAST("啊A啊BA", "B")		;Prints "5"
PRINTVL STRFINDLAST("啊A啊BA", "A", 2)		;Prints "2"
PRINTVL STRFINDLAST("啊A啊BA", "A", 1)		;Prints "-1"
PRINTVL STRFINDLASTU("啊A啊BA", "B")		;Prints "3"
PRINTVL STRFINDLASTUW("😀A啊B😀A", "B")	;Prints "3"
```
:::

----
#### STRFORMAT

**`str STRFORMAT str formatText(, anyParams value)`**

Implements [**`string.format`**](https://learn.microsoft.com/dotnet/api/system.string.format?view=netframework-4.8#Starting) for formatted text processing.

:::tip[Parameters]
- **str formatText**
  - Specifies the format string text.
- **anyParams value**
  - Specifies zero or more parameter values.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the formatted string result. Returns the original text if formatting fails.
:::

:::note[Example]
```
PRINTSL STRFORMAT("aaa_{0}__{1}", 222, "33")	;Prints "aaa_222__33"
```
:::

----
#### STRLENSUW

**`int STRLENSUW str text`**

Usage is similar to the [**`STRLENSU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRLENSU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E) command, retrieving the character count of the text based on Unicode encoding.

This command treats complex Emoji characters as a single whole character.

:::tip[Parameters]
- **str text**
  - Specifies the text.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the character count of the specified text.
:::

:::note[Example]
```
PRINTVL STRLENSUW("A👪A")		;Prints "3"
```
:::

----
#### STRREMOVE Series {#STRREMOVE_Series}

**`str STRREMOVE str text(, int start = 0, int count = totalLength)`**

**`str STRREMOVEU str text(, int start = 0, int count = totalLength)`**

**`str STRREMOVEUW str text(, int start = 0, int count = totalLength)`**

Implements [**`string.remove`**](https://learn.microsoft.com/dotnet/api/system.string.remove?view=netframework-4.8) to remove text within a specified range.

The **`STRREMOVE`** command calculates character length via display width when processing Emoji characters.  
If the selected position falls in the middle of a long character, it rolls back to the start of that character. That is, characters at the starting position are counted, while those at the ending position are ignored.

The **`STRREMOVEUW`** command treats complex Emoji characters as a single whole character.

:::tip[Parameters]
- **str text**
  - Specifies the text to be processed.
- **int start = 0**
  - Specifies the starting position for removal, can be omitted `(0)`.
- **int count = totalLength**
  - Specifies the number of characters to remove, can be omitted `(total length of the text)`.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the string result.
:::

:::note[Example]
```
PRINTSL STRREMOVE("１２３４５６", 2, 3)			;Prints "１３４５６".
PRINTSL STRREMOVEU("１２３４５６", 3)			;Prints "１２３".
PRINTSL STRREMOVEU("１２３４５６", 0, 3)			;Prints "４５６".
PRINTSL STRREMOVEUW("１２３４👨‍👩‍👧‍👦５６", 2, 3)		;Prints "１２５６".
```
:::

----
#### STRSPLIT

**`int STRSPLIT str text, str Array_List_HashList(, str delimiter = ",", int removeEmpty = 0)`**

Usage is similar to the [**`SPLIT`**](modify_com#split) command, splitting text based on a specified string.

:::tip[Parameters]
- **str text**
  - Specifies the text to be split.
- **str Array_List_HashList**
  - Specifies a string-type referable array, list, or hash list to receive the split text.
    - For lists and hash lists: Existing content in the variable will be cleared and replaced with new content.
- **str delimiter = ","**
  - Specifies the delimiter for splitting, can be omitted `(",")`.
- **int removeEmpty = 0**
  - Specifies whether to remove empty elements after splitting, can be omitted `(0)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of strings after splitting.  
    The count may be affected by array length or hash list characteristics.
:::

:::note[Example]
```
LOCAL = STRSPLIT("111,AAA,22", LOCALS)			;LOCAL is assigned the value 3.
PRINTSL LOCALS:0					;Prints "111".
LOCAL = STRSPLIT("111,AAA__22", LOCALS, "__")		;LOCAL is assigned the value 2.
PRINTSL LOCALS:1					;Prints "22".
```
:::

----
#### STRTRIM

**`str STRTRIM str text(, str trimChars, int trimDirection = 0)`**

Implements [**`string.trim`**](https://learn.microsoft.com/dotnet/api/system.string.trim?view=netframework-4.8) to remove specified characters from the beginning and/or end of the text.

:::tip[Parameters]
- **str text**
  - Specifies the text to be processed.
- **str trimChars**
  - Specifies the characters to remove. If omitted, removes various system-default whitespace characters, such as spaces and tabs.
- **int trimDirection = 0**
  - Specifies the removal direction: `1` = remove from front, `2` = remove from back, other values = remove from both sides.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the string result.
:::

:::note[Example]
```
PRINTSL STRTRIM(" 111 AAA  22  ")			;Prints "111 AAA  22".
PRINTSL STRTRIM(" 111 AAA  22  ", " 12")		;Prints "AAA".
PRINTSL STRTRIM(" 111 AAA  22  ", " 12", 1)		;Prints "AAA  22  ".
```
:::

----
#### SUBSTRINGUW

**`str SUBSTRINGUW str text(, int start = 0, int length = totalLength)`**

Usage is similar to the [**`SUBSTRINGU`**](https://osdn.net/projects/emuera/wiki/excom#h5-SUBSTRINGU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E) command, extracting a substring based on the specified position and length.

This command treats complex Emoji characters as a single whole character.

:::tip[Parameters]
- **str text**
  - Specifies the text.
- **int start = 0**
  - Specifies the starting position for extraction, can be omitted `(0)`.
- **int length = totalLength**
  - Specifies the length to extract. A `negative` value extracts the total length of the text.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the extracted text.
:::

:::note[Example]
```
PRINTSL SUBSTRINGUW("A👪BAB👪A", 0, 4)		;Prints "A👪BA"
PRINTSL SUBSTRINGUW("A👪BAB👪A", 5)		;Prints "👪A"
```
:::

----
#### TRYTOINT

**`int TRYTOINT str text(, int outValue)`**

Usage is similar to the [**`TOINT`**](https://osdn.net/projects/emuera/wiki/excom#h5-TOINT.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E) command, used to convert a specified string to an integer, avoiding the functional redundancy issue that occurs when using `ISNUMERIC` and `TOINT` commands consecutively.

:::tip[Parameters]
- **str text**
  - Specifies the string to convert to an integer.
- **int outValue**
  - Specifies the integer variable to receive the conversion result. If omitted, `RESULT:1` is used. The conversion result is `0` if conversion fails.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the conversion was successful. Returns `non-zero` on success.
:::

:::note[Example]
```
PRINTVL TRYTOINT("IO") ? RESULT:1 # 11		; Prints "11"
SIF TRYTOINT("20", LOCAL)
PRINTVL LOCAL					; Prints "20"
```
:::

----
### Variable and Array Related {#VarAndArrayRelated}

----
#### ARRAYBIT

**`int ARRAYBIT anyArray array, str keyName(, int dimension = lastDim, str delimiter = ",")`**

Retrieves the index values corresponding to the multiple index key names specified in the second parameter `keyName` from the first parameter `array`, and performs an OR bitwise superposition on the index values.

In addition to retrieving array index keys as index values, you can also set the third parameter `dimension` to `0` to directly retrieve elements within the array as index values.

If a specified index key is not found, or if an index value is outside the range `0 - 63`, an error is reported.

This command is an experimental feature aimed at improving program runtime efficiency by leveraging the system's characteristic of refactoring suitable code into constants.

:::tip[Parameters]
- **anyArray array**
  - Specifies any array.
- **str keyName**
  - Specifies the index key names whose index values are to be superposed.
- **int dimension = lastDim**
  - Specifies the dimension of the array index key. If omitted, uses the last dimension of the array. When set to `0`, retrieves elements within the array as index values.
- **str delimiter = ","**
  - Specifies the delimiter for splitting key names, can be omitted `(",")`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the OR bitwise superposition result of all index values.
:::

:::note[Example]
```erh title="EXAMPLE_ARRAY.erh file"
#DIMS EXAMPLE_ARRAY, 20 = "VALUE_0", "VALUE_1", "VALUE_2", "VALUE_3"
```

```erd title="EXAMPLE_ARRAY.erd file"
0,AAA
1,BBB
2,CCC
3,DDD
```

```erb title="erb file"
LOCAL = ARRAYBIT(EXAMPLE_ARRAY, "AAA, BBB, DDD")	; LOCAL = 0B1011
; The above code is equivalent to:
LOCAL = 1 << GETNUM(EXAMPLE_ARRAY, "AAA")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "BBB")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "DDD")

LOCAL = ARRAYBIT(EXAMPLE_ARRAY, "VALUE_0, VALUE_2", 0)	; LOCAL = 0B0101
; The above code is equivalent to:
LOCAL = 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_0")
LOCAL |= 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_2")
```
:::

----
#### ARRAYRESIZE

**`void ARRAYRESIZE anyArray1D array, int size1D(, int keepData = 0)`**

**`void ARRAYRESIZE anyArray2D array, int size1D, int size2D(, int keepData = 0)`**

**`void ARRAYRESIZE anyArray3D array, int size1D, int size2D, int size3D(, int keepData = 0)`**

This command is used to resize a specified user-defined array.

The first parameter `array` can only specify a user-defined array variable declared with the [**`RESIZE`**](new_com#resize) keyword.

When specifying the `size1D`, `size2D`, `size3D` parameters, note that the total array length must not exceed `1000000`.  
If the specified lengths for each dimension are exactly the same as the current array lengths and the `keepData` parameter is `non-zero`, no processing occurs.

A static array, once resized, will maintain its new size until reset to its original length by the [**`RESETDATA`**](https://osdn.net/projects/emuera/wiki/excom#h5-RESETDATA) command.  
For dynamic arrays, only the array within the current function call stack is resized; arrays created upon entering new function call stacks later are not resized.

:::tip[Parameters]
- **anyArray1|2|3D array**
  - Specifies the array to be resized.
- **int size1D**
  - Specifies the length of the array's first dimension.
- **int size2D**
  - Specifies the length of the array's second dimension.
- **int size3D**
  - Specifies the length of the array's third dimension.
- **int keepData = 0**
  - Specifies whether to retain the original data in the array. Input `non-zero` to keep original data.
:::

:::note[Example]
```
@TEST
#LOCALSIZE 1
#DIM DYNAMIC RESIZE DYNAMIC_ARRAY, 1, 1
#DIM STATIC_ARRAY, 1, 1, 1

ARRAYRESIZE LOCAL, 2		; The LOCAL array within the TEST function is successfully resized.
ARRAYRESIZE DYNAMIC_ARRAY, 2, 2	; The DYNAMIC_ARRAY array is successfully resized.
CALL TEST_1(DYNAMIC_ARRAY, STATIC_ARRAY)

@TEST_1(REF_ARRAY1, REF_ARRAY2)
#DIM REF REF_ARRAY1, 0, 0
#DIM REF REF_ARRAY2, 0, 0, 0

ARRAYRESIZE REF_ARRAY1, 2, 2	; The referenced DYNAMIC_ARRAY array is successfully resized.
ARRAYRESIZE REF_ARRAY2, 2, 2, 2	; This line will cause an error because the referenced STATIC_ARRAY array was not declared with the RESIZE keyword.
```
:::

----
#### ARRAYTIDY

**`int ARRAYTIDY any Array_List(, int start = 0, int end = lastDimLength, same emptyVal)`**

This command organizes empty values within an array to produce a contiguous array without gaps.

:::tip[Parameters]
- **any Array_List**
  - Specifies any referable array or list to be organized.
    - For multi-dimensional arrays: Only elements of the last dimension are processed, and earlier dimension indices must be specified manually.
    - For lists: Empty elements after organization will be removed.
- **int start = 0**
  - Specifies the start index for organization.
- **int end = lastDimLength**
  - Specifies the end index+1 for organization. If omitted, uses the length of the array's last dimension.
- **same emptyVal**
  - Specifies the numerical or string value that will be treated as an empty value during processing. The value type must match the first parameter's value type. Can be omitted (`0` or `empty string`).
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of elements within the specified range after organization.
:::

----
#### ARRAYFIND, ARRAYFINDLAST

**`int ARRAYFIND anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int ARRAYFINDLAST anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

Usage is similar to the [**`FINDELEMENT, FINDLASTELEMENT`**](modify_com#findelement-findlastelement) commands, used to search for elements in an array that meet specified criteria.

This command defaults to `not using regular expression matching`, `not using partial matching`, and `case-sensitive`. Processing options can be adjusted via the `option` parameter.

:::tip[Parameters]
- **anyArray array**
  - Specifies any array to be searched.
    - For multi-dimensional arrays: Only elements of the last dimension are processed, and earlier dimension indices must be specified manually.
- **same target**
  - Specifies the content to search for. The value type must match the first parameter's value type.
- **int start = 0**
  - Specifies the start index for the search.
- **int end = lastDimLength**
  - Specifies the end index+1 for the search. If omitted, uses the length of the array's last dimension.
- **int option = 0**
  - Specifies processing options:
    -  `1P0` = Use partial matching
    -  `1P1` = Ignore case
    -  `1P2` = Invert judgment result
    -  `1P3` = Use regular expression matching
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the first index value meeting the search criteria, or `-1` if not found.
:::

:::note[Example]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P0 | 1P1)		;Searches ARRAY:0 to ARRAY:7 for elements containing "AA" (case-insensitive)
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P2)		;Searches ARRAY:0 to ARRAY:7 for elements not equal to "AA"
PRINTVL ARRAYFINDLAST(ARRAY, "AA", 0, 8, 1P2)		;Searches ARRAY:0 to ARRAY:7 from the end for elements not equal to "AA"
PRINTVL ARRAYFIND(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)	;Searches ARRAY:0 to ARRAY:7 for elements partially matching "\\d+"
PRINTVL ARRAYFIND(CARRAY_2D:TARGET:3:0, 22, 5)		;Searches the character TARGET's CARRAY_2D:3:5 to CARRAY_2D:3:9 for elements equal to 22
```
:::

----
#### ANYSAME

**`int ANYSAME any key(, sameParams value)`**

Usage is similar to the [**`GROUPMATCH`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/GROUPCHECK.html) command, searching among the subsequent parameters for any value identical to the value specified in the first parameter `key`.

:::tip[Parameters]
- **any key**
  - Specifies the value to search for.
- **sameParams value**
  - Specifies one or more parameter values.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the search result. Returns `non-zero` if found, `0` if not found.
:::

----
#### HASH

**`int HASH anyParams value`**

Generates a (presumably) unique hash code for the specified parameter values.  
When generating hash codes for multiple parameter values at once, the order of input is considered; different orders produce different hash codes.

:::tip[Parameters]
- **anyParams value**
  - Specifies one or more parameter values.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the generated hash code.
:::

----
#### VARLENGTH

**`int VARLENGTH anyArray array(, int dimension)`**

Usage is similar to the [**`VARSIZE`**](modify_com#varsize) command, retrieving the length of each dimension of an array.

When the second parameter `dimension` is omitted, this command returns the length of the array's last dimension. A `negative` input can retrieve the total length of the array.

:::tip[Parameters]
- **anyArray array**
  - Specifies any array.
- **int dimension**
  - Specifies the array dimension. If omitted, returns the length of the array's last dimension. A `negative` input retrieves the total array length.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the array length of the specified dimension.
:::

----
### List Related {#ListRelated}

----
#### LISTSIZE

**`int LISTSIZE anyList list`**

**`int LISTSIZE anyDict_anyList dictList`**

Retrieves the element count of the specified list.

To retrieve the list count of a dictionary-of-lists, use the [**`DICTITEMCOUNT`**](new_com#dictitemcount) command.

:::tip[Parameters]
- **anyList list**
  - Specifies any list.
- **anyDict_anyList dictList**
  - Specifies any dictionary-of-lists.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the element count of the specified list.
:::

----
#### LISTCLEAR

**`int LISTCLEAR anyList list(, int start = 0, int count = listCount)`**

**`int LISTCLEAR anyDict_anyList dictList(, int start = 0, int count = listCount)`**

Removes elements within a specified range from the specified list.

:::tip[Parameters]
- **anyList list**
  - Specifies any list.
- **anyDict_anyList dictList**
  - Specifies any dictionary-of-lists.
- **int start = 0**
  - Specifies the starting position for removal, can be omitted `(0)`.
- **int count = listCount**
  - Specifies the number of elements to remove, can be omitted `(list element count)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### LISTADD

**`int LISTADD anyList list, same value(, int index = listCount)`**

**`int LISTADD anyDict_anyList dictList, same value(, int index = listCount)`**

Adds a specified element to the specified list.

:::tip[Parameters]
- **anyList list**
  - Specifies any list.
- **anyDict_anyList dictList**
  - Specifies any dictionary-of-lists.
- **same value**
  - Specifies the element to add. The value type must match the first parameter's value type.
- **int index = listCount**
  - Specifies the position to add, can be omitted `(end of the list)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the index position where the element was added.
:::

----
#### LISTFIND

**`int LISTFIND anyList list, same value(, int start = 0, int count = listCount)`**

**`int LISTFIND anyDict_anyList dictList, same value(, int start = 0, int count = listCount)`**

Searches for a specified element within the specified list.

:::tip[Parameters]
- **anyList list**
  - Specifies any list.
- **anyDict_anyList dictList**
  - Specifies any dictionary-of-lists.
- **same value**
  - Specifies the element to find. The value type must match the first parameter's value type.
- **int start = 0**
  - Specifies the starting position for the search, can be omitted `(0)`.
- **int count = listCount**
  - Specifies the number of elements to search, can be omitted `(list element count)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the index position of the found element, or `(-1)` if not found.
:::

----
#### LISTREMOVE

**`int LISTREMOVE anyList list, same value`**

**`int LISTREMOVE anyDict_anyList dictList, same value`**

Removes a specified element from the specified list.

:::tip[Parameters]
- **anyList list**
  - Specifies any list.
- **anyDict_anyList dictList**
  - Specifies any dictionary-of-lists.
- **same value**
  - Specifies the element to remove. The value type must match the first parameter's value type.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the removal result. Returns `(non-zero)` if found and removed, `(0)` if not found.
:::

----
#### LISTREMOVEAT

**`int LISTREMOVEAT anyList list, int index(, int removeCount = 1)`**

**`int LISTREMOVEAT anyDict_anyList dictList, int index(, int removeCount = 1)`**

Removes elements at a specified index position from the specified list.

:::tip[Parameters]
- **anyList list**
  - Specifies any list.
- **anyDict_anyList dictList**
  - Specifies any dictionary-of-lists.
- **int index**
  - Specifies the index position of the element(s) to remove.
- **int removeCount = 1**
  - Specifies the number of elements to remove, can be omitted `(1)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Always returns `(non-zero)`.
:::

----
#### LISTCOPY

**`int LISTCOPY anyList srcList, same Array_List_HashList`**

**`int LISTCOPY anyDict_anyList srcDictList, same Array_List_HashList`**

Copies all elements from the specified source list to the specified target array or list.

:::tip[Parameters]
- **anyList srcList**
  - Specifies any source list.
- **anyDict_anyList srcDictList**
  - Specifies any source dictionary-of-lists.
- **same Array_List_HashList**
  - Specifies a referable array, list, or hash list to receive all elements. The value type must match the first parameter's value type.
    - For lists: Source content will be appended to the end of the list.
    - For hash lists: Source content will be merged with existing content in the hash list.
:::

:::tip[Return Value]
- **RESULT:0**
  - For arrays: Returns the number of elements successfully copied. The count is limited by the array length.
  - For lists and hash lists: Returns the total element count in the target variable.
:::

----
### Hash List Related {#HashListRelated}

----
#### HASHLISTSIZE

**`int HASHLISTSIZE anyHashList list`**

**`int HASHLISTSIZE anyDict_anyHashList dictList`**

Retrieves the element count of the specified hash list.

To retrieve the hash list count of a dictionary-of-hash-lists, use the [**`DICTITEMCOUNT`**](new_com#dictitemcount) command.

:::tip[Parameters]
- **anyHashList list**
  - Specifies any hash list.
- **anyDict_anyHashList dictList**
  - Specifies any dictionary-of-hash-lists.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the element count of the specified hash list.
:::

----
#### HASHLISTCLEAR

**`int HASHLISTCLEAR anyHashList list`**

**`int HASHLISTCLEAR anyDict_anyHashList dictList`**

Clears all elements from the specified hash list.

:::tip[Parameters]
- **anyHashList list**
  - Specifies any hash list.
- **anyDict_anyHashList dictList**
  - Specifies any dictionary-of-hash-lists.
:::

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### HASHLISTADD

**`int HASHLISTADD anyHashList list, same value`**

**`int HASHLISTADD anyDict_anyHashList dictList, same value`**

Adds a specified value to the specified hash list.

:::tip[Parameters]
- **anyHashList list**
  - Specifies any hash list.
- **anyDict_anyHashList dictList**
  - Specifies any dictionary-of-hash-lists.
- **same value**
  - Specifies the value to add. The value type must match the first parameter's value type.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the addition result. Returns `non-zero` if the value is successfully added, `0` if the value already exists.
:::

----
#### HASHLISTHAS

**`int HASHLISTHAS anyHashList list, same value`**

**`int HASHLISTHAS anyDict_anyHashList dictList, same value`**

Checks if a specified value exists in the specified hash list.

:::tip[Parameters]
- **anyHashList list**
  - Specifies any hash list.
- **anyDict_anyHashList dictList**
  - Specifies any dictionary-of-hash-lists.
- **same value**
  - Specifies the value to check. The value type must match the first parameter's value type.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the check result. Returns `non-zero` if the value exists, otherwise returns `0`.
:::

----
#### HASHLISTREMOVE

**`int HASHLISTREMOVE anyHashList list, same value`**

**`int HASHLISTREMOVE anyDict_anyHashList dictList, same value`**

Removes a specified value from the specified hash list.

:::tip[Parameters]
- **anyHashList list**
  - Specifies any hash list.
- **anyDict_anyHashList dictList**
  - Specifies any dictionary-of-hash-lists.
- **same value**
  - Specifies the value to remove. The value type must match the first parameter's value type.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the removal result. Returns `non-zero` if the value is successfully found and removed, `0` if not found.
:::

----
#### HASHLISTCOPY

**`int HASHLISTCOPY anyHashList srcList, same Array_List_HashList`**

**`int HASHLISTCOPY anyDict_anyHashList srcDictList, same Array_List_HashList`**

Copies all elements from the specified source hash list to the specified target array or list.

:::tip[Parameters]
- **anyHashList srcList**
  - Specifies any source hash list.
- **anyDict_anyHashList srcDictList**
  - Specifies any source dictionary-of-hash-lists.
- **same Array_List_HashList**
  - Specifies a referable array, list, or hash list to receive all elements. The value type must match the first parameter's value type.
    - For lists: Source content will be appended to the end of the list.
    - For hash lists: Source content will be merged with existing content in the hash list.
:::

:::tip[Return Value]
- **RESULT:0**
  - For arrays: Returns the number of elements successfully copied. The count is limited by the array length.
  - For lists and hash lists: Returns the total element count in the target variable.
:::

----
### Dictionary Related {#DictRelated}

----
#### DICTSIZE

**`int DICTSIZE anyanyDict dict`**

**`int DICTSIZE anyDict_anyanyDict dictDict`**

Retrieves the element count of the specified dictionary.

To retrieve the dictionary count of a dictionary-of-dictionaries, use the [**`DICTITEMCOUNT`**](new_com#dictitemcount) command.

:::tip[Parameters]
- **anyanyDict dict**
  - Specifies any dictionary.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary-of-dictionaries.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the element count of the specified dictionary.
:::

----
#### DICTCLEAR

**`int DICTCLEAR anyanyDict dict`**

**`int DICTCLEAR anyDict_anyanyDict dictDict`**

Clears all elements from the specified dictionary.

:::tip[Parameters]
- **anyanyDict dict**
  - Specifies any dictionary.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary-of-dictionaries.
:::

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### DICTADD

**`int DICTADD anyanyDict dict, sameAsKey key, same value`**

**`int DICTADD anyDict_anyanyDict dictDict, sameAsKey key, same value`**

Adds a specified key and value to the specified dictionary. If the specified key already exists, it will not be added.

:::tip[Parameters]
- **anyanyDict dict**
  - Specifies any dictionary.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary-of-dictionaries.
- **sameAsKey key**
  - Specifies the key name. The value type of the key must match the key type of the first parameter.
- **same value**
  - Specifies the value. The value type must match the value type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the addition result. Returns `non-zero` if the key and value are successfully added, `0` if the key already exists.
:::

----
#### DICTHAS

**`int DICTHAS anyanyDict dict, sameAsKey key`**

**`int DICTHAS anyDict_anyanyDict dictDict, sameAsKey key`**

Checks if a specified key name exists in the specified dictionary.

:::tip[Parameters]
- **anyanyDict dict**
  - Specifies any dictionary.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary-of-dictionaries.
- **sameAsKey key**
  - Specifies the key name. The value type of the key must match the key type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the check result. Returns `non-zero` if the key name exists, otherwise returns `0`.
:::

----
#### DICTREMOVE

**`int DICTREMOVE anyanyDict dict, sameAsKey key`**

**`int DICTREMOVE anyDict_anyanyDict dictDict, sameAsKey key`**

Removes a specified key-value pair from the specified dictionary.

:::tip[Parameters]
- **anyanyDict dict**
  - Specifies any dictionary.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary-of-dictionaries.
- **sameAsKey key**
  - Specifies the key name. The value type of the key must match the key type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the removal result. Returns `non-zero` if the key name is successfully found and removed, otherwise returns `0`.
:::

----
#### DICTTRYGET

**`int DICTTRYGET anyanyDict dict, same outValue`**

**`int DICTTRYGET anyDict_anyanyDict dictDict, same outValue`**

Attempts to find and retrieve a specified key's value from the specified dictionary. This command will not report an error when retrieving a value.

:::tip[Parameters]
- **anyanyDict dict**
  - Specifies any dictionary.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary-of-dictionaries.
- **same outValue**
  - Specifies the variable to receive the key's value. The variable's value type must match the value type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the search result. Returns `non-zero` if the key name is successfully found and outputs the value to **outValue**, otherwise returns `0`.
:::

----
#### DICTGETKEYS

**`int DICTGETKEYS anyanyDict srcDict, sameAsKey Array_List_HashList`**

**`int DICTGETKEYS anyDict_anyanyDict srcDictDict, sameAsKey Array_List_HashList`**

Copies all key names from the specified source dictionary to the specified target array or list.

:::tip[Parameters]
- **anyanyDict srcDict**
  - Specifies any source dictionary.
- **anyDict_anyanyDict srcDictDict**
  - Specifies any source dictionary-of-dictionaries.
- **sameAsKey Array_List_HashList**
  - Specifies a referable array, list, or hash list to receive the key elements. The value type must match the key type of the first parameter.
    - For lists: Source content will be appended to the end of the list.
    - For hash lists: Source content will be merged with existing content in the hash list.
:::

:::tip[Return Value]
- **RESULT:0**
  - For arrays: Returns the number of elements successfully copied. The count is limited by the array length.
  - For lists and hash lists: Returns the total element count in the target variable.
:::

----
#### DICTGETVALUES

**`int DICTGETVALUES anyanyDict srcDict, same Array_List_HashList`**

**`int DICTGETVALUES anyDict_anyanyDict srcDictDict, same Array_List_HashList`**

Copies all values from the specified source dictionary to the specified target array, list, or hash list.

:::tip[Parameters]
- **anyanyDict srcDict**
  - Specifies any source dictionary.
- **anyDict_anyanyDict srcDictDict**
  - Specifies any source dictionary-of-dictionaries.
- **same Array_List_HashList**
  - Specifies a referable array, list, or hash list to receive the value elements. The value type must match the value type of the first parameter.
    - For lists: Source content will be appended to the end of the list.
    - For hash lists: Source content will be merged with existing content in the hash list.
:::

:::tip[Return Value]
- **RESULT:0**
  - For arrays: Returns the number of elements successfully copied. The count is limited by the array length.
  - For lists and hash lists: Returns the total element count in the target variable.
:::

----
#### DICTCOPY

**`int DICTCOPY anyanyDict srcDict, sameAsKeysameAsKeyDict destDict`**

**`int DICTCOPY anyanyDict srcDict, anyDict_sameAsKeysameDict destDictDict`**

**`int DICTCOPY anyDict_anyanyDict srcDictDict, sameAsKeysameAsKeyDict destDict`**

**`int DICTCOPY anyDict_anyanyDict srcDictDict, anyDict_sameAsKeysameDict destDictDict`**

Copies all elements from the specified source dictionary to the specified target dictionary.

:::tip[Parameters]
- **anyanyDict srcDict**
  - Specifies any source dictionary.
- **anyDict_anyanyDict srcDictDict**
  - Specifies any source dictionary-of-dictionaries.
- **sameAsKeysameAsKeyDict destDict**
  - Specifies the target dictionary. The key type and value type must match those of the first parameter.
- **anyDict_sameAsKeysameDict destDictDict**
  - Specifies the target dictionary-of-dictionaries. The secondary key type and value type must match those of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the total element count in the target variable.
:::

----
### Dictionary Collection Related {#DictItemRelated}

----
#### DICTITEMCREATE

**`int DICTITEMCREATE anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMCREATE anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMCREATE anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

Creates a new collection within the specified dictionary collection.

:::tip[Parameters]
- **anyDict_anyList dictList**
  - Specifies any dictionary-of-lists.
- **anyDict_anyHashList dictHashList**
  - Specifies any dictionary-of-hash-lists.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary-of-dictionaries.
- **sameAsDictKey dictKey**
  - Specifies the primary key name to create. The value type of the key must match the primary key type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the specified primary key name is successfully created, `0` if a collection with the same key name already exists.
:::

----
#### DICTITEMEXIST

**`int DICTITEMEXIST anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMEXIST anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMEXIST anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

Searches for a specified primary key name within the specified dictionary collection.

:::tip[Parameters]
- **anyDict_anyList dictList**
  - Specifies any dictionary-of-lists.
- **anyDict_anyHashList dictHashList**
  - Specifies any dictionary-of-hash-lists.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary-of-dictionaries.
- **sameAsDictKey dictKey**
  - Specifies the primary key name to find. The value type of the key must match the primary key type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the specified primary key name is successfully found, `0` if not found.
:::

----
#### DICTITEMRELEASE

**`int DICTITEMRELEASE anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMRELEASE anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMRELEASE anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

Removes a specified primary key name and its collection from the specified dictionary collection.

:::tip[Parameters]
- **anyDict_anyList dictList**
  - Specifies any dictionary-of-lists.
- **anyDict_anyHashList dictHashList**
  - Specifies any dictionary-of-hash-lists.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary-of-dictionaries.
- **sameAsDictKey dictKey**
  - Specifies the primary key name to remove. The value type of the key must match the primary key type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the specified primary key name and collection are successfully found and removed, `0` if not found.
:::

----
#### DICTITEMRELEASEALL

**`int DICTITEMRELEASEALL anyDict_anyList dictList`**

**`int DICTITEMRELEASEALL anyDict_anyHashList dictHashList`**

**`int DICTITEMRELEASEALL anyDict_anyanyDict dictDict`**

Removes all primary key names and their collections from the specified dictionary collection.

:::tip[Parameters]
- **anyDict_anyList dictList**
  - Specifies any dictionary-of-lists.
- **anyDict_anyHashList dictHashList**
  - Specifies any dictionary-of-hash-lists.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary-of-dictionaries.
:::

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### DICTITEMCOUNT

**`int DICTITEMCOUNT anyDict_anyList dictList`**

**`int DICTITEMCOUNT anyDict_anyHashList dictHashList`**

**`int DICTITEMCOUNT anyDict_anyanyDict dictDict`**

Retrieves the number of collections within the specified dictionary collection.

:::tip[Parameters]
- **anyDict_anyList dictList**
  - Specifies any dictionary-of-lists.
- **anyDict_anyHashList dictHashList**
  - Specifies any dictionary-of-hash-lists.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary-of-dictionaries.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of collections within the dictionary collection.
:::

----
#### DICTITEMGETKEYS

**`int DICTITEMGETKEYS anyDict_anyList dictList, sameAsDictKey Array_List_HashList`**

**`int DICTITEMGETKEYS anyDict_anyHashList dictHashList, sameAsDictKey Array_List_HashList`**

**`int DICTITEMGETKEYS anyDict_anyanyDict dictDict, sameAsDictKey Array_List_HashList`**

Retrieves all primary key names from the specified dictionary collection.

:::tip[Parameters]
- **anyDict_anyList dictList**
  - Specifies any dictionary-of-lists.
- **anyDict_anyHashList dictHashList**
  - Specifies any dictionary-of-hash-lists.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary-of-dictionaries.
- **sameAsDictKey Array_List_HashList**
  - Specifies any referable array, list, or hash list to receive the primary key names. The value type must match the primary key type of the first parameter.
    - For lists: Source content will be appended to the end of the list.
    - For hash lists: Source content will be merged with existing content in the hash list.
:::

:::tip[Return Value]
- **RESULT:0**
  - For arrays: Returns the number of elements successfully copied. The count is limited by the array length.
  - For lists and hash lists: Returns the total element count in the target variable.
:::

----
### Input Related {#InputRelated}

----
#### CHKKEYDATA

**`int CHKKEYDATA int keyData(, str keyName, int modifier)`**

Checks if the user-input `keyData` key code value matches the specified `keyName` button name and `modifier` modifier key. The `keyData` key code value can be obtained via the [**`INPUTMOUSEKEY`**](modify_com#inputmousekey) command.

For a specific list of `keyName` button name correspondences, please refer to the [**`Keys Enumeration`**](https://learn.microsoft.com/dotnet/api/system.windows.forms.keys?view=netframework-4.8) documentation.

:::tip[Parameters]
- **int keyData**
  - Specifies the user-input key code value data.
- **str keyName**
  - Specifies the button name to match. The button name is case-insensitive. Can be omitted.
- **int modifier**
  - Specifies the modifier key to match. Can be omitted.
    - `1P0` = Shift
    - `1P1` = Ctrl
    - `1P2` = Alt
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the specified button name and modifier key were successfully matched. Returns `non-zero` on success.
:::

:::note[Example]
```
INPUTMOUSEKEY 0
IF RESULT:0 == 3
  PRINTVL CHKKEYDATA(RESULT:2, "A")		; Checks if the user typed "A"
  PRINTVL CHKKEYDATA(RESULT:2, , 1P0 | 1P1)	; Checks if the user typed "Ctrl + Shift"
  PRINTVL CHKKEYDATA(RESULT:2, "/", 1P1 | 1P2)	; Checks if the user typed "Ctrl + Alt + /"
ENDIF
```
:::

----
### Image Related {#ImageRelated}

----
#### ASYNCGDRAWG

This command is called in the same way as the [**`GDRAWG`**](modify_com#gdrawg) command and is used to perform drawing operations asynchronously to avoid prolonged program stalls.

After sending an asynchronous task, you can call the [**`ASYNCWAITALL`**](#asyncwaitall) command to force the program to wait for all asynchronous tasks to complete.

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the asynchronous task is successfully sent, `0` if the specified image is not created.
:::

----
#### ASYNCGDRAWSPRITE

This command is called in the same way as the [**`GDRAWSPRITE`**](modify_com#gdrawsprite) command and is used to perform drawing operations asynchronously to avoid prolonged program stalls.

After sending an asynchronous task, you can call the [**`ASYNCWAITALL`**](#asyncwaitall) command to force the program to wait for all asynchronous tasks to complete.

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the asynchronous task is successfully sent, `0` if the specified image or Sprite is not created.
:::

----
#### ASYNCGCREATEFROMFILE

**`int ASYNCGCREATEFROMFILE int GID, str filepath`**

This command is called in the same way as the [**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) command and is used to load the specified image file asynchronously to avoid prolonged program stalls.

After sending an asynchronous task, you can call the [**`ASYNCWAITALL`**](#asyncwaitall) command to force the program to wait for all asynchronous tasks to complete.

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### ASYNCGDISPOSE

**`int ASYNCGDISPOSE int GID`**

This command is called in the same way as the [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) command and is used to release images in conjunction with other asynchronous commands.

After sending an asynchronous task, you can call the [**`ASYNCWAITALL`**](#asyncwaitall) command to force the program to wait for all asynchronous tasks to complete.

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the asynchronous task is successfully sent, `0` if the specified image is not created.
:::

----
#### ASYNCSPRITELOAD

**`int ASYNCSPRITELOAD str sprite`**

This command is used to asynchronously load the image referenced by the specified Sprite to avoid prolonged program stalls.

After sending an asynchronous task, you can call the [**`ASYNCWAITALL`**](#asyncwaitall) command to force the program to wait for all asynchronous tasks to complete.

:::tip[Parameters]
- **str sprite**
  - Specifies the name of the Sprite to load asynchronously.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the asynchronous task is successfully sent, or if the Sprite's image is already loaded. Returns `0` if the Sprite is not found.
:::

----
#### ASYNCWAITALL

**`void ASYNCWAITALL`**

This command forces the program to wait for all asynchronous tasks to complete.

----
#### GETBEZIERPATH

**`int GETBEZIERPATH intArray2|3D pointArray, int pointCount, intArray2D outputArray, int outputCount`**

Used to generate a Bezier curve and store all coordinate points on the curve into the `outputArray` array.

:::tip[Parameters]
- **intArray2|3D pointArray**
  - Specifies the coordinates of the starting point, multiple control points, and ending point for generating the curve. The length of the last dimension of the array must be `greater than or equal to 2`.
- **int pointCount**
  - Specifies the number of coordinate points in `pointArray`.
- **intArray2D outputArray**
  - The generated curve coordinates will be stored in this array. The length of the last dimension of the array must be `greater than or equal to 2`.
- **int outputCount**
  - Specifies the number of coordinate points to generate.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the command was successfully executed. Returns `non-zero` on success.
:::

----
#### GETBEZIERPOINT

**`int GETBEZIERPOINT intArray2|3D pointArray, int pointCount, int t, int tMax`**

Retrieves a coordinate point on a Bezier curve based on specified control points and path progress.

:::tip[Parameters]
- **intArray2|3D pointArray**
  - Specifies the coordinates of the starting point, multiple control points, and ending point for generating the curve. The length of the last dimension of the array must be `greater than or equal to 2`.
- **int pointCount**
  - Specifies the number of coordinate points in `pointArray`.
- **int t**
  - Specifies the path progress for the required coordinate point.
- **int tMax**
  - Specifies the maximum path progress.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the command was successfully executed. Returns `non-zero` on success.
- **RESULT:1**
  - The X value of the coordinate point.
- **RESULT:2**
  - The Y value of the coordinate point.
:::

----
#### GDISPOSEALL

**`void GDISPOSEALL`**

Releases and clears all Graphics images.

----
#### GENABLED

**`int GENABLED int GID`**

Retrieves the `ENABLED` value of the specified image, which controls whether the image can ultimately be drawn to the screen.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the `ENABLED` value of the specified image. Returns `0` if the image is not created.
:::

----
#### GSETENABLED

**`int GSETENABLED int GID, int enabled`**

This command controls whether the specified image can ultimately be drawn to the screen while preserving its positional information.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int enabled**
  - Specifies whether the image should be drawn.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the image is not created.
:::

----
#### GFILLELLIPSE

**`int GFILLELLIPSE int GID, int x, int y, int width, int height`**

Used to draw an ellipse shape. Usage is similar to the [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) command. Color is specified via the [**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) command.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int x**
  - Specifies the X position of the ellipse.
- **int y**
  - Specifies the Y position of the ellipse.
- **int width**
  - Specifies the width of the ellipse.
- **int height**
  - Specifies the height of the ellipse.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the shape was successfully drawn. Returns `non-zero` on success, `0` if the specified image is not created.
:::

----
#### GFILLROUNDRECT

**`int GFILLROUNDRECT int GID, int x, int y, int width, int height, int radiusX(, int radiusY)`**

Used to draw a rounded rectangle. Usage is similar to the [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) command. Color is specified via the [**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) command.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int x**
  - Specifies the X position of the rounded rectangle.
- **int y**
  - Specifies the Y position of the rounded rectangle.
- **int width**
  - Specifies the width of the rounded rectangle.
- **int height**
  - Specifies the height of the rounded rectangle.
- **int radiusX**
  - Specifies the X radius of the rounded corners.
- **int radiusY**
  - Specifies the Y radius of the rounded corners. If omitted, uses the same value as `radiusX`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the shape was successfully drawn. Returns `non-zero` on success, `0` if the specified image is not created.
:::

----
#### GRESAMPLESAVE

**`int GRESAMPLESAVE int GID, any fileName, int width, int height`**

Usage is similar to the [**`GSAVE`**](modify_com#gsave-gload) command, generating a clearer scaled image via higher-quality resampling and saving it as a file, at the cost of longer processing time.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **any fileName**
  - Specifies the file number or file path to save to.
- **int width**
  - Specifies the scaled width.
- **int height**
  - Specifies the scaled height.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the file was successfully saved. Returns `non-zero` on success, `0` if the specified image is not created, the file path is invalid, or an error occurs while saving.
:::

----
#### GSNAPSHOT

**`int GSNAPSHOT int GID`**

This command captures the screen at runtime, copying the current window's screen data to the specified image ID.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
:::

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### GRESETMATRIX

**`int GRESETMATRIX int GID`**

Resets the transformation matrix of the specified image.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the image's transformation matrix was successfully set. Returns `non-zero` on success. Returns `0` if the image is not created.
:::

----
#### GRESETSTATE

**`int GRESETSTATE int GID`**

Resets all additional states of the specified image. The specific reset contents are as follows:

- The color of `BRUSH` is reset to the default text color.
- The color of `PEN` is reset to the default text color, pen width is reset to `1`, and all line effects are reset.
- Anti-aliasing is reset to `1 (enabled)`.
- Filter quality is reset to `3 (high quality)`.
- Blur effects are cleared.
- `ColorMatrix` is cleared.
- `TransformMatrix` is reset.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the image's state was successfully reset. Returns `non-zero` on success. Returns `0` if the image is not created.
:::

----
#### GSETANTIALIAS

**`int GSETANTIALIAS int GID(, int mode = 0)`**

Used to set whether anti-aliasing is enabled for image drawing.

All newly created images have anti-aliasing enabled by default.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int mode = 0**
  - Specifies whether to enable anti-aliasing. Input `non-zero` to enable, otherwise disable. Can be omitted `(0)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether anti-aliasing was successfully set for the image. Returns `non-zero` on success. Returns `0` if the image is not created.
:::

----
#### GSETBLUR

**`int GSETBLUR int GID(, int blur = 0)`**

Used to set whether blur effects are enabled for image drawing.

All newly created images have no blur effects by default.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int blur = 0**
  - Specifies the blur intensity. Input range is `0-100`. Omission or input of `0` will clear blur effects.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether blur effects were successfully set for the image. Returns `non-zero` on success. Returns `0` if the image is not created.
:::

----
#### GSETCOLORMATRIX

**`int GSETCOLORMATRIX int GID(, intArray colorMatrix)`**

Used to set whether a color matrix is enabled for image drawing.

The color matrix array must be at least `4 rows x 5 columns` in size. The input range for the first 4 columns is `0-255` or `256-510` (supporting 2x oversaturation), and the input range for the 5th column is `0-255`.

To clear the color matrix, call this command again and omit the second parameter `colorMatrix`.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **intArray colorMatrix**
  - Specifies any integer array as the color matrix. Omitting this parameter will clear any existing color matrix.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the color matrix was successfully set for the image. Returns `non-zero` on success. Returns `0` if the image is not created.
:::

:::note[Example]
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

Used to set the filter quality level for image drawing, which affects the clarity when scaling images.

All newly created images use `3 (high quality)` by default.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int quality = 3**
  - Specifies the quality level. Input range is `0-3`:
    - `0` = No filtering
    - `1` = Low quality
    - `2` = Medium quality
    - `3` = High quality
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the filter quality was successfully set for the image. Returns `non-zero` on success. Returns `0` if the image is not created.
:::

----
#### GSETSCALE

**`int GSETSCALE int GID, int scaleX, int scaleY(, int posX = 0, int posY = 0)`**

Applies a `scale` effect to the image's transformation matrix.

Applied effects cannot be undone, only reset entirely by calling the [**`GRESETMATRIX`**](#gresetmatrix) command.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int scaleX**
  - Specifies the X scaling amount. Input `100` for `100%`.
- **int scaleY**
  - Specifies the Y scaling amount. Input `100` for `100%`.
- **int posX = 0**
  - Specifies the X position of the scaling center point. Can be omitted `(0)`.
- **int posY = 0**
  - Specifies the Y position of the scaling center point. Can be omitted `(0)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the image's transformation matrix was successfully set. Returns `non-zero` on success. Returns `0` if the image is not created.
:::

----
#### GSETSKEW

**`int GSETSKEW int GID, int skewX, int skewY`**

Applies a `skew` effect to the image's transformation matrix.

Applied effects cannot be undone, only reset entirely by calling the [**`GRESETMATRIX`**](#gresetmatrix) command.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int skewX**
  - Specifies the X skew amount. Input `100` for `100%`.
- **int skewY**
  - Specifies the Y skew amount. Input `100` for `100%`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the image's transformation matrix was successfully set. Returns `non-zero` on success. Returns `0` if the image is not created.
:::

----
#### GSETROTATE

**`int GSETROTATE int GID, int angle`**

**`int GSETROTATE int GID, int angle, int posX = 0, int posY = 0`**

Applies a `rotate` effect to the image's transformation matrix.

Applied effects cannot be undone, only reset entirely by calling the [**`GRESETMATRIX`**](#gresetmatrix) command.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int angle**
  - Specifies the rotation angle.
- **int posX = 0**
  - Specifies the X position of the rotation center point. Can be omitted `(0)`.
- **int posY = 0**
  - Specifies the Y position of the rotation center point. Can be omitted `(0)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the image's transformation matrix was successfully set. Returns `non-zero` on success. Returns `0` if the image is not created.
:::

----
#### GSETTRANSLATE

**`int GSETTRANSLATE int GID, int translateX, int translateY`**

Applies a `translate` effect to the image's transformation matrix.

Applied effects cannot be undone, only reset entirely by calling the [**`GRESETMATRIX`**](#gresetmatrix) command.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int translateX**
  - Specifies the X translation vector.
- **int translateY**
  - Specifies the Y translation vector.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the image's transformation matrix was successfully set. Returns `non-zero` on success. Returns `0` if the image is not created.
:::

----
#### SPRITEANIMECLEARFRAME

**`int SPRITEANIMECLEARFRAME str spriteAnime(, int removeStart = 0, int removeCount = frameCount)`**

Clears frames of the specified SpriteAnime.

This command only works on non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int removeStart = 0**
  - Specifies the starting position for clearing.
- **int removeCount = frameCount**
  - Specifies the number of frames to clear. If omitted, clears all frames from `removeStart`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the clearing was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEANIMEFRAMECOUNT

**`int SPRITEANIMEFRAMECOUNT str spriteAnime`**

Retrieves the number of frames already added to the specified SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the frame count of the specified SpriteAnime. Returns `0` if the SpriteAnime is not created.
:::

----
#### SPRITEANIMERESETTIME

**`int SPRITEANIMERESETTIME str spriteAnime`**

Resets the playback time of the specified SpriteAnime, causing the animation to restart from the first frame.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created.
:::

----
#### SPRITEANIMEOFFSETTIME

**`int SPRITEANIMEOFFSETTIME str spriteAnime, int offsetTime`**

Adds an offset value to the playback time of the specified SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int offsetTime**
  - Specifies the offset value.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created.
:::

----
#### SPRITEFRAME_SETG

**`int SPRITEFRAME_SETG str spriteAnime, int GID`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height, int posX, int posY`**

Sets an image for the current frame of the specified SpriteAnime. For each frame, only the last set image type takes effect.

This command only works on non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int GID**
  - Specifies the image ID.
- **int x**
  - Specifies the selection box X position.
- **int y**
  - Specifies the selection box Y position.
- **int width**
  - Specifies the selection box width.
- **int height**
  - Specifies the selection box height.
- **int posX**
  - Specifies the selection box drawing X position.
- **int posY**
  - Specifies the selection box drawing Y position.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_SETSPRITE

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height, int posX, int posY`**

Sets a Sprite image for the current frame of the specified SpriteAnime. For each frame, only the last set image type takes effect.

This command only works on non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **str sprite**
  - Specifies the Sprite.
- **int x**
  - Specifies the selection box X position.
- **int y**
  - Specifies the selection box Y position.
- **int width**
  - Specifies the selection box width.
- **int height**
  - Specifies the selection box height.
- **int posX**
  - Specifies the selection box drawing X position.
- **int posY**
  - Specifies the selection box drawing Y position.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_SETSPINE

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height, int posX, int posY`**

Sets a Spine animation for the current frame of the specified SpriteAnime. For each frame, only the last set image type takes effect.

This command only works on non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int spineID**
  - Specifies the SpineID.
- **int x**
  - Specifies the selection box X position.
- **int y**
  - Specifies the selection box Y position.
- **int width**
  - Specifies the selection box width.
- **int height**
  - Specifies the selection box height.
- **int posX**
  - Specifies the selection box drawing X position.
- **int posY**
  - Specifies the selection box drawing Y position.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_TRANSITION

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton`**

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton, intArray2D bezierPointArray, int bezierPointCount`**

Enables or disables transition effects for the current frame of the specified SpriteAnime. The transition effect uses the previous frame as the transformation start and the current frame as the transformation end.  
A Bezier curve description array can be passed in to achieve a non-linear transition effect.

- Only the following properties are affected by the transition effect:
  - Transformation matrix
  - Color matrix
  - Blur effects

This command only works on non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int useTransisiton**
  - Specifies whether to enable or disable transition effects.
- **intArray2D bezierPointArray**
  - Specifies an array describing a Bezier curve.
- **int bezierPointCount**
  - Specifies the number of coordinate points in the array.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_TRANSLATE

**`int SPRITEFRAME_TRANSLATE str spriteAnime, int translateX, int translateY`**

Applies a `translate` effect to the transformation matrix of the current frame of the specified SpriteAnime.

Applied effects cannot be undone, only reset by calling the [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) command for the current frame.

This command only works on non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int translateX**
  - Specifies the X translation vector.
- **int translateY**
  - Specifies the Y translation vector.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_SCALE

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY`**

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY, int posX, int posY`**

Applies a `scale` effect to the transformation matrix of the current frame of the specified SpriteAnime.

Applied effects cannot be undone, only reset by calling the [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) command for the current frame.

This command only works on non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int scaleX**
  - Specifies the X scaling amount. Input `100` for `100%`.
- **int scaleY**
  - Specifies the Y scaling amount. Input `100` for `100%`.
- **int posX = 0**
  - Specifies the X position of the scaling center point. Can be omitted `(0)`.
- **int posY = 0**
  - Specifies the Y position of the scaling center point. Can be omitted `(0)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_ROTATE

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle`**

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle, int posX, int posY`**

Applies a `rotate` effect to the transformation matrix of the current frame of the specified SpriteAnime.

Applied effects cannot be undone, only reset by calling the [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) command for the current frame.

This command only works on non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int angle**
  - Specifies the rotation angle.
- **int posX**
  - Specifies the X position of the rotation center point. Can be omitted `(0)`.
- **int posY**
  - Specifies the Y position of the rotation center point. Can be omitted `(0)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_SKEW

**`int SPRITEFRAME_SKEW str spriteAnime, int skewX, int skewY`**

Applies a `skew` effect to the transformation matrix of the current frame of the specified SpriteAnime.

Applied effects cannot be undone, only reset by calling the [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) command for the current frame.

This command only works on non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int skewX**
  - Specifies the X skew amount. Input `100` for `100%`.
- **int skewY**
  - Specifies the Y skew amount. Input `100` for `100%`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_RESETMATRIX

**`int SPRITEFRAME_RESETMATRIX str spriteAnime`**

Resets the transformation matrix of the current frame of the specified SpriteAnime.

This command only works on non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_COLORMATRIX

**`int SPRITEFRAME_COLORMATRIX str spriteAnime(, intArray colorMatrix)`**

Sets a color matrix for the current frame of the specified SpriteAnime.

The color matrix array must be at least `4 rows x 5 columns` in size. The input range for the first 4 columns is `0-255` or `256-510` (supporting 2x oversaturation), and the input range for the 5th column is `0-255`.

To clear the color matrix, call this command again and omit the second parameter `colorMatrix`.

This command only works on non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **intArray colorMatrix**
  - Specifies any integer array as the color matrix. Omitting this parameter will clear any existing color matrix.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_BLUR

**`int SPRITEFRAME_BLUR str spriteAnime(, int blur = 0)`**

Sets blur effects for the current frame of the specified SpriteAnime.

This command only works on non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int blur = 0**
  - Specifies the blur intensity. Input range is `0-100`. Omission or input of `0` will clear blur effects.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEENABLED

**`int SPRITEENABLED str sprite`**

Retrieves the `ENABLED` value of the specified Sprite image, which controls whether the image can ultimately be drawn to the screen.

:::tip[Parameters]
- **str sprite**
  - Specifies the Sprite image.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the `ENABLED` value of the specified Sprite image. Returns `0` if the Sprite image is not created.
:::

----
#### SPRITESETENABLED

**`int SPRITESETENABLED str sprite, int enabled`**

This command controls whether the specified Sprite image can ultimately be drawn to the screen while preserving its positional information.

:::tip[Parameters]
- **str sprite**
  - Specifies the Sprite image.
- **int enabled**
  - Specifies whether the Sprite image should be drawn.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the Sprite image is not created.
:::

----
#### SPRITEEXIST

**`int SPRITEEXIST str sprite`**

Usage is similar to the [**`SPRITECREATED`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITECREATED.20str.20spriteName) command, checking for the existence of a specified Sprite but without triggering its referenced image's auto-loading mechanism.

:::tip[Parameters]
- **str sprite**
  - Specifies the Sprite name to check.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the specified Sprite was found. Returns `non-zero` if found.
:::

----
#### SPRITEEXTEND

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height`**

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height, int posX, int posY`**

Creates a new non-built-in Sprite based on an existing Sprite. The new Sprite's selection area is limited by the size of the original Sprite.

:::tip[Parameters]
- **str newSprite**
  - Specifies the new Sprite name.
- **str srcSprite**
  - Specifies the original Sprite name.
- **int x**
  - Specifies the selection box X position.
- **int y**
  - Specifies the selection box Y position.
- **int width**
  - Specifies the selection box width.
- **int height**
  - Specifies the selection box height.
- **int posX**
  - Specifies the new Sprite's drawing X position.
- **int posY**
  - Specifies the new Sprite's drawing Y position.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the new non-built-in Sprite was successfully created. Returns `non-zero` on success. Returns `0` if the new Sprite has the same name as the original, a built-in Sprite with the same name already exists, the original Sprite does not exist, or the original Sprite is not a single-image type Sprite.
:::

----
#### CONSTSPRITECREATE

**`int CONSTSPRITECREATE str sprite, str imgPath`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height, int posX, int posY`**

Creates a new built-in Sprite based on the specified `imgPath` image file path.

This operation replaces any existing non-built-in Sprite with the same name.

:::tip[Parameters]
- **str sprite**
  - Specifies the new Sprite name.
- **str imgPath**
  - Specifies the image file path.
- **int x**
  - Specifies the selection box X position.
- **int y**
  - Specifies the selection box Y position.
- **int width**
  - Specifies the selection box width.
- **int height**
  - Specifies the selection box height.
- **int posX**
  - Specifies the new Sprite's drawing X position.
- **int posY**
  - Specifies the new Sprite's drawing Y position.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the new built-in Sprite was successfully created. Returns `non-zero` on success. Returns `0` if a built-in Sprite with the same name already exists, or if the specified selection area does not intersect with the image.
:::

----
### SPINE Related {#SpineRelated}

----
#### SPINECREATE

**`int SPINECREATE int spineID, str spineResource`**

Creates a Spine animation in the specified `spineID` based on the Spine resource defined in a csv resource file.

This command releases any previously created Spine animation before creating a new one, i.e., there is no need to call [**`SPINEDISPOSE`**](#spinedispose) before creation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **str spineResource**
  - Specifies the Spine resource name. The name is case-insensitive.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the Spine animation was successfully created. Returns `non-zero` on success. Returns `0` if the Spine animation resource does not exist.
:::

----
#### SPINECREATEFROMFILE

**`int SPINECREATEFROMFILE int spineID, str atlasFile, str dataFile`**

Creates a Spine animation in the specified `spineID` based on the specified `atlas file` and `data file (.skel or .json)`.

This command releases any previously created Spine animation before creating a new one, i.e., there is no need to call [**`SPINEDISPOSE`**](#spinedispose) before creation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **str atlasFile**
  - Specifies the Spine animation's atlas file.
- **str dataFile**
  - Specifies the Spine animation's .skel file or .json file.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the Spine animation was successfully created. Returns `non-zero` on success. Returns `0` if the file does not exist or the file format is incorrect.
:::

----
#### SPINECREATED

**`int SPINECREATED int spineID`**

Checks if the specified Spine animation has been created.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the Spine animation has been created. Returns `non-zero` if created.
:::

----
#### SPINEDISPOSE

**`int SPINEDISPOSE int spineID(, int disposeImg = 0)`**

Removes the specified Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int disposeImg = 0**
  - Specifies whether to release the images referenced by this Spine animation. Input `non-zero` to release the images.
:::

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### SPINEDISPOSEALL

**`int SPINEDISPOSEALL (int disposeImg = 0)`**

Removes all Spine animations.

:::tip[Parameters]
- **int disposeImg = 0**
  - Specifies whether to release the images referenced by all Spine animations. Input `non-zero` to release the images.
:::

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### SPINEENABLED

**`int SPINEENABLED int spineID`**

Retrieves the `ENABLED` value of the specified Spine animation, which controls whether the animation can ultimately be drawn to the screen.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the `ENABLED` value of the specified Spine animation. Returns `0` if the Spine animation is not created.
:::

----
#### SPINESETENABLED

**`int SPINESETENABLED int spineID, int enabled`**

This command controls whether the specified Spine animation can ultimately be drawn to the screen while preserving its positional information.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int enabled**
  - Specifies whether the Spine animation should be drawn.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the Spine animation is not created.
:::

----
#### GDRAWSPINE

**`int GDRAWSPINE int GID, int spineID`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

Usage is similar to the [**`GDRAWG`**](modify_com#gdrawg) command, drawing the `spineID` Spine animation onto the specified `GID` image.

For usage of the `colorMatrix`, please refer to the description in the [**`GSETCOLORMATRIX`**](#gsetcolormatrix) command.

:::tip[Parameters]
- **int GID**
  - Specifies the target image ID.
- **int spineID**
  - Specifies the source SpineID.
- **int destX**
  - Specifies the target X position.
- **int destY**
  - Specifies the target Y position.
- **int destWidth**
  - Specifies the target width. A `negative` value draws a flipped image.
- **int destHeight**
  - Specifies the target height. A `negative` value draws a flipped image.
- **int srcX**
  - Specifies the source X position.
- **int srcY**
  - Specifies the source Y position.
- **int srcWidth**
  - Specifies the source width.
- **int srcHeight**
  - Specifies the source height.
- **intArray colorMatrix**
  - Specifies any integer array as a color matrix, can be omitted. This color matrix only takes effect for this drawing operation and is automatically cleared afterward.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the drawing was successful. Returns `non-zero` on success. Returns `0` if the specified image or Spine animation is not created.
:::

----
#### ASYNCGDRAWSPINE

This command is called in the same way as the [**`GDRAWSPINE`**](#gdrawspine) command and is used to perform drawing operations asynchronously to avoid prolonged program stalls.

After sending an asynchronous task, you can call the [**`ASYNCWAITALL`**](#asyncwaitall) command to force the program to wait for all asynchronous tasks to complete.

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the asynchronous task is successfully sent, `0` if the specified image or Spine animation is not created.
:::

----
#### ASYNCSPINELOAD

**`int ASYNCSPINELOAD int spineID`**

This command is used to asynchronously load the images referenced by the specified Spine animation to avoid prolonged program stalls.

After sending an asynchronous task, you can call the [**`ASYNCWAITALL`**](#asyncwaitall) command to force the program to wait for all asynchronous tasks to complete.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID to load asynchronously.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the asynchronous task is successfully sent. Returns `0` if the Spine animation is not created.
:::

----
#### SPINEPOSX, SPINEPOSY

**`int SPINEPOSX int spineID`**

**`int SPINEPOSY int spineID`**

Retrieves the drawing position of the specified Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the drawing position of the Spine animation.
:::

----
#### SPINESRCX, SPINESRCY

**`int SPINESRCX int spineID`**

**`int SPINESRCY int spineID`**

Retrieves the original axis position of the specified Spine animation. The retrieved value is affected by the [**`SPINESETSCALE`**](#spinesetscale) command.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the original axis position of the Spine animation.
:::

----
#### SPINEWIDTH, SPINEHEIGHT

**`int SPINEWIDTH int spineID`**

**`int SPINEHEIGHT int spineID`**

Retrieves the width or height of the specified Spine animation. The retrieved value is affected by the [**`SPINESETSCALE`**](#spinesetscale) command.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the width or height of the Spine animation.
:::

----
#### SPINESETPOS, SPINEMOVE

**`int SPINESETPOS int spineID, int posX, int posY`**

**`int SPINEMOVE int spineID, int offsetX, int offsetY`**

Usage is similar to the [**`SPRITESETPOS`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITESETPOS.20str.20spriteName.2C.20int.20posx.2C.20int.20posy), [**`SPRITEMOVE`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITEMOVE.20str.20spriteName.2C.20int.20movex.2C.20int.20movey) commands, used to set or offset the drawing position of the specified Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int posX**
  - Specifies the X drawing position.
- **int posY**
  - Specifies the Y drawing position.
- **int offsetX**
  - Specifies the X drawing position offset.
- **int offsetY**
  - Specifies the Y drawing position offset.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the Spine animation is not created.
:::

----
#### SPINESETSCALE

**`int SPINESETSCALE int spineID, int scale`**

**`int SPINESETSCALE int spineID, int scaleX, int scaleY`**

Sets the scaling factor of the specified Spine animation.

- This command affects the output of the following commands:
  - [**`SPINESRCX, SPINESRCY`**](#spinesrcx-spinesrcy)
  - [**`SPINEWIDTH, SPINEHEIGHT`**](#spinewidth-spineheight)

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int scale**
  - Specifies the overall scaling amount. Input `100` for `100%`.
- **int scaleX**
  - Specifies the X scaling amount. Input `100` for `100%`.
- **int scaleY**
  - Specifies the Y scaling amount. Input `100` for `100%`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the Spine animation is not created.
:::

----
#### SPINEHASANIM, SPINEHASSKIN

**`int SPINEHASANIM int spineID, str animName`**

**`int SPINEHASSKIN int spineID, str skinName`**

Checks if the specified Spine animation has the specified animation or skin.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **str animName**
  - Specifies the animation name. The name is case-insensitive.
- **str skinName**
  - Specifies the skin name. The name is case-insensitive.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the specified animation or skin exists. Returns `non-zero` if it exists.
:::

----
#### SPINESETANIM

**`int SPINESETANIM int spineID, int trackIndex, str animName(, int isLoop = 0)`**

Sets the specified animation for the specified Spine animation. If the animation name is empty, it clears any existing animation in the specified track index.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int trackIndex**
  - Specifies the animation track index.
- **str animName**
  - Specifies the animation name. The name is case-insensitive. If empty, clears any existing animation in the specified track index.
- **int isLoop = 0**
  - Specifies whether the animation loops.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the animation was successfully set. Returns `non-zero` on successful setting or clearing. Returns `0` if the Spine animation is not created or the specified animation does not exist.
:::

----
#### SPINEADDANIM

**`int SPINEADDANIM int spineID, int trackIndex, str animName(, int isLoop = 0, int delay = 1000)`**

Adds (overlays) the specified animation to the specified Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int trackIndex**
  - Specifies the animation track index.
- **str animName**
  - Specifies the animation name. The name is case-insensitive.
- **int isLoop = 0**
  - Specifies whether the animation loops.
- **int delay = 1000**
  - Specifies the animation playback delay in milliseconds.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the animation was successfully added. Returns `non-zero` on success. Returns `0` if the Spine animation is not created or the specified animation does not exist.
:::

----
#### SPINESETSKIN

**`int SPINESETSKIN int spineID, str skinName`**

Sets the specified skin for the specified Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **str skinName**
  - Specifies the skin name. The name is case-insensitive.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the skin was successfully set. Returns `non-zero` on success. Returns `0` if the Spine animation is not created or the specified skin does not exist.
:::

----
#### SPINESETTIME, SPINEUPDATETIME

**`int SPINESETTIME int spineID, int millsec`**

**`int SPINEUPDATETIME int spineID, int millsec`**

Sets or advances the playback time of the specified Spine animation by the specified amount.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int millsec**
  - Specifies the playback time in milliseconds.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the Spine animation is not created.
:::

----
#### SPINETIMESCALE

**`int SPINETIMESCALE int spineID, int timeScale`**

Sets the specified time multiplier for the specified Spine animation. This property controls the playback speed of the Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int timeScale**
  - Specifies the time multiplier. Input `100` for `100%`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the Spine animation is not created.
:::

----
#### SPINEANIMLIST, SPINESKINLIST

**`int SPINEANIMLIST int spineID, str Array_List_HashList`**

**`int SPINESKINLIST int spineID, str Array_List_HashList`**

Retrieves the animation list or skin list of the specified Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **str Array_List_HashList**
  - Specifies a string-type referable array, list, or hash list to receive the animation list or skin list.
    - For lists and hash lists: Existing content in the variable will be cleared and replaced with new content.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of animations or skins retrieved. Returns `0` if the Spine animation is not created.
:::

----
#### CBGSETSPINE

**`int CBGSETSPINE int spineID, int x, int y, int zdepth`**

Usage is similar to the [**`CBGSETG`**](https://osdn.net/projects/emuera/wiki/excom#h5-CBGSETG.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20zdepth) command, displaying the specified Spine animation on the client background.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int x**
  - Specifies the X position.
- **int y**
  - Specifies the Y position.
- **int zdepth**
  - Specifies the Z-axis depth.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the setting was successful. Returns `non-zero` on success. Returns `0` if the Spine animation is not created.
:::

----
### Audio Related {#AudioRelated}

----
#### AUDIOCREATE

**`int AUDIOCREATE str audioName, str srcAudio(, int volume, any startTime, any duration)`**

Creates a new Audio based on an existing `srcAudio`.

When specifying `startTime` and `duration`, refer only to the total duration of the audio file referenced by the original Audio.

`startTime` and `duration` can be input as `TimeSpan` or `ms (milliseconds)`. For the writing format of `TimeSpan`, please refer to the example section in the [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) documentation.

:::tip[Parameters]
- **str audioName**
  - Specifies the name of the new Audio.
- **str srcAudio**
  - Specifies the name of the referenced original Audio.
- **int volume**
  - Specifies the playback volume of the new Audio, can be omitted `(default volume of the original Audio)`.
- **any startTime**
  - Specifies the start time of the new Audio, can be omitted `(start time of the original Audio)`.
- **any duration**
  - Specifies the playback duration of the new Audio, can be omitted `(playback duration of the original Audio)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the Audio was successfully created. Returns `non-zero` on success. Returns `0` if the Audio name already exists or the original Audio does not exist.
:::

:::note[Example]
```
AUDIOCREATE "New", "Old", 80			;Creates new Audio "New" with volume 80
AUDIOCREATE "New", "Old", , "00:01:10", "10000"	;Creates new Audio "New" with start time 1 minute 10 seconds and duration 10000 milliseconds
```
:::

----
#### AUDIOCREATEFROMFILE

**`int AUDIOCREATEFROMFILE str audioName, str filePath(, int volume, any startTime, any duration)`**

Creates a new Audio based on the specified `filePath` audio file.

When specifying `startTime` and `duration`, refer only to the total duration of the audio file.

The `startTime` and `duration` parameters can accept `TimeSpan` or `ms (milliseconds)` values. For the writing format of `TimeSpan`, please refer to the example section in the [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) documentation.

:::tip[Parameters]
- **str audioName**
  - Specifies the name of the new Audio.
- **str filePath**
  - Specifies the relative path of the referenced audio file. This path must be relative from the main directory.
- **int volume**
  - Specifies the playback volume of the new Audio, can be omitted `(100)`.
- **any startTime**
  - Specifies the start time of the new Audio, can be omitted `(0)`.
- **any duration**
  - Specifies the playback duration of the new Audio, can be omitted `(total duration of the audio file)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the Audio was successfully created. Returns `non-zero` on success. Returns `0` if the Audio name already exists or the audio file does not exist.
:::

:::note[Example]
```
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", 80			;Creates new Audio "New" with volume 80
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", , "00:01:10"	;Creates new Audio "New" with start time 1 minute 10 seconds
```
:::

----
#### AUDIOCREATED

**`int AUDIOCREATED str audioName`**

Checks if the specified Audio has been created.

:::tip[Parameters]
- **str audioName**
  - Specifies the Audio name.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the Audio has been created. Returns `non-zero` if the Audio exists.
:::

----
#### AUDIOVOLUME

**`int AUDIOVOLUME str audioName`**

Retrieves the volume of the specified Audio.

:::tip[Parameters]
- **str audioName**
  - Specifies the Audio name.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the volume of the Audio. Returns `0` if the Audio does not exist.
:::

----
#### AUDIOSTARTTIME

**`int AUDIOSTARTTIME str audioName`**

Retrieves the playback start time of the specified Audio, in `ms (milliseconds)`.

:::tip[Parameters]
- **str audioName**
  - Specifies the Audio name.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the start time of the Audio. Returns `0` if the Audio does not exist.
:::

----
#### AUDIODURATION

**`int AUDIODURATION str audioName`**

Retrieves the playback duration of the specified Audio, in `ms (milliseconds)`.

:::tip[Parameters]
- **str audioName**
  - Specifies the Audio name.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the duration of the Audio. Returns `0` if the Audio does not exist.
:::

----
#### AUDIODISPOSE

**`int AUDIODISPOSE str audioName`**

Removes the specified temporary Audio. Memory occupied by the Audio will be released after playback ends. Only temporary Audio created at runtime can be removed.

:::tip[Parameters]
- **str audioName**
  - Specifies the name of the Audio to remove.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the Audio was successfully removed. Returns `non-zero` on success. Returns `0` if the Audio does not exist or the specified Audio is not a temporary Audio.
:::

----
#### AUDIODISPOSEALL

**`void AUDIODISPOSEALL`**

Removes all temporary Audio created at runtime. Memory occupied by Audio will be released after playback ends. Built-in Audio is not affected.

----
#### CURRENTBGM

**`str CURRENTBGM`**

Retrieves the name of the background music currently playing.

:::tip[Parameters]
- None
:::

:::tip[Return Value]
- **RESULTS:0**
  - The name of the background music currently playing. Returns an `empty string` if no music is playing.
:::

----
#### PAUSEBGM

**`void PAUSEBGM (int fadeOut = 0)`**

Pauses the background music currently playing.

:::tip[Parameters]
- **int fadeOut = 0**
  - Specifies the fade-out effect duration in `ms (milliseconds)`. Input `omitted` or `less than or equal to 0` for no effect. Maximum value is `10000`.
:::

----
### Module Related {#ModuleRelated}

----
#### MODULELIST

**`int MODULELIST str Array_List_HashList`**

Retrieves the list of loaded module IDs.

:::tip[Parameters]
- **str Array_List_HashList**
  - Specifies a string-type referable array, list, or hash list to receive the module ID list.
    - For lists and hash lists: Existing content in the variable will be cleared and replaced with new content.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of module IDs retrieved.  
    The count may be affected by array length or hash list characteristics.
:::

----
#### MODULEPATH

**`str MODULEPATH str modID`**

Retrieves the folder relative path of the specified loaded module.

:::tip[Parameters]
- **str modID**
  - Specifies the module ID for which to retrieve the folder path.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the retrieved folder relative path. Returns an `empty string` if the module ID does not exist or is not loaded.
:::

:::note[Example]
```
PRINTSL MODULEPATH("MyMod")			; Prints "mod/MyMod v1.0/"
```
:::

----
#### GETRESOURCEEXT

**`int GETRESOURCEEXT str Array_List_HashList(, int option = 1P0 | 1P1)`**

Retrieves all image and audio resource file extensions supported by the launcher. Extensions include the `.` symbol and are all lowercase.

:::tip[Parameters]
- **str Array_List_HashList**
  - Specifies a string-type referable array, list, or hash list to receive the file extensions.
    - For lists and hash lists: Existing content in the variable will be cleared and replaced with new content.
- **int option = 1P0 | 1P1**
  - Specifies the required resource type: `1P0` = image resources, `1P1` = audio resources. Can be omitted `(1P0 | 1P1)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of extensions retrieved.  
    The count may be affected by array length or hash list characteristics.
:::

:::note[Example]
```
GETRESOURCEEXT LOCALS, 1P0
PRINTS "Image Ext:" 
FOR LOCAL, 0, RESULT
	PRINTS " " + LOCALS:LOCAL
NEXT
PRINTL

GETRESOURCEEXT LOCALS, 1P1
PRINTS "Audio Ext:" 
FOR LOCAL, 0, RESULT
	PRINTS " " + LOCALS:LOCAL
NEXT
PRINTW

; Output result
; Image Ext: .bmp .jpg .jpeg .png .webp .tiff .exif .gif
; Audio Ext: .mp3 .mpeg3 .wav .wave .flac .fla .aiff .aif .aifc .aac .adt .adts .m2ts .mp2 .3g2 .3gp2 .3gp .3gpp .m4a .m4v .mp4v .mp4 .mov .asf .wm .wmv .wma .mp1 .avi .ac3 .ec3 .ogg
```
:::

----
#### TEXT

**`str TEXT anyParams keyName`**

Retrieves multilingual text based on the specified key name. For specific usage, please refer to the [**`Multilingual Function`**](/#Multilingual) section.

:::tip[Parameters]
- **anyParams keyName**
  - Specifies the key name for the multilingual text. The input key name is case-insensitive.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the specified multilingual text. Returns an `empty string` if the key name does not exist or the path is incorrect.
:::

:::note[Example]
```
LOCALS '= TEXT("START_GAME")
PRINTSL TEXT("ITEM")
PRINTSL TEXT("ITEM", "APPLE", "DESC")
```
:::

----
#### TEXTLIST

**`int TEXTLIST str Array_List_HashList, anyParams keyName`**

Retrieves a multilingual text list based on the specified key name. For specific usage, please refer to the [**`Multilingual Function`**](/#Multilingual) section.

:::tip[Parameters]
- **str Array_List_HashList**
  - Specifies a string-type referable array, list, or hash list to receive the text list.
    - For lists and hash lists: Existing content in the variable will be cleared and replaced with new content.
- **anyParams keyName**
  - Specifies the key name for the multilingual text. The input key name is case-insensitive.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of elements in the retrieved text list. Returns `0` if the key name does not exist or the path is incorrect.  
    The element count may be affected by array length or hash list characteristics.
:::

:::note[Example]
```
TEXTLIST(LOCALS, "ITEM", "BANANA", "DESC")
FOR LOCAL, 0, RESULT
  PRINTSL LOCALS:LOCAL
NEXT
```
:::

----
#### LANGUAGELIST

**`int LANGUAGELIST str Array_List_HashList`**

Retrieves the list of loaded multilingual IDs. Retrieved IDs automatically have `hyphens (-)` replaced with `underscores (_)`.

:::tip[Parameters]
- **str Array_List_HashList**
  - Specifies a string-type referable array, list, or hash list to receive the multilingual ID list.
    - For lists and hash lists: Existing content in the variable will be cleared and replaced with new content.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of multilingual IDs retrieved.  
    The count may be affected by array length or hash list characteristics.
:::

----
### MAP Collection Related {#MapCollectionRelated}

----
#### MAP_COPY

**`int MAP_COPY str srcMap, str destMap`**

Copies all elements from the specified source Map to the target Map.

:::tip[Parameters]
- **str srcMap**
  - Specifies the source Map.
- **str destMap**
  - Specifies the target Map.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the element count of the target Map. Returns `(-1)` if the source Map or target Map is not found.
:::

----
### Control Statement {#ControlStatement}

----
#### FOREACH-NEXTF

**`FOREACH-NEXTF same valueVar, any Collection(, VALUE)`**

**`FOREACH-NEXTF sameAsKey keyVar, any Dict, KEY`**

**`FOREACH-NEXTF sameAsDictKey dictKeyVar, any DictCollection, DICTKEY`**

**`FOREACH-NEXTF sameAsKey keyVar, same valueVar, any Dict`**

Usage is similar to the [**`FOR-NEXT`**](https://osdn.net/projects/emuera/wiki/excom#h5-FOR.20.3C.E6.95.B0.E5.80.A4.E5.9E.8B.E5.A4.89.E6.95.B0.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E.7B.2C.20.3C.E6.95.B0.E5.BC.8F.3E.7D) control statement, used to iterate over all elements in the specified collection.

The enumerator parameters for this control statement are pushed onto and popped from the function call stack along with the function.

:::tip[Parameters]
- **sameAsDictKey dictKeyVar**
  - Specifies the variable to receive the primary key name. The variable's value type must match the primary key type of the dictionary collection.
- **sameAsKey keyVar**
  - Specifies the variable to receive the key name. The variable's value type must match the key type of the dictionary.
- **same valueVar**
  - Specifies the variable to receive the value. The variable's value type must match the value type of the collection.
- **any Collection**
  - Specifies any array, list, hash list, dictionary, or other collection to iterate over.
- **any Dict**
  - Specifies any dictionary to iterate over.
- **any DictCollection**
  - Specifies any dictionary collection to iterate over.
- **DICTKEY**
  - Specifies iteration over the primary key elements of a dictionary collection. Cannot be omitted.
- **KEY**
  - Specifies iteration over the key elements of a dictionary. Cannot be omitted.
- **VALUE**
  - Specifies iteration over the value elements of a collection. Can be omitted.
:::

:::note[Example]
```
#DICTS_DICT_SI CREATURE_DICT

CREATURE_DICT:"动物":"🐶" = 11
CREATURE_DICT:"动物":"🐱" = 22
CREATURE_DICT:"植物":"🌳" = 33
CREATURE_DICT:"植物":"🌼" = 44

FOREACH LOCAL, CREATURE_DICT:"动物"
	PRINTFORM {LOCAL},
NEXTF
PRINTL
; Prints "11,22,"

FOREACH LOCALS, CREATURE_DICT:"动物", KEY
	PRINTFORM %LOCALS%,
NEXTF
PRINTL
; Prints "🐶,🐱,"

FOREACH LOCALS, CREATURE_DICT, DICTKEY
	PRINTFORM %LOCALS%,
NEXTF
PRINTL
; Prints "动物,植物,"

FOREACH LOCALS, LOCAL, CREATURE_DICT:"植物"
	PRINTFORM %LOCALS%-{LOCAL},
NEXTF
PRINTL
; Prints "🌳-33,🌼-44,"
```
:::

----
### Variable Keywords {#VariableKeyword}

----
#### RESIZE

This keyword marks user-defined array variables that need to be resized, such as those declared with `#DIM` and `#DICT_DIM`.

This keyword cannot be declared simultaneously with the **`CONST`**, **`REF`**, **`SAVEDATA`**, or **`CHARADATA`** keywords.

**`LOCAL`** and **`LOCALS`** array variables inherently have this keyword.

----
#### HARDCHECK

This keyword controls whether dictionary variables perform strict checks on user-input primary and secondary keys.

- When not declared, accessing a non-existent primary or secondary key will return `0` or an `empty string`. Assigning to a non-existent primary key will automatically add that key to ensure successful assignment.
- When declared, accessing a non-existent primary or secondary key will cause an error. Assigning to a non-existent primary key will cause an error.

This keyword can be used for dictionary variables and dictionary collection variables, such as `#DICT_II`, `#DICT_DIM`, and `#DICT_DICT_SS`.

This keyword cannot be declared simultaneously with the **`REF`** keyword.
