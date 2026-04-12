# Render Deployment Guide

## Backend Deployment (Node.js Service)

### Steps:
1. Go to [render.com](https://render.com)
2. Create a new "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: cafe-management-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Node Version**: 18

5. Add Environment Variables in Render Dashboard:
   ```
   MONGODB_URI=mongodb+srv://Narasimha:nara1234@cluster0.5auh8ss.mongodb.net/?appName=Cluster0
   PORT=9999
   SECRET=abc123
   ```

6. Deploy

## Frontend Deployment (Static Site)

### Steps:
1. Go to Render Dashboard
2. Create a new "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Name**: cafe-management-frontend
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/build`

5. Add Environment Variables:
   ```
   REACT_APP_API_URL=https://cafe-management-backend.onrender.com
   ```
   (Replace with your actual backend service URL from Render)

6. Deploy

## Environment Variables Setup

### Backend (.env)
```
MONGODB_URI=mongodb+srv://Narasimha:nara1234@cluster0.5auh8ss.mongodb.net/?appName=Cluster0
PORT=9999
SECRET=abc123
```

### Frontend (.env)
```
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

## Troubleshooting

### Build Failures
- Check build logs in Render dashboard
- Ensure all imports use correct file paths (case-sensitive on Linux)
- Verify environment variables are set correctly

### Connection Issues
- Update REACT_APP_API_URL to match your backend Render URL
- Ensure backend is running and accessible
- Check MongoDB Atlas IP whitelist (allow 0.0.0.0/0 for Render)

## Local Testing Before Deployment

```bash
# Backend
cd backend
npm install
npm start

# Frontend (in another terminal)
cd frontend
npm install
REACT_APP_API_URL=http://localhost:9999 npm start
```
