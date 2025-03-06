from flask import Flask
from dotenv import load_dotenv
from routes.routes_auth import routes_auth

  # Asegúrate de que la ruta esté correctamente importada

app = Flask(__name__)

# Registrar el Blueprint con un prefijo
app.register_blueprint(routes_auth, url_prefix='/auth')

if __name__ == '__main__':
    load_dotenv()  # Cargar las variables de entorno del archivo .env
    app.run(debug=True, port=4000, host='0.0.0.0')
