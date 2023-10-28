from linebot.models import TextSendMessage

def main(data,supabase,return_day,line_bot_api):
    #from linebot.models import TextSendMessage
    if data is not None:
        for row in data:
            replay_User = supabase.table("User").select("id, line_id, name, image_url").eq("id", row['lender_id']).execute()
            data_User = replay_User.data
            #print(data_User)
            for row in data_User:
                #list_line_id.append(row['line_id'])
                #print(row['line_id'])
                user_id = f"{row['line_id']}"
                #print(user_id)
                #print(list_line_id)
                liff_url = f"https://liff/{user_id}"
                messages = TextSendMessage(text=f"今日が返却日です\n\n"
                                            f"返却日:{return_day}\n\n"
                                            f"{liff_url}")
                line_bot_api.push_message(user_id, messages=messages)
