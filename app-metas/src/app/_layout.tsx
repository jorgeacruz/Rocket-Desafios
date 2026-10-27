import { Suspense } from "react";
import { Stack } from "expo-router";
import { Loading } from "@/components/Loading";

//fonts google
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

// SQLite Database
import { SQLiteProvider } from "expo-sqlite";
import { migrate } from "@/database/migrate";
// Theme
import { colors } from "@/theme/colors";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  // loading fonts
  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <SQLiteProvider databaseName="target.db" onInit={migrate} useSuspense>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.white },
          }}
        />
      </SQLiteProvider>
    </Suspense>
  );
}
