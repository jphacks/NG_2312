# "ディープラーニング"でタイトル検索して結果を受け取る
import requests
import json

base_url = "https://www.googleapis.com/books/v1/volumes"
# title = "ディープラーニング"
number = 9784844365174
params = {
    "q": f"isbn:{number}", # intitleで本のタイトルから検索
    "printType": "books",
    "maxResults": 10
}
response = requests.get(base_url, params=params)

if response.status_code == 200:
    results = json.loads(response.text)
else:
    results = None

# 最初の5冊の情報を表示
for i, item in enumerate(results["items"][:5]):
    print(f"Title: {item['volumeInfo']['title']}")
    print(f"Authors: {item['volumeInfo'].get('authors', ['N/A'])}")
    print()
    

# タイトル、説明、画像URL、著者
# 説明は空でも返す
# 画像はなくてもいい
# 著者は1つの文字列、なければ出版社、それもなければから文字列
