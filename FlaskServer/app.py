from flask import Flask, jsonify, request
from flask_cors import CORS
import random
import model

app = Flask(__name__)
CORS(app)

app.env = 'production'

@app.route('/')
def return_links():
    with open('./FlaskServer/links.txt', 'r') as file:
        links = file.read().splitlines()
    random_ids = random.sample(links, 10)
    return jsonify(links=random_ids)

@app.route('/search', methods=['GET'])
def return_links_with_title():
    with open('./FlaskServer/links1.txt', 'r') as file:
        links = file.read().splitlines()
    links = [link.split(':') for link in links]
    random_links = random.sample(links, 13)
    random_titles = [link[0] for link in random_links]
    random_ids = [link[1] for link in random_links]
    return jsonify(links=random_ids, titles=random_titles)

@app.route('/upload', methods=['GET', 'POST'])
def return_image_info():
    if request.method == 'POST':
        if 'image' not in request.files:
            print('no image')
            return jsonify(output="no image")
        file = request.files['image']
        file.save('./FlaskServer/uploaded_image.png')
        output = model.get_info_from_image('./FlaskServer/uploaded_image.png')
        print('POST request received')
        return jsonify(output=output)
    else:
        return jsonify(output="no image")

if __name__ == '__main__':
    app.run(host='0.0.0.0')