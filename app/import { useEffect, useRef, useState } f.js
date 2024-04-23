// import { useEffect, useRef, useState } from "react";
// import { AppState, BackHandler } from "react-native";
// import { MMKV } from "react-native-mmkv";
// import { useRouter } from "expo-router";

// const storage = new MMKV({
//     id: 'UserInactivity',
// });

// const LOCK_TIME = 3000;

// export const UserInactivityProvider = ({ children }: any) => {
//     const appState = useRef(AppState.currentState);
//     const router = useRouter();
//     const [lockScreen, setLockScreen] = useState(false); // State to track lock screen
//     const [allowBack, setAllowBack] = useState(true); // State to allow/disallow back navigation

//     useEffect(() => {
//         const subscription = AppState.addEventListener('change', handleAppStateChange);
//         BackHandler.addEventListener('hardwareBackPress', handleBackButtonPress); // Add back button handler
//         return () => {
//             subscription.remove();
//             BackHandler.removeEventListener('hardwareBackPress', handleBackButtonPress); // Remove back button handler
//         };
//     }, []);

//     const handleAppStateChange = (nextAppState: any) => {
//         if (nextAppState === 'inactive') {
//             router.push('/(modals)/white');
//         } else if (nextAppState === 'background') {
//             recordStartTime();
//         } else if (nextAppState === 'active' && appState.current.match(/background/)) {
//             const elapsed = Date.now() - (storage.getNumber('startTime') || 0);
//             if (elapsed >= LOCK_TIME) {
//                 router.push('/(modals)/lock');
//                 setLockScreen(true); // User is on lock screen
//                 setAllowBack(false); // Disallow back navigation
//             }
//         }
//         appState.current = nextAppState;
//     };

//     const recordStartTime = () => {
//         storage.set('startTime', Date.now());
//     };

//     const handleBackButtonPress = () => {
//         if (lockScreen) {
//             // If on lock screen, prevent back navigation
//             if (allowBack && router.canGoBack()) {
//                 router.back();
//             }
//             return true;
//         }
//         return false; // Allow default back behavior for other screens
//     };

//     return children;
// };






// import { useEffect, useRef, useState } from "react";
// import { AppState, BackHandler } from "react-native";
// import { MMKV } from "react-native-mmkv";
// import { useRouter } from "expo-router";

// const storage = new MMKV({
//     id: 'UserInactivity',
// });

// const LOCK_TIME = 3000;

// export const UserInactivityProvider = ({ children }: any) => {
//     const appState = useRef(AppState.currentState);
//     const router = useRouter();
//     const [lockScreen, setLockScreen] = useState(false); // State to track lock screen
//     const [allowBack, setAllowBack] = useState(true); // State to allow/disallow back navigation

//     useEffect(() => {
//         const subscription = AppState.addEventListener('change', handleAppStateChange);
//         BackHandler.addEventListener('hardwareBackPress', handleBackButtonPress); // Add back button handler
//         return () => {
//             subscription.remove();
//             BackHandler.removeEventListener('hardwareBackPress', handleBackButtonPress); // Remove back button handler
//         };
//     }, []);

//     const handleAppStateChange = (nextAppState: any) => {
//         if (nextAppState === 'inactive') {
//             router.push('/(modals)/white');
//         } else if (nextAppState === 'background') {
//             recordStartTime();
//         } else if (nextAppState === 'active' && appState.current.match(/background/)) {
//             const elapsed = Date.now() - (storage.getNumber('startTime') || 0);
//             if (elapsed >= LOCK_TIME) {
//                 router.push('/(modals)/lock');
//                 setLockScreen(true); // User is on lock screen
//                 setAllowBack(false); // Disallow back navigation
//             }
//         }
//         appState.current = nextAppState;
//     };

//     const recordStartTime = () => {
//         storage.set('startTime', Date.now());
//     };

//     const handleBackButtonPress = () => {
//         if (lockScreen) {
//             return true; // Prevent back navigation from lock screen
//         }
//         if (allowBack && router.canGoBack()) {
//             router.back();
//         }
//         return true; // Return true to prevent default behavior
//     };

//     return children;
// };
