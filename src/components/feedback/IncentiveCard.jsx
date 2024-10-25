import React from 'react';
import { Card, CardBody, Button, Progress } from "@nextui-org/react";
import { Gift, Star, Trophy, Crown } from 'lucide-react';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const shine = keyframes`
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
`;

const StyledCard = styled(Card)`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    animation: ${shine} 3s infinite linear;
  }
`;

const FloatingIcon = styled.div`
  animation: ${float} 3s ease-in-out infinite;
`;

const getRewardTier = (credits) => {
  if (credits >= 1000) return { name: 'Diamond', icon: <Crown className="text-blue-200" size={32} /> };
  if (credits >= 500) return { name: 'Platinum', icon: <Trophy className="text-gray-200" size={32} /> };
  if (credits >= 200) return { name: 'Gold', icon: <Star className="text-yellow-400" size={32} /> };
  return { name: 'Silver', icon: <Gift className="text-gray-400" size={32} /> };
};

const getNextTierProgress = (credits) => {
  if (credits >= 1000) return 100;
  if (credits >= 500) return (credits - 500) / 5;
  if (credits >= 200) return (credits - 200) / 3;
  return credits / 2;
};

const IncentiveCard = ({ credits, onRedeem }) => {
  const tier = getRewardTier(credits);
  const progress = getNextTierProgress(credits);

  return (
    <StyledCard className="w-full">
      <CardBody className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">Feedback Rewards</h3>
            <p className="text-white/80 mb-4">
              You have earned <span className="font-bold text-white">{credits} credits</span>
            </p>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-white/80 mb-2">
                <span>{tier.name} Tier</span>
                <span>Next Tier</span>
              </div>
              <Progress 
                value={progress} 
                className="mb-2"
                color="success"
                showValueLabel={true}
              />
            </div>
            <Button
              color="secondary"
              onPress={onRedeem}
              className="w-full bg-white/20 backdrop-blur-lg hover:bg-white/30"
              startContent={<Gift size={18} />}
            >
              Open Rewards Store
            </Button>
          </div>
          <FloatingIcon className="ml-4">
            {tier.icon}
          </FloatingIcon>
        </div>
      </CardBody>
    </StyledCard>
  );
};

export default IncentiveCard;