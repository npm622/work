import React from 'react';

interface Props {
  className: string;
}

const DashboardPageContent: React.FC<Props> = ({ className = 'dashboard-page-content' }) => (
  <div className={className}>content</div>
);

export default DashboardPageContent;
