import { useEffect, useRef } from "react";

const Modal = ({ show, toggleModal, children }) => {
  useEffect(() => {
    if (!show) {
      setTimeout(function () {
        modalRef.current.classList.add("z--1");
        bodyScroll(false);
      }, 300);
    }
    if (show) {
      modalRef.current.classList.remove("z--1");
      bodyScroll(true);
    }
  }, [show]);

  const modalRef = useRef(null);

  const bodyScroll = (b) => {
    const $body = document.querySelector("body");
    console.log($body.classList);
    let scrollPosition = 0;
    if (b) {
      scrollPosition = window.pageYOffset;
      // $body.style.overflow = "hidden";
      $body.classList.add("hidden-scrollbar");
      $body.style.position = "fixed";
      $body.style.top = `-${scrollPosition}px`;
      $body.style.width = "100%";
    } else {
      // $body.style.removeProperty("overflow");
      $body.classList.remove("hidden-scrollbar");
      $body.style.removeProperty("position");
      $body.style.removeProperty("top");
      $body.style.removeProperty("width");
      window.scrollTo(0, scrollPosition);
    }
  };

  return (
    <>
      <div ref={modalRef} className={show ? " modal" : " modal"}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/*Background overlay, show/hide based on modal state.*/}

          {/*Entering: "ease-out duration-300"*/}
          {/*  From: "opacity-0"*/}
          {/*  To: "opacity-100"*/}
          {/*Leaving: "ease-in duration-200"*/}
          {/*  From: "opacity-100"*/}
          {/*  To: "opacity-0"*/}
          {/**/}
          <div
            onClick={toggleModal}
            className={
              show
                ? "delay-50 ease-out duration-300 opacity-100 modal-backdrop"
                : "ease-in duration-200 opacity-0 modal-backdrop"
            }
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-black opacity-75"></div>
          </div>

          {/*This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          {/*Modal panel, show/hide based on modal state.*/}

          {/*Entering: "ease-out duration-300"*/}
          {/*  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"*/}
          {/*  To: "opacity-100 translate-y-0 sm:scale-100"*/}
          {/*Leaving: "ease-in duration-200"*/}
          {/*  From: "opacity-100 translate-y-0 sm:scale-100"*/}
          {/*  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"*/}
          {/**/}
          <div
            className={
              show
                ? "delay-50 ease-out duration-300 opacity-100 translate-y-0 sm:scale-100 modal-content"
                : "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 modal-content"
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
