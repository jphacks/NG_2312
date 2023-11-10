import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Modal = ({ children }: Props) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center">
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-black opacity-80 "></div>
      <div className="w-11/12 flex justify-center items-center rounded-lg bg-white">
        {children}
      </div>
    </div>
  );
};

export default Modal;
