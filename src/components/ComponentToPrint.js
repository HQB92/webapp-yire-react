import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { Button } from 'react-bootstrap';

import { MatriculaProximoAño }  from './matriculaProximoAño'

const Example = () => {
  const componentRef = useRef();
  return (
    <div >
      <ReactToPrint 
        trigger={() => <Button className='btn_imprimir' style={{ position: 'relative', float: 'right',  }} >Imprimir </Button>}
        content={() => componentRef.current}
      />
      <MatriculaProximoAño ref={componentRef} />
    </div>
  );
}

export default Example;
