import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#AE2A57",
          borderBottomWidth: 0, // Remove a borda
        },
        headerTintColor: "#FAE7F0",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center", // Centraliza o título na barra de navegação
      }}
    >
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ title: "Loja de maquiagem" }} />
      <Stack.Screen name="products" options={{ title: "Nossos produtos" }} />
      <Stack.Screen name="coffeesingle/[id]" options={{ title: 'Coffee WP' }} />
    </Stack>
  );
}
