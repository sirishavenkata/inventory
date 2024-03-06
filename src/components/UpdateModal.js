import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const UpdateModal = ({ open, onClose }) => {
    return (
        <div>
        <Modal basic open={open}  >
            <Modal.Header>Add User</Modal.Header>
            <Modal.Content>
                <p>updated Model</p>
            </Modal.Content>
            <Modal.Actions>
                    <Button onClick={onClose}>Close</Button>
                </Modal.Actions>
        </Modal>
        </div>
    )
}

export default UpdateModal
