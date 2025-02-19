"use client";
import React, { useEffect } from 'react';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  };
let app: FirebaseApp | undefined;

const SignInClient = () => {
  useEffect(() => {
    const initFirebaseUI = async () => {
      try {
        // Initialize Firebase
        if (!app) {
          app = initializeApp(firebaseConfig);
          getAnalytics(app);
        }
        
        const auth = getAuth(app);
        
        // Dynamically import firebaseui
        const firebaseui = await require('firebaseui');
        await require('firebaseui/dist/firebaseui.css');

        const uiConfig = {
          signInSuccessUrl: '/',
          signInOptions: [
            EmailAuthProvider.PROVIDER_ID,
            GoogleAuthProvider.PROVIDER_ID,
          ],
          signInFlow: 'popup'
        };

        // Get or create UI instance
        let ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
          ui = new firebaseui.auth.AuthUI(auth);
        }
        
        // Reset and start UI
        ui.reset();
        ui.start('#firebaseui-auth-container', uiConfig);
      } catch (error) {
        console.error('Error initializing Firebase UI:', error);
      }
    };

    initFirebaseUI();

    return () => {
      try {
        const firebaseui = require('firebaseui');
        const ui = firebaseui.auth.AuthUI.getInstance();
        if (ui) {
          ui.reset();
        }
      } catch (error) {
        console.error('Error cleaning up Firebase UI:', error);
      }
    };
  }, []);

  return (
    <div id="firebaseui-auth-container"></div>
  );
};

export default SignInClient;
