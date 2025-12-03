import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { Button, Modal, Page, useModal } from '@src/components';
import { Text, View } from 'react-native';

export default function Index() {
  const { ref: baseModalRef, present: presentBaseModal } = useModal();

  const { ref: inputModalRef, present: presentInputModal } = useModal();

  const { ref: detachedModalRef, present: presentDetachedModal } = useModal();

  return (
    <Page keyboardAvoidingEnabled={false}>
      <View className='w-full gap-4'>
        <Button color='primary' size='default' text='Open Modal' onPress={presentBaseModal} />
        <Modal ref={baseModalRef}>
          <Text>Modal</Text>
        </Modal>
        <Button
          color='primary'
          size='default'
          text='Open Input Modal'
          onPress={presentInputModal}
        />
        <Modal ref={inputModalRef}>
          <BottomSheetTextInput
            placeholder='Enter your name'
            className='w-full rounded-md border border-gray-300 p-2'
          />
        </Modal>
        <Button
          color='primary'
          size='default'
          text='Open Detached Modal'
          onPress={presentDetachedModal}
        />
        <Modal ref={detachedModalRef} detached={true}>
          <Text>Detached Modal</Text>
        </Modal>
      </View>
    </Page>
  );
}
