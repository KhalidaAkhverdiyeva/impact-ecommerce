export interface ModalProps {
  image: string;
  onClose: () => void;
  currentIndex: number;
  totalImages: number;
  onPrev: () => void;
  onNext: () => void;
}
