import React from 'react';

function Image({ src }) {
  return src ? (
    <img
      className="my-0 mx-auto"
      src={`data:image/png;base64,${src}`}
      alt="no images"
    />
  ) : null;
}

export default Image;
