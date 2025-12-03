import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { Button } from '@src/components/ui';
import Modal, { useModal } from '@src/components/ui/modal';
import { Text, View } from 'react-native';

export default function Index() {
  const { ref: baseModalRef, present: presentBaseModal } = useModal();

  const { ref: inputModalRef, present: presentInputModal } = useModal();

  return (
    <View className='flex-1 items-center justify-center gap-4 bg-blue-100 p-5 dark:bg-blue-900'>
      <Button color='primary' size='default' text='Open Modal' onPress={presentBaseModal} />
      <Modal ref={baseModalRef}>
        <Text>Modal</Text>
      </Modal>
      <Button color='primary' size='default' text='Open Input Modal' onPress={presentInputModal} />
      <Modal ref={inputModalRef}>
        <BottomSheetTextInput
          placeholder='Enter your name'
          className='w-full rounded-md border border-gray-300 p-2'
        />
      </Modal>
    </View>
  );
}
