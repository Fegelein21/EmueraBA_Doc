---
sidebar_position: 2
sidebar_label: 변경된 명령어
---

# 변경된 명령어 {#ModifyCom}

### 디스플레이 관련 {#DisplayRelated}

----
#### SETCOLORBYNAME, SETBGCOLORBYNAME

**`void SETCOLORBYNAME form colorName`**

**`void SETBGCOLORBYNAME form colorName`**

이 명령어의 첫 번째 매개변수 `colorName`이 FORM 구문을 받도록 변경되었습니다.

:::note[사용 예시]
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

이 명령어의 다른 매개변수 형식은 별도의 명령어 [**`REPLACEBYARRAY`**](new_com#replacebyarray)로 분리되었으며, `flag` 매개변수의 기능이 변경되었습니다.

:::tip[매개변수]
- **str source**
  - 처리할 텍스트 지정.
- **str match**
  - 매칭에 사용할 텍스트 지정.
- **str newvalue**
  - 치환에 사용할 텍스트 지정.
- **int flag = 0**
  - 텍스트 처리 방식 지정. 기본값(0)은 정규식 치환 모드, `0이 아닌 값` 입력 시 일반 텍스트 치환 모드 사용.
:::

:::tip[반환값]
- **RESULTS:0**
  - 치환된 문자열 반환.
:::

----
#### SPLIT

**`void SPLIT str text(, str delimiter = ","), strArray array(, int result)`**

두 번째 매개변수 `delimiter`는 생략 가능하며 기본값은 `(",")`입니다.

세 번째 매개변수 `array`에는 임의의 문자열 배열을 전달할 수 있습니다. 다차원 배열의 경우 마지막 차원의 요소만 처리되며, 이전 차원의 인덱스는 직접 지정해야 합니다.

----
#### STRCOUNT

**`int STRCOUNT str input, str match(, int option = 0)`**

- 세 번째 매개변수 `option` 추가: 처리 옵션 조정 가능
  - `1P0` = 일반 텍스트 매칭 모드 (정규식 미지원, 처리 속도 향상)
  - `1P1` = 대소문자 무시

----
#### STRFIND

이모지 문자 처리 시 표시 너비 계산을 통해 문자 길이를 측정합니다.

----
#### STRJOIN

**`str STRJOIN anyArray array(, str delimiter = ",", int start = 0, int count = lastDimLength)`**

첫 번째 매개변수 `array`에 임의의 배열 전달 가능.

다차원 배열의 경우 마지막 차원의 요소만 처리되며, 이전 차원의 인덱스는 직접 지정해야 합니다.

:::tip[매개변수]
- **anyArray array**
  - 문자열 병합 대상 배열 지정.
- **str delimiter = ","**
  - 병합 시 사용할 구분자 지정.
- **int start = 0**
  - 병합 시작 인덱스 지정.
- **int count = lastDimLength**
  - 병합할 요소 수 지정. 생략 시 배열 마지막 차원의 길이 사용.
:::

:::tip[반환값]
- **RESULTS:0**
  - 병합된 문자열 반환.
:::

----
#### STRLEN, STRLENFORM

이모지 문자 처리 시 표시 너비 계산을 통해 문자 길이를 측정합니다.

----
#### STRLENS

이모지 문자 처리 시 표시 너비 계산을 통해 문자 길이를 측정합니다.

----
#### SUBSTRING

**`int SUBSTRING str text(, int start = 0, int length = totalLength)`**

이모지 문자 처리 시 표시 너비 계산을 통해 문자 길이를 측정합니다.  
텍스트 선택 위치가 긴 문자 중간에 걸칠 경우 해당 문자 시작 위치로 조정됩니다. 즉, 시작 위치에 걸친 문자는 포함되고 끝 위치에 걸친 문자는 무시됩니다.

----
### 변수, 배열 관련 {#VarAndArrayRelated}

----
#### ARRAYREMOVE

**`ARRAYREMOVE anyArray1D array, int start, int count, same emptyVal`**

네 번째 매개변수 `emptyVal` 추가: 요소 이동 후 빈 공간 채울 값 지정 (기본값: `0` 또는 `빈 문자열`).

세 번째 매개변수 `count`에 `음수` 지정 시 배열 전체 길이로 간주됩니다.

----
#### ARRAYSHIFT

**`ARRAYSHIFT anyArray1D array, int shiftCount, same emptyVal(, int start, int count)`**

다섯 번째 매개변수 `count`에 `음수` 지정 시 배열 전체 길이로 간주됩니다.

----
#### ARRAYSORT

**`ARRAYSORT anyArray1D array(, FORWARD or BACK, int start, int count)`**

네 번째 매개변수 `count`에 `음수` 지정 시 배열 전체 길이로 간주됩니다.

----
#### ERDNAME

세 번째 매개변수 생략 시 배열 마지막 차원의 인덱스 키 이름을 검색합니다.

----
#### FINDELEMENT, FINDLASTELEMENT

**`int FINDELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

**`int FINDLASTELEMENT anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

첫 번째 매개변수 `array`에 임의의 배열 전달 가능. 다섯 번째 매개변수 `option` 사용법 변경: 처리 옵션 조정 가능.

다차원 배열의 경우 마지막 차원의 요소만 처리되며, 이전 차원의 인덱스는 직접 지정해야 합니다.

:::tip[매개변수]
- **anyArray array**
  - 검색 대상 배열 지정.
- **same target**
  - 검색할 내용 지정.
- **int start = 0**
  - 검색 시작 인덱스 지정.
- **int end = lastDimLength**
  - 검색 종료 인덱스+1 지정. 생략 시 배열 마지막 차원의 길이 사용.
- **int option = 0**
  - 처리 옵션:
    - `1P0` = 완전 일치 사용
    - `1P1` = 대소문자 무시
    - `1P2` = 판단 결과 반전
    - `1P3` = 일반 텍스트 매칭 사용
:::

:::tip[반환값]
- **RESULT:0**
  - 검색 조건에 맞는 첫 번째 인덱스 반환. 없을 경우 `-1` 반환.
:::

:::note[사용 예시]
```
LOCAL = FINDELEMENT(LOCALS, "WORD", , , 1P0 | 1P1)
```
:::

----
#### INRANGEARRAY

**`int INRANGEARRAY intArray array, int min, int max(, int start = 0, int end = lastDimLength)`**

첫 번째 매개변수 `array`에 임의의 정수 배열 전달 가능.

다차원 배열의 경우 마지막 차원의 요소만 처리되며, 이전 차원의 인덱스는 직접 지정해야 합니다.

:::tip[매개변수]
- **intArray array**
  - 정수 배열 지정.
- **int min**
  - 최소 범위값 지정.
- **int max**
  - 최대 범위값 지정.
- **int start = 0**
  - 시작 인덱스 지정.
- **int end = lastDimLength**
  - 종료 인덱스+1 지정. 생략 시 배열 마지막 차원의 길이 사용.
:::

:::tip[반환값]
- **RESULT:0**
  - 조건에 맞는 요소 개수 반환.
:::

----
#### INRANGECARRAY

**`int INRANGECARRAY intCharaArray array, int min, int max(, int start = 0, int end = charaCount)`**

첫 번째 매개변수 `array`에 임의의 캐릭터형 정수 배열 전달 가능.

다차원 배열의 경우 마지막 차원의 요소만 처리되며, 이전 차원의 인덱스는 직접 지정해야 합니다.

:::tip[매개변수]
- **intCharaArray array**
  - 캐릭터형 정수 배열 지정.
- **int min**
  - 최소 범위값 지정.
- **int max**
  - 최대 범위값 지정.
- **int start = 0**
  - 시작 캐릭터 인덱스 지정.
- **int end = charaCount**
  - 종료 캐릭터 인덱스+1 지정. 생략 시 총 캐릭터 수 사용.
:::

:::tip[반환값]
- **RESULT:0**
  - 조건에 맞는 요소 개수 반환.
:::

----
#### MINARRAY, MAXARRAY

**`int MINARRAY intArray array(, int start = 0, int end = lastDimLength)`**

**`int MAXARRAY intArray array(, int start = 0, int end = lastDimLength)`**

첫 번째 매개변수 `array`에 임의의 정수 배열 전달 가능.

다차원 배열의 경우 마지막 차원의 요소만 처리되며, 이전 차원의 인덱스는 직접 지정해야 합니다.

:::tip[매개변수]
- **intArray array**
  - 정수 배열 지정.
- **int start = 0**
  - 시작 인덱스 지정.
- **int end = lastDimLength**
  - 종료 인덱스+1 지정. 생략 시 배열 마지막 차원의 길이 사용.
:::

:::tip[반환값]
- **RESULT:0**
  - 조건에 맞는 요소값 반환.
:::

----
#### MINCARRAY, MAXCARRAY

**`int MINCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

**`int MAXCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

첫 번째 매개변수 `array`에 임의의 정수 배열 전달 가능.

다차원 배열의 경우 마지막 차원의 요소만 처리되며, 이전 차원의 인덱스는 직접 지정해야 합니다.

:::tip[매개변수]
- **intCharaArray array**
  - 캐릭터형 정수 배열 지정.
- **int start = 0**
  - 시작 캐릭터 인덱스 지정.
- **int end = charaCount**
  - 종료 캐릭터 인덱스+1 지정. 생략 시 총 캐릭터 수 사용.
:::

:::tip[반환값]
- **RESULT:0**
  - 조건에 맞는 요소값 반환.
:::

----
#### MATCH

**`int MATCH anyArray array, same target(, int start = 0, int end = lastDimLength, int option = 0)`**

첫 번째 매개변수 `array`에 임의의 배열 전달 가능. 다섯 번째 매개변수 `option` 추가: 처리 옵션 조정 가능.

다차원 배열의 경우 마지막 차원의 요소만 처리되며, 이전 차원의 인덱스는 직접 지정해야 합니다.

:::tip[매개변수]
- **anyArray array**
  - 검색 대상 배열 지정.
- **same target**
  - 검색할 내용 지정.
- **int start = 0**
  - 검색 시작 인덱스 지정.
- **int end = lastDimLength**
  - 검색 종료 인덱스+1 지정. 생략 시 배열 마지막 차원의 길이 사용.
- **int option = 0**
  - 처리 옵션:
    - `1P0` = 부분 일치 사용
    - `1P1` = 대소문자 무시
    - `1P2` = 판단 결과 반전
    - `1P3` = 정규식 매칭 사용
:::

:::tip[반환값]
- **RESULT:0**
  - 검색 조건에 맞는 요소 개수 반환.
:::

:::note[사용 예시]
```
#DIMS ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P0 | 1P1)	; ARRAY:0 ~ ARRAY:7에서 "AA"를 포함(대소문자 무시)하는 요소 개수
PRINTVL MATCH(ARRAY, "AA", 0, 8, 1P2)		; ARRAY:0 ~ ARRAY:7에서 "AA"와 같지 않은 요소 개수
PRINTVL MATCH(ARRAY, "\\d+", 0, 8, 1P0 | 1P3)	; ARRAY:0 ~ ARRAY:7에서 "\\d+"에 부분 일치하는 요소 개수
PRINTVL MATCH(CARRAY_2D:TARGET:3:0, 22, 5)	; 캐릭터 TARGET의 CARRAY_2D:3:5 ~ CARRAY_2D:3:9에서 22와 같은 요소 개수
```
:::

----
#### CMATCH

**`int CMATCH anyCharaArray array, same target(, int start = 0, int end = charaCount, int option = 0)`**

첫 번째 매개변수 `array`에 임의의 캐릭터형 배열 전달 가능. 다섯 번째 매개변수 `option` 추가: 처리 옵션 조정 가능.

다차원 배열의 경우 마지막 차원의 요소만 처리되며, 이전 차원의 인덱스는 직접 지정해야 합니다.

:::tip[매개변수]
- **anyCharaArray array**
  - 검색 대상 캐릭터형 배열 지정.
- **same target**
  - 검색할 내용 지정.
- **int start = 0**
  - 검색 시작 캐릭터 인덱스 지정.
- **int end = charaCount**
  - 검색 종료 캐릭터 인덱스+1 지정. 생략 시 총 캐릭터 수 사용.
- **int option = 0**
  - 처리 옵션:
    - `1P0` = 부분 일치 사용
    - `1P1` = 대소문자 무시
    - `1P2` = 판단 결과 반전
    - `1P3` = 정규식 매칭 사용
:::

:::tip[반환값]
- **RESULT:0**
  - 검색 조건에 맞는 캐릭터 수 반환.
:::

:::note[사용 예시]
```
#DIMS CHARADATA CARRAY, 10
#DIMS CHARADATA CARRAY_2D, 10, 10
PRINTVL CMATCH(CARRAY:0:5, "A+", 0, 8, 1P0 | 1P3)	; 캐릭터 인덱스 0~7 중 CARRAY:5가 "A+"에 일치하는 캐릭터 수
PRINTVL CMATCH(CARRAY_2D:0:0:5, "Bb", 5, , 1P1 | 1P2)	; 캐릭터 인덱스 5~마지막 중 CARRAY_2D:0:5가 "Bb"(대소문자 무시)와 같지 않은 캐릭터 수
```
:::

----
#### SUMARRAY

**`int SUMARRAY intArray array(, int start = 0, int end = lastDimLength)`**

첫 번째 매개변수 `array`에 임의의 정수 배열 전달 가능.

다차원 배열의 경우 마지막 차원의 요소만 처리되며, 이전 차원의 인덱스는 직접 지정해야 합니다.

:::tip[매개변수]
- **intArray array**
  - 합산할 정수 배열 지정.
- **int start = 0**
  - 합산 시작 인덱스 지정.
- **int end = lastDimLength**
  - 합산 종료 인덱스+1 지정. 생략 시 배열 마지막 차원의 길이 사용.
:::

:::tip[반환값]
- **RESULT:0**
  - 배열 합계값 반환.
:::

:::note[사용 예시]
```
#DIM ARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
#DIM ARRAY_3D, 10, 10, 10
PRINTVL SUMARRAY(ARRAY, 0, 8)			; ARRAY:0 ~ ARRAY:7 값 합산
PRINTVL SUMARRAY(CARRAY_2D:TARGET:3:0, 5)	; 캐릭터 TARGET의 CARRAY_2D:3:5 ~ CARRAY_2D:3:9 값 합산
```
:::

----
#### SUMCARRAY

**`int SUMCARRAY intCharaArray array(, int start = 0, int end = charaCount)`**

첫 번째 매개변수 `array`에 임의의 캐릭터형 정수 배열 전달 가능.

다차원 배열의 경우 마지막 차원의 요소만 처리되며, 이전 차원의 인덱스는 직접 지정해야 합니다.

:::tip[매개변수]
- **intCharaArray array**
  - 합산할 캐릭터형 정수 배열 지정.
- **int start = 0**
  - 합산 시작 캐릭터 인덱스 지정.
- **int end = charaCount**
  - 합산 종료 캐릭터 인덱스+1 지정. 생략 시 총 캐릭터 수 사용.
:::

:::tip[반환값]
- **RESULT:0**
  - 배열 합계값 반환.
:::

:::note[사용 예시]
```
#DIM CHARADATA CARRAY, 10
#DIM CHARADATA CARRAY_2D, 10, 10
PRINTVL SUMCARRAY(CARRAY:0:5, 0, 8)	; 캐릭터 인덱스 0~7의 CARRAY:5 값 합산
PRINTVL SUMCARRAY(CARRAY_2D:0:0:5, 5)	; 캐릭터 인덱스 5~마지막의 CARRAY_2D:0:5 값 합산
```
:::

----
#### VARSET

**`void VARSET anyArray array(, same value, int start = 0, int end = lastDimLength, int option = 0)`**

다섯 번째 매개변수 `option` 추가: 처리 옵션 조정 가능.

다차원 배열의 경우 기본적으로 모든 차원의 요소를 처리하며, `option`에 `1P4` 전달 시 마지막 차원만 처리합니다.

:::tip[매개변수]
- **anyArray array**
  - 채울 배열 지정.
- **same value**
  - 채울 값 지정.
- **int start = 0**
  - 채우기 시작 인덱스 지정.
- **int end = lastDimLength**
  - 채우기 종료 인덱스+1 지정. 생략 시 배열 마지막 차원의 길이 사용.
- **int option = 0**
  - 처리 옵션:
    - `1P4` = 마지막 차원만 처리
:::

:::note[사용 예시]
```
#DIM ARRAY, 10, 10
#DIM CHARADATA CARRAY, 10
VARSET ARRAY:0:0, 1, 5, 10		; 모든 차원의 5~9 범위 요소를 1로 채움
VARSET ARRAY:3:0, 1, 5, 10, 1P4	; ARRAY:3:5 ~ ARRAY:3:9 요소를 1로 채움
VARSET CARRAY:TARGET:0, 1, 5, 10	; 캐릭터 TARGET의 CARRAY:5 ~ CARRAY:9 요소를 1로 채움
```
:::

----
#### CVARSET

**`void CVARSET anyCharaArray array(, any key, same value, int start, int end)`**

첫 번째 매개변수 `array`에 임의의 캐릭터형 배열 전달 가능. 두 번째 매개변수 `key`에 문자열 키 전달 가능.

----
#### VARSETEX

**`int VARSETEX string varName(, any value, int setAllDim, int start, int end)`**

두 번째 매개변수 `value` 생략 가능. `varName`이 가리키는 배열과 `value`의 값 유형이 다를 경우 오류 발생.

----
#### VARSIZE

**`int VARSIZE string varName(, int dimension)`**

두 번째 매개변수 `dimension` 생략 시 배열 마지막 차원의 길이 반환. `음수` 전달 시 배열 전체 길이 반환.

----
### 입력 관련 {#InputRelated}

----
#### INPUTMOUSEKEY

**`void INPUTMOUSEKEY (int time = 0)`**

숫자 버튼 클릭 시, 수신된 숫자를 `RESULTS:0`에 추가로 출력합니다.

키보드 입력 수신 시(RESULT:0 == 3), `RESULT:3`에 수정 키 코드값이 저장됩니다.

----
#### TWAIT

**`void TWAIT int time(, int flag = 0)`**

두 번째 매개변수 `flag`는 생략 가능 `(0)`.

----
### 이미지 관련 {#ImageRelated}

----
#### GCREATE

**`int GCREATE int GID, int width, int height`**

이미지 생성 전에 기존 이미지를 해제하므로, 생성 전 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 명령어 호출이 필요 없습니다.

----
#### GCREATEFROMFILE

**`int GCREATEFROMFILE int GID, str filepath`**

두 번째 매개변수 `filepath`는 메인 디렉토리 기준 상대 경로(`resources/image.png` 또는 `erb/image.png` 등)여야 합니다.

세 번째 매개변수 `isRelative`는 제거되었습니다.

이미지 생성 전 기존 이미지를 해제하므로, 생성 전 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 호출이 필요 없습니다.

----
#### GDASHSTYLE

**`int GDASHSTYLE int GID, int DashStyle, int DashCap`**

- 그래픽 라이브러리 변경으로 `DashCap` 값과 효과 변경:
  - `0` = 선 끝 모양 없음
  - `1` = 반원형 선 끝
  - `2` = 반사각형 선 끝

----
#### GDRAWTEXT

**`int GDRAWTEXT int GID, str text(, int x = 0, int y = 0)`**

문자열 측정 결과를 반환하지 않음 (`RESULT:0` 외 반환값 무효화).

측정 결과는 [**`GGETTEXTSIZE`**](https://evilmask.gitlab.io/emuera.em.doc/zh/Reference/GGETTEXTSIZE.html) 명령어와 동일하며 성능 오버헤드가 있어 제거되었습니다.

----
#### GDRAWGWITHMASK

**`int GDRAWGWITHMASK int destID, int srcID, int maskID, int destX, int destY`**

색상 알고리즘 개선: `maskID` 이미지의 알파 값과 파란 값이 함께 그리기 결과에 영향을 줍니다.

----
#### GDRAWG

**`int GDRAWG int destID, int srcID`**

**`int GDRAWG int destID, int srcID, int destX, int destY`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight(, intArray colorMatrix)`**

**`int GDRAWG int destID, int srcID, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

4가지 매개변수 형식 추가. `colorMatrix`에 임의의 정수 배열 전달 가능.  
`colorMatrix` 전달 시 해당 색상 행렬은 현재 그리기에만 적용되며 완료 후 자동 해제됩니다.

`destWidth` 및 `destHeight`에 `음수` 전달 시 뒤집힌 이미지 그리기 가능.

그래픽 라이브러리 변경으로 색상 행렬 사용법 변경 ([**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) 참조).

----
#### GDRAWSPRITE

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY`**

**`int GDRAWSPRITE int destID, str imgName, int destX, int destY, int destWidth, int destHeight, int srcX, int srcY, int srcWidth, int srcHeight(, intArray colorMatrix)`**

2가지 매개변수 형식 추가. `colorMatrix`에 임의의 정수 배열 전달 가능.  
`colorMatrix` 전달 시 해당 색상 행렬은 현재 그리기에만 적용되며 완료 후 자동 해제됩니다.

`destWidth` 및 `destHeight`에 `음수` 전달 시 뒤집힌 이미지 그리기 가능.

그래픽 라이브러리 변경으로 색상 행렬 사용법 변경 ([**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) 참조).

----
#### GSAVE, GLOAD

**`int GSAVE int GID, any fileName`**

**`int GLOAD int GID, any fileName`**

두 번째 매개변수 `fileName`에 숫자 외 문자열 파일 경로 지정 가능.

**`GLOAD`** 명령어는 이미지 생성 전 기존 이미지를 해제하므로, 생성 전 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 호출이 필요 없습니다.

:::note[사용 예시]
```
GSAVE 0, 11				; sav/img0011.png 파일로 저장
GSAVE 0, "sav/New Folder/image"		; sav/New Folder/image.png 파일로 저장
GLOAD 0, "resources/New Folder/image"	; resources/New Folder/image.png 파일 로드
```
:::

----
#### SETANIMETIMER

**`void SETANIMETIMER int interval(, int duration)`**

두 번째 매개변수 `duration` 추가: 애니메이션 갱신 지속 시간(밀리초) 지정.

[**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) 또는 [**`INPUTMOUSEKEY`**](#inputmousekey) 대기 중에도 애니메이션 갱신이 계속됩니다.

----
#### SPRITECREATE

**`int SPRITECREATE str sprite, int GID`**

새 매개변수 형식 추가.

Sprite 생성 전 기존 비내장 Sprite를 해제하므로, 생성 전 [**`SPRITEDISPOSE`**](#spritedispose) 호출이 필요 없습니다. 동일한 이름의 내장 Sprite가 있을 경우 생성 실패.

----
#### SPRITEANIMECREATE

**`int SPRITEANIMECREATE str sprite, int width, int height(, int isLoopFrame = 1)`**

네 번째 매개변수 `isLoopFrame` 추가: SpriteAnime 반복 재생 여부 지정 (생략 또는 `0이 아닌 값` = 반복 재생).

Sprite 생성 전 기존 비내장 Sprite를 해제하므로, 생성 전 [**`SPRITEDISPOSE`**](#spritedispose) 호출이 필요 없습니다. 동일한 이름의 내장 Sprite가 있을 경우 생성 실패.

----
#### SPRITEANIMEADDFRAME

**`int SPRITEANIMEADDFRAME str sprite, int delay`**

새 매개변수 형식 추가.

`delay`에 `0` 지정 가능 (변환 효과 제작용).

비내장 SpriteAnime에만 적용 가능.

----
#### SPRITEDISPOSE

**`int SPRITEDISPOSE str sprite(, int disposeImg)`**

두 번째 매개변수 `disposeImg` 추가: Sprite가 참조하는 이미지 해제 여부 지정.

----
#### SPRITEDISPOSEALL

**`void SPRITEDISPOSEALL (int disposeImage = 0)`**

- 첫 번째 매개변수 `disposeImage` 기능 변경: 내장 Sprite 제거 기능 삭제, 생략 가능 `(0)`.
  - `0` = 모든 런타임 생성 임시 Sprite 제거
  - `0이 아닌 값` = 모든 임시 Sprite 제거 + 모든 내장 Sprite 참조 이미지 해제 (호출 시 재로드됨)

----
### 오디오 관련 {#AudioRelated}

----
#### PLAYBGM

**`int PLAYBGM str name(, int volume, int fadeIn = 0, int delay = 0)`**

두 번째~네 번째 매개변수 `volume`, `fadeIn`, `delay` 추가.

첫 번째 매개변수 `name`은 Audio 이름만 지원. 파일 경로 재생 시 [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile)로 Audio 생성 필요.  
내장 Audio 추가 방법은 [**`오디오 기능`**](/#AudioFunc) 참조.

**`int PLAYBGM (int fadeIn = 0, int delay = 0)`**

두 번째 형식: 일시정지된 BGM 재개용.

:::tip[매개변수]
- **str name**
  - 재생할 Audio 이름.
- **int volume**
  - 재생 볼륨 (생략 시 Audio 기본 볼륨).
- **int fadeIn = 0**
  - 페이드인 지속 시간(ms). 생략/≤0 = 효과 없음, 최대 10000.
- **int delay = 0**
  - 지연 재생 시간(ms). 생략/≤0 = 효과 없음, 최대 10000.
:::

:::tip[반환값]
- **RESULT:0**
  - 재생 성공 여부 (성공=0이 아님, Audio 없음/오류=0).
:::

:::note[사용 예시]
```
PLAYBGM "MyMusic"			; "MyMusic" BGM 재생
PLAYBGM "MyMusic", 80			; "MyMusic" BGM 80 볼륨으로 재생
PLAYBGM "MyMusic", , 1500, 1000	; "MyMusic" BGM 1000ms 후 재생 + 1500ms 페이드인
PAUSEBGM 1500				; 현재 BGM 1500ms 페이드아웃 후 일시정지
PLAYBGM 1500				; 현재 BGM 1500ms 페이드인 후 재개
```
:::

----
#### PLAYSOUND

**`int PLAYSOUND str name(, int volume)`**

두 번째 매개변수 `volume` 추가: 재생 볼륨 지정.

첫 번째 매개변수 `name`은 Audio 이름만 지원. 파일 경로 재생 시 [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile)로 Audio 생성 필요.  
내장 Audio 추가 방법은 [**`오디오 기능`**](/#AudioFunc) 참조.

:::tip[매개변수]
- **str name**
  - 재생할 Audio 이름.
- **int volume**
  - 재생 볼륨 (생략 시 오디오 기본 볼륨).
:::

:::tip[반환값]
- **RESULT:0**
  - 재생 성공 여부 (성공=0이 아님, Audio 없음/오류=0).
:::

:::note[사용 예시]
```
PLAYSOUND "MySOUND"			; "MySOUND" 효과음 재생
PLAYSOUND "MySOUND", 80			; "MySOUND" 효과음 80 볼륨으로 재생
```
:::

----
#### SETBGMVOLUME

**`void SETBGMVOLUME int volume(, int fadeDuration = 0)`**

두 번째 매개변수 `fadeDuration` 추가: 볼륨 변경 시 페이드 효과 지속 시간(ms) 지정.

현재 재생 중인 BGM의 볼륨만 변경 (전역 볼륨 미영향).

----
#### SETSOUNDVOLUME

사용 중단됨 (효과 없음).

----
#### STOPBGM

**`void STOPBGM (int fadeOut = 0)`**

`fadeOut` 매개변수 추가: `0보다 큰 값` 입력 시 BGM 정지 시 페이드아웃 효과 적용.

:::tip[매개변수]
- **int fadeOut = 0**
  - 페이드아웃 지속 시간(ms). 생략/≤0 = 효과 없음, 최대 10000.
:::

:::note[사용 예시]
```
STOPBGM 1500	; BGM 1500ms 페이드아웃 후 정지
```
:::

----
### 파일 관련 {#FileRelated}

----
#### ENUMFILES

**`int ENUMFILES string dir(, string pattern, int option)`**

획득한 파일 경로의 백슬래시(`\\`)를 슬래시(`/`)로 변경합니다.

----
#### EXISTFILE

**`int EXISTFILE str filePath(, int getInfo = 0)`**

`getInfo` 매개변수 추가: 파일 정보 획득 가능.

:::tip[매개변수]
- **str filePath**
  - 파일 경로 지정.
- **int getInfo = 0**
  - 파일 정보 획득 여부 (0이 아닌 값 = `RESULT:1 - RESULT:4` 출력). 생략 가능 `(0)`.
:::

:::tip[반환값]
- **RESULT:0**
  - 파일 존재 여부 (존재=0이 아님).
- **RESULT:1**
  - 파일 크기(바이트).
- **RESULT:2**
  - 파일 생성 시간(ms).
- **RESULT:3**
  - 파일 수정 시간(ms).
- **RESULT:4**
  - 파일 접근 시간(ms).
:::

----
### 기타 {#Misc}

----
#### GETCONFIG

**`int GETCONFIG str value`**

- 추가된 구성 항목:
  - `ウィンドウ高さ` (창 높이)
  - `フレーム毎秒` (초당 프레임 수)
  - `タブ文字幅` (탭 문자 너비)
