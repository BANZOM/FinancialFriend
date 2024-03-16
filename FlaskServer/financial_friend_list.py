import os
from dotenv import load_dotenv
from googleapiclient.discovery import build

load_dotenv()

# Set up the API key
api_key = os.getenv('key')  # Replace with your own API key

# Create a YouTube Data API client
youtube = build('youtube', 'v3', developerKey=api_key)

# Define the search query
titles = ['Stock 4 Retail', 'Groww', 'Rahul Jain Stock Analysis', 'Power of Stocks', 'Sunil Miglani', 'Finology', 'Pranjal Kamra', 'Market Gurukul', 'Trading Chanakya']

video_links = []

# Iterate through all the titles
for search_query in titles:
    # Make the API request to search for videos
    search_response = youtube.search().list(
        q=search_query,
        part='id',
        maxResults=10  # Adjust the number of results as needed
    ).execute()

    # Extract the video links from the API response
    # video_links = []
    for item in search_response['items']:
        if item['id']['kind'] == 'youtube#video':
            video_id = item['id']['videoId']
            video_links.append(video_id)

# Print the video links
# Save the video links in a file
with open('links.txt', 'a') as file:
    for link in video_links:
        file.write(link + '\n')