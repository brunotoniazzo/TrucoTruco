# Django Backend for TrucoTruco

The backend has been initialized using Django and Django REST Framework.

## Setup & Running

1. Open a terminal in this `Back` directory.
2. Create and activate the virtual environment:
   ```cmd
   python -m venv venv
   venv\Scripts\activate
   ```
3. Install the required dependencies:
   ```cmd
   pip install -r requirements.txt
   ```
4. Run migrations to set up the SQLite database:
   ```cmd
   cd backend
   python manage.py migrate
   ```
5. Start the development server:
   ```cmd
   python manage.py runserver
   ```
   The server will run on `http://127.0.0.1:8000/`.

## Integration with Vite Frontend

The application `django-cors-headers` is installed and configured to allow requests from the standard Vite development server running on `http://localhost:5173` and `http://127.0.0.1:5173`.

### Making an API call from React/Vite:

```javascript
fetch("http://127.0.0.1:8000/api/some-endpoint/")
  .then(response => response.json())
  .then(data => console.log(data));
```

If you change the Vite port, make sure to update `CORS_ALLOWED_ORIGINS` in `backend/settings.py`.
