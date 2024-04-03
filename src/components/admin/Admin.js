import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";

const Admin = () => {

    const[report, setReport] = useState([])

    useEffect(() => {
        axios
        .get("http://localhost:3005/api/report")
        .then( res => {
            setReport(res.data)
        })
        .catch((err) => {
             console.log(err)
        });
    }, [])

    const onResolved = (e, id) => {
        e.preventDefault();

        const resolvedReport = report.find(item => item._id === id);
        
        resolvedReport.status = "resolved"
        
        axios
        .put(`http://localhost:3005/api/report/${id}`, resolvedReport)
        .then( res => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })

        // console.log(resolvedReport)
    }

    return ( 
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
                    <td >{data.status}</td>
                    <td><Button onClick={(e) => onResolved(e, data._id)}>resolved</Button></td>
                </tr>
            )
            }
            )}
          </tbody>
        </Table>
     );
}
 
export default Admin;