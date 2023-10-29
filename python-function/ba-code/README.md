opencv-contrib-python@4.6.0.66 に含まれる barcode モジュールを活用しました。
- [https://docs.opencv.org/4.6.0/d6/d25/tutorial_barcode_detect_and_decode.html]

## Getting Started

本機能は複数のpythonライブラリを導入する必要があります。

```bash
pip install -r requirements.txt
```
仮想環境を使用する場合は、以下のコードをあらかじめ実行するとよいでしょう。

```bash
python -m venv env
source env/bin/activate
```

次に、以下のコードを実行すれば結果を得ることができます。

```bash
python readBacorde.py
```

あらかじめ用意してある画像以外を試したい場合は、 `images/ ` ディレクトリに任意の画像を入れ、`readBacorde.py` の `file` の値を書き換えてください。

## Author's Execution Environment

- python@3.10
- macOS ver.14.0
