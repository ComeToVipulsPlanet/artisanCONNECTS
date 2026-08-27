import os
import base64

from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from openai import OpenAI


# Load environment variables
load_dotenv()


# Create Flask app
app = Flask(__name__)
CORS(app)


# Get API key
api_key = os.getenv("OPENAI_API_KEY")

if not api_key:
    raise ValueError("OPENAI_API_KEY is missing in .env file")


# Create OpenAI client
client = OpenAI(api_key=api_key)


@app.route("/")
def home():

    return jsonify({
        "status": "success",
        "message": "ArtisanConnect AI Backend is Running!"
    })


@app.route("/analyze-product", methods=["POST"])
def analyze_product():

    try:

        # Check image
        if "image" not in request.files:

            return jsonify({
                "error": "No image uploaded"
            }), 400


        image = request.files["image"]


        # Read image
        image_data = image.read()


        # Convert image to Base64
        base64_image = base64.b64encode(
            image_data
        ).decode("utf-8")


        # Detect image type
        content_type = image.content_type or "image/jpeg"


        # Ask AI to analyze the product
        response = client.responses.create(

            model="gpt-4.1-mini",

            input=[

                {
                    "role": "user",

                    "content": [

                        {
                            "type": "input_text",

                            "text": """
You are an AI assistant for an artisan marketplace.

Analyze the uploaded image carefully.

If the image contains a handmade/artisan product,
identify it accurately.

Return ONLY valid JSON with these fields:

{
  "product_name": "",
  "category": "",
  "material": "",
  "description": "",
  "tags": [],
  "suggested_price": ""
}

Do not call a road, building, car, person,
or unrelated object an artisan product.

If the image is NOT an artisan product,
set product_name to "Not an artisan product"
and explain briefly in description.
"""
                        },

                        {
                            "type": "input_image",

                            "image_url":
                                f"data:{content_type};base64,{base64_image}"
                        }

                    ]
                }

            ]
        )


        # Get AI output
        result = response.output_text


        return jsonify({
            "success": True,
            "result": result
        })


    except Exception as e:

        print("ERROR:", str(e))

        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


if __name__ == "__main__":

    app.run(
        debug=True,
        port=5001
    )