# Task App – Laravel + Angular

Aplicación de tareas (CRUD) desarrollada como prueba técnica, usando:

- **Backend:** Laravel 12 (API REST)
- **Frontend:** Angular (standalone components)
- **Base de datos local:** SQLite

La app permite **crear, listar, marcar como completadas y eliminar tareas**.

---

## 🧱 Estructura del repositorio

```text
.
├── proyecto_crud   # Backend - Laravel (API REST)
└── task-app        # Frontend - Angular
```

---

## 🚀 Backend – Laravel (`proyecto_crud`)

### Requisitos

- PHP 8.x
- Composer

### Instalación

```bash
cd proyecto_crud
composer install
```

### Configuración de entorno

Copiar el archivo de ejemplo:

```bash
cp .env.example .env
```

Editar el archivo `.env` y dejar la conexión a SQLite, por ejemplo:

```env
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
```

Crear el archivo de base de datos (si no existe):

```bash
touch database/database.sqlite
```

Ejecutar migraciones:

```bash
php artisan migrate
```

### Servidor de desarrollo

```bash
php artisan serve --port=8000
```

El backend estará disponible en:

- `http://127.0.0.1:8000`

### Endpoints principales (API REST)

Todos los endpoints están bajo `/api/tasks`:

- `GET    /api/tasks`          → Listar tareas
- `POST   /api/tasks`          → Crear tarea
- `GET    /api/tasks/{id}`     → Ver detalle de una tarea
- `PUT    /api/tasks/{id}`     → Actualizar tarea
- `DELETE /api/tasks/{id}`     → Eliminar tarea

El modelo principal es `App\Models\Task` y la tabla `tasks` se crea con migraciones.

---

## 💻 Frontend – Angular (`task-app`)

### Requisitos

- Node.js 18+
- npm
- Angular CLI (`npm install -g @angular/cli`)

### Instalación

```bash
cd task-app
npm install
```

### Configuración del API

En el servicio de tareas (`src/app/services/task.ts`) se usa como base:

```ts
private apiUrl = 'http://127.0.0.1:8000/api/tasks';
```

Si se cambia el puerto o la URL del backend, aquí es donde debe actualizarse.

### Servidor de desarrollo

```bash
ng serve --port=4200
```

Frontend disponible en:

- `http://localhost:4200`

---

## ⚙️ Funcionamiento general

1. **Laravel** expone un API REST en `/api/tasks`.
2. **Angular** consume ese API usando `HttpClient` desde un servicio (`TaskService`).
3. El usuario puede:
   - Ver la lista de tareas.
   - Crear nuevas tareas.
   - Marcar tareas como completadas.
   - Eliminar tareas.
4. Los datos se guardan en la base de datos SQLite mediante Eloquent (ORM de Laravel).

---

## 📦 Estructura del proyecto

```
proyecto_laravel/
 ├── proyecto_crud/ (Laravel API)
 └── task-app/ (Angular frontend)
```

---

## 👨‍💻 Autor

**Elian Muriel**  
Desarrollador Full Stack Jr.  
💻 GitHub: [ElianMuriel](https://github.com/ElianMuriel)

---
