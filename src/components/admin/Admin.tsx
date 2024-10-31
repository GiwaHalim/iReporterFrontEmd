import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";

const Admin = () => {

    // interface Report{
    //   _id: string,
    //   status: string,
    //   date: string,
    //   type: string
    //   title: string
    // }

    // const[report, setReport] = useState <Report[] | []>([])

    // useEffect(() => {
    //     axios
    //     .get("https://ireporterbackend.onrender.com/api/report")
    //     .then( res => {
    //         setReport(res.data)
    //     })
    //     .catch((err) => {
    //          console.log(err)
    //     });
    // }, [])

    // const onResolved = (e: any, id: string) => {
    //     e.preventDefault();
        

    //     const resolvedReport = report.find(item => item._id === id);

    //     console.log(e.target.value)
    //     if (resolvedReport){
    //       resolvedReport.status = e.target.value
    //     }
        
    //     axios
    //     .put(`https://ireporterbackend.onrender.com/api/report/${id}`, resolvedReport)
    //     .then( res => {
    //         console.log(res)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }

    return ( 
        // <Table striped bordered hover>
        //   <thead>
        //     <tr>
        //       <th>Num</th>
        //       <th>Date</th>
        //       <th>Title</th>
        //       <th>Type</th>
        //       <th>Status</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {report.map( data  =>{ return(
        //         <tr key={data._id}>
        //             {/* <td>{report.indexOf(data) +1}</td> */}
        //             <td>{data.date.slice(0, 10)}</td>
        //             <td>{data.title}</td>
        //             <td>{data.type}</td>
        //             <td >{data.status}</td>
        //             <td><Button onClick={(e) => onResolved(e, data._id)} value="Investigating">Investigating</Button></td>
        //             <td><Button onClick={(e) => onResolved(e, data._id)} value="Rejected">rejected</Button></td>
        //             <td><Button onClick={(e) => onResolved(e, data._id)} value="Resolved">resolved</Button></td>
        //         </tr>
        //     )
        //     }
        //     )}
        //   </tbody>
        // </Table>
        null
     );
}
 
export default Admin;