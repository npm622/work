import React from 'react';

interface Props {
  className: string;
}

const DashboardPageSidebar = ({ className = 'dashboard-page-sidebar' }: Props) => (
  <div className={className}>sidebar</div>
);

export default DashboardPageSidebar;
