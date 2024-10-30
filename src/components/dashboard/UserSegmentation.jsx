import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { MoreVertical, ExternalLink } from "lucide-react";

const segmentationData = [
  { c1: 'Not Specified', c2: '800', color: '#9BA1A6', c3: 'rgba(155, 161, 166, 0.2)' },
  { c1: 'Male', c2: '441', color: '#8884d8', c3: 'rgba(136, 132, 216, 0.2)' },
  { c1: 'Female', c2: '233', color: '#82ca9d', c3: 'rgba(130, 202, 157, 0.2)' },
  { c1: 'Other', c2: '126', color: '#ffc658', c3: 'rgba(255, 198, 88, 0.2)' }
];

const UserSegmentation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">User Segmentation</h3>
        <div className="relative">
          <button 
            className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800"
            onClick={() => setShowOptions(!showOptions)}
          >
            <MoreVertical className="w-5 h-5" />
          </button>
          {showOptions && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10 border border-gray-200 dark:border-gray-700">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                onClick={() => {
                  onOpen();
                  setShowOptions(false);
                }}
              >
                <ExternalLink size={16} />
                View Details
              </button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardBody>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">All users</div>
        <div className="space-y-4">
          {segmentationData.map(({ c1, c2, c3, color }) => (
            <div className="flex items-center gap-4" key={c1}>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <div className="text-sm" style={{ color }}>
                {c1}
              </div>
              <div className="flex-grow" />
              <div className="text-sm font-medium" style={{ color }}>
                {c2}
              </div>
              <div className="w-24 h-8 rounded-lg overflow-hidden" style={{ backgroundColor: c3 }} />
            </div>
          ))}
        </div>
        <Button 
          className="mt-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={onOpen}
        >
          View Details
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
          <ModalContent>
            <ModalHeader>User Segmentation Details</ModalHeader>
            <ModalBody>
              <div className="space-y-6">
                {segmentationData.map(({ c1, c2, color }) => (
                  <div key={c1} className="p-4 rounded-lg border dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <h4 className="text-lg font-semibold" style={{ color }}>
                        {c1}
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Total Users</p>
                        <p className="text-xl font-bold">{c2}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Percentage</p>
                        <p className="text-xl font-bold">
                          {Math.round((parseInt(c2) / 1600) * 100)}%
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </CardBody>
    </Card>
  );
};

export default UserSegmentation;