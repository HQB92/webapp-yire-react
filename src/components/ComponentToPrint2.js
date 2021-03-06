import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { Button } from 'react-bootstrap';

import {MatriculaProximoAĆ±oGuardar} from './matriculaProximoAĆ±oGuardar'

const Example2 = () => {
  const componentRef = useRef();
  return (
    <div >
      <ReactToPrint 
        trigger={() => <Button className='btn_imprimir' style={{ position: 'relative', float: 'right',  }} >Imprimir </Button>}
        content={() => componentRef.current}
      />
      <MatriculaProximoAĆ±oGuardar ref={componentRef} />
    </div>
  );
}

export default Example2;
