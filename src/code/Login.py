from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

app = FastAPI()

# Permite que el frontend (React) se comunique con este backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LoginRequest(BaseModel):
    email: str
    password: str

# Usuarios de prueba estáticos (sin base de datos por ahora)
MOCK_USERS = {
    "admin@correo.com": "admin123",
    "test@correo.com": "123456"
}

@app.post("/api/login")
async def login(request: LoginRequest):
    email = request.email
    password = request.password
    
    if email in MOCK_USERS and MOCK_USERS[email] == password:
        return {"success": True, "message": "Inicio de sesión exitoso", "user": email}
    
    raise HTTPException(status_code=401, detail="Correo o contraseña incorrectos")

if __name__ == "__main__":
    print("Iniciando servidor backend en http://127.0.0.1:8000")
    uvicorn.run(app, host="127.0.0.1", port=8000)
