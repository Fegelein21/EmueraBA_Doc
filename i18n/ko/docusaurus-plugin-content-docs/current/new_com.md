---
sidebar_position: 3
sidebar_label: 새 명령어
---

# 새 명령어 {#NewCom}

### 텍스트 처리 관련 {#TextProcessRelated}

----
#### CHARATUW

**`str CHARATUW str text, int position`**

사용법은 [**`CHARATU`**](https://osdn.net/projects/emuera/wiki/excom#h5-CHARATU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.96.87.E5.AD.97.E4.BD.8D.E7.BD.AE.3E) 명령어와 유사하며, 텍스트에서 지정한 위치의 문자를 가져옵니다.

이 명령어는 복잡한 Emoji 문자를 하나의 완전한 문자로 간주합니다.

:::tip[매개변수]
- **str text**
  - 지정할 텍스트.
- **int position**
  - 지정할 문자 위치.
:::

:::tip[반환값]
- **RESULTS:0**
  - 지정한 위치의 문자열을 반환합니다.
:::

:::note[사용 예]
```
PRINTSL CHARATUW("A👨‍👩‍👧‍👦A", 1)			;"👨‍👩‍👧‍👦"를 출력
```
:::

----
#### FINDEMOJI

**`int FINDEMOJI str text, str Array_List_HashList`**

텍스트 내 모든 Emoji 문자를 찾아 지정한 배열, 리스트, 해시 리스트에 결과를 출력합니다.

:::tip[매개변수]
- **str text**
  - 지정할 텍스트.
- **str Array_List_HashList**
  - Emoji 문자 결과를 받을 문자열형 참조 가능 배열, 리스트, 해시 리스트를 지정합니다.
    - 리스트, 해시 리스트의 경우: 변수 내 원래 내용이 비워지고 새 내용으로 채워집니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 가져온 Emoji 문자 수를 반환합니다.  
    가져온 수는 배열 길이, 해시 리스트 특성의 영향을 받을 수 있습니다.
:::

:::note[사용 예]
```
PRINTVL FINDEMOJI("A👨‍👩‍👧‍👦AA😀A", LOCALS)		;"2"를 출력, LOCALS:0 ="👨‍👩‍👧‍👦", LOCALS:1 ="😀"
```
:::

----
#### FLOATTOSTR

**`str FLOATTOSTR int value, int div(, str format = "")`**

부동 소수점 숫자의 서식화된 텍스트 처리를 구현합니다.

:::tip[매개변수]
- **int value**
  - 지정할 피제수.
- **int div**
  - 지정할 제수, 제수가 `0`이면 오류가 발생합니다.
- **str format = ""**
  - 지정할 문자열 형식.
:::

:::tip[반환값]
- **RESULTS:0**
  - 문자열 결과를 반환합니다.
:::

:::note[사용 예]
```
PRINTSL FLOATTOSTR(13, 23)			;"0.5652174" 출력
PRINTSL FLOATTOSTR(13, 23, "0.00")		;"0.57" 출력
```
:::

----
#### REPLACEBYARRAY

**`str REPLACEBYARRAY str source, str match, strArray1D replaceArray`**

[**`REPLACE`**](modify_com#replace) 명령어에서 분리된 새 명령어로, 텍스트를 대체할 때 `replaceArray` 배열 내 문자열을 순차적으로 채워 넣습니다.

:::tip[매개변수]
- **str text**
  - 처리할 텍스트를 지정합니다.
- **str match**
  - 매칭할 텍스트를 지정합니다.
- **strArray1D replaceArray**
  - 대체용 문자열 배열을 지정합니다.
:::

:::tip[반환값]
- **RESULTS:0**
  - 문자열 결과를 반환합니다.
:::

:::note[사용 예]
```
LOCALS '= "111", "222", "333"
PRINTSL REPLACEBYARRAY("A A-A", "A", LOCALS)		; "111 222-333" 출력
```
:::

----
#### STRAPPEND

**`str STRAPPEND (str delimiter = ",", anyParams value)`**

[**`string.join`**](https://learn.microsoft.com/dotnet/api/system.string.join?view=netframework-4.8#system-string-join(system-string-system-string())) 텍스트 결합을 구현합니다.

:::tip[매개변수]
- **str delimiter = ","**
  - 텍스트 결합에 사용할 구분자를 지정하며, 생략 가능 `(",")`.
- **anyParams value**
  - 0개 이상의 매개변수 값을 지정합니다.
:::

:::tip[반환값]
- **RESULTS:0**
  - 결합된 문자열 결과를 반환합니다.
:::

:::note[사용 예]
```
PRINTSL STRAPPEND(, "aaa", 222, 33)		;"aaa,222,33" 출력
PRINTSL STRAPPEND("__", "aaa", 222, 33)		;"aaa__222__33" 출력
```
:::

----
#### STRFINDUW

**`int STRFINDUW str text, str word(, int start = 0)`**

사용법은 [**`STRFINDU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRFINDU.20.3C.E6.A4.9C.E7.B4.A2.E5.AF.BE.E8.B1.A1.3E.2C.20.3C.E6.A4.9C.E7.B4.A2.E3.81.99.E3.82.8B.E6.96.87.E5.AD.97.E5.88.97.3E.7B.2C.20.3C.E9.96.8B.E5.A7.8B.E3.82.A4.E3.83.B3.E3.83.87.E3.83.83.E3.82.AF.E3.82.B9.3E.7D) 명령어와 유사하며, 텍스트 내 지정 문자열을 검색하여 인덱스 위치를 가져옵니다.

이 명령어는 복잡한 Emoji 문자를 하나의 완전한 문자로 간주합니다.

:::tip[매개변수]
- **str text**
  - 지정할 텍스트.
- **str word**
  - 검색할 문자열을 지정합니다.
- **int start = 0**
  - 검색 시작 위치를 지정하며, 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 검색된 인덱스 위치를 반환하며, 찾지 못한 경우 `-1`을 반환합니다.
:::

:::note[사용 예]
```
PRINTVL STRFINDUW("啊😀A啊B", "A")		;"2" 출력
```
:::

----
#### STRFINDLAST 시리즈 {#STRFINDLAST_Series}

**`int STRFINDLAST str text, str word(, int start = lastIndex)`**

**`int STRFINDLASTU str text, str word(, int start = lastIndex)`**

**`int STRFINDLASTUW str text, str word(, int start = lastIndex)`**

사용법은 [**`STRFIND`**](modify_com#strfind) 명령어와 유사하며, 텍스트 내 지정 문자열을 "역순"으로 검색하여 인덱스 위치를 가져옵니다.

**`STRFINDLAST`** 명령어는 Emoji 문자를 처리할 때 표시 너비 계산을 통해 문자 길이를 도출합니다.

**`STRFINDLASTUW`** 명령어는 복잡한 Emoji 문자를 하나의 완전한 문자로 간주합니다.

:::tip[매개변수]
- **str text**
  - 지정할 텍스트.
- **str word**
  - 검색할 문자열을 지정합니다.
- **int start = lastIndex**
  - 검색 시작 위치를 지정하며, 생략 가능 `(마지막 인덱스 위치)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 검색된 인덱스 위치를 반환하며, 찾지 못한 경우 `-1`을 반환합니다.
:::

:::note[사용 예]
```
PRINTVL STRFINDLAST("啊A啊BA", "B")		;"5" 출력
PRINTVL STRFINDLAST("啊A啊BA", "A", 2)		;"2" 출력
PRINTVL STRFINDLAST("啊A啊BA", "A", 1)		;"-1" 출력
PRINTVL STRFINDLASTU("啊A啊BA", "B")		;"3" 출력
PRINTVL STRFINDLASTUW("😀A啊B😀A", "B")	;"3" 출력
```
:::

----
#### STRFORMAT

**`str STRFORMAT str formatText(, anyParams value)`**

[**`string.format`**](https://learn.microsoft.com/dotnet/api/system.string.format?view=netframework-4.8#Starting) 서식화된 텍스트 처리를 구현합니다.

:::tip[매개변수]
- **str formatText**
  - 지정할 문자열 형식 텍스트.
- **anyParams value**
  - 0개 이상의 매개변수 값을 지정합니다.
:::

:::tip[반환값]
- **RESULTS:0**
  - 문자열 결과를 반환하며, 서식화 실패 시 원본 텍스트를 반환합니다.
:::

:::note[사용 예]
```
PRINTSL STRFORMAT("aaa_{0}__{1}", 222, "33")	;"aaa_222__33" 출력
```
:::

----
#### STRLENSUW

**`int STRLENSUW str text`**

사용법은 [**`STRLENSU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRLENSU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E) 명령어와 유사하며, Unicode 인코딩을 기준으로 텍스트의 문자 수를 가져옵니다.

이 명령어는 복잡한 Emoji 문자를 하나의 완전한 문자로 간주합니다.

:::tip[매개변수]
- **str text**
  - 지정할 텍스트.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정 텍스트의 문자 수를 반환합니다.
:::

:::note[사용 예]
```
PRINTVL STRLENSUW("A👪A")		;"3" 출력
```
:::

----
#### STRREMOVE 시리즈 {#STRREMOVE_Series}

**`str STRREMOVE str text(, int start = 0, int count = totalLength)`**

**`str STRREMOVEU str text(, int start = 0, int count = totalLength)`**

**`str STRREMOVEUW str text(, int start = 0, int count = totalLength)`**

[**`string.remove`**](https://learn.microsoft.com/dotnet/api/system.string.remove?view=netframework-4.8) 지정 범위 내 텍스트 제거를 구현합니다.

**`STRREMOVE`** 명령어는 Emoji 문자를 처리할 때 표시 너비 계산을 통해 문자 길이를 도출합니다.  
텍스트의 선택 위치가 긴 문자 중간에 걸쳐 있으면 해당 문자의 시작 위치로 후퇴합니다. 즉, 시작 위치에 걸친 문자는 포함되고, 끝 위치에 걸친 문자는 무시됩니다.

**`STRREMOVEUW`** 명령어는 복잡한 Emoji 문자를 하나의 완전한 문자로 간주합니다.

:::tip[매개변수]
- **str text**
  - 처리할 텍스트를 지정합니다.
- **int start = 0**
  - 제거할 텍스트의 시작 위치를 지정하며, 생략 가능 `(0)`.
- **int count = totalLength**
  - 제거할 텍스트의 문자 수를 지정하며, 생략 가능 `(텍스트 총 길이)`.
:::

:::tip[반환값]
- **RESULTS:0**
  - 문자열 결과를 반환합니다.
:::

:::note[사용 예]
```
PRINTSL STRREMOVE("１２３４５６", 2, 3)			;"１３４５６" 출력.
PRINTSL STRREMOVEU("１２３４５６", 3)			;"１２３" 출력.
PRINTSL STRREMOVEU("１２３４５６", 0, 3)			;"４５６" 출력.
PRINTSL STRREMOVEUW("１２３４👨‍👩‍👧‍👦５６", 2, 3)		;"１２５６" 출력.
```
:::

----
#### STRSPLIT

**`int STRSPLIT str text, str Array_List_HashList(, str delimiter = ",", int removeEmpty = 0)`**

사용법은 [**`SPLIT`**](modify_com#split) 명령어와 유사하며, 지정 문자열로 텍스트를 분할합니다.

:::tip[매개변수]
- **str text**
  - 분할할 텍스트를 지정합니다.
- **str Array_List_HashList**
  - 분할된 텍스트를 받을 문자열형 참조 가능 배열, 리스트, 해시 리스트를 지정합니다.
    - 리스트, 해시 리스트의 경우: 변수 내 원래 내용이 비워지고 새 내용으로 채워집니다.
- **str delimiter = ","**
  - 텍스트 분할에 사용할 구분자를 지정하며, 생략 가능 `(",")`.
- **int removeEmpty = 0**
  - 분할 후 빈 요소 제거 여부를 지정하며, 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 분할된 문자열 개수를 반환합니다.  
    가져온 문자열 개수는 배열 길이, 해시 리스트 특성의 영향을 받을 수 있습니다.
:::

:::note[사용 예]
```
LOCAL = STRSPLIT("111,AAA,22", LOCALS)			;LOCAL 값은 3으로 할당.
PRINTSL LOCALS:0					;"111" 출력.
LOCAL = STRSPLIT("111,AAA__22", LOCALS, "__")		;LOCAL 값은 2로 할당.
PRINTSL LOCALS:1					;"22" 출력.
```
:::

----
#### STRTRIM

**`str STRTRIM str text(, str trimChars, int trimDirection = 0)`**

[**`string.trim`**](https://learn.microsoft.com/dotnet/api/system.string.trim?view=netframework-4.8) 텍스트 앞뒤 지정 문자 제거를 구현합니다.

:::tip[매개변수]
- **str text**
  - 처리할 텍스트를 지정합니다.
- **str trimChars**
  - 제거할 문자를 지정하며, 이 매개변수를 생략하면 시스템 기본 설정된 다양한 공백 문자(예: 공백, 탭 문자 등)가 제거됩니다.
- **int trimDirection = 0**
  - 제거 방향을 지정합니다. `1` = 앞부분 제거, `2` = 뒷부분 제거, 다른 값은 앞뒤 모두 제거.
:::

:::tip[반환값]
- **RESULTS:0**
  - 문자열 결과를 반환합니다.
:::

:::note[사용 예]
```
PRINTSL STRTRIM(" 111 AAA  22  ")			;"111 AAA  22" 출력.
PRINTSL STRTRIM(" 111 AAA  22  ", " 12")		;"AAA" 출력.
PRINTSL STRTRIM(" 111 AAA  22  ", " 12", 1)		;"AAA  22  " 출력.
```
:::

----
#### SUBSTRINGUW

**`str SUBSTRINGUW str text(, int start = 0, int length = totalLength)`**

사용법은 [**`SUBSTRINGU`**](https://osdn.net/projects/emuera/wiki/excom#h5-SUBSTRINGU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E) 명령어와 유사하며, 지정한 위치와 길이로 텍스트를 잘라냅니다.

이 명령어는 복잡한 Emoji 문자를 하나의 완전한 문자로 간주합니다.

:::tip[매개변수]
- **str text**
  - 지정할 텍스트.
- **int start = 0**
  - 자르기 시작 위치를 지정하며, 생략 가능 `(0)`.
- **int length = totalLength**
  - 자를 길이를 지정하며, 입력값이 `음수`이면 텍스트 총 길이까지 자릅니다.
:::

:::tip[반환값]
- **RESULTS:0**
  - 잘라낸 텍스트를 반환합니다.
:::

:::note[사용 예]
```
PRINTSL SUBSTRINGUW("A👪BAB👪A", 0, 4)		;"A👪BA" 출력
PRINTSL SUBSTRINGUW("A👪BAB👪A", 5)		;"👪A" 출력
```
:::

----
#### TRYTOINT

**`int TRYTOINT str text(, int outValue)`**

사용법은 [**`TOINT`**](https://osdn.net/projects/emuera/wiki/excom#h5-TOINT.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E) 명령어와 유사하며, 지정 문자열을 정수로 변환하는 데 사용되며, `ISNUMERIC`와 `TOINT` 명령어를 연속 사용 시 발생하는 기능 중복 문제를 피할 수 있습니다.

:::tip[매개변수]
- **str text**
  - 정수로 변환할 문자열을 지정합니다.
- **int outValue**
  - 변환 결과를 받을 정수형 변수를 지정하며, 생략 시 `RESULT:1`을 사용하여 변환 결과를 받습니다. 변환 실패 시 반환되는 변환 결과는 `0`입니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 변환 성공 여부를 나타내며, 성공 시 `0이 아닌 값`을 반환합니다.
:::

:::note[사용 예]
```
PRINTVL TRYTOINT("IO") ? RESULT:1 # 11		; "11" 출력
SIF TRYTOINT("20", LOCAL)
PRINTVL LOCAL					; "20" 출력
```
:::

----
### 변수, 배열 관련 {#VarAndArrayRelated}

----
#### ARRAYBIT

**`int ARRAYBIT anyArray array, str keyName(, int dimension = lastDim, str delimiter = ",")`**

두 번째 매개변수 `keyName`에 지정된 여러 인덱스 키 이름을 기준으로 첫 번째 매개변수 `array` 내 각 인덱스 키가 위치한 인덱스 값을 검색하고, 인덱스 값을 OR(또는) 값으로 중첩합니다.

배열의 인덱스 키를 검색하여 인덱스 값으로 사용하는 것 외에도, 세 번째 매개변수 `dimension`을 `0`으로 지정하여 배열 내 요소를 직접 검색하여 인덱스 값으로 사용할 수 있습니다.

지정한 인덱스 키를 찾지 못했거나, 인덱스 값 범위가 `0 - 63`을 벗어나면 직접 오류가 발생합니다.

이 명령어는 실험적 기능으로, 시스템이 적절한 코드를 상수로 리팩터링하는 특성을 활용하여 프로그램 실행 효율성을 높이기 위한 목적을 가지고 있습니다.

:::tip[매개변수]
- **anyArray array**
  - 임의의 배열을 지정합니다.
- **str keyName**
  - 중첩할 인덱스 값의 인덱스 키 이름을 지정합니다.
- **int dimension = lastDim**
  - 배열의 인덱스 키가 위치한 차원을 지정하며, 생략 시 배열 마지막 차원을 사용합니다. 이 매개변수를 `0`으로 지정하면 배열 내 요소를 검색하여 인덱스 값으로 사용합니다.
- **str delimiter = ","**
  - 키 이름을 분할하는 구분자를 지정하며, 생략 가능 `(",")`.
:::

:::tip[반환값]
- **RESULT:0**
  - 모든 인덱스 값이 중첩된 OR 값을 반환합니다.
:::

:::note[사용 예]
```erh title="EXAMPLE_ARRAY.erh 파일"
#DIMS EXAMPLE_ARRAY, 20 = "VALUE_0", "VALUE_1", "VALUE_2", "VALUE_3"
```

```erd title="EXAMPLE_ARRAY.erd 파일"
0,AAA
1,BBB
2,CCC
3,DDD
```

```erb title="erb 파일"
LOCAL = ARRAYBIT(EXAMPLE_ARRAY, "AAA, BBB, DDD")	; LOCAL = 0B1011
; 위 코드의 실행 효과는 다음 과 같습니다:
LOCAL = 1 << GETNUM(EXAMPLE_ARRAY, "AAA")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "BBB")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "DDD")

LOCAL = ARRAYBIT(EXAMPLE_ARRAY, "VALUE_0, VALUE_2", 0)	; LOCAL = 0B0101
; 위 코드의 실행 효과는 다음 과 같습니다:
LOCAL = 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_0")
LOCAL |= 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_2")
```
:::

----
#### ARRAYRESIZE

**`void ARRAYRESIZE anyArray1D array, int size1D(, int keepData = 0)`**

**`void ARRAYRESIZE anyArray2D array, int size1D, int size2D(, int keepData = 0)`**

**`void ARRAYRESIZE anyArray3D array, int size1D, int size2D, int size3D(, int keepData = 0)`**

이 명령어는 지정된 사용자 정의 배열의 크기를 재설정하는 데 사용됩니다.

첫 번째 매개변수 `array`는 [**`RESIZE`**](new_com#resize) 키워드가 있는 사용자 정의 배열 변수만 지정할 수 있습니다.

`size1D`, `size2D`, `size3D` 매개변수를 지정할 때 배열의 총 길이가 `1000000`을 초과하지 않도록 주의해야 합니다.  
지정한 각 차원의 길이가 현재 배열 길이와 완전히 동일하고, `keepData` 매개변수가 `0이 아닌 값`이면 아무 처리도 하지 않습니다.

정적 배열은 재설정 후 [**`RESETDATA`**](https://osdn.net/projects/emuera/wiki/excom#h5-RESETDATA) 명령어로 원래 길이로 재설정될 때까지 계속 현 상태를 유지합니다.  
동적 배열의 경우, 현재 함수 스택 아래의 배열만 재설정되며, 이후 새로운 함수 스택에 진입하여 생성된 배열은 재설정되지 않습니다.

:::tip[매개변수]
- **anyArray1|2|3D array**
  - 크기를 재설정할 배열을 지정합니다.
- **int size1D**
  - 배열의 첫 번째 차원 길이를 지정합니다.
- **int size2D**
  - 배열의 두 번째 차원 길이를 지정합니다.
- **int size3D**
  - 배열의 세 번째 차원 길이를 지정합니다.
- **int keepData = 0**
  - 배열 내 원본 데이터 보존 여부를 지정하며, `0이 아닌 값`을 입력하면 원본 데이터를 보존합니다.
:::

:::note[사용 예]
```
@TEST
#LOCALSIZE 1
#DIM DYNAMIC RESIZE DYNAMIC_ARRAY, 1, 1
#DIM STATIC_ARRAY, 1, 1, 1

ARRAYRESIZE LOCAL, 2		; TEST 함수 내 LOCAL 배열 성공적으로 재설정.
ARRAYRESIZE DYNAMIC_ARRAY, 2, 2	; DYNAMIC_ARRAY 배열 성공적으로 재설정.
CALL TEST_1(DYNAMIC_ARRAY, STATIC_ARRAY)

@TEST_1(REF_ARRAY1, REF_ARRAY2)
#DIM REF REF_ARRAY1, 0, 0
#DIM REF REF_ARRAY2, 0, 0, 0

ARRAYRESIZE REF_ARRAY1, 2, 2	; 참조하는 DYNAMIC_ARRAY 배열 성공적으로 재설정.
ARRAYRESIZE REF_ARRAY2, 2, 2, 2	; 이 줄은 오류 발생, 참조하는 STATIC_ARRAY 배열에 RESIZE 키워드가 정의되지 않았기 때문.
```
:::

----
#### ARRAYTIDY

**`int ARRAYTIDY any Array_List(, int start = 0, int end = lastDimLength, same emptyVal)`**

이 명령어는 배열 내 요소 간 빈 값을 정리하여, 간격 없이 요소가 연속적인 배열을 얻을 수 있습니다.

:::tip[매개변수]
- **any Array_List**
  - 정리할 임의의 참조 가능 배열, 리스트를 지정합니다.
    - 다차원 배열의 경우: 마지막 차원 요소만 처리하며, 이전 차원 인덱스 값을 직접 지정해야 합니다.
    - 리스트의 경우: 정리 완료 후 빈 요소는 제거됩니다.
- **int start = 0**
  - 정리 시작 인덱스를 지정합니다.
- **int end = lastDimLength**
  - 정리 종료 인덱스+1을 지정하며, 생략 시 배열 마지막 차원 길이를 사용합니다.
- **same emptyVal**
  - 처리 시 빈 값으로 간주할 숫자 또는 문자열을 지정하며, 값 유형은 첫 번째 매개변수의 값 유형과 일치해야 합니다. 생략 가능(`0` 또는 `빈 문자열`).
:::

:::tip[반환값]
- **RESULT:0**
  - 지정 범위 내 정리 완료 후 요소 개수를 반환합니다.
:::

----
#### ARRAYFIND, ARRAYFINDLAST

**`int ARRAYFIND anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int ARRAYFINDLAST anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

사용법은 [**`FINDELEMENT, FINDLASTELEMENT`**](modify_com#findelement-findlastelement) 명령어와 유사하며, 배열에서 조건에 맞는 요소를 검색하는 데 사용됩니다.

이 명령어는 기본적으로 `정규 표현식 매칭 미사용`, `부분 매칭 미사용`, `대소문자 구분`입니다. `option` 매개변수를 지정하여 처리 옵션을 조정할 수 있습니다.

:::tip[매개변수]
- **anyArray array**
  - 검색할 임의의 배열을 지정합니다.
    - 다차원 배열의 경우: 마지막 차원 요소만 처리하며, 이전 차원 인덱스 값을 직접 지정해야 합니다.
- **same target**
  - 검색할 내용을 지정하며, 값 유형은 첫 번째 매개변수의 값 유형과 일치해야 합니다.
- **int start = 0**
  - 검색 시작 인덱스를 지정합니다.
- **int end = lastDimLength**
  - 검색 종료 인덱스+1을 지정하며, 생략 시 배열 마지막 차원 길이를 사용합니다.
- **int option = 0**
  - 처리 옵션을 지정합니다:
    -  `1P0` = 부분 매칭 사용
    -  `1P1` = 대소문자 무시
    -  `1P2` = 판단 결과 반전
    -  `1P3` = 정규 표현식 매칭 사용
:::

:::tip[반환값]
- **RESULT:0**
  - 검색 조건에 맞는 첫 번째 인덱스 값을 반환하며, 찾지 못한 경우 `-1`을 반환합니다.
:::

:::note[사용 예]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P0 | 1P1)		; ARRAY:0 부터 ARRAY:7 까지 "AA"를 포함하고 대소문자를 무시하는 요소 검색
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P2)		; ARRAY:0 부터 ARRAY:7 까지 "AA"와 같지 않은 요소 검색
PRINTVL ARRAYFINDLAST(ARRAY, "AA", 0, 8, 1P2)		; 뒤에서 앞으로 ARRAY:0 부터 ARRAY:7 까지 "AA"와 같지 않은 요소 검색
PRINTVL ARRAYFIND(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)	; ARRAY:0 부터 ARRAY:7 까지 "\\d+"에 부분 매칭되는 요소 검색
PRINTVL ARRAYFIND(CARRAY_2D:TARGET:3:0, 22, 5)		; 캐릭터 TARGET의 CARRAY_2D:3:5 부터 CARRAY_2D:3:9 까지 22와 같은 요소 검색
```
:::

----
#### ANYSAME

**`int ANYSAME any key(, sameParams value)`**

사용법은 [**`GROUPMATCH`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/GROUPCHECK.html) 명령어와 유사하며, 첫 번째 매개변수 `key`의 값을 기준으로, 이후 매개변수에 동일한 값이 있는지 찾습니다.

:::tip[매개변수]
- **any key**
  - 찾을 값을 지정합니다.
- **sameParams value**
  - 1개 이상의 매개변수 값을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 찾기 결과를 반환하며, 찾은 경우 `0이 아닌 값`을, 찾지 못한 경우 `0`을 반환합니다.
:::

----
#### HASH

**`int HASH anyParams value`**

지정된 매개변수 값에 대해 (아마도) 고유한 해시 코드를 생성합니다.  
한 번에 여러 매개변수 값에 대해 해시 코드를 생성할 때는 전달 순서를 고려하며, 순서가 다른 매개변수 값은 다른 해시 코드를 생성합니다.

:::tip[매개변수]
- **anyParams value**
  - 1개 이상의 매개변수 값을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 생성된 해시 코드를 반환합니다.
:::

----
#### VARLENGTH

**`int VARLENGTH anyArray array(, int dimension)`**

사용법은 [**`VARSIZE`**](modify_com#varsize) 명령어와 유사하며, 배열 각 차원의 길이를 가져옵니다.

두 번째 매개변수 `dimension`을 생략하면, 이 명령어는 배열 마지막 차원의 길이를 반환하며, `음수`를 전달하면 배열의 총 길이를 가져올 수 있습니다.

:::tip[매개변수]
- **anyArray array**
  - 임의의 배열을 지정합니다.
- **int dimension**
  - 배열의 차원을 지정하며, 생략 시 배열 마지막 차원의 길이를 반환합니다. `음수`를 전달하면 배열의 총 길이를 가져올 수 있습니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정 차원의 배열 길이를 반환합니다.
:::

----
### 리스트 관련 {#ListRelated}

----
#### LISTSIZE

**`int LISTSIZE anyList list`**

**`int LISTSIZE anyDict_anyList dictList`**

지정 리스트의 요소 수를 가져옵니다.

리스트형 사전의 리스트 수를 가져오려면 [**`DICTITEMCOUNT`**](new_com#dictitemcount) 명령어를 사용하십시오.

:::tip[매개변수]
- **anyList list**
  - 임의의 리스트를 지정합니다.
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정 리스트의 요소 수를 반환합니다.
:::

----
#### LISTCLEAR

**`int LISTCLEAR anyList list(, int start = 0, int count = listCount)`**

**`int LISTCLEAR anyDict_anyList dictList(, int start = 0, int count = listCount)`**

지정 리스트에서 지정 범위의 요소를 제거합니다.

:::tip[매개변수]
- **anyList list**
  - 임의의 리스트를 지정합니다.
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전을 지정합니다.
- **int start = 0**
  - 제거할 요소 시작 위치를 지정하며, 생략 가능 `(0)`.
- **int count = listCount**
  - 제거할 요소 개수를 지정하며, 생략 가능 `(리스트의 요소 수)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아닌 값`을 반환합니다.
:::

----
#### LISTADD

**`int LISTADD anyList list, same value(, int index = listCount)`**

**`int LISTADD anyDict_anyList dictList, same value(, int index = listCount)`**

지정 리스트에 지정 요소를 추가합니다.

:::tip[매개변수]
- **anyList list**
  - 임의의 리스트를 지정합니다.
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전을 지정합니다.
- **same value**
  - 추가할 요소를 지정하며, 값 유형은 첫 번째 매개변수의 값 유형과 일치해야 합니다.
- **int index = listCount**
  - 추가할 위치를 지정하며, 생략 가능 `(리스트의 끝 위치)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 요소가 추가된 인덱스 위치를 반환합니다.
:::

----
#### LISTFIND

**`int LISTFIND anyList list, same value(, int start = 0, int count = listCount)`**

**`int LISTFIND anyDict_anyList dictList, same value(, int start = 0, int count = listCount)`**

지정 리스트에서 지정 요소를 찾습니다.

:::tip[매개변수]
- **anyList list**
  - 임의의 리스트를 지정합니다.
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전을 지정합니다.
- **same value**
  - 찾을 요소를 지정하며, 값 유형은 첫 번째 매개변수의 값 유형과 일치해야 합니다.
- **int start = 0**
  - 찾기 시작 위치를 지정하며, 생략 가능 `(0)`.
- **int count = listCount**
  - 찾을 요소 개수를 지정하며, 생략 가능 `(리스트의 요소 수)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 찾은 요소의 인덱스 위치를 반환하며, 찾지 못한 경우 `(-1)`을 반환합니다.
:::

----
#### LISTREMOVE

**`int LISTREMOVE anyList list, same value`**

**`int LISTREMOVE anyDict_anyList dictList, same value`**

지정 리스트에서 지정 요소를 제거합니다.

:::tip[매개변수]
- **anyList list**
  - 임의의 리스트를 지정합니다.
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전을 지정합니다.
- **same value**
  - 제거할 요소를 지정하며, 값 유형은 첫 번째 매개변수의 값 유형과 일치해야 합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 제거 결과를 반환하며, 찾아서 제거한 경우 `(0이 아닌 값)`을, 찾지 못한 경우 `(0)`을 반환합니다.
:::

----
#### LISTREMOVEAT

**`int LISTREMOVEAT anyList list, int index(, int removeCount = 1)`**

**`int LISTREMOVEAT anyDict_anyList dictList, int index(, int removeCount = 1)`**

지정 리스트에서 지정 인덱스 위치의 요소를 제거합니다.

:::tip[매개변수]
- **anyList list**
  - 임의의 리스트를 지정합니다.
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전을 지정합니다.
- **int index**
  - 제거할 요소의 인덱스 위치를 지정합니다.
- **int removeCount = 1**
  - 제거할 요소 수를 지정하며, 생략 가능 `(1)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `(0이 아닌 값)`을 반환합니다.
:::

----
#### LISTCOPY

**`int LISTCOPY anyList srcList, same Array_List_HashList`**

**`int LISTCOPY anyDict_anyList srcDictList, same Array_List_HashList`**

지정 소스 리스트의 모든 요소를 지정된 대상 배열 또는 대상 리스트에 복사합니다.

:::tip[매개변수]
- **anyList srcList**
  - 임의의 소스 리스트를 지정합니다.
- **anyDict_anyList srcDictList**
  - 임의의 소스 리스트형 사전을 지정합니다.
- **same Array_List_HashList**
  - 모든 요소를 받을 참조 가능 배열, 리스트, 해시 리스트를 지정하며, 값 유형은 첫 번째 매개변수의 값 유형과 일치해야 합니다.
    - 리스트의 경우: 소스 내용이 리스트 끝에 채워집니다.
    - 해시 리스트의 경우: 소스 내용이 해시 리스트 내 원래 내용과 병합됩니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 배열의 경우: 성공적으로 복사된 요소 수를 반환합니다. 가져온 요소 수는 배열 길이에 제한을 받습니다.
  - 리스트, 해시 리스트의 경우: 대상 변수 내 요소 총 수를 반환합니다.
:::

----
### 해시 리스트 관련 {#HashListRelated}

----
#### HASHLISTSIZE

**`int HASHLISTSIZE anyHashList list`**

**`int HASHLISTSIZE anyDict_anyHashList dictList`**

지정 해시 리스트의 요소 수를 가져옵니다.

해시 리스트형 사전의 해시 리스트 수를 가져오려면 [**`DICTITEMCOUNT`**](new_com#dictitemcount) 명령어를 사용하십시오.

:::tip[매개변수]
- **anyHashList list**
  - 임의의 해시 리스트를 지정합니다.
- **anyDict_anyHashList dictList**
  - 임의의 해시 리스트형 사전을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정 해시 리스트의 요소 수를 반환합니다.
:::

----
#### HASHLISTCLEAR

**`int HASHLISTCLEAR anyHashList list`**

**`int HASHLISTCLEAR anyDict_anyHashList dictList`**

지정 해시 리스트의 모든 요소를 지웁니다.

:::tip[매개변수]
- **anyHashList list**
  - 임의의 해시 리스트를 지정합니다.
- **anyDict_anyHashList dictList**
  - 임의의 해시 리스트형 사전을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아닌 값`을 반환합니다.
:::

----
#### HASHLISTADD

**`int HASHLISTADD anyHashList list, same value`**

**`int HASHLISTADD anyDict_anyHashList dictList, same value`**

지정된 해시 리스트에 지정 값을 추가합니다.

:::tip[매개변수]
- **anyHashList list**
  - 임의의 해시 리스트를 지정합니다.
- **anyDict_anyHashList dictList**
  - 임의의 해시 리스트형 사전을 지정합니다.
- **same value**
  - 추가할 값을 지정하며, 값 유형은 첫 번째 매개변수의 값 유형과 일치해야 합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 추가 결과를 반환하며, 지정 값을 성공적으로 추가한 경우 `0이 아닌 값`을, 지정 값이 이미 존재하는 경우 `0`을 반환합니다.
:::

----
#### HASHLISTHAS

**`int HASHLISTHAS anyHashList list, same value`**

**`int HASHLISTHAS anyDict_anyHashList dictList, same value`**

지정된 해시 리스트에 지정 값이 존재하는지 검색합니다.

:::tip[매개변수]
- **anyHashList list**
  - 임의의 해시 리스트를 지정합니다.
- **anyDict_anyHashList dictList**
  - 임의의 해시 리스트형 사전을 지정합니다.
- **same value**
  - 검색할 값을 지정하며, 값 유형은 첫 번째 매개변수의 값 유형과 일치해야 합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 검사 결과를 반환하며, 지정 값이 존재하는 경우 `0이 아닌 값`을, 그렇지 않으면 `0`을 반환합니다.
:::

----
#### HASHLISTREMOVE

**`int HASHLISTREMOVE anyHashList list, same value`**

**`int HASHLISTREMOVE anyDict_anyHashList dictList, same value`**

지정된 해시 리스트에서 지정 값을 제거합니다.

:::tip[매개변수]
- **anyHashList list**
  - 임의의 해시 리스트를 지정합니다.
- **anyDict_anyHashList dictList**
  - 임의의 해시 리스트형 사전을 지정합니다.
- **same value**
  - 제거할 값을 지정하며, 값 유형은 첫 번째 매개변수의 값 유형과 일치해야 합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 제거 결과를 반환하며, 지정 값을 성공적으로 찾아 제거한 경우 `0이 아닌 값`을, 지정 값을 찾지 못한 경우 `0`을 반환합니다.
:::

----
#### HASHLISTCOPY

**`int HASHLISTCOPY anyHashList srcList, same Array_List_HashList`**

**`int HASHLISTCOPY anyDict_anyHashList srcDictList, same Array_List_HashList`**

지정 소스 해시 리스트의 모든 요소를 지정된 대상 배열 또는 대상 리스트에 복사합니다.

:::tip[매개변수]
- **anyHashList srcList**
  - 임의의 소스 해시 리스트를 지정합니다.
- **anyDict_anyHashList srcDictList**
  - 임의의 소스 해시 리스트형 사전을 지정합니다.
- **same Array_List_HashList**
  - 모든 요소를 받을 참조 가능 배열, 리스트, 해시 리스트를 지정하며, 값 유형은 첫 번째 매개변수의 값 유형과 일치해야 합니다.
    - 리스트의 경우: 소스 내용이 리스트 끝에 채워집니다.
    - 해시 리스트의 경우: 소스 내용이 해시 리스트 내 원래 내용과 병합됩니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 배열의 경우: 성공적으로 복사된 요소 수를 반환합니다. 가져온 요소 수는 배열 길이에 제한을 받습니다.
  - 리스트, 해시 리스트의 경우: 대상 변수 내 요소 총 수를 반환합니다.
:::

----
### 사전 관련 {#DictRelated}

----
#### DICTSIZE

**`int DICTSIZE anyanyDict dict`**

**`int DICTSIZE anyDict_anyanyDict dictDict`**

지정 사전의 요소 수를 가져옵니다.

사전형 사전의 사전 수를 가져오려면 [**`DICTITEMCOUNT`**](new_com#dictitemcount) 명령어를 사용하십시오.

:::tip[매개변수]
- **anyanyDict dict**
  - 임의의 사전을 지정합니다.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정 사전의 요소 수를 반환합니다.
:::

----
#### DICTCLEAR

**`int DICTCLEAR anyanyDict dict`**

**`int DICTCLEAR anyDict_anyanyDict dictDict`**

지정 사전의 모든 요소를 지웁니다.

:::tip[매개변수]
- **anyanyDict dict**
  - 임의의 사전을 지정합니다.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아닌 값`을 반환합니다.
:::

----
#### DICTADD

**`int DICTADD anyanyDict dict, sameAsKey key, same value`**

**`int DICTADD anyDict_anyanyDict dictDict, sameAsKey key, same value`**

지정된 사전에 지정된 키와 값을 추가하며, 지정된 키가 이미 존재하면 추가하지 않습니다.

:::tip[매개변수]
- **anyanyDict dict**
  - 임의의 사전을 지정합니다.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전을 지정합니다.
- **sameAsKey key**
  - 키 이름을 지정하며, 키 이름의 값 유형은 첫 번째 매개변수의 키 유형과 일치해야 합니다.
- **same value**
  - 값을 지정하며, 값 유형은 첫 번째 매개변수의 값 유형과 일치해야 합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 추가 결과를 반환하며, 지정 키와 값을 성공적으로 추가한 경우 `0이 아닌 값`을, 키가 이미 존재하는 경우 `0`을 반환합니다.
:::

----
#### DICTHAS

**`int DICTHAS anyanyDict dict, sameAsKey key`**

**`int DICTHAS anyDict_anyanyDict dictDict, sameAsKey key`**

지정된 사전에 지정 키 이름이 존재하는지 검사합니다.

:::tip[매개변수]
- **anyanyDict dict**
  - 임의의 사전을 지정합니다.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전을 지정합니다.
- **sameAsKey key**
  - 키 이름을 지정하며, 키 이름의 값 유형은 첫 번째 매개변수의 키 유형과 일치해야 합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 검사 결과를 반환하며, 지정 키 이름이 존재하는 경우 `0이 아닌 값`을, 그렇지 않으면 `0`을 반환합니다.
:::

----
#### DICTREMOVE

**`int DICTREMOVE anyanyDict dict, sameAsKey key`**

**`int DICTREMOVE anyDict_anyanyDict dictDict, sameAsKey key`**

지정된 사전에서 지정 키 값을 제거합니다.

:::tip[매개변수]
- **anyanyDict dict**
  - 임의의 사전을 지정합니다.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전을 지정합니다.
- **sameAsKey key**
  - 키 이름을 지정하며, 키 이름의 값 유형은 첫 번째 매개변수의 키 유형과 일치해야 합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 제거 결과를 반환하며, 지정 키 이름을 성공적으로 찾아 제거한 경우 `0이 아닌 값`을, 그렇지 않으면 `0`을 반환합니다.
:::

----
#### DICTTRYGET

**`int DICTTRYGET anyanyDict dict, same outValue`**

**`int DICTTRYGET anyDict_anyanyDict dictDict, same outValue`**

지정된 사전에서 지정 키 값을 시도하여 찾아 가져오며, 이 명령어를 통해 키 값을 가져올 때 오류가 발생하지 않습니다.

:::tip[매개변수]
- **anyanyDict dict**
  - 임의의 사전을 지정합니다.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전을 지정합니다.
- **same outValue**
  - 키 값을 받을 변수를 지정하며, 변수의 값 유형은 첫 번째 매개변수의 값 유형과 일치해야 합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 찾기 결과를 반환하며, 지정 키 이름을 성공적으로 찾은 경우 `0이 아닌 값`을 반환하고 값을 **outValue**에 출력하며, 그렇지 않으면 `0`을 반환합니다.
:::

----
#### DICTGETKEYS

**`int DICTGETKEYS anyanyDict srcDict, sameAsKey Array_List_HashList`**

**`int DICTGETKEYS anyDict_anyanyDict srcDictDict, sameAsKey Array_List_HashList`**

지정 소스 사전의 모든 키 이름을 지정된 대상 배열 또는 대상 리스트에 복사합니다.

:::tip[매개변수]
- **anyanyDict srcDict**
  - 임의의 소스 사전을 지정합니다.
- **anyDict_anyanyDict srcDictDict**
  - 임의의 소스 사전형 사전을 지정합니다.
- **sameAsKey Array_List_HashList**
  - 키 요소를 받을 참조 가능 배열, 리스트, 해시 리스트를 지정하며, 값 유형은 첫 번째 매개변수의 키 유형과 일치해야 합니다.
    - 리스트의 경우: 소스 내용이 리스트 끝에 채워집니다.
    - 해시 리스트의 경우: 소스 내용이 해시 리스트 내 원래 내용과 병합됩니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 배열의 경우: 성공적으로 복사된 요소 수를 반환합니다. 가져온 요소 수는 배열 길이에 제한을 받습니다.
  - 리스트, 해시 리스트의 경우: 대상 변수 내 요소 총 수를 반환합니다.
:::

----
#### DICTGETVALUES

**`int DICTGETVALUES anyanyDict srcDict, same Array_List_HashList`**

**`int DICTGETVALUES anyDict_anyanyDict srcDictDict, same Array_List_HashList`**

지정 소스 사전의 모든 값을 지정된 대상 배열, 리스트, 해시 리스트에 복사합니다.

:::tip[매개변수]
- **anyanyDict srcDict**
  - 임의의 소스 사전을 지정합니다.
- **anyDict_anyanyDict srcDictDict**
  - 임의의 소스 사전형 사전을 지정합니다.
- **same Array_List_HashList**
  - 값 요소를 받을 참조 가능 배열, 리스트, 해시 리스트를 지정하며, 값 유형은 첫 번째 매개변수의 값 유형과 일치해야 합니다.
    - 리스트의 경우: 소스 내용이 리스트 끝에 채워집니다.
    - 해시 리스트의 경우: 소스 내용이 해시 리스트 내 원래 내용과 병합됩니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 배열의 경우: 성공적으로 복사된 요소 수를 반환합니다. 가져온 요소 수는 배열 길이에 제한을 받습니다.
  - 리스트, 해시 리스트의 경우: 대상 변수 내 요소 총 수를 반환합니다.
:::

----
#### DICTCOPY

**`int DICTCOPY anyanyDict srcDict, sameAsKeysameAsKeyDict destDict`**

**`int DICTCOPY anyanyDict srcDict, anyDict_sameAsKeysameDict destDictDict`**

**`int DICTCOPY anyDict_anyanyDict srcDictDict, sameAsKeysameAsKeyDict destDict`**

**`int DICTCOPY anyDict_anyanyDict srcDictDict, anyDict_sameAsKeysameDict destDictDict`**

지정 소스 사전의 모든 요소를 지정된 대상 사전에 복사합니다.

:::tip[매개변수]
- **anyanyDict srcDict**
  - 임의의 소스 사전을 지정합니다.
- **anyDict_anyanyDict srcDictDict**
  - 임의의 소스 사전형 사전을 지정합니다.
- **sameAsKeysameAsKeyDict destDict**
  - 대상 사전을 지정하며, 키 유형, 값 유형 모두 첫 번째 매개변수와 일치해야 합니다.
- **anyDict_sameAsKeysameDict destDictDict**
  - 대상 사전형 사전을 지정하며, 보조 키 유형, 값 유형 모두 첫 번째 매개변수와 일치해야 합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 대상 변수 내 요소 총 수를 반환합니다.
:::

----
### 사전 컬렉션 관련 {#DictItemRelated}

----
#### DICTITEMCREATE

**`int DICTITEMCREATE anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMCREATE anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMCREATE anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

지정된 사전 컬렉션에 새로운 컬렉션을 생성합니다.

:::tip[매개변수]
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전을 지정합니다.
- **anyDict_anyHashList dictHashList**
  - 임의의 해시 리스트형 사전을 지정합니다.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전을 지정합니다.
- **sameAsDictKey dictKey**
  - 생성할 주 키 이름을 지정하며, 키 이름의 값 유형은 첫 번째 매개변수의 주 키 유형과 일치해야 합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 주 키 이름을 성공적으로 생성한 경우 `0이 아닌 값`을, 동일한 키 이름의 컬렉션이 이미 존재하는 경우 `0`을 반환합니다.
:::

----
#### DICTITEMEXIST

**`int DICTITEMEXIST anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMEXIST anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMEXIST anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

지정된 사전 컬렉션에서 지정된 주 키 이름을 찾습니다.

:::tip[매개변수]
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전을 지정합니다.
- **anyDict_anyHashList dictHashList**
  - 임의의 해시 리스트형 사전을 지정합니다.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전을 지정합니다.
- **sameAsDictKey dictKey**
  - 찾을 주 키 이름을 지정하며, 키 이름의 값 유형은 첫 번째 매개변수의 주 키 유형과 일치해야 합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 주 키 이름을 성공적으로 찾은 경우 `0이 아닌 값`을, 찾지 못한 경우 `0`을 반환합니다.
:::

----
#### DICTITEMRELEASE

**`int DICTITEMRELEASE anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMRELEASE anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMRELEASE anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

지정된 사전 컬렉션에서 지정된 주 키 이름과 컬렉션을 제거합니다.

:::tip[매개변수]
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전을 지정합니다.
- **anyDict_anyHashList dictHashList**
  - 임의의 해시 리스트형 사전을 지정합니다.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전을 지정합니다.
- **sameAsDictKey dictKey**
  - 제거할 주 키 이름을 지정하며, 키 이름의 값 유형은 첫 번째 매개변수의 주 키 유형과 일치해야 합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 주 키 이름과 컬렉션을 성공적으로 찾아 제거한 경우 `0이 아닌 값`을, 찾지 못한 경우 `0`을 반환합니다.
:::

----
#### DICTITEMRELEASEALL

**`int DICTITEMRELEASEALL anyDict_anyList dictList`**

**`int DICTITEMRELEASEALL anyDict_anyHashList dictHashList`**

**`int DICTITEMRELEASEALL anyDict_anyanyDict dictDict`**

지정된 딕셔너리 콜렉션에서 모든 메인 키 이름과 콜렉션을 제거합니다.

:::tip[매개변수]
- **anyDict_anyList dictList**
  - 임의의 리스트형 딕셔너리를 지정합니다.
- **anyDict_anyHashList dictHashList**
  - 임의의 해시 리스트형 딕셔너리를 지정합니다.
- **anyDict_anyanyDict dictDict**
  - 임의의 딕셔너리형 딕셔너리를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아닌 값`을 반환합니다.
:::

----
#### DICTITEMCOUNT

**`int DICTITEMCOUNT anyDict_anyList dictList`**

**`int DICTITEMCOUNT anyDict_anyHashList dictHashList`**

**`int DICTITEMCOUNT anyDict_anyanyDict dictDict`**

지정된 딕셔너리 콜렉션 내의 콜렉션 수를 가져옵니다.

:::tip[매개변수]
- **anyDict_anyList dictList**
  - 임의의 리스트형 딕셔너리를 지정합니다.
- **anyDict_anyHashList dictHashList**
  - 임의의 해시 리스트형 딕셔너리를 지정합니다.
- **anyDict_anyanyDict dictDict**
  - 임의의 딕셔너리형 딕셔너리를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 딕셔너리 콜렉션 내의 콜렉션 수를 반환합니다.
:::

----
#### DICTITEMGETKEYS

**`int DICTITEMGETKEYS anyDict_anyList dictList, sameAsDictKey Array_List_HashList`**

**`int DICTITEMGETKEYS anyDict_anyHashList dictHashList, sameAsDictKey Array_List_HashList`**

**`int DICTITEMGETKEYS anyDict_anyanyDict dictDict, sameAsDictKey Array_List_HashList`**

지정된 딕셔너리 콜렉션 내의 모든 메인 키 이름을 가져옵니다.

:::tip[매개변수]
- **anyDict_anyList dictList**
  - 임의의 리스트형 딕셔너리를 지정합니다.
- **anyDict_anyHashList dictHashList**
  - 임의의 해시 리스트형 딕셔너리를 지정합니다.
- **anyDict_anyanyDict dictDict**
  - 임의의 딕셔너리형 딕셔너리를 지정합니다.
- **sameAsDictKey Array_List_HashList**
  - 메인 키 이름을 받을 임의의 참조 가능한 배열, 리스트, 해시 리스트를 지정하며, 값 타입은 첫 번째 매개변수의 메인 키 타입과 일치해야 합니다.
    - 리스트의 경우: 소스 내용이 리스트의 끝에 채워집니다.
    - 해시 리스트의 경우: 소스 내용이 해시 리스트의 기존 내용과 병합됩니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 배열의 경우: 성공적으로 복사된 요소 수를 반환합니다. 가져온 요소 수는 배열의 길이에 제한됩니다.
  - 리스트, 해시 리스트의 경우: 대상 변수 내의 요소 총 수를 반환합니다.
:::

----
### 입력 관련 {#InputRelated}

----
#### CHKKEYDATA

**`int CHKKEYDATA int keyData(, str keyName, int modifier)`**

사용자 입력 `keyData` 키 코드 값이 지정된 `keyName` 키 이름 및 `modifier` 수정 키와 일치하는지 확인합니다. `keyData` 키 코드 값은 [**`INPUTMOUSEKEY`**](modify_com#inputmousekey) 명령어로 가져올 수 있습니다.

구체적인 `keyName` 키 이름 대응 목록은 [**`Keys 열거형`**](https://learn.microsoft.com/dotnet/api/system.windows.forms.keys?view=netframework-4.8) 문서를 참조하십시오.

:::tip[매개변수]
- **int keyData**
  - 사용자 입력 키 코드 값 데이터를 지정합니다.
- **str keyName**
  - 일치시킬 키 이름을 지정합니다. 키 이름은 대소문자를 구분하지 않으며 생략 가능합니다.
- **int modifier**
  - 일치시킬 수정 키를 지정합니다. 생략 가능합니다.
    - `1P0` = Shift
    - `1P1` = Ctrl
    - `1P2` = Alt
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 키 이름과 수정 키의 일치 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다.
:::

:::note[사용 예]
```
INPUTMOUSEKEY 0
IF RESULT:0 == 3
  PRINTVL CHKKEYDATA(RESULT:2, "A")		; 사용자가 "A"를 입력했는지 확인
  PRINTVL CHKKEYDATA(RESULT:2, , 1P0 | 1P1)	; 사용자가 "Ctrl + Shift"를 입력했는지 확인
  PRINTVL CHKKEYDATA(RESULT:2, "/", 1P1 | 1P2)	; 사용자가 "Ctrl + Alt + /"를 입력했는지 확인
ENDIF
```
:::

----
### 이미지 관련 {#ImageRelated}

----
#### ASYNCGDRAWG

이 명령어의 호출 방식은 [**`GDRAWG`**](modify_com#gdrawg) 명령어와 동일하며, 긴 시간의 프로그램 정지를 피하기 위해 비동기적으로 드로잉 작업을 수행합니다.

비동기 작업을 전송한 후, [**`ASYNCWAITALL`**](#asyncwaitall) 명령어를 호출하여 모든 비동기 작업이 완료될 때까지 프로그램을 강제 대기시킬 수 있습니다.

:::tip[반환값]
- **RESULT:0**
  - 비동기 작업 전송 성공 시 `0이 아닌 값`을 반환하며, 지정된 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### ASYNCGDRAWSPRITE

이 명령어의 호출 방식은 [**`GDRAWSPRITE`**](modify_com#gdrawsprite) 명령어와 동일하며, 긴 시간의 프로그램 정지를 피하기 위해 비동기적으로 드로잉 작업을 수행합니다.

비동기 작업을 전송한 후, [**`ASYNCWAITALL`**](#asyncwaitall) 명령어를 호출하여 모든 비동기 작업이 완료될 때까지 프로그램을 강제 대기시킬 수 있습니다.

:::tip[반환값]
- **RESULT:0**
  - 비동기 작업 전송 성공 시 `0이 아닌 값`을 반환하며, 지정된 이미지 또는 Sprite가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### ASYNCGCREATEFROMFILE

**`int ASYNCGCREATEFROMFILE int GID, str filepath`**

이 명령어의 호출 방식은 [**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) 명령어와 동일하며, 긴 시간의 프로그램 정지를 피하기 위해 지정된 이미지 파일을 비동기적으로 로드합니다.

비동기 작업을 전송한 후, [**`ASYNCWAITALL`**](#asyncwaitall) 명령어를 호출하여 모든 비동기 작업이 완료될 때까지 프로그램을 강제 대기시킬 수 있습니다.

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아닌 값`을 반환합니다.
:::

----
#### ASYNCGDISPOSE

**`int ASYNCGDISPOSE int GID`**

이 명령어의 호출 방식은 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 명령어와 동일하며, 다른 비동기 명령어와 함께 사용하여 이미지를 해제합니다.

비동기 작업을 전송한 후, [**`ASYNCWAITALL`**](#asyncwaitall) 명령어를 호출하여 모든 비동기 작업이 완료될 때까지 프로그램을 강제 대기시킬 수 있습니다.

:::tip[반환값]
- **RESULT:0**
  - 비동기 작업 전송 성공 시 `0이 아닌 값`을 반환하며, 지정된 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### ASYNCSPRITELOAD

**`int ASYNCSPRITELOAD str sprite`**

이 명령어는 지정된 Sprite가 참조하는 이미지를 비동기적으로 로드하여 긴 시간의 프로그램 정지를 피합니다.

비동기 작업을 전송한 후, [**`ASYNCWAITALL`**](#asyncwaitall) 명령어를 호출하여 모든 비동기 작업이 완료될 때까지 프로그램을 강제 대기시킬 수 있습니다.

:::tip[매개변수]
- **str sprite**
  - 비동기적으로 로드할 Sprite 이름을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 비동기 작업 전송 성공, 또는 Sprite 이미지가 이미 로드된 경우 `0이 아닌 값`을 반환하며, Sprite를 찾지 못한 경우 `0`을 반환합니다.
:::

----
#### ASYNCWAITALL

**`void ASYNCWAITALL`**

이 명령어는 모든 비동기 작업이 완료될 때까지 강제 대기합니다.

----
#### GETBEZIERPATH

**`int GETBEZIERPATH intArray2|3D pointArray, int pointCount, intArray2D outputArray, int outputCount`**

베지어 곡선을 생성하고, 곡선 상의 모든 좌표점을 `outputArray` 배열에 저장합니다.

:::tip[매개변수]
- **intArray2|3D pointArray**
  - 곡선 생성 시 사용할 시작점, 여러 제어점, 종료점 좌표를 지정합니다. 배열의 마지막 차원 길이는 `2 이상`이어야 합니다.
- **int pointCount**
  - `pointArray` 내의 좌표점 수를 지정합니다.
- **intArray2D outputArray**
  - 생성된 곡선의 좌표가 저장될 배열을 지정합니다. 배열의 마지막 차원 길이는 `2 이상`이어야 합니다.
- **int outputCount**
  - 생성할 좌표점의 수를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 명령어 실행 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다.
:::

----
#### GETBEZIERPOINT

**`int GETBEZIERPOINT intArray2|3D pointArray, int pointCount, int t, int tMax`**

지정된 제어점과 경로를 기반으로 베지어 곡선 상의 좌표점을 가져옵니다.

:::tip[매개변수]
- **intArray2|3D pointArray**
  - 곡선 생성 시 사용할 시작점, 여러 제어점, 종료점 좌표를 지정합니다. 배열의 마지막 차원 길이는 `2 이상`이어야 합니다.
- **int pointCount**
  - `pointArray` 내의 좌표점 수를 지정합니다.
- **int t**
  - 필요한 좌표점의 경로 위치를 지정합니다.
- **int tMax**
  - 최대 경로를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 명령어 실행 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다.
- **RESULT:1**
  - 좌표점의 X 값입니다.
- **RESULT:2**
  - 좌표점의 Y 값입니다.
:::

----
#### GDISPOSEALL

**`void GDISPOSEALL`**

모든 Graphics 이미지를 해제하고 비웁니다.

----
#### GENABLED

**`int GENABLED int GID`**

지정된 이미지의 `ENABLED` 값을 가져옵니다. 이 값은 해당 이미지가 최종적으로 화면에 그려질 수 있는지를 제어합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 이미지의 `ENABLED` 값을 반환합니다. 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### GSETENABLED

**`int GSETENABLED int GID, int enabled`**

이 명령어는 이미지의 위치 정보를 유지한 채, 해당 이미지가 최종적으로 화면에 그려질 수 있는지를 제어합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
- **int enabled**
  - 해당 이미지를 그릴지 여부를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### GFILLELLIPSE

**`int GFILLELLIPSE int GID, int x, int y, int width, int height`**

타원 도형을 그리는데 사용되며, 사용 방식은 [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) 명령어와 유사합니다. 색상은 [**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) 명령어로 지정합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
- **int x**
  - 타원의 X 위치를 지정합니다.
- **int y**
  - 타원의 Y 위치를 지정합니다.
- **int width**
  - 타원 너비를 지정합니다.
- **int height**
  - 타원 높이를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 도형 그리기 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환하며, 지정된 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### GFILLROUNDRECT

**`int GFILLROUNDRECT int GID, int x, int y, int width, int height, int radiusX(, int radiusY)`**

모서리가 둥근 사각형을 그리는데 사용되며, 사용 방식은 [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) 명령어와 유사합니다. 색상은 [**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) 명령어로 지정합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
- **int x**
  - 모서리 둥근 사각형의 X 위치를 지정합니다.
- **int y**
  - 모서리 둥근 사각형의 Y 위치를 지정합니다.
- **int width**
  - 모서리 둥근 사각형 너비를 지정합니다.
- **int height**
  - 모서리 둥근 사각형 높이를 지정합니다.
- **int radiusX**
  - 모서리 둥글기의 X 반지름을 지정합니다.
- **int radiusY**
  - 모서리 둥글기의 Y 반지름을 지정합니다. 생략 시 `radiusX`와 동일한 값이 사용됩니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 도형 그리기 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환하며, 지정된 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### GRESAMPLESAVE

**`int GRESAMPLESAVE int GID, any fileName, int width, int height`**

사용 방식은 [**`GSAVE`**](modify_com#gsave-gload) 명령어와 유사하지만, 더 높은 품질의 리샘플링을 통해 더 선명한 크기 조정 이미지를 생성하여 파일로 저장합니다. 단, 시간이 더 오래 걸립니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
- **any fileName**
  - 저장할 파일 번호 또는 파일 경로를 지정합니다.
- **int width**
  - 크기 조정 너비를 지정합니다.
- **int height**
  - 크기 조정 높이를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 파일 저장 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환하며, 지정된 이미지가 생성되지 않았거나, 파일 경로가 규정에 맞지 않거나, 파일 저장 중 오류가 발생한 경우 `0`을 반환합니다.
:::

----
#### GSNAPSHOT

**`int GSNAPSHOT int GID`**

이 명령어는 런타임 중에 화면을 캡처하여 현재 창 내의 화면 데이터를 지정된 이미지 ID에 복사합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아닌 값`을 반환합니다.
:::

----
#### GRESETMATRIX

**`int GRESETMATRIX int GID`**

지정된 이미지의 변환 행렬을 초기화합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 변환 행렬 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### GRESETSTATE

**`int GRESETSTATE int GID`**

지정된 이미지의 모든 추가 상태를 초기화합니다. 구체적인 초기화 내용은 다음과 같습니다:

- `BRUSH` 색상을 기본 텍스트 색상으로 초기화.
- `PEN` 색상을 기본 텍스트 색상으로 초기화, 선 두께를 `1`로 초기화, 모든 선 효과 초기화.
- 안티앨리어싱 효과를 `1(켬)`으로 초기화.
- 필터링 품질을 `3(고품질)`로 초기화.
- 블러 효과 제거.
- `ColorMatrix(색상 행렬)` 제거.
- `TransformMatrix(변환 행렬)` 초기화.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 상태 초기화 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### GSETANTIALIAS

**`int GSETANTIALIAS int GID(, int mode = 0)`**

이미지 드로잉 시 안티앨리어싱 사용 여부를 설정합니다.

새로 생성된 모든 이미지는 기본적으로 안티앨리어싱이 켜져 있습니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
- **int mode = 0**
  - 안티앨리어싱 사용 여부를 지정합니다. `0이 아닌 값` 입력 시 안티앨리어싱 켬, 그렇지 않으면 끔. 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 안티앨리어싱 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### GSETBLUR

**`int GSETBLUR int GID(, int blur = 0)`**

이미지 드로잉 시 블러 효과 사용 여부를 설정합니다.

새로 생성된 모든 이미지는 기본적으로 블러 효과가 없습니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
- **int blur = 0**
  - 블러 정도를 지정합니다. 입력 범위는 `0-100`이며, 생략하거나 `0`을 입력하면 블러 효과가 제거됩니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 블러 효과 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### GSETCOLORMATRIX

**`int GSETCOLORMATRIX int GID(, intArray colorMatrix)`**

이미지 드로잉 시 색상 행렬 사용 여부를 설정합니다.

색상 행렬 배열은 최소 `4행 x 5열` 크기여야 하며, 처음 4열의 입력 범위는 `0-255` 또는 `256-510`입니다(처음 4열은 2배 과포화 지원). 제5열의 입력 범위는 `0-255`입니다.

색상 행렬을 제거하려면 이 명령어를 다시 호출하고 두 번째 매개변수 `colorMatrix`를 생략하십시오.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
- **intArray colorMatrix**
  - 색상 행렬로 사용할 임의의 정수 배열을 지정합니다. 이 매개변수를 생략하면 기존 색상 행렬이 제거됩니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 색상 행렬 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

:::note[사용 예]
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

이미지 드로잉 시 필터링 품질 등급을 설정합니다. 이 설정은 크기 조정 이미지의 선명도에 영향을 줍니다.

새로 생성된 모든 이미지는 기본적으로 `3(고품질)`을 사용합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
- **int quality = 3**
  - 품질 등급을 지정합니다. 입력 범위는 `0-3`입니다:
    - `0` = 필터링 없음
    - `1` = 저품질
    - `2` = 중품질
    - `3` = 고품질
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 필터링 품질 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### GSETSCALE

**`int GSETSCALE int GID, int scaleX, int scaleY(, int posX = 0, int posY = 0)`**

이미지의 변환 행렬에 `확대/축소` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`GRESETMATRIX`**](#gresetmatrix) 명령어를 호출하여 모두 초기화해야 합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
- **int scaleX**
  - X 축척량을 지정합니다. `100` 입력은 `100%`를 의미합니다.
- **int scaleY**
  - Y 축척량을 지정합니다. `100` 입력은 `100%`를 의미합니다.
- **int posX = 0**
  - 축척 중심점의 X 위치를 지정합니다. 생략 가능 `(0)`.
- **int posY = 0**
  - 축척 중심점의 Y 위치를 지정합니다. 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 변환 행렬 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### GSETSKEW

**`int GSETSKEW int GID, int skewX, int skewY`**

이미지의 변환 행렬에 `기울이기` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`GRESETMATRIX`**](#gresetmatrix) 명령어를 호출하여 모두 초기화해야 합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
- **int skewX**
  - X 기울기량을 지정합니다. `100` 입력은 `100%`를 의미합니다.
- **int skewY**
  - Y 기울기량을 지정합니다. `100` 입력은 `100%`를 의미합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 변환 행렬 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### GSETROTATE

**`int GSETROTATE int GID, int angle`**

**`int GSETROTATE int GID, int angle, int posX = 0, int posY = 0`**

이미지의 변환 행렬에 `회전` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`GRESETMATRIX`**](#gresetmatrix) 명령어를 호출하여 모두 초기화해야 합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
- **int angle**
  - 회전 각도를 지정합니다.
- **int posX = 0**
  - 회전 중심점의 X 위치를 지정합니다. 생략 가능 `(0)`.
- **int posY = 0**
  - 회전 중심점의 Y 위치를 지정합니다. 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 변환 행렬 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### GSETTRANSLATE

**`int GSETTRANSLATE int GID, int translateX, int translateY`**

이미지의 변환 행렬에 `이동` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`GRESETMATRIX`**](#gresetmatrix) 명령어를 호출하여 모두 초기화해야 합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID를 지정합니다.
- **int translateX**
  - 이동할 X 벡터를 지정합니다.
- **int translateY**
  - 이동할 Y 벡터를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 변환 행렬 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### SPRITEANIMECLEARFRAME

**`int SPRITEANIMECLEARFRAME str spriteAnime(, int removeStart = 0, int removeCount = frameCount)`**

지정된 SpriteAnime의 프레임을 지웁니다.

이 명령어는 비내장형 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
- **int removeStart = 0**
  - 지우기 시작 위치를 지정합니다.
- **int removeCount = frameCount**
  - 지울 프레임 개수를 지정합니다. 생략 시 `removeStart`부터 모든 프레임을 지웁니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지우기 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았거나, SpriteAnime가 내장형일 경우 `0`을 반환합니다.
:::

----
#### SPRITEANIMEFRAMECOUNT

**`int SPRITEANIMEFRAMECOUNT str spriteAnime`**

지정된 SpriteAnime에 추가된 프레임 수를 가져옵니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 SpriteAnime의 프레임 수를 반환합니다. SpriteAnime가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### SPRITEANIMERESETTIME

**`int SPRITEANIMERESETTIME str spriteAnime`**

지정된 SpriteAnime의 재생 시간을 초기화하여 애니메이션이 첫 프레임부터 다시 시작하도록 합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### SPRITEANIMEOFFSETTIME

**`int SPRITEANIMEOFFSETTIME str spriteAnime, int offsetTime`**

지정된 SpriteAnime의 재생 시간에 오프셋 값을 추가합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
- **int offsetTime**
  - 오프셋 값을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### SPRITEFRAME_SETG

**`int SPRITEFRAME_SETG str spriteAnime, int GID`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height, int posX, int posY`**

지정된 SpriteAnime의 현재 프레임에 이미지를 설정합니다. 각 프레임에는 마지막으로 설정된 이미지 타입만 유효합니다.

이 명령어는 비내장형 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
- **int GID**
  - 이미지 ID를 지정합니다.
- **int x**
  - 선택 영역의 X 위치를 지정합니다.
- **int y**
  - 선택 영역의 Y 위치를 지정합니다.
- **int width**
  - 선택 영역 너비를 지정합니다.
- **int height**
  - 선택 영역 높이를 지정합니다.
- **int posX**
  - 선택 영역의 드로잉 X 위치를 지정합니다.
- **int posY**
  - 선택 영역의 드로잉 Y 위치를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았거나, SpriteAnime가 내장형일 경우 `0`을 반환합니다.
:::

----
#### SPRITEFRAME_SETSPRITE

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height, int posX, int posY`**

지정된 SpriteAnime의 현재 프레임에 Sprite 이미지를 설정합니다. 각 프레임에는 마지막으로 설정된 이미지 타입만 유효합니다.

이 명령어는 비내장형 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
- **str sprite**
  - Sprite를 지정합니다.
- **int x**
  - 선택 영역의 X 위치를 지정합니다.
- **int y**
  - 선택 영역의 Y 위치를 지정합니다.
- **int width**
  - 선택 영역 너비를 지정합니다.
- **int height**
  - 선택 영역 높이를 지정합니다.
- **int posX**
  - 선택 영역의 드로잉 X 위치를 지정합니다.
- **int posY**
  - 선택 영역의 드로잉 Y 위치를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았거나, SpriteAnime가 내장형일 경우 `0`을 반환합니다.
:::

----
#### SPRITEFRAME_SETSPINE

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height, int posX, int posY`**

지정된 SpriteAnime의 현재 프레임에 Spine 애니메이션을 설정합니다. 각 프레임에는 마지막으로 설정된 이미지 타입만 유효합니다.

이 명령어는 비내장형 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
- **int spineID**
  - SpineID를 지정합니다.
- **int x**
  - 선택 영역의 X 위치를 지정합니다.
- **int y**
  - 선택 영역의 Y 위치를 지정합니다.
- **int width**
  - 선택 영역 너비를 지정합니다.
- **int height**
  - 선택 영역 높이를 지정합니다.
- **int posX**
  - 선택 영역의 X 드로잉 위치를 지정합니다.
- **int posY**
  - 선택 영역의 Y 드로잉 위치를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았거나, SpriteAnime가 내장형일 경우 `0`을 반환합니다.
:::

----
#### SPRITEFRAME_TRANSITION

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton`**

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton, intArray2D bezierPointArray, int bezierPointCount`**

지정된 SpriteAnime의 현재 프레임에 대해 전환 효과를 활성화 또는 비활성화합니다. 이 전환 효과는 이전 프레임을 변환 시작점으로, 현재 프레임을 변환 종료점으로 사용합니다.  
비균일 속도의 전환 효과를 얻기 위해 베지어 곡선을 설명하는 배열을 전달할 수 있습니다.

- 다음 속성만 전환 효과의 영향을 받습니다:
  - 변환 행렬
  - 색상 행렬
  - 블러 효과

이 명령어는 비내장형 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
- **int useTransisiton**
  - 전환 효과 활성화 또는 비활성화를 지정합니다.
- **intArray2D bezierPointArray**
  - 베지어 곡선을 설명하는 배열을 지정합니다.
- **int bezierPointCount**
  - 배열 내의 좌표점 개수를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았거나, SpriteAnime가 내장형일 경우 `0`을 반환합니다.
:::

----
#### SPRITEFRAME_TRANSLATE

**`int SPRITEFRAME_TRANSLATE str spriteAnime, int translateX, int translateY`**

지정된 SpriteAnime의 현재 프레임의 변환 행렬에 `이동` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 명령어를 호출하여 현재 프레임의 변환 행렬을 초기화해야 합니다.

이 명령어는 비내장형 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
- **int translateX**
  - 이동할 X 벡터를 지정합니다.
- **int translateY**
  - 이동할 Y 벡터를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았거나, SpriteAnime가 내장형일 경우 `0`을 반환합니다.
:::

----
#### SPRITEFRAME_SCALE

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY`**

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY, int posX, int posY`**

지정된 SpriteAnime의 현재 프레임의 변환 행렬에 `확대/축소` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 명령어를 호출하여 현재 프레임의 변환 행렬을 초기화해야 합니다.

이 명령어는 비내장형 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
- **int scaleX**
  - X 축척량을 지정합니다. `100` 입력은 `100%`를 의미합니다.
- **int scaleY**
  - Y 축척량을 지정합니다. `100` 입력은 `100%`를 의미합니다.
- **int posX = 0**
  - 축척 중심점의 X 위치를 지정합니다. 생략 가능 `(0)`.
- **int posY = 0**
  - 축척 중심점의 Y 위치를 지정합니다. 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았거나, SpriteAnime가 내장형일 경우 `0`을 반환합니다.
:::

----
#### SPRITEFRAME_ROTATE

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle`**

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle, int posX, int posY`**

지정된 SpriteAnime의 현재 프레임의 변환 행렬에 `회전` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 명령어를 호출하여 현재 프레임의 변환 행렬을 초기화해야 합니다.

이 명령어는 비내장형 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
- **int angle**
  - 회전 각도를 지정합니다.
- **int posX**
  - 회전 중심점의 X 위치를 지정합니다. 생략 가능 `(0)`.
- **int posY**
  - 회전 중심점의 Y 위치를 지정합니다. 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았거나, SpriteAnime가 내장형일 경우 `0`을 반환합니다.
:::

----
#### SPRITEFRAME_SKEW

**`int SPRITEFRAME_SKEW str spriteAnime, int skewX, int skewY`**

지정된 SpriteAnime의 현재 프레임의 변환 행렬에 `기울이기` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 명령어를 호출하여 현재 프레임의 변환 행렬을 초기화해야 합니다.

이 명령어는 비내장형 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
- **int skewX**
  - X 기울기량을 지정합니다. `100` 입력은 `100%`를 의미합니다.
- **int skewY**
  - Y 기울기량을 지정합니다. `100` 입력은 `100%`를 의미합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았거나, SpriteAnime가 내장형일 경우 `0`을 반환합니다.
:::

----
#### SPRITEFRAME_RESETMATRIX

**`int SPRITEFRAME_RESETMATRIX str spriteAnime`**

지정된 SpriteAnime의 현재 프레임의 변환 행렬을 초기화합니다.

이 명령어는 비내장형 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았거나, SpriteAnime가 내장형일 경우 `0`을 반환합니다.
:::

----
#### SPRITEFRAME_COLORMATRIX

**`int SPRITEFRAME_COLORMATRIX str spriteAnime(, intArray colorMatrix)`**

지정된 SpriteAnime의 현재 프레임에 색상 행렬을 설정합니다.

색상 행렬 배열은 최소 `4행 x 5열` 크기여야 하며, 처음 4열의 입력 범위는 `0-255` 또는 `256-510`입니다(처음 4열은 2배 과포화 지원). 제5열의 입력 범위는 `0-255`입니다.

색상 행렬을 제거하려면 이 명령어를 다시 호출하고 두 번째 매개변수 `colorMatrix`를 생략하십시오.

이 명령어는 비내장형 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
- **intArray colorMatrix**
  - 색상 행렬로 사용할 임의의 정수 배열을 지정합니다. 이 매개변수를 생략하면 기존 색상 행렬이 제거됩니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았거나, SpriteAnime가 내장형일 경우 `0`을 반환합니다.
:::

----
#### SPRITEFRAME_BLUR

**`int SPRITEFRAME_BLUR str spriteAnime(, int blur = 0)`**

지정된 SpriteAnime의 현재 프레임에 블러 효과를 설정합니다.

이 명령어는 비내장형 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름을 지정합니다.
- **int blur = 0**
  - 블러 정도를 지정합니다. 입력 범위는 `0-100`이며, 생략하거나 `0`을 입력하면 블러 효과가 제거됩니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. SpriteAnime가 생성되지 않았거나, SpriteAnime가 내장형일 경우 `0`을 반환합니다.
:::

----
#### SPRITEENABLED

**`int SPRITEENABLED str sprite`**

지정된 Sprite 이미지의 `ENABLED` 값을 가져옵니다. 이 값은 해당 이미지가 최종적으로 화면에 그려질 수 있는지를 제어합니다.

:::tip[매개변수]
- **str sprite**
  - Sprite 이미지를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 Sprite 이미지의 `ENABLED` 값을 반환합니다. Sprite 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### SPRITESETENABLED

**`int SPRITESETENABLED str sprite, int enabled`**

이 명령어는 Sprite 이미지의 위치 정보를 유지한 채, 해당 이미지가 최종적으로 화면에 그려질 수 있는지를 제어합니다.

:::tip[매개변수]
- **str sprite**
  - Sprite 이미지를 지정합니다.
- **int enabled**
  - 해당 Sprite 이미지를 그릴지 여부를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. Sprite 이미지가 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### SPRITEEXIST

**`int SPRITEEXIST str sprite`**

사용 방식은 [**`SPRITECREATED`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITECREATED.20str.20spriteName) 명령어와 유사하지만, 지정된 Sprite를 검색할 때 참조 이미지의 자동 로드 메커니즘을 트리거하지 않습니다.

:::tip[매개변수]
- **str sprite**
  - 검색할 Sprite 이름을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 Sprite 검색 성공 여부를 나타냅니다. 찾았을 경우 `0이 아닌 값`을 반환합니다.
:::

----
#### SPRITEEXTEND

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height`**

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height, int posX, int posY`**

기존 Sprite를 기반으로 새로운 비내장형 Sprite를 생성합니다. 새 Sprite의 선택 영역은 원본 Sprite의 크기에 제한을 받습니다.

:::tip[매개변수]
- **str newSprite**
  - 새 Sprite 이름을 지정합니다.
- **str srcSprite**
  - 원본 Sprite 이름을 지정합니다.
- **int x**
  - 선택 영역의 X 위치를 지정합니다.
- **int y**
  - 선택 영역의 Y 위치를 지정합니다.
- **int width**
  - 선택 영역 너비를 지정합니다.
- **int height**
  - 선택 영역 높이를 지정합니다.
- **int posX**
  - 새 Sprite의 X 드로잉 위치를 지정합니다.
- **int posY**
  - 새 Sprite의 Y 드로잉 위치를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 새로운 비내장형 Sprite 생성 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 새 Sprite와 원본 Sprite 이름이 같거나, 동일한 이름의 내장형 Sprite가 이미 존재하거나, 원본 Sprite가 존재하지 않거나, 원본 Sprite가 단일 이미지 타입의 Sprite가 아닐 경우 `0`을 반환합니다.
:::

----
#### CONSTSPRITECREATE

**`int CONSTSPRITECREATE str sprite, str imgPath`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height, int posX, int posY`**

지정된 `imgPath` 이미지 파일 경로를 기반으로 새로운 내장형 Sprite를 생성합니다.

이 작업은 기존에 존재하는 비내장형 Sprite를 대체합니다.

:::tip[매개변수]
- **str sprite**
  - 새 Sprite 이름을 지정합니다.
- **str imgPath**
  - 이미지 파일 경로를 지정합니다.
- **int x**
  - 선택 영역의 X 위치를 지정합니다.
- **int y**
  - 선택 영역의 Y 위치를 지정합니다.
- **int width**
  - 선택 영역 너비를 지정합니다.
- **int height**
  - 선택 영역 높이를 지정합니다.
- **int posX**
  - 새 Sprite의 X 드로잉 위치를 지정합니다.
- **int posY**
  - 새 Sprite의 Y 드로잉 위치를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 새로운 내장형 Sprite 생성 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 동일한 이름의 내장형 Sprite가 이미 존재하거나, 지정된 선택 영역이 이미지와 교차하지 않을 경우 `0`을 반환합니다.
:::

----
### SPINE 관련 {#SpineRelated}

----
#### SPINECREATE

**`int SPINECREATE int spineID, str spineResource`**

csv 리소스 파일에 정의된 Spine 리소스를 기반으로 지정된 `spineID`에 Spine 애니메이션을 생성합니다.

이 명령어는 Spine 애니메이션 생성 전에 이미 생성된 Spine 애니메이션을 해제하므로, 생성 전에 [**`SPINEDISPOSE`**](#spinedispose) 명령어를 호출할 필요가 없습니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **str spineResource**
  - Spine 리소스 이름을 지정합니다. 이름은 대소문자를 구분하지 않습니다.
:::

:::tip[반환값]
- **RESULT:0**
  - Spine 애니메이션 생성 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. Spine 애니메이션 리소스가 존재하지 않을 경우 `0`을 반환합니다.
:::

----
#### SPINECREATEFROMFILE

**`int SPINECREATEFROMFILE int spineID, str atlasFile, str dataFile`**

지정된 `atlas 파일`과 `data 파일(.skel 또는 .json)`을 기반으로 지정된 `spineID`에 Spine 애니메이션을 생성합니다.

이 명령어는 Spine 애니메이션 생성 전에 이미 생성된 Spine 애니메이션을 해제하므로, 생성 전에 [**`SPINEDISPOSE`**](#spinedispose) 명령어를 호출할 필요가 없습니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **str atlasFile**
  - Spine 애니메이션의 atlas 파일을 지정합니다.
- **str dataFile**
  - Spine 애니메이션의 .skel 파일 또는 .json 파일을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - Spine 애니메이션 생성 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 파일이 존재하지 않거나, 파일 형식이 맞지 않을 경우 `0`을 반환합니다.
:::

----
#### SPINECREATED

**`int SPINECREATED int spineID`**

지정된 Spine 애니메이션이 이미 생성되었는지 확인합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - Spine 애니메이션 생성 여부를 나타냅니다. 생성되었을 경우 `0이 아닌 값`을 반환합니다.
:::

----
#### SPINEDISPOSE

**`int SPINEDISPOSE int spineID(, int disposeImg = 0)`**

지정된 Spine 애니메이션을 제거합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **int disposeImg = 0**
  - 해당 Spine 애니메이션이 참조하는 이미지를 해제할지 여부를 지정합니다. `0이 아닌 값` 입력 시 이미지가 해제됩니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아닌 값`을 반환합니다.
:::

----
#### SPINEDISPOSEALL

**`int SPINEDISPOSEALL (int disposeImg = 0)`**

모든 Spine 애니메이션을 제거합니다.

:::tip[매개변수]
- **int disposeImg = 0**
  - 모든 Spine 애니메이션이 참조하는 이미지를 해제할지 여부를 지정합니다. `0이 아닌 값` 입력 시 이미지가 해제됩니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아닌 값`을 반환합니다.
:::

----
#### SPINEENABLED

**`int SPINEENABLED int spineID`**

지정된 Spine 애니메이션의 `ENABLED` 값을 가져옵니다. 이 값은 해당 Spine 애니메이션이 최종적으로 화면에 그려질 수 있는지를 제어합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 Spine 애니메이션의 `ENABLED` 값을 반환합니다. Spine 애니메이션이 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### SPINESETENABLED

**`int SPINESETENABLED int spineID, int enabled`**

이 명령어는 Spine 애니메이션의 위치 정보를 유지한 채, 해당 Spine 애니메이션이 최종적으로 화면에 그려질 수 있는지를 제어합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **int enabled**
  - 해당 Spine 애니메이션을 그릴지 여부를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. Spine 애니메이션이 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### GDRAWSPINE

**`int GDRAWSPINE int GID, int spineID`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

사용 방식은 [**`GDRAWG`**](modify_com#gdrawg) 명령어와 유사하며, 지정된 `GID` 이미지 위에 `spineID` Spine 애니메이션을 그립니다.

`colorMatrix` 색상 행렬의 사용 방식은 [**`GSETCOLORMATRIX`**](#gsetcolormatrix) 명령어의 설명을 참조하십시오.

:::tip[매개변수]
- **int GID**
  - 대상 이미지 ID를 지정합니다.
- **int spineID**
  - 소스 SpineID를 지정합니다.
- **int destX**
  - 대상 X 위치를 지정합니다.
- **int destY**
  - 대상 Y 위치를 지정합니다.
- **int destWidth**
  - 대상 너비를 지정합니다. `음수`를 입력하여 뒤집힌 이미지를 그릴 수 있습니다.
- **int destHeight**
  - 대상 높이를 지정합니다. `음수`를 입력하여 뒤집힌 이미지를 그릴 수 있습니다.
- **int srcX**
  - 소스 X 위치를 지정합니다.
- **int srcY**
  - 소스 Y 위치를 지정합니다.
- **int srcWidth**
  - 소스 너비를 지정합니다.
- **int srcHeight**
  - 소스 높이를 지정합니다.
- **intArray colorMatrix**
  - 색상 행렬로 사용할 임의의 정수 배열을 지정합니다. 생략 가능합니다. 이 색상 행렬은 이번 그리기에서만 유효하며, 그리기 완료 후 자동으로 제거됩니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 그리기 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. 지정된 이미지 또는 Spine 애니메이션이 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### ASYNCGDRAWSPINE

이 명령어의 호출 방식은 [**`GDRAWSPINE`**](#gdrawspine) 명령어와 동일하며, 긴 시간의 프로그램 정지를 피하기 위해 비동기적으로 드로잉 작업을 수행합니다.

비동기 작업을 전송한 후, [**`ASYNCWAITALL`**](#asyncwaitall) 명령어를 호출하여 모든 비동기 작업이 완료될 때까지 프로그램을 강제 대기시킬 수 있습니다.

:::tip[반환값]
- **RESULT:0**
  - 비동기 작업 전송 성공 시 `0이 아닌 값`을 반환하며, 지정된 이미지 또는 Spine 애니메이션이 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### ASYNCSPINELOAD

**`int ASYNCSPINELOAD int spineID`**

이 명령어는 지정된 Spine 애니메이션이 참조하는 이미지를 비동기적으로 로드하여 긴 시간의 프로그램 정지를 피합니다.

비동기 작업을 전송한 후, [**`ASYNCWAITALL`**](#asyncwaitall) 명령어를 호출하여 모든 비동기 작업이 완료될 때까지 프로그램을 강제 대기시킬 수 있습니다.

:::tip[매개변수]
- **int spineID**
  - 비동기적으로 로드할 SpineID를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 비동기 작업 전송 성공 시 `0이 아닌 값`을 반환하며, Spine 애니메이션이 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### SPINEPOSX, SPINEPOSY

**`int SPINEPOSX int spineID`**

**`int SPINEPOSY int spineID`**

지정된 Spine 애니메이션의 드로잉 위치를 가져옵니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - Spine 애니메이션의 드로잉 위치를 반환합니다.
:::

----
#### SPINESRCX, SPINESRCY

**`int SPINESRCX int spineID`**

**`int SPINESRCY int spineID`**

지정된 Spine 애니메이션의 원본 좌표축 위치를 가져옵니다. 가져온 값은 [**`SPINESETSCALE`**](#spinesetscale) 명령어의 영향을 받습니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - Spine 애니메이션의 원본 좌표축 위치를 반환합니다.
:::

----
#### SPINEWIDTH, SPINEHEIGHT

**`int SPINEWIDTH int spineID`**

**`int SPINEHEIGHT int spineID`**

지정된 Spine 애니메이션의 너비 또는 높이를 가져옵니다. 가져온 값은 [**`SPINESETSCALE`**](#spinesetscale) 명령어의 영향을 받습니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - Spine 애니메이션의 너비 또는 높이를 반환합니다.
:::

----
#### SPINESETPOS, SPINEMOVE

**`int SPINESETPOS int spineID, int posX, int posY`**

**`int SPINEMOVE int spineID, int offsetX, int offsetY`**

사용 방식은 [**`SPRITESETPOS`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITESETPOS.20str.20spriteName.2C.20int.20posx.2C.20int.20posy), [**`SPRITEMOVE`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITEMOVE.20str.20spriteName.2C.20int.20movex.2C.20int.20movey) 명령어와 유사하며, 지정된 Spine 애니메이션의 드로잉 위치를 설정하거나 오프셋합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **int posX**
  - X 드로잉 위치를 지정합니다.
- **int posY**
  - Y 드로잉 위치를 지정합니다.
- **int offsetX**
  - X 드로잉 위치의 오프셋량을 지정합니다.
- **int offsetY**
  - Y 드로잉 위치의 오프셋량을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. Spine 애니메이션이 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### SPINESETSCALE

**`int SPINESETSCALE int spineID, int scale`**

**`int SPINESETSCALE int spineID, int scaleX, int scaleY`**

지정된 Spine 애니메이션의 확대/축소 비율을 설정합니다.

- 이 명령어는 다음 명령어의 출력 결과에 영향을 줍니다:
  - [**`SPINESRCX, SPINESRCY`**](#spinesrcx-spinesrcy)
  - [**`SPINEWIDTH, SPINEHEIGHT`**](#spinewidth-spineheight)

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **int scale**
  - 전체 확대/축소량을 지정합니다. `100` 입력은 `100%`를 의미합니다.
- **int scaleX**
  - X 확대/축소량을 지정합니다. `100` 입력은 `100%`를 의미합니다.
- **int scaleY**
  - Y 확대/축소량을 지정합니다. `100` 입력은 `100%`를 의미합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. Spine 애니메이션이 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### SPINEHASANIM, SPINEHASSKIN

**`int SPINEHASANIM int spineID, str animName`**

**`int SPINEHASSKIN int spineID, str skinName`**

지정된 Spine 애니메이션에 특정 애니메이션 또는 스킨이 존재하는지 확인합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **str animName**
  - 애니메이션 이름을 지정합니다. 이름은 대소문자를 구분하지 않습니다.
- **str skinName**
  - 스킨 이름을 지정합니다. 이름은 대소문자를 구분하지 않습니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 애니메이션 또는 스킨 존재 여부를 나타냅니다. 존재할 경우 `0이 아닌 값`을 반환합니다.
:::

----
#### SPINESETANIM

**`int SPINESETANIM int spineID, int trackIndex, str animName(, int isLoop = 0)`**

지정된 Spine 애니메이션에 특정 애니메이션을 설정합니다. 애니메이션 이름이 비어 있으면 지정된 트랙 인덱스의 기존 애니메이션이 제거됩니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **int trackIndex**
  - 애니메이션의 트랙 인덱스를 지정합니다.
- **str animName**
  - 애니메이션 이름을 지정합니다. 이름은 대소문자를 구분하지 않습니다. 애니메이션 이름이 비어 있으면 지정된 트랙 인덱스의 기존 애니메이션이 제거됩니다.
- **int isLoop = 0**
  - 애니메이션 반복 여부를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 애니메이션 설정 성공 여부를 나타냅니다. 성공적으로 설정하거나 제거했을 경우 `0이 아닌 값`을 반환합니다. Spine 애니메이션이 생성되지 않았거나, 지정된 애니메이션이 존재하지 않을 경우 `0`을 반환합니다.
:::

----
#### SPINEADDANIM

**`int SPINEADDANIM int spineID, int trackIndex, str animName(, int isLoop = 0, int delay = 1000)`**

지정된 Spine 애니메이션에 특정 애니메이션을 중첩합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **int trackIndex**
  - 애니메이션의 트랙 인덱스를 지정합니다.
- **str animName**
  - 애니메이션 이름을 지정합니다. 이름은 대소문자를 구분하지 않습니다.
- **int isLoop = 0**
  - 애니메이션 반복 여부를 지정합니다.
- **int delay = 1000**
  - 애니메이션 재생 지연 시간을 지정합니다. 단위는 밀리초입니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 애니메이션 중첩 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. Spine 애니메이션이 생성되지 않았거나, 지정된 애니메이션이 존재하지 않을 경우 `0`을 반환합니다.
:::

----
#### SPINESETSKIN

**`int SPINESETSKIN int spineID, str skinName`**

지정된 Spine 애니메이션에 특정 스킨을 설정합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **str skinName**
  - 스킨 이름을 지정합니다. 이름은 대소문자를 구분하지 않습니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 스킨 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. Spine 애니메이션이 생성되지 않았거나, 지정된 스킨이 존재하지 않을 경우 `0`을 반환합니다.
:::

----
#### SPINESETTIME, SPINEUPDATETIME

**`int SPINESETTIME int spineID, int millsec`**

**`int SPINEUPDATETIME int spineID, int millsec`**

지정된 Spine 애니메이션에 재생 시간을 설정하거나 진행시킵니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **int millsec**
  - 재생 시간을 지정합니다. 단위는 밀리초입니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. Spine 애니메이션이 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### SPINETIMESCALE

**`int SPINETIMESCALE int spineID, int timeScale`**

지정된 Spine 애니메이션에 시간 배율을 설정합니다. 이 속성은 Spine 애니메이션의 재생 속도를 제어합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **int timeScale**
  - 시간 배율을 지정합니다. `100` 입력은 `100%`를 의미합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. Spine 애니메이션이 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### SPINEANIMLIST, SPINESKINLIST

**`int SPINEANIMLIST int spineID, str Array_List_HashList`**

**`int SPINESKINLIST int spineID, str Array_List_HashList`**

지정된 Spine 애니메이션의 애니메이션 목록 또는 스킨 목록을 가져옵니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **str Array_List_HashList**
  - 애니메이션 목록 또는 스킨 목록을 받을 문자열형 참조 가능 배열, 리스트, 해시 리스트를 지정합니다.
    - 리스트, 해시 리스트의 경우: 변수의 기존 내용이 지워지고 새 내용으로 채워집니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 가져온 애니메이션 또는 스킨 개수를 반환합니다. Spine 애니메이션이 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
#### CBGSETSPINE

**`int CBGSETSPINE int spineID, int x, int y, int zdepth`**

사용 방식은 [**`CBGSETG`**](https://osdn.net/projects/emuera/wiki/excom#h5-CBGSETG.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20zdepth) 명령어와 유사하며, 지정된 Spine 애니메이션을 클라이언트 배경에 표시합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID를 지정합니다.
- **int x**
  - X 위치를 지정합니다.
- **int y**
  - Y 위치를 지정합니다.
- **int zdepth**
  - Z축 깊이를 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. Spine 애니메이션이 생성되지 않았을 경우 `0`을 반환합니다.
:::

----
### 오디오 관련 {#AudioRelated}

----
#### AUDIOCREATE

**`int AUDIOCREATE str audioName, str srcAudio(, int volume, any startTime, any duration)`**

기존 `srcAudio`를 기반으로 새 Audio를 생성합니다.

`startTime` 및 `duration`을 지정할 때는 원본 Audio가 참조하는 오디오 파일의 총 재생 시간을 기준으로 합니다.

`startTime` 및 `duration`은 `TimeSpan` 또는 `ms(밀리초)`를 입력할 수 있습니다. `TimeSpan` 작성 형식은 [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) 문서의 예제 부분을 참조하십시오.

:::tip[매개변수]
- **str audioName**
  - 새 Audio의 이름을 지정합니다.
- **str srcAudio**
  - 참조할 원본 Audio 이름을 지정합니다.
- **int volume**
  - 새 Audio의 재생 볼륨을 지정합니다. 생략 가능 `(원본 Audio의 기본 볼륨)`.
- **any startTime**
  - 새 Audio의 시작 시간을 지정합니다. 생략 가능 `(원본 Audio의 시작 시간)`.
- **any duration**
  - 새 Audio의 재생 지속 시간을 지정합니다. 생략 가능 `(원본 Audio의 재생 지속 시간)`.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio 생성 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. Audio 이름이 이미 존재하거나, 원본 Audio가 존재하지 않을 경우 `0`을 반환합니다.
:::

:::note[사용 예]
```
AUDIOCREATE "New", "Old", 80			; 새 Audio "New"를 생성하고 볼륨을 80으로 설정
AUDIOCREATE "New", "Old", , "00:01:10", "10000"	; 새 Audio "New"를 생성하고 시작 시간을 1분 10초, 재생 지속 시간을 10000밀리초로 설정
```
:::

----
#### AUDIOCREATEFROMFILE

**`int AUDIOCREATEFROMFILE str audioName, str filePath(, int volume, any startTime, any duration)`**

지정된 `filePath` 오디오 파일을 기반으로 새 Audio를 생성합니다.

`startTime` 및 `duration`을 지정할 때는 오디오 파일의 총 재생 시간을 기준으로 합니다.

`startTime` 및 `duration` 매개변수는 `TimeSpan` 또는 `ms(밀리초)` 값을 받을 수 있습니다. `TimeSpan` 작성 형식은 [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) 문서의 예제 부분을 참조하십시오.

:::tip[매개변수]
- **str audioName**
  - 새 Audio의 이름을 지정합니다.
- **str filePath**
  - 참조할 오디오 파일의 상대 경로를 지정합니다. 이 경로는 메인 디렉터리에서 시작하도록 보장되어야 합니다.
- **int volume**
  - 새 Audio의 재생 볼륨을 지정합니다. 생략 가능 `(100)`.
- **any startTime**
  - 새 Audio의 시작 시간을 지정합니다. 생략 가능 `(0)`.
- **any duration**
  - 새 Audio의 재생 지속 시간을 지정합니다. 생략 가능 `(오디오 파일의 총 재생 시간)`.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio 생성 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. Audio 이름이 이미 존재하거나, 오디오 파일이 존재하지 않을 경우 `0`을 반환합니다.
:::

:::note[사용 예]
```
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", 80			; 새 Audio "New"를 생성하고 볼륨을 80으로 설정
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", , "00:01:10"	; 새 Audio "New"를 생성하고 시작 시간을 1분 10초로 설정
```
:::

----
#### AUDIOCREATED

**`int AUDIOCREATED str audioName`**

지정된 Audio가 이미 생성되었는지 확인합니다.

:::tip[매개변수]
- **str audioName**
  - Audio 이름을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio 생성 여부를 나타냅니다. Audio가 존재할 경우 `0이 아닌 값`을 반환합니다.
:::

----
#### AUDIOVOLUME

**`int AUDIOVOLUME str audioName`**

지정된 Audio의 볼륨을 가져옵니다.

:::tip[매개변수]
- **str audioName**
  - Audio 이름을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio의 볼륨을 반환합니다. Audio가 존재하지 않을 경우 `0`을 반환합니다.
:::

----
#### AUDIOSTARTTIME

**`int AUDIOSTARTTIME str audioName`**

지정된 Audio의 재생 시작 시간을 가져옵니다. 단위는 `ms(밀리초)`입니다.

:::tip[매개변수]
- **str audioName**
  - Audio 이름을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio의 시작 시간을 반환합니다. Audio가 존재하지 않을 경우 `0`을 반환합니다.
:::

----
#### AUDIODURATION

**`int AUDIODURATION str audioName`**

지정된 Audio의 재생 지속 시간을 가져옵니다. 단위는 `ms(밀리초)`입니다.

:::tip[매개변수]
- **str audioName**
  - Audio 이름을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio의 지속 시간을 반환합니다. Audio가 존재하지 않을 경우 `0`을 반환합니다.
:::

----
#### AUDIODISPOSE

**`int AUDIODISPOSE str audioName`**

지정된 임시 Audio를 제거합니다. Audio가 점유하는 메모리는 재생 종료 후 해제됩니다. 런타임 중 생성된 임시 Audio만 제거할 수 있습니다.

:::tip[매개변수]
- **str audioName**
  - 제거할 Audio의 이름을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio 제거 성공 여부를 나타냅니다. 성공 시 `0이 아닌 값`을 반환합니다. Audio가 존재하지 않거나, 지정된 Audio가 임시 Audio가 아닐 경우 `0`을 반환합니다.
:::

----
#### AUDIODISPOSEALL

**`void AUDIODISPOSEALL`**

런타임 중 생성된 모든 임시 Audio를 제거합니다. Audio가 점유하는 메모리는 재생 종료 후 해제됩니다. 내장형 Audio는 영향을 받지 않습니다.

----
#### CURRENTBGM

**`str CURRENTBGM`**

현재 재생 중인 배경 음악 이름을 가져옵니다.

:::tip[매개변수]
- 없음
:::

:::tip[반환값]
- **RESULTS:0**
  - 현재 재생 중인 배경 음악 이름입니다. 아무 음악도 재생되지 않을 경우 `빈 문자열`을 반환합니다.
:::

----
#### PAUSEBGM

**`void PAUSEBGM (int fadeOut = 0)`**

현재 재생 중인 배경 음악을 일시 정지합니다.

:::tip[매개변수]
- **int fadeOut = 0**
  - 페이드 아웃 효과의 지속 시간을 지정합니다. 단위는 `ms(밀리초)`이며, 값이 `생략`되거나 `0 이하`일 경우 효과 없음, 최대값은 `10000`입니다.
:::

----
### 모듈 관련 {#ModuleRelated}

----
#### MODULELIST

**`int MODULELIST str Array_List_HashList`**

로드된 모듈 ID 목록을 가져옵니다.

:::tip[매개변수]
- **str Array_List_HashList**
  - 모듈 ID 목록을 받을 문자열형 참조 가능 배열, 리스트, 해시 리스트를 지정합니다.
    - 리스트, 해시 리스트의 경우: 변수의 기존 내용이 지워지고 새 내용으로 채워집니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 가져온 모듈 ID 수를 반환합니다.  
    가져온 수는 배열 길이, 해시 리스트 특성에 영향을 받을 수 있습니다.
:::

----
#### MODULEPATH

**`str MODULEPATH str modID`**

지정된 로드된 모듈의 폴더 상대 경로를 가져옵니다.

:::tip[매개변수]
- **str modID**
  - 폴더 경로를 가져올 모듈 ID를 지정합니다.
:::

:::tip[반환값]
- **RESULTS:0**
  - 가져온 폴더 상대 경로를 반환합니다. 모듈 ID가 존재하지 않거나 로드되지 않았을 경우 `빈 문자열`을 반환합니다.
:::

:::note[사용 예]
```
PRINTSL MODULEPATH("MyMod")			; "mod/MyMod v1.0/" 출력
```
:::

----
#### GETRESOURCEEXT

**`int GETRESOURCEEXT str Array_List_HashList(, int option = 1P0 | 1P1)`**

모든 런처가 지원하는 이미지, 오디오 리소스 파일 확장자를 가져옵니다. 확장자에는 `.` 기호가 포함되며 모두 소문자입니다.

:::tip[매개변수]
- **str Array_List_HashList**
  - 파일 확장자를 받을 문자열형 참조 가능 배열, 리스트, 해시 리스트를 지정합니다.
    - 리스트, 해시 리스트의 경우: 변수의 기존 내용이 지워지고 새 내용으로 채워집니다.
- **int option = 1P0 | 1P1**
  - 필요한 리소스 타입을 지정합니다. `1P0` = 이미지 리소스, `1P1` = 오디오 리소스, 생략 가능 `(1P0 | 1P1)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 가져온 확장자 수를 반환합니다.  
    가져온 수는 배열 길이, 해시 리스트 특성에 영향을 받을 수 있습니다.
:::

:::note[사용 예]
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

; 출력 결과
; Image Ext: .bmp .jpg .jpeg .png .webp .tiff .exif .gif
; Audio Ext: .mp3 .mpeg3 .wav .wave .flac .fla .aiff .aif .aifc .aac .adt .adts .m2ts .mp2 .3g2 .3gp2 .3gp .3gpp .m4a .m4v .mp4v .mp4 .mov .asf .wm .wmv .wma .mp1 .avi .ac3 .ec3 .ogg
```
:::

----
#### TEXT

**`str TEXT anyParams keyName`**

지정된 키 이름을 기반으로 다국어 텍스트를 가져옵니다. 구체적인 사용법은 [**`다국어 기능`**](/#Multilingual) 부분을 참조하십시오.

:::tip[매개변수]
- **anyParams keyName**
  - 다국어 텍스트의 키 이름을 지정합니다. 입력된 키 이름은 대소문자를 구분하지 않습니다.
:::

:::tip[반환값]
- **RESULTS:0**
  - 지정된 다국어 텍스트를 반환합니다. 키 이름이 존재하지 않거나 경로 오류일 경우 `빈 문자열`을 반환합니다.
:::

:::note[사용 예]
```
LOCALS '= TEXT("START_GAME")
PRINTSL TEXT("ITEM")
PRINTSL TEXT("ITEM", "APPLE", "DESC")
```
:::

----
#### TEXTLIST

**`int TEXTLIST str Array_List_HashList, anyParams keyName`**

지정된 키 이름을 기반으로 다국어 텍스트 목록을 가져옵니다. 구체적인 사용법은 [**`다국어 기능`**](/#Multilingual) 부분을 참조하십시오.

:::tip[매개변수]
- **str Array_List_HashList**
  - 텍스트 목록을 받을 문자열형 참조 가능 배열, 리스트, 해시 리스트를 지정합니다.
    - 리스트, 해시 리스트의 경우: 변수의 기존 내용이 지워지고 새 내용으로 채워집니다.
- **anyParams keyName**
  - 다국어 텍스트의 키 이름을 지정합니다. 입력된 키 이름은 대소문자를 구분하지 않습니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 가져온 텍스트 목록 요소 수를 반환합니다. 키 이름이 존재하지 않거나 경로 오류일 경우 `0`을 반환합니다.  
    가져온 요소 수는 배열 길이, 해시 리스트 특성에 영향을 받을 수 있습니다.
:::

:::note[사용 예]
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

로드된 다국어 ID 목록을 가져옵니다. 가져온 ID는 자동으로 `하이픈(-)`이 `밑줄(_)`로 대체됩니다.

:::tip[매개변수]
- **str Array_List_HashList**
  - 다국어 ID 목록을 받을 문자열형 참조 가능 배열, 리스트, 해시 리스트를 지정합니다.
    - 리스트, 해시 리스트의 경우: 변수의 기존 내용이 지워지고 새 내용으로 채워집니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 가져온 다국어 ID 수를 반환합니다.  
    가져온 ID 수는 배열 길이, 해시 리스트 특성에 영향을 받을 수 있습니다.
:::

----
### MAP 콜렉션 관련 {#MapCollectionRelated}

----
#### MAP_COPY

**`int MAP_COPY str srcMap, str destMap`**

지정된 소스 Map의 모든 요소를 대상 Map에 복사합니다.

:::tip[매개변수]
- **str srcMap**
  - 소스 Map을 지정합니다.
- **str destMap**
  - 대상 Map을 지정합니다.
:::

:::tip[반환값]
- **RESULT:0**
  - 대상 Map의 요소 수를 반환합니다. 소스 Map 또는 대상 Map을 찾지 못했을 경우 `(-1)`을 반환합니다.
:::

----
### 제어문 {#ControlStatement}

----
#### FOREACH-NEXTF

**`FOREACH-NEXTF same valueVar, any Collection(, VALUE)`**

**`FOREACH-NEXTF sameAsKey keyVar, any Dict, KEY`**

**`FOREACH-NEXTF sameAsDictKey dictKeyVar, any DictCollection, DICTKEY`**

**`FOREACH-NEXTF sameAsKey keyVar, same valueVar, any Dict`**

사용 방식은 [**`FOR-NEXT`**](https://osdn.net/projects/emuera/wiki/excom#h5-FOR.20.3C.E6.95.B0.E5.80.A4.E5.9E.8B.E5.A4.89.E6.95.B0.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E.7B.2C.20.3C.E6.95.B0.E5.BC.8F.3E.7D) 제어문과 유사하며, 지정된 콜렉션의 모든 요소를 순회합니다.

이 제어문의 열거자 매개변수는 함수와 함께 스택에 들어가고 나옵니다.

:::tip[매개변수]
- **sameAsDictKey dictKeyVar**
  - 메인 키 이름을 받을 변수를 지정합니다. 변수의 값 타입은 딕셔너리 콜렉션의 메인 키 타입과 일치해야 합니다.
- **sameAsKey keyVar**
  - 키 이름을 받을 변수를 지정합니다. 변수의 값 타입은 딕셔너리의 키 타입과 일치해야 합니다.
- **same valueVar**
  - 값을 받을 변수를 지정합니다. 변수의 값 타입은 콜렉션의 값 타입과 일치해야 합니다.
- **any Collection**
  - 순회할 임의의 배열, 리스트, 해시 리스트, 딕셔너리 등 콜렉션을 지정합니다.
- **any Dict**
  - 순회할 임의의 딕셔너리를 지정합니다.
- **any DictCollection**
  - 순회할 임의의 딕셔너리 콜렉션을 지정합니다.
- **DICTKEY**
  - 딕셔너리 콜렉션의 메인 키 요소를 순회함을 지정합니다. 생략 불가.
- **KEY**
  - 딕셔너리의 키 요소를 순회함을 지정합니다. 생략 불가.
- **VALUE**
  - 콜렉션의 값 요소를 순회함을 지정합니다. 생략 가능.
:::

:::note[사용 예]
```
#DICTS_DICT_SI CREATURE_DICT

CREATURE_DICT:"동물":"🐶" = 11
CREATURE_DICT:"동물":"🐱" = 22
CREATURE_DICT:"식물":"🌳" = 33
CREATURE_DICT:"식물":"🌼" = 44

FOREACH LOCAL, CREATURE_DICT:"동물"
	PRINTFORM {LOCAL},
NEXTF
PRINTL
; "11,22," 출력

FOREACH LOCALS, CREATURE_DICT:"동물", KEY
	PRINTFORM %LOCALS%,
NEXTF
PRINTL
; "🐶,🐱," 출력

FOREACH LOCALS, CREATURE_DICT, DICTKEY
	PRINTFORM %LOCALS%,
NEXTF
PRINTL
; "동물,식물," 출력

FOREACH LOCALS, LOCAL, CREATURE_DICT:"식물"
	PRINTFORM %LOCALS%-{LOCAL},
NEXTF
PRINTL
; "🌳-33,🌼-44," 출력
```
:::

----
### 변수 키워드 {#VariableKeyword}

----
#### RESIZE

이 키워드는 크기를 재설정해야 하는 사용자 정의 배열 변수를 표시하는 데 사용됩니다. 예를 들어 `#DIM` 및 `#DICT_DIM` 등이 있습니다.

이 키워드는 **`CONST`** , **`REF`** , **`SAVEDATA`**, **`CHARADATA`** 키워드와 동시에 선언할 수 없습니다.

**`LOCAL`** 및 **`LOCALS`** 배열 변수는 이미 이 키워드를 내장하고 있습니다.

----
#### HARDCHECK

이 키워드는 딕셔너리 변수가 사용자 입력 메인 키와 서브 키에 대해 엄격한 검사를 수행할지 제어합니다.

- 이 키워드를 선언하지 않으면, 존재하지 않는 메인 키 또는 서브 키에 대해 값을 가져올 때 `0` 또는 `빈 문자열`이 반환되며, 존재하지 않는 메인 키에 대해 값을 할당할 때 해당 메인 키가 자동으로 추가되어 할당이 원활히 이루어집니다.
- 이 키워드를 선언하면, 존재하지 않는 메인 키 또는 서브 키에 대해 값을 가져올 때 오류가 발생하며, 존재하지 않는 메인 키에 대해 값을 할당할 때 오류가 발생합니다.

이 키워드는 딕셔너리 변수와 딕셔너리 콜렉션 변수에 사용될 수 있습니다. 예를 들어 `#DICT_II` , `#DICT_DIM` 및 `#DICT_DICT_SS` 등이 있습니다.

이 키워드는 **`REF`** 키워드와 동시에 선언할 수 없습니다.
