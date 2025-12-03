import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Props {
  keyboardAvoidingEnabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Page({
  className,
  children,
  keyboardAvoidingEnabled = true,
  ...props
}: Props) {
  return (
    <KeyboardAvoidingView
      enabled={keyboardAvoidingEnabled}
      className={twMerge('flex-1', className)}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      {...props}
    >
      <View className='flex-1 items-center justify-center bg-blue-100 px-4 py-6 dark:bg-blue-900'>
        {children}
      </View>
    </KeyboardAvoidingView>
  );
}
