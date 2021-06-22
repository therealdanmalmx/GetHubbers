import React, { useState } from 'react'


function ShowAlert(msg) {
  const [alert, setAlert] = useState(null);

  setAlert({ msg });
  setTimeout(() => [setAlert(null)], 5000);
}

export default ShowAlert
