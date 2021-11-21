import json
import dotenv
import os
import requests
import pickle
from collections import defaultdict

# Define function to gather keys:
def get_keys(path):
    with open(path) as f:
        return json.load(f)
				
# Pull in keys and specifically draw out the api key. I have removed the specific path to the keys 
# for security purposes:
dotenv.load_dotenv()

api_key = os.environ.get("YELP_API")

# URL to pull data from:
url = 'https://api.yelp.com/v3/businesses/search'

# Identify headers:
headers = {'Authorization': 'Bearer {}'.format(api_key)}

# List of Manhattan neighborhoods:
neighborhoods = ['Midtown West', 'Greenwich Village', 'East Harlem', 'Upper East Side', 'Midtown East',
                 'Gramercy', 'Little Italy', 'Chinatown', 'SoHo', 'Harlem',
                 'Upper West Side', 'Tribeca', 'Garment District', 'Stuyvesant Town', 'Financial District',
                 'Chelsea', 'Morningside Heights', 'Times Square', 'Murray Hill', 'East Village',
                 'Lower East Side', 'Hell\s Kitchen', 'Central Park']
# Create temporary dataframe to hold data:
nyc = [[] for i in range(len(neighborhoods))] 
nyc_dict = defaultdict(list)

# Function to draw in data for each neighborhood:
for x in range(len(neighborhoods)):
    print('---------------------------------------------')
    print('Gathering Data for {}'.format(neighborhoods[x]))
    print('---------------------------------------------')


    for y in range(20):
        location = neighborhoods[x]+', Manhattan, NY'
        term = "Restaurants"
        search_limit = 50
        offset = 50 * y
        categories = "(restaurants, All)"
        sort_by = 'distance'

        url_params = {
                        'location': location.replace(' ', '+'),
                        'term' : term,
                        'limit': search_limit,
                        'offset': offset,
                        'categories': categories,
                        'sorty_by': sort_by
                    }
        
        response = requests.get(url, headers=headers, params=url_params)
        print('***** {} Restaurants #{} - #{} ....{}'.format(neighborhoods[x], 
                                                             offset+1, offset+search_limit,
                                                             response))
        if response.status_code != 200:
            continue
        nyc_dict[neighborhoods[x]].extend(response.json()['businesses'])

pickle.dump(nyc_dict, open( "nyc_list.pkl", "wb" ) )

with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(nyc_dict, f, ensure_ascii=False)