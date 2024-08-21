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
      <Stack.Screen name="make/[id]" options={{ title: 'informações' }} />
      <Stack.Screen name="about2" options={{ title: 'um pouco sobre a gente' }} />
      <Stack.Screen name="about3" options={{ title: 'nossas marcas' }} />
      <Stack.Screen name="about4" options={{ title: 'fale com a gente' }} />

    </Stack>
  );
}
