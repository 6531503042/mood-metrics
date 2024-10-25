import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const FeedbackSuccessModal = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [isOpen]);

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      className="bg-white dark:bg-gray-900"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Feedback Submitted!</ModalHeader>
        <ModalBody className="flex flex-col items-center py-8">
          <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
          <p className="text-center text-gray-600 dark:text-gray-400">
            Thank you for your valuable feedback. Your input helps us improve!
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={onClose} className="w-full">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FeedbackSuccessModal;