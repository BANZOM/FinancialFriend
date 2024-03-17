import google.generativeai as genai
import os
from dotenv import load_dotenv
import io
import base64
from PIL import Image


load_dotenv()

genai.configure(api_key=os.getenv('API_KEY'))

def get_model(type='text'):
    if type == 'text':
        return genai.GenerativeModel('models/gemini-1.0-pro-latest')
    else:
        return genai.GenerativeModel('models/gemini-1.0-pro-vision-latest')
    
def custom_prompt():
    prompt = '''This is a sample image of some stock, analyze the data given in graph and give reviews of this particular stock.
                If image, didn't contain any type of stock data or graph, then please disregard this message and provide 'No stock data found: This image is about ...' as output.
               '''
    return prompt

def get_generation_config():
    return genai.GenerationConfig(
        temperature=0.3,
        top_p=1.0,
    )

def get_info_from_image(image):
    print("function triggered")
    model = get_model(type='vision')
    image = Image.open(image)
    bytearray = io.BytesIO()
    image.save(bytearray, format=image.format)
    bytearray = bytearray.getvalue()
    encoded_image = base64.b64encode(bytearray)

    image_blob = {
        'mime_type': 'image/jpeg', # or 'image/png'
        'data': encoded_image.decode('utf-8')
    }
    prompt = custom_prompt()
    response = model.generate_content([prompt, {'inline_data': image_blob}], generation_config=get_generation_config())
    return response.text

if __name__ == '__main__':
    print(get_info_from_image('FlaskServer/uploaded_image.png'))