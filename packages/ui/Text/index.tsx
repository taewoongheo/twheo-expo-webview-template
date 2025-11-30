import { t } from 'i18next';
import { useMemo } from 'react';
import type { TextProps as NTextProps } from 'react-native';
import { Text as NText } from 'react-native';
import { twMerge } from 'tailwind-merge';

// TODO: add typography tokens

interface TextProps extends NTextProps {
  className?: string;
  tx?: string;
}

export default function Text({ className, tx, children, ...props }: TextProps) {
  const styles = useMemo(
    () =>
      twMerge(
        'text-base text-text-primary-light dark:text-text-primary-dark font-inter font-normal',
        className
      ),
    [className]
  );

  return (
    <NText className={styles} {...props}>
      {tx ? t(tx) : children}
    </NText>
  );
}
