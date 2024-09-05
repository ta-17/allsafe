from django.http import JsonResponse
from .models import ScamSMS
import pandas as pd
from langdetect import detect, DetectorFactory
import html

def random_scam_sms(request):
    # Fetch all data from ScamSMS model
    queryset = ScamSMS.objects.all().values('id', 'label', 'text_length', 'text')

    # Convert queryset to Pandas DataFrame
    df = pd.DataFrame(list(queryset))

    # set detection seed
    DetectorFactory.seed = 5

    # detect english or not
    def is_english(text):
        try:
            return detect(text) == 'en'
        except:
            return False

    # filtering english text
    df = df[df['text'].apply(is_english)]

    ## process scam text
    df_scam = df[df['label'] == 1]

    # create list of to-be-removed words
    remove_words = ['order', 'purchase', 'å', 'account', 'are you', 'love']

    pattern = '|'.join(remove_words)

    # select text contains 'account'
    df_scam = df_scam[df_scam['text'].str.lower().str.contains(pattern, regex=True, na=False)]

    # filter with text length >100
    df_scam = df_scam[df_scam['text_length'] > 100]

    ## process normal text
    df_norm = df[df['label'] == 0]

    # select some text length as filter
    df_norm = df_norm[(df_norm['text_length'] == 99) | (df_norm['text_length'] == 101)|
                        (df_norm['text_length'] == 126) | (df_norm['text_length'] == 131) |
                        (df_norm['text_length'] == 142)]


    # combone scam and normal data & drop columns and duplicates
    df_final = pd.concat([df_scam, df_norm], axis=0)
    df_final = df_final.drop(columns=['text_length'])
    df_final = df_final.drop_duplicates()

    # convert html expression into char
    df_final['text'] = df_final['text'].apply(lambda x: html.unescape(x))

    # create remove_list based on mannual check result by id
    remove_list = [43, 3265, 3719, 180, 642, 821, 1402, 1428, 1560, 1608, 1683,
                2184, 2371, 2595, 2604, 2644, 2738, 2840, 2902, 3211, 3410,
                3492, 3548, 3609, 3775, 4225, 4265, 4380, 4465, 5306, 5388, 511,
                2794, 3842, 4357, 4552, 4580, 5229]

    # filtered to keep the final records
    df_final = df_final[~df_final['id'].isin(remove_list)]

    # convert to Json
    data = df_final.to_dict(orient='records')

    return JsonResponse(data, safe=False)
