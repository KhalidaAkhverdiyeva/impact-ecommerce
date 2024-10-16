export interface ModalInfo {
  iconImg: string;
  altImg: string;
  title: string;
  info: string;
}

export interface ModalPosition {
  top: string | number;
  left: string | number;
}

export interface InfoModalProps {
  closeBottomDiv: () => void;
  isClosing: boolean;
  modalInfo: ModalInfo | null;
  position?: ModalPosition;
}
