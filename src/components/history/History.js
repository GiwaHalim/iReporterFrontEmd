import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';


const History = ({user}) => {

    const[report, setReport] = useState([])

    const isUserUndefined = user

    useEffect(() => {
        if (user === undefined) return;
  
        axios
        .get(`https://ireporterbackend.onrender.com/api/report/${user}`)
        .then( res => {
            setReport(res.data)
        })
        .catch((err) => {
             console.log(err)
        });
    }, [isUserUndefined])


    const handleDelete = async (e, id) => {
      e.preventDefault();

      try {
        await axios.delete(`https://ireporterbackend.onrender.com/api/report/${id}`)
        .then( res => {
          const newReport = [...report];
  
            setReport(newReport.filter( del => del._id !== res.data._id))
            // console.log(res)
        }
        )} catch (error) {
        toast.error('Error deleting document')
        console.error('Error deleting document:', error);
      }
    };



    return(
        <>
        {report.length === 0 ? <h1>You've created no report</h1> :
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Num</th>
              <th>Date</th>
              <th>Title</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {report.map( data  =>{ return(
              <tr key={data._id}>
                    <td>{report.indexOf(data) +1}</td>
                    <td>{data.date.slice(0, 10)}</td>
                    <td>{data.title}</td>
                    <td>{data.type}</td>
                    <td>{data.status}</td>
                    <td><Button disabled={data.status === "pending"}  onClick={ (e) => handleDelete(e, data._id) }>Delete</Button></td>
                </tr>
            )
          }
          )}
          </tbody>
        </Table>
        }
          </>
        )
    }
    
    export default History;