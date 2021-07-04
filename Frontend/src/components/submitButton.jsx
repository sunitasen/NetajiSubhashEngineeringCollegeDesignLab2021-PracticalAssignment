import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { idVar, courseVar, friendContactVar, friendEmailVar, referAFriendVar, slotVar, workflowVar,contactVar, emailIdVar, nameVar, guardianContactVar, guardianVar } from '../apollo/reactiveVars';
import Button from 'react-bootstrap/Button';


function SubmitButton() {
    const course = useReactiveVar(courseVar);
    const slot = useReactiveVar(slotVar);
    const referAFriend = useReactiveVar(referAFriendVar);
    const friendsContact = useReactiveVar(friendContactVar);
    const friendsEmail = useReactiveVar(friendEmailVar);
    const name = useReactiveVar(nameVar);
    const contact = useReactiveVar(contactVar);
    const email = useReactiveVar(emailIdVar);
    const guardian = useReactiveVar(guardianVar);
    const guardianContact = useReactiveVar(guardianContactVar);
    const id = useReactiveVar(idVar);

    const submitData = (event) => {
        event.preventDefault();
    
        fetch('http://localhost:3001/submitForm',{
            method: 'post',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify({
                id,
                name,
                contact,
                email,
                guardian,
                guardianContact,
                course,
                slot,
                referAFriend,
                friendsContact,
                friendsEmail
            })
        })
        .then(response => response.text())
        .then(data => {
            if(data === "Done") {
                console.log("Success");
                idVar(id + 1);
                nameVar("");
                contactVar("");
                emailIdVar("");
                guardianContactVar("");
                guardianVar("");
                courseVar("");
                slotVar("");
                referAFriendVar("");
                friendContactVar("");
                friendEmailVar("");
                workflowVar(1);
            }
        })
        .catch(e => console.log(e))
    }
    

  return (
        <Button onClick={submitData}>Submit</Button>  
  );
}

export {SubmitButton};
