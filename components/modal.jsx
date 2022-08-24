/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

export default function Modal({
  open = false,
  headerText = "",
  bodyText = "",
  headerColor = "bg-green-100",
  onClose,
}) {
  // const [open, setOpen] = useState(false);

  return (
    <Transition.Root show={open} as={Fragment} onClose={onClose}>
      <Dialog as="div" className="relative z-10">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="">
                    <div className="flex justify-center items-center">
                      <div className={`p-4 ${headerColor}`}>
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-medium text-gray-900"
                        >
                          {headerText}
                        </Dialog.Title>
                      </div>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 text-center">
                          {bodyText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  {/* <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    close
                  </button> */}
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

/* This example requires Tailwind CSS v2.0+ */
// import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

// export default function Modal() {
//   return (
//     <div className="bg-indigo-600">
//       <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between flex-wrap">
//           <div className="w-0 flex-1 flex items-center">
//             <span className="flex p-2 rounded-lg bg-indigo-800">
//               <SpeakerphoneIcon
//                 className="h-6 w-6 text-white"
//                 aria-hidden="true"
//               />
//             </span>
//             <p className="ml-3 font-medium text-white truncate">
//               <span className="md:hidden">We announced a new product!</span>
//               <span className="hidden md:inline">
//                 Big news! We're excited to announce a brand new product.
//               </span>
//             </p>
//           </div>
//           <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
//             <a
//               href="#"
//               className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
//             >
//               Learn more
//             </a>
//           </div>
//           <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
//             <button
//               type="button"
//               className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
//             >
//               <span className="sr-only">Dismiss</span>
//               <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
