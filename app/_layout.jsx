// import { useEffect } from "react";
// import { Slot, useRouter, useSegments } from "expo-router";
import "../global.css";

import { Stack } from "expo-router";

// export const MainLayout = () => {
//   const router = useRouter();

//   useEffect(() => {
//     router.replace("(auth)/Login");
//     return () => {};
//   }, []);

//   return <Slot />;
// };

// export default function RootLayout() {
//   return (
//       <MainLayout />
//   );
// }

const StackLayout = () => {
  return (
    <Stack>
      {/* <Stack.Screen name="(auth)" options={{headerShown:false}} /> */}
      <Stack.Screen name="(tabs)" options={{headerShown:false}} />
    </Stack>
    );
};

export default StackLayout;