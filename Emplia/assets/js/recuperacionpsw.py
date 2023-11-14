from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)
CORS(app)

@app.route('/recuperar', methods=['POST'])
@cross_origin()
def recuperar():
    email = request.json.get('email')
    correo = "emplia.empleos@gmail.com"
    password = "pybm keef zmci uojy" 

    # Configura el servidor SMTP
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(correo, password)

    # Crea el mensaje
    msg = MIMEMultipart()
    msg['From'] = correo
    msg['To'] = email
    msg['Subject'] = "Recuperar contraseña"
    body = "Para recuperar tu contraseña sigue el siguiente link: pages/nvo-psw.html"
    msg.attach(MIMEText(body, 'plain'))

    # Envia el correo
    text = msg.as_string()
    server.sendmail(correo, email, text)
    server.quit()

    return jsonify({'message': 'Correo enviado'}), 200

if __name__ == '__main__':
    app.run(port=5000)
#//comento para que guarde los cambios, tengo un prblema con el repo
