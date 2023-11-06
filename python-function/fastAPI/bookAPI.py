# "ディープラーニング"でタイトル検索して結果を受け取る
import requests
import json

base_url = "https://www.googleapis.com/books/v1/volumes"

BookInfo = {"title":"", "description":"", "author":"", "image_url":""}


def search_Books(number):
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
        BookInfo["title"] = item['volumeInfo']['title']
        BookInfo["description"] = item['volumeInfo'].get('description', [''])
        authors = item['volumeInfo'].get('authors', [''])
        
        if authors == "":
            BookInfo["author"] = item['volumeInfo'].get('publisher', [''])
        else:
            author_result = authors[0]
            if len(authors) > 2:
                author_result = '/'.join(authors)
            BookInfo["author"] = author_result
        
        img_url = item['volumeInfo']['imageLinks'].get('smallThumbnail', [''])
        if img_url == '':
            BookInfo.pop("image_url")
        else:
            BookInfo["image_url"] = img_url
        # print(f"Title: {item['volumeInfo']['title']}")
        # print(f"Authors: {item['volumeInfo'].get('authors', ['N/A'])}")
    
    # print(BookInfo)
    return BookInfo


# search_Books(9784844365174)

# タイトル、説明、画像URL、著者
# 説明は空でも返す
# 画像はなくてもいい
# 著者は1つの文字列、なければ出版社、それもなければから文字列
# BookInfo = {
#   title: string;
#   description: string;
#   author: string;
#   image_url?: string;
# };
