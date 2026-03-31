from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient


app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/")
db = client["cm_agency"]
collection = db["enquiries"]

@app.route("/api/enquiry", methods=["POST"])
def enquiry():
    data = request.json

    name = data.get("name")
    phone = data.get("phone")
    business = data.get("business")
    details = data.get("details")

    enquiry_data = {
        "name": name,
        "phone": phone,
        "business": business,
        "details": details
    }

    collection.insert_one(enquiry_data)

    return jsonify({"message": "Enquiry saved successfully!"})


if __name__ == "__main__":
    app.run(debug=True)