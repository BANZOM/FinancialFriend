import os
from dotenv import load_dotenv
from googleapiclient.discovery import build

load_dotenv()

# Set up the API key
api_key = os.getenv('key')  # Replace with your own API key

# Create a YouTube Data API client
youtube = build('youtube', 'v3', developerKey=api_key)

# Define the search query
titles = ['Stock 4 Retail', 'Groww', 'Rahul Jain Stock Analysis', 'Power of Stocks', 'Sunil Miglani', 'Finology', 'Pranjal Kamra', 'Market Gurukul', 'Trading Chanakya', 'Stock market for beginners', 'Stock market Guide india', 'indian stocks']

video_links = []

# Iterate through all the titles
for search_query in titles:
    # Make the API request to search for videos
    search_response = youtube.search().list(
        q=search_query,
        part='id,snippet',
        maxResults=10  # Adjust the number of results as needed
    ).execute()

    # Extract the video links from the API response
    for item in search_response['items']:
        if item['id']['kind'] == 'youtube#video':
            video_id = item['id']['videoId']
            video_title = item['snippet']['title']
            video_links.append({'title': video_title, 'id': video_id})

# Print the video links
# Save the video links in a file
with open('FlaskServer/links1.txt', 'w') as file:
    for video in video_links:
        file.write(f"{video['title']}:{video['id']}\n")