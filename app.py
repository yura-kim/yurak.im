from flask import Flask, g, render_template, request, jsonify

app = Flask(__name__)


@app.route('/')
def index():
 	return render_template('home.html')