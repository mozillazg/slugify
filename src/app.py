# -*- coding: utf-8 -*-

from flask import Flask, jsonify, render_template, request
from slugify import slugify

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/slugify', methods=['POST'])
def _slugify():
    if request.is_xhr:
        text = request.get_json().get('text', '')
    else:
        text = request.form.get('text', '')

    result = {
        'text': text,
        'slug': slugify(text)
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=7000)
