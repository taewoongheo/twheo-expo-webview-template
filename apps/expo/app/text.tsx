import { Text } from '@twheo/ui';
import { View } from 'react-native';

export default function Index() {
  return (
    <View className='flex-1 items-center justify-center gap-4 bg-blue-100 p-5 dark:bg-blue-900'>
      <Text tx='hello' />
      <Text tx='title' />
    </View>
  );
}
