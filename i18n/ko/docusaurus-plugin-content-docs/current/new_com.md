---
sidebar_position: 3
sidebar_label: 추가 명령어
---

# 추가 명령어 {#NewCom}

### 텍스트 처리 관련 {#TextProcessRelated}

----
#### CHARATUW

**`str CHARATUW str text, int position`**

사용법은 [**`CHARATU`**](https://osdn.net/projects/emuera/wiki/excom#h5-CHARATU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.96.87.E5.AD.97.E4.BD.8D.E7.BD.AE.3E) 명령어와 유사하며, 텍스트에서 지정된 위치의 문자를 가져옵니다.

이 명령어는 복잡한 이모지 문자를 단일 문자로 인식합니다.

:::tip[매개변수]
- **str text**
  - 대상 텍스트 지정.
- **int position**
  - 문자 위치 지정.
:::

:::tip[반환값]
- **RESULTS:0**
  - 지정된 위치의 문자열 반환.
:::

:::note[사용 예]
```
PRINTSL CHARATUW("A👨‍👩‍👧‍👦A", 1)			;"👨‍👩‍👧‍👦" 출력
```
:::

----
#### FINDEMOJI

**`int FINDEMOJI str text, strArray array`**

텍스트 내 모든 이모지 문자를 찾아 결과를 `array` 배열에 출력합니다.

:::tip[매개변수]
- **str text**
  - 대상 텍스트 지정.
- **strArray array**
  - 이모지 문자 결과를 받을 문자열 배열 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 발견된 이모지 문자 수 반환.  
    수신 배열의 마지막 차원 길이에 따라 결과가 제한될 수 있음.
:::

:::note[사용 예]
```
PRINTVL FINDEMOJI("A👨‍👩‍👧‍👦AA😀A", LOCALS)		;"2" 출력, LOCALS:0 ="👨‍👩‍👧‍👦", LOCALS:1 ="😀"
```
:::

----
#### FLOATTOSTR

**`str FLOATTOSTR int value, int div(, str format = "")`**

부동 소수점 숫자의 서식화된 텍스트 처리를 위해 사용됩니다.

:::tip[매개변수]
- **int value**
  - 피제수(나눠지는 수) 지정.
- **int div**
  - 제수(나누는 수) 지정. `0`일 경우 오류 발생.
- **str format = ""**
  - 문자열 형식 지정.
:::

:::tip[반환값]
- **RESULTS:0**
  - 문자열 결과 반환.
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

[**`REPLACE`**](modify_com#replace) 명령어에서 분리된 새 명령어로, 텍스트 치환 시 `replaceArray` 배열의 문자열을 순차적으로 사용하여 대체합니다.

:::tip[매개변수]
- **str text**
  - 처리할 텍스트 지정.
- **str match**
  - 매칭할 텍스트 지정.
- **strArray1D replaceArray**
  - 대체용 문자열 배열 지정.
:::

:::tip[반환값]
- **RESULTS:0**
  - 문자열 결과 반환.
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

[**`string.join`**](https://learn.microsoft.com/dotnet/api/system.string.join?view=netframework-4.8#system-string-join(system-string-system-string())) 텍스트 결합 기능 구현.

:::tip[매개변수]
- **str delimiter = ","**
  - 결합 시 구분자 지정. 생략 가능 `(",")`.
- **anyParams value**
  - 0개 이상의 값 지정.
:::

:::tip[반환값]
- **RESULTS:0**
  - 결합된 문자열 결과 반환.
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

사용법은 [**`STRFINDU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRFINDU.20.3C.E6.A4.9C.E7.B4.A2.E5.AF.BE.E8.B1.A1.3E.2C.20.3C.E6.A4.9C.E7.B4.A2.E3.81.99.E3.82.8B.E6.96.87.E5.AD.97.E5.88.97.3E.7B.2C.20.3C.E9.96.8B.E5.A7.8B.E3.82.A4.E3.83.B3.E3.83.87.E3.83.83.E3.82.AF.E3.82.B9.3E.7D) 명령어와 유사하며, 텍스트에서 지정된 문자열을 검색하여 인덱스 위치를 가져옵니다.

이 명령어는 복잡한 이모지 문자를 단일 문자로 인식합니다.

:::tip[매개변수]
- **str text**
  - 대상 텍스트 지정.
- **str word**
  - 검색할 문자열 지정.
- **int start = 0**
  - 검색 시작 위치 지정. 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 검색된 인덱스 위치 반환. 찾지 못한 경우 `-1` 반환.
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

사용법은 [**`STRFIND`**](modify_com#strfind) 명령어와 유사하지만, "역순"으로 텍스트 내 지정된 문자열을 검색하여 인덱스 위치를 가져옵니다.

**`STRFINDLAST`** 명령어는 이모지 문자 처리 시 표시 너비 계산을 통해 문자 길이를 도출합니다.

**`STRFINDLASTUW`** 명령어는 복잡한 이모지 문자를 단일 문자로 인식합니다.

:::tip[매개변수]
- **str text**
  - 대상 텍스트 지정.
- **str word**
  - 검색할 문자열 지정.
- **int start = lastIndex**
  - 검색 시작 위치 지정. 생략 가능 `(마지막 인덱스 위치)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 검색된 인덱스 위치 반환. 찾지 못한 경우 `-1` 반환.
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

[**`string.format`**](https://learn.microsoft.com/dotnet/api/system.string.format?view=netframework-4.8#Starting) 서식화된 텍스트 처리 구현.

:::tip[매개변수]
- **str formatText**
  - 서식 문자열 지정.
- **anyParams value**
  - 0개 이상의 값 지정.
:::

:::tip[반환값]
- **RESULTS:0**
  - 문자열 결과 반환. 서식화 실패 시 원본 텍스트 반환.
:::

:::note[사용 예]
```
PRINTSL STRFORMAT("aaa_{0}__{1}", 222, "33")	;"aaa_222__33" 출력
```
:::

----
#### STRLENSUW

**`int STRLENSUW str text`**

사용법은 [**`STRLENSU`**](https://osdn.net/projects/emuera/wiki/excom#h5-STRLENSU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E) 명령어와 유사하며, 유니코드 인코딩을 기반으로 텍스트의 문자 수를 가져옵니다.

이 명령어는 복잡한 이모지 문자를 단일 문자로 인식합니다.

:::tip[매개변수]
- **str text**
  - 대상 텍스트 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 텍스트의 문자 수 반환.
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

[**`string.remove`**](https://learn.microsoft.com/dotnet/api/system.string.remove?view=netframework-4.8) 지정된 범위의 텍스트를 제거하는 기능 구현.

**`STRREMOVE`** 명령어는 이모지 문자 처리 시 표시 너비 계산을 통해 문자 길이를 도출합니다.  
선택 위치가 긴 문자 중간에 걸릴 경우 해당 문자 시작 위치로 후퇴합니다. 즉, 시작 위치에 걸린 문자는 포함되고, 끝 위치에 걸린 문자는 무시됩니다.

**`STRREMOVEUW`** 명령어는 복잡한 이모지 문자를 단일 문자로 인식합니다.

:::tip[매개변수]
- **str text**
  - 처리할 텍스트 지정.
- **int start = 0**
  - 제거 시작 위치 지정. 생략 가능 `(0)`.
- **int count = totalLength**
  - 제거할 문자 수 지정. 생략 가능 `(텍스트 전체 길이)`.
:::

:::tip[반환값]
- **RESULTS:0**
  - 문자열 결과 반환.
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

**`int STRSPLIT str text, strArray array(, str delimiter = ",")`**

사용법은 [**`SPLIT`**](modify_com#split) 명령어와 유사하며, 지정된 문자열을 기준으로 텍스트를 분할합니다.

:::tip[매개변수]
- **str text**
  - 분할할 텍스트 지정.
- **strArray array**
  - 분할된 텍스트를 저장할 배열 지정.
- **str delimiter = ","**
  - 분할 구분자 지정. 생략 가능 `(",")`.
:::

:::tip[반환값]
- **RESULT:0**
  - 분할된 문자열 개수 반환.
:::

:::note[사용 예]
```
LOCAL = STRSPLIT("111,AAA,22", LOCALS)			;LOCAL에 3 할당.
PRINTSL LOCALS:0					;"111" 출력.
LOCAL = STRSPLIT("111,AAA__22", LOCALS, "__")		;LOCAL에 2 할당.
PRINTSL LOCALS:1					;"22" 출력.
```
:::

----
#### STRTRIM

**`str STRTRIM str text(, str trimChars, int trimDirection = 0)`**

[**`string.trim`**](https://learn.microsoft.com/dotnet/api/system.string.trim?view=netframework-4.8) 텍스트 앞뒤의 지정된 문자 제거 기능 구현.

:::tip[매개변수]
- **str text**
  - 처리할 텍스트 지정.
- **str trimChars**
  - 제거할 문자 지정. 생략 시 시스템 기본 공백 문자(스페이스, 탭 등) 제거.
- **int trimDirection = 0**
  - 제거 방향 지정. `1` = 앞부분 제거, `2` = 뒷부분 제거, 기타 값은 앞뒤 모두 제거.
:::

:::tip[반환값]
- **RESULTS:0**
  - 문자열 결과 반환.
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

사용법은 [**`SUBSTRINGU`**](https://osdn.net/projects/emuera/wiki/excom#h5-SUBSTRINGU.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E.2C.20.3C.E6.95.B0.E5.BC.8F.3E) 명령어와 유사하며, 지정된 위치와 길이로 텍스트를 추출합니다.

이 명령어는 복잡한 이모지 문자를 단일 문자로 인식합니다.

:::tip[매개변수]
- **str text**
  - 대상 텍스트 지정.
- **int start = 0**
  - 추출 시작 위치 지정. 생략 가능 `(0)`.
- **int length = totalLength**
  - 추출 길이 지정. `음수` 입력 시 전체 텍스트 길이로 추출.
:::

:::tip[반환값]
- **RESULTS:0**
  - 추출된 텍스트 반환.
:::

:::note[사용 예]
```
PRINTSL SUBSTRINGUW("A👪BAB👪A", 0, 4)		;"A👪BA" 출력
PRINTSL SUBSTRINGUW("A👪BAB👪A", 5)		;"👪A" 출력
```
:::

----
#### TRYTOINT

**`int TRYTOINT str text`**

사용법은 [**`TOINT`**](https://osdn.net/projects/emuera/wiki/excom#h5-TOINT.20.3C.E6.96.87.E5.AD.97.E5.88.97.E5.BC.8F.3E) 명령어와 유사하지만, ISNUMERIC + TOINT의 중복 기능 문제를 피할 수 있습니다.

:::tip[매개변수]
- **str text**
  - 정수로 변환할 문자열 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 변환 성공 여부. 성공 시 `0이 아님` 반환.
- **RESULT:1**
  - 변환 결과 반환. 실패 시 `0` 반환.
:::

:::note[사용 예]
```
LOCAL = TRYTOINT("IO") ? RESULT:1 # 10
```
:::

----
### 변수, 배열 관련 {#VarAndArrayRelated}

----
#### ARRAYBIT

**`int ARRAYBIT anyArray array, str keyName(, int dimension = lastDim, str delimiter = ",")`**

두 번째 매개변수 `keyName`에 지정된 여러 인덱스 키 이름을 기반으로 첫 번째 매개변수 `array`에서 각 키가 위치한 인덱스 값을 검색하고, 인덱스 값을 OR 연산으로 중첩합니다.

배열의 인덱스 키를 검색하여 인덱스 값으로 사용할 수도 있고, 세 번째 매개변수 `dimension`을 `0`으로 지정하여 배열 내 요소를 직접 검색하여 인덱스 값으로 사용할 수도 있습니다.

지정된 인덱스 키를 찾지 못하거나 인덱스 값 범위가 `0 - 63`을 벗어나면 오류가 발생합니다.

이 명령어는 실험적 기능으로, 시스템이 적절한 코드를 상수로 리팩토링하는 특성을 활용하여 프로그램 실행 효율성을 높이는 데 목적이 있습니다.

:::tip[매개변수]
- **anyArray array**
  - 임의의 배열 지정.
- **str keyName**
  - 중첩할 인덱스 값의 키 이름 지정.
- **int dimension = lastDim**
  - 배열 인덱스 키가 위치한 차원 지정. 생략 시 배열 마지막 차원 사용. `0` 지정 시 배열 요소를 직접 검색하여 인덱스 값으로 사용.
- **str delimiter = ","**
  - 키 이름 구분자 지정. 생략 가능 `(",")`.
:::

:::tip[반환값]
- **RESULT:0**
  - 모든 인덱스 값이 OR 연산으로 중첩된 결과 반환.
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
; 위 코드는 다음과 동일:
LOCAL = 1 << GETNUM(EXAMPLE_ARRAY, "AAA")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "BBB")
LOCAL |= 1 << GETNUM(EXAMPLE_ARRAY, "DDD")

LOCAL = ARRAYBIT(EXAMPLE_ARRAY, "VALUE_0, VALUE_2", 0)	; LOCAL = 0B0101
; 위 코드는 다음과 동일:
LOCAL = 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_0")
LOCAL |= 1 << ARRAYFIND(EXAMPLE_ARRAY, "VALUE_2")
```
:::

----
#### ARRAYRESIZE

**`void ARRAYRESIZE anyArray1D array, int size1D(, int keepData = 0)`**

**`void ARRAYRESIZE anyArray2D array, int size1D, int size2D(, int keepData = 0)`**

**`void ARRAYRESIZE anyArray3D array, int size1D, int size2D, int size3D(, int keepData = 0)`**

지정된 배열의 크기를 재설정합니다.

첫 번째 매개변수 `array`는 **`RESIZE`** 키워드가 있는 사용자 정의 배열 변수만 지정 가능합니다:

- **`RESIZE`** 키워드는 사용자 정의 배열 변수와만 함께 정의할 수 있으며, **`GLOBAL`**, **`STATIC`**, **`DYNAMIC`** 키워드와 함께 사용할 수 있습니다.
- `LOCAL` 및 `LOCALS` 배열 변수에는 기본적으로 `RESIZE` 키워드가 포함됩니다.

`size1D`, `size2D`, `size3D` 매개변수 지정 시 배열 총 길이가 `1000000`을 초과하지 않도록 주의해야 합니다.  
지정된 각 차원의 길이가 현재 배열 길이와 완전히 동일하고 `keepData` 매개변수가 `0이 아닌 값`이면 아무 작업도 수행하지 않습니다.

정적 배열은 재설정 후 [**`RESETDATA`**](https://osdn.net/projects/emuera/wiki/excom#h5-RESETDATA) 명령어로 원래 길이로 재설정될 때까지 유지됩니다.  
동적 배열은 현재 함수 스택의 배열만 재설정되며, 이후 새 함수 스택에 진입할 때 생성되는 배열에는 영향을 미치지 않습니다.

:::tip[매개변수]
- **anyArray1|2|3D array**
  - 크기를 재설정할 배열 지정.
- **int size1D**
  - 배열의 첫 번째 차원 길이 지정.
- **int size2D**
  - 배열의 두 번째 차원 길이 지정.
- **int size3D**
  - 배열의 세 번째 차원 길이 지정.
- **int keepData = 0**
  - 배열의 원본 데이터 보존 여부 지정. `0이 아닌 값` 입력 시 데이터 보존.
:::

:::note[사용 예]
```
@TEST
#LOCALSIZE 1
#DIM DYNAMIC RESIZE DYNAMIC_ARRAY, 1, 1
#DIM STATIC_ARRAY, 1, 1, 1

ARRAYRESIZE LOCAL, 2		; TEST 함수의 LOCAL 배열 재설정 성공.
ARRAYRESIZE DYNAMIC_ARRAY, 2, 2	; DYNAMIC_ARRAY 배열 재설정 성공.
CALL TEST_1(DYNAMIC_ARRAY, STATIC_ARRAY)

@TEST_1(REF_ARRAY1, REF_ARRAY2)
#DIM REF REF_ARRAY1, 0, 0
#DIM REF REF_ARRAY2, 0, 0, 0

ARRAYRESIZE REF_ARRAY1, 2, 2	; 참조된 DYNAMIC_ARRAY 배열 재설정 성공.
ARRAYRESIZE REF_ARRAY2, 2, 2, 2	; 오류: 참조된 STATIC_ARRAY 배열에 RESIZE 키워드 미정의.
```
:::

----
#### ARRAYTIDY

**`int ARRAYTIDY anyArray array(, int start = 0, int end = lastDimLength, same emptyVal)`**

배열 내 요소 간 빈 값을 정리하여 빈 공간 없이 연속된 배열을 얻습니다.

다차원 배열의 경우 마지막 차원 요소만 처리하며, 이전 차원 인덱스 값을 직접 지정해야 합니다.

:::tip[매개변수]
- **anyArray array**
  - 정리할 임의의 배열 지정.
- **int start = 0**
  - 정리 시작 인덱스 지정.
- **int end = lastDimLength**
  - 정리 끝 인덱스+1 지정. 생략 시 배열 마지막 차원 길이 사용.
- **same emptyVal**
  - 빈 값으로 처리될 숫자 또는 문자열 지정. 첫 번째 매개변수 값 유형과 동일해야 함. 생략 가능(`0` 또는 `빈 문자열`).
:::

:::tip[반환값]
- **RESULT:0**
  - 정리 완료 후 요소 개수 반환.
:::

----
#### ARRAYFIND, ARRAYFINDLAST

**`int ARRAYFIND anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int ARRAYFINDLAST anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

사용법은 [**`FINDELEMENT, FINDLASTELEMENT`**](modify_com#findelement-findlastelement) 명령어와 유사하며, 배열 내 조건에 맞는 요소를 검색합니다.

이 명령어는 기본적으로 `정규식 미사용`, `부분 매칭 미사용`, `대소문자 구분`으로 설정되며, `option` 매개변수로 처리 옵션을 조정할 수 있습니다.

다차원 배열의 경우 마지막 차원 요소만 처리하며, 이전 차원 인덱스 값을 직접 지정해야 합니다.

:::tip[매개변수]
- **anyArray array**
  - 검색할 임의의 배열 지정.
- **same target**
  - 검색할 내용 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **int start = 0**
  - 검색 시작 인덱스 지정.
- **int end = lastDimLength**
  - 검색 끝 인덱스+1 지정. 생략 시 배열 마지막 차원 길이 사용.
- **int option = 0**
  - 처리 옵션 지정:
    -  `1P0` = 부분 매칭 사용
    -  `1P1` = 대소문자 무시
    -  `1P2` = 결과 반전
    -  `1P3` = 정규식 사용
:::

:::tip[반환값]
- **RESULT:0**
  - 검색 조건에 맞는 첫 번째 인덱스 값 반환. 찾지 못한 경우 `-1` 반환.
:::

:::note[사용 예]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P0 | 1P1)		; ARRAY:0 ~ ARRAY:7에서 "AA" 포함 및 대소문자 무시 요소 검색
PRINTVL ARRAYFIND(ARRAY, "AA", 0, 8, 1P2)		; ARRAY:0 ~ ARRAY:7에서 "AA"와 다른 요소 검색
PRINTVL ARRAYFINDLAST(ARRAY, "AA", 0, 8, 1P2)		; 뒤에서부터 ARRAY:0 ~ ARRAY:7에서 "AA"와 다른 요소 검색
PRINTVL ARRAYFIND(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)	; ARRAY:0 ~ ARRAY:7에서 "\\d+" 부분 매칭 요소 검색
PRINTVL ARRAYFIND(CARRAY_2D:TARGET:3:0, 22, 5)		; 캐릭터 TARGET의 CARRAY_2D:3:5 ~ CARRAY_2D:3:9에서 22와 같은 요소 검색
```
:::

----
#### VARLENGTH

**`int VARLENGTH anyArray array(, int dimension)`**

사용법은 [**`VARSIZE`**](modify_com#varsize) 명령어와 유사하며, 배열 각 차원의 길이를 가져옵니다.

두 번째 매개변수 `dimension`을 생략하면 배열 마지막 차원의 길이를 반환하며, `음수`를 입력하면 배열의 총 길이를 가져올 수 있습니다.

:::tip[매개변수]
- **anyArray array**
  - 임의의 배열 지정.
- **int dimension**
  - 배열의 차원 지정. 생략 시 배열 마지막 차원 길이 반환. `음수` 입력 시 배열 총 길이 가져옴.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 차원의 배열 길이 반환.
:::

----
### 리스트 관련 {#ListRelated}

----
#### LISTSIZE

**`int LISTSIZE anyList list`**

**`int LISTSIZE anyDict_anyList dictList`**

지정된 리스트의 요소 수를 가져옵니다.

리스트형 사전의 리스트 수를 가져오려면 [**`DICTITEMCOUNT`**](new_com#dictitemcount) 명령어를 사용하세요.

:::tip[매개변수]
- **anyList list**
  - 임의의 리스트 지정.
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 리스트의 요소 수 반환.
:::

----
#### LISTCLEAR

**`int LISTCLEAR anyList list(, int start = 0, int count = listCount)`**

**`int LISTCLEAR anyDict_anyList dictList(, int start = 0, int count = listCount)`**

지정된 리스트에서 지정된 범위의 요소를 제거합니다.

:::tip[매개변수]
- **anyList list**
  - 임의의 리스트 지정.
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전 지정.
- **int start = 0**
  - 제거할 요소 시작 위치 지정. 생략 가능 `(0)`.
- **int count = listCount**
  - 제거할 요소 개수 지정. 생략 가능 `(리스트 요소 수)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아님` 반환.
:::

----
#### LISTADD

**`int LISTADD anyList list, same value(, int index = listCount)`**

**`int LISTADD anyDict_anyList dictList, same value(, int index = listCount)`**

지정된 리스트에 지정된 요소를 추가합니다.

:::tip[매개변수]
- **anyList list**
  - 임의의 리스트 지정.
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전 지정.
- **same value**
  - 추가할 요소 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **int index = listCount**
  - 추가 위치 지정. 생략 가능 `(리스트 마지막 위치)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 요소가 추가된 인덱스 위치 반환.
:::

----
#### LISTFIND

**`int LISTFIND anyList list, same value(, int start = 0, int count = listCount)`**

**`int LISTFIND anyDict_anyList dictList, same value(, int start = 0, int count = listCount)`**

지정된 리스트에서 지정된 요소를 찾습니다.

:::tip[매개변수]
- **anyList list**
  - 임의의 리스트 지정.
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전 지정.
- **same value**
  - 검색할 요소 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **int start = 0**
  - 검색 시작 위치 지정. 생략 가능 `(0)`.
- **int count = listCount**
  - 검색할 요소 개수 지정. 생략 가능 `(리스트 요소 수)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 찾은 요소의 인덱스 위치 반환. 찾지 못한 경우 `(-1)` 반환.
:::

----
#### LISTREMOVE

**`int LISTREMOVE anyList list, same value`**

**`int LISTREMOVE anyDict_anyList dictList, same value`**

지정된 리스트에서 지정된 요소를 제거합니다.

:::tip[매개변수]
- **anyList list**
  - 임의의 리스트 지정.
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전 지정.
- **same value**
  - 제거할 요소 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 제거 결과 반환. 찾아서 제거했으면 `(0이 아님)`, 못 찾았으면 `(0)`.
:::

----
#### LISTREMOVEAT

**`int LISTREMOVEAT anyList list, int index`**

**`int LISTREMOVEAT anyDict_anyList dictList, int index`**

지정된 리스트에서 지정된 인덱스 위치의 요소를 제거합니다.

:::tip[매개변수]
- **anyList list**
  - 임의의 리스트 지정.
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전 지정.
- **int index**
  - 제거할 요소의 인덱스 위치 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `(0이 아님)` 반환.
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

지정된 소스 리스트의 모든 요소를 지정된 대상 배열 또는 리스트에 복사합니다.

:::tip[매개변수]
- **anyList srcList**
  - 임의의 소스 리스트 지정.
- **anyDict_anyList srcDictList**
  - 임의의 소스 리스트형 사전 지정.
- **sameArray destArray**
  - 대상 배열 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **sameList destList**
  - 대상 리스트 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **sameHashList destHashList**
  - 대상 해시 리스트 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **anyDict_sameList destDictList**
  - 대상 리스트형 사전 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **anyDict_sameHashList destDictHashList**
  - 대상 해시 리스트형 사전 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 대상 배열의 경우 성공적으로 복사된 요소 수 반환. 대상 리스트 및 리스트형 사전의 경우 복사 후 총 요소 수 반환.
:::

----
### 해시 리스트 관련 {#HashListRelated}

----
#### HASHLISTSIZE

**`int HASHLISTSIZE anyHashList list`**

**`int HASHLISTSIZE anyDict_anyHashList dictList`**

지정된 해시 리스트의 요소 수를 가져옵니다.

해시 리스트형 사전의 해시 리스트 수를 가져오려면 [**`DICTITEMCOUNT`**](new_com#dictitemcount) 명령어를 사용하세요.

:::tip[매개변수]
- **anyHashList list**
  - 임의의 해시 리스트 지정.
- **anyDict_anyHashList dictList**
  - 임의의 해시 리스트형 사전 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 해시 리스트의 요소 수 반환.
:::

----
#### HASHLISTCLEAR

**`int HASHLISTCLEAR anyHashList list`**

**`int HASHLISTCLEAR anyDict_anyHashList dictList`**

지정된 해시 리스트의 모든 요소를 제거합니다.

:::tip[매개변수]
- **anyHashList list**
  - 임의의 해시 리스트 지정.
- **anyDict_anyHashList dictList**
  - 임의의 해시 리스트형 사전 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아님` 반환.
:::

----
#### HASHLISTADD

**`int HASHLISTADD anyHashList list, same value`**

**`int HASHLISTADD anyDict_anyHashList dictList, same value`**

지정된 해시 리스트에 지정된 값을 추가합니다.

:::tip[매개변수]
- **anyHashList list**
  - 임의의 해시 리스트 지정.
- **anyDict_anyHashList dictList**
  - 임의의 해시 리스트형 사전 지정.
- **same value**
  - 추가할 값 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 추가 결과 반환. 지정된 값 추가 성공 시 `0이 아님`, 값 이미 존재 시 `0`.
:::

----
#### HASHLISTHAS

**`int HASHLISTHAS anyHashList list, same value`**

**`int HASHLISTHAS anyDict_anyHashList dictList, same value`**

지정된 해시 리스트에 지정된 값이 존재하는지 확인합니다.

:::tip[매개변수]
- **anyHashList list**
  - 임의의 해시 리스트 지정.
- **anyDict_anyHashList dictList**
  - 임의의 해시 리스트형 사전 지정.
- **same value**
  - 확인할 값 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 확인 결과 반환. 값 존재 시 `0이 아님`, 아니면 `0`.
:::

----
#### HASHLISTREMOVE

**`int HASHLISTREMOVE anyHashList list, same value`**

**`int HASHLISTREMOVE anyDict_anyHashList dictList, same value`**

지정된 해시 리스트에서 지정된 값을 제거합니다.

:::tip[매개변수]
- **anyHashList list**
  - 임의의 해시 리스트 지정.
- **anyDict_anyHashList dictList**
  - 임의의 해시 리스트형 사전 지정.
- **same value**
  - 제거할 값 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 제거 결과 반환. 값 찾아 제거 성공 시 `0이 아님`, 못 찾았으면 `0`.
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

지정된 소스 해시 리스트의 모든 요소를 지정된 대상 배열 또는 리스트에 복사합니다.

:::tip[매개변수]
- **anyHashList srcList**
  - 임의의 소스 해시 리스트 지정.
- **anyDict_anyHashList srcDictList**
  - 임의의 소스 해시 리스트형 사전 지정.
- **sameArray destArray**
  - 대상 배열 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **sameList destList**
  - 대상 리스트 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **sameHashList destHashList**
  - 대상 해시 리스트 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **anyDict_sameList destDictList**
  - 대상 리스트형 사전 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **anyDict_sameHashList destDictHashList**
  - 대상 해시 리스트형 사전 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 대상 배열의 경우 성공적으로 복사된 요소 수 반환. 대상 리스트 및 리스트형 사전의 경우 복사 후 총 요소 수 반환.
:::

----
### 사전 관련 {#DictRelated}

----
#### DICTSIZE

**`int DICTSIZE anyanyDict dict`**

**`int DICTSIZE anyDict_anyanyDict dictDict`**

지정된 사전의 요소 수를 가져옵니다.

사전형 사전의 사전 수를 가져오려면 [**`DICTITEMCOUNT`**](new_com#dictitemcount) 명령어를 사용하세요.

:::tip[매개변수]
- **anyanyDict dict**
  - 임의의 사전 지정.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 사전의 요소 수 반환.
:::

----
#### DICTCLEAR

**`int DICTCLEAR anyanyDict dict`**

**`int DICTCLEAR anyDict_anyanyDict dictDict`**

지정된 사전의 모든 요소를 제거합니다.

:::tip[매개변수]
- **anyanyDict dict**
  - 임의의 사전 지정.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아님` 반환.
:::

----
#### DICTADD

**`int DICTADD anyanyDict dict, sameAsKey key, same value`**

**`int DICTADD anyDict_anyanyDict dictDict, sameAsKey key, same value`**

지정된 사전에 지정된 키와 값을 추가합니다. 키가 이미 존재하면 추가하지 않습니다.

:::tip[매개변수]
- **anyanyDict dict**
  - 임의의 사전 지정.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전 지정.
- **sameAsKey key**
  - 키 이름 지정. 키 값 유형은 첫 번째 매개변수의 키 유형과 동일해야 함.
- **same value**
  - 값 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 추가 결과 반환. 키와 값 추가 성공 시 `0이 아님`, 키 이미 존재 시 `0`.
:::

----
#### DICTHAS

**`int DICTHAS anyanyDict dict, sameAsKey key`**

**`int DICTHAS anyDict_anyanyDict dictDict, sameAsKey key`**

지정된 사전에 지정된 키 이름이 존재하는지 확인합니다.

:::tip[매개변수]
- **anyanyDict dict**
  - 임의의 사전 지정.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전 지정.
- **sameAsKey key**
  - 확인할 키 이름 지정. 키 값 유형은 첫 번째 매개변수의 키 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 확인 결과 반환. 키 존재 시 `0이 아님`, 아니면 `0`.
:::

----
#### DICTREMOVE

**`int DICTREMOVE anyanyDict dict, sameAsKey key`**

**`int DICTREMOVE anyDict_anyanyDict dictDict, sameAsKey key`**

지정된 사전에서 지정된 키 값을 제거합니다.

:::tip[매개변수]
- **anyanyDict dict**
  - 임의의 사전 지정.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전 지정.
- **sameAsKey key**
  - 제거할 키 이름 지정. 키 값 유형은 첫 번째 매개변수의 키 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 제거 결과 반환. 키 찾아 제거 성공 시 `0이 아님`, 못 찾았으면 `0`.
:::

----
#### DICTTRYGET

**`int DICTTRYGET anyanyDict dict, same outValue`**

**`int DICTTRYGET anyDict_anyanyDict dictDict, same outValue`**

지정된 사전에서 지정된 키 값을 찾아 가져옵니다. 이 명령어로 키 값을 가져올 때 오류가 발생하지 않습니다.

:::tip[매개변수]
- **anyanyDict dict**
  - 임의의 사전 지정.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전 지정.
- **same outValue**
  - 키 값을 받을 변수 지정. 변수 값 유형은 첫 번째 매개변수 값 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 검색 결과 반환. 키 찾기 성공 시 `0이 아님` 값을 **outValue**에 출력, 실패 시 `0`.
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

지정된 소스 사전의 모든 키 이름을 지정된 대상 배열 또는 리스트에 복사합니다.

:::tip[매개변수]
- **anyanyDict srcDict**
  - 임의의 소스 사전 지정.
- **anyDict_anyanyDict srcDictDict**
  - 임의의 소스 사전형 사전 지정.
- **sameAsKeyArray destArray**
  - 대상 배열 지정. 첫 번째 매개변수 키 유형과 동일해야 함.
- **sameAsKeyList destList**
  - 대상 리스트 지정. 첫 번째 매개변수 키 유형과 동일해야 함.
- **sameAsKeyHashList destHashList**
  - 대상 해시 리스트 지정. 첫 번째 매개변수 키 유형과 동일해야 함.
- **anyDict_sameAsKeyList destDictList**
  - 대상 리스트형 사전 지정. 첫 번째 매개변수 키 유형과 동일해야 함.
- **anyDict_sameAsKeyHashList destDictHashList**
  - 대상 해시 리스트형 사전 지정. 첫 번째 매개변수 키 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 대상 배열의 경우 성공적으로 복사된 요소 수 반환. 대상 리스트 및 리스트형 사전의 경우 복사 후 총 요소 수 반환.
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

지정된 소스 사전의 모든 값을 지정된 대상 배열 또는 리스트에 복사합니다.

:::tip[매개변수]
- **anyanyDict srcDict**
  - 임의의 소스 사전 지정.
- **anyDict_anyanyDict srcDictDict**
  - 임의의 소스 사전형 사전 지정.
- **sameAsKeyArray destArray**
  - 대상 배열 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **sameAsKeyList destList**
  - 대상 리스트 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **sameAsKeyHashList destHashList**
  - 대상 해시 리스트 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **anyDict_sameAsKeyList destDictList**
  - 대상 리스트형 사전 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
- **anyDict_sameAsKeyHashList destDictHashList**
  - 대상 해시 리스트형 사전 지정. 첫 번째 매개변수 값 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 대상 배열의 경우 성공적으로 복사된 요소 수 반환. 대상 리스트 및 리스트형 사전의 경우 복사 후 총 요소 수 반환.
:::

----
#### DICTCOPY

**`int DICTCOPY anyanyDict srcDict, sameAsKeysameAsKeyDict destDict`**

**`int DICTCOPY anyanyDict srcDict, anyDict_sameAsKeysameDict destDictDict`**

**`int DICTCOPY anyDict_anyanyDict srcDictDict, sameAsKeysameAsKeyDict destDict`**

**`int DICTCOPY anyDict_anyanyDict srcDictDict, anyDict_sameAsKeysameDict destDictDict`**

지정된 소스 사전의 모든 요소를 지정된 대상 사전에 복사합니다.

:::tip[매개변수]
- **anyanyDict srcDict**
  - 임의의 소스 사전 지정.
- **anyDict_anyanyDict srcDictDict**
  - 임의의 소스 사전형 사전 지정.
- **sameAsKeysameAsKeyDict destDict**
  - 대상 사전 지정. 키 유형, 값 유형 모두 첫 번째 매개변수와 동일해야 함.
- **anyDict_sameAsKeysameDict destDictDict**
  - 대상 사전형 사전 지정. 서브 키 유형, 값 유형 모두 첫 번째 매개변수와 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 대상 배열의 경우 성공적으로 복사된 요소 수 반환. 대상 리스트 및 리스트형 사전의 경우 복사 후 총 요소 수 반환.
:::

----
### 사전 컬렉션 관련 {#DictItemRelated}

----
#### DICTITEMCREATE

**`int DICTITEMCREATE anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMCREATE anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMCREATE anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

지정된 사전 컬렉션 변수에 새 컬렉션을 생성합니다.

:::tip[매개변수]
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전 지정.
- **anyDict_anyHashList dictHashList**
  - 임의의 해시 리스트형 사전 지정.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전 지정.
- **sameAsDictKey dictKey**
  - 생성할 주 키 이름 지정. 키 값 유형은 첫 번째 매개변수 주 키 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 주 키 이름 생성 성공 시 `0이 아님`, 동일 키 이름 컬렉션 존재 시 `0`.
:::

----
#### DICTITEMEXIST

**`int DICTITEMEXIST anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMEXIST anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMEXIST anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

지정된 사전 컬렉션 변수에서 지정된 주 키 이름을 찾습니다.

:::tip[매개변수]
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전 지정.
- **anyDict_anyHashList dictHashList**
  - 임의의 해시 리스트형 사전 지정.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전 지정.
- **sameAsDictKey dictKey**
  - 찾을 주 키 이름 지정. 키 값 유형은 첫 번째 매개변수 주 키 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 주 키 이름 찾기 성공 시 `0이 아님`, 못 찾았으면 `0`.
:::

----
#### DICTITEMRELEASE

**`int DICTITEMRELEASE anyDict_anyList dictList, sameAsDictKey dictKey`**

**`int DICTITEMRELEASE anyDict_anyHashList dictHashList, sameAsDictKey dictKey`**

**`int DICTITEMRELEASE anyDict_anyanyDict dictDict, sameAsDictKey dictKey`**

지정된 사전 컬렉션 변수에서 지정된 주 키 이름과 컬렉션을 제거합니다.

:::tip[매개변수]
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전 지정.
- **anyDict_anyHashList dictHashList**
  - 임의의 해시 리스트형 사전 지정.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전 지정.
- **sameAsDictKey dictKey**
  - 제거할 주 키 이름 지정. 키 값 유형은 첫 번째 매개변수 주 키 유형과 동일해야 함.
:::

:::tip[반환값]
- **RESULT:0**
  - 찾아서 주 키 이름과 컬렉션 제거 성공 시 `0이 아님`, 못 찾았으면 `0`.
:::

----
#### DICTITEMRELEASEALL

**`int DICTITEMRELEASEALL anyDict_anyList dictList`**

**`int DICTITEMRELEASEALL anyDict_anyHashList dictHashList`**

**`int DICTITEMRELEASEALL anyDict_anyanyDict dictDict`**

지정된 사전 컬렉션 변수에서 모든 주 키 이름과 컬렉션을 제거합니다.

:::tip[매개변수]
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전 지정.
- **anyDict_anyHashList dictHashList**
  - 임의의 해시 리스트형 사전 지정.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아님` 반환.
:::

----
#### DICTITEMCOUNT

**`int DICTITEMCOUNT anyDict_anyList dictList`**

**`int DICTITEMCOUNT anyDict_anyHashList dictHashList`**

**`int DICTITEMCOUNT anyDict_anyanyDict dictDict`**

지정된 사전 컬렉션 변수의 컬렉션 수를 가져옵니다.

:::tip[매개변수]
- **anyDict_anyList dictList**
  - 임의의 리스트형 사전 지정.
- **anyDict_anyHashList dictHashList**
  - 임의의 해시 리스트형 사전 지정.
- **anyDict_anyanyDict dictDict**
  - 임의의 사전형 사전 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 사전 컬렉션 변수의 컬렉션 수 반환.
:::

----
### 입력 관련 {#InputRelated}

----
#### CHKKEYDATA

**`int CHKKEYDATA int keyData(, str keyName, int modifier)`**

사용자 입력 `keyData` 키 코드 값이 지정된 `keyName` 키 이름 및 `modifier` 수정 키와 일치하는지 확인합니다. `keyData` 키 코드 값은 [**`INPUTMOUSEKEY`**](modify_com#inputmousekey) 명령어로 가져올 수 있습니다.

구체적인 `keyName` 키 이름 목록은 [**`Keys 열거형`**](https://learn.microsoft.com/dotnet/api/system.windows.forms.keys?view=netframework-4.8) 문서를 참조하세요.

:::tip[매개변수]
- **int keyData**
  - 사용자 입력 키 코드 값 데이터 지정.
- **str keyName**
  - 일치시킬 키 이름 지정. 키 이름은 대소문자 구분 없음. 생략 가능.
- **int modifier**
  - 일치시킬 수정 키 지정. 생략 가능.
    - `1P0` = Shift
    - `1P1` = Ctrl
    - `1P2` = Alt
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 키 이름 및 수정 키 일치 여부. 성공 시 `0이 아님`.
:::

:::note[사용 예]
```
INPUTMOUSEKEY 0
IF RESULT:0 == 3
  PRINTVL CHKKEYDATA(RESULT:2, "A")		; 사용자 "A" 입력 여부 확인
  PRINTVL CHKKEYDATA(RESULT:2, , 1P0 | 1P1)	; 사용자 "Ctrl + Shift" 입력 여부 확인
  PRINTVL CHKKEYDATA(RESULT:2, "/", 1P1 | 1P2)	; 사용자 "Ctrl + Alt + /" 입력 여부 확인
ENDIF
```
:::

----
### 이미지 관련 {#ImageRelated}

----
#### ASYNCGDRAWG

[**`GDRAWG`**](modify_com#gdrawg) 명령어와 호출 방식이 동일하며, 긴 프로그램 정지를 피하기 위해 비동기적으로 그리기 작업을 수행합니다.

비동기 작업 전송 후 [**`ASYNCWAITALL`**](#asyncwaitall) 명령어를 호출하여 모든 비동기 작업이 완료될 때까지 프로그램을 강제 대기시킬 수 있습니다.

:::tip[반환값]
- **RESULT:0**
  - 비동기 작업 전송 성공 시 `0이 아님`, 지정된 이미지 미생성 시 `0`.
:::

----
#### ASYNCGDRAWSPRITE

[**`GDRAWSPRITE`**](modify_com#gdrawsprite) 명령어와 호출 방식이 동일하며, 긴 프로그램 정지를 피하기 위해 비동기적으로 그리기 작업을 수행합니다.

비동기 작업 전송 후 [**`ASYNCWAITALL`**](#asyncwaitall) 명령어를 호출하여 모든 비동기 작업이 완료될 때까지 프로그램을 강제 대기시킬 수 있습니다.

:::tip[반환값]
- **RESULT:0**
  - 비동기 작업 전송 성공 시 `0이 아님`, 지정된 이미지 또는 Sprite 미생성 시 `0`.
:::

----
#### ASYNCGCREATEFROMFILE

**`int ASYNCGCREATEFROMFILE int GID, str filepath`**

[**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) 명령어와 호출 방식이 동일하며, 긴 프로그램 정지를 피하기 위해 지정된 이미지 파일을 비동기적으로 로드합니다.

비동기 작업 전송 후 [**`ASYNCWAITALL`**](#asyncwaitall) 명령어를 호출하여 모든 비동기 작업이 완료될 때까지 프로그램을 강제 대기시킬 수 있습니다.

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아님`.
:::

----
#### ASYNCGDISPOSE

**`int ASYNCGDISPOSE int GID`**

[**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 명령어와 호출 방식이 동일하며, 다른 비동기 명령어와 함께 사용하여 이미지를 해제합니다.

비동기 작업 전송 후 [**`ASYNCWAITALL`**](#asyncwaitall) 명령어를 호출하여 모든 비동기 작업이 완료될 때까지 프로그램을 강제 대기시킬 수 있습니다.

:::tip[반환값]
- **RESULT:0**
  - 비동기 작업 전송 성공 시 `0이 아님`, 지정된 이미지 미생성 시 `0`.
:::

----
#### ASYNCSPRITELOAD

**`int ASYNCSPRITELOAD str sprite`**

지정된 Sprite가 참조하는 이미지를 비동기적으로 로드하여 긴 프로그램 정지를 피합니다.

비동기 작업 전송 후 [**`ASYNCWAITALL`**](#asyncwaitall) 명령어를 호출하여 모든 비동기 작업이 완료될 때까지 프로그램을 강제 대기시킬 수 있습니다.

:::tip[매개변수]
- **str sprite**
  - 비동기 로드할 Sprite 이름 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 비동기 작업 전송 성공 또는 Sprite 이미지 이미 로드 시 `0이 아님`, Sprite 미발견 시 `0`.
:::

----
#### ASYNCWAITALL

**`void ASYNCWAITALL`**

모든 비동기 작업이 완료될 때까지 강제 대기합니다.

----
#### GETBEZIERPATH

**`int GETBEZIERPATH intArray2|3D pointArray, int pointCount, intArray2D outputArray, int outputCount`**

베지어 곡선을 생성하고 곡선 상의 모든 좌표점을 `outputArray` 배열에 저장합니다.

:::tip[매개변수]
- **intArray2|3D pointArray**
  - 곡선 생성용 시작점, 여러 제어점, 끝점 좌표 지정. 배열 마지막 차원 길이는 `2 이상`이어야 함.
- **int pointCount**
  - `pointArray` 내 좌표점 수 지정.
- **intArray2D outputArray**
  - 생성된 곡선 좌표가 저장될 배열 지정. 배열 마지막 차원 길이는 `2 이상`이어야 함.
- **int outputCount**
  - 생성할 좌표점 수 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 명령어 실행 성공 여부. 성공 시 `0이 아님`.
:::

----
#### GETBEZIERPOINT

**`int GETBEZIERPOINT intArray2|3D pointArray, int pointCount, int t, int tMax`**

지정된 제어점과 거리에 따라 베지어 곡선 상의 좌표점을 가져옵니다.

:::tip[매개변수]
- **intArray2|3D pointArray**
  - 곡선 생성용 시작점, 여러 제어점, 끝점 좌표 지정. 배열 마지막 차원 길이는 `2 이상`이어야 함.
- **int pointCount**
  - `pointArray` 내 좌표점 수 지정.
- **int t**
  - 필요한 좌표점의 거리 지정.
- **int tMax**
  - 최대 거리 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 명령어 실행 성공 여부. 성공 시 `0이 아님`.
- **RESULT:1**
  - 좌표점 X 값.
- **RESULT:2**
  - 좌표점 Y 값.
:::

----
#### GDISPOSEALL

**`void GDISPOSEALL`**

모든 Graphics 이미지를 해제하고 비웁니다.

----
#### GENABLED

**`int GENABLED int GID`**

지정된 이미지의 `ENABLED` 값을 가져옵니다. 이 값은 해당 이미지가 최종적으로 화면에 그려질 수 있는지 제어합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 이미지의 `ENABLED` 값 반환. 이미지 미생성 시 `0`.
:::

----
#### GSETENABLED

**`int GSETENABLED int GID, int enabled`**

이 명령어는 이미지 위치 정보를 유지한 채로 해당 이미지가 최종적으로 화면에 그려질 수 있는지 제어합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
- **int enabled**
  - 이미지 그리기 여부 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. 이미지 미생성 시 `0`.
:::

----
#### GFILLELLIPSE

**`int GFILLELLIPSE int GID, int x, int y, int width, int height`**

타원형 도형을 그리며, 사용법은 [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) 명령어와 유사합니다. [**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) 명령어로 색상을 지정합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
- **int x**
  - 타원 X 위치 지정.
- **int y**
  - 타원 Y 위치 지정.
- **int width**
  - 타원 너비 지정.
- **int height**
  - 타원 높이 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 도형 그리기 성공 여부. 성공 시 `0이 아님`, 지정된 이미지 미생성 시 `0`.
:::

----
#### GFILLROUNDRECT

**`int GFILLROUNDRECT int GID, int x, int y, int width, int height, int radiusX(, int radiusY)`**

둥근 모서리 사각형을 그리며, 사용법은 [**`GFILLRECTANGLE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GFILLRECTANGLE.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20width.2C.20int.20height) 명령어와 유사합니다. [**`GSETBRUSH`**](https://osdn.net/projects/emuera/wiki/excom#h5-GSETBRUSH.20int.20ID.2C.20int.20cARGB) 명령어로 색상을 지정합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
- **int x**
  - 둥근 사각형 X 위치 지정.
- **int y**
  - 둥근 사각형 Y 위치 지정.
- **int width**
  - 둥근 사각형 너비 지정.
- **int height**
  - 둥근 사각형 높이 지정.
- **int radiusX**
  - 둥근 모서리 X 반경 지정.
- **int radiusY**
  - 둥근 모서리 Y 반경 지정. 생략 시 `radiusX`와 동일한 값 사용.
:::

:::tip[반환값]
- **RESULT:0**
  - 도형 그리기 성공 여부. 성공 시 `0이 아님`, 지정된 이미지 미생성 시 `0`.
:::

----
#### GRESAMPLESAVE

**`int GRESAMPLESAVE int GID, any fileName, int width, int height`**

사용법은 [**`GSAVE`**](modify_com#gsave-gload) 명령어와 유사하지만, 더 높은 품질의 리샘플링을 통해 더 선명한 크기 조정 이미지를 생성하여 파일로 저장합니다. 대신 더 오랜 시간이 소요됩니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
- **any fileName**
  - 저장할 파일 번호 또는 파일 경로 지정.
- **int width**
  - 크기 조정 너비 지정.
- **int height**
  - 크기 조정 높이 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 파일 저장 성공 여부. 성공 시 `0이 아님`, 지정된 이미지 미생성, 파일 경로 불법, 파일 저장 오류 시 `0`.
:::

----
#### GRESETMATRIX

**`int GRESETMATRIX int GID`**

지정된 이미지의 변환 행렬을 재설정합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 변환 행렬 설정 성공 여부. 성공 시 `0이 아님`. 이미지 미생성 시 `0`.
:::

----
#### GRESETSTATE

**`int GRESETSTATE int GID`**

지정된 이미지의 모든 추가 상태를 재설정합니다. 구체적인 재설정 내용은 다음과 같습니다:

- `BRUSH` 색상을 기본 텍스트 색상으로 재설정.
- `PEN` 색상을 기본 텍스트 색상으로, 굵기를 `1`로, 모든 선 효과 재설정.
- 안티앨리어싱 효과 `1(켬)`으로 재설정.
- 필터 품질 `3(고품질)`으로 재설정.
- 흐림 효과 제거.
- `ColorMatrix(색상 행렬)` 제거.
- `TransformMatrix(변환 행렬)` 재설정.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 상태 재설정 성공 여부. 성공 시 `0이 아님`. 이미지 미생성 시 `0`.
:::

----
#### GSETANTIALIAS

**`int GSETANTIALIAS int GID(, int mode = 0)`**

이미지 그리기 시 안티앨리어싱 사용 여부를 설정합니다.

새로 생성된 모든 이미지는 기본적으로 안티앨리어싱이 켜져 있습니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
- **int mode = 0**
  - 안티앨리어싱 사용 여부 지정. `0이 아닌 값` 입력 시 사용, 그렇지 않으면 사용 안 함. 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 안티앨리어싱 설정 성공 여부. 성공 시 `0이 아님`. 이미지 미생성 시 `0`.
:::

----
#### GSETBLUR

**`int GSETBLUR int GID(, int blur = 0)`**

이미지 그리기 시 흐림 효과 사용 여부를 설정합니다.

새로 생성된 모든 이미지는 기본적으로 흐림 효과가 없습니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
- **int blur = 0**
  - 흐림 정도 지정. 입력 범위 `0-100`. 생략 또는 `0` 입력 시 흐림 효과 제거.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 흐림 효과 설정 성공 여부. 성공 시 `0이 아님`. 이미지 미생성 시 `0`.
:::

----
#### GSETCOLORMATRIX

**`int GSETCOLORMATRIX int GID(, intArray colorMatrix)`**

이미지 그리기 시 색상 행렬 사용 여부를 설정합니다.

색상 행렬 배열은 최소 `4행 x 5열` 크기여야 하며, 처음 4열의 입력 범위는 `0-510`(2배 과포화 지원), 5열의 입력 범위는 `0-255`입니다.

색상 행렬이 필요 없을 때는 이 명령어를 다시 호출하고 두 번째 매개변수 `colorMatrix`를 생략하세요.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
- **intArray colorMatrix**
  - 색상 행렬로 사용할 임의 정수 배열 지정. 생략 시 기존 색상 행렬 제거.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 색상 행렬 설정 성공 여부. 성공 시 `0이 아님`. 이미지 미생성 시 `0`.
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

이미지 그리기의 필터 품질 등급을 설정합니다. 이 설정은 크기 조정 시 선명도에 영향을 미칩니다.

새로 생성된 모든 이미지는 기본적으로 `3(고품질)`을 사용합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
- **int quality = 3**
  - 품질 등급 지정. 입력 범위 `0-3`:
    - `0` = 필터링 없음
    - `1` = 저품질
    - `2` = 중품질
    - `3` = 고품질
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 필터 품질 설정 성공 여부. 성공 시 `0이 아님`. 이미지 미생성 시 `0`.
:::

----
#### GSETSCALE

**`int GSETSCALE int GID, int scaleX, int scaleY(, int posX = 0, int posY = 0)`**

이미지의 변환 행렬에 `크기 조정` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`GRESETMATRIX`**](#gresetmatrix) 명령어 호출로 전체 재설정해야 합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
- **int scaleX**
  - X축 크기 조정량 지정. `100` 입력 시 `100%`.
- **int scaleY**
  - Y축 크기 조정량 지정. `100` 입력 시 `100%`.
- **int posX = 0**
  - 크기 조정 중심점 X 위치 지정. 생략 가능 `(0)`.
- **int posY = 0**
  - 크기 조정 중심점 Y 위치 지정. 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 변환 행렬 설정 성공 여부. 성공 시 `0이 아님`. 이미지 미생성 시 `0`.
:::

----
#### GSETSKEW

**`int GSETSKEW int GID, int skewX, int skewY`**

이미지의 변환 행렬에 `기울이기` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`GRESETMATRIX`**](#gresetmatrix) 명령어 호출로 전체 재설정해야 합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
- **int skewX**
  - X축 기울기량 지정. `100` 입력 시 `100%`.
- **int skewY**
  - Y축 기울기량 지정. `100` 입력 시 `100%`.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 변환 행렬 설정 성공 여부. 성공 시 `0이 아님`. 이미지 미생성 시 `0`.
:::

----
#### GSETROTATE

**`int GSETROTATE int GID, int angle`**

**`int GSETROTATE int GID, int angle, int posX = 0, int posY = 0`**

이미지의 변환 행렬에 `회전` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`GRESETMATRIX`**](#gresetmatrix) 명령어 호출로 전체 재설정해야 합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
- **int angle**
  - 회전 각도 지정.
- **int posX = 0**
  - 회전 중심점 X 위치 지정. 생략 가능 `(0)`.
- **int posY = 0**
  - 회전 중심점 Y 위치 지정. 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 변환 행렬 설정 성공 여부. 성공 시 `0이 아님`. 이미지 미생성 시 `0`.
:::

----
#### GSETTRANSLATE

**`int GSETTRANSLATE int GID, int translateX, int translateY`**

이미지의 변환 행렬에 `이동` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`GRESETMATRIX`**](#gresetmatrix) 명령어 호출로 전체 재설정해야 합니다.

:::tip[매개변수]
- **int GID**
  - 이미지 ID 지정.
- **int translateX**
  - 이동 X 벡터 지정.
- **int translateY**
  - 이동 Y 벡터 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 이미지 변환 행렬 설정 성공 여부. 성공 시 `0이 아님`. 이미지 미생성 시 `0`.
:::

----
#### SPRITEANIMECLEARFRAME

**`int SPRITEANIMECLEARFRAME str spriteAnime(, int removeStart = 0, int removeCount = frameCount)`**

지정된 SpriteAnime의 프레임을 지웁니다.

이 명령어는 내장되지 않은 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
- **int removeStart = 0**
  - 지우기 시작 위치 지정.
- **int removeCount = frameCount**
  - 지울 프레임 수 지정. 생략 시 `removeStart`부터 모든 프레임 지움.
:::

:::tip[반환값]
- **RESULT:0**
  - 지우기 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성, SpriteAnime 내장 시 `0`.
:::

----
#### SPRITEANIMEFRAMECOUNT

**`int SPRITEANIMEFRAMECOUNT str spriteAnime`**

지정된 SpriteAnime에 추가된 프레임 수를 가져옵니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 SpriteAnime의 프레임 수 반환. SpriteAnime 미생성 시 `0`.
:::

----
#### SPRITEANIMERESETTIME

**`int SPRITEANIMERESETTIME str spriteAnime`**

지정된 SpriteAnime의 재생 시간을 재설정하여 애니메이션이 첫 번째 프레임부터 다시 시작되도록 합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성 시 `0`.
:::

----
#### SPRITEANIMEOFFSETTIME

**`int SPRITEANIMEOFFSETTIME str spriteAnime, int offsetTime`**

지정된 SpriteAnime의 재생 시간에 오프셋 값을 추가합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
- **int offsetTime**
  - 오프셋 값 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성 시 `0`.
:::

----
#### SPRITEFRAME_SETG

**`int SPRITEFRAME_SETG str spriteAnime, int GID`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETG str spriteAnime, int GID, int x, int y, int width, int height, int posX, int posY`**

지정된 SpriteAnime의 현재 프레임에 이미지를 설정합니다. 각 프레임에는 마지막으로 설정된 이미지 유형만 적용됩니다.

이 명령어는 내장되지 않은 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
- **int GID**
  - 이미지 ID 지정.
- **int x**
  - 선택 영역 X 위치 지정.
- **int y**
  - 선택 영역 Y 위치 지정.
- **int width**
  - 선택 영역 너비 지정.
- **int height**
  - 선택 영역 높이 지정.
- **int posX**
  - 선택 영역 그리기 X 위치 지정.
- **int posY**
  - 선택 영역 그리기 Y 위치 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성, SpriteAnime 내장 시 `0`.
:::

----
#### SPRITEFRAME_SETSPRITE

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPRITE str spriteAnime, str sprite, int x, int y, int width, int height, int posX, int posY`**

지정된 SpriteAnime의 현재 프레임에 Sprite 이미지를 설정합니다. 각 프레임에는 마지막으로 설정된 이미지 유형만 적용됩니다.

이 명령어는 내장되지 않은 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
- **str sprite**
  - Sprite 지정.
- **int x**
  - 선택 영역 X 위치 지정.
- **int y**
  - 선택 영역 Y 위치 지정.
- **int width**
  - 선택 영역 너비 지정.
- **int height**
  - 선택 영역 높이 지정.
- **int posX**
  - 선택 영역 그리기 X 위치 지정.
- **int posY**
  - 선택 영역 그리기 Y 위치 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성, SpriteAnime 내장 시 `0`.
:::

----
#### SPRITEFRAME_SETSPINE

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height`**

**`int SPRITEFRAME_SETSPINE str spriteAnime, int spineID, int x, int y, int width, int height, int posX, int posY`**

지정된 SpriteAnime의 현재 프레임에 Spine 애니메이션을 설정합니다. 각 프레임에는 마지막으로 설정된 이미지 유형만 적용됩니다.

이 명령어는 내장되지 않은 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
- **int spineID**
  - SpineID 지정.
- **int x**
  - 선택 영역 X 위치 지정.
- **int y**
  - 선택 영역 Y 위치 지정.
- **int width**
  - 선택 영역 너비 지정.
- **int height**
  - 선택 영역 높이 지정.
- **int posX**
  - 선택 영역 X 그리기 위치 지정.
- **int posY**
  - 선택 영역 Y 그리기 위치 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성, SpriteAnime 내장 시 `0`.
:::

----
#### SPRITEFRAME_TRANSITION

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton`**

**`int SPRITEFRAME_TRANSITION str spriteAnime, int useTransisiton, intArray2D bezierPointArray, int bezierPointCount`**

지정된 SpriteAnime의 현재 프레임에 전환 효과를 사용 또는 사용 안 함으로 설정합니다. 이 전환 효과는 이전 프레임을 변환 시작점으로, 현재 프레임을 변환 끝점으로 사용합니다.  
베지어 곡선을 설명하는 배열을 전달하여 균일하지 않은 전환 효과를 얻을 수 있습니다.

- 다음 속성만 전환 효과의 영향을 받습니다:
  - 변환 행렬
  - 색상 행렬
  - 흐림 효과

이 명령어는 내장되지 않은 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
- **int useTransisiton**
  - 전환 효과 사용 또는 사용 안 함 지정.
- **intArray2D bezierPointArray**
  - 베지어 곡선 설명 배열 지정.
- **int bezierPointCount**
  - 배열 내 좌표점 개수 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성, SpriteAnime 내장 시 `0`.
:::

----
#### SPRITEFRAME_TRANSLATE

**`int SPRITEFRAME_TRANSLATE str spriteAnime, int translateX, int translateY`**

지정된 SpriteAnime의 현재 프레임 변환 행렬에 `이동` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 명령어 호출로 현재 프레임 변환 행렬을 재설정해야 합니다.

이 명령어는 내장되지 않은 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
- **int translateX**
  - 이동 X 벡터 지정.
- **int translateY**
  - 이동 Y 벡터 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성, SpriteAnime 내장 시 `0`.
:::

----
#### SPRITEFRAME_SCALE

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY`**

**`int SPRITEFRAME_SCALE str spriteAnime, int scaleX, int scaleY, int posX, int posY`**

지정된 SpriteAnime의 현재 프레임 변환 행렬에 `크기 조정` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 명령어 호출로 현재 프레임 변환 행렬을 재설정해야 합니다.

이 명령어는 내장되지 않은 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
- **int scaleX**
  - X축 크기 조정량 지정. `100` 입력 시 `100%`.
- **int scaleY**
  - Y축 크기 조정량 지정. `100` 입력 시 `100%`.
- **int posX = 0**
  - 크기 조정 중심점 X 위치 지정. 생략 가능 `(0)`.
- **int posY = 0**
  - 크기 조정 중심점 Y 위치 지정. 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성, SpriteAnime 내장 시 `0`.
:::

----
#### SPRITEFRAME_ROTATE

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle`**

**`int SPRITEFRAME_ROTATE str spriteAnime, int angle, int posX, int posY`**

지정된 SpriteAnime의 현재 프레임 변환 행렬에 `회전` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 명령어 호출로 현재 프레임 변환 행렬을 재설정해야 합니다.

이 명령어는 내장되지 않은 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
- **int angle**
  - 회전 각도 지정.
- **int posX**
  - 회전 중심점 X 위치 지정. 생략 가능 `(0)`.
- **int posY**
  - 회전 중심점 Y 위치 지정. 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성, SpriteAnime 내장 시 `0`.
:::

----
#### SPRITEFRAME_SKEW

**`int SPRITEFRAME_SKEW str spriteAnime, int skewX, int skewY`**

지정된 SpriteAnime의 현재 프레임 변환 행렬에 `기울이기` 효과를 추가합니다.

추가된 효과는 취소할 수 없으며, [**`SPRITEFRAME_RESETMATRIX`**](#spriteframe_resetmatrix) 명령어 호출로 현재 프레임 변환 행렬을 재설정해야 합니다.

이 명령어는 내장되지 않은 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
- **int skewX**
  - X축 기울기량 지정. `100` 입력 시 `100%`.
- **int skewY**
  - Y축 기울기량 지정. `100` 입력 시 `100%`.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성, SpriteAnime 내장 시 `0`.
:::

----
#### SPRITEFRAME_RESETMATRIX

**`int SPRITEFRAME_RESETMATRIX str spriteAnime`**

지정된 SpriteAnime의 현재 프레임 변환 행렬을 재설정합니다.

이 명령어는 내장되지 않은 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성, SpriteAnime 내장 시 `0`.
:::

----
#### SPRITEFRAME_COLORMATRIX

**`int SPRITEFRAME_COLORMATRIX str spriteAnime(, intArray colorMatrix)`**

지정된 SpriteAnime의 현재 프레임에 색상 행렬을 설정합니다.

색상 행렬 배열은 최소 `4행 x 5열` 크기여야 하며, 처음 4열의 입력 범위는 `0-510`(2배 과포화 지원), 5열의 입력 범위는 `0-255`입니다.

색상 행렬이 필요 없을 때는 이 명령어를 다시 호출하고 두 번째 매개변수 `colorMatrix`를 생략하세요.

이 명령어는 내장되지 않은 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
- **intArray colorMatrix**
  - 색상 행렬로 사용할 임의 정수 배열 지정. 생략 시 기존 색상 행렬 제거.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성, SpriteAnime 내장 시 `0`.
:::

----
#### SPRITEFRAME_BLUR

**`int SPRITEFRAME_BLUR str spriteAnime(, int blur = 0)`**

지정된 SpriteAnime의 현재 프레임에 흐림 효과를 설정합니다.

이 명령어는 내장되지 않은 SpriteAnime에만 유효합니다.

:::tip[매개변수]
- **str spriteAnime**
  - SpriteAnime 이름 지정.
- **int blur = 0**
  - 흐림 정도 지정. 입력 범위 `0-100`. 생략 또는 `0` 입력 시 흐림 효과 제거.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. SpriteAnime 미생성, SpriteAnime 내장 시 `0`.
:::

----
#### SPRITEENABLED

**`int SPRITEENABLED str sprite`**

지정된 Sprite 이미지의 `ENABLED` 값을 가져옵니다. 이 값은 해당 이미지가 최종적으로 화면에 그려질 수 있는지 제어합니다.

:::tip[매개변수]
- **str sprite**
  - Sprite 이미지 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 Sprite 이미지의 `ENABLED` 값 반환. Sprite 이미지 미생성 시 `0`.
:::

----
#### SPRITESETENABLED

**`int SPRITESETENABLED str sprite, int enabled`**

이 명령어는 Sprite 이미지 위치 정보를 유지한 채로 해당 이미지가 최종적으로 화면에 그려질 수 있는지 제어합니다.

:::tip[매개변수]
- **str sprite**
  - Sprite 이미지 지정.
- **int enabled**
  - 해당 Sprite 이미지 그리기 여부 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. Sprite 이미지 미생성 시 `0`.
:::

----
#### SPRITEEXIST

**`int SPRITEEXIST str sprite`**

사용법은 [**`SPRITECREATED`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITECREATED.20str.20spriteName) 명령어와 유사하지만, 참조 이미지 자동 로드 메커니즘을 트리거하지 않고 지정된 Sprite 존재 여부를 검색합니다.

:::tip[매개변수]
- **str sprite**
  - 검색할 Sprite 이름 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 Sprite 찾기 여부. 찾았으면 `0이 아님`.
:::

----
#### SPRITEEXTEND

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height`**

**`int SPRITEEXTEND str newSprite, str srcSprite, int x, int y, int width, int height, int posX, int posY`**

기존 Sprite를 기반으로 새 비내장 Sprite를 생성합니다. 새 Sprite의 선택 영역은 원본 Sprite 크기에 제한됩니다.

:::tip[매개변수]
- **str newSprite**
  - 새 Sprite 이름 지정.
- **str srcSprite**
  - 원본 Sprite 이름 지정.
- **int x**
  - 선택 영역 X 위치 지정.
- **int y**
  - 선택 영역 Y 위치 지정.
- **int width**
  - 선택 영역 너비 지정.
- **int height**
  - 선택 영역 높이 지정.
- **int posX**
  - 새 Sprite X 그리기 위치 지정.
- **int posY**
  - 새 Sprite Y 그리기 위치 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 새 비내장 Sprite 생성 성공 여부. 성공 시 `0이 아님`. 새 Sprite와 원본 Sprite 이름 동일, 동일 이름 내장 Sprite 존재, 원본 Sprite 미존재, 원본 Sprite 단일 이미지 유형이 아닐 시 `0`.
:::

----
#### CONSTSPRITECREATE

**`int CONSTSPRITECREATE str sprite, str imgPath`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height`**

**`int CONSTSPRITECREATE str sprite, str imgPath, int x, int y, int width, int height, int posX, int posY`**

지정된 `imgPath` 이미지 파일 경로를 기반으로 새 내장 Sprite를 생성합니다.

이 작업은 기존 비내장 Sprite를 대체합니다.

:::tip[매개변수]
- **str sprite**
  - 새 Sprite 이름 지정.
- **str imgPath**
  - 이미지 파일 경로 지정.
- **int x**
  - 선택 영역 X 위치 지정.
- **int y**
  - 선택 영역 Y 위치 지정.
- **int width**
  - 선택 영역 너비 지정.
- **int height**
  - 선택 영역 높이 지정.
- **int posX**
  - 새 Sprite X 그리기 위치 지정.
- **int posY**
  - 새 Sprite Y 그리기 위치 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 새 내장 Sprite 생성 성공 여부. 성공 시 `0이 아님`. 동일 이름 내장 Sprite 존재, 지정된 선택 영역과 이미지가 교차하지 않을 시 `0`.
:::

----
### SPINE 관련 {#SpineRelated}

----
#### SPINECREATE

**`int SPINECREATE int spineID, str spineResource`**

csv 리소스 파일에 정의된 Spine 리소스를 기반으로 지정된 `spineID`에 Spine 애니메이션을 생성합니다.

이 명령어는 Spine 애니메이션 생성 전에 이미 생성된 Spine 애니메이션을 해제하므로, 생성 전 [**`SPINEDISPOSE`**](#spinedispose) 명령어 호출이 필요 없습니다.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **str spineResource**
  - Spine 리소스 이름 지정. 이름 대소문자 구분 없음.
:::

:::tip[반환값]
- **RESULT:0**
  - Spine 애니메이션 생성 성공 여부. 성공 시 `0이 아님`. Spine 애니메이션 리소스 미존재 시 `0`.
:::

----
#### SPINECREATEFROMFILE

**`int SPINECREATEFROMFILE int spineID, str atlasFile, str dataFile`**

지정된 `atlas 파일` 및 `data 파일(.skel 또는 .json)`을 기반으로 지정된 `spineID`에 Spine 애니메이션을 생성합니다.

이 명령어는 Spine 애니메이션 생성 전에 이미 생성된 Spine 애니메이션을 해제하므로, 생성 전 [**`SPINEDISPOSE`**](#spinedispose) 명령어 호출이 필요 없습니다.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **str atlasFile**
  - Spine 애니메이션 atlas 파일 지정.
- **str dataFile**
  - Spine 애니메이션 .skel 파일 또는 .json 파일 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - Spine 애니메이션 생성 성공 여부. 성공 시 `0이 아님`. 파일 미존재, 파일 형식 불일치 시 `0`.
:::

----
#### SPINECREATED

**`int SPINECREATED int spineID`**

지정된 Spine 애니메이션이 생성되었는지 확인합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - Spine 애니메이션 생성 여부. 생성되었으면 `0이 아님`.
:::

----
#### SPINEDISPOSE

**`int SPINEDISPOSE int spineID(, int disposeImg = 0)`**

지정된 Spine 애니메이션을 제거합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **int disposeImg = 0**
  - 해당 Spine 애니메이션이 참조하는 이미지 해제 여부 지정. `0이 아닌 값` 입력 시 이미지 해제.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아님` 반환.
:::

----
#### SPINEDISPOSEALL

**`int SPINEDISPOSEALL (int disposeImg = 0)`**

모든 Spine 애니메이션을 제거합니다.

:::tip[매개변수]
- **int disposeImg = 0**
  - 모든 Spine 애니메이션이 참조하는 이미지 해제 여부 지정. `0이 아닌 값` 입력 시 이미지 해제.
:::

:::tip[반환값]
- **RESULT:0**
  - 항상 `0이 아님` 반환.
:::

----
#### SPINEENABLED

**`int SPINEENABLED int spineID`**

지정된 Spine 애니메이션의 `ENABLED` 값을 가져옵니다. 이 값은 해당 애니메이션이 최종적으로 화면에 그려질 수 있는지 제어합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 Spine 애니메이션의 `ENABLED` 값 반환. Spine 애니메이션 미생성 시 `0`.
:::

----
#### SPINESETENABLED

**`int SPINESETENABLED int spineID, int enabled`**

이 명령어는 Spine 애니메이션 위치 정보를 유지한 채로 해당 애니메이션이 최종적으로 화면에 그려질 수 있는지 제어합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **int enabled**
  - 해당 Spine 애니메이션 그리기 여부 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. Spine 애니메이션 미생성 시 `0`.
:::

----
#### GDRAWSPINE

**`int GDRAWSPINE int GID, int spineID`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPINE int GID, int spineID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

사용법은 [**`GDRAWG`**](modify_com#gdrawg) 명령어와 유사하며, 지정된 `GID` 이미지에 `spineID` Spine 애니메이션을 그립니다.

`colorMatrix` 컬러 매트릭스 사용법은 [**`GSETCOLORMATRIX`**](#gsetcolormatrix) 명령어 설명 참조.

:::tip[매개변수]
- **int GID**
  - 대상 이미지 ID 지정.
- **int spineID**
  - 소스 SpineID 지정.
- **int destX**
  - 대상 X 위치 지정.
- **int destY**
  - 대상 Y 위치 지정.
- **int destWidth**
  - 대상 너비 지정. `음수` 입력 시 이미지 반전.
- **int destHeight**
  - 대상 높이 지정. `음수` 입력 시 이미지 반전.
- **int srcX**
  - 소스 X 위치 지정.
- **int srcY**
  - 소스 Y 위치 지정.
- **int srcWidth**
  - 소스 너비 지정.
- **int srcHeight**
  - 소스 높이 지정.
- **intArray colorMatrix**
  - 컬러 매트릭스로 사용할 정수 배열 지정 (생략 가능). 본 컬러 매트릭스는 해당 그리기 작업에만 적용되며 완료 후 자동 해제됨.
:::

:::tip[반환값]
- **RESULT:0**
  - 그리기 성공 여부. 성공 시 `0이 아닌 값` 반환. 지정된 이미지/Spine 애니메이션이 생성되지 않은 경우 `0` 반환.
:::

----
#### ASYNCGDRAWSPINE

사용법은 [**`GDRAWSPINE`**](#gdrawspine) 명령어와 동일하며, 장시간 프로그램 정지를 방지하기 위해 비동기 방식으로 그리기 작업 수행.

비동기 작업 전송 후 [**`ASYNCWAITALL`**](#asyncwaitall) 명령어로 모든 비동기 작업 완료 시까지 프로그램 대기 가능.

:::tip[반환값]
- **RESULT:0**
  - 비동기 작업 전송 성공 시 `0이 아닌 값` 반환. 지정된 이미지/Spine 애니메이션이 생성되지 않은 경우 `0` 반환.
:::

----
#### ASYNCSPINELOAD

**`int ASYNCSPINELOAD int spineID`**

지정된 Spine 애니메이션이 참조하는 이미지를 비동기 방식으로 로드하여 장시간 프로그램 정지 방지.

비동기 작업 전송 후 [**`ASYNCWAITALL`**](#asyncwaitall) 명령어로 모든 비동기 작업 완료 시까지 프로그램 대기 가능.

:::tip[매개변수]
- **int spineID**
  - 비동기 로드할 SpineID 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 비동기 작업 전송 성공 시 `0이 아닌 값` 반환. Spine 애니메이션이 생성되지 않은 경우 `0` 반환.
:::

----
#### SPINEPOSX, SPINEPOSY

**`int SPINEPOSX int spineID`**

**`int SPINEPOSY int spineID`**

지정된 Spine 애니메이션의 그리기 위치 반환.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - Spine 애니메이션의 그리기 위치 반환.
:::

----
#### SPINESRCX, SPINESRCY

**`int SPINESRCX int spineID`**

**`int SPINESRCY int spineID`**

지정된 Spine 애니메이션의 원본 축 위치 반환. [**`SPINESETSCALE`**](#spinesetscale) 명령어의 영향을 받음.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - Spine 애니메이션의 원본 축 위치 반환.
:::

----
#### SPINEWIDTH, SPINEHEIGHT

**`int SPINEWIDTH int spineID`**

**`int SPINEHEIGHT int spineID`**

지정된 Spine 애니메이션의 너비/높이 반환. [**`SPINESETSCALE`**](#spinesetscale) 명령어의 영향을 받음.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - Spine 애니메이션의 너비/높이 반환.
:::

----
#### SPINESETPOS, SPINEMOVE

**`int SPINESETPOS int spineID, int posX, int posY`**

**`int SPINEMOVE int spineID, int offsetX, int offsetY`**

[**`SPRITESETPOS`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITESETPOS.20str.20spriteName.2C.20int.20posx.2C.20int.20posy), [**`SPRITEMOVE`**](https://osdn.net/projects/emuera/wiki/excom#h5-SPRITEMOVE.20str.20spriteName.2C.20int.20movex.2C.20int.20movey) 명령어와 유사하게 Spine 애니메이션의 그리기 위치 설정/이동.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **int posX**
  - X 그리기 위치 지정.
- **int posY**
  - Y 그리기 위치 지정.
- **int offsetX**
  - X 위치 오프셋 지정.
- **int offsetY**
  - Y 위치 오프셋 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아닌 값` 반환. Spine 애니메이션이 생성되지 않은 경우 `0` 반환.
:::

----
#### SPINESETSCALE

**`int SPINESETSCALE int spineID, int scale`**

**`int SPINESETSCALE int spineID, int scaleX, int scaleY`**

지정된 Spine 애니메이션의 스케일 비율 설정.

- 본 명령어는 다음 명령어의 출력 결과에 영향:
  - [**`SPINESRCX, SPINESRCY`**](#spinesrcx-spinesrcy)
  - [**`SPINEWIDTH, SPINEHEIGHT`**](#spinewidth-spineheight)

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **int scale**
  - 전체 스케일 지정. `100` 입력 시 `100%`.
- **int scaleX**
  - X축 스케일 지정. `100` 입력 시 `100%`.
- **int scaleY**
  - Y축 스케일 지정. `100` 입력 시 `100%`.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아닌 값` 반환. Spine 애니메이션이 생성되지 않은 경우 `0` 반환.
:::

----
#### SPINEHASANIM, SPINEHASSKIN

**`int SPINEHASANIM int spineID, str animName`**

**`int SPINEHASSKIN int spineID, str skinName`**

지정된 Spine 애니메이션에 특정 애니메이션/스킨 존재 여부 확인.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **str animName**
  - 애니메이션 이름 지정 (대소문자 무시).
- **str skinName**
  - 스킨 이름 지정 (대소문자 무시).
:::

:::tip[반환값]
- **RESULT:0**
  - 지정된 애니메이션/스킨 존재 여부. 존재 시 `0이 아닌 값` 반환.
:::

----
#### SPINESETANIM

**`int SPINESETANIM int spineID, int trackIndex, str animName(, int isLoop = 0)`**

지정된 Spine 애니메이션에 애니메이션 설정. 애니메이션 이름이 공란일 경우 해당 트랙 인덱스의 기존 애니메이션 제거.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **int trackIndex**
  - 애니메이션 트랙 인덱스 지정.
- **str animName**
  - 애니메이션 이름 지정 (대소문자 무시). 공란 입력 시 해당 트랙 인덱스의 애니메이션 제거.
- **int isLoop = 0**
  - 애니메이션 반복 여부 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 애니메이션 설정/제거 성공 여부. 성공 시 `0이 아닌 값` 반환. Spine 미생성 또는 존재하지 않는 애니메이션 지정 시 `0` 반환.
:::

----
#### SPINEADDANIM

**`int SPINEADDANIM int spineID, int trackIndex, str animName(, int isLoop = 0, int delay = 1000)`**

지정된 Spine 애니메이션에 애니메이션 중첩 추가.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **int trackIndex**
  - 애니메이션 트랙 인덱스 지정.
- **str animName**
  - 애니메이션 이름 지정 (대소문자 무시).
- **int isLoop = 0**
  - 애니메이션 반복 여부 지정.
- **int delay = 1000**
  - 애니메이션 재생 지연 시간 (밀리초 단위).
:::

:::tip[반환값]
- **RESULT:0**
  - 애니메이션 중첩 추가 성공 여부. 성공 시 `0이 아닌 값` 반환. Spine 미생성 또는 존재하지 않는 애니메이션 지정 시 `0` 반환.
:::

----
#### SPINESETSKIN

**`int SPINESETSKIN int spineID, str skinName`**

지정된 Spine 애니메이션에 스킨 설정.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **str skinName**
  - 스킨 이름 지정 (대소문자 무시).
:::

:::tip[반환값]
- **RESULT:0**
  - 스킨 설정 성공 여부. 성공 시 `0이 아닌 값` 반환. Spine 미생성 또는 존재하지 않는 스킨 지정 시 `0` 반환.
:::

----
#### SPINESETTIME, SPINEUPDATETIME

**`int SPINESETTIME int spineID, int millsec`**

**`int SPINEUPDATETIME int spineID, int millsec`**

지정된 Spine 애니메이션의 재생 시간 설정/진행.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **int millsec**
  - 재생 시간 지정 (밀리초 단위).
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아닌 값` 반환. Spine 애니메이션이 생성되지 않은 경우 `0` 반환.
:::

----
#### SPINETIMESCALE

**`int SPINETIMESCALE int spineID, int timeScale`**

Spine 애니메이션의 재생 속도 제어를 위한 시간 배율 설정.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **int timeScale**
  - 시간 배율 지정. `100` 입력 시 `100%`.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아닌 값` 반환. Spine 애니메이션이 생성되지 않은 경우 `0` 반환.
:::

----
#### SPINEANIMLIST, SPINESKINLIST

**`int SPINEANIMLIST int spineID, strArray outputArray`**

**`int SPINESKINLIST int spineID, strArray outputArray`**

지정된 Spine 애니메이션의 애니메이션/스킨 목록 반환.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **strArray outputArray**
  - 목록 저장용 문자열 배열 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 반환된 애니메이션/스킨 개수. Spine 애니메이션이 생성되지 않은 경우 `0` 반환.
:::

----
#### CBGSETSPINE

**`int CBGSETSPINE int spineID, int x, int y, int zdepth`**

사용법은 [**`CBGSETG`**](https://osdn.net/projects/emuera/wiki/excom#h5-CBGSETG.20int.20ID.2C.20int.20x.2C.20int.20y.2C.20int.20zdepth) 명령어와 유사하며, 지정된 Spine 애니메이션을 클라이언트 배경에 표시합니다.

:::tip[매개변수]
- **int spineID**
  - SpineID 지정.
- **int x**
  - X 위치 지정.
- **int y**
  - Y 위치 지정.
- **int zdepth**
  - Z축 깊이 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 설정 성공 여부. 성공 시 `0이 아님`. Spine 애니메이션 미생성 시 `0`.
:::

----
### 오디오 관련 {#AudioRelated}

----
#### AUDIOCREATE

**`int AUDIOCREATE str audioName, str srcAudio(, int volume, any startTime, any duration)`**

기존 `srcAudio`를 기반으로 새 Audio를 생성합니다.

`startTime` 및 `duration` 지정 시 원본 Audio가 참조하는 오디오 파일의 총 재생 시간을 기준으로 합니다.

`startTime` 및 `duration`은 `TimeSpan` 또는 `ms(밀리초)`를 입력할 수 있으며, `TimeSpan` 서식은 [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) 문서 예제 부분을 참조하세요.

:::tip[매개변수]
- **str audioName**
  - 새 Audio 이름 지정.
- **str srcAudio**
  - 참조할 원본 Audio 이름 지정.
- **int volume**
  - 새 Audio 재생 볼륨 지정. 생략 가능 `(원본 Audio 기본 볼륨)`.
- **any startTime**
  - 새 Audio 시작 시간 지정. 생략 가능 `(원본 Audio 시작 시간)`.
- **any duration**
  - 새 Audio 재생 시간 지정. 생략 가능 `(원본 Audio 재생 시간)`.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio 생성 성공 여부. 성공 시 `0이 아님`. Audio 이름 이미 존재, 원본 Audio 미존재 시 `0`.
:::

:::note[사용 예]
```
AUDIOCREATE "New", "Old", 80			; 새 Audio "New" 생성, 볼륨 80
AUDIOCREATE "New", "Old", , "00:01:10", "10000"	; 새 Audio "New" 생성, 시작 시간 1분 10초, 재생 시간 10000밀리초
```
:::

----
#### AUDIOCREATEFROMFILE

**`int AUDIOCREATEFROMFILE str audioName, str filePath(, int volume, any startTime, any duration)`**

지정된 `filePath` 오디오 파일을 기반으로 새 Audio를 생성합니다.

`startTime` 및 `duration` 지정 시 오디오 파일의 총 재생 시간을 기준으로 합니다.

`startTime` 및 `duration` 매개변수는 `TimeSpan` 또는 `ms(밀리초)` 값을 받으며, `TimeSpan` 서식은 [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) 문서 예제 부분을 참조하세요.

:::tip[매개변수]
- **str audioName**
  - 새 Audio 이름 지정.
- **str filePath**
  - 참조할 오디오 파일 상대 경로 지정. 이 경로는 메인 디렉터리에서 시작해야 함.
- **int volume**
  - 새 Audio 재생 볼륨 지정. 생략 가능 `(100)`.
- **any startTime**
  - 새 Audio 시작 시간 지정. 생략 가능 `(0)`.
- **any duration**
  - 새 Audio 재생 시간 지정. 생략 가능 `(오디오 파일 총 재생 시간)`.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio 생성 성공 여부. 성공 시 `0이 아님`. Audio 이름 이미 존재, 오디오 파일 미존재 시 `0`.
:::

:::note[사용 예]
```
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", 80			; 새 Audio "New" 생성, 볼륨 80
AUDIOCREATEFROMFILE "New", "sound/Old.mp3", , "00:01:10"	; 새 Audio "New" 생성, 시작 시간 1분 10초
```
:::

----
#### AUDIOCREATED

**`int AUDIOCREATED str audioName`**

지정된 Audio가 생성되었는지 확인합니다.

:::tip[매개변수]
- **str audioName**
  - Audio 이름 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio 생성 여부. 존재 시 `0이 아님`.
:::

----
#### AUDIOVOLUME

**`int AUDIOVOLUME str audioName`**

지정된 Audio의 볼륨을 가져옵니다.

:::tip[매개변수]
- **str audioName**
  - Audio 이름 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio 볼륨 반환. Audio 미존재 시 `0`.
:::

----
#### AUDIOSTARTTIME

**`int AUDIOSTARTTIME str audioName`**

지정된 Audio의 재생 시작 시간을 가져옵니다. 단위는 `ms(밀리초)`입니다.

:::tip[매개변수]
- **str audioName`
  - Audio 이름 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio 시작 시간 반환. Audio 미존재 시 `0`.
:::

----
#### AUDIODURATION

**`int AUDIODURATION str audioName`**

지정된 Audio의 재생 지속 시간을 가져옵니다. 단위는 `ms(밀리초)`입니다.

:::tip[매개변수]
- **str audioName`
  - Audio 이름 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio 지속 시간 반환. Audio 미존재 시 `0`.
:::

----
#### AUDIODISPOSE

**`int AUDIODISPOSE str audioName`**

지정된 임시 Audio를 제거합니다. Audio가 점유한 메모리는 재생 종료 후 해제됩니다. 런타임에 생성된 임시 Audio만 제거 가능합니다.

:::tip[매개변수]
- **str audioName`
  - 제거할 Audio 이름 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - Audio 제거 성공 여부. 성공 시 `0이 아님`. Audio 미존재, 지정된 Audio가 임시 Audio가 아닐 시 `0`.
:::

----
#### AUDIODISPOSEALL

**`void AUDIODISPOSEALL`**

런타임에 생성된 모든 임시 Audio를 제거합니다. Audio가 점유한 메모리는 재생 종료 후 해제됩니다. 내장 Audio는 영향받지 않습니다.

----
#### CURRENTBGM

**`str CURRENTBGM`**

현재 재생 중인 배경 음악 이름을 가져옵니다.

:::tip[매개변수]
- 없음
:::

:::tip[반환값]
- **RESULTS:0**
  - 현재 재생 중인 배경 음악 이름. 재생 중인 음악 없을 시 `빈 문자열`.
:::

----
#### PAUSEBGM

**`void PAUSEBGM (int fadeOut = 0)`**

현재 재생 중인 배경 음악을 일시 정지합니다.

:::tip[매개변수]
- **int fadeOut = 0**
  - 페이드 아웃 효과 지속 시간 지정. 단위 `ms(밀리초)`. 입력값 `생략` 또는 `0 이하` 시 효과 없음. 최대값 `10000`.
:::

----
### 모드 관련 {#ModuleRelated}

----
#### MODULELIST

**`int MODULELIST strArray array`**

로드된 모드 ID 목록을 가져옵니다.

:::tip[매개변수]
- **strArray array**
  - 모드 ID 목록을 받을 임의 문자열 배열 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 가져온 모드 ID 수 반환.  
    수신 배열 마지막 차원 길이에 따라 결과가 제한될 수 있음.
:::

----
#### MODULEPATH

**`str MODULEPATH str modID`**

지정된 로드된 모드의 폴더 상대 경로를 가져옵니다.

:::tip[매개변수]
- **str modID**
  - 폴더 경로를 가져올 모드 ID 지정.
:::

:::tip[반환값]
- **RESULTS:0**
  - 가져온 폴더 상대 경로 반환. 모드 ID 미존재 또는 미로드 시 `빈 문자열`.
:::

:::note[사용 예]
```
PRINTSL MODULEPATH("MyMod")			; "mod/MyMod v1.0/" 출력
```
:::

----
#### GETRESOURCEEXT

**`int GETRESOURCEEXT strArray array(, int option = 1P0 | 1P1)`**

모든 런처가 지원하는 이미지, 오디오 리소스 파일 확장자를 가져옵니다. 확장자에는 `.`이 포함되며 모두 소문자입니다.

:::tip[매개변수]
- **strArray array**
  - 파일 확장자를 받을 임의 문자열 배열 지정.
- **int option = 1P0 | 1P1**
  - 필요한 리소스 유형 지정. `1P0` = 이미지 리소스, `1P1` = 오디오 리소스. 생략 가능 `(1P0 | 1P1)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 가져온 확장자 수 반환.  
    수신 배열 마지막 차원 길이에 따라 결과가 제한될 수 있음.
:::

:::note[사용 예]
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

; 출력 결과
; Image Ext: .bmp .jpg .jpeg .png .webp .tiff .exif .gif
; Audio Ext: .mp3 .mpeg3 .wav .wave .flac .fla .aiff .aif .aifc .aac .adt .adts .m2ts .mp2 .3g2 .3gp2 .3gp .3gpp .m4a .m4v .mp4v .mp4 .mov .asf .wm .wmv .wma .mp1 .avi .ac3 .ec3
```
:::

----
#### TEXT

**`str TEXT anyParams keyName`**

지정된 키 이름을 기반으로 다국어 텍스트를 가져옵니다. 구체적인 사용법은 [**`다국어 기능`**](/#Multilingual) 부분을 참조하세요.

:::tip[매개변수]
- **anyParams keyName**
  - 다국어 텍스트 키 이름 지정. 입력 키 이름은 대소문자 구분 필요 없음.
:::

:::tip[반환값]
- **RESULTS:0**
  - 지정된 다국어 텍스트 반환. 키 이름 미존재, 경로 오류 시 `빈 문자열`.
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

**`int TEXTLIST strArray array, anyParams keyName`**

지정된 키 이름을 기반으로 다국어 텍스트 목록을 가져옵니다. 구체적인 사용법은 [**`다국어 기능`**](/#Multilingual) 부분을 참조하세요.

:::tip[매개변수]
- **strArray array**
  - 텍스트 목록을 받을 임의 문자열 배열 지정.
- **anyParams keyName**
  - 다국어 텍스트 키 이름 지정. 입력 키 이름은 대소문자 구분 필요 없음.
:::

:::tip[반환값]
- **RESULT:0**
  - 성공적으로 가져온 텍스트 목록 요소 수 반환. 키 이름 미존재, 경로 오류 시 `0`.  
    가져온 요소 수는 수신 배열 마지막 차원 길이에 따라 제한될 수 있음.
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

**`int LANGUAGELIST strArray array`**

로드된 다국어 ID 목록을 가져옵니다. 가져온 ID는 자동으로 `빼기(-)`를 `밑줄(_)`로 대체합니다.

:::tip[매개변수]
- **strArray array**
  - 다국어 ID 목록을 받을 임의 문자열 배열 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 가져온 다국어 ID 수 반환.  
    수신 배열 마지막 차원 길이에 따라 결과가 제한될 수 있음.
:::

----
### MAP 컬렉션 관련 {#MapCollectionRelated}

----
#### MAP_COPY

**`int MAP_COPY str srcMap, str destMap`**

지정된 소스 Map의 모든 요소를 대상 Map에 복사합니다.

:::tip[매개변수]
- **str srcMap**
  - 소스 Map 지정.
- **str destMap**
  - 대상 Map 지정.
:::

:::tip[반환값]
- **RESULT:0**
  - 대상 Map 요소 수 반환. 소스 Map 또는 대상 Map 미발견 시 `(-1)`.
:::
