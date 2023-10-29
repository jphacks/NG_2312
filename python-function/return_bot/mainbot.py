from linebot.models import TextSendMessage

def main(data,supabase,return_day,line_bot_api):
    if data is not None:
        for row in data:
            rental_id = f"{row['id']}"
            replay_User = supabase.table("User").select("id, line_id, name, image_url").eq("id", row['borrower_id']).execute()
            data_User = replay_User.data
            #print(data_User)
            for row in data_User:
                user_id = f"{row['line_id']}"
                user_name = f"{row['name']}"
                #liff_url = 
                liff_url = f"https://liff/{rental_id}"
                messages = TextSendMessage(text=f"{user_name}""さんから借りた本は今日が返却日です\n\n"
                                            f"返却日:{return_day}\n\n"
                                            f"{liff_url}")
                line_bot_api.push_message(user_id, messages=messages)
