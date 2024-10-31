import Creator from "../creator tags/Creator";

const Intervention = ({user}) => {
    return ( 
        <Creator
            title="Intervention"
            text="Is There anything you want the government to know ?"
            instruction="Let us Know"
            user={user}
            type="intervention"
            
        />
     );
}
 
export default Intervention;