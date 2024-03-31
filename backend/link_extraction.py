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
    soup = BeautifulSoup(html, 'html.parser')
    for tag in soup(['script', 'style']):
        tag.decompose()
    text = soup.get_text(separator=' ')
    text = re.sub(r'\s+', ' ', text)
    return text

def generate_response(model, prompt, cleaned_html):
    combined_prompt = f"{prompt}\n{cleaned_html}"
    response = model.generate_content(combined_prompt)
    return response

def get_response(url):
    model = setup()
    html_content = download_html(url)
    if html_content:
        cleaned_content = html_preprocessing(html_content)
        return combine_json_outputs(model, cleaned_content)
    else:
        return "Failed to retrieve HTML content from the provided URL."

def combine_json_outputs(model, cleaned_content):
    combined_output = {}
    for file_path in ['p1.txt', 'p2.txt', 'p3.txt', 'p4.txt', 'p5.txt', 'p6.txt']:
        with open(file_path, 'r', encoding='utf-8') as file:
            prompt = file.read()
        response = generate_response(model, prompt, cleaned_content)
        try:
            combined_output.update(json.loads(response.text))
        except AttributeError as e:
            print(f"Error: {e}. Response content does not have parts.")
    return combined_output

if __name__ == "__main__":
    url1 = 'https://www.vox.com/politics/24114496/benjamin-netanyahu-ultra-orthodox-conscription-coalition-gaza'
    url2 = 'https://www.foxnews.com/politics/chinese-illegal-immigrant-arrested-driving-military-base-california'

    print("Response for article 1:")
    print(get_response(url1))
    print()

    print("Response for article 2:")
    print(get_response(url2))
