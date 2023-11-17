import requests
import json

base_url = "https://www.googleapis.com/books/v1/volumes"
BookInfo = {"title":"", "description":"", "author":"", "image_url":""}

def search_Books(number):
    params = {
        "q": f"isbn:{number}",
        "printType": "books",
        "maxResults": 2
    }
    response = requests.get(base_url, params=params)

    if response.status_code == 200:
        results = json.loads(response.text)
    else:
        return BookInfo

    info = results["items"][0]['volumeInfo']
    
    BookInfo["title"] = info['title']
    BookInfo["description"] = info.get('description', '')
    authors = info.get('authors', '')
    
    if not authors:
        BookInfo["author"] = info.get('publisher', '')
    else:
        BookInfo["author"] = '/'.join(authors)
    
    BookInfo["image_url"] = info['imageLinks'].get('smallThumbnail', '')
    if not BookInfo["image_url"]:
        BookInfo.pop("image_url", None)
    
    return BookInfo