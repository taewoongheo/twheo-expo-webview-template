import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import '@twheo/i18n';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import '../global.css';

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='(pages)' />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
