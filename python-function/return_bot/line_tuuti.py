import os
token = os.getenv("LenBow_token")
def lineip(token):
    from linebot import LineBotApi
    LINE_CHANNEL_ACCESS_TOKEN = token
    line_bot_api = LineBotApi(LINE_CHANNEL_ACCESS_TOKEN)
    
    return line_bot_api
#line_bot_api = lineip(token)
#print(line_bot_api)
