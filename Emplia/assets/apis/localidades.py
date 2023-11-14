from flask import Flask, jsonify, abort, send_from_directory
import requests
from flask_cors import CORS

app = Flask(__name__, static_folder='D:/Documents/grupo_07_Emplia/Emplia')
CORS(app)
@app.route('/localidades/<nombre>', methods=['GET'])
def obtener_localidades_por_nombre(nombre):
    #if not nombre.isalpha():
        #abort(400, description="La entrada debe ser solo letras.")
    url = f"https://apis.datos.gob.ar/georef/api/localidades?nombre={nombre}*"
    response = requests.get(url)
    if response.status_code != 200:
        abort(500, description="Error al comunicarse con la API de Georef.")
    localidades = response.json()['localidades']
    response_data = [localidad['nombre'] for localidad in localidades if localidad['nombre'].upper().startswith(nombre.upper())]
    response = jsonify(response_data)
    response.headers.add('Access-Control-Allow-Origin', '*')  # Agrega el encabezado CORS
    return response
@app.route('/<path:path>', methods=['GET'])
def static_file(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(port=5000)