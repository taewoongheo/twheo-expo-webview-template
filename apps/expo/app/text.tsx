import { Text } from '@twheo/ui';
import { View } from 'react-native';

export default function Index() {
  return (
    <View className='flex-1 items-center justify-center gap-4 bg-blue-100 p-5 dark:bg-blue-900'>
      <Text tx='title' className='text-title-large'>
        Title Large (24px, bold)
      </Text>
      <Text tx='title' className='text-title-medium'>
        Title Medium (20px, bold)
      </Text>
      <Text tx='title' className='text-title-small'>
        Title Small (18px, semibold)
      </Text>

      <Text tx='body' className='text-body-large'>
        Body Large (19px)
      </Text>
      <Text tx='body' className='text-body-medium'>
        Body Medium (17px)
      </Text>
      <Text tx='body' className='text-body-small'>
        Body Small (15px)
      </Text>

      <Text tx='label' className='text-label-large'>
        Label Large (16px, semibold)
      </Text>
      <Text tx='label' className='text-label-medium'>
        Label Medium (14px, medium)
      </Text>
      <Text tx='label' className='text-label-small'>
        Label Small (12px, medium)
      </Text>
    </View>
  );
}
