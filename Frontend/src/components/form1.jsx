import { useReactiveVar } from '@apollo/client';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { contactVar, emailIdVar, nameVar, guardianContactVar, guardianVar, workflowVar } from '../apollo/reactiveVars';
import Button from 'react-bootstrap/Button';

function BasicDetailsForm() {
    const name = useReactiveVar(nameVar);
    const contact = useReactiveVar(contactVar);
    const email = useReactiveVar(emailIdVar);
    const guardian = useReactiveVar(guardianVar);
    const guardianContact = useReactiveVar(guardianContactVar);


    const updateName = (event) => {
        nameVar(event.target.value);
    }

    const updateContact = (event) => {
        contactVar(event.target.value);
    }

    const updateEmail = (event) => {
        emailIdVar(event.target.value);
    }

    const updateGuardian = (event) => {
        guardianVar(event.target.value);
    }

    const updateGuardianContact = (event) => {
        guardianContactVar(event.target.value);
    }

    const updateSecondWorflow = () => {
        workflowVar(2);
    }

  return (
    <div>
        <Form.Control required size="lg" type="text" value={name} placeholder="Name" onChange={updateName}/>
        <Form.Control size="lg" type="text" value={contact}  placeholder="Student Contact No" onChange={updateContact}/>
        <Form.Control size="lg" type="email"  value={email}  placeholder="Email id" onChange={updateEmail} />
        <Form.Control size="lg" type="text" value={guardian} placeholder="guardian name" onChange={updateGuardian} />
        <Form.Control size="lg" type="text"  value={guardianContact}  placeholder="guardian contact number" onChange={updateGuardianContact} />
        <Button onClick={updateSecondWorflow}>Next</Button>
    </div>
  );
}

export {BasicDetailsForm};
