---
sidebar_position: 2
sidebar_label: 변경된 명령
---

# 변경된 명령 {#ModifyCom}

### 디스플레이 관련 {#DisplayRelated}

----
#### SETCOLORBYNAME, SETBGCOLORBYNAME

**`void SETCOLORBYNAME form colorName`**

**`void SETBGCOLORBYNAME form colorName`**

이 명령들의 첫 번째 매개변수 `colorName` 이 FORM 구문을 받아들이도록 변경되었습니다.

:::note[사용 예]
```
SETCOLORBYNAME RED

LOCALS '= "BLUE"
SETBGCOLORBYNAME %LOCALS%
```
:::

----
### 텍스트 처리 관련 {#TextProcessRelated}

----
#### REPLACE

**`str REPLACE str source, str match, str newvalue(, int flag = 0)`**

이 명령의 다른 매개변수 형식 하나가 독립 명령 [**`REPLACEBYARRAY`**](new_com#replacebyarray) 로 분리되었습니다. 또한 `flag` 매개변수의 기능이 변경되었습니다.

:::tip[매개변수]
- **str source**
  - 처리할 텍스트를 지정합니다.
- **str match**
  - 매칭할 텍스트를 지정합니다.
- **str newvalue**
  - 교체할 텍스트를 지정합니다.
- **int flag = 0**
  - 텍스트 처리 방식을 지정합니다. 기본값은 정규식 치환 모드입니다. `0이 아닌 값` 을 입력하면 일반 텍스트 치환 모드를 사용합니다.
:::

:::tip[반환 값]
- **RESULTS:0**
  - 치환된 문자열을 반환합니다.
:::

----
#### SPLIT

**`void SPLIT str text(, str delimiter = ","), strArray array(, int result)`**

이 명령의 두 번째 매개변수 `delimiter` 는 생략 가능하며, 기본값은 `(",")` 입니다.

세 번째 매개변수 `array` 는 다차원 배열을 전달할 수 있습니다.  
다차원 배열의 경우: 마지막 차원의 요소만 처리하며, 이전 차원의 인덱스 값은 직접 지정해야 합니다.

----
#### STRCOUNT

**`int STRCOUNT str input, str match(, int option = 0)`**

- 세 번째 매개변수 `option` 을 추가했습니다. 이 매개변수를 지정하여 처리 옵션을 조정할 수 있습니다.
  - `1P0` = 일반 텍스트 매칭 모드 사용 (더 빠르지만 정규식 구문을 지원하지 않음)
  - `1P1` = 대소문자 무시

----
#### STRFIND

이 명령은 이모지를 처리할 때 표시 너비를 계산하여 문자 길이를 도출합니다.

----
#### STRJOIN

**`str STRJOIN any Array_List_HashList(, str delimiter = ",", int start = 0, int count = lastDimLength)`**

첫 번째 매개변수 `Array_List_HashList` 는 임의 타입의 참조 가능한 배열, 리스트, 해시 리스트를 전달할 수 있습니다.

:::tip[매개변수]
- **any Array_List_HashList**
  - 문자열을 결합할 임의 타입의 참조 가능한 배열, 리스트, 해시 리스트를 지정합니다.
    - 다차원 배열의 경우: 마지막 차원의 요소만 처리하며, 이전 차원의 인덱스 값은 직접 지정해야 합니다.
- **str delimiter = ","**
  - 문자열 결합 시 사용할 구분자를 지정합니다.
- **int start = 0**
  - 결합을 시작할 인덱스를 지정합니다.
- **int count = lastDimLength**
  - 결합할 요소 수를 지정합니다. 생략 시 배열의 마지막 차원 길이를 사용합니다.
:::

:::tip[반환 값]
- **RESULTS:0**
  - 결합된 문자열을 반환합니다.
:::

----
#### STRLEN, STRLENFORM

이 명령들은 이모지를 처리할 때 표시 너비를 계산하여 문자 길이를 도출합니다.

----
#### STRLENS

이 명령은 이모지를 처리할 때 표시 너비를 계산하여 문자 길이를 도출합니다.

----
#### SUBSTRING

**`int SUBSTRING str text(, int start = 0, int length = totalLength)`**

이 명령은 이모지를 처리할 때 표시 너비를 계산하여 문자 길이를 도출합니다.  
텍스트의 선택 위치가 긴 문자의 중간에 위치하면 해당 문자의 시작 위치로 후퇴합니다. 즉, 시작 위치에 걸린 문자는 포함되고, 끝 위치에 걸린 문자는 무시됩니다.

:::note[사용 예]
```
PRINTSL SUBSTRING("１２３", 1, 4)        ; "１２" 를 인쇄합니다.
PRINTSL SUBSTRING("１😀３", 1, 4)        ; "１😀" 를 인쇄합니다.
```
:::

----
### 변수 및 배열 관련 {#VarAndArrayRelated}

----
#### ARRAYCOPY

**`void ARRAYCOPY str srcArrayName, str destVarName(, int isLastDimOnly = 0)`**

세 번째 매개변수 `isLastDimOnly` 를 추가했습니다. 소스 배열의 마지막 차원 요소만 복사할지 여부를 지정합니다. 생략 가능 (`0`) .

두 번째 매개변수 `destVarName` 은 리스트와 해시 리스트의 변수명 전달을 지원합니다. `isLastDimOnly` 매개변수 값이 `0` 인 경우, 소스 배열의 모든 요소가 대상 리스트에 추가됩니다.

----
#### ARRAYREMOVE

**`void ARRAYREMOVE anyArray1D array, int start, int count, same emptyVal`**

네 번째 매개변수 `emptyVal` 을 추가했습니다. 요소 이동 후 빈 공간을 채울 값을 지정합니다. 기본 채우기 값은 `0` 또는 `빈 문자열` 입니다.

이 명령의 세 번째 매개변수 `count` 가 `음수` 로 지정된 경우 배열의 총 길이로 간주됩니다.

----
#### ARRAYSHIFT

**`void ARRAYSHIFT anyArray1D array, int shiftCount, same emptyVal(, int start, int count)`**

다섯 번째 매개변수 `count` 가 `음수` 로 지정된 경우 배열의 총 길이로 간주됩니다.

----
#### ARRAYSORT

**`void ARRAYSORT any Array1D_List(, FORWARD or BACK, int start, int count)`**

첫 번째 매개변수 `Array1D_List` 는 리스트 전달을 지원합니다.

네 번째 매개변수 `count` 가 `음수` 로 지정된 경우 배열 또는 리스트의 총 길이로 간주됩니다.

----
#### ARRAYMSORT

**`int ARRAYMSORT any Array1D_List(, sameParams Array_List)`**

첫 번째 매개변수 `Array1D_List` 는 임의 타입의 참조 가능한 1차원 배열, 리스트를 전달할 수 있습니다.

후속 매개변수 `Array_List` 는 배열, 리스트를 전달할 수 있습니다.

:::tip[매개변수]
- **any Array1D_List**
  - 정렬 기준으로 사용할 임의 타입의 참조 가능한 1차원 배열, 리스트를 지정합니다.  
    이 매개변수 자체의 값도 정렬됩니다.
- **sameParams Array_List**
  - 정렬할 참조 가능한 배열, 리스트를 하나 이상 지정합니다. 값 타입은 첫 번째 매개변수의 값 타입과 일치해야 합니다.
:::

:::tip[반환 값]
- **RESULT:0**
  - 정렬 결과를 반환합니다. 정렬 성공 또는 정렬 불필요 시 `0이 아닌 값` 을 반환하고, 그렇지 않으면 `0` 을 반환합니다.
:::

----
#### ERDNAME

이 명령은 세 번째 매개변수를 생략하면 배열의 마지막 차원 첨자 키워드를 검색합니다.

----
#### FINDELEMENT, FINDLASTELEMENT

**`int FINDELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int FINDLASTELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

첫 번째 매개변수 `array` 는 다차원 배열을 전달할 수 있습니다. 다섯 번째 매개변수 `option` 의 사용법이 수정되었습니다. 이 매개변수를 지정하여 처리 옵션을 조정할 수 있습니다.

:::tip[매개변수]
- **anyArray array**
  - 검색할 임의의 배열을 지정합니다.
    - 다차원 배열의 경우: 마지막 차원의 요소만 처리하며, 이전 차원의 인덱스 값은 직접 지정해야 합니다.
- **same target**
  - 검색할 내용을 지정합니다.
- **int start = 0**
  - 검색을 시작할 인덱스를 지정합니다.
- **int end = lastDimLength**
  - 검색을 종료할 인덱스+1을 지정합니다. 생략 시 배열의 마지막 차원 길이를 사용합니다.
- **int option = 0**
  - 처리 옵션을 지정합니다:
    - `1P0` = 완전 일치 사용
    - `1P1` = 대소문자 무시
    - `1P2` = 판정 결과 반전
    - `1P3` = 일반 텍스트 매칭 사용
:::

:::tip[반환 값]
- **RESULT:0**
  - 검색 조건에 맞는 첫 번째 인덱스 값을 반환합니다. 찾지 못하면 `-1` 을 반환합니다.
:::

:::note[사용 예]
```
LOCAL = FINDELEMENT(LOCALS, "WORD", , , 1P0 | 1P1)
```
:::

----
#### INRANGE

**`int INRANGE any value, same minValue, same maxValue`**

첫 번째 매개변수 `value` 는 문자열을 전달할 수 있으며, 문자열의 정렬 순서가 지정 범위 내에 있는지 판단하는 데 사용됩니다.

:::tip[매개변수]
- **any value**
  - 판단할 값을 지정합니다.
- **same minValue**
  - 최소 범위 값을 지정합니다. 변수의 값 타입은 첫 번째 매개변수의 값 타입과 일치해야 합니다.
- **same maxValue**
  - 최대 범위 값을 지정합니다. 변수의 값 타입은 첫 번째 매개변수의 값 타입과 일치해야 합니다.
:::

:::tip[반환 값]
- **RESULT:0**
  - 판단 결과를 반환합니다. 값이 지정 범위 내에 있으면 `0이 아닌 값` 을 반환하고, 그렇지 않으면 `0` 을 반환합니다.
:::

:::note[사용 예]
```
PRINTVL INRANGE(11, 10, 20)          ; "1" 을 인쇄합니다.
PRINTVL INRANGE(21, 10, 20)          ; "0" 을 인쇄합니다.
PRINTVL INRANGE("b", "a", "c")       ; "1" 을 인쇄합니다.
PRINTVL INRANGE("banana", "b", "c")  ; "1" 을 인쇄합니다.
PRINTVL INRANGE("can", "a", "c")     ; "0" 을 인쇄합니다.
```
:::

----
#### INRANGEARRAY

**`int INRANGEARRAY intArray array, int min, int max(, int start = 0, int end = lastDimLength)`**

첫 번째 매개변수 `array` 는 다차원 정수 배열을 전달할 수 있습니다.

:::tip[매개변수]
- **intArray array**
  - 임의의 정수 배열을 지정합니다.
    - 다차원 배열의 경우: 마지막 차원의 요소만 처리하며, 이전 차원의 인덱스 값은 직접 지정해야 합니다.
- **int min**
  - 최소 범위 값을 지정합니다.
- **int max**
  - 최대 범위 값을 지정합니다.
- **int start = 0**
  - 시작 인덱스를 지정합니다.
- **int end = lastDimLength**
  - 종료 인덱스+1을 지정합니다. 생략 시 배열의 마지막 차원 길이를 사용합니다.
:::

:::tip[반환 값]
- **RESULT:0**
  - 조건에 맞는 요소의 개수를 반환합니다.
:::

----
#### INRANGECARRAY

**`int INRANGECARRAY intCharaArray array, int min, int max(, int start = 0, int end = charaCount)`**

첫 번째 매개변수 `array` 는 2차원 캐릭터형 정수 배열을 전달할 수 있습니다.

:::tip[매개변수]
- **intCharaArray array**
  - 임의의 캐릭터형 정수 배열을 지정합니다.
    - 다차원 배열의 경우: 마지막 차원의 요소만 처리하며, 이전 차원의 인덱스 값은 직접 지정해야 합니다.
- **int min**
  - 최소 범위 값을 지정합니다.
- **int max**
  - 최대 범위 값을 지정합니다.
- **int start = 0**
  - 시작 캐릭터 인덱스를 지정합니다.
- **int end = charaCount**
  - 종료 캐릭터 인덱스+1을 지정합니다. 생략 시 캐릭터 총수를 사용합니다.
:::

:::tip[반환 값]
- **RESULT:0**
  - 조건에 맞는 요소의 개수를 반환합니다.
:::

----
#### MINARRAY, MAXARRAY

**`int MINARRAY intArray array(, int start = 0, int end = lastDimLength)`**

**`int MAXARRAY intArray array(, int start = 0, int end = lastDimLength)`**

첫 번째 매개변수 `array` 는 다차원 정수 배열을 전달할 수 있습니다.

:::tip[매개변수]
- **intArray array**
  - 임의의 정수 배열을 지정합니다.
    - 다차원 배열의 경우: 마지막 차원의 요소만 처리하며, 이전 차원의 인덱스 값은 직접 지정해야 합니다.
- **int start = 0**
  - 시작 인덱스를 지정합니다.
- **int end = lastDimLength**
  - 종료 인덱스+1을 지정합니다. 생략 시 배열의 마지막 차원 길이를 사용합니다.
:::

:::tip[반환 값]
- **RESULT:0**
  - 조건에 맞는 요소의 값을 반환합니다.
:::

----
#### MINCARRAY, MAXCARRAY

**`int MINCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

**`int MAXCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

첫 번째 매개변수 `array` 는 2차원 캐릭터형 정수 배열을 전달할 수 있습니다.

:::tip[매개변수]
- **intCharaArray array**
  - 임의의 캐릭터형 정수 배열을 지정합니다.
    - 다차원 배열의 경우: 마지막 차원의 요소만 처리하며, 이전 차원의 인덱스 값은 직접 지정해야 합니다.
- **int start = 0**
  - 시작 캐릭터 인덱스를 지정합니다.
- **int end = charaCount**
  - 종료 캐릭터 인덱스+1을 지정합니다. 생략 시 캐릭터 총수를 사용합니다.
:::

:::tip[반환 값]
- **RESULT:0**
  - 조건에 맞는 요소의 값을 반환합니다.
:::

----
#### MATCH

**`int MATCH anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

첫 번째 매개변수 `array` 는 다차원 배열을 전달할 수 있습니다. 다섯 번째 매개변수 `option` 을 추가했습니다. 이 매개변수를 지정하여 처리 옵션을 조정할 수 있습니다.

:::tip[매개변수]
- **anyArray array**
  - 검색할 임의의 배열을 지정합니다.
    - 다차원 배열의 경우: 마지막 차원의 요소만 처리하며, 이전 차원의 인덱스 값은 직접 지정해야 합니다.
- **same target**
  - 검색할 내용을 지정합니다.
- **int start = 0**
  - 검색을 시작할 인덱스를 지정합니다.
- **int end = lastDimLength**
  - 검색을 종료할 인덱스+1을 지정합니다. 생략 시 배열의 마지막 차원 길이를 사용합니다.
- **int option = 0**
  - 처리 옵션을 지정합니다:
    - `1P0` = 부분 일치 사용
    - `1P1` = 대소문자 무시
    - `1P2` = 판정 결과 반전
    - `1P3` = 정규식 매칭 사용
:::

:::tip[반환 값]
- **RESULT:0**
  - 검색 조건에 맞는 요소의 개수를 반환합니다.
:::

:::note[사용 예]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P0 | 1P1)    ; ARRAY:0 부터 ARRAY:7 까지에서 "AA" 를 포함하고 (대소문자 무시), 부분 일치하는 요소의 개수를 셉니다.
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P2)          ; ARRAY:0 부터 ARRAY:7 까지에서 "AA" 와 같지 않은 요소의 개수를 셉니다.
PRINTVL MATCH(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)  ; ARRAY:0 부터 ARRAY:7 까지에서 "\\d+" 에 부분 일치하는 요소의 개수를 셉니다.
PRINTVL MATCH(CARRAY_2D:TARGET:3:0, 22, 5)     ; 캐릭터 TARGET의 CARRAY_2D:3:5 부터 CARRAY_2D:3:9 까지에서 22 와 같은 요소의 개수를 셉니다.
```
:::

----
#### CMATCH

**`int CMATCH anyCharaArray array, same target(, int start = 0, int end = charaCount, int option = 0)`**

첫 번째 매개변수 `array` 는 2차원 캐릭터형 배열을 전달할 수 있습니다. 다섯 번째 매개변수 `option` 을 추가했습니다. 이 매개변수를 지정하여 처리 옵션을 조정할 수 있습니다.

:::tip[매개변수]
- **anyCharaArray array**
  - 검색할 캐릭터형 배열을 지정합니다.
    - 다차원 배열의 경우: 마지막 차원의 요소만 처리하며, 이전 차원의 인덱스 값은 직접 지정해야 합니다.
- **same target**
  - 검색할 내용을 지정합니다.
- **int start = 0**
  - 검색을 시작할 캐릭터 인덱스를 지정합니다.
- **int end = charaCount**
  - 검색을 종료할 캐릭터 인덱스+1을 지정합니다. 생략 시 캐릭터 총수를 사용합니다.
- **int option = 0**
  - 처리 옵션을 지정합니다:
    - `1P0` = 부분 일치 사용
    - `1P1` = 대소문자 무시
    - `1P2` = 판정 결과 반전
    - `1P3` = 정규식 매칭 사용
:::

:::tip[반환 값]
- **RESULT:0**
  - 검색 조건에 맞는 캐릭터의 개수를 반환합니다.
:::

:::note[사용 예]
```
#DIMS CHARADATA CARRAY, 10
#DIMS CHARADATA CARRAY_2D, 10, 10
PRINTVL CMATCH(CARRAY:0:5, "A+", 0, 8, 1P0 | 1P3)     ; 인덱스 0 부터 7 까지 캐릭터의 CARRAY:5 가 "A+" 를 포함하는 (부분 일치) 캐릭터의 개수를 셉니다.
PRINTVL CMATCH(CARRAY_2D:0:0:5, "Bb", 5, , 1P1 | 1P2) ; 인덱스 5 부터 마지막까지 캐릭터의 CARRAY_2D:0:5 가 "Bb" 와 같지 않은 (대소문자 무시) 캐릭터의 개수를 셉니다.
```
:::

----
#### SUMARRAY

**`int SUMARRAY intArray array(, int start = 0, int end = lastDimLength)`**

첫 번째 매개변수 `array` 는 다차원 정수 배열을 전달할 수 있습니다.

:::tip[매개변수]
- **intArray array**
  - 합계를 낼 정수 배열을 지정합니다.
    - 다차원 배열의 경우: 마지막 차원의 요소만 처리하며, 이전 차원의 인덱스 값은 직접 지정해야 합니다.
- **int start = 0**
  - 합계를 시작할 인덱스를 지정합니다.
- **int end = lastDimLength**
  - 합계를 종료할 인덱스+1을 지정합니다. 생략 시 배열의 마지막 차원 길이를 사용합니다.
:::

:::tip[반환 값]
- **RESULT:0**
  - 배열의 합계 값을 반환합니다.
:::

:::note[사용 예]
```
#DIM ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
#DIM ARRAY_3D, 10, 10, 10
PRINTVL SUMARRAY(ARRAY, 0, 8)                     ; ARRAY:0 부터 ARRAY:7 까지의 값을 합계합니다.
PRINTVL SUMARRAY(CARRAY_2D:TARGET:3:0, 5)         ; 캐릭터 TARGET의 CARRAY_2D:3:5 부터 CARRAY_2D:3:9 까지의 값을 합계합니다.
```
:::

----
#### SUMCARRAY

**`int SUMCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

첫 번째 매개변수 `array` 는 2차원 캐릭터형 정수 배열을 전달할 수 있습니다.

:::tip[매개변수]
- **intCharaArray array**
  - 합계를 낼 캐릭터형 정수 배열을 지정합니다.
    - 다차원 배열의 경우: 마지막 차원의 요소만 처리하며, 이전 차원의 인덱스 값은 직접 지정해야 합니다.
- **int start = 0**
  - 합계를 시작할 캐릭터 인덱스를 지정합니다.
- **int end = charaCount**
  - 합계를 종료할 캐릭터 인덱스+1을 지정합니다. 생략 시 캐릭터 총수를 사용합니다.
:::

:::tip[반환 값]
- **RESULT:0**
  - 배열의 합계 값을 반환합니다.
:::

:::note[사용 예]
```
#DIM CHARADATA CARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL SUMCARRAY(CARRAY:0:5, 0, 8)              ; 인덱스 0 부터 7 까지 캐릭터의 CARRAY:5 값을 합계합니다.
PRINTVL SUMCARRAY(CARRAY_2D:0:0:5, 5)            ; 인덱스 5 부터 마지막까지 캐릭터의 CARRAY_2D:0:5 값을 합계합니다.
```
:::

----
#### VARSET

**`void VARSET anyArray array(, same value, int start = 0, int end = lastDimLength, int option = 0)`**

다섯 번째 매개변수 `option` 을 추가했습니다. 이 매개변수를 지정하여 처리 옵션을 조정할 수 있습니다.

:::tip[매개변수]
- **anyArray array**
  - 채울 임의의 배열을 지정합니다.
    - 다차원 배열의 경우: 기본적으로 모든 차원의 요소를 처리합니다. `option` 매개변수에 `1P4` 를 전달하면 마지막 차원만 처리하도록 변경할 수 있습니다.
- **same value**
  - 채울 값을 지정합니다.
- **int start = 0**
  - 채우기를 시작할 인덱스를 지정합니다.
- **int end = lastDimLength**
  - 채우기를 종료할 인덱스+1을 지정합니다. 생략 시 배열의 마지막 차원 길이를 사용합니다.
- **int option = 0**
  - 처리 옵션을 지정합니다:
    - `1P4` = 마지막 차원만
:::

:::note[사용 예]
```
#DIM ARRAY, 10, 10
#DIM CHARADATA CARRAY, 10
VARSET ARRAY:0:0, 1, 5, 10       ; 각 차원의 5 부터 9 까지 요소를 1 로 채웁니다.
VARSET ARRAY:3:0, 1, 5, 10, 1P4  ; ARRAY:3:5 부터 ARRAY:3:9 까지 요소를 1 로 채웁니다.
VARSET CARRAY:TARGET:0, 1, 5, 10 ; 캐릭터 TARGET의 CARRAY:5 부터 CARRAY:9 까지 요소를 1 로 채웁니다.
```
:::

----
#### CVARSET

**`void CVARSET anyCharaArray array(, any key, same value, int start, int end)`**

첫 번째 매개변수 `array` 는 2차원 캐릭터형 배열을 전달할 수 있습니다. 두 번째 매개변수 `key` 는 문자열 키 값을 입력할 수 있습니다.

----
#### VARSETEX

**`int VARSETEX string varName(, any value, int setAllDim, int start, int end)`**

두 번째 매개변수 `value` 는 생략 가능합니다. `varName` 이 가리키는 배열의 값 타입과 `value` 의 값 타입이 다를 경우 오류가 발생합니다.

----
#### VARSIZE

**`int VARSIZE string varName(, int dimension)`**

두 번째 매개변수 `dimension` 을 생략하면, 이 명령은 배열의 마지막 차원 길이를 반환합니다. `음수` 를 전달하면 배열의 총 길이를 얻을 수 있습니다.

----
### 입력 관련 {#InputRelated}

----
#### INPUTMOUSEKEY

**`void INPUTMOUSEKEY (int time = 0)`**

숫자 버튼을 클릭했을 때, 이 명령은 받은 숫자를 추가로 `RESULTS:0` 에 출력합니다.

키보드 입력을 받았을 때 (즉, RESULT:0 == 3), `RESULT:3` 은 수정 키의 키 코드 값을 받습니다.

----
#### TWAIT

**`void TWAIT int time(, int flag = 0)`**

두 번째 매개변수 `flag` 는 생략 가능 `(0)` 합니다.

----
### 이미지 관련 {#ImageRelated}

----
#### GCREATE

**`int GCREATE int GID, int width, int height`**

이 명령은 이미지를 생성하기 전에 이미 생성된 이미지를 해제합니다. 즉, 생성 전에 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 명령을 호출할 필요가 없습니다.

----
#### GCREATEFROMFILE

**`int GCREATEFROMFILE int GID, str filepath`**

두 번째 매개변수 `filepath` 는 메인 디렉토리에서 시작하는 상대 경로임을 보장해야 합니다. 예: `resources/image.png` 또는 `erb/image.png`.

세 번째 매개변수 `isRelative` 는 제거되었습니다.

이 명령은 이미지를 생성하기 전에 이미 생성된 이미지를 해제합니다. 즉, 생성 전에 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 명령을 호출할 필요가 없습니다.

----
#### GDASHSTYLE

**`int GDASHSTYLE int GID, int DashStyle, int DashCap`**

- 그래픽 라이브러리 변경으로 인해, `DashCap` 의 입력 값과 효과가 다음과 같이 변경되었습니다:
  - `0` = 선 끝 없음
  - `1` = 반원형 선 끝
  - `2` = 반사각형 선 끝

----
#### GDRAWTEXT

**`int GDRAWTEXT int GID, str text(, int x = 0, int y = 0)`**

이 명령은 문자열의 측정 결과를 반환하지 않게 되었습니다. 즉, `RESULT:0` 이외의 반환 값은 무효입니다.

이 측정은 추가 계산이었으며, 결과는 [**`GGETTEXTSIZE`**](https://evilmask.gitlab.io/emuera.em.doc/zh/Reference/GGETTEXTSIZE.html) 명령과 같고, 약간의 성능 오버헤드가 있었기 때문에 제거되었습니다.

----
#### GDRAWGWITHMASK

**`int GDRAWGWITHMASK int destID, int srcID, int maskID, int destX, int destY`**

이 명령의 색상 알고리즘이 개선되어 `maskID` 이미지의 알파 값과 파란색 값이 모두 그리기 결과에 영향을 미칩니다.

----
#### GDRAWG

**`int GDRAWG int destID, int srcID`**

**`int GDRAWG int destID, int srcID, int destX, int destY`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

위의 네 가지 매개변수 형식을 추가했습니다. 또한 `colorMatrix` 매개변수는 1차원 정수 배열을 전달할 수 있습니다.  
`colorMatrix` 매개변수를 전달한 경우, 해당 색상 행렬은 이번 그리기에만 유효하며, 그리기 완료 후 자동으로 지워집니다.

모든 매개변수 형식의 `destWidth` 및 `destHeight` 매개변수는 `음수` 를 전달할 수 있으며, 뒤집힌 이미지를 그립니다.

그래픽 라이브러리 변경으로 인해 색상 행렬의 사용법이 변경되었습니다. 자세한 내용은 [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) 명령의 설명을 참조하십시오.

----
#### GDRAWSPRITE

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

위의 두 가지 매개변수 형식을 추가했습니다. 또한 `colorMatrix` 매개변수는 1차원 정수 배열을 전달할 수 있습니다.  
`colorMatrix` 매개변수를 전달한 경우, 해당 색상 행렬은 이번 그리기에만 유효하며, 그리기 완료 후 자동으로 지워집니다.

모든 매개변수 형식의 `destWidth` 및 `destHeight` 매개변수는 `음수` 를 전달할 수 있으며, 뒤집힌 이미지를 그립니다.

그래픽 라이브러리 변경으로 인해 색상 행렬의 사용법이 변경되었습니다. 자세한 내용은 [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) 명령의 설명을 참조하십시오.

----
#### GSAVE, GLOAD

**`int GSAVE int GID, any fileName`**

**`int GLOAD int GID, any fileName`**

두 번째 매개변수 `fileName` 은 숫자뿐만 아니라 문자열도 파일 저장 경로로 지정할 수 있습니다.

**`GLOAD`** 명령은 이미지를 생성하기 전에 이미 생성된 이미지를 해제합니다. 즉, 생성 전에 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 명령을 호출할 필요가 없습니다.

:::note[사용 예]
```
GSAVE 0, 11                               ; sav/img0011.png 파일을 내보냅니다.
GSAVE 0, "sav/New Folder/image"           ; sav/New Folder/image.png 파일을 내보냅니다.
GLOAD 0, "resources/New Folder/image"     ; resources/New Folder/image.png 파일을 읽습니다.
```
:::

----
#### SETANIMETIMER

**`void SETANIMETIMER int interval(, int duration)`**

두 번째 매개변수 `duration` 을 추가했습니다. 애니메이션을 갱신하는 지속 시간을 밀리초 단위로 지정합니다. 지속 시간이 지나면 자동으로 애니메이션 갱신을 중지합니다.

이 명령은 [**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) 또는 [**`INPUTMOUSEKEY`**](#inputmousekey) 와 같은 시간 대기 중에도 애니메이션 갱신을 계속합니다.

----
#### SPRITECREATE

**`int SPRITECREATE str sprite, int GID`**

위의 매개변수 형식을 추가했습니다.

이 명령은 Sprite를 생성하기 전에 이미 생성된 비내장 Sprite를 해제합니다. 즉, 생성 전에 [**`SPRITEDISPOSE`**](#spritedispose) 명령을 호출할 필요가 없습니다. 동일한 이름의 내장 Sprite가 이미 존재하면 생성이 실패합니다.

----
#### SPRITEANIMECREATE

**`int SPRITEANIMECREATE str sprite, int width, int height(, int isLoopFrame = 1)`**

네 번째 매개변수 `isLoopFrame` 을 추가했습니다. 이 SpriteAnime가 반복 재생할지 여부를 지정합니다. 생략하거나 `0이 아닌 값` 을 입력하면 반복 재생합니다.

이 명령은 Sprite를 생성하기 전에 이미 생성된 비내장 Sprite를 해제합니다. 즉, 생성 전에 [**`SPRITEDISPOSE`**](#spritedispose) 명령을 호출할 필요가 없습니다. 동일한 이름의 내장 Sprite가 이미 존재하면 생성이 실패합니다.

----
#### SPRITEANIMEADDFRAME

**`int SPRITEANIMEADDFRAME str sprite, int delay`**

위의 매개변수 형식을 추가했습니다.

이 명령은 `delay` 가 0인 지연 프레임을 받아들일 수 있으며, 변환 효과를 만드는 데 사용할 수 있습니다.

이 명령은 비내장 SpriteAnime에만 유효합니다.

----
#### SPRITEDISPOSE

**`int SPRITEDISPOSE str sprite(, int disposeImg)`**

두 번째 매개변수 `disposeImg` 를 추가했습니다. 이 Sprite가 참조하는 이미지를 해제할지 여부를 지정합니다.

----
#### SPRITEDISPOSEALL

**`void SPRITEDISPOSEALL (int disposeImage = 0)`**

- 첫 번째 매개변수 `disposeImage` 의 기능을 변경했습니다. 이 명령은 내장 Sprite를 제거하는 기능을 더 이상 갖지 않습니다. 생략 가능 `(0)`.
  - `0` = 모든 런타임 생성 임시 Sprite를 제거합니다.
  - `0이 아닌 값` = 모든 임시 Sprite를 제거하고, 모든 내장 Sprite가 참조하는 이미지를 해제합니다. 참조하는 이미지는 호출 시 다시 로드됩니다.

----
### 오디오 관련 {#AudioRelated}

----
#### PLAYBGM

**`int PLAYBGM str name(, int volume, int fadeIn = 0, int delay = 0)`**

두 번째에서 네 번째 매개변수 `volume`, `fadeIn`, `delay` 를 추가했습니다.

첫 번째 매개변수 `name` 은 Audio 이름만 입력을 지원합니다. 오디오 파일 경로를 통해 재생하려면 먼저 [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) 명령을 사용하여 Audio를 생성하십시오.  
내장 Audio 리소스를 추가하는 방법은 [**`오디오 기능`**](/#AudioFunc) 섹션을 참조하십시오.

**`int PLAYBGM (int fadeIn = 0, int delay = 0)`**

위의 매개변수 형식을 추가했습니다. 이 형식은 일시 정지된 배경 음악의 재생을 다시 시작하는 데 사용합니다.

:::tip[매개변수]
- **str name**
  - 재생할 Audio 이름을 지정합니다.
- **int volume**
  - 이번 재생 볼륨을 지정합니다. 생략 가능 `(Audio의 사전 설정 볼륨 사용)`.
- **int fadeIn = 0**
  - 페이드 인 효과 지속 시간을 `ms (밀리초)` 로 지정합니다. 입력 값이 `생략` 또는 `0 이하` 이면 효과 없음. 최대값은 `10000` 입니다.
- **int delay = 0**
  - 지연 재생 지속 시간을 `ms (밀리초)` 로 지정합니다. 입력 값이 `생략` 또는 `0 이하` 이면 효과 없음. 최대값은 `10000` 입니다.
:::

:::tip[반환 값]
- **RESULT:0**
  - 재생 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값` 을 반환합니다. Audio가 존재하지 않거나 Audio 로딩 오류 시 `0` 을 반환합니다.
:::

:::note[사용 예]
```
PLAYBGM "MyMusic"                     ; 배경 음악 "MyMusic" 을 재생합니다.
PLAYBGM "MyMusic", 80                 ; 배경 음악 "MyMusic" 을 재생하며, 이번 재생 볼륨은 80입니다.
PLAYBGM "MyMusic", , 1500, 1000       ; 배경 음악 "MyMusic" 을 재생하며, 1000ms 후에 재생을 시작하고 시작 시 1500ms의 페이드 인 효과가 있습니다.
PAUSEBGM 1500                         ; 현재 배경 음악을 일시 정지하며, 정지 시 1500ms의 페이드 아웃 효과가 있습니다.
PLAYBGM 1500                          ; 현재 배경 음악 재생을 다시 시작하며, 시작 시 1500ms의 페이드 인 효과가 있습니다.
```
:::

----
#### PLAYSOUND

**`int PLAYSOUND str name(, int volume, int groupID = 0, int delay = 0)`**

두 번째 매개변수 `volume` 을 추가했습니다. 이번 재생 볼륨을 지정합니다.  
세 번째 매개변수 `groupID` 를 추가했습니다. 이번 재생 사운드 효과 그룹을 지정합니다. [**`STOPSOUND`**](modify_com#stopsound) 명령과 함께 사용하여 동일 사운드 효과 그룹의 모든 사운드 효과를 정지할 수 있습니다.  
네 번째 매개변수 `delay` 를 추가했습니다. 이번 재생 지연을 밀리초 단위로 지정합니다.

첫 번째 매개변수 `name` 은 Audio 이름만 입력을 지원합니다. 오디오 파일 경로를 통해 재생하려면 먼저 [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) 명령을 사용하여 Audio를 생성하십시오.  
내장 Audio 리소스를 추가하는 방법은 [**`오디오 기능`**](/#AudioFunc) 섹션을 참조하십시오.

:::tip[매개변수]
- **str name**
  - 재생할 Audio 이름을 지정합니다.
- **int volume**
  - 이번 재생 볼륨을 지정합니다. 생략 가능 `(오디오의 사전 설정 볼륨 사용)`.
- **int groupID = 0**
  - 이번 재생 사운드 효과 그룹을 지정합니다. 생략 가능 `(0)`.
- **int delay = 0**
  - 이번 재생 지연을 밀리초 단위로 지정합니다. 생략 가능 `(0)`.
:::

:::tip[반환 값]
- **RESULT:0**
  - 재생 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값` 을 반환합니다. Audio가 존재하지 않거나 Audio 로딩 오류 시 `0` 을 반환합니다.
:::

:::note[사용 예]
```
PLAYSOUND "MySOUND"     ; 사운드 효과 "MySOUND" 를 재생합니다.
PLAYSOUND "MySOUND", 80 ; 사운드 효과 "MySOUND" 를 재생하며, 이번 재생 볼륨은 80입니다.
```
:::

----
#### SETBGMVOLUME

**`void SETBGMVOLUME int volume(, int fadeDuration = 0)`**

두 번째 매개변수 `fadeDuration` 을 추가했습니다. 볼륨 변경 시 페이드 효과를 `ms (밀리초)` 로 지정합니다. 입력 값이 `생략` 또는 `0 이하` 이면 효과 없음. 최대값은 `10000` 입니다.

이 명령은 현재 재생 중인 배경 음악의 볼륨만 변경하며, 전역 볼륨에는 더 이상 영향을 미치지 않습니다.

----
#### SETSOUNDVOLUME

이 명령은 더 이상 사용되지 않으며 어떤 효과도 없습니다.

----
#### STOPBGM

**`void STOPBGM (int fadeOut = 0)`**

`fadeOut` 매개변수를 추가했습니다. 입력 값이 `0보다 크면` 배경 음악 정지 시 페이드 아웃 효과가 있습니다.

:::tip[매개변수]
- **int fadeOut = 0**
  - 페이드 아웃 효과 지속 시간을 `ms (밀리초)` 로 지정합니다. 입력 값이 `생략` 또는 `0 이하` 이면 효과 없음. 최대값은 `10000` 입니다.
:::

:::note[사용 예]
```
STOPBGM 1500            ; 배경 음악을 정지하고 1500ms의 페이드 아웃 효과가 있습니다.
```
:::

----
#### STOPSOUND

**`void STOPSOUND (int groupID = 0)`**

`groupID` 매개변수를 추가했습니다. 정지할 사운드 효과 그룹을 지정합니다. 이 매개변수를 생략하면 모든 사운드 효과를 정지합니다.

:::tip[매개변수]
- **int groupID = 0**
  - 정지할 사운드 효과 그룹을 지정합니다. 이 매개변수를 생략하면 모든 사운드 효과를 정지합니다.
:::

:::note[사용 예]
```
PLAYSOUND "MySOUND1", , 1 ; 사운드 효과 "MySOUND1" 를 재생하며, 사운드 효과 그룹을 1로 설정합니다.
PLAYSOUND "MySOUND2", , 2 ; 사운드 효과 "MySOUND2" 를 재생하며, 사운드 효과 그룹을 2로 설정합니다.
STOPSOUND 2                ; 그룹 2의 모든 사운드 효과를 정지합니다.
```
:::

----
### 파일 관련 {#FileRelated}

----
#### ENUMFILES

**`int ENUMFILES string dir(, string pattern, int option)`**

이 명령으로 얻은 파일 경로의 백슬래시 `\\` 가 슬래시 `/` 로 교체됩니다.

----
#### EXISTFILE

**`int EXISTFILE str filePath(, int getInfo = 0)`**

`getInfo` 매개변수를 추가했습니다. 파일 정보를 얻습니다.

:::tip[매개변수]
- **str filePath**
  - 파일 경로를 지정합니다.
- **int getInfo = 0**
  - 파일 정보를 얻을지 여부를 지정합니다. `0이 아닌 값` 을 입력하면 파일 정보를 `RESULT:1 - RESULT:4` 에 출력합니다. 생략 가능 `(0)`.
:::

:::tip[반환 값]
- **RESULT:0**
  - 파일 존재 여부를 나타냅니다. 파일이 존재하면 `0이 아닌 값` 을 반환합니다.
- **RESULT:1**
  - 파일 크기(바이트)를 나타냅니다.
- **RESULT:2**
  - 파일 생성 시간(밀리초)을 나타냅니다.
- **RESULT:3**
  - 파일의 최종 수정 시간(밀리초)을 나타냅니다.
- **RESULT:4**
  - 파일의 최종 액세스 시간(밀리초)을 나타냅니다.
:::

----
### 기타 {#Misc}

----
#### GETCONFIG

**`int GETCONFIG str value`**

- 얻을 수 있는 설정 항목을 다음과 같이 추가했습니다.
  - `ウィンドウ高さ` (Window Height)
  - `フレーム毎秒` (Frames Per Second)
  - `タブ文字幅` (Tab Character Width)

----
### 제어문 {#ControlStatement}

----
#### FOR-NEXT

**`FOR-NEXT int counter, int start, int end(, int step)`**

이 제어문의 시작 값, 종료 값, 증감 값 등의 임시 매개변수는 함수와 함께 스택에 들어오고 나갑니다.

----
#### REPEAT-REND

**`REPEAT-REND int loopCount`**

이 제어문의 시작 값, 종료 값, 증감 값 등의 임시 매개변수는 함수와 함께 스택에 들어오고 나갑니다.
