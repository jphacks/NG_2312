
何がいるかわからないから、全部残した上でできる限りコメント残しました。多分邪魔になると思うので、いらなくなったら消してください。
まじで汚くてすみません。。

## Getting Started

これで多分いけるはず。

```bash
python -m venv env
source env/bin/activate
pip install -r requirements.txt
```

現段階の最終的な値が欲しいなら `test2.py `をそのまま実行。
- `test.py`：API側シミュ
- `test2.py`：呼び出し側シミュ

```bash
python test2.py
```

API込みで試したいなら、`send_re`を別ディレクトリに移して実行。Postman[https://www.postman.com/]使うならいらない。
それか、本ディレクトリで以下のコード実行後[https://localhost***/docs]を見ればなんか試せるらしい。
(そも、FastAPIの起動に以下のコードの実行が必要)

```bash
uvicorn main:app --reload 
```

## やらなきゃいけないこと

1. なんとか画像をAPI側に渡して、`readBacorde.py`に処理させる
  - `main.py`だけを編集すればいいはず
    - このファイル以外の問題が発生したらすみません...
  - データの受け取り形式はFormData
    - [https://magazine.techacademy.jp/magazine/21089]
    - 現状、この形式ではなんの検証もしていないので現在のコードはゴミ
  - 今の所、FastAPIでやっているけど、Flaskに変更でもよい
    - 長谷川さんからもらったやつ[https://qiita.com/melonpass/items/ff7fbfbb7edad2e768e2]そのまま使えそうなのでこっちに切り替えたほうがいいのかも
    - (実は無駄なことをしている疑惑です申し訳ない)
  - この際、CORSの設定をやっておく
    - [https://zenn.dev/syo_yamamoto/articles/445ce152f05b02]
    - Flask: [https://zenn.dev/chae_rryontop/articles/2f4e0e713bbb1a] 
    - FastAPI: [https://qiita.com/satto_sann/items/0e1f5dbbe62efc612a78], [https://fastapi.tiangolo.com/ja/tutorial/cors/]
  - まずは誰でもアクセスOKにしておいてよい
    - 余裕があれば特定のドメインからのアクセスにしたいけど多分無理
2. Vercelにデプロイする
  - Vercelはgithubのリポジトリを参照しているので、リポジトリの更新でデプロイ更新してくれる
  - でもJPHACKSのリポジトリ使うと金かかるみたいなので、個人のリポジトリにフォークすればよいらしい
    - [https://docs.github.com/ja/get-started/quickstart/fork-a-repo]


## Author's Execution Environment

- python@3.10
- macOS ver.14.0
