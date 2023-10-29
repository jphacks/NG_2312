import datetime
import logging
import azure.functions as func
from line_tuuti import lineip
from supabot import base
from mainbot import main
import os

app = func.FunctionApp()

@app.function_name(name="mytimer")
@app.schedule(schedule="0 6 * * *", arg_name="mytimer", run_on_startup=True,
              use_monitor=False) 
def test_function(mytimer: func.TimerRequest) -> None:
    utc_timestamp = datetime.datetime.utcnow().replace(
        tzinfo=datetime.timezone.utc).isoformat()

    if mytimer.past_due:
        logging.info('The timer is past due!')
    logging.info('Python timer trigger function ran at %s', utc_timestamp)
    url = os.getenv("SUPABASE_URL")
    key = os.getenv("SUPABASE_KEY")
    token = os.getenv('LenBow_token')
    line_bot_api = lineip(token)
    supabase, return_day,data = base(url,key)
    main(data, supabase, return_day, line_bot_api)

