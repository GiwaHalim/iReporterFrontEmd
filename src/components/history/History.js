import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';


const History = ({user}) => {

    const[report, setReport] = useState([])

    const isUserUndefined = user

    useEffect(() => {
        if (user === undefined) return;
  
        axios
        .get(`http://localhost:3005/api/report/${user}`)
        .then( res => {
            setReport(res.data)
        })
        .catch((err) => {
             console.log(err)
        });
    }, [isUserUndefined])

    console.log(user)



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