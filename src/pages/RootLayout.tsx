import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full h-full bg-zinc-100">
      <div className="w-[500px] mx-auto min-h-screen py-12">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
