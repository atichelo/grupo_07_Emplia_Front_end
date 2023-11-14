import pyrebase

config = {
    "apiKey": "AIzaSyC7mEavo7s6INFgGovCWmLKd7wAQnzp-x8",
    "authDomain": "emplia.firebaseapp.com",
    "projectId": "emplia",
    "storageBucket": "emplia.appspot.com",
    "messagingSenderId": "333111552452",
    "appId": "1:333111552452:web:5681e59f2d84271ff4dc91",
    "measurementId": "G-Q1P93ETCW8"
}

firebase = pyrebase.initialize_app(config)

auth = firebase.auth()

# Inicia sesión con Google
try:
    user = auth.sign_in_with_custom_token('<YOUR_CUSTOM_TOKEN>')
    print(user)
except Exception as e:
    print(f"Error: {e}")
