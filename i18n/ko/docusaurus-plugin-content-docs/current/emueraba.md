---
sidebar_position: 1
sidebar_label: 소개
slug: /
---

# EmueraBA

### 소개 {#Introduction}

<center>
![](/img/main_window.png)
</center>

**EmueraBA** 런처는 [**`EmueraEE+EM`**](https://gitlab.com/EvilMask/emuera.em) 런처를 수정하여 파생된 것입니다. 현재 **`.NET Framework 4.8`** 플랫폼을 사용하여 빌드되고 있습니다.

런처의 기본 제목이 `EmueraBA`로 변경되었고, 기본 아이콘도 업데이트되었습니다.

그래픽 라이브러리가 [**`SkiaSharp`**](https://github.com/mono/SkiaSharp)로 교체되었습니다. 화면 표시 및 이미지 그리기와 관련된 모든 기능이 SkiaSharp으로 이전되었으며, **`描画インターフェース`** (그래픽 그리기 인터페이스) 설정 항목이 제거되었습니다.  
지원되는 이미지 형식에 대한 정보는 [**`GETRESOURCEEXT`**](new_com#getresourceext)의 `使用例` (사용 예) 섹션을 참조하십시오.

`GIF`, `WEBP`와 같은 동적 이미지의 읽기 및 재생을 지원합니다. 정적 이미지와 같이 리소스 파일에 정의한 다음 ERB 스크립트에서 동일한 방식으로 인쇄/표시하기만 하면 됩니다.  
[**`SETANIMETIMER`**](modify_com#setanimetimer) 명령을 사용하여 화면을 새로 고쳐 부드러운 재생 효과를 얻을 수 있습니다.

자동 문자 범위 인식 기능이 구현되었습니다. 이제 중국어, 일본어, 한국어, 영어 및 이모지 문자를 정확히 식별하고 길이를 계산할 수 있습니다. **`内部で使用する東アジア言語`** (내부에서 사용하는 동아시아 언어) 설정 항목이 제거되었습니다.

`디스플레이 설정` 인터페이스에 **`タブ文字幅`** (탭 문자 너비) 설정 항목이 추가되었습니다. 이 설정은 텍스트 내 `탭 문자(\t)`의 문자 길이를 조정하며, 기본값은 `8`입니다.  
탭 문자는 이전 텍스트의 길이에 따라 자체 문자 길이를 자동으로 조정합니다. 예를 들어, 탭 앞에 텍스트 `111`이 있으면 현재 탭은 5개의 문자 공간을 차지합니다.

사용자 정의 변수 키워드 **`RESIZE`** 가 추가되었습니다. 이 키워드는 배열 크기 조정이 필요한 변수를 표시하는 데 사용됩니다. 이 키워드 사용에 대한 자세한 내용은 [**`ARRAYRESIZE`**](new_com#arrayresize)를 참조하십시오.

스크린샷 기능을 지원합니다. 메뉴 바의 `도움말 → 스크린샷 버튼`을 통해 현재 화면을 파일로 저장하거나, 새로 추가된 [**`GSNAPSHOT`**](new_com#gsnapshot) 명령을 사용하여 현재 화면의 이미지 데이터를 얻을 수 있습니다.

---
### 모듈 기능 {#ModuleFunc}

:::info[모듈 기능]

**모듈 로딩 메커니즘이 추가되었고, 런처의 메뉴 바에 새로운 `모듈 목록` 대화 상자가 추가되었습니다. 여기에서 모듈을 보고, 활성화/비활성화하며, 로딩 순서를 조정할 수 있습니다.**

<center>
![](/img/module_setting.png)
</center>

모듈을 추가하는 방법은 다음과 같습니다:

- 게임의 메인 디렉토리에 새로운 `mod` 폴더를 생성합니다. 이 폴더는 **모듈 메인 디렉토리** 역할을 합니다.
- `mod` 폴더 안에 **모듈 폴더**를 생성합니다. 폴더 이름은 임의로 지정할 수 있습니다. 예: `MyMod`.
- `MyMod` 폴더 안에 **모듈 식별 파일**인 `_mod.csv`라는 이름의 파일을 생성하고, 아래 표의 속성에 따라 내용을 작성합니다:

| 속성        | 설명                                                                                                                                                                                                                      |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ID          | 이 모듈의 고유 식별자입니다. 이 ID가 비어 있거나 다른 모듈의 ID와 중복되는 경우 모듈은 인식되지 않습니다. **ID 이름이 함수 명명 규칙을 따르는지 확인하고, 생성 후 수정하는 것은 권장되지 않습니다.**                                              |
| Name        | 이 모듈의 표시 이름입니다.                                                                                                                                                                                               |
| Authors     | 이 모듈의 작성자입니다.                                                                                                                                                                                                  |
| Cover       | 이 모듈의 표시용 커버 이미지입니다. 모듈 내부의 이미지를 로드하려면 모듈 경로로 `{0}`를 사용할 수 있습니다. 예: `{0}resources/cover.png`                                                                             |
| Description | 이 모듈의 표시용 설명입니다. 여러 줄 설명이 지원됩니다. **Description 속성은 다른 모든 속성 뒤에 작성되어 있는지 확인하십시오.**                                                                                        |

```csv title="파일 경로 및 예제 내용: mod/MyMod/_mod.csv"
ID,MyMod
Name,내 모드 v1.0
Authors,Tom & Jerry
Cover,{0}resources/cover.png
Description,내 모드 설명
내 모드 설명 첫 번째 줄
내 모드 설명 두 번째 줄
```

다음으로, 모듈 폴더 내에 다음 리소스 파일을 추가할 수 있습니다:

- `ERB` 폴더를 생성하여 `ERB, ERH, ERD` 파일을 추가합니다.
- `resources` 폴더를 생성하여 `csv, png, jpg, webp`와 같은 이미지 리소스를 추가합니다.
- `sound` 폴더를 생성하여 `csv, ogg, m4a, wav, mp3`와 같은 오디오 리소스를 추가합니다.
- `text` 폴더를 생성하여 `json` 형식의 다국어 리소스를 추가합니다.
- `font` 폴더를 생성하여 `ttf, otf` 형식의 폰트 리소스를 추가합니다.

모듈 내의 리소스 파일은 게임 메인 디렉토리 아래의 리소스 파일과 다르지 않습니다. 파일 이름에 제한은 없지만, 모듈 간 리소스 중복 문제에 유의하십시오:

- `ERB, ERH, ERD` 파일에서 내용이 중복되는 경우, 나중에 로드된 모듈의 내용은 건너뛰고 경고가 발행됩니다.
- Sprite 리소스에서 이름이 중복되는 경우, 동일 모듈 내 중복은 경고와 함께 건너뛰어집니다. 서로 다른 모듈 간에는 나중에 로드된 모듈의 내용이 우선합니다.
- Audio 리소스에서 이름이 중복되는 경우, 동일 모듈 내 중복은 경고와 함께 건너뛰어집니다. 서로 다른 모듈 간에는 나중에 로드된 모듈의 내용이 우선합니다.
- 다국어 리소스에서 키 경로 이름이 중복되는 경우, 나중 항목 및 나중에 로드된 모듈의 텍스트가 우선합니다.
- 폰트 리소스에서 폰트 이름이 중복되는 경우, 나중에 로드된 모듈의 내용이 우선합니다.

:::

---
### 다국어 기능 {#Multilingual}

:::info[다국어 기능]

**다국어 기능은 제작자가 게임 내 텍스트를 정리하여 현지화 번역을 수행하는 데 편리합니다. 런타임 중에는 런처가 사용 가능한 언어 콘텐츠와 우선순위를 자동으로 통합하여 다국어 텍스트를 빠르게 표시합니다.**

다국어 텍스트를 추가하는 방법은 다음과 같습니다. `간체 중국어`를 추가하는 예를 들어 설명합니다:

- 게임의 메인 디렉토리에 새로운 `text` 폴더를 생성합니다. 이 폴더는 **다국어 메인 디렉토리** 역할을 합니다.
- `text` 폴더 안에 **로케일 언어 폴더**를 생성합니다. 폴더 이름은 [**`로케일 언어`**](https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c) 문서의 `언어 태그(Language tag)`를 참조해야 합니다.
  - 문서를 참조하면 `Chinese (Simplified)`의 로케일 이름이 `zh-CN`임을 알 수 있습니다. 이 이름이 폴더 이름으로 사용됩니다.
  - 폴더 이름은 대소문자를 구분하지 않으며, `밑줄(_)`과 `하이픈(-)`은 동일하게 취급됩니다. 그러나 대문자와 `밑줄(_)`로 통일하는 것을 권장합니다(예: `ZH_CN`).
- `ZH_CN` 폴더 안에 임의의 `json` 형식 파일을 생성하고, 아래와 같은 예제 내용을 작성합니다:

```json title="파일 경로 및 예제 내용: text/ZH_CN/text.json"
{
  // 이것은 주석입니다.

  "키이름": "내용",
  "START_GAME": "게임 시작",
  "ITEM": "아이템",
  "ITEM":
  {
    "APPLE":
    {
      "NAME": "사과",
      "DESC": "과일의 일종",
    },
    // 참고: 키 이름에 줄 바꿈 문자(\n)를 포함하지 마십시오. 예: BA\nNANA는 유효하지 않은 키 이름입니다. 이는 런처가 언어 콘텐츠를 통합할 때 이 문자를 사용하기 때문입니다.
    "BANANA":
    {
      "NAME": "바나나",
      "DESC":
      [
        "큰 바나나, 큰 바나나",
        "당신의 느낌은 정말 멋지네요",
      ],
    },
  },
}
```

이제 `간체 중국어`에 대한 다국어 텍스트 추가를 성공했습니다. 다음으로, 설정에서 이 언어를 활성화해야 합니다:

- 런처를 열고 `모듈 목록`으로 들어갑니다. 창 왼쪽 하단의 `다국어 목록`에 `중국어` 옵션이 추가된 것을 볼 수 있습니다. 이 옵션을 더블클릭하여 활성화하고 `저장` 버튼을 클릭합니다.
  - 여러 다른 언어를 추가한 경우, 활성화된 언어를 드래그 앤 드롭하여 표시 순서를 조정할 수 있습니다. 목록 상단이 가장 높은 우선순위를 가집니다.
  - 또한, `모듈 목록`에서 모듈 간에 키 경로 이름이 중복되는 경우, 나중에 로드된 모듈의 텍스트 콘텐츠가 우선합니다.
  - `다국어 목록`을 변경할 때마다 언어 텍스트 캐시와 상수 문자열로 재구성된 모든 코드를 재설정하려면 프로그램을 재시작해야 합니다.

마지막으로, 코드에서 [**`TEXT`**](new_com#text) 및 [**`TEXTLIST`**](new_com#textlist) 명령을 사용하여 다국어 텍스트를 검색합니다. 호출할 때는 json 파일에서 자체 설정한 키 경로에 따라 키 이름을 입력하기만 하면 됩니다:

```
LOCALS '= TEXT("start_game")        ; 텍스트 "게임 시작"을 검색합니다. 입력 키 이름은 대소문자를 구분하지 않습니다.
PRINTSL TEXT("ITEM")                ; "아이템"을 인쇄합니다.
PRINTSL TEXT("ITEM", "APPLE", "DESC") ; "과일의 일종"을 인쇄합니다.

TEXTLIST LOCALS, "ITEM", "APPLE", "DESC"
PRINTSL LOCALS:0                    ; "과일의 일종"을 인쇄합니다.
TEXTLIST LOCALS, "ITEM", "BANANA", "DESC"
PRINTSL LOCALS:0                    ; "큰 바나나, 큰 바나나"를 인쇄합니다.
PRINTSL LOCALS:1                    ; "당신의 느낌은 정말 멋지네요"를 인쇄합니다.
```

:::

---
### 오디오 기능 {#AudioFunc}

:::info[오디오 기능]

**오디오 컴포넌트가 [**`CSCore`**](https://github.com/filoe/cscore)로 교체되었으며, 런처 메뉴 바에 새로운 `오디오` 대화 상자가 추가되었습니다. 여기에서 다양한 볼륨 설정을 조정할 수 있습니다.**

<center>
![](/img/audio_setting.png)
</center>

이미지 리소스와 마찬가지로 `resources` 폴더에 오디오 파일을 배치하고, csv 파일을 생성하여 **Audio 리소스**를 정의하면 더 사용자 정의된 오디오 효과를 얻을 수 있습니다.

```csv title="Audio 리소스 형식 및 예제 내용:"
; 오디오명,오디오파일명,볼륨(100),시작시간(00:00:00),재생시간(오디오파일의 총 재생 시간)
MyMusic,MyMusic.ogg
MyMusic1,MyMusic1.m4a,100
MyMusic2,MyMusic2.wav,80,00:01:30
MyMusic3,MyMusic3.mp3,70,00:01:30,15000
```

csv 파일에서 `시작시간` 및 `재생시간` 속성은 `TimeSpan` 또는 `ms(밀리초)` 값을 받을 수 있습니다. `TimeSpan` 형식에 대해서는 [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) 문서의 예제 섹션을 참조하십시오.

오디오 기능에 대한 자세한 내용은 [**`오디오 관련`**](new_com#AudioRelated) 명령을 참조하십시오.  
지원되는 오디오 형식에 대한 정보는 [**`GETRESOURCEEXT`**](new_com#getresourceext)의 `使用例` (사용 예) 섹션을 참조하십시오.

:::

---
### Spine 애니메이션 기능 {#SpineAnimFunc}

:::info[Spine 애니메이션 기능]

[**`Spine 런타임`**](https://zh.esotericsoftware.com/spine-runtumes) 지원이 추가되어 Spine 애니메이션 파일을 읽고 [**`SkiaSharp`**](https://github.com/mono/SkiaSharp)를 통해 렌더링하여 그릴 수 있습니다.

- 현재 다음 Spine 런타임 버전을 지원합니다:
    -  **3.8.xx**
    -  **4.2.xx**

Spine 리소스를 추가하는 방법은 이미지 리소스 추가와 유사합니다. Spine 리소스 파일을 `resources` 폴더에 배치하고, csv 파일을 생성하여 다음 내용을 작성합니다:

```csv title="Spine 리소스 형식 및 예제 내용:"
; Spine리소스명,atlas파일,skel파일또는json파일
aris_spine, aris.atlas, aris.skel
```

그런 다음 코드에서 [**`SPINECREATE`**](new_com#spinecreate), [**`CBGSETSPINE`**](new_com#cbgsetspine) 등의 명령을 사용하여 Spine 애니메이션을 로드하고 화면에 표시할 수 있습니다.

```erb title="SPINE 관련 명령 사용 예:"
; 애니메이션 갱신 간격을 밀리초 단위로 설정
SETANIMETIMER 1000 / 60

; 지정된 ID에 Spine 애니메이션 생성
SPINECREATE 0, "aris_spine"

; Spine 애니메이션의 스케일을 50%로 설정
SPINESETSCALE 0, 50

; Spine 애니메이션에 ANIM 설정
SPINESETANIM 0, 0, "IDLE_01", 1
SPINESETANIM 0, 1, "00", 1

; 지정된 Spine 애니메이션을 화면에 표시
CBGSETSPINE 0, 0, 0, 1
```

Spine 애니메이션 기능에 대한 자세한 내용은 [**`SPINE 관련`**](new_com#SpineRelated) 명령을 참조하십시오.

:::

---
### 새로운 확장 변수 유형 {#ExtendedVariableType}

#### 리스트 {#ExTypeList}

리스트의 선언 형식은 **`#LIST(S) <변수명>`** 입니다.

이 변수를 선언할 때 `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF` 키워드와 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 기록기 버전) 설정 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`리스트 관련`**](new_com#ListRelated) 명령을 참조하십시오.

:::note[사용 예]
```erb
#LIST MY_LIST             ; `정수` 형 값을 가진 `MY_LIST`라는 이름의 리스트 변수 선언

LISTADD MY_LIST, 10       ; MY_LIST에 값 10인 요소 추가
PRINTVL MY_LIST:0         ; MY_LIST의 0번째 요소 인쇄. 결과는 "10"
```
:::

---
#### 해시 리스트 {#ExTypeHashList}

해시 리스트의 선언 형식은 **`#HASHLIST(S) <변수명>`** 입니다.

이 변수를 선언할 때 `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF` 키워드와 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 기록기 버전) 설정 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`해시 리스트 관련`**](new_com#HashListRelated) 명령을 참조하십시오.

:::note[사용 예]
```erb
#HASHLISTS MY_HASHLIST            ; `문자열` 형 값을 가진 `MY_HASHLIST`라는 이름의 해시 리스트 변수 선언

HASHLISTADD MY_HASHLIST, "TEXT"   ; MY_HASHLIST에 값 "TEXT"인 요소 추가
PRINTVL HASHLISTHAS(MY_HASHLIST, "TEXT") ; MY_HASHLIST 내에서 값 "TEXT"의 검색 결과 인쇄. 결과는 "1"
```
:::

---
#### 딕셔너리 {#ExTypeDict}

딕셔너리의 선언 형식은 **`#DICT_<I|S><I|S> <변수명>`** 입니다.  
선언된 키 유형이 `정수`인 경우 ERD 키워드 기능을 지원합니다.

이 변수를 선언할 때 `CONST`, `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) 키워드와 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 기록기 버전) 설정 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`딕셔너리 관련`**](new_com#DictRelated) 명령을 참조하십시오.

:::note[사용 예]
```erb
#DICT_IS MY_DICT      ; `정수` 형 키와 `문자열` 형 값을 가진 `MY_DICT`라는 이름의 딕셔너리 변수 선언

MY_DICT:6 '= "TEXT"   ; MY_DICT에 키 6, 값 "TEXT"인 요소 기록
PRINTSL MY_DICT:6     ; MY_DICT 내 키 6의 값 인쇄. 결과는 "TEXT"
```
:::

---
#### 배열형 딕셔너리 {#ExTypeDictDim}

배열형 딕셔너리의 선언 형식은 **`#DICT(S)_DIM(S) <변수명>(, 배열길이 = 1)`** 입니다.  
선언된 기본 키 유형이 `정수`인 경우 ERD 키워드 기능을 지원합니다.  
변수의 두 번째 차원 배열 첨자는 기본적으로 ERD 키워드 기능을 지원합니다.

이 변수를 선언할 때 `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) 키워드와 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 기록기 버전) 설정 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`딕셔너리 컬렉션 관련`**](new_com#DictItemRelated) 명령을 참조하십시오.

:::note[사용 예]
```erb
#DICTS_DIM MY_DICTDIM, 10        ; `문자열` 형 기본 키와 `정수` 형 값을 가진 `MY_DICTDIM`이라는 이름의 배열형 딕셔너리 변수 선언. 이 변수가 생성하는 각 배열의 길이는 `10`입니다.

DICTITEMCREATE MY_DICTDIM, "NEW" ; MY_DICTDIM 내에 "NEW"라는 이름의 배열 생성
MY_DICTDIM:"NEW":0 = 20          ; MY_DICTDIM 내 "NEW" 배열의 0번째 요소에 값 20 할당
PRINTVL MY_DICTDIM:"NEW":0       ; MY_DICTDIM 내 "NEW" 배열의 0번째 요소 인쇄. 결과는 "20"
```
:::

---
#### 리스트형 딕셔너리 {#ExTypeDictList}

리스트형 딕셔너리의 선언 형식은 **`#DICT(S)_LIST(S) <변수명>`** 입니다.  
선언된 기본 키 유형이 `정수`인 경우 ERD 키워드 기능을 지원합니다.

이 변수를 선언할 때 `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) 키워드와 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 기록기 버전) 설정 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`리스트 관련`**](new_com#ListRelated) 및 [**`딕셔너리 컬렉션 관련`**](new_com#DictItemRelated) 명령을 참조하십시오.

:::note[사용 예]
```erb
#DICTS_LIST MY_DICTLIST          ; `문자열` 형 기본 키와 `정수` 형 값을 가진 `MY_DICTLIST`라는 이름의 리스트형 딕셔너리 변수 선언

DICTITEMCREATE MY_DICTLIST, "NEW" ; MY_DICTLIST 내에 "NEW"라는 이름의 리스트 생성
LISTADD MY_DICTLIST:"NEW", 20    ; MY_DICTLIST 내 "NEW" 리스트에 값 20인 요소 추가
PRINTVL MY_DICTLIST:"NEW":0      ; MY_DICTLIST 내 "NEW" 리스트의 0번째 요소 인쇄. 결과는 "20"
```
:::

---
#### 해시 리스트형 딕셔너리 {#ExTypeDictHashList}

해시 리스트형 딕셔너리의 선언 형식은 **`#DICT(S)_HASHLIST(S) <변수명>`** 입니다.  
선언된 기본 키 유형이 `정수`인 경우 ERD 키워드 기능을 지원합니다.

이 변수를 선언할 때 `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) 키워드와 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 기록기 버전) 설정 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`해시 리스트 관련`**](new_com#HashListRelated) 및 [**`딕셔너리 컬렉션 관련`**](new_com#DictItemRelated) 명령을 참조하십시오.

:::note[사용 예]
```erb
#DICTS_HASHLIST MY_DICTHASHLIST          ; `문자열` 형 기본 키와 `정수` 형 값을 가진 `MY_DICTHASHLIST`라는 이름의 해시 리스트형 딕셔너리 변수 선언

DICTITEMCREATE MY_DICTHASHLIST, "NEW"    ; MY_DICTHASHLIST 내에 "NEW"라는 이름의 해시 리스트 생성
HASHLISTADD MY_DICTHASHLIST:"NEW", 20    ; MY_DICTHASHLIST 내 "NEW" 해시 리스트에 값 20인 요소 추가
PRINTVL HASHLISTHAS(MY_DICTHASHLIST:"NEW", 20) ; MY_DICTHASHLIST 내 "NEW" 해시 리스트에서 값 20의 검색 결과 인쇄. 결과는 "1"
```
:::

---
#### 딕셔너리형 딕셔너리 {#ExTypeDictDict}

딕셔너리형 딕셔너리의 선언 형식은 **`#DICT(S)_DICT_<I|S><I|S> <변수명>`** 입니다.  
선언된 기본 키 유형이 `정수`인 경우 ERD 키워드 기능을 지원합니다.  
선언된 보조 키 유형이 `정수`인 경우 ERD 키워드 기능을 지원합니다.

이 변수를 선언할 때 `GLOBAL`, `SAVEDATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) 키워드와 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 기록기 버전) 설정 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`딕셔너리 관련`**](new_com#DictRelated) 및 [**`딕셔너리 컬렉션 관련`**](new_com#DictItemRelated) 명령을 참조하십시오.

:::note[사용 예]
```erb
#DICTS_DICT_IS MY_DICTDICT      ; `문자열` 형 기본 키, `정수` 형 보조 키, `문자열` 형 값을 가진 `MY_DICTDICT`라는 이름의 딕셔너리형 딕셔너리 변수 선언

DICTITEMCREATE MY_DICTDICT, "NEW" ; MY_DICTDICT 내에 "NEW"라는 이름의 딕셔너리 생성
MY_DICTDICT:"NEW":8 '= "TEXT"   ; MY_DICTDICT 내 "NEW" 딕셔너리에 보조 키 8, 값 "TEXT"인 요소 기록
PRINTSL MY_DICTDICT:"NEW":8     ; MY_DICTDICT 내 "NEW" 딕셔너리의 보조 키 8의 값 인쇄. 결과는 "TEXT"
```
:::

---
### 프로그램 및 명령 호환성 변경 {#CompatibilityChanges}

`함수형 매크로 정의` 관련 기능이 해제되었습니다. 이 기능의 신뢰성은 완전히 테스트되지 않았습니다.

- ERD 키워드 기능 개선:
    - 키워드 인덱스 값을 생략하면 시스템이 해당 키워드에 사용되지 않은 인덱스 값을 자동으로 할당합니다.  
      **경고: SAVEDATA 선언이 있는 변수는 게임 저장 데이터 손상을 피하기 위해 인덱스 값 생략을 권장하지 않습니다.**
    - 기존 키워드 이름을 인덱스 값으로 입력하면 해당 키워드의 인덱스 값이 직접 참조됩니다.

```csv title="ERD 키워드 기능 예: ERB/example.erd"
1,에너지 드링크		; "에너지 드링크"의 인덱스 값은 1로 할당됩니다.
,술			; "술"의 인덱스 값은 자동으로 0으로 할당됩니다. 왜냐하면 인덱스 0이 사용되지 않았기 때문입니다.
술,Wine			; "Wine"의 인덱스 값은 "술"을 참조하므로 0입니다.
과일 주스,ジュース	; "ジュース"의 인덱스 값은 나중의 "과일 주스"를 참조하므로 2입니다.
,과일 주스		; "과일 주스"의 인덱스 값은 자동으로 2로 할당됩니다. 왜냐하면 인덱스 0과 1이 이미 사용되었기 때문입니다.
```

캐릭터형 2차원 배열은 첫 번째 매개변수를 생략할 수 있습니다(**`キャラクタ変数の引数を補完しない`** (캐릭터 변수 매개변수 자동 완성 안 함) 설정이 활성화되지 않은 경우).

[**`FOR-NEXT`**](modify_com#for-next) 및 [**`REPEAT-REND`**](modify_com#repeat-rend) 제어문의 임시 캐시는 함수와 함께 스택에 들어오고 나갑니다.

`__FILE__` 변수로 얻은 파일 경로의 백슬래시 `\\`가 슬래시 `/`로 교체됩니다.

[**`REPLACE`**](modify_com#replace) 명령의 매개변수 형식 중 하나가 독립 명령 [**`REPLACEBYARRAY`**](new_com#replacebyarray)로 분리되었습니다.

다음 명령이 이제 이모지🎉 처리를 지원합니다. 이러한 명령은 이모지를 처리할 때 표시 너비를 계산하여 대략적인 문자 길이를 도출합니다.  
예를 들어 `😀`의 문자 길이는 2이고, `👨‍👩‍👧‍👦`의 문자 길이는 4입니다.

- [**`STRLEN, STRLENFORM`**](modify_com#strlen-strlenform)
- [**`STRFIND`**](modify_com#strfind)
- [**`STRLENS`**](modify_com#strlens)
- [**`SUBSTRING`**](modify_com#substring)

[**`SUBSTRING`**](modify_com#substring) 명령의 경계 문자 처리 논리가 변경되었습니다. 텍스트의 선택 위치가 넓은 문자의 중간에 위치하면 해당 문자의 시작 위치로 후퇴합니다.  
즉, 시작 위치에 걸린 문자는 포함되고, 끝 위치에 걸린 문자는 무시됩니다.

[**`ERDNAME`**](modify_com#erdname)는 세 번째 매개변수를 생략하면 배열의 마지막 차원 첨자 키워드를 찾습니다.

[**`INPUTMOUSEKEY`**](modify_com#inputmousekey) 명령은 `RESULTS:0`과 `RESULT:3`의 값을 추가로 변경합니다.

[**`GCREATE`**](modify_com#gcreate), [**`GCREATEFROMFILE`**](modify_com#gcreatefromfile), [**`GLOAD`**](modify_com#gsave-gload) 명령은 이미지를 생성하기 전에 이미 생성된 이미지를 해제합니다. 즉, 생성하기 전에 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 명령을 호출할 필요가 없습니다.

[**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) 명령의 두 번째 매개변수는 반드시 메인 디렉토리에서 시작하는 상대 경로여야 합니다. 또한 세 번째 매개변수는 제거되었습니다.

[**`GDASHSTYLE`**](modify_com#gdashstyle) 명령의 선 끝 효과가 변경되었습니다.

[**`GDRAWTEXT`**](modify_com#gdrawtext) 명령은 `RESULT:0`만 반환하며, 다른 반환 값은 더 이상 유효하지 않습니다.

[**`GDRAWGWITHMASK`**](modify_com#gdrawgwithmask)의 그리기 결과는 알파 값과 파란색 값의 영향을 받습니다.

그래픽 라이브러리 변경으로 인해, [**`GDRAWG`**](modify_com#gdrawg) 및 [**`GDRAWSPRITE`**](modify_com#gdrawsprite) 명령의 컬러 매트릭스 사용법이 변경되었습니다. 자세한 내용은 [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) 명령의 설명을 참조하십시오.

[**`SETANIMETIMER`**](modify_com#setanimetimer) 명령은 [**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) 또는 [**`INPUTMOUSEKEY`**](modify_com#inputmousekey)와 같은 시간 대기 중에도 애니메이션 갱신을 계속합니다.

[**`SPRITECREATE`**](modify_com#spritecreate) 및 [**`SPRITEANIMECREATE`**](modify_com#spriteanimecreate) 명령은 스프라이트를 생성하기 전에 이미 생성된 비 내장 스프라이트를 해제합니다. 즉, 생성하기 전에 [**`SPRITEDISPOSE`**](modify_com#spritedispose) 명령을 호출할 필요가 없습니다. 동일한 이름의 내장 스프라이트가 이미 존재하면 생성에 실패합니다.

[**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) 명령은 더 이상 내장 스프라이트를 제거하는 기능을 갖지 않지만, 모든 내장 스프라이트가 참조하는 이미지를 해제할 수 있습니다.

[**`PLAYBGM`**](modify_com#playbgm) 및 [**`PLAYSOUND`**](modify_com#playsound) 명령의 첫 번째 매개변수는 Audio 이름만 입력을 지원합니다. 오디오 파일 경로를 통해 재생하려면 먼저 [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) 명령을 사용하여 Audio를 생성하십시오.  
내장 Audio 리소스를 추가하는 방법은 [**`오디오 기능`**](#AudioFunc) 섹션을 참조하십시오.

[**`SETBGMVOLUME`**](modify_com#setbgmvolume) 명령은 현재 재생 중인 배경 음악의 볼륨만 변경하며, 전역 볼륨에는 더 이상 영향을 미치지 않습니다.

[**`SETSOUNDVOLUME`**](modify_com#setsoundvolume) 명령은 더 이상 사용되지 않으며 어떤 효과도 없습니다.

[**`ENUMFILES`**](modify_com#enumfiles) 명령으로 얻은 파일 경로의 백슬래시 `\\`가 슬래시 `/`로 교체됩니다.

HTML 코드 관련 변경:
- `div` 태그의 `bcolor` 속성은 `bdcolor`(borderColor)로 이름이 변경되어 `bcolor`(backgroundColor)와 혼동을 피합니다.
- `div` 태그의 `bdcolor` 속성의 입력 값 형식은 단일 색상 값 `'color'`로 변경되었으며, 네 모서리 색상 값은 더 이상 받지 않습니다.
- `div` 태그의 `border` 속성의 입력 값 형식은 단일 숫자 값 `'thick'`로 변경되었으며, 네 모서리 숫자 값은 더 이상 받지 않습니다.
- `div` 태그의 `margin` 속성의 효과는 바깥쪽으로 확장되도록 변경되었으며, 안쪽으로 압축하지 않습니다.

메뉴 바의 `タイトルに戻る` (타이틀로 돌아가기) 버튼을 통해 타이틀 화면으로 돌아가면 다음과 같은 내용이 추가로 지워집니다:

- 모든 CBG 이미지를 지웁니다. CBGBUTTON, CBGBMAP 등도 포함됩니다. 효과는 [**`CBGCLEAR`**](https://osdn.net/projects/emuera/wiki/excom#h5-GCLEAR.20int.20ID.2C.20int.20cARGB) 명령과 동일합니다.
- 런타임 중 생성된 모든 스프라이트를 지우고, 스프라이트가 참조하는 모든 이미지를 해제합니다. 효과는 [**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) 명령과 동일합니다.
- 런타임 중 생성된 모든 Spine 애니메이션을 지우고, Spine 애니메이션이 참조하는 모든 이미지를 해제합니다. 효과는 [**`SPINEDISPOSEALL`**](new_com#spinedisposeall) 명령과 동일합니다.
- 런타임 중 생성된 모든 Audio를 지우고 오디오 캐시를 해제합니다. 효과는 [**`AUDIODISPOSEALL`**](new_com#audiodisposeall) 명령과 동일합니다.

`emuera.log` 게임 로그와 `console.log` 디버그 로그는 `UTF-8-BOM` 인코딩으로 저장됩니다.

`watchlist.csv` 변수 감시 목록은 `UTF-8-BOM` 인코딩으로 저장 및 읽기됩니다.

디버그 창을 닫을 때 변수 감시 목록이 자동으로 저장되지 않습니다.
