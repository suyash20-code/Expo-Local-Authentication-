import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef } from "react";
import { AppState } from "react-native";
import { useRouter } from "expo-router";

const LOCK_TIME = 3000;

export const UserInactivityProvider = ({ children }: any) => {
  const appState = useRef(AppState.currentState);
  const router = useRouter();

  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );
    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = async (nextAppState: any) => {
    console.log("appstate", appState.current, nextAppState);
    if (nextAppState === "inactive") {
      router.push("/(modals)/white");
    } else if (router.canGoBack()) {
      router.back();
    }
    if (nextAppState === "background") {
      await AsyncStorage.setItem(
        "startTime",
        Date.now().toString()
      );
    } else if (
      nextAppState === "active" &&
      appState.current.match(/background/)
    ) {
      const startTime = await AsyncStorage.getItem("startTime");
      const elapsed = Date.now() - (parseInt(startTime) || 0);
      if (elapsed >= LOCK_TIME) {
        router.push("/(modals)/lock");
      }
    }
    appState.current = nextAppState;
  };

  return children;
};
