import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Creator = ({title, text, instruction, variant, type, user}) => {
  const navigate = useNavigate()


  const onCreatorClick = () =>{
      if(!user){
        navigate('/signin')
      }
      else{
        type === "red-flag" ? navigate('/redflag', {replace: true}) : navigate('/intervention', {replace: true});
      }
  }
    return (
        <div className="d-flex">
      <Card style={{ width: '18rem', minHeight:'200px'}}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary" onClick={onCreatorClick}>{instruction}</Button>
        </Card.Body>
      </Card>
      </div>
    );
}
 
export default Creator;