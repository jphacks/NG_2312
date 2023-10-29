import os
my_variable = os.environ["LenBow_token"]
if my_variable is not None:
    # 環境変数が正しく取得できた場合の処理
    print(my_variable)
else:
    # 環境変数が見つからなかった場合の処理
    print("none")
