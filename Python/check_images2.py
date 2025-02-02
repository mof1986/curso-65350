import requests

# Base de la URL
base_url = "https://cdn2.cafecito.app/gallery/66941c21c0e2b3ec07d100e7/"

# Listado de posibles años, subcarpetas y nombres de archivo a explorar
years = [2024, 2025]  # Cambiar por los años que quieras probar
folders = [9, 8, 7, 6, 5, 4, 3, 0, 1, 2]   # Probar diferentes subcarpetas numeradas
file_patterns = ["NcXwJinIZv", "QrdlXbcGzk", "vUjl3BN$CA", "CgkCr6ExNS", "C1lnkFvrTl"]  # Algunos patrones de nombres de archivo

# Función para generar combinaciones de URLs y devolver las que responden 200
def check_images(base_url, years, folders, file_patterns):
    found_urls = []  # Lista para almacenar las URLs que respondieron con 200
    for year in years:
        for folder in folders:
            for pattern in file_patterns:
                # Crear la URL combinando la base con los patrones
                url = f"{base_url}{year}/{folder}/{pattern}-example.jpg"
                print(f"Comprobando: {url}")
                
                try:
                    response = requests.get(url)
                    if response.status_code == 200:
                        found_urls.append(url)
                        print(f"Imagen encontrada: {url}")
                except requests.exceptions.RequestException as e:
                    print(f"Error al intentar acceder a la URL {url}: {e}")
    
    # Devolver todas las URLs que respondieron 200
    return found_urls

# Ejecutar la función y obtener las URLs encontradas
urls = check_images(base_url, years, folders, file_patterns)

# Imprimir el listado final de URLs con respuesta 200
print("\nListado de URLs con respuesta 200:")
for url in urls:
    print(url)
