import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const AppLoader = ({ module }) => {
  let LazyComponent;
  if (module === 'microApp1') {
    LazyComponent = React.lazy(() =>
      // This way doesn't work with Vite
      //import(/* @vite-ignore */ `${module}/${component}`)
      import('microApp1/App')
    );
  } else if (module === 'microApp2') {
    LazyComponent = React.lazy(() =>
      import('microApp2/App')
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

AppLoader.propTypes = {
  module: PropTypes.string.isRequired,
};

export default AppLoader;