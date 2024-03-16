from flask import Flask, jsonify, request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

app.env = 'production'

@app.route('/')
def return_links():
    with open('./FlaskServer/links.txt', 'r') as file:
        links = file.read().splitlines()
    random_ids = random.sample(links, 10)
    return jsonify(links=random_ids)

@app.route('/image', methods=['GET', 'POST'])
def return_image_info():
    if request.method == 'POST':
        image_link = request.form.get('image_link')
        # Process the image link and generate output
        # output = process_image(image_link)
        return jsonify(output="hello")
    else:
        return 'Please send a POST request with an image link.'

if __name__ == '__main__':
    app.run(host='0.0.0.0')