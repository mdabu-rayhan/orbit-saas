import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 min-h-screen">
        <nav>{/* Sidebar content */}</nav>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Topbar */}
        <header className="bg-white border-b">{/* Topbar content */}</header>
        
        {/* Page Content */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
