#from linebot import LineBotApi
from linebot.models import TextSendMessage
import os
token = os.getenv("line_access_token")
def lineip(token):
    from linebot import LineBotApi
    LINE_CHANNEL_ACCESS_TOKEN = token
    #LINE_CHANNEL_ACCESS_TOKEN = "1hU6cN9xftNPzqyzti+CmO9t+WGazLwGd7uGWHXyl9D+kntAhpL5B8CsBekY98llONBNFTxQd+AoQNW0/8qGdPq3dJvfatJHblAYSzih8J+osdA5+qPOM7NqBqsmHUx6S1GDOQG09BVAxet6a5mEMQdB04t89/1O/w1cDnyilFU="
    line_bot_api = LineBotApi(LINE_CHANNEL_ACCESS_TOKEN)
    
    return line_bot_api
line_bot_api = lineip(token)
print(line_bot_api)
