export interface ModalInfo {
  iconImg: string;
  altImg: string;
  title: string;
  info: string;
}

export interface InfoModalProps {
  closeBottomDiv: () => void;
  isClosing: boolean;
  modalInfo: ModalInfo | null;
}
