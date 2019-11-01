import React from 'react';
import PageTemplate from 'components/template/PageTemplate';
import NavTemplate from 'components/template/NavTemplate';
import NavGlobal from 'components/base/NavGlobal';
import NavContext from 'components/base/NavContext';

function Project() {
  return (
    <PageTemplate
      aside={<NavTemplate global={<NavGlobal />} sub={<NavContext />} />}
    ></PageTemplate>
  );
}

export default Project;
