'use client'
import React, { useState } from 'react';
import Radio from './radio';

type RoleType = 'User' | 'Moderator' | 'Financial' | 'Admin';

const roles: RoleType[] = ['User', 'Moderator', 'Financial', 'Admin'];

const roleDescriptions: Record<RoleType, string> = {
  'User': 'User may have permissions to perform common tasks but may be restricted from certain functions.',
  'Moderator': 'Moderator may have permissions to edit or remove content and moderate user interactions.',
  'Financial': 'Financial Handles financial transactions, billing, invoicing, or accounting-related tasks',
  'Admin': 'Admin has full access to all features and functionalities of the system.'
};

const Role: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<RoleType>('User');

  const handleRoleChange = (role: RoleType) => {
    setSelectedRole(role);
  };

  return (
    <div className=' flex flex-col items-center justify-start'>
      
      <div className="flex space-x-8">
        {roles.map((role) => (
          <div key={role} className="flex items-center">
            <Radio checked={selectedRole === role} onCheck={() => handleRoleChange(role)} />
            <span className="ml-2 text-xl ">{role}</span>
          </div>
        ))}
      </div>
      {selectedRole && (
        <div className="mt-8  items-center justify-center">
          
          <p className='text-lg font-light tracking-wider'>{roleDescriptions[selectedRole]}</p>
        </div>
      )}
    </div>
  );
};

export default Role;