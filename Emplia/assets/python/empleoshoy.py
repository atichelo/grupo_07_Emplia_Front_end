from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import mysql.connector

app = Flask(__name__)
CORS(app)  # <-- Habilita CORS para tu aplicación

@app.route('/api/datos', methods=['GET'])
@cross_origin()  # <-- Permite solicitudes CORS para esta ruta
def get_datos():
    cnx = mysql.connector.connect(
        host="localhost",
        user="root",
        password="1234",
        database="empleos"
    )

    cursor = cnx.cursor()

    cursor.execute("SELECT DISTINCT area FROM Empleos")
    areas = [area[0] for area in cursor.fetchall()]

    cursor.execute("SELECT DISTINCT modalidad FROM Empleos")
    modalidades = [modalidad[0] for modalidad in cursor.fetchall()]

    cursor.execute("SELECT DISTINCT fecha_publicacion FROM Empleos")
    fechas_publicacion = [str(fecha_publicacion[0]) for fecha_publicacion in cursor.fetchall()]

    cnx.close()

    return jsonify({'areas': areas, 'modalidades': modalidades, 'fechas_publicacion': fechas_publicacion})

if __name__ == '__main__':
    app.run(port=3000, debug=True)
