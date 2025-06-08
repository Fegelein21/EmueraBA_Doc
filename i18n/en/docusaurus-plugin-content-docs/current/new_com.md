---
sidebar_position: 3
sidebar_label: New Commands
---

# New Commands {#NewCom}

### Text Processing Related {#TextProcessRelated}

----
#### CHARATUW

**`str CHARATUW str text, int position`**

Similar in usage to the [**`CHARATU`**](https://osdn.net/projects/emuera/wiki/excom#h5-CHARATU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.96.87.E5.AD.97.E4.BD.8D.E7.BD.AE.3E) command, retrieves the character at the specified position in the text.

This command treats complex Emoji characters as a single character.

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

**`int FINDEMOJI str text, strArray array`**

Finds all Emoji characters in the text and outputs the results to the `array`.

:::tip[Parameters]
- **str text**
  - Specifies the text.
- **strArray array**
  - Specifies any string-type array to receive the Emoji character results.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of Emoji characters found.  
    The number retrieved may be limited by the length of the last dimension of the receiving array.
:::

:::note[Example]
```
PRINTVL FINDEMOJI("A👨‍👩‍👧‍👦AA😀A", LOCALS)		;Prints "2", LOCALS:0 ="👨‍👩‍👧‍👦", LOCALS:1 ="😀"
```
:::

----
#### FLOATTOSTR

**`str FLOATTOSTR int value, int div(, str format = "")`**

Used for formatting floating-point numbers into text.

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

A new command derived from the [**`REPLACE`**](modify_com#replace) command, replaces text by sequentially filling in strings from the `replaceArray`.

:::tip[Parameters]
- **str text**
  - Specifies the text to be processed.
- **str match**
  - Specifies the text to be matched.
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

Implements [**`string.join`**](https://learn.microsoft.com/dotnet/api/system.string.join?view=netframework-4.8#system-string-join(system-string-system-string())) for concatenating text.

:::tip[Parameters]
- **str delimiter = ","**
  - Specifies the delimiter for concatenating text. Can be omitted `(",")`.
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

Similar in usage to the [**`STRFINDU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRFINDU.20.3C.E6.A4.9C.E7.B4.A2.E5.AF.BE.E8.B1.A1.3E.2C.20.3C.E6.A4.9C.E7.B4.A2.E3.81.99.E3.82.8B.E6.96.87.E5.AD.97.E5.88.97.3E.7B.2C.20.3C.E9.96.8B.E5.A7.8B.E3.82.A4.E3.83.B3.E3.83.87.E3.83.83.E3.82.AF.E3.82.B9.3E.7D) command, searches for the specified string in the text and retrieves its index position.

This command treats complex Emoji characters as a single character.

:::tip[Parameters]
- **str text**
  - Specifies the text.
- **str word**
  - Specifies the string to search for.
- **int start = 0**
  - Specifies the starting position for the search. Can be omitted `(0)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the index position found. Returns `-1` if not found.
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

Similar in usage to the [**`STRFIND`**](modify_com#strfind) command, searches for the specified string in the text in "reverse order" and retrieves its index position.

The **`STRFINDLAST`** command calculates character length by display width when processing Emoji characters.

The **`STRFINDLASTUW`** command treats complex Emoji characters as a single character.

:::tip[Parameters]
- **str text**
  - Specifies the text.
- **str word**
  - Specifies the string to search for.
- **int start = lastIndex**
  - Specifies the starting position for the search. Can be omitted `(last index position)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the index position found. Returns `-1` if not found.
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

Implements [**`string.format`**](https://learn.microsoft.com/dotnet/api/system.string.format?view=netframework-4.8#Starting) for formatting text.

:::tip[Parameters]
- **str formatText**
  - Specifies the format string.
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

Similar in usage to the [**`STRLENSU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRLENSU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E) command, retrieves the number of characters in the text based on Unicode encoding.

This command treats complex Emoji characters as a single character.

:::tip[Parameters]
- **str text**
  - Specifies the text.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of characters in the specified text.
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

The **`STRREMOVE`** command calculates character length by display width when processing Emoji characters.  
If the selected position is in the middle of a long character, it retreats to the start position of that character. In other words, characters at the start position will be included, while those at the end position will be ignored.

The **`STRREMOVEUW`** command treats complex Emoji characters as a single character.

:::tip[Parameters]
- **str text**
  - Specifies the text to be processed.
- **int start = 0**
  - Specifies the starting position for removal. Can be omitted `(0)`.
- **int count = totalLength**
  - Specifies the number of characters to remove. Can be omitted `(total length of text)`.
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

**`int STRSPLIT str text, strArray array(, str delimiter = ",")`**

The usage is similar to the [**`SPLIT`**](modify_com#split) command, splitting text based on the specified string.

:::tip[Parameters]
- **str text**
  - Specifies the text to be split.
- **strArray array**
  - Specifies the array to store the split text.
- **str delimiter = ","**
  - Specifies the delimiter used to split the text. Can be omitted `(",")`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of split strings.
:::

:::note[Example]
```
LOCAL = STRSPLIT("111,AAA,22", LOCALS)         ;The value of LOCAL is assigned as 3.
PRINTSL LOCALS:0                ;Prints "111".
LOCAL = STRSPLIT("111,AAA__22", LOCALS, "__")  ;The value of LOCAL is assigned as 2.
PRINTSL LOCALS:1                ;Prints "22".
```
:::

----
#### STRTRIM

**`str STRTRIM str text(, str trimChars, int trimDirection = 0)`**

Implements [**`string.trim`**](https://learn.microsoft.com/dotnet/api/system.string.trim?view=netframework-4.8) to remove specified characters from the beginning and/or end of a string.

:::tip[Parameters]
- **str text**
  - The text to process.
- **str trimChars**
  - Characters to remove. If omitted, default whitespace characters (e.g., spaces, tabs) are removed.
- **int trimDirection = 0**
  - Direction to trim: `1` = trim start, `2` = trim end, other values = trim both.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the processed string.
:::

:::note[Example]
```
PRINTSL STRTRIM(" 111 AAA  22  ")            ; Prints "111 AAA  22".
PRINTSL STRTRIM(" 111 AAA  22  ", " 12")     ; Prints "AAA".
PRINTSL STRTRIM(" 111 AAA  22  ", " 12", 1)  ; Prints "AAA  22  ".
```
:::

----
#### SUBSTRINGUW

**`str SUBSTRINGUW str text(, int start = 0, int length = totalLength)`**

Similar to [**`SUBSTRINGU`**](https://osdn.net/projects/emuera/wiki/excom#h5-SUBSTRINGU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E), extracts a substring based on position and length.

This command treats complex Emoji characters as a single unit.

:::tip[Parameters]
- **str text**
  - The input text.
- **int start = 0**
  - Starting position (default: `0`).
- **int length = totalLength**
  - Length to extract. Negative values extract the entire remaining string.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the extracted substring.
:::

:::note[Example]
```
PRINTSL SUBSTRINGUW("A👪BAB👪A", 0, 4)  ; Prints "A👪BA".
PRINTSL SUBSTRINGUW("A👪BAB👪A", 5)    ; Prints "👪A".
```
:::

----
#### TRYTOINT

**`int TRYTOINT str text`**

Similar to [**`TOINT`**](https://osdn.net/projects/emuera/wiki/excom#h5-TOINT.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E), converts a string to an integer without redundant checks like `ISNUMERIC + TOINT`.

:::tip[Parameters]
- **str text**
  - The string to convert.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful.
- **RESULT:1**
  - Returns the converted integer. On failure, returns `0`.
:::

:::note[Example]
```
LOCAL = TRYTOINT("IO") ? RESULT:1 # 10
```
:::

----
### Variables and Arrays {#VarAndArrayRelated}

---
#### ARRAYBIT

**`int ARRAYBIT anyArray array, str keyName(, int dimension = lastDim, str delimiter = ",")`**

Retrieves the index values corresponding to the specified keys in the `keyName` parameter from the `array` and performs a bitwise OR operation on these values.

The instruction can also directly retrieve elements from the array as index values by setting the `dimension` parameter to `0`.

If a specified key is not found or the index value is outside the range of `0–63`, an error will be raised.

This is an experimental feature designed to improve program execution efficiency by leveraging the system's ability to optimize suitable code into constants.

:::tip[Parameters]
- **anyArray array**
  - Specifies any array.
- **str keyName**
  - Specifies the key names whose index values are to be ORed.
- **int dimension = lastDim**
  - Specifies the dimension of the array where the keys are located. If omitted, the last dimension is used. Setting this to `0` retrieves array elements directly as index values.
- **str delimiter = ","**
  - Specifies the delimiter used to split the key names. Can be omitted `(",")`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the bitwise OR result of all index values.
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
; Equivalent to:
LOCAL = 1 << GETNUM(EXAMPLE_ARRAY, "AAA")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "BBB")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "DDD")

LOCAL = ARRAYBIT(EXAMPLE_ARRAY, "VALUE_0, VALUE_2", 0)	; LOCAL = 0B0101
; Equivalent to:
LOCAL = 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_0")
LOCAL |= 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_2")
```
:::

---
#### ARRAYRESIZE

**`void ARRAYRESIZE anyArray1D array, int size1D(, int keepData = 0)`**

**`void ARRAYRESIZE anyArray2D array, int size1D, int size2D(, int keepData = 0)`**

**`void ARRAYRESIZE anyArray3D array, int size1D, int size2D, int size3D(, int keepData = 0)`**

This instruction resizes the specified array.

The `array` parameter must be a user-defined array variable with the **`RESIZE`** keyword:

- The **`RESIZE`** keyword can only be used with user-defined array variables and can coexist with **`GLOBAL`**, **`STATIC`**, or **`DYNAMIC`** keywords.
- `LOCAL` and `LOCALS` array variables inherently include the `RESIZE` keyword.

The total length of the array must not exceed `1,000,000` when specifying dimensions.  
If the specified dimensions match the current array size and `keepData` is `non-zero`, no action is taken.

Static arrays retain their resized state until reset to their original size by the [**`RESETDATA`**](https://osdn.net/projects/emuera/wiki/excom#h5-RESETDATA) instruction.  
Dynamic arrays are only resized within the current function stack and do not affect arrays created in subsequent function stacks.

:::tip[Parameters]
- **anyArray1|2|3D array**
  - Specifies the array to resize.
- **int size1D**
  - Specifies the length of the first dimension.
- **int size2D**
  - Specifies the length of the second dimension.
- **int size3D**
  - Specifies the length of the third dimension.
- **int keepData = 0**
  - Specifies whether to retain the original data. If `non-zero`, the data is preserved.
:::

:::note[Example]
```
@TEST
#LOCALSIZE 1
#DIM DYNAMIC RESIZE DYNAMIC_ARRAY, 1, 1
#DIM STATIC_ARRAY, 1, 1, 1

ARRAYRESIZE LOCAL, 2		; Resizes the LOCAL array in the TEST function.
ARRAYRESIZE DYNAMIC_ARRAY, 2, 2	; Resizes the DYNAMIC_ARRAY.
CALL TEST_1(DYNAMIC_ARRAY, STATIC_ARRAY)

@TEST_1(REF_ARRAY1, REF_ARRAY2)
#DIM REF REF_ARRAY1, 0, 0
#DIM REF REF_ARRAY2, 0, 0, 0

ARRAYRESIZE REF_ARRAY1, 2, 2	; Resizes the referenced DYNAMIC_ARRAY.
ARRAYRESIZE REF_ARRAY2, 2, 2, 2	; Raises an error because STATIC_ARRAY lacks the RESIZE keyword.
```
:::

---
#### ARRAYTIDY

**`int ARRAYTIDY anyArray array(, int start = 0, int end = lastDimLength, same emptyVal)`**

This instruction compacts the elements of an array, removing gaps to create a contiguous array.

For multi-dimensional arrays, only the last dimension is processed, and previous dimension indices must be specified manually.

:::tip[Parameters]
- **anyArray array**
  - Specifies the array to compact.
- **int start = 0**
  - Specifies the starting index for compaction.
- **int end = lastDimLength**
  - Specifies the end index (exclusive) for compaction. If omitted, the length of the last dimension is used.
- **same emptyVal**
  - Specifies the value treated as empty (e.g., `0` or an empty string). The type must match the array's element type. Can be omitted.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of elements after compaction.
:::

---
#### ARRAYFIND, ARRAYFINDLAST

**`int ARRAYFIND anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int ARRAYFINDLAST anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

Similar to [**`FINDELEMENT, FINDLASTELEMENT`**](modify_com#findelement-findlastelement), these instructions search for elements in an array that match the specified criteria.

By default, the search is case-sensitive, does not use partial matching, and does not use regular expressions. These behaviors can be adjusted via the `option` parameter.

For multi-dimensional arrays, only the last dimension is processed, and previous dimension indices must be specified manually.

:::tip[Parameters]
- **anyArray array**
  - Specifies the array to search.
- **same target**
  - Specifies the search target. The type must match the array's element type.
- **int start = 0**
  - Specifies the starting index for the search.
- **int end = lastDimLength**
  - Specifies the end index (exclusive) for the search. If omitted, the length of the last dimension is used.
- **int option = 0**
  - Specifies search options:
    - `1P0` = Partial matching
    - `1P1` = Case-insensitive
    - `1P2` = Invert match
    - `1P3` = Regular expression
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the index of the first matching element. Returns `-1` if no match is found.
:::

:::note[Example]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P0 | 1P1)	; Searches ARRAY:0 to ARRAY:7 for elements containing "AA" (case-insensitive).
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P2)		; Searches ARRAY:0 to ARRAY:7 for elements not equal to "AA".
PRINTVL ARRAYFINDLAST(ARRAY, "AA", 0, 8, 1P2)		; Searches ARRAY:0 to ARRAY:7 in reverse for elements not equal to "AA".
PRINTVL ARRAYFIND(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)	; Searches ARRAY:0 to ARRAY:7 for elements partially matching "\\d+".
PRINTVL ARRAYFIND(CARRAY_2D:TARGET:3:0, 22, 5)		; Searches CARRAY_2D:3:5 to CARRAY_2D:3:9 for elements equal to 22.
```
:::

---
#### VARLENGTH

**`int VARLENGTH anyArray array(, int dimension)`**

Similar to [**`VARSIZE`**](modify_com#varsize), this instruction retrieves the length of each dimension of an array.

If the `dimension` parameter is omitted, it returns the length of the last dimension. A negative value returns the total length of the array.

:::tip[Parameters]
- **anyArray array**
  - Specifies any array.
- **int dimension**
  - Specifies the dimension. If omitted, returns the length of the last dimension. A negative value returns the total length.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the length of the specified dimension.
:::

---
### List Related {#ListRelated}

----
#### LISTSIZE

**`int LISTSIZE anyList list`**

**`int LISTSIZE anyDict_anyList dictList`**

Gets the number of elements in the specified list.

To get the number of lists in a dictionary of lists, use the [**`DICTITEMCOUNT`**](new_com#dictitemcount) command.

:::tip[Parameters]
- **anyList list**
  - Specifies any list.
- **anyDict_anyList dictList**
  - Specifies any dictionary of lists.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of elements in the specified list.
:::

----
#### LISTCLEAR

**`int LISTCLEAR anyList list(, int start = 0, int count = listCount)`**

**`int LISTCLEAR anyDict_anyList dictList(, int start = 0, int count = listCount)`**

Removes elements within the specified range from the given list.

:::tip[Parameters]
- **anyList list**
  - Specifies any list.
- **anyDict_anyList dictList**
  - Specifies any dictionary of lists.
- **int start = 0**
  - Specifies the starting position for removal. Can be omitted `(0)`.
- **int count = listCount**
  - Specifies the number of elements to remove. Can be omitted `(number of elements in the list)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### LISTADD

**`int LISTADD anyList list, same value(, int index = listCount)`**

**`int LISTADD anyDict_anyList dictList, same value(, int index = listCount)`**

Adds the specified element to the given list.

:::tip[Parameters]
- **anyList list**
  - Specifies any list.
- **anyDict_anyList dictList**
  - Specifies any dictionary of lists.
- **same value**
  - Specifies the element to add. The value type must match the type of the first parameter.
- **int index = listCount**
  - Specifies the position to add the element. Can be omitted `(end of the list)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the index position where the element was added.
:::

----
#### LISTFIND

**`int LISTFIND anyList list, same value(, int start = 0, int count = listCount)`**

**`int LISTFIND anyDict_anyList dictList, same value(, int start = 0, int count = listCount)`**

Searches for the specified element in the given list.

:::tip[Parameters]
- **anyList list**
  - Specifies any list.
- **anyDict_anyList dictList**
  - Specifies any dictionary of lists.
- **same value**
  - Specifies the element to search for. The value type must match the type of the first parameter.
- **int start = 0**
  - Specifies the starting position for the search. Can be omitted `(0)`.
- **int count = listCount**
  - Specifies the number of elements to search. Can be omitted `(number of elements in the list)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the index position of the found element. Returns `(-1)` if not found.
:::

----
#### LISTREMOVE

**`int LISTREMOVE anyList list, same value`**

**`int LISTREMOVE anyDict_anyList dictList, same value`**

Removes the specified element from the given list.

:::tip[Parameters]
- **anyList list**
  - Specifies any list.
- **anyDict_anyList dictList**
  - Specifies any dictionary of lists.
- **same value**
  - Specifies the element to remove. The value type must match the type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the removal result. Returns `non-zero` if the element was found and removed, otherwise returns `0`.
:::

----
#### LISTREMOVEAT

**`int LISTREMOVEAT anyList list, int index`**

**`int LISTREMOVEAT anyDict_anyList dictList, int index`**

Removes the element at the specified index position from the given list.

:::tip[Parameters]
- **anyList list**
  - Specifies any list.
- **anyDict_anyList dictList**
  - Specifies any dictionary of lists.
- **int index**
  - Specifies the index position of the element to remove.
:::

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### LISTCOPY

**`int LISTCOPY anyList srcList, sameArray destArray`**

**`int LISTCOPY anyList srcList, sameList destList`**

**`int LISTCOPY anyList srcList, sameHashList destHashList`**

**`int LISTCOPY anyList srcList, anyDict_sameList destDictList`**

**`int LISTCOPY anyList srcList, anyDict_sameHashList destDictHashList`**

**`int LISTCOPY anyDict_anyList srcDictList, sameArray destArray`**

**`int LISTCOPY anyDict_anyList srcDictList, sameList destList`**

**`int LISTCOPY anyDict_anyList srcDictList, sameHashList destHashList`**

**`int LISTCOPY anyDict_anyList srcDictList, anyDict_sameList destDictList`**

**`int LISTCOPY anyDict_anyList srcDictList, anyDict_sameHashList destDictHashList`**

Copies all elements from the specified source list to the target array or list.

:::tip[Parameters]
- **anyList srcList**
  - Specifies any source list.
- **anyDict_anyList srcDictList**
  - Specifies any source dictionary of lists.
- **sameArray destArray**
  - Specifies the target array. The value type must match the type of the first parameter.
- **sameList destList**
  - Specifies the target list. The value type must match the type of the first parameter.
- **sameHashList destHashList**
  - Specifies the target hash list. The value type must match the type of the first parameter.
- **anyDict_sameList destDictList**
  - Specifies the target dictionary of lists. The value type must match the type of the first parameter.
- **anyDict_sameHashList destDictHashList**
  - Specifies the target dictionary of hash lists. The value type must match the type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - For target arrays, returns the number of successfully copied elements. For target lists and dictionaries of lists, returns the total number of elements after copying.
:::

----
### Hash List Related {#HashListRelated}

----
#### HASHLISTSIZE

**`int HASHLISTSIZE anyHashList list`**

**`int HASHLISTSIZE anyDict_anyHashList dictList`**

Gets the number of elements in the specified hash list.

To get the number of hash lists in a dictionary of hash lists, use the [**`DICTITEMCOUNT`**](new_com#dictitemcount) command.

:::tip[Parameters]
- **anyHashList list**
  - Specifies any hash list.
- **anyDict_anyHashList dictList**
  - Specifies any dictionary of hash lists.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of elements in the specified hash list.
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
  - Specifies any dictionary of hash lists.
:::

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### HASHLISTADD

**`int HASHLISTADD anyHashList list, same value`**

**`int HASHLISTADD anyDict_anyHashList dictList, same value`**

Adds the specified value to the given hash list.

:::tip[Parameters]
- **anyHashList list**
  - Specifies any hash list.
- **anyDict_anyHashList dictList**
  - Specifies any dictionary of hash lists.
- **same value**
  - Specifies the value to add. The value type must match the type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the addition result. Returns `non-zero` if the value was successfully added, or `0` if the value already exists.
:::

----
#### HASHLISTHAS

**`int HASHLISTHAS anyHashList list, same value`**

**`int HASHLISTHAS anyDict_anyHashList dictList, same value`**

Checks if the specified value exists in the given hash list.

:::tip[Parameters]
- **anyHashList list**
  - Specifies any hash list.
- **anyDict_anyHashList dictList**
  - Specifies any dictionary of hash lists.
- **same value**
  - Specifies the value to check. The value type must match the type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the check result. Returns `non-zero` if the value exists, otherwise returns `0`.
:::

----
#### HASHLISTREMOVE

**`int HASHLISTREMOVE anyHashList list, same value`**

**`int HASHLISTREMOVE anyDict_anyHashList dictList, same value`**

Removes the specified value from the given hash list.

:::tip[Parameters]
- **anyHashList list**
  - Specifies any hash list.
- **anyDict_anyHashList dictList**
  - Specifies any dictionary of hash lists.
- **same value**
  - Specifies the value to remove. The value type must match the type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the removal result. Returns `non-zero` if the value was found and removed, otherwise returns `0`.
:::

----
#### HASHLISTCOPY

**`int HASHLISTCOPY anyHashList srcList, sameArray destArray`**

**`int HASHLISTCOPY anyHashList srcList, sameList destList`**

**`int HASHLISTCOPY anyHashList srcList, sameHashList destHashList`**

**`int HASHLISTCOPY anyHashList srcList, anyDict_sameList destDictList`**

**`int HASHLISTCOPY anyHashList srcList, anyDict_sameHashList destDictHashList`**

**`int HASHLISTCOPY anyDict_anyHashList srcDictList, sameArray destArray`**

**`int HASHLISTCOPY anyDict_anyHashList srcDictList, sameList destList`**

**`int HASHLISTCOPY anyDict_anyHashList srcDictList, sameHashList destHashList`**

**`int HASHLISTCOPY anyDict_anyHashList srcDictList, anyDict_sameList destDictList`**

**`int HASHLISTCOPY anyDict_anyHashList srcDictList, anyDict_sameHashList destDictHashList`**

Copies all elements from the specified source hash list to the target array or list.

:::tip[Parameters]
- **anyHashList srcList**
  - Specifies any source hash list.
- **anyDict_anyHashList srcDictList**
  - Specifies any source dictionary of hash lists.
- **sameArray destArray**
  - Specifies the target array. The value type must match the type of the first parameter.
- **sameList destList**
  - Specifies the target list. The value type must match the type of the first parameter.
- **sameHashList destHashList**
  - Specifies the target hash list. The value type must match the type of the first parameter.
- **anyDict_sameList destDictList**
  - Specifies the target dictionary of lists. The value type must match the type of the first parameter.
- **anyDict_sameHashList destDictHashList**
  - Specifies the target dictionary of hash lists. The value type must match the type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - For target arrays, returns the number of successfully copied elements. For target lists and dictionaries of lists, returns the total number of elements after copying.
:::

----
### Dictionary Related {#DictRelated}

----
#### DICTSIZE

**`int DICTSIZE anyanyDict dict`**

**`int DICTSIZE anyDict_anyanyDict dictDict`**

Gets the number of elements in the specified dictionary.

To get the number of dictionaries in a dictionary of dictionaries, use the [**`DICTITEMCOUNT`**](new_com#dictitemcount) command.

:::tip[Parameters]
- **anyanyDict dict**
  - Specifies any dictionary.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary of dictionaries.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of elements in the specified dictionary.
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
  - Specifies any dictionary of dictionaries.
:::

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### DICTADD

**`int DICTADD anyanyDict dict, sameAsKey key, same value`**

**`int DICTADD anyDict_anyanyDict dictDict, sameAsKey key, same value`**

Adds the specified key and value to the given dictionary. If the key already exists, the addition will not occur.

:::tip[Parameters]
- **anyanyDict dict**
  - Specifies any dictionary.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary of dictionaries.
- **sameAsKey key**
  - Specifies the key name. The key type must match the key type of the first parameter.
- **same value**
  - Specifies the value. The value type must match the value type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the addition result. Returns `non-zero` if the key and value were successfully added, or `0` if the key already exists.
:::

----
#### DICTHAS

**`int DICTHAS anyanyDict dict, sameAsKey key`**

**`int DICTHAS anyDict_anyanyDict dictDict, sameAsKey key`**

Checks if the specified key exists in the given dictionary.

:::tip[Parameters]
- **anyanyDict dict**
  - Specifies any dictionary.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary of dictionaries.
- **sameAsKey key**
  - Specifies the key name. The key type must match the key type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the check result. Returns `non-zero` if the key exists, otherwise returns `0`.
:::

----
#### DICTREMOVE

**`int DICTREMOVE anyanyDict dict, sameAsKey key`**

**`int DICTREMOVE anyDict_anyanyDict dictDict, sameAsKey key`**

Removes the specified key-value pair from the given dictionary.

:::tip[Parameters]
- **anyanyDict dict**
  - Specifies any dictionary.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary of dictionaries.
- **sameAsKey key**
  - Specifies the key name. The key type must match the key type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the removal result. Returns `non-zero` if the key was found and removed, otherwise returns `0`.
:::

----
#### DICTTRYGET

**`int DICTTRYGET anyanyDict dict, same outValue`**

**`int DICTTRYGET anyDict_anyanyDict dictDict, same outValue`**

Attempts to find and retrieve the value associated with the specified key in the given dictionary. This command will not raise an error if the key is not found.

:::tip[Parameters]
- **anyanyDict dict**
  - Specifies any dictionary.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary of dictionaries.
- **same outValue**
  - Specifies the variable to receive the value. The value type must match the value type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the search result. Returns `non-zero` if the key was found and the value was output to **outValue**, otherwise returns `0`.
:::

----
#### DICTGETKEYS

**`int DICTGETKEYS anyanyDict srcDict, sameAsKeyArray destArray`**

**`int DICTGETKEYS anyanyDict srcDict, sameAsKeyList destList`**

**`int DICTGETKEYS anyanyDict srcDict, sameAsKeyHashList destHashList`**

**`int DICTGETKEYS anyanyDict srcDict, anyDict_sameAsKeyList destDictList`**

**`int DICTGETKEYS anyanyDict srcDict, anyDict_sameAsKeyHashList destDictHashList`**

**`int DICTGETKEYS anyDict_anyanyDict srcDictDict, sameAsKeyArray destArray`**

**`int DICTGETKEYS anyDict_anyanyDict srcDictDict, sameAsKeyList destList`**

**`int DICTGETKEYS anyDict_anyanyDict srcDictDict, sameAsKeyHashList destHashList`**

**`int DICTGETKEYS anyDict_anyanyDict srcDictDict, anyDict_sameAsKeyList destDictList`**

**`int DICTGETKEYS anyDict_anyanyDict srcDictDict, anyDict_sameAsKeyHashList destDictHashList`**

Copies all keys from the specified source dictionary to the target array or list.

:::tip[Parameters]
- **anyanyDict srcDict**
  - Specifies any source dictionary.
- **anyDict_anyanyDict srcDictDict**
  - Specifies any source dictionary of dictionaries.
- **sameAsKeyArray destArray**
  - Specifies the target array. The value type must match the key type of the first parameter.
- **sameAsKeyList destList**
  - Specifies the target list. The value type must match the key type of the first parameter.
- **sameAsKeyHashList destHashList**
  - Specifies the target hash list. The value type must match the key type of the first parameter.
- **anyDict_sameAsKeyList destDictList**
  - Specifies the target dictionary of lists. The value type must match the key type of the first parameter.
- **anyDict_sameAsKeyHashList destDictHashList**
  - Specifies the target dictionary of hash lists. The value type must match the key type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - For target arrays, returns the number of successfully copied elements. For target lists and dictionaries of lists, returns the total number of elements after copying.
:::

----
#### DICTGETVALUES

**`int DICTGETVALUES anyanyDict srcDict, sameArray destArray`**

**`int DICTGETVALUES anyanyDict srcDict, sameList destList`**

**`int DICTGETVALUES anyanyDict srcDict, sameHashList destHashList`**

**`int DICTGETVALUES anyanyDict srcDict, anyDict_sameList destDictList`**

**`int DICTGETVALUES anyanyDict srcDict, anyDict_sameHashList destDictHashList`**

**`int DICTGETVALUES anyDict_anyanyDict srcDictDict, sameArray destArray`**

**`int DICTGETVALUES anyDict_anyanyDict srcDictDict, sameList destList`**

**`int DICTGETVALUES anyDict_anyanyDict srcDictDict, sameHashList destHashList`**

**`int DICTGETVALUES anyDict_anyanyDict srcDictDict, anyDict_sameList destDictList`**

**`int DICTGETVALUES anyDict_anyanyDict srcDictDict, anyDict_sameHashList destDictHashList`**

Copies all values from the specified source dictionary to the target array or list.

:::tip[Parameters]
- **anyanyDict srcDict**
  - Specifies any source dictionary.
- **anyDict_anyanyDict srcDictDict**
  - Specifies any source dictionary of dictionaries.
- **sameAsKeyArray destArray**
  - Specifies the target array. The value type must match the value type of the first parameter.
- **sameAsKeyList destList**
  - Specifies the target list. The value type must match the value type of the first parameter.
- **sameAsKeyHashList destHashList**
  - Specifies the target hash list. The value type must match the value type of the first parameter.
- **anyDict_sameAsKeyList destDictList**
  - Specifies the target dictionary of lists. The value type must match the value type of the first parameter.
- **anyDict_sameAsKeyHashList destDictHashList**
  - Specifies the target dictionary of hash lists. The value type must match the value type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - For target arrays, returns the number of successfully copied elements. For target lists and dictionaries of lists, returns the total number of elements after copying.
:::

----
#### DICTCOPY

**`int DICTCOPY anyanyDict srcDict, sameAsKeysameAsKeyDict destDict`**

**`int DICTCOPY anyanyDict srcDict, anyDict_sameAsKeysameDict destDictDict`**

**`int DICTCOPY anyDict_anyanyDict srcDictDict, sameAsKeysameAsKeyDict destDict`**

**`int DICTCOPY anyDict_anyanyDict srcDictDict, anyDict_sameAsKeysameDict destDictDict`**

Copies all elements from the specified source dictionary to the target dictionary.

:::tip[Parameters]
- **anyanyDict srcDict**
  - Specifies any source dictionary.
- **anyDict_anyanyDict srcDictDict**
  - Specifies any source dictionary of dictionaries.
- **sameAsKeysameAsKeyDict destDict**
  - Specifies the target dictionary. The key and value types must match those of the first parameter.
- **anyDict_sameAsKeysameDict destDictDict**
  - Specifies the target dictionary of dictionaries. The secondary key and value types must match those of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - For target arrays, returns the number of successfully copied elements. For target lists and dictionaries of lists, returns the total number of elements after copying.
:::

----
### Dictionary Collection Related {#DictItemRelated}

----
#### DICTITEMCREATE

**`int DICTITEMCREATE anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMCREATE anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMCREATE anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

Creates a new collection in the specified dictionary collection variable.

:::tip[Parameters]
- **anyDict_anyList dictList**
  - Specifies any dictionary of lists.
- **anyDict_anyHashList dictHashList**
  - Specifies any dictionary of hash lists.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary of dictionaries.
- **sameAsDictKey dictKey**
  - Specifies the key name to create. The key type must match the key type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the key was successfully created, or `0` if a collection with the same key already exists.
:::

----
#### DICTITEMEXIST

**`int DICTITEMEXIST anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMEXIST anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMEXIST anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

Checks if the specified key exists in the given dictionary collection variable.

:::tip[Parameters]
- **anyDict_anyList dictList**
  - Specifies any dictionary of lists.
- **anyDict_anyHashList dictHashList**
  - Specifies any dictionary of hash lists.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary of dictionaries.
- **sameAsDictKey dictKey**
  - Specifies the key name to check. The key type must match the key type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the key exists, otherwise returns `0`.
:::

----
#### DICTITEMRELEASE

**`int DICTITEMRELEASE anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMRELEASE anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMRELEASE anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

Removes the specified key and its collection from the given dictionary collection variable.

:::tip[Parameters]
- **anyDict_anyList dictList**
  - Specifies any dictionary of lists.
- **anyDict_anyHashList dictHashList**
  - Specifies any dictionary of hash lists.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary of dictionaries.
- **sameAsDictKey dictKey**
  - Specifies the key name to remove. The key type must match the key type of the first parameter.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the key was found and removed, otherwise returns `0`.
:::

----
#### DICTITEMRELEASEALL

**`int DICTITEMRELEASEALL anyDict_anyList dictList`**

**`int DICTITEMRELEASEALL anyDict_anyHashList dictHashList`**

**`int DICTITEMRELEASEALL anyDict_anyanyDict dictDict`**

Removes all keys and their collections from the specified dictionary collection variable.

:::tip[Parameters]
- **anyDict_anyList dictList**
  - Specifies any dictionary of lists.
- **anyDict_anyHashList dictHashList**
  - Specifies any dictionary of hash lists.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary of dictionaries.
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

Gets the number of collections in the specified dictionary collection variable.

:::tip[Parameters]
- **anyDict_anyList dictList**
  - Specifies any dictionary of lists.
- **anyDict_anyHashList dictHashList**
  - Specifies any dictionary of hash lists.
- **anyDict_anyanyDict dictDict**
  - Specifies any dictionary of dictionaries.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of collections in the dictionary collection variable.
:::

----
### Input Related {#InputRelated}

----
#### CHKKEYDATA

**`int CHKKEYDATA int keyData(, str keyName, int modifier)`**

Checks if the user-input `keyData` key code matches the specified `keyName` key name and `modifier` modifier key. The `keyData` key code can be obtained via the [**`INPUTMOUSEKEY`**](modify_com#inputmousekey) command.

For a list of specific `keyName` key names, refer to the [**`Keys Enumeration`**](https://learn.microsoft.com/dotnet/api/system.windows.forms.keys?view=netframework-4.8) documentation.

:::tip[Parameters]
- **int keyData**
  - Specifies the user-input key code data.
- **str keyName**
  - Specifies the key name to match. The key name is case-insensitive and can be omitted.
- **int modifier**
  - Specifies the modifier key to match. Can be omitted.
    - `1P0` = Shift
    - `1P1` = Ctrl
    - `1P2` = Alt
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the key name and modifier key match successfully.
:::

:::note[Example]
```
INPUTMOUSEKEY 0
IF RESULT:0 == 3
  PRINTVL CHKKEYDATA(RESULT:2, "A")         ; Checks if the user pressed "A"
  PRINTVL CHKKEYDATA(RESULT:2, , 1P0 | 1P1) ; Checks if the user pressed "Ctrl + Shift"
  PRINTVL CHKKEYDATA(RESULT:2, "/", 1P1 | 1P2) ; Checks if the user pressed "Ctrl + Alt + /"
ENDIF
```
:::

----
### Image Related {#ImageRelated}

----
#### ASYNCGDRAWG

This command is called in the same way as the [**`GDRAWG`**](modify_com#gdrawg) command and is used for asynchronous drawing operations to avoid prolonged program stagnation.

After sending an asynchronous task, you can call the [**`ASYNCWAITALL`**](#asyncwaitall) command to force the program to wait for all asynchronous tasks to complete.

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the asynchronous task was successfully sent, or `0` if the specified image was not created.
:::

----
#### ASYNCGDRAWSPRITE

This command is called in the same way as the [**`GDRAWSPRITE`**](modify_com#gdrawsprite) command and is used for asynchronous drawing operations to avoid prolonged program stagnation.

After sending an asynchronous task, you can call the [**`ASYNCWAITALL`**](#asyncwaitall) command to force the program to wait for all asynchronous tasks to complete.

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the asynchronous task was successfully sent, or `0` if the specified image or sprite was not created.
:::

----
#### ASYNCGCREATEFROMFILE

**`int ASYNCGCREATEFROMFILE int GID, str filepath`**

This command is called in the same way as the [**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) command and is used to asynchronously load the specified image file to avoid prolonged program stagnation.

After sending an asynchronous task, you can call the [**`ASYNCWAITALL`**](#asyncwaitall) command to force the program to wait for all asynchronous tasks to complete.

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### ASYNCGDISPOSE

**`int ASYNCGDISPOSE int GID`**

This command is called in the same way as the [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) command and is used in conjunction with other asynchronous commands to release images.

After sending an asynchronous task, you can call the [**`ASYNCWAITALL`**](#asyncwaitall) command to force the program to wait for all asynchronous tasks to complete.

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the asynchronous task was successfully sent, or `0` if the specified image was not created.
:::

----
#### ASYNCSPRITELOAD

**`int ASYNCSPRITELOAD str sprite`**

This command is used to asynchronously load the image referenced by the specified sprite to avoid prolonged program stagnation.

After sending an asynchronous task, you can call the [**`ASYNCWAITALL`**](#asyncwaitall) command to force the program to wait for all asynchronous tasks to complete.

:::tip[Parameters]
- **str sprite**
  - Specifies the name of the sprite to load asynchronously.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the asynchronous task was successfully sent or if the sprite's image is already loaded, or `0` if the sprite was not found.
:::

----
#### ASYNCWAITALL

**`void ASYNCWAITALL`**

This command forces the program to wait for all asynchronous tasks to complete.

----
#### GETBEZIERPATH

**`int GETBEZIERPATH intArray2|3D pointArray, int pointCount, intArray2D outputArray, int outputCount`**

Generates a Bézier curve and stores all coordinate points on the curve into the `outputArray` array.

:::tip[Parameters]
- **intArray2|3D pointArray**
  - Specifies the coordinates of the starting point, multiple control points, and ending point of the curve. The length of the last dimension of the array must be `greater than or equal to 2`.
- **int pointCount**
  - Specifies the number of coordinate points in `pointArray`.
- **intArray2D outputArray**
  - The generated curve coordinates will be stored in this array. The length of the last dimension of the array must be `greater than or equal to 2`.
- **int outputCount**
  - Specifies the number of coordinate points to generate.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the command was successfully executed.
:::

----
#### GETBEZIERPOINT

**`int GETBEZIERPOINT intArray2|3D pointArray, int pointCount, int t, int tMax`**

Retrieves the coordinate point on the Bézier curve based on the specified control points and path.

:::tip[Parameters]
- **intArray2|3D pointArray**
  - Specifies the coordinates of the starting point, multiple control points, and ending point of the curve. The length of the last dimension of the array must be `greater than or equal to 2`.
- **int pointCount**
  - Specifies the number of coordinate points in `pointArray`.
- **int t**
  - Specifies the path position of the desired coordinate point.
- **int tMax**
  - Specifies the maximum path length.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the command was successfully executed.
- **RESULT:1**
  - The X-coordinate of the point.
- **RESULT:2**
  - The Y-coordinate of the point.
:::

----
#### GDISPOSEALL

**`void GDISPOSEALL`**

Releases and clears all Graphics images.

----
#### GENABLED

**`int GENABLED int GID`**

Gets the `ENABLED` value of the specified image, which controls whether the image can ultimately be drawn on the screen.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the `ENABLED` value of the specified image. Returns `0` if the image was not created.
:::

----
#### GSETENABLED

**`int GSETENABLED int GID, int enabled`**

This command controls whether the image can ultimately be drawn on the screen while maintaining its positional information.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int enabled**
  - Specifies whether the image should be drawn.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the setting was successful, or `0` if the image was not created.
:::

----
#### GFILLELLIPSE

**`int GFILLELLIPSE int GID, int x, int y, int width, int height`**

Used to draw an ellipse, similar in usage to the [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) command. The color is specified using the [**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) command.

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
  - Indicates whether the drawing was successful. Returns `non-zero` on success, `0` if the specified image does not exist.
:::

----
#### GFILLROUNDRECT

**`int GFILLROUNDRECT int GID, int x, int y, int width, int height, int radiusX(, int radiusY)`**

Used to draw a rounded rectangle, similar in usage to the [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) command. The color is specified using the [**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) command.

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
  - Indicates whether the drawing was successful. Returns `non-zero` on success, `0` if the specified image does not exist.
:::

----
#### GRESAMPLESAVE

**`int GRESAMPLESAVE int GID, any fileName, int width, int height`**

Similar in usage to the [**`GSAVE`**](modify_com#gsave-gload) command, this command generates a higher-quality resampled image for clearer scaling and saves it to a file, at the cost of longer processing time.

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
  - Indicates whether the file was saved successfully. Returns `non-zero` on success, `0` if the specified image does not exist, the file path is invalid, or an error occurs during saving.
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
  - Indicates whether the transformation matrix was successfully reset. Returns `non-zero` on success, `0` if the image does not exist.
:::

----
#### GRESETSTATE

**`int GRESETSTATE int GID`**

Resets all additional states of the specified image. The following states are reset:

- `BRUSH` color is reset to the default text color.
- `PEN` color is reset to the default text color, thickness is reset to `1`, and all line effects are reset.
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
  - Indicates whether the image states were successfully reset. Returns `non-zero` on success, `0` if the image does not exist.
:::

----
#### GSETANTIALIAS

**`int GSETANTIALIAS int GID(, int mode = 0)`**

Sets whether anti-aliasing is enabled for image drawing.

All newly created images have anti-aliasing enabled by default.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int mode = 0**
  - Specifies whether to enable anti-aliasing. Input `non-zero` to enable, `0` to disable. Can be omitted `(0)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether anti-aliasing was successfully set. Returns `non-zero` on success, `0` if the image does not exist.
:::

----
#### GSETBLUR

**`int GSETBLUR int GID(, int blur = 0)`**

Sets whether blur effects are enabled for image drawing.

All newly created images have no blur effects by default.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int blur = 0**
  - Specifies the blur intensity, ranging from `0-100`. Omit or input `0` to clear blur effects.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the blur effect was successfully set. Returns `non-zero` on success, `0` if the image does not exist.
:::

----
#### GSETCOLORMATRIX

**`int GSETCOLORMATRIX int GID(, intArray colorMatrix)`**

Sets whether a color matrix is enabled for image drawing.

The color matrix array must be at least `4 rows x 5 columns`. The first 4 columns accept values from `0-510` (supporting 2x oversaturation), and the 5th column accepts values from `0-255`.

To disable the color matrix, call this command again and omit the `colorMatrix` parameter.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **intArray colorMatrix**
  - Specifies any integer array as the color matrix. Omitting this parameter clears any existing color matrix.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the color matrix was successfully set. Returns `non-zero` on success, `0` if the image does not exist.
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

Sets the filter quality level for image drawing, which affects the clarity of scaled images.

All newly created images default to `3 (high quality)`.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int quality = 3**
  - Specifies the quality level, ranging from `0-3`:
    - `0` = No filtering
    - `1` = Low quality
    - `2` = Medium quality
    - `3` = High quality
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the filter quality was successfully set. Returns `non-zero` on success, `0` if the image does not exist.
:::

----
#### GSETSCALE

**`int GSETSCALE int GID, int scaleX, int scaleY(, int posX = 0, int posY = 0)`**

Adds a `scaling` effect to the image's transformation matrix.

Once applied, the effect cannot be undone unless the entire matrix is reset using the [**`GRESETMATRIX`**](#gresetmatrix) command.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int scaleX**
  - Specifies the X scaling factor. Input `100` for `100%`.
- **int scaleY**
  - Specifies the Y scaling factor. Input `100` for `100%`.
- **int posX = 0**
  - Specifies the X position of the scaling center point. Can be omitted `(0)`.
- **int posY = 0**
  - Specifies the Y position of the scaling center point. Can be omitted `(0)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the transformation matrix was successfully set. Returns `non-zero` on success, `0` if the image does not exist.
:::

----
#### GSETSKEW

**`int GSETSKEW int GID, int skewX, int skewY`**

Adds a `skew` effect to the image's transformation matrix.

Once applied, the effect cannot be undone unless the entire matrix is reset using the [**`GRESETMATRIX`**](#gresetmatrix) command.

:::tip[Parameters]
- **int GID**
  - Specifies the image ID.
- **int skewX**
  - Specifies the X skew factor. Input `100` for `100%`.
- **int skewY**
  - Specifies the Y skew factor. Input `100` for `100%`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the transformation matrix was successfully set. Returns `non-zero` on success, `0` if the image does not exist.
:::

----
#### GSETROTATE

**`int GSETROTATE int GID, int angle`**

**`int GSETROTATE int GID, int angle, int posX = 0, int posY = 0`**

Adds a `rotation` effect to the image's transformation matrix.

Once applied, the effect cannot be undone unless the entire matrix is reset using the [**`GRESETMATRIX`**](#gresetmatrix) command.

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
  - Indicates whether the transformation matrix was successfully set. Returns `non-zero` on success, `0` if the image does not exist.
:::

----
#### GSETTRANSLATE

**`int GSETTRANSLATE int GID, int translateX, int translateY`**

Adds a `translation` effect to the image's transformation matrix.

Once applied, the effect cannot be undone unless the entire matrix is reset using the [**`GRESETMATRIX`**](#gresetmatrix) command.

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
  - Indicates whether the transformation matrix was successfully set. Returns `non-zero` on success, `0` if the image does not exist.
:::

----
#### SPRITEANIMECLEARFRAME

**`int SPRITEANIMECLEARFRAME str spriteAnime(, int removeStart = 0, int removeCount = frameCount)`**

Clears frames from the specified SpriteAnime.

This command only works for non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int removeStart = 0**
  - Specifies the starting position for clearing.
- **int removeCount = frameCount**
  - Specifies the number of frames to clear. If omitted, clears all frames from `removeStart` onward.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the frames were successfully cleared. Returns `non-zero` on success, `0` if the SpriteAnime does not exist or is built-in.
:::

----
#### SPRITEANIMEFRAMECOUNT

**`int SPRITEANIMEFRAMECOUNT str spriteAnime`**

Gets the number of frames added to the specified SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of frames in the SpriteAnime. Returns `0` if the SpriteAnime does not exist.
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
  - Indicates whether the playback time was successfully reset. Returns `non-zero` on success, `0` if the SpriteAnime does not exist.
:::

----
#### SPRITEANIMEOFFSETTIME

**`int SPRITEANIMEOFFSETTIME str spriteAnime, int offsetTime`**

Adds an offset to the playback time of the specified SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int offsetTime**
  - Specifies the time offset.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the offset was successfully applied. Returns `non-zero` on success, `0` if the SpriteAnime does not exist.
:::

----
#### SPRITEFRAME_SETG

**`int SPRITEFRAME_SETG str spriteAnime, int GID`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height, int posX, int posY`**

Sets the image for the current frame of the specified SpriteAnime. Only the last set image type for each frame takes effect.

This command only works for non-built-in SpriteAnime.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int GID**
  - Specifies the image ID.
- **int x**
  - Specifies the X position of the selection box.
- **int y**
  - Specifies the Y position of the selection box.
- **int width**
  - Specifies the width of the selection box.
- **int height**
  - Specifies the height of the selection box.
- **int posX**
  - Specifies the X drawing position of the selection box.
- **int posY**
  - Specifies the Y drawing position of the selection box.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the image was successfully set. Returns `non-zero` on success, `0` if the SpriteAnime does not exist or is built-in.
:::

----
#### SPRITEFRAME_SETSPRITE

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height, int posX, int posY`**

Sets a Sprite image for the current frame of the specified SpriteAnime. Only the last set image type will take effect for each frame.

This instruction only works for non-built-in SpriteAnimes.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **str sprite**
  - Specifies the Sprite.
- **int x**
  - Specifies the X position of the selection area.
- **int y**
  - Specifies the Y position of the selection area.
- **int width**
  - Specifies the width of the selection area.
- **int height**
  - Specifies the height of the selection area.
- **int posX**
  - Specifies the X drawing position of the selection area.
- **int posY**
  - Specifies the Y drawing position of the selection area.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_SETSPINE

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height, int posX, int posY`**

Sets a Spine animation for the current frame of the specified SpriteAnime. Only the last set image type will take effect for each frame.

This instruction only works for non-built-in SpriteAnimes.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int spineID**
  - Specifies the SpineID.
- **int x**
  - Specifies the X position of the selection area.
- **int y**
  - Specifies the Y position of the selection area.
- **int width**
  - Specifies the width of the selection area.
- **int height**
  - Specifies the height of the selection area.
- **int posX**
  - Specifies the X drawing position of the selection area.
- **int posY**
  - Specifies the Y drawing position of the selection area.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_TRANSITION

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton`**

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton, intArray2D bezierPointArray, int bezierPointCount`**

Enables or disables transition effects for the current frame of the specified SpriteAnime. The transition effect will use the previous frame as the starting point and the current frame as the endpoint.  
A Bezier curve array can be provided to achieve non-linear transition effects.

- Only the following properties are affected by the transition effect:
  - Transformation matrix
  - Color matrix
  - Blur effect

This instruction only works for non-built-in SpriteAnimes.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int useTransisiton**
  - Specifies whether to enable or disable the transition effect.
- **intArray2D bezierPointArray**
  - Specifies the array describing the Bezier curve.
- **int bezierPointCount**
  - Specifies the number of coordinate points in the array.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_TRANSLATE

**`int SPRITEFRAME_TRANSLATE str spriteAnime, int translateX, int translateY`**

Applies a `translation` effect to the transformation matrix of the current frame of the specified SpriteAnime.

Once applied, the effect cannot be undone unless the transformation matrix is reset using the [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) instruction.

This instruction only works for non-built-in SpriteAnimes.

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
  - Returns `non-zero` if successful. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_SCALE

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY`**

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY, int posX, int posY`**

Applies a `scaling` effect to the transformation matrix of the current frame of the specified SpriteAnime.

Once applied, the effect cannot be undone unless the transformation matrix is reset using the [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) instruction.

This instruction only works for non-built-in SpriteAnimes.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int scaleX**
  - Specifies the X scaling factor (e.g., `100` = `100%`).
- **int scaleY**
  - Specifies the Y scaling factor (e.g., `100` = `100%`).
- **int posX = 0**
  - Specifies the X position of the scaling center (optional, default `0`).
- **int posY = 0**
  - Specifies the Y position of the scaling center (optional, default `0`).
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_ROTATE

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle`**

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle, int posX, int posY`**

Applies a `rotation` effect to the transformation matrix of the current frame of the specified SpriteAnime.

Once applied, the effect cannot be undone unless the transformation matrix is reset using the [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) instruction.

This instruction only works for non-built-in SpriteAnimes.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int angle**
  - Specifies the rotation angle.
- **int posX**
  - Specifies the X position of the rotation center (optional, default `0`).
- **int posY**
  - Specifies the Y position of the rotation center (optional, default `0`).
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_SKEW

**`int SPRITEFRAME_SKEW str spriteAnime, int skewX, int skewY`**

Applies a `skew` effect to the transformation matrix of the current frame of the specified SpriteAnime.

Once applied, the effect cannot be undone unless the transformation matrix is reset using the [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) instruction.

This instruction only works for non-built-in SpriteAnimes.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int skewX**
  - Specifies the X skew factor (e.g., `100` = `100%`).
- **int skewY**
  - Specifies the Y skew factor (e.g., `100` = `100%`).
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_RESETMATRIX

**`int SPRITEFRAME_RESETMATRIX str spriteAnime`**

Resets the transformation matrix of the current frame of the specified SpriteAnime.

This instruction only works for non-built-in SpriteAnimes.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_COLORMATRIX

**`int SPRITEFRAME_COLORMATRIX str spriteAnime(, intArray colorMatrix)`**

Sets a color matrix for the current frame of the specified SpriteAnime.

The color matrix array must be at least `4 rows x 5 columns`. The first 4 columns accept values in the range `0-510` (supporting 2x oversaturation), and the 5th column accepts values in the range `0-255`.

To remove the color matrix, call this instruction again and omit the `colorMatrix` parameter.

This instruction only works for non-built-in SpriteAnimes.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **intArray colorMatrix**
  - Specifies an integer array as the color matrix. Omitting this parameter will clear any existing color matrix.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEFRAME_BLUR

**`int SPRITEFRAME_BLUR str spriteAnime(, int blur = 0)`**

Sets a blur effect for the current frame of the specified SpriteAnime.

This instruction only works for non-built-in SpriteAnimes.

:::tip[Parameters]
- **str spriteAnime**
  - Specifies the SpriteAnime name.
- **int blur = 0**
  - Specifies the blur intensity (range `0-100`). Omitting or setting to `0` will clear the blur effect.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the SpriteAnime is not created or is built-in.
:::

----
#### SPRITEENABLED

**`int SPRITEENABLED str sprite`**

Gets the `ENABLED` value of the specified Sprite image, which determines whether the image is drawn on the screen.

:::tip[Parameters]
- **str sprite**
  - Specifies the Sprite image.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the `ENABLED` value of the Sprite. Returns `0` if the Sprite is not created.
:::

----
#### SPRITESETENABLED

**`int SPRITESETENABLED str sprite, int enabled`**

Controls whether the specified Sprite image is drawn on the screen while preserving its positional information.

:::tip[Parameters]
- **str sprite**
  - Specifies the Sprite image.
- **int enabled**
  - Specifies whether the Sprite should be drawn.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the Sprite is not created.
:::

----
#### SPRITEEXIST

**`int SPRITEEXIST str sprite`**

Similar to the [**`SPRITECREATED`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITECREATED.20str.20spriteName) instruction, this checks for the existence of a specified Sprite without triggering its auto-loading mechanism for referenced images.

:::tip[Parameters]
- **str sprite**
  - Specifies the Sprite name to check.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the Sprite exists.
:::

----
#### SPRITEEXTEND

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height`**

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height, int posX, int posY`**

Creates a new non-built-in Sprite based on an existing Sprite. The selection area of the new Sprite is constrained by the size of the original Sprite.

:::tip[Parameters]
- **str newSprite**
  - Specifies the name of the new Sprite.
- **str srcSprite**
  - Specifies the name of the source Sprite.
- **int x**
  - Specifies the X position of the selection area.
- **int y**
  - Specifies the Y position of the selection area.
- **int width**
  - Specifies the width of the selection area.
- **int height**
  - Specifies the height of the selection area.
- **int posX**
  - Specifies the X drawing position of the new Sprite.
- **int posY**
  - Specifies the Y drawing position of the new Sprite.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the new Sprite has the same name as the source Sprite, a built-in Sprite with the same name already exists, the source Sprite does not exist, or the source Sprite is not a single-image type Sprite.
:::

----
#### CONSTSPRITECREATE

**`int CONSTSPRITECREATE str sprite, str imgPath`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height, int posX, int posY`**

Creates a new built-in Sprite based on the specified `imgPath` image file path.

This operation will replace any existing non-built-in Sprite with the same name.

:::tip[Parameters]
- **str sprite**
  - Specifies the name of the new Sprite.
- **str imgPath**
  - Specifies the image file path.
- **int x**
  - Specifies the X position of the selection area.
- **int y**
  - Specifies the Y position of the selection area.
- **int width**
  - Specifies the width of the selection area.
- **int height**
  - Specifies the height of the selection area.
- **int posX**
  - Specifies the X drawing position of the new Sprite.
- **int posY**
  - Specifies the Y drawing position of the new Sprite.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if a built-in Sprite with the same name already exists or the specified selection area does not intersect with the image.
:::

----
### SPINE-Related {#SpineRelated}

----
#### SPINECREATE

**`int SPINECREATE int spineID, str spineResource`**

Creates a Spine animation at the specified `spineID` based on the Spine resource defined in the CSV resource file.

This instruction will release any previously created Spine animation before creating a new one, so there is no need to call [**`SPINEDISPOSE`**](#spinedispose) beforehand.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **str spineResource**
  - Specifies the Spine resource name (case-insensitive).
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the Spine resource does not exist.
:::

----
#### SPINECREATEFROMFILE

**`int SPINECREATEFROMFILE int spineID, str atlasFile, str dataFile`**

Creates a Spine animation at the specified `spineID` based on the given `atlas file` and `data file (.skel or .json)`.

This instruction will release any previously created Spine animation before creating a new one, so there is no need to call [**`SPINEDISPOSE`**](#spinedispose) beforehand.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **str atlasFile**
  - Specifies the atlas file for the Spine animation.
- **str dataFile**
  - Specifies the .skel or .json file for the Spine animation.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the files do not exist or are in an invalid format.
:::

----
#### SPINECREATED

**`int SPINECREATED int spineID`**

Checks whether the specified Spine animation has been created.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the Spine animation exists.
:::

----
#### SPINEDISPOSE

**`int SPINEDISPOSE int spineID(, int disposeImg = 0)`**

Removes the specified Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int disposeImg = 0**
  - Specifies whether to release the images referenced by this Spine animation. Input `non-zero` to release images.
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
  - Specifies whether to release all images referenced by Spine animations. Input `non-zero` to release images.
:::

:::tip[Return Value]
- **RESULT:0**
  - Always returns `non-zero`.
:::

----
#### SPINEENABLED

**`int SPINEENABLED int spineID`**

Gets the `ENABLED` value of the specified Spine animation, which determines whether the animation will be rendered on screen.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the `ENABLED` value of the Spine animation. Returns `0` if the Spine animation doesn't exist.
:::

----
#### SPINESETENABLED

**`int SPINESETENABLED int spineID, int enabled`**

Controls whether the specified Spine animation will be rendered on screen while preserving its positional information.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int enabled**
  - Specifies whether the Spine animation should be rendered.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the Spine animation doesn't exist.
:::

----
#### GDRAWSPINE

**`int GDRAWSPINE int GID, int spineID`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

Similar to the [**`GDRAWG`**](modify_com#gdrawg) instruction, this draws the specified `spineID` Spine animation on the target image `GID`.

For `colorMatrix` usage, refer to the [**`GSETCOLORMATRIX`**](#gsetcolormatrix) instruction.

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
  - Specifies the target width. Negative values will flip the image.
- **int destHeight**
  - Specifies the target height. Negative values will flip the image.
- **int srcX**
  - Specifies the source X position.
- **int srcY**
  - Specifies the source Y position.
- **int srcWidth**
  - Specifies the source width.
- **int srcHeight**
  - Specifies the source height.
- **intArray colorMatrix**
  - Specifies an integer array as the color matrix (optional). The matrix only applies to this draw operation and will be cleared afterward.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the specified image or Spine animation doesn't exist.
:::

----
#### ASYNCGDRAWSPINE

This instruction has the same usage as [**`GDRAWSPINE`**](#gdrawspine), performing drawing operations asynchronously to avoid prolonged program stalls.

After sending an asynchronous task, you can call [**`ASYNCWAITALL`**](#asyncwaitall) to force the program to wait for all asynchronous tasks to complete.

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the asynchronous task was successfully sent. Returns `0` if the specified image or Spine animation doesn't exist.
:::

----
#### ASYNCSPINELOAD

**`int ASYNCSPINELOAD int spineID`**

Asynchronously loads the images referenced by the specified Spine animation to avoid prolonged program stalls.

After sending an asynchronous task, you can call [**`ASYNCWAITALL`**](#asyncwaitall) to force the program to wait for all asynchronous tasks to complete.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID to load asynchronously.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the asynchronous task was successfully sent. Returns `0` if the Spine animation doesn't exist.
:::

----
#### SPINEPOSX, SPINEPOSY

**`int SPINEPOSX int spineID`**

**`int SPINEPOSY int spineID`**

Gets the rendering position of the specified Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the rendering position of the Spine animation.
:::

----
#### SPINESRCX, SPINESRCY

**`int SPINESRCX int spineID`**

**`int SPINESRCY int spineID`**

Gets the original axis position of the specified Spine animation. The returned values are affected by the [**`SPINESETSCALE`**](#spinesetscale) instruction.

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

Gets the width or height of the specified Spine animation. The returned values are affected by the [**`SPINESETSCALE`**](#spinesetscale) instruction.

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

Similar to [**`SPRITESETPOS`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITESETPOS.20str.20spriteName.2C.20int.20posx.2C.20int.20posy) and [**`SPRITEMOVE`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITEMOVE.20str.20spriteName.2C.20int.20movex.2C.20int.20movey), this sets or offsets the rendering position of the specified Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int posX**
  - Specifies the X rendering position.
- **int posY**
  - Specifies the Y rendering position.
- **int offsetX**
  - Specifies the X position offset.
- **int offsetY**
  - Specifies the Y position offset.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the Spine animation doesn't exist.
:::

----
#### SPINESETSCALE

**`int SPINESETSCALE int spineID, int scale`**

**`int SPINESETSCALE int spineID, int scaleX, int scaleY`**

Sets the scaling factor for the specified Spine animation.

- This instruction affects the output of:
  - [**`SPINESRCX, SPINESRCY`**](#spinesrcx-spinesrcy)
  - [**`SPINEWIDTH, SPINEHEIGHT`**](#spinewidth-spineheight)

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int scale**
  - Specifies the overall scaling factor (e.g., `100` = `100%`).
- **int scaleX**
  - Specifies the X-axis scaling factor (e.g., `100` = `100%`).
- **int scaleY**
  - Specifies the Y-axis scaling factor (e.g., `100` = `100%`).
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the Spine animation doesn't exist.
:::

----
#### SPINEHASANIM, SPINEHASSKIN

**`int SPINEHASANIM int spineID, str animName`**

**`int SPINEHASSKIN int spineID, str skinName`**

Checks whether the specified Spine animation contains the specified animation or skin.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **str animName**
  - Specifies the animation name (case-insensitive).
- **str skinName**
  - Specifies the skin name (case-insensitive).
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if the specified animation or skin exists.
:::

----
#### SPINESETANIM

**`int SPINESETANIM int spineID, int trackIndex, str animName(, int isLoop = 0)`**

Sets the specified animation for the Spine animation. If the animation name is empty, it clears the animation in the specified track.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int trackIndex**
  - Specifies the animation track index.
- **str animName**
  - Specifies the animation name (case-insensitive). If empty, clears the animation in the specified track.
- **int isLoop = 0**
  - Specifies whether the animation should loop.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful (including successful clearing). Returns `0` if the Spine animation doesn't exist or the specified animation doesn't exist.
:::

----
#### SPINEADDANIM

**`int SPINEADDANIM int spineID, int trackIndex, str animName(, int isLoop = 0, int delay = 1000)`**

Adds the specified animation to the Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int trackIndex**
  - Specifies the animation track index.
- **str animName**
  - Specifies the animation name (case-insensitive).
- **int isLoop = 0**
  - Specifies whether the animation should loop.
- **int delay = 1000**
  - Specifies the animation delay in milliseconds.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the Spine animation doesn't exist or the specified animation doesn't exist.
:::

----
#### SPINESETSKIN

**`int SPINESETSKIN int spineID, str skinName`**

Sets the specified skin for the Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **str skinName**
  - Specifies the skin name (case-insensitive).
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the Spine animation doesn't exist or the specified skin doesn't exist.
:::

----
#### SPINESETTIME, SPINEUPDATETIME

**`int SPINESETTIME int spineID, int millsec`**

**`int SPINEUPDATETIME int spineID, int millsec`**

Sets or advances the playback time of the specified Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int millsec**
  - Specifies the playback time in milliseconds.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the Spine animation doesn't exist.
:::

----
#### SPINETIMESCALE

**`int SPINETIMESCALE int spineID, int timeScale`**

Sets the time multiplier for the specified Spine animation, controlling its playback speed.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **int timeScale**
  - Specifies the time multiplier (e.g., `100` = `100%`).
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the Spine animation doesn't exist.
:::

----
#### SPINEANIMLIST, SPINESKINLIST

**`int SPINEANIMLIST int spineID, strArray outputArray`**

**`int SPINESKINLIST int spineID, strArray outputArray`**

Gets the animation or skin list of the specified Spine animation.

:::tip[Parameters]
- **int spineID**
  - Specifies the SpineID.
- **strArray outputArray**
  - Specifies the string array to store the list.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of animations or skins retrieved. Returns `0` if the Spine animation doesn't exist.
:::

----
#### CBGSETSPINE

**`int CBGSETSPINE int spineID, int x, int y, int zdepth`**

Similar to [**`CBGSETG`**](https://osdn.net/projects/emuera/wiki/excom#h5-CBGSETG.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20zdepth), this displays the specified Spine animation on the client background.

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
  - Returns `non-zero` if successful. Returns `0` if the Spine animation doesn't exist.
:::

----
### Audio-Related {#AudioRelated}

----
#### AUDIOCREATE

**`int AUDIOCREATE str audioName, str srcAudio(, int volume, any startTime, any duration)`**

Creates a new Audio based on an existing `srcAudio`.

When specifying `startTime` and `duration`, refer to the total duration of the audio file referenced by the original Audio.

`startTime` and `duration` can be input as `TimeSpan` or `ms (milliseconds)`. For `TimeSpan` format, refer to the examples in the [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) documentation.

:::tip[Parameters]
- **str audioName**
  - Specifies the name of the new Audio.
- **str srcAudio**
  - Specifies the name of the source Audio.
- **int volume**
  - Specifies the playback volume of the new Audio (optional, defaults to the original Audio's volume).
- **any startTime**
  - Specifies the start time of the new Audio (optional, defaults to the original Audio's start time).
- **any duration**
  - Specifies the playback duration of the new Audio (optional, defaults to the original Audio's duration).
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns `non-zero` if successful. Returns `0` if the Audio name already exists or the source Audio doesn't exist.
:::

:::note[Example]
```
AUDIOCREATE "New", "Old", 80            ;Creates new Audio "New" with volume 80
AUDIOCREATE "New", "Old", , "00:01:10", "10000" ;Creates new Audio "New" starting at 1:10 with duration 10000ms
```
:::

----
#### AUDIOCREATEFROMFILE

**`int AUDIOCREATEFROMFILE str audioName, str filePath(, int volume, any startTime, any duration)`**

Creates a new Audio from the specified `filePath` audio file.

When specifying `startTime` and `duration`, refer only to the total duration of the audio file.

The `startTime` and `duration` parameters accept either `TimeSpan` or `ms (milliseconds)` values. For the `TimeSpan` format, refer to the examples in the [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) documentation.

:::tip[Parameters]
- **str audioName**
  - Specifies the name of the new Audio.
- **str filePath**
  - Specifies the relative path of the referenced audio file, which must start from the root directory.
- **int volume**
  - Specifies the playback volume of the new Audio. Optional `(100)`.
- **any startTime**
  - Specifies the start time of the new Audio. Optional `(0)`.
- **any duration**
  - Specifies the playback duration of the new Audio. Optional `(total duration of the audio file)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the Audio was successfully created. Returns `non-zero` on success. Returns `0` if the Audio name already exists or the audio file does not exist.
:::

:::note[Example]
```
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", 80          ; Creates a new Audio "New" with volume 80
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", , "00:01:10" ; Creates a new Audio "New" with a start time of 1 minute and 10 seconds
```
:::

----
#### AUDIOCREATED

**`int AUDIOCREATED str audioName`**

Checks whether the specified Audio has been created.

:::tip[Parameters]
- **str audioName**
  - Specifies the name of the Audio.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the Audio exists. Returns `non-zero` if the Audio exists.
:::

----
#### AUDIOVOLUME

**`int AUDIOVOLUME str audioName`**

Gets the volume of the specified Audio.

:::tip[Parameters]
- **str audioName**
  - Specifies the name of the Audio.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the volume of the Audio. Returns `0` if the Audio does not exist.
:::

----
#### AUDIOSTARTTIME

**`int AUDIOSTARTTIME str audioName`**

Gets the playback start time of the specified Audio in `ms (milliseconds)`.

:::tip[Parameters]
- **str audioName**
  - Specifies the name of the Audio.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the start time of the Audio. Returns `0` if the Audio does not exist.
:::

----
#### AUDIODURATION

**`int AUDIODURATION str audioName`**

Gets the playback duration of the specified Audio in `ms (milliseconds)`.

:::tip[Parameters]
- **str audioName**
  - Specifies the name of the Audio.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the duration of the Audio. Returns `0` if the Audio does not exist.
:::

----
#### AUDIODISPOSE

**`int AUDIODISPOSE str audioName`**

Removes the specified temporary Audio. The memory occupied by the Audio will be released after playback ends. Only temporary Audios created at runtime can be removed.

:::tip[Parameters]
- **str audioName**
  - Specifies the name of the Audio to be removed.
:::

:::tip[Return Value]
- **RESULT:0**
  - Indicates whether the Audio was successfully removed. Returns `non-zero` on success. Returns `0` if the Audio does not exist or the specified Audio is not a temporary Audio.
:::

----
#### AUDIODISPOSEALL

**`void AUDIODISPOSEALL`**

Removes all temporary Audios created at runtime. The memory occupied by the Audios will be released after playback ends. Built-in Audios are unaffected.

----
#### CURRENTBGM

**`str CURRENTBGM`**

Gets the name of the currently playing background music.

:::tip[Parameters]
- None
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the name of the currently playing background music. Returns an `empty string` if no music is playing.
:::

----
#### PAUSEBGM

**`void PAUSEBGM (int fadeOut = 0)`**

Pauses the currently playing background music.

:::tip[Parameters]
- **int fadeOut = 0**
  - Specifies the duration of the fade-out effect in `ms (milliseconds)`. No effect if the value is `omitted` or `less than or equal to 0`. The maximum value is `10000`.
:::

----
### Module Related {#ModuleRelated}

----
#### MODULELIST

**`int MODULELIST strArray array`**

Gets the list of loaded module IDs.

:::tip[Parameters]
- **strArray array**
  - Specifies any string-type array to receive the module ID list.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of module IDs retrieved.  
    The number may be limited by the length of the last dimension of the receiving array.
:::

----
#### MODULEPATH

**`str MODULEPATH str modID`**

Gets the relative folder path of the specified loaded module.

:::tip[Parameters]
- **str modID**
  - Specifies the module ID for which to retrieve the folder path.
:::

:::tip[Return Value]
- **RESULTS:0**
  - Returns the relative folder path. Returns an `empty string` if the module ID does not exist or is not loaded.
:::

:::note[Example]
```
PRINTSL MODULEPATH("MyMod")         ; Prints "mod/MyMod v1.0/"
```
:::

----
#### GETRESOURCEEXT

**`int GETRESOURCEEXT strArray array(, int option = 1P0 | 1P1)`**

Gets all image and audio resource file extensions supported by the launcher. Extensions include the `.` symbol and are all lowercase.

:::tip[Parameters]
- **strArray array**
  - Specifies any string-type array to receive the file extensions.
- **int option = 1P0 | 1P1**
  - Specifies the type of resource needed. `1P0` = image resources, `1P1` = audio resources. Optional `(1P0 | 1P1)`.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of extensions retrieved.  
    The number may be limited by the length of the last dimension of the receiving array.
:::

:::note[Example]
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

; Output:
; Image Ext: .bmp .jpg .jpeg .png .webp .tiff .exif .gif
; Audio Ext: .mp3 .mpeg3 .wav .wave .flac .fla .aiff .aif .aifc .aac .adt .adts .m2ts .mp2 .3g2 .3gp2 .3gp .3gpp .m4a .m4v .mp4v .mp4 .mov .asf .wm .wmv .wma .mp1 .avi .ac3 .ec3
```
:::

----
#### TEXT

**`str TEXT anyParams keyName`**

Gets multilingual text based on the specified key name. For detailed usage, refer to the [**`Multilingual Functionality`**](/#Multilingual) section.

:::tip[Parameters]
- **anyParams keyName**
  - Specifies the key name of the multilingual text. The key name is case-insensitive.
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

**`int TEXTLIST strArray array, anyParams keyName`**

Gets a list of multilingual texts based on the specified key name. For detailed usage, refer to the [**`Multilingual Functionality`**](/#Multilingual) section.

:::tip[Parameters]
- **strArray array**
  - Specifies any string-type array to receive the text list.
- **anyParams keyName**
  - Specifies the key name of the multilingual text. The key name is case-insensitive.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of text list elements successfully retrieved. Returns `0` if the key name does not exist or the path is incorrect.  
    The number may be limited by the length of the last dimension of the receiving array.
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

**`int LANGUAGELIST strArray array`**

Gets the list of loaded multilingual IDs. The retrieved IDs automatically replace `hyphens (-)` with `underscores (_)`.

:::tip[Parameters]
- **strArray array**
  - Specifies any string-type array to receive the multilingual ID list.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of multilingual IDs retrieved.  
    The number may be limited by the length of the last dimension of the receiving array.
:::

----
### Map Collection Related {#MapCollectionRelated}

----
#### MAP_COPY

**`int MAP_COPY str srcMap, str destMap`**

Copies all elements from the specified source Map to the destination Map.

:::tip[Parameters]
- **str srcMap**
  - Specifies the source Map.
- **str destMap**
  - Specifies the destination Map.
:::

:::tip[Return Value]
- **RESULT:0**
  - Returns the number of elements in the destination Map. Returns `(-1)` if the source Map or destination Map is not found.
:::
