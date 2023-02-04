import React from 'react'
import Navbar from './Navbar'
import { useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import {Table,Button} from 'semantic-ui-react';

const Read = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/employeelist`)
            .then((response) => {
              console.log(response.data)
                setAPIData(response.data);
                
            })
       
  }, [])

  const setData = (data) => {
      let { id, name, location, position, salary} = data;
      localStorage.setItem('ID', id);
      localStorage.setItem('Name', name);
      localStorage.setItem('Location', location);
      localStorage.setItem('Position', position);
      localStorage.setItem('Salary', salary);
    
    }
    const onDelete = (_id) => {
      axios.delete(`http://localhost:3000/api/employeelist/${_id}`)
      .then(() => {
          getData();
      })
    }
    const getData = () => {
      axios.get("http://localhost:3000/api/employeelist")
          .then((getData) => {
               setAPIData(getData.data);
           })
    }




  return (
    <div>
                    
    <Navbar/>
    

        <div className="card-body">
      <Table celled className="table" style={{color:"black"}}>
      <Table.Header>
      <Table.Row>
      <Table.HeaderCell>ID</Table.HeaderCell>
      <Table.HeaderCell>NAME</Table.HeaderCell>
      <Table.HeaderCell>EMAIL</Table.HeaderCell>
      <Table.HeaderCell>Designation</Table.HeaderCell>
      <Table.HeaderCell>Location</Table.HeaderCell>
      <Table.HeaderCell>Salary</Table.HeaderCell>
      
      </Table.Row>
       </Table.Header>
      <Table.Body>
        {APIData.map((data) =>{
          return(
            <Table.Row>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.email}</Table.Cell>
              <Table.Cell>{data.position}</Table.Cell>
              <Table.Cell>{data.location}</Table.Cell>
              <Table.Cell>{data.salary}</Table.Cell>
              
 .           </Table.Row>
          );
        })}
      </Table.Body>
      </Table>
    </div>
    </div>

  );
}

export default Read