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

**EmueraBA** 런처는 [**`EmueraEE+EM`**](https://gitlab.com/EvilMask/emuera.em) 런처에서 수정되었으며, 현재 `.NET Framework 4.8` 플랫폼을 사용하여 구축되었습니다.

런처의 기본 제목이 `EmueraBA`로 변경되었으며, 런처의 기본 아이콘이 변경되었습니다.

그래픽 라이브러리가 [**`SkiaSharp`**](https://github.com/mono/SkiaSharp) 로 교체되었습니다. 화면 표시와 이미지 그리기 관련 기능은 모두 SkiaSharp으로 전환되었으며, **`描画インターフェース`** (그래픽 그리기 인터페이스) 구성 항목이 제거되었습니다.  
지원되는 이미지 형식에 대한 정보는 [**`GETRESOURCEEXT`**](new_com#getresourceext) 의 `사용 예` 섹션을 참조하세요.

`GIF`, `WEBP` 애니메이션 이미지 읽기 및 재생을 지원합니다. 정적 이미지처럼 resources 리소스 파일에서 정의한 다음 ERB 스크립트에서 동일한 방식으로 인쇄 표시하기만 하면 됩니다.  
[**`SETANIMETIMER`**](modify_com#setanimetimer) 명령을 사용하여 화면을 새로 고쳐 원활한 재생 효과를 얻을 수 있습니다.

자동 문자 범위 인식 기능이 구현되었습니다. 중국어, 일본어, 한국어, 영어, 이모지 문자를 정확하게 인식하고 길이를 계산할 수 있습니다. **`内部で使用する東アジア言語`** (내부에서 사용하는 동아시아 언어) 구성 항목이 제거되었습니다.

`표시 설정` 인터페이스에 새로운 **`タブ文字幅`** (탭 문자 너비) 구성 항목이 추가되었습니다. 이 구성 항목은 텍스트 내 `탭 문자(\t)`의 문자 길이를 조정하며, 기본값은 `8`입니다.  
탭 문자는 이전 텍스트의 문자 길이에 따라 자체 문자 길이를 자동으로 조정합니다. 예를 들어, 탭 문자 앞에 텍스트 `111`이 있으면 현재 탭 문자는 5개의 문자 길이를 차지합니다.

새로운 사용자 정의 변수 키워드 **`RESIZE`** 가 추가되었습니다. 이 키워드는 배열 크기를 재설정해야 하는 변수를 표시하는 데 사용됩니다. 이 키워드 사용에 대한 자세한 내용은 [**`ARRAYRESIZE`**](new_com#arrayresize)를 참조하세요.

스크린샷 기능을 지원합니다. 메뉴 모음의 `도움말 → 스크린샷 버튼`을 통해 현재 화면을 파일로 저장하거나, 새로 추가된 [**`GSNAPSHOT`**](new_com#gsnapshot) 명령을 사용하여 현재 화면의 이미지 데이터를 얻을 수 있습니다.

`resources` 폴더는 글꼴 파일 읽기를 지원합니다. `font` 폴더와 같이 글꼴 파일을 직접 배치하기만 하면 됩니다.

`RANDDATA` 배열의 길이가 더 이상 제한되지 않으며, `csv/VariableSize.CSV` 파일에서 수정할 수 있습니다.

----
### 모드 기능 {#ModuleFunc}

:::info[모드 기능]

**모드 읽기 메커니즘이 추가되었으며, 런처 메뉴 모음에 새로운 `모드 목록` 세션 창이 추가되어 여기에서 모드를 보고, 켜기/끄기, 모드 로딩 순서를 조정할 수 있습니다.**

<center>
![](/img/module_setting.png)
</center>

모드를 추가하는 방법은 다음과 같습니다:

- 게임 메인 디렉토리에 새로운 `mod` 폴더를 생성합니다. 이 폴더는 **모드 메인 디렉토리**입니다.
- `mod` 폴더 아래에 **모드 폴더**를 생성합니다. 폴더 이름은 제한되지 않습니다. 예를 들어 `MyMod`입니다.
- `MyMod` 폴더에 `_mod.csv`라는 이름의 **모드 식별 파일**을 생성하고, 아래 표의 속성에 따라 내용을 채웁니다:

|속성         |설명|
|:---:        |---|
|ID           |이 모드의 고유 식별자. 이 식별자가 비어 있거나 다른 모드와 이름이 중복되는 경우 모드는 인식되지 않습니다. **ID 이름이 함수 명명 규칙을 따르는지 확인하고, 생성 후 수정하는 것은 권장되지 않습니다**.|
|Name         |이 모드의 표시 이름.|
|Authors      |이 모드의 작성자 이름.|
|Cover        |이 모드의 표시 커버. 모드 내 이미지를 읽으려면 모드 경로로 `{0}`을 채울 수 있습니다. 예를 들어 `{0}resources/cover.png`|
|Description  |이 모드의 표시 설명. 여러 줄로 계속할 수 있습니다. **Description 속성은 다른 속성 뒤에 작성하세요**.|

```csv title="파일 경로 및 예시 내용: mod/MyMod/_mod.csv"
ID,MyMod
Name,내 모드 v1.0
Authors,Tom & Jerry
Cover,{0}resources/cover.png
Description,내 모드의 설명
내 모드의 설명1
내 모드의 설명2
```

다음으로, 모드 폴더에 다음 리소스 파일을 추가할 수 있습니다:

- 사전 설정 파일을 추가하기 위해 `csv` 폴더 생성: `.csv` `Chara*.csv` `VarExt*.csv`.
- 스크립트 파일을 추가하기 위해 `erb` 폴더 생성: `.erb` `.erh` `.erd`.
- 다음 리소스를 추가하기 위해 `resources` 폴더 생성:
  - 이미지 리소스: `.csv` `.png` `.jpg` 등. 지원되는 이미지 형식에 대한 정보는 [**`GETRESOURCEEXT`**](new_com#getresourceext) 의 `사용 예` 섹션을 참조하세요.
  - 오디오 리소스: `.csv` `.ogg` `.m4a` 등. 지원되는 오디오 형식에 대한 정보는 [**`GETRESOURCEEXT`**](new_com#getresourceext) 의 `사용 예` 섹션을 참조하세요.
  - Spine 리소스: `.csv` `.atlas` `.skel` `.json`.
  - 글꼴 리소스: `.ttf` `.otf`.
  - 플러그인 리소스: `.csv` `.dll`.
- 다국어 리소스를 추가하기 위해 `text` 폴더 생성: `.json`.
- 글꼴 리소스를 추가하기 위해 `font` 폴더 생성: `.ttf` `.otf`.

모드 내 파일은 게임 메인 디렉토리의 파일과 다르지 않으며, 파일 이름은 제한되지 않지만 모드 간 내용 중복 문제에 주의해야 합니다:

- 사전 설정 파일: `.csv` `Chara*.csv` `VarExt*.csv`
  - 내용이 중복되는 경우, 동일 모드 내에서는 첫 번째 내용이 선택되고 경고가 발생합니다. 다른 모드 간에는 뒤쪽 모드의 내용이 선택되고 경고가 발생합니다.
- 스크립트 파일: `.erb` `.erh` `.erd`
  - 내용이 중복되는 경우, 동일 모드 내에서는 첫 번째 내용이 선택되고 경고가 발생합니다. 다른 모드 간에는 뒤쪽 모드의 내용이 선택되고 경고가 발생합니다.
- 이미지 리소스, 오디오 리소스, Spine 리소스
  - 리소스 이름이 중복되는 경우, 동일 모드 내에서는 첫 번째 내용이 선택되고 경고가 발생합니다. 다른 모드 간에는 뒤쪽 모드의 내용이 선택됩니다.
- 글꼴 리소스
  - 글꼴 공식 이름이 중복되는 경우, 동일 모드 내에서는 첫 번째 내용이 선택됩니다. 다른 모드 간에는 뒤쪽 모드의 내용이 선택됩니다.
- 다국어 리소스
  - 키 이름 경로가 완전히 동일한 경우, 동일 모드 내에서는 마지막 내용이 선택됩니다. 다른 모드 간에는 뒤쪽 모드의 내용이 선택됩니다.
- 플러그인 리소스
  - 확장 메서드 이름이 중복되는 경우, 동일 모드 내에서는 첫 번째 내용이 선택되고 경고가 발생합니다. 다른 모드 간에는 뒤쪽 모드의 내용이 선택됩니다.

:::

----
### 다국어 기능 {#Multilingual}

:::info[다국어 기능]

**다국어 기능은 제작자가 게임 내 텍스트를 정리하여 현지화 번역을 용이하게 하며, 게임 실행 시 런처가 사용 가능하고 우선순위가 높은 언어 콘텐츠를 자동으로 통합하여 다국어 텍스트를 빠르게 표시할 수 있습니다.**

다국어 텍스트를 추가하는 방법은 다음과 같습니다. `간체 중국어` 언어를 추가하는 예를 들어 보겠습니다:

- 게임 메인 디렉토리에 새로운 `text` 폴더를 생성합니다. 이 폴더는 **다국어 메인 디렉토리**입니다.
- `text` 폴더 아래에 **지역 언어 폴더**를 생성합니다. 폴더 이름은 [**`로캘 언어`**](https://learn.microsoft.com/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c) 문서의 `언어 태그(Language tag)`를 참조해야 합니다.
  - 위 문서를 조회하면 `Chinese (Simplified)`의 지역 이름이 `zh-CN`임을 알 수 있으며, 이것이 폴더 이름으로 사용됩니다.
  - 폴더 이름은 대소문자를 구분하지 않으며, `밑줄(_)`과 `하이픈(-)`도 구분하지 않지만, 대문자와 `밑줄(_)`로 통일하는 것을 권장합니다. 예를 들어 `ZH_CN`입니다.
- `ZH_CN` 폴더에 임의의 `json` 형식 파일을 생성하고, 파일에 다음 예시 내용을 채웁니다:

```json title="파일 경로 및 예시 내용: text/ZH_CN/text.json"
{
  // 이것은 주석입니다.

  "键名": "内容",
  "START_GAME": "开始游戏",
  "ITEM": "物品",
  "ITEM":
  {
    "APPLE":
    {
      "NAME": "苹果",
      "DESC": "一种水果",
    },
    // 주의: 키 이름에 줄 바꿈 문자(\n)를 포함하지 마세요. 예를 들어 BA\nNANA 는 준수하지 않는 키 이름입니다. 이는 런처가 언어 콘텐츠를 통합할 때 이 문자를 이용하기 때문입니다.
    "BANANA":
    {
      "NAME": "香蕉",
      "DESC":
      [
        "大香蕉，一条大香蕉",
        "你的感觉真的很奇妙",
      ],
    },
  },
}
```

이제 `간체 중국어`의 다국어 텍스트를 성공적으로 추가했습니다. 다음으로, 설정에서 이 언어를 활성화해야 합니다:

- 런처를 열고 `모드 목록`에 들어갑니다. 창의 왼쪽 하단에 있는 `다국어 목록`에 `중국어` 옵션이 추가된 것을 볼 수 있습니다. 이 옵션을 더블 클릭하여 활성화하고 `저장` 버튼을 클릭합니다.
  - 여러 다른 언어를 추가한 경우, 마우스를 사용하여 활성화된 언어를 드래그하여 표시 순서를 조정할 수 있으며, 목록 상단이 가장 높은 우선순위를 가집니다.
  - 또한, `모드 목록`에서 모드 간에 키 이름 경로가 중복되는 경우, 뒤쪽 모드의 텍스트 콘텐츠가 우선적으로 채택됩니다.
  - `다국어 목록`을 변경할 때마다 프로그램을 재시작하여 언어 텍스트 캐시를 재설정하고, 상수 문자열로 리팩터링된 모든 코드를 재설정해야 합니다.

마지막으로, 코드에서 [**`TEXT`**](new_com#text) 및 [**`TEXTLIST`**](new_com#textlist) 명령을 사용하여 다국어 텍스트를 얻습니다. 호출할 때는 json 파일에서 자체적으로 설정한 키 이름 경로에 따라 키 이름을 입력하기만 하면 됩니다:

```
LOCALS '= TEXT("start_game")		; 텍스트 "开始游戏" 얻기, 입력 키 이름은 대소문자를 구분하지 않음
PRINTSL TEXT("ITEM")			; "物品" 출력
PRINTSL TEXT("ITEM", "APPLE", "DESC")	; "一种水果" 출력

TEXTLIST LOCALS, "ITEM", "APPLE", "DESC"
PRINTSL LOCALS:0			; "一种水果" 출력
TEXTLIST LOCALS, "ITEM", "BANANA", "DESC"
PRINTSL LOCALS:0			; "大香蕉，一条大香蕉" 출력
PRINTSL LOCALS:1			; "你的感觉真的很奇妙" 출력
```

:::

----
### 오디오 기능 {#AudioFunc}

:::info[오디오 기능]

**오디오 컴포넌트가 [**`CSCore`**](https://github.com/filoe/cscore) 로 교체되었으며, 런처 메뉴 모음에 새로운 `오디오` 세션 창이 추가되어 여기에서 다양한 볼륨과 기능을 조정할 수 있습니다.**

<center>
![](/img/audio_setting.png)
</center>

이미지 리소스와 유사하게, `resources` 폴더에 오디오 파일을 배치하고 csv 파일을 생성하여 **오디오 리소스**를 정의하여 더 많은 맞춤 오디오 효과를 지원할 수 있습니다.

```csv title="오디오 리소스의 CSV 파일 작성 형식 및 예시 내용"
; 오디오 이름,오디오 파일 이름,볼륨(100),시작 시간(00:00:00),재생 시간(오디오 파일의 총 시간)
MyMusic,MyMusic.ogg
MyMusic1,MyMusic1.m4a,100
MyMusic2,MyMusic2.wav,80,00:01:30
MyMusic3,MyMusic3.mp3,70,00:01:30,15000
```

csv 파일의 `시작 시간` 및 `재생 시간` 속성은 `TimeSpan` 또는 `ms(밀리초)` 값을 받아들입니다. `TimeSpan`의 작성 형식은 [**`TimeSpan.TryParse`**](https://learn.microsoft.com/dotnet/api/system.timespan.tryparse?view=netframework-4.8) 문서의 예시 섹션을 참조하세요.

오디오 기능에 대한 자세한 내용은 [**`오디오 관련`**](new_com#AudioRelated) 명령을 참조하세요.  
지원되는 오디오 형식에 대한 정보는 [**`GETRESOURCEEXT`**](new_com#getresourceext) 의 `사용 예` 섹션을 참조하세요.

:::

----
### Spine 애니메이션 기능 {#SpineAnimFunc}

:::info[Spine 애니메이션 기능]

**[**`Spine 런타임`**](https://zh.esotericsoftware.com/spine-runtimes) 에 대한 지원이 추가되었으며, Spine 애니메이션 파일을 읽고 [**`SkiaSharp`**](https://github.com/mono/SkiaSharp) 를 통해 화면을 렌더링 그릴 수 있습니다.**

- 현재 다음 버전의 Spine 런타임을 지원합니다:
  - **3.8.xx**
  - **4.2.xx**

Spine 리소스를 추가하는 방법은 이미지 리소스 추가와 유사합니다. Spine 리소스 파일을 `resources` 폴더에 배치하고 csv 파일을 생성한 다음, csv 파일에 다음 내용을 채웁니다:

```csv title="Spine 리소스의 CSV 파일 작성 형식 및 예시 내용"
; Spine 리소스 이름,atlas 파일,skel 파일 또는 json 파일
aris_spine, aris.atlas, aris.skel
```

이후 코드에서 [**`SPINECREATE`**](new_com#spinecreate), [**`CBGSETSPINE`**](new_com#cbgsetspine) 등과 같은 명령을 사용하여 Spine 애니메이션을 로드하고 화면에 표시할 수 있습니다.

```erb title="SPINE 관련 명령 사용 예시:"
; 애니메이션 새로 고침 간격을 밀리초 단위로 설정
SETANIMETIMER 1000 / 60

; 자체 지정 ID에 Spine 애니메이션 생성
SPINECREATE 0, "aris_spine"

; Spine 애니메이션의 스케일을 50%로 설정
SPINESETSCALE 0, 50

; Spine 애니메이션에 ANIM 설정
SPINESETANIM 0, 0, "IDLE_01", 1
SPINESETANIM 0, 1, "00", 1

; 지정된 Spine 애니메이션을 화면에 표시
CBGSETSPINE 0, 0, 0, 1
```

Spine 애니메이션 기능에 대한 자세한 내용은 [**`SPINE 관련`**](new_com#SpineRelated) 명령을 참조하세요.

:::

----
### 플러그인 기능 {#PluginFunc}

:::info[플러그인 기능]

**EmueraBA는 외부 동적 링크 라이브러리 파일(*.dll) 읽기를 지원하여, 런처 자체를 수정하지 않고 확장 메서드를 추가하고 게임 스크립트에서 호출할 수 있어 더 많은 기능 요구를 충족하고 실행 성능을 개선할 수 있습니다.**

플러그인을 구축하는 프로세스는 다음과 같습니다:

1. 먼저 [EmueraBA 런처]()의 빌드 프로세스를 실행하여 EmueraBA 런처의 개발 환경 배치를 완료합니다.
1. 클론된 EmueraBA 저장소에서 `Emuera.sln` 솔루션을 찾아 열고, Visual Studio의 솔루션 탐색기에서 `PluginExample` 프로젝트를 찾아 프로젝트 내 `PluginEntry.cs` 파일을 엽니다.
1. 플러그인에는 공개 정적 `PluginEntry` 클래스를 포함해야 하며, 이는 플러그인의 초기화 진입점입니다.
1. `PluginEntry` 클래스에서 다음 내용을 선언하여 런처에 새 기능을 추가합니다:
   - 확장 메서드를 추가하기 위해 공개 정적 `void RegisterFunctionMethod(Dictionary<string, FunctionMethod> methodList)` 함수를 선언합니다.
     - 다음 파일을 참조하여 `FunctionMethod`를 상속하는 구현 클래스의 작성법을 대략적으로 이해하고, `PluginEntry.cs` 파일에서 사용자 정의 확장 메서드를 작성할 수 있습니다:
       - Emuera\GameData\Function\Creator.cs
       - Emuera\GameData\Function\Creator.Method.cs 시리즈 파일
1. Visual Studio 인터페이스의 왼쪽 상단에서 솔루션 구성을 찾습니다. 구성이 `Debug`인 경우 `Release`로 전환합니다.
1. `PluginExample` 프로젝트를 마우스 오른쪽 버튼으로 클릭하고 `속성`을 선택한 후, `응용 프로그램` 메뉴 페이지에서 `어셈블리 이름`과 `어셈블리 정보…`의 기본 이름을 귀하의 플러그인 이름으로 변경합니다.
1. `PluginExample` 프로젝트를 마우스 오른쪽 버튼으로 클릭하고 `다시 빌드`를 선택합니다. 생성된 DLL 파일은 `PluginExample\bin\Release` 폴더에서 찾을 수 있습니다.

플러그인을 게임 본체에 추가하는 프로세스는 다음과 같습니다:

이미지 리소스를 추가하는 방법과 유사하게, 생성된 DLL 파일을 `resources` 폴더에 배치하고 csv 파일을 생성한 다음, csv 파일에 다음 내용을 채우기만 하면 됩니다.  
csv 파일에서는 `PluginEntry` 클래스를 포함하는 DLL 파일만 채우고, 다른 동반 DLL 파일은 채울 필요가 없습니다.

```csv title="플러그인 리소스의 CSV 파일 작성 형식 및 예시 내용"
; DLL 파일 이름
MyPlugin.dll
MyOtherPlugin.dll
```

:::

----
### 새로운 확장 변수 유형 {#ExtendedVariableType}

#### 리스트 {#ExTypeList}

리스트의 선언 형식은 **`#LIST(S) <변수 이름>`** 입니다.

이 변수를 선언할 때 `GLOBAL`, `SAVEDATA`, `CHARADATA`, `DYNAMIC`, `REF` 키워드와의 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 작성기 버전) 구성 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`리스트 관련`**](new_com#ListRelated) 명령을 참조하세요.

```erb title="사용 예시"
#LIST MY_LIST			; 값 유형이 `정수`, 이름이 `MY_LIST` 인 리스트 변수 선언

LISTADD MY_LIST, 10		; MY_LIST 에 값 10의 요소 추가
PRINTVL MY_LIST:0		; MY_LIST 의 0번째 요소 출력, 출력 결과는 "10"
```

----
#### 해시 리스트 {#ExTypeHashList}

해시 리스트의 선언 형식은 **`#HASHLIST(S) <변수 이름>`** 입니다.

이 변수를 선언할 때 `GLOBAL`, `SAVEDATA`, `CHARADATA`, `DYNAMIC`, `REF` 키워드와의 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 작성기 버전) 구성 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`해시 리스트 관련`**](new_com#HashListRelated) 명령을 참조하세요.

```erb title="사용 예시"
#HASHLISTS MY_HASHLIST			; 값 유형이 `문자열`, 이름이 `MY_HASHLIST` 인 해시 리스트 변수 선언

HASHLISTADD MY_HASHLIST, "TEXT"		; MY_HASHLIST 에 값 "TEXT"의 요소 추가
PRINTVL HASHLISTHAS(MY_HASHLIST, "TEXT"); MY_HASHLIST 의 값 "TEXT"에 대한 검색 결과 출력, 출력 결과는 "1"
```

----
#### 딕셔너리 {#ExTypeDict}

딕셔너리의 선언 형식은 **`#DICT_<I|S><I|S> <변수 이름>`** 입니다.  
선언된 키 유형이 `정수`인 경우 ERD 키워드 기능 사용을 지원합니다.

이 변수를 선언할 때 `CONST`, `GLOBAL`, `SAVEDATA`, `CHARADATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) 키워드와의 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 작성기 버전) 구성 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`딕셔너리 관련`**](new_com#DictRelated) 명령을 참조하세요.

```erb title="사용 예시"
#DICT_IS MY_DICT		; 키 유형이 `정수`, 값 유형이 `문자열`, 이름이 `MY_DICT` 인 딕셔너리 변수 선언

MY_DICT:6 '= "TEXT"		; MY_DICT 에 키 6, 값 "TEXT"의 요소 작성
PRINTSL MY_DICT:6		; MY_DICT 의 키 6 값 출력, 출력 결과는 "TEXT"
```

----
#### 배열형 딕셔너리 {#ExTypeDictDim}

배열형 딕셔너리의 선언 형식은 **`#DICT(S)_DIM(S) <변수 이름>(, 배열 길이 = 1)`** 입니다.  
선언된 기본 키 유형이 `정수`인 경우 ERD 키워드 기능 사용을 지원합니다.  
변수의 두 번째 차원 배열 첨자는 기본적으로 ERD 키워드 기능 사용을 지원합니다.

이 변수를 선언할 때 `GLOBAL`, `SAVEDATA`, `CHARADATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) 키워드와의 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 작성기 버전) 구성 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`딕셔너리 컬렉션 관련`**](new_com#DictItemRelated) 명령을 참조하세요.

```erb title="사용 예시"
#DICTS_DIM MY_DICTDIM, 10		; 기본 키 유형이 `문자열`, 값 유형이 `정수`, 이름이 `MY_DICTDIM` 인 배열형 딕셔너리 변수 선언, 생성된 각 배열의 길이는 `10`

DICTITEMCREATE MY_DICTDIM, "NEW"	; MY_DICTDIM 에 이름 "NEW"의 배열 생성
MY_DICTDIM:"NEW":0 = 20			; MY_DICTDIM 의 "NEW" 배열 0번째 요소에 값 20 할당
PRINTVL MY_DICTDIM:"NEW":0		; MY_DICTDIM 의 "NEW" 배열 0번째 요소 출력, 출력 결과는 "20"
```

----
#### 리스트형 딕셔너리 {#ExTypeDictList}

리스트형 딕셔너리의 선언 형식은 **`#DICT(S)_LIST(S) <변수 이름>`** 입니다.  
선언된 기본 키 유형이 `정수`인 경우 ERD 키워드 기능 사용을 지원합니다.

이 변수를 선언할 때 `GLOBAL`, `SAVEDATA`, `CHARADATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) 키워드와의 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 작성기 버전) 구성 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`리스트 관련`**](new_com#ListRelated) 및 [**`딕셔너리 컬렉션 관련`**](new_com#DictItemRelated) 명령을 참조하세요.

```erb title="사용 예시"
#DICTS_LIST MY_DICTLIST			; 기본 키 유형이 `문자열`, 값 유형이 `정수`, 이름이 `MY_DICTLIST` 인 리스트형 딕셔너리 변수 선언

DICTITEMCREATE MY_DICTLIST, "NEW"	; MY_DICTLIST 에 이름 "NEW"의 리스트 생성
LISTADD MY_DICTLIST:"NEW", 20		; MY_DICTLIST 의 "NEW" 리스트에 값 20의 요소 추가
PRINTVL MY_DICTLIST:"NEW":0		; MY_DICTLIST 의 "NEW" 리스트 0번째 요소 출력, 출력 결과는 "20"
```

----
#### 해시 리스트형 딕셔너리 {#ExTypeDictHashList}

해시 리스트형 딕셔너리의 선언 형식은 **`#DICT(S)_HASHLIST(S) <변수 이름>`** 입니다.  
선언된 기본 키 유형이 `정수`인 경우 ERD 키워드 기능 사용을 지원합니다.

이 변수를 선언할 때 `GLOBAL`, `SAVEDATA`, `CHARADATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) 키워드와의 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 작성기 버전) 구성 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`해시 리스트 관련`**](new_com#HashListRelated) 및 [**`딕셔너리 컬렉션 관련`**](new_com#DictItemRelated) 명령을 참조하세요.

```erb title="사용 예시"
#DICTS_HASHLIST MY_DICTHASHLIST			; 기본 키 유형이 `문자열`, 값 유형이 `정수`, 이름이 `MY_DICTHASHLIST` 인 해시 리스트형 딕셔너리 변수 선언

DICTITEMCREATE MY_DICTHASHLIST, "NEW"		; MY_DICTHASHLIST 에 이름 "NEW"의 해시 리스트 생성
HASHLISTADD MY_DICTHASHLIST:"NEW", 20		; MY_DICTHASHLIST 의 "NEW" 해시 리스트에 값 20의 요소 추가
PRINTVL HASHLISTHAS(MY_DICTHASHLIST:"NEW", 20)	; MY_DICTHASHLIST 의 "NEW" 해시 리스트 값 20에 대한 검색 결과 출력, 출력 결과는 "1"
```

----
#### 딕셔너리형 딕셔너리 {#ExTypeDictDict}

딕셔너리형 딕셔너리의 선언 형식은 **`#DICT(S)_DICT_<I|S><I|S> <변수 이름>`** 입니다.  
선언된 기본 키 유형이 `정수`인 경우 ERD 키워드 기능 사용을 지원합니다.  
선언된 보조 키 유형이 `정수`인 경우 ERD 키워드 기능 사용을 지원합니다.

이 변수를 선언할 때 `GLOBAL`, `SAVEDATA`, `CHARADATA`, `DYNAMIC`, `REF`, [**`HARDCHECK`**](new_com#hardcheck) 키워드와의 동시 정의를 지원합니다.  
`SAVEDATA` 키워드와 정의할 때는 **`バイナリデータライターのバージョン`** (바이너리 아카이브 작성기 버전) 구성 항목을 `1809` 이상으로 변경해야 합니다.

자세한 기능은 [**`딕셔너리 관련`**](new_com#DictRelated) 및 [**`딕셔너리 컬렉션 관련`**](new_com#DictItemRelated) 명령을 참조하세요.

```erb title="사용 예시"
#DICTS_DICT_IS MY_DICTDICT		; 기본 키 유형이 `문자열`, 보조 키 유형이 `정수`, 값 유형이 `문자열`, 이름이 `MY_DICTDICT` 인 딕셔너리형 딕셔너리 변수 선언

DICTITEMCREATE MY_DICTDICT, "NEW"	; MY_DICTDICT 에 이름 "NEW"의 딕셔너리 생성
MY_DICTDICT:"NEW":8 '= "TEXT"		; MY_DICTDICT 의 "NEW" 딕셔너리에 키 8, 값 "TEXT"의 요소 작성
PRINTSL MY_DICTDICT:"NEW":8		; MY_DICTDICT 의 "NEW" 딕셔너리 키 8 요소 출력, 출력 결과는 "TEXT"
```

----
### 문법, 명령 및 프로그램 호환성 변경 {#CompatibilityChanges}

`함수형 매크로 정의` 관련 기능의 제한이 해제되었습니다. 이 기능의 신뢰성은 완전히 테스트되지 않았습니다.

**ERD 키워드 기능 관련 변경:**

- 키워드 인덱스 값을 생략하면 시스템이 해당 키워드에 사용되지 않은 인덱스 값을 자동으로 할당합니다.  
  **경고: `SAVEDATA` 로 선언된 변수는 게임 저장 데이터 오류를 피하기 위해 인덱스 값 생략을 권장하지 않습니다.**
- 기존 키워드 이름을 인덱스 값으로 채우면 해당 키워드의 인덱스 값을 직접 참조합니다.

```csv title="ERD 키워드 기능 예시: erb/example.erd"
1,能量饮料	; "能量饮料" 의 인덱스 값은 1로 할당됨
,酒		; "酒" 의 인덱스 값은 자동으로 0으로 할당됨 (인덱스 값 0이 점유되지 않았으므로)
酒,Wine		; "Wine" 의 인덱스 값은 "酒" 에서 참조되며, 즉 0
果汁,ジュース	; "ジュース" 의 인덱스 값은 후속 "果汁" 에서 참조되며, 즉 2
,果汁		; "果汁" 의 인덱스 값은 자동으로 2로 할당됨 (인덱스 값 0과 1이 이미 점유되었으므로)
```

**FORM 문법 관련 변경:**

- 보간 변수를 사용할 때 변수 유형에 따라 중괄호(`{STR}`)와 백분율 기호(`%STR%`)를 구분할 필요가 없어졌습니다.
- 새로운 정렬 키워드 **`CENTER`** 가 추가되었습니다. 지정된 문자 길이 내에서 텍스트를 가운데 정렬할 수 있습니다. 예를 들어 `{"确认", 6, CENTER}` 는 `" 确认 "` 로 포맷됩니다.
- 정렬 매개변수로 수치 표현식을 전달할 수 있습니다. 예를 들어 `{"确认", 6, 1 + 1}` 는 `" 确认 "` 로 포맷됩니다.  
  구체적인 수치 및 의미는 다음과 같습니다:
  - 0 = 왼쪽 정렬, `LEFT` 키워드와 동등.
  - 1 = 오른쪽 정렬, `RIGHT` 키워드와 동등.
  - 2 = 가운데 정렬, `CENTER` 키워드와 동등.

**HTML 문법 관련 변경:**

- `div` 태그의 `bcolor` 속성은 `bdcolor` (borderColor)로 이름이 변경되었으며, 다른 태그의 `bcolor` (backgroundColor) 속성과의 혼동을 피합니다.
- `div` 태그의 `bdcolor` 속성의 입력 값 형식은 `'color'` 단일 색상 값으로 변경되었으며, 네 모서리 색상 값을 더 이상 받아들이지 않습니다.
- `div` 태그의 `border` 속성의 입력 값 형식은 `'thick'` 단일 수치로 변경되었으며, 네 모서리 수치를 더 이상 받아들이지 않습니다.
- `div` 태그의 `margin` 속성의 효과는 바깥쪽으로 확장되도록 변경되었으며, 안쪽으로 압축하지 않습니다.

캐릭터형 2차원 배열은 첫 번째 매개변수 생략을 지원합니다(**`キャラクタ変数の引数を補完しない`** (캐릭터 변수 매개변수 자동 완성 안 함) 구성 항목이 활성화되지 않은 경우).

[**`FOR-NEXT`**](modify_com#for-next) 및 [**`REPEAT-REND`**](modify_com#repeat-rend) 제어문의 임시 캐시는 함수와 함께 스택에 들어가고 나옵니다.

`__FILE__` 변수로 얻은 파일 경로의 백슬래시 `\\`는 슬래시 `/`로 대체되었습니다.

[**`REPLACE`**](modify_com#replace) 명령의 매개변수 형식 중 하나가 독립 명령 [**`REPLACEBYARRAY`**](new_com#replacebyarray)로 분리되었습니다.

다음 명령은 이모지 문자 🎉 처리를 지원하도록 되었습니다. 이 명령들은 이모지 문자를 처리할 때 표시 너비를 계산하여 대략적인 문자 길이를 얻습니다.  
예를 들어, `😀` 의 문자 길이는 2, `👨‍👩‍👧‍👦` 의 문자 길이는 4입니다.

- [**`STRLEN, STRLENFORM`**](modify_com#strlen-strlenform)
- [**`STRFIND`**](modify_com#strfind)
- [**`STRLENS`**](modify_com#strlens)
- [**`SUBSTRING`**](modify_com#substring)

[**`SUBSTRING`**](modify_com#substring) 명령의 경계 문자 처리 로직이 변경되었습니다. 텍스트의 선택 위치가 긴 문자 중간에 있으면 해당 문자 시작 위치로 후퇴합니다.  
즉, 시작 위치에 걸린 문자는 포함되고, 끝 위치에 걸린 문자는 무시됩니다.

[**`ERDNAME`**](modify_com#erdname) 가 세 번째 매개변수를 생략하면 배열의 마지막 차원 첨자 키워드를 검색합니다.

[**`INPUTMOUSEKEY`**](modify_com#inputmousekey) 명령은 추가적으로 `RESULTS:0` 및 `RESULT:3` 값을 변경합니다.

[**`GCREATE`**](modify_com#gcreate), [**`GCREATEFROMFILE`**](modify_com#gcreatefromfile), [**`GLOAD`**](modify_com#gsave-gload) 명령은 새 이미지를 생성하기 전에 이미 생성된 이미지를 해제합니다. 즉, 생성 전에 [**`GDISPOSE`**](https://osdn.net/projects/emuera/wiki/excom#h5-GDISPOSE.20int.20ID) 명령을 호출할 필요가 없습니다.

[**`GCREATEFROMFILE`**](modify_com#gcreatefromfile) 명령의 두 번째 매개변수는 메인 디렉토리부터의 상대 경로임을 확인해야 하며, 세 번째 매개변수는 제거되었습니다.

[**`GDASHSTYLE`**](modify_com#gdashstyle) 명령의 선 캡 효과가 변경되었습니다.

[**`GDRAWTEXT`**](modify_com#gdrawtext) 명령은 `RESULT:0` 만 반환합니다. 다른 반환 값은 더 이상 유효하지 않습니다.

[**`GDRAWGWITHMASK`**](modify_com#gdrawgwithmask) 의 그리기 결과는 알파 값과 파란색 값의 영향을 받습니다.

그래픽 라이브러리 교체로 인해 [**`GDRAWG`**](modify_com#gdrawg) 및 [**`GDRAWSPRITE`**](modify_com#gdrawsprite) 명령의 색상 행렬 사용 방법이 변경되었습니다. 자세한 내용은 [**`GSETCOLORMATRIX`**](new_com#gsetcolormatrix) 명령의 설명을 참조하세요.

[**`SETANIMETIMER`**](modify_com#setanimetimer) 명령은 [**`TINPUT`**](https://evilmask.gitlab.io/emuera.em.doc/Reference/TINPUT.html) 또는 [**`INPUTMOUSEKEY`**](modify_com#inputmousekey) 와 같은 시간 대기 중에도 애니메이션을 계속 새로 고칩니다.

[**`SPRITECREATE`**](modify_com#spritecreate) 및 [**`SPRITEANIMECREATE`**](modify_com#spriteanimecreate) 명령은 새 Sprite를 생성하기 전에 이미 생성된 비 내장 Sprite를 해제합니다. 즉, 생성 전에 [**`SPRITEDISPOSE`**](modify_com#spritedispose) 명령을 호출할 필요가 없습니다. 동일한 이름의 내장 Sprite가 이미 존재하면 생성이 실패합니다.

[**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) 명령은 내장 Sprite를 제거하는 기능이 더 이상 없지만, 내장 Sprite가 참조하는 모든 이미지를 해제할 수 있습니다.

[**`PLAYBGM`**](modify_com#playbgm) 및 [**`PLAYSOUND`**](modify_com#playsound) 명령의 첫 번째 매개변수는 오디오 이름 입력만 지원합니다. 오디오 파일 경로로 재생하려면 먼저 [**`AUDIOCREATEFROMFILE`**](new_com#audiocreatefromfile) 명령을 사용하여 오디오를 생성하세요.  
내장 오디오 리소스를 추가하는 방법은 [**`오디오 기능`**](#AudioFunc) 섹션을 참조하세요.

[**`SETBGMVOLUME`**](modify_com#setbgmvolume) 명령은 현재 재생 중인 배경 음악의 볼륨만 변경하며, 전역 볼륨에는 더 이상 영향을 미치지 않습니다.

[**`SETSOUNDVOLUME`**](modify_com#setsoundvolume) 명령은 더 이상 사용되지 않으며 효과가 없습니다.

[**`ENUMFILES`**](modify_com#enumfiles) 명령으로 얻은 파일 경로의 백슬래시 `\\`는 슬래시 `/`로 대체되었습니다.

메뉴 모음의 `タイトルに戻る` 버튼으로 타이틀 화면으로 돌아가면 다음 내용이 추가적으로 지워집니다:

- 모든 CBG 이미지 지우기, CBGBUTTON, CBGBMAP 등을 포함하며, [**`CBGCLEAR`**](https://osdn.net/projects/emuera/wiki/excom#h5-GCLEAR.20int.20ID.2C.20int.20cARGB) 명령과 동일한 효과.
- 런타임에 생성된 모든 Sprite 지우기, Sprite가 참조하는 모든 이미지 해제, [**`SPRITEDISPOSEALL`**](modify_com#spritedisposeall) 명령과 동일한 효과.
- 런타임에 생성된 모든 Spine 애니메이션 지우기, Spine 애니메이션이 참조하는 모든 이미지 해제, [**`SPINEDISPOSEALL`**](new_com#spinedisposeall) 명령과 동일한 효과.
- 런타임에 생성된 모든 오디오 지우기 및 오디오 캐시 해제, [**`AUDIODISPOSEALL`**](new_com#audiodisposeall) 명령과 동일한 효과.

`emuera.log` 게임 로그와 `console.log` 디버그 로그는 `UTF-8-BOM` 인코딩으로 저장됩니다.

`watchlist.csv` 변수 감시 목록은 `UTF-8-BOM` 인코딩으로 저장 및 읽습니다.

디버그 창을 닫아도 변수 감시 목록이 자동으로 저장되지 않습니다.
