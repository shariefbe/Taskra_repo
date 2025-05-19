
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const Reminders = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reminders</h1>
        <Link to="/reminders/new">
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" /> New Reminder
          </Button>
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 text-center text-gray-500">
          No reminders found. Create your first reminder to get started.
        </div>
      </div>
    </div>
  );
};

export default Reminders;
