import React from 'react';

const NotFoundPage = () => {
  // Redirect to homepage
  React.useEffect(() => {
    window.location.pathname = '';
  }, []);

  return null;
};

export default NotFoundPage;
