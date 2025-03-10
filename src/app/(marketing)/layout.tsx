import React from 'react';

const MarketingLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="mx-auto max-w-5xl py-10">{children}</div>;
};

export default MarketingLayout;
