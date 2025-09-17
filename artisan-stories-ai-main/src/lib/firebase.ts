import { initializeApp, getApps, FirebaseApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
};

let app: FirebaseApp;

export const getFirebaseApp = (): FirebaseApp => {
  if (!app) {
    if (!firebaseConfig.apiKey || !firebaseConfig.appId || !firebaseConfig.projectId) {
      console.warn("Firebase env vars missing. UI will run without Firebase.");
    }
    app = getApps()[0] ?? initializeApp(firebaseConfig);
  }
  return app;
};


