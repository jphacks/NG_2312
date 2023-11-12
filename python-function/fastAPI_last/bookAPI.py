import requests
import json

base_url = "https://www.googleapis.com/books/v1/volumes"
BookInfo = {"title":"", "description":"", "author":"", "image_url":""}

def search_Books(number):
    params = {
        "q": f"isbn:{number}",
        "printType": "books",
        "maxResults": 10
    }
    response = requests.get(base_url, params=params)

    if response.status_code == 200:
        results = json.loads(response.text)
    else:
        results = None

    for i, item in enumerate(results["items"][:2]):
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
        
        BookInfo["image_url"] = item['volumeInfo']['imageLinks'].get('smallThumbnail', [''])
        if BookInfo["image_url"] == '':
            BookInfo.pop("image_url")
    
    return BookInfo