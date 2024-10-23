import React from 'react';
import FeedbackForm from '../components/FeedbackForm';

const FeedbackManagement = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Feedback Management</h1>
      <FeedbackForm />
    </div>
  );
};

export default FeedbackManagement;