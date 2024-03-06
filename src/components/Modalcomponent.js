import React, { useState } from 'react'
import { Modal, Button, Form, FormGroup, FormInput } from 'semantic-ui-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Modalcomponent = ({ open, onClose }) => {
    const [itemName, setitemName] = useState('');
    const [category, setcategory] = useState('');
    const [quantity, setquantity] = useState('');
    const [status, setstatus] = useState('');

    const handleInputChange = (e, { name, value }) => {
        if(name === 'itemName'){
            setitemName(value);
        }
        else if(name==='category'){
            setcategory(value);
        }
        else if(name === 'quantity'){
            setquantity(value);
        }
        else if(name==='status'){
            setstatus(value);
        }

    }
    const handlesubmit = async (e) => {

        setitemName(e.target[0].value);
        setcategory(e.target[1].value);
        setquantity(e.target[2].value);
        setstatus(e.target[3].value);

         
        const item={itemName,category,status,quantity}
        try{
        if(item){
            if(itemName && category&&quantity&& status){
            const response=await axios.post('http://localhost:8080/saveitem',item);
            if(response){
                toast.success("Item added successfully");
            }
        }
            else{
                toast.error("please fill all columns");
            }
        }

          setitemName('');
          setcategory('');
          setquantity('');
          setstatus('');
        }catch (error) {
            toast.error("All feild were mandatory");
        }


    }
    return (
        <Modal basic open={open} onClose={onClose} size='tiny'>
            <Modal.Header>Add User</Modal.Header>
            <Form size='large' onSubmit={handlesubmit}>
                <Modal.Content>
                    <FormGroup widths='equal'>
                        <FormInput
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='itemName' name="itemName" onChange={handleInputChange}
                            placeholder='Item name' value={itemName}
                        />
                        <FormInput
                            fluid
                            id='form-subcomponent-shorthand-input-last-name'
                            label='category' name="category"
                            placeholder='Category' onChange={handleInputChange}
                            value={category}
                        />
                        <FormInput
                            fluid
                            id='form-subcomponent-shorthand-input-last-name'
                            label='quantity' name="quantity"
                            placeholder='quantity' onChange={handleInputChange}
                            value={quantity}
                        />
                        <FormInput
                            fluid
                            id='form-subcomponent-shorthand-input-last-name'
                            label='status' name="status"
                            placeholder='status' onChange={handleInputChange}
                            value={status}
                        />
                    </FormGroup>
                </Modal.Content>
                <Modal.Actions>
                    <Button> save</Button>
                    <Button onClick={onClose}>Close</Button>
                </Modal.Actions>
            </Form>
        </Modal >
    )
}

export default Modalcomponent
