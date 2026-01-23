---
sidebar_position: 4
sidebar_label: 업데이트 로그
---

# 업데이트 로그 {#UpdateLog}

----
### 2026-01-23

AI 번역된 영어, 일본어, 한국어 문서를 모두 업데이트했습니다.

- ERD 키워드 기능 개선:
    - 키워드 인덱스 값을 생략하면 시스템이 해당 키워드에 사용되지 않은 인덱스 값을 자동으로 할당합니다.  
      **경고: SAVEDATA 선언이 있는 변수는 게임 저장 데이터 손상을 피하기 위해 인덱스 값 생략을 권장하지 않습니다.**
    - 기존 키워드 이름을 인덱스 값으로 입력하면 해당 키워드의 인덱스 값이 직접 참조됩니다.
- 이러한 개선 기능 사용법은 [**`프로그램 및 명령 호환성 변경`**](/#CompatibilityChanges)의 `ERD 키워드 기능 예`를 참조하십시오.

[**`TRYTOINT`**](new_com#trytoint) 명령어에 두 번째 매개변수 `outValue`가 추가되어 변환 결과를 받는 정수형 변수를 지정합니다. 생략할 경우 `RESULT:1`이 변환 결과를 받는 데 사용됩니다.

----
### 2026-01-11

확장자 `.ogg`의 `Ogg Vorbis` 형식 오디오 파일 읽기를 지원합니다.

스크린샷 기능을 지원합니다. 메뉴 바의 `도움말 → 스크린샷 버튼`을 통해 현재 화면을 파일로 저장하거나, 새로 추가된 [**`GSNAPSHOT`**](new_com#gsnapshot) 명령을 사용하여 현재 화면의 이미지 데이터를 얻을 수 있습니다.

[**`ARRAYSORT`**](modify_com#arraysort) 명령의 첫 번째 매개변수 `Array1D_List`는 리스트 전달을 지원합니다.

[**`PLAYSOUND`**](modify_com#playsound) 명령에 다음 매개변수를 추가했습니다:  
세 번째 매개변수 `groupID`를 추가하여 이 재생의 사운드 효과 그룹을 지정합니다. [**`STOPSOUND`**](modify_com#stopsound) 명령과 함께 사용하여 동일 그룹의 모든 사운드 효과를 정지할 수 있습니다. 생략 가능 `(0)`.  
네 번째 매개변수 `delay`를 추가하여 이 재생의 지연 시간을 밀리초 단위로 지정합니다. 생략 가능 `(0)`.

[**`STOPSOUND`**](modify_com#stopsound) 명령에 `groupID` 매개변수를 추가했습니다. 정지할 사운드 효과 그룹을 지정합니다. 이 매개변수를 생략하면 모든 사운드 효과를 정지합니다.

----
### 2025-10-24

`GIF`, `WEBP`와 같은 동적 이미지 읽기 및 재생을 지원합니다. 정적 이미지와 같이 리소스 파일에 정의한 다음 ERB 스크립트에서 동일한 방식으로 인쇄/표시하기만 하면 됩니다.  
[**`SETANIMETIMER`**](modify_com#setanimetimer) 명령을 사용하여 화면을 갱신하여 부드러운 재생 효과를 얻을 수 있습니다.

[**`INRANGE`**](modify_com#inrange) 명령의 첫 번째 매개변수 `value`가 문자열을 받을 수 있게 되어, 문자열의 정렬 순서가 지정 범위 내에 있는지 판단하는 데 사용됩니다.

----
### 2025-10-01

[**`FOR-NEXT`**](modify_com#for-next) 및 [**`REPEAT-REND`**](modify_com#repeat-rend) 제어문의 시작값, 종료값, 증감값 등의 임시 매개변수가 함수와 함께 스택에 들어오고 나가게 됩니다.

지정된 컬렉션 내의 모든 요소를 반복 처리하기 위한 [**`FOREACH-NEXTF`**](new_com#foreach-nextf) 제어문을 추가했습니다.

새로운 확장 변수 유형 [**`배열형 딕셔너리`**](/#ExTypeDictDim)를 추가했습니다.

딕셔너리 변수가 사용자 입력의 기본 키와 보조 키에 대해 엄격한 검사를 수행할지 제어하는 변수 키워드 [**`HARDCHECK`**](new_com#hardcheck)를 추가했습니다.

지정된 매개변수 값의 해시 코드를 생성하기 위한 [**`HASH`**](new_com#hash) 명령을 추가했습니다.

확장 변수 유형 [**`딕셔너리`**](/#ExTypeDict)가 `CONST` 키워드 선언을 지원하게 되었습니다.

- [**`ARRAYCOPY`**](modify_com#arraycopy) 명령 변경:
    - 세 번째 매개변수 `isLastDimOnly`를 추가하여 소스 배열의 마지막 차원 요소만 복사할지 지정합니다. 생략 가능 (`0`).
    - 두 번째 매개변수 `destVarName`이 리스트 및 해시 리스트의 변수명 전달을 지원합니다. `isLastDimOnly` 값이 `0`일 경우 소스 배열의 모든 요소가 대상 리스트에 추가됩니다.

----
### 2025-09-11

[**`ARRAYTIDY`**](new_com#arraytidy) 명령은 리스트 정리 후 빈 요소를 제거하게 됩니다.

[**`DICTCOPY`**](new_com#dictcopy) 명령은 딕셔너리 채우기 후 대상 변수 내의 총 요소 수를 반환합니다.

- 다음 명령은 배열 채우기 시 성공적으로 복사된 요소 수를 반환하고, 리스트 또는 해시 리스트 채우기 시 대상 변수 내의 총 요소 수를 반환합니다:
    - [**`LISTCOPY`**](new_com#listcopy)
    - [**`HASHLISTCOPY`**](new_com#hashlistcopy)
    - [**`DICTGETKEYS`**](new_com#dictgetkeys)
    - [**`DICTGETVALUES`**](new_com#dictgetvalues)
    - [**`DICTITEMGETKEYS`**](new_com#dictitemgetkeys)

주어진 매개변수 내에 동일한 값이 있는지 확인하는 [**`ANYSAME`**](new_com#anysame) 명령을 추가했습니다.

- 다음 명령에 배열, 리스트, 해시 리스트를 받는 매개변수 형식을 추가했습니다:
    - [**`STRJOIN`**](modify_com#strjoin)
    - [**`SPINEANIMLIST`**](new_com#spineanimlist-spineskinlist)
    - [**`SPINESKINLIST`**](new_com#spineanimlist-spineskinlist)

- 다음 명령에 배열과 리스트를 받는 매개변수 형식을 추가했습니다:
    - [**`ARRAYMSORT`**](modify_com#arraymsort)

----
### 2025-07-11

Spine 런타임 **4.2.xx** 버전을 지원합니다.

지정된 딕셔너리 컬렉션 내의 모든 기본 키 이름을 가져오는 [**`DICTITEMGETKEYS`**](new_com#dictitemgetkeys) 명령을 추가했습니다.

[**`STRSPLIT`**](new_com#strsplit) 명령에 네 번째 매개변수 `removeEmpty`를 추가하여 분할 후 빈 요소를 제거할지 지정합니다.

[**`LISTREMOVEAT`**](new_com#listremoveat) 명령에 세 번째 매개변수 `removeCount`를 추가하여 제거할 요소 수를 지정합니다. 기본값은 `1`입니다.

- 다음 명령에 배열, 리스트, 해시 리스트를 받는 매개변수 형식을 추가했습니다:
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

- 다음 명령에 배열과 리스트를 받는 매개변수 형식을 추가했습니다:
    - [**`ARRAYTIDY`**](new_com#arraytidy)  
      리스트의 경우, 정리 후 빈 요소는 제거되지 않습니다.

----
### 2025-06-08

AI 번역된 영어, 일본어, 한국어 버전을 모든 문서에 추가했습니다.

[**`Audio 리소스`**](/#AudioFunc)가 `sound` 폴더에서 `resources`로 통합되었습니다.

[**`GETRESOURCEEXT`**](new_com#getresourceext) 명령으로 얻는 리소스 파일 확장자에 `.`(점)이 포함됩니다.

----
### 2025-05-07

크기 조정이 필요한 배열 변수를 표시하는 사용자 정의 변수 키워드 [**`RESIZE`**](new_com#resize)를 추가했습니다.

지정된 사용자 정의 배열의 크기를 조정하는 [**`ARRAYRESIZE`**](new_com#arrayresize) 명령을 추가했습니다.

[**`확장 변수 유형`**](/#ExtendedVariableType)을 추가하여 리스트, 해시 리스트, 딕셔너리 등의 변수 유형을 지원합니다.

캐릭터형 2차원 배열이 첫 번째 매개변수 생략을 지원합니다(**`キャラクタ変数の引数を補完しない`** (캐릭터 변수 매개변수 자동 완성 안 함) 설정이 활성화되지 않은 경우).

[**`ERDNAME`**](modify_com#erdname) 명령은 세 번째 매개변수를 생략하면 배열의 마지막 차원 첨자 키워드를 찾습니다.

[**`리스트 관련`**](new_com#ListRelated), [**`해시 리스트 관련`**](new_com#HashListRelated), [**`딕셔너리 관련`**](new_com#DictRelated), [**`딕셔너리 컬렉션 관련`**](new_com#DictItemRelated) 명령을 추가했습니다.

지정된 SpriteAnime의 재생 시간에 오프셋 값을 추가하는 [**`SPRITEANIMEOFFSETTIME`**](new_com#spriteanimeoffsettime) 명령을 추가했습니다.

지정된 소스 Map의 모든 요소를 대상 Map에 복사하는 [**`MAP_COPY`**](new_com#map_copy) 명령을 추가했습니다.
