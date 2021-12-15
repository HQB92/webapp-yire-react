import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { Button } from 'react-bootstrap';

import {MatriculaProximoAñoGuardar} from './matriculaProximoAñoGuardar'

const Example2 = () => {
  const componentRef = useRef();
  return (
    <div >
      <ReactToPrint 
        trigger={() => <Button className='btn_imprimir' style={{ position: 'relative', float: 'right',  }} >Imprimir </Button>}
        content={() => componentRef.current}
      />
      <MatriculaProximoAñoGuardar ref={componentRef} />
    </div>
  );
}

export default Example2;
