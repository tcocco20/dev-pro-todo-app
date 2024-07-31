import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-[500px] mx-auto min-h-screen">
      <Outlet />
    </div>
  );
};

export default RootLayout;
