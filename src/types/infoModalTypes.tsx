export interface WebInfoModalProps extends InfoModalProps {
  top: string;
  left: string;
}

export interface ModalInfo {
  iconImg: string;
  altImg: string;
  title: string;
  info: string;
}

export interface InfoModalProps {
  modalInfo: ModalInfo | null;
  closeBottomDiv: () => void;
  isClosing?: boolean;
  top?: string;
  left?: string;
}
