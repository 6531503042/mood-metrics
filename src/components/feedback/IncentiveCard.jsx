import React from 'react';
import { Card, CardBody, Button } from "@nextui-org/react";
import { Gift } from 'lucide-react';

const IncentiveCard = ({ credits, onRedeem }) => {
  return (
    <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <CardBody>
        <div className="flex items-center gap-4">
          <Gift size={32} />
          <div>
            <h3 className="text-xl font-bold">Feedback Rewards</h3>
            <p className="text-sm opacity-90">You have {credits} credits</p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="mb-4">Redeem 100 credits for a ฿500 gift voucher!</p>
          <Button
            color="secondary"
            onPress={onRedeem}
            disabled={credits < 100}
            className="w-full"
          >
            Redeem Now
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default IncentiveCard;