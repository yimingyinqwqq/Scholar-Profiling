import json
import os
import PyPDF2
from io import BytesIO
from PIL import Image
from dotenv import load_dotenv
from flask_cors import CORS
from flask import Flask, jsonify, redirect, request, url_for, session
import pytesseract
# import utilities
from datetime import date, datetime

# # config pytestseract
# # pytesseract.pytesseract.tesseract_cmd = r'/usr/local/bin/tesseract'
# pytesseract.pytesseract.tesseract_cmd = (
#     "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
# )
# options = "--psm 4"

from flask import Flask

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")
CORS(app, supports_credentials=True)

@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
    return response

# extract resume information
@app.route("/scan", methods=["POST"])
def scan_resume():
    resume_file = request.files["resume"]
    pdf_reader = PyPDF2.PdfReader(resume_file)

    resume_text = ""
    for page in range(len(pdf_reader.pages)):
        resume_text += pdf_reader.pages[page].extract_text()

    # Process the resume text and obtain the desired information
    # ...

    return jsonify(receipt_text=resume_text)


if __name__ == "__main__":
    app.run(ssl_context="adhoc", debug=True)
