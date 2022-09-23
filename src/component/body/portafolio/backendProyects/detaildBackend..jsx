import React from "react";
import { AnimatePresence, motion, pre } from "framer-motion";

const DetailBackend = ({ dataB, stateModal, closeModalB }) => {
  return (
    <>
      <AnimatePresence>
        {stateModal && (
          <motion.div exit={{opacity:0}} className="fixed z-30 top-0 left-0 bottom-0 w-full h-full bg-white bg-red-400 h-full flex items-center justify-center py-20">
            <div className=" bg-white rounded-lg w-11/12 sm:w-5/6 md:w-3/4 py-3 px-4 my-auto">
              <div className="text-right bg-green-300 flex justify-end">
                <svg
                  onClick={() => closeModalB()}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              this content detail data backend
              <hr />
              {dataB?.title}
              {dataB?.numero}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DetailBackend;
