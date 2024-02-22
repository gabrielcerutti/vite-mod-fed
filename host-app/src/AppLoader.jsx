import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function AppLoader({ endpoint }) {
  const [Module, setModule] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    import('microApp1/App')
      .then((module) => {
        setModule(module);
      })
      .catch((error) => {
        setError(error);
      });
  });

  if (error) {
    return <div>Failed to load module {endpoint}</div>;
  }

  if (!Module) {
    return <div>Loading...</div>;
  }

  return <Module />;
}

AppLoader.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default AppLoader;