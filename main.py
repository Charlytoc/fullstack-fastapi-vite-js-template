# Importamos la clase FastAPI del módulo fastapi, HTMLResponse y StaticFiles de fastapi.responses
from fastapi import FastAPI

#La clase StaticFiles sirve para desplegar o montar archivos estáticos dentro de nuestra app
#Ejemplo: Imágenes, html, css, música
from fastapi.staticfiles import StaticFiles
import uvicorn


# Creamos una instancia de la aplicación FastAPI
app = FastAPI()



# Montamos el directorio dist dentro de /client para servir archivos estáticos en la raíz
app.mount("/", StaticFiles(directory="client/dist", html=True), name="dist")

# Agregamos la estructura if __name__ == "__main__"
if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
