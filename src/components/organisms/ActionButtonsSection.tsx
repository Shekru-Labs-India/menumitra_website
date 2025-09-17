'use client';

import React from 'react';
import { TargetCursor } from '@/components/reactbits';
import { Trash2, DollarSign, BarChart3 } from 'lucide-react';

const ActionButtonsSection: React.FC = () => {
  return (
    <section className="py-16 bg-transparent dark:bg-gray-900 relative">
      <div className="container w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            className="cursor-target px-4 py-2 text-red-600 rounded-full transition-colors text-lg font-semibold border flex items-center gap-2"
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              borderColor: 'rgba(239, 68, 68, 0.2)',
              cursor: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            }}
          >
            <Trash2 className="w-5 h-5 text-red-600" />
            Stop Wastage
          </button>
          <button 
            className="cursor-target px-4 py-2 text-green-600 rounded-full transition-colors text-lg font-semibold border flex items-center gap-2"
            style={{
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              borderColor: 'rgba(34, 197, 94, 0.2)',
              cursor: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
            }}
          >
            <DollarSign className="w-5 h-5 text-green-600" />
            Recover Revenue
          </button>
          <button 
            className="cursor-target px-4 py-2 text-blue-600 rounded-full transition-colors text-lg font-semibold border flex items-center gap-2"
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderColor: 'rgba(59, 130, 246, 0.2)',
              cursor: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
            }}
          >
            <BarChart3 className="w-5 h-5 text-blue-600" />
            Get Insights
          </button>
        </div>
      </div>
      
      {/* Target Cursor for interactive elements */}
      <TargetCursor 
        targetSelector=".cursor-target"
        spinDuration={2}
      />
    </section>
  );
};

export default ActionButtonsSection;
