from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import mysql.connector

app = Flask(__name__)
CORS(app)  # <-- Habilita CORS para tu aplicación

@app.route('/empleos')
@cross_origin()  # <-- Permite solicitudes CORS para esta ruta
def empleos():
    cnx = mysql.connector.connect(
        host="localhost",
        user="root",
        password="1234",
        database="empleos"
    )

    cursor = cnx.cursor()
    cursor.execute("SELECT * FROM Empleos")
    empleos = [empleo[3] for empleo in cursor.fetchall()]
    cnx.close()

    return jsonify(empleos)

if __name__ == '__main__':
    app.run(port=4000, debug=True)
