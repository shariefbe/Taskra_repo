
import React from 'react';
import { useParams } from 'react-router-dom';

const ReminderDetail = () => {
  const { id } = useParams();
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Reminder Details</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center py-8 text-gray-500">
          Reminder #{id} details will be displayed here.
        </div>
      </div>
    </div>
  );
};

export default ReminderDetail;
