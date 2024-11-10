import { Modal } from "antd";
import React from "react";

export const LogoutModal = ({ isLogoutModalOpen, setIsLogoutModalOpen }) => {
  const handleModalCancel = () => {
    setIsLogoutModalOpen(false);
  };
  return (
    <Modal
      rootClassName="rm-logout-modal"
      centered
      title={null}
      footer={null}
      open={isLogoutModalOpen}
      onCancel={handleModalCancel}
    >
      <div className="flex flex-col gap-5 py-5 text-center mt-5 items-center justify-center">
        <div className="font-normal w-full flex flex-col gap-3">
          <h1 className="text-2xl">You will be logged out</h1>
          <h2 className="text-base">Do you want to logout?</h2>
        </div>
        <div className="w-full flex items-center justify-center gap-4">
          <button className="bg-custom-blue-50 rounded-md text-white font-normal text-sm py-3 w-32">
            Logout
          </button>
          <button
            className="bg-white text-custom-blue-50 text-sm border-custom-blue-50 border py-3 w-32 rounded-md"
            onClick={handleModalCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};
