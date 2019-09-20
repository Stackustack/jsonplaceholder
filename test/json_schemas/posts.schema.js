// Basic schema for /posts endpoint

let schema = {
    "type": "array",
    "uniqueItems": true,
    "items": {
        "type": "object",
        "required": [
            "userId",
            "id",
            "title",
            "body"
        ],
        "properties": {
            "userId": {
                "type": "integer",
            },
            "id": {
                "type": "integer",
            },
            "title": {
                "type": "string",
            },
            "body": {
                "type": "string",
            }
        }
    }
}

module.exports = schema