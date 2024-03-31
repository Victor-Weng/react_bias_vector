import os
import requests
from bs4 import BeautifulSoup
from vertexai import init
from vertexai.preview.generative_models import GenerativeModel
import re
import json


def setup():
    current_directory = os.path.dirname(__file__)
    relative_path = 'credentials.json'
    json_key_file = os.path.join(current_directory, relative_path)
    os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = json_key_file
    project_id = 'causal-jigsaw-418820'
    location = 'us-central1'
    init(project=project_id, location=location)
    model = GenerativeModel('gemini-pro')
    return model

def download_html(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return response.text
        else:
            print(f"Failed to retrieve HTML content from {url}. Status code: {response.status_code}")
            return None
    except Exception as e:
        print(f"An error occurred while downloading HTML content from {url}: {e}")
        return None

def html_preprocessing(html):
    # Use BeautifulSoup to parse the HTML
    soup = BeautifulSoup(html, 'html.parser')
    
    # Remove script and style tags
    for tag in soup(['script', 'style']):
        tag.decompose()
    
    # Get the text from the HTML
    text = soup.get_text(separator=' ')
    
    # Remove extra whitespace and newlines
    text = re.sub(r'\s+', ' ', text)
    return text

def generate_response(model, prompt, cleaned_html):
    combined_prompt = f"{prompt}\n{cleaned_html}"
    response = model.generate_content(combined_prompt)
    return response

def get_response(url):
    model = setup()
    with open("prompt.txt", 'r', encoding='utf-8') as file:
        prompt = file.read()
    html_content = download_html(url)
    if html_content:
        cleaned_content = html_preprocessing(html_content)
        return json.loads(generate_response(model, prompt, cleaned_content).text)
    else:
        return "Failed to retrieve HTML content from the provided URL."

if __name__ == "__main__":# List of URLs to download HTML content from
    url1 = 'https://www.vox.com/politics/24114496/benjamin-netanyahu-ultra-orthodox-conscription-coalition-gaza'
    url2 = 'https://www.foxnews.com/politics/chinese-illegal-immigrant-arrested-driving-military-base-california'


    # Generate and print response for each URL
    print("Response for article 1:")
    print(get_response(url1))
    print()

    print("Response for article 2:")
    print(get_response(url2))
