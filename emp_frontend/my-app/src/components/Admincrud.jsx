import React from 'react'
import Adminnavbar from './Adminnavbar'
import { useState,useEffect} from 'react'
import axios from 'axios'
import {Table, TableCell,Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Admincrud = () => {

  var [empData, setData] = useState([]);
    useEffect(() => {
      fetchEmployeedata();
    }, []);
    var apLink = "https://jsonplaceholder.typicode.com/users";

      const fetchEmployeedata = () => {
       axios
      .get(apLink)
      .then((response) => {
        setData(response.data);
      })
      .catch();

};

const onDelete = () => {
  axios
 .get(apLink)
 .then((response) => {
   setData(response.data);
 })
 .catch();

};
  return (
    
    <div>
                    
                    <Adminnavbar />
                    
                
                        <div className="card-body">
                      <Table celled className="table" style={{color:"black"}}>
                      <Table.Header>
                      <Table.Row>
                      <Table.HeaderCell>ID</Table.HeaderCell>
                      <Table.HeaderCell>NAME</Table.HeaderCell>
                      <Table.HeaderCell>EMAIL</Table.HeaderCell>
                      
                      </Table.Row>
                       </Table.Header>
                      <Table.Body>
                        {empData.map((item,key) =>{
                          return(
                            <Table.Row>
                              <Table.Cell>{item.id}</Table.Cell>
                              <Table.Cell>{item.name}</Table.Cell>
                              <Table.Cell>{item.email}</Table.Cell>
                              <Link to='/Update'>
                                <Table.Cell>
                                  <button class="ui basic green button" onclick={() =>setData(item)}>Update</button>
                                </Table.Cell>
                                </Link>

                                <Table.Cell>
                                  <Button color='red' onclick={() =>onDelete(item)}>Delete</Button>
                                </Table.Cell>
                                

                              
                              
                 .           </Table.Row>
                          );
                        })}
                      </Table.Body>
                      </Table>
                    </div>
                    </div>
                
  )
}

export default Admincrud