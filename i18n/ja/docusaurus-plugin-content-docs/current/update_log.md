---
sidebar_position: 4
sidebar_label: 更新履歴
---

# 更新履歴 {#UpdateLog}

----
### 2025-06-08

全てのドキュメントにAI翻訳による英語、日本語、韓国語版を追加しました。

[**`Audioリソース`**](/#AudioFunc) はsoundフォルダからresourcesに統合されました。

[**`GETRESOURCEEXT`**](new_com#getresourceext) コマンドで取得するリソースファイルの拡張子にはピリオド（`.`）が含まれます。

----
### 2025-05-07

ユーザー定義変数キーワード **`RESIZE`** を追加しました。このキーワードは、配列サイズの再設定が必要な変数をマークするために使用されます。このキーワードの詳細な使用方法については、[**`ARRAYRESIZE`**](new_com#arrayresize) を参照してください。

[**`拡張変数タイプ`**](/#ExtendedVariableType) を追加し、リスト、ハッシュリスト、辞書などの変数タイプをサポートしました。

キャラクター型二次元配列は第1引数の省略をサポートします（**`キャラクタ変数の引数を補完しない`** 設定項目が有効になっていない場合）。

[**`ERDNAME`**](modify_com#erdname) の第3引数を省略した場合、配列の最終次元にあるインデックスのキー名を取得します。

[**`リスト関連`**](new_com#ListRelated)、[**`ハッシュリスト関連`**](new_com#HashListRelated)、[**`辞書関連`**](new_com#DictRelated)、[**`辞書コレクション関連`**](new_com#DictItemRelated) コマンドを追加しました。

[**`SPRITEANIMEOFFSETTIME`**](new_com#spriteanimeoffsettime) コマンドを追加しました。指定したSpriteAnimeの再生時間にオフセット値を追加できます。

[**`MAP_COPY`**](new_com#map_copy) コマンドを追加しました。指定したソースMapのすべての要素をターゲットMapにコピーできます。