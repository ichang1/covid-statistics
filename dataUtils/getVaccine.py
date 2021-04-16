from jsonToFile import jsonToText
import requests
from utils.capitalize import capitalize


def getVaccine():
    url = "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=all"
    places = {}
    data = requests.get(url).json()

    for p in data:
        name = p['country']
        places[name] = {'api': url}
    return places


jason = getVaccine()
jsonToText('./vaccine.txt', jason)
