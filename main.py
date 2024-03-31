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
            "Gender Bias Score": "20",
            "Gender Bias Type": "Male",
            "Gender Bias Justification": "Justification Here",
            "Racial Bias Score": "26",
            "Racial Bias Type": "White",
            "Racial Bias Justification": "Justification Here",
            "Economic Bias Score": "60",
            "Economic Bias Type": "Middle-Income",
            "Economic Bias Justification": "Justification Here",
            "Political Bias Score": "21",
            "Political Bias Type": "Conservative",
            "Political Bias Justification": "Justification Here",
            "Societal Bias Score": "39",
            "Societal Bias Type": "Urban",
            "Societal Bias Justification": "Justification Here",
            "Cultural Bias Score": "10",
            "Cultural Bias Type": "Western",
            "Cultural Bias Justification": "Justification Here"
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
