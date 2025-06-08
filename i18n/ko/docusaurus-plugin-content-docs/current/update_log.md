---
sidebar_position: 4
sidebar_label: 업데이트 로그
---

# 업데이트 로그 {#UpdateLog}

----
### 2025-06-08

모든 문서에 AI 번역된 영어, 일본어, 한국어 버전을 추가했습니다.

[**`Audio 리소스`**](/#AudioFunc)가 sound 폴더에서 resources로 통합되었습니다.

[**`GETRESOURCEEXT`**](new_com#getresourceext) 명령어로 획득하는 리소스 파일 확장자에는 마침표(`.`)가 포함됩니다.

----
### 2025-05-07

사용자 정의 변수 키워드 **`RESIZE`** 추가. 이 키워드는 배열 크기 재설정이 필요한 변수를 표시하는 데 사용됩니다. 자세한 사용 방법은 [**`ARRAYRESIZE`**](new_com#arrayresize) 참조.

[**`확장 변수 타입`**](/#ExtendedVariableType) 추가, 리스트/해시리스트/딕셔너리 등 변수 타입 지원.

캐릭터형 2차원 배열의 첫 번째 매개변수 생략 가능 (단, **`キャラクタ変数の引数を補完しない`** (캐릭터 변수 매개변수 자동 완성 미사용) 설정이 비활성화된 경우).

[**`ERDNAME`**](modify_com#erdname) 명령어의 세 번째 매개변수를 생략할 경우 배열 마지막 차원의 아래 첨자 키 이름을 조회함.

새로 추가된 [**`리스트 관련`**](new_com#ListRelated), [**`해시 리스트 관련`**](new_com#HashListRelated), [**`딕셔너리 관련`**](new_com#DictRelated), [**`딕셔너리 아이템 관련`**](new_com#DictItemRelated) 명령어.

[**`SPRITEANIMEOFFSETTIME`**](new_com#spriteanimeoffsettime) 명령어 추가, 지정된 SpriteAnime의 재생 시간에 오프셋 값 추가 가능.

[**`MAP_COPY`**](new_com#map_copy) 명령어 추가, 지정된 원본 Map의 모든 요소를 대상 Map에 복사 가능.
