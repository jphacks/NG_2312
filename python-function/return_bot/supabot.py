import os 
url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")

def base(url,key):
    from datetime import datetime
    from supabase import create_client
    line_id_list = []

    #supabase URL&key
    SUPABASE_URL = url
    SUPABASE_KEY = key
    # Supabaseクライアントを作成
    supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

    today_time = datetime.now()
    return_day = today_time.strftime("%Y-%m-%d")

    #data = supabase.table("test_jphack").eq('name',"akiyosi").execute()
    replay_Rental = supabase.table("Rental").select("id, borrower_id").eq("return_date", return_day).execute()
    data = replay_Rental.data
    for item in data:
        line_id_list.append(item)

    return supabase, return_day, data

#supabase, return_day, data= base(url,key)