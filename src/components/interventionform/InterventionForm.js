import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
import Joi from "joi";
import { toast } from "react-toastify";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";


const InterVentionForm = ({user}) => {

    const[report, setReport] = useState({
        title: "",
        description: "",
    })

   const onTitleChange = (e) => {
        let value = ''
        let reportClone = {...report}

        value = e.target.value

        reportClone.title = value
        setReport(reportClone)

    }

    const onDescriptionChange = (e) => {
        let value = ''
        let reportClone = {...report}

        value = e.target.value

        reportClone.description = value
        setReport(reportClone)

    }

    const onReportSubmit = async (e) => {
        e.preventDefault()
        const validationSchema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
          })
         const result = validationSchema.validate({
            title: report.title,
            description: report.description,
          })

        if(result.error) return toast.error(result.error.message) 

        try{
            await axios.post('https://ireporterbackend.onrender.com/api/report', {...report, type:"Intervention", userId: user})
            .then(res => {
                toast.success('submitted')
                setReport(
                    {
                        title: "",
                        description: "",
                    }
                )
            })
        }catch (err){
            toast.error('Encounterd an error')
        }



    }
    return ( 
        <>
        <h1>Intervention</h1>
        <Form>
            <Form.Group className="mb-5">
                <Form.Label>Title</Form.Label>
                <Form.Control value={report.title} onChange={onTitleChange}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Give details of what happened</Form.Label>
                <Form.Control as="textarea" rows={3} value={report.description} onChange={onDescriptionChange}/>
            </Form.Group>
           
            <Button variant="primary" type="submit" onClick={onReportSubmit}>
                Submit
            </Button>
        </Form>
      
      </>
     );
}
 
export default InterVentionForm;