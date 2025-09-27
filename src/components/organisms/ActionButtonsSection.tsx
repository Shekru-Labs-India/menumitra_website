'use client';

import React from 'react';
import { TargetCursor } from '@/components/reactbits';
// Replaced lucide-react icons with inline SVGs to ensure color inheritance

const ActionButtonsSection: React.FC = () => {
  return (
    <section className="py-16 bg-transparent relative">
      <div className="container w-full px-4 sm:px-6 lg:px-8 max-md:hidden">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 11v6"></path>
              <path d="M14 11v6"></path>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
              <path d="M3 6h18"></path>
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
            Reduce
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="#16a34a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="12" y1="2" x2="12" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            Recover
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
            Insights
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
            Optimize
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="#16a34a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="12" y1="2" x2="12" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            Automate
          </button>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 11v6"></path>
              <path d="M14 11v6"></path>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
              <path d="M3 6h18"></path>
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
            Scale
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
