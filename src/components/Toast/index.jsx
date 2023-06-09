import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast({show, setShowToast, message}) {
  return (
    <div>
      {show && toast(message)}
      <ToastContainer />
      {setShowToast(false)}
    </div>
  );
}

export default Toast