import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Card, CardBody } from "@nextui-org/react";
import { Gift, Coffee, ShoppingBag, Ticket } from 'lucide-react';

const rewards = [
  { id: 1, name: "฿500 Gift Voucher", cost: 100, icon: <Gift className="w-8 h-8" /> },
  { id: 2, name: "Coffee Coupon", cost: 50, icon: <Coffee className="w-8 h-8" /> },
  { id: 3, name: "Shopping Discount", cost: 75, icon: <ShoppingBag className="w-8 h-8" /> },
  { id: 4, name: "Movie Tickets", cost: 80, icon: <Ticket className="w-8 h-8" /> },
];

const RewardsStore = ({ isOpen, onClose, credits, onRedeem }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          <h2 className="text-2xl">Rewards Store</h2>
          <p className="text-sm text-gray-500">Your Credits: {credits}</p>
        </ModalHeader>
        <ModalBody className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {rewards.map((reward) => (
            <Card key={reward.id} className="hover:shadow-lg transition-shadow">
              <CardBody className="flex flex-row items-center gap-4 p-4">
                <div className="text-purple-500">
                  {reward.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold">{reward.name}</h3>
                  <p className="text-sm text-gray-500">{reward.cost} credits</p>
                </div>
                <Button
                  color="primary"
                  isDisabled={credits < reward.cost}
                  onClick={() => {
                    onRedeem(reward.cost);
                    onClose();
                  }}
                >
                  Redeem
                </Button>
              </CardBody>
            </Card>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RewardsStore;