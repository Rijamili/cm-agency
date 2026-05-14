from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient


app = Flask(__name__)
CORS(app)


client = MongoClient("mongodb://localhost:27017/")
db = client["cm_agency"]
collection = db["enquiries"]


@app.route("/")
def home():
    return "Backend is running successfully!"


@app.route("/api/enquiry", methods=["POST"])
def enquiry():
    try:
        data = request.json

        name = data.get("name")
        phone = data.get("phone")
        email = data.get("email")
        message = data.get("message")


        collection.insert_one({
            "name": name,
            "phone": phone,
            "email": email,
            "message": message
        })

        return jsonify({
            "success": True,
            "message": "Enquiry submitted successfully"
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })


if __name__ == "__main__":
    app.run(debug=True)