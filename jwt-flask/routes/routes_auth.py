from flask import Blueprint, request, jsonify
from firebase_admin import auth, credentials
import firebase_admin
from funtion_jwt import write_token

routes_auth = Blueprint("routes_auth", __name__)

# Inicializar Firebase Admin (solo una vez)
if not firebase_admin._apps:
    cred = credentials.Certificate('firebase_key.json')
    firebase_admin.initialize_app(cred)

@routes_auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    google_token = data.get("token")
    
    if not google_token:
        return jsonify({"message": "Token de Google faltante"}), 401
    
    try:
        # Verificar el token de Google con Firebase
        decoded_token = auth.verify_id_token(google_token)
        uid = decoded_token['uid']
        email = decoded_token.get('email')

        # Crear un JWT propio con la estructura que ya tenés
        custom_data = {
            "uid": uid,
            "email": email
        }
        custom_token = write_token(custom_data)

        return jsonify({"token": custom_token}), 200
    except Exception as e:
        return jsonify({"message": f"Error de autenticación: {str(e)}"}), 401
