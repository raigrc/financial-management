import React from "react";

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="space-y-3 flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center">Financial Management</h1>
      <p>{label}</p>
    </div>
  );
};

export default Header;
