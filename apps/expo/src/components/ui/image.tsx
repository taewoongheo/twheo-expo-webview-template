import type { ImageProps } from 'expo-image';
import { Image as NImage } from 'expo-image';

interface Props extends ImageProps {
  className?: string;
}

export default function Image({ placeholder, className, ...props }: Props) {
  return <NImage placeholder={placeholder} className={className} {...props} />;
}

export const preloadImages = (sources: string[]) => {
  NImage.prefetch(sources);
};
