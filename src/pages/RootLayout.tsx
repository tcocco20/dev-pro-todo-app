import { Outlet } from "react-router-dom";
import TodoProvider from "../store/todo-context";

const RootLayout = () => {
  return (
    <TodoProvider>
      <div className="w-full h-full bg-zinc-100">
        <div className="max-w-[500px] mx-auto min-h-screen py-12">
          <Outlet />
        </div>
      </div>
    </TodoProvider>
  );
};

export default RootLayout;
