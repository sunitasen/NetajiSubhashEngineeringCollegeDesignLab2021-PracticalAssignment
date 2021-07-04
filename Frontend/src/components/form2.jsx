import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { courseVar, friendContactVar, friendEmailVar, referAFriendVar, slotVar, workflowVar } from '../apollo/reactiveVars';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {SubmitButton} from './submitButton'

function ExtraDataForm() {
    const course = useReactiveVar(courseVar);
    const slot = useReactiveVar(slotVar);
    const referAFriend = useReactiveVar(referAFriendVar);
    const friendsContact = useReactiveVar(friendContactVar);
    const friendsEmail = useReactiveVar(friendEmailVar);
    const workflow = useReactiveVar(workflowVar);

    const updateCourse = (event) => {
        courseVar(event.target.value);
    }
    const updateSlot = (event) => {
        slotVar(event.target.value);
    }
    const updateFriend = (event) => {
        referAFriendVar(event.target.value);
    }
    const updateFriendContactNo = (event) => {
        friendContactVar(event.target.value);
    }
    const updateFriendEmail = (event) => {
        friendEmailVar(event.target.value);
    }

    const updateThirdWorflow = () => {
        workflowVar(3);
    }

    const updateFirstWorflow = () => {
        workflowVar(1);
    }

  return (
    <div>
        <Form.Control required size="lg" type="text" value={course} placeholder="Course" onChange={updateCourse}/>
        <Form.Control size="lg" type="text" value={slot}  placeholder="Slot" onChange={updateSlot}/>
        <Form.Control size="lg" type="email"  value={referAFriend}  placeholder="Refer a Friend" onChange={updateFriend} />
        <Form.Control size="lg" type="text" value={friendsContact} placeholder="Friends Contact Number" onChange={updateFriendContactNo} />
        <Form.Control size="lg" type="text"  value={friendsEmail}  placeholder="Friends Email Id" onChange={updateFriendEmail} />
        <Button onClick={updateFirstWorflow}>Back</Button>
        {
            workflow === 2
            ?
            <Button onClick={updateThirdWorflow}>Next</Button>
            :
            <SubmitButton />
        }
        
        
    </div>
  );
}

export {ExtraDataForm};
