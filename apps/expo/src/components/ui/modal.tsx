/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Button } from '@src/components/ui';
import { useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { Keyboard } from 'react-native';

export const useModal = () => {
  const ref = useRef<BottomSheetModal>(null);

  const present = useCallback((data?: any) => ref.current?.present(data), []);

  const dismiss = useCallback(() => ref.current?.dismiss(), []);

  return { ref, present, dismiss };
};

export default function Modal({
  ref,
  snapPoints,
  detached,
  children,
  ...props
}: {
  ref: React.Ref<BottomSheetModal>;
  snapPoints?: string[];
  detached?: boolean;
  children: React.ReactNode;
}) {
  const modal = useModal();

  const _snapPoints = useMemo(() => snapPoints, [snapPoints]);

  const _detachedProps = useMemo(() => getDetachedProps(detached), [detached]);

  useImperativeHandle(ref, () => (modal.ref.current as BottomSheetModal) || null);

  return (
    <BottomSheetModal
      ref={modal.ref}
      backdropComponent={renderBackdrop}
      snapPoints={_snapPoints}
      enableDynamicSizing={true}
      keyboardBehavior='interactive'
      keyboardBlurBehavior='restore'
      {..._detachedProps}
      {...props}
    >
      <BottomSheetView className='flex-1 items-center justify-center gap-4 bg-blue-100 p-5 pb-12 dark:bg-blue-500'>
        {children}
        <Button color='primary' size='default' text='Close Modal' onPress={modal.dismiss} />
      </BottomSheetView>
    </BottomSheetModal>
  );
}

const renderBackdrop = (props: BottomSheetBackdropProps) => {
  return (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.4}
      onPress={Keyboard.dismiss}
      pressBehavior='close'
    />
  );
};

const getDetachedProps = (detached?: boolean) => {
  if (detached) {
    return {
      detached: true,
      bottomInset: 16,
      style: { marginHorizontal: 16, borderRadius: 16 },
    };
  }
  return {};
};
