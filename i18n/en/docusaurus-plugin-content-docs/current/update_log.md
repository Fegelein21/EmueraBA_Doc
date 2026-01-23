---
sidebar_position: 4
sidebar_label: Update Log
---

# Update Log {#UpdateLog}

----
### 2026-01-23

Updated all AI-translated English, Japanese, and Korean documents.

- Improvements to the ERD Keyword feature:
    - When the keyword index value is omitted, the system automatically assigns an unused index value to that keyword.  
      **Warning: Variables declared with SAVEDATA are not recommended to omit index values to avoid game save data corruption.**
    - When an existing keyword name is entered as an index value, it will directly reference that keyword's index value.
- Please refer to the `ERD Keyword Feature Example` in [**`Program and Instruction Compatibility Changes`**](/#CompatibilityChanges) for usage of these improvements.

[**`TRYTOINT`**](new_com#trytoint) The instruction adds a second parameter `outValue` to specify the integer variable that receives the conversion result. If omitted, `RESULT:1` will be used to receive the conversion result.

----
### 2026-01-11

Supports reading audio files in `Ogg Vorbis` format with the `.ogg` extension.

Supports screenshot functionality. You can save the current screen as a file via `Help → Screenshot Button` in the menu bar, or obtain the current screen's image data via the newly added [**`GSNAPSHOT`**](new_com#gsnapshot) instruction.

The first parameter `Array1D_List` of the [**`ARRAYSORT`**](modify_com#arraysort) instruction now supports passing in Lists.

Added the following parameters to the [**`PLAYSOUND`**](modify_com#playsound) instruction:  
Added a third parameter `groupID` to specify the sound effect group for this playback. It can be used with the [**`STOPSOUND`**](modify_com#stopsound) instruction to stop all sound effects in the same group. Can be omitted `(0)`.  
Added a fourth parameter `delay` to specify the playback delay for this instance, in milliseconds. Can be omitted `(0)`.

Added a `groupID` parameter to the [**`STOPSOUND`**](modify_com#stopsound) instruction to specify the sound effect group to stop. Omitting this parameter stops all sound effects.

----
### 2025-10-24

Supports reading and playing dynamic images like `GIF` and `WEBP`. Simply define them in the resources file like static images and then print/display them in ERB scripts in the same way.  
You can use the [**`SETANIMETIMER`**](modify_com#setanimetimer) instruction to refresh the screen for smooth playback.

The first parameter `value` of the [**`INRANGE`**](modify_com#inrange) instruction can now accept strings, used to determine if the string's collation order is within a specified range.

----
### 2025-10-01

Temporary parameters of control statements such as start value, end value, and step value for [**`FOR-NEXT`**](modify_com#for-next) and [**`REPEAT-REND`**](modify_com#repeat-rend) now follow the function in and out of the stack.

Added the [**`FOREACH-NEXTF`**](new_com#foreach-nextf) control statement for iterating through all elements in a specified collection.

Added the new extended variable type [**`Array-Type Dictionary`**](/#ExTypeDictDim).

Added the variable keyword [**`HARDCHECK`**](new_com#hardcheck) to control whether dictionary variables perform strict checks on user-input primary and secondary keys.

Added the [**`HASH`**](new_com#hash) instruction to generate hash codes for specified parameter values.

The extended variable type [**`Dictionary`**](/#ExTypeDict) now supports declaration with the `CONST` keyword.

- Changes to the [**`ARRAYCOPY`**](modify_com#arraycopy) instruction:
    - Added a third parameter `isLastDimOnly` to specify whether to copy only the elements of the source array's last dimension. Can be omitted (`0`).
    - The second parameter `destVarName` now supports passing in variable names of Lists and Hash Lists. When the value of `isLastDimOnly` is `0`, all elements from the source array will be added to the target list.

----
### 2025-09-11

The [**`ARRAYTIDY`**](new_com#arraytidy) instruction will now remove empty elements after tidying a List.

The [**`DICTCOPY`**](new_com#dictcopy) instruction will now return the total number of elements in the target variable after populating the dictionary.

- The following instructions now return the number of successfully copied elements when populating an array, and return the total number of elements in the target variable when populating a List or Hash List:
    - [**`LISTCOPY`**](new_com#listcopy)
    - [**`HASHLISTCOPY`**](new_com#hashlistcopy)
    - [**`DICTGETKEYS`**](new_com#dictgetkeys)
    - [**`DICTGETVALUES`**](new_com#dictgetvalues)
    - [**`DICTITEMGETKEYS`**](new_com#dictitemgetkeys)

Added the [**`ANYSAME`**](new_com#anysame) instruction to check if there are identical values among the given parameters.

- Added parameter formats that accept arrays, Lists, and Hash Lists to the following instructions:
    - [**`STRJOIN`**](modify_com#strjoin)
    - [**`SPINEANIMLIST`**](new_com#spineanimlist-spineskinlist)
    - [**`SPINESKINLIST`**](new_com#spineanimlist-spineskinlist)

- Added parameter formats that accept arrays and Lists to the following instruction:
    - [**`ARRAYMSORT`**](modify_com#arraymsort)

----
### 2025-07-11

Supports **4.2.xx** version of the Spine runtime.

Added the [**`DICTITEMGETKEYS`**](new_com#dictitemgetkeys) instruction to get all primary key names in a specified dictionary collection.

Added a fourth parameter `removeEmpty` to the [**`STRSPLIT`**](new_com#strsplit) instruction to specify whether to remove empty elements after splitting.

Added a third parameter `removeCount` to the [**`LISTREMOVEAT`**](new_com#listremoveat) instruction to specify the number of elements to remove. The default value is `1`.

- Added parameter formats that accept arrays, Lists, and Hash Lists to the following instructions:
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

- Added parameter formats that accept arrays and Lists to the following instruction:
    - [**`ARRAYTIDY`**](new_com#arraytidy)  
      For Lists, empty elements after tidying will not be removed.

----
### 2025-06-08

Added AI-translated English, Japanese, and Korean versions for all documents.

[**`Audio Resources`**](/#AudioFunc) have been integrated from the `sound` folder into `resources`.

The resource file extension obtained by the [**`GETRESOURCEEXT`**](new_com#getresourceext) instruction now includes the `.` (dot).

----
### 2025-05-07

Added the user-defined variable keyword [**`RESIZE`**](new_com#resize) to mark array variables that require resizing.

Added the [**`ARRAYRESIZE`**](new_com#arrayresize) instruction to resize specified user-defined arrays.

Added [**`Extended Variable Types`**](/#ExtendedVariableType), supporting variable types such as Lists, Hash Lists, and Dictionaries.

Character-type two-dimensional arrays now support omitting the first parameter (when the **`キャラクタ変数の引数を補完しない`** (Do Not Auto-Complete Character Variable Parameters) setting is not enabled).

The [**`ERDNAME`**](modify_com#erdname) instruction, when omitting the third parameter, will now look up the keyword for the last dimension subscript of the array.

Added [**`List Related`**](new_com#ListRelated), [**`Hash List Related`**](new_com#HashListRelated), [**`Dictionary Related`**](new_com#DictRelated), and [**`Dictionary Collection Related`**](new_com#DictItemRelated) instructions.

Added the [**`SPRITEANIMEOFFSETTIME`**](new_com#spriteanimeoffsettime) instruction to add an offset value to the playback time of a specified SpriteAnime.

Added the [**`MAP_COPY`**](new_com#map_copy) instruction to copy all elements from a specified source Map to a target Map.
