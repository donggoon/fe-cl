import React from 'react';

function QutestionImage({ src }) {
  return src ? (
    <img
      className="my-0 mx-auto"
      src={`data:image/png;base64,${src}`}
      alt="no images"
    />
  ) : null;
}

export default QutestionImage;
