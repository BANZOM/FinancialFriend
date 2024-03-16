from flask import Flask, jsonify
from flask_cors import CORS
import src.financial_friend_list as ffl

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    list_of_links = ffl.get_video_links()
    return jsonify(links=list_of_links)

if __name__ == '__main__':
    app.run()