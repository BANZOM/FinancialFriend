from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/')
def return_links():
    with open('./links.txt', 'r') as file:
        links = file.read().splitlines()
    random_ids = random.sample(links, 10)
    return jsonify(links=random_ids)

if __name__ == '__main__':
    app.run()