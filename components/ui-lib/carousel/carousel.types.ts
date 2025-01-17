export interface CarouselProps {
  children: React.ReactNode;
  show?: number;
  infiniteLoop?: boolean;
  showIndicator?: boolean;
  autoplay?: number;
  disabledAutoplay?: boolean;
  className?: string;
  itemClassName?: string;
}
