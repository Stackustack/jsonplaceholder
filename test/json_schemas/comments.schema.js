// Basic schema for /comments endpoint

let schema = {
    "type": "array",
    "uniqueItems": true,
    "items": {
        "type": "object",
        "required": [
            "postId",
            "id",
            "name",
            "email",
            "body"
        ],
        "properties": {
            "postId": {
                "type": "integer",
            },
            "id": {
                "type": "integer",
            },
            "name": {
                "type": "string",
            },
            "email": {
                "type": "string",
                "pattern": "^[^@]+@[^@]+\.[^@]+$",
            },
            "body": {
                "type": "string"
            }
        }
    }
}

module.exports = schema