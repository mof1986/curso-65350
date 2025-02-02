import requests

# Base de URL
base_url = "https://cdn2.cafecito.app/gallery/66941c21c0e2b3ec07d100e7/2025/0/"

# Patrones posibles para nombres de archivos
# Aquí generamos una lista con posibles combinaciones
# Esto es solo un ejemplo, se puede personalizar más según lo que sabemos o sospechamos
possible_filenames = [
    "QrdlXbcGzk-68381eba-657b-4a9c-9e3d-d24342f14086.jpg",
    "QrdlXbcGzk-ssBif10wam-4c1b5e30-b4e7-4513-99ee-74c028519852.jpg",
    "vUjl3BN$CA-b5207080-2b81-4cdf-83da-b9a86a18ea2c.jpg",
    "CgkCr6ExNS-9a28525d-1e51-42e8-9ca1-35983d1ec241.jpg",
    "C1lnkFvrTl-QzXO1zV5nP-356e4a9a-67d8-4198-96d4-46f1f2a60538.jpg",  # Ejemplo de nombre potencial
    "C1lnkFvrTl-356e4a9a-67d8-4198-96d4-46f1f2a60538.jpg",
    # Puedes agregar más patrones y combinaciones aquí
]

# Función para hacer solicitudes a las URLs generadas
def check_images(base_url, filenames):
    for filename in filenames:
        url = base_url + filename
        print(f"Comprobando: {url}")
        
        try:
            response = requests.get(url)
            if response.status_code == 200:
                print(f"Imagen encontrada: {url}")
            else:
                print(f"Acceso denegado o error para: {url} - Status Code: {response.status_code}")
        except requests.exceptions.RequestException as e:
            print(f"Error al intentar acceder a la URL {url}: {e}")

# Ejecutamos la función para comprobar las imágenes
check_images(base_url, possible_filenames)
