import React, { useEffect, useState } from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  Button,
  Checkbox,
  Icon,
  Table,
} from 'semantic-ui-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import Modalcomponent from './Modalcomponent'; 
import UpdateModal from './UpdateModal';

const Dashbord = () => {
  const [items,setItems]=useState([]);
  const [modalopen,setmodalopen]=useState(false);
  const[selectedRows,setSelectedRows]=useState([]);

    const handleCheckboxChange = (event, { checked }, rowId) => {
      if (checked) {
        setSelectedRows([...selectedRows, rowId]);
      } else {
        setSelectedRows(selectedRows.filter(id => id !== rowId));
      }
      console.log([...selectedRows]);
    };

  const handleOpenModal=()=>{
    setmodalopen(true);
  }
  const handleCloseModal=()=>{
    setmodalopen(false);
  }

  

  const deleteSelectedRows=()=>{
    axios.delete('http://localhost:8080/delete', { data: selectedRows }).then(response =>{
      toast.success("Items Deleted Successfully ",response.data);
      fetchData();
    }).catch(error=>{
      toast.error("Something went wrong while deleting items");
    })

  }
  

  const fetchData = async () => {
    try{
      axios.get('http://localhost:8080/items').then(response=>{
        setItems(response.data);
      });

      
    }
    catch(error){
      toast.error("some thing went wrong on getting items");
    }
  }
  

  useEffect(() => {
    fetchData();
  }, []);

  const adduser=()=>{

  }

  return (
    <div >
    <Table celled compact definition className='table'>
    <TableHeader fullWidth>
      <TableRow>
        <TableHeaderCell />
        <TableHeaderCell>ItemCode</TableHeaderCell>
        <TableHeaderCell>Item Name</TableHeaderCell>
        <TableHeaderCell>Category</TableHeaderCell>
        <TableHeaderCell>Quantity</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      {items.map(item =>(
        <TableRow key={item.itemcode}>
        <TableCell collapsing>
          <Checkbox
          onChange={(e, data) => handleCheckboxChange(e, data, item.itemcode)}
            checked={selectedRows.includes(item.itemcode)} />
        </TableCell>
        <TableCell>{item.itemcode}</TableCell>
        <TableCell>{item.itemName}</TableCell>
        <TableCell>{item.category}</TableCell>
        <TableCell>{item.quantity}</TableCell>
        <TableCell>{item.status}</TableCell>
      </TableRow>
      ))};
    </TableBody>

    <TableFooter fullWidth>
      <TableRow>
        <TableHeaderCell />
        <TableHeaderCell colSpan='5'>
         
          <Button size='small' primary onClick={handleOpenModal}>Add User</Button>
          <Modalcomponent open={modalopen} setmodalopen={setmodalopen} onClose={handleCloseModal} />
          <Button
            primary
            size='small'
            onClick={deleteSelectedRows}
          > Delete
          </Button>
          
          <Button  size='small' primary onClick={handleOpenModal } floated='right' >Update</Button>
          <UpdateModal  onClose={handleCloseModal}></UpdateModal>
        </TableHeaderCell>
      </TableRow>
    </TableFooter>
  </Table>
  </div>
  )
}

export default Dashbord
