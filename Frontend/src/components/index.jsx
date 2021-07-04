import React, {Fragment} from 'react';
import { workflowVar } from '../apollo/reactiveVars';
import { useReactiveVar } from '@apollo/client';
import {BasicDetailsForm} from './form1';
import {ExtraDataForm} from './form2';
import { Container } from 'react-bootstrap';
import { NavBar } from './Navbar';


function Index() {
    const workflow = useReactiveVar(workflowVar);
    
  return (
      <Fragment>  
          <NavBar/>
          <Container className="form">
          
                {
                    workflow === 1 
                    ?
                    <BasicDetailsForm />
                    :
                    <ExtraDataForm />
                }
           
        </Container>  
            
      </Fragment>

  );
}

export {Index};
