from flask import Flask, jsonify, request
from flask_cors import CORS
import time
from link_extraction import get_response

app = Flask(__name__)
cors = CORS(app, origins='*')  # Can specify origins


@app.route("/json", methods=['GET'])
def get_json():
    return jsonify(
        {
            "score": 0,
            "explanation": "The article reports on the arrest of a Chinese immigrant after he entered a military base without authorization and ignored orders to leave. The article includes quotes from U.S. officials who express concerns about the potential national security threat posed by Chinese nationals entering the country illegally. The article also includes quotes from migrants who express their desire to make a better life for themselves and their families in the U.S. While the article does include a variety of perspectives, it primarily focuses on the concerns raised by U.S. officials, which could lead readers to believe that the Chinese immigrant arrested is a threat to national security."
        }
    )

@app.route("/analyze", methods=['POST'])
def analyze_url():
    try:
        # Extract URL from request body
        url = request.json.get('url')
        try:
            analysis_result = get_response(url)
            return jsonify(analysis_result)
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True, port=1000)
