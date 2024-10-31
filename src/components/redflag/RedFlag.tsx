import Creator from "../creator tags/Creator";



const RedFlag = ({user}) => {
    
    return ( 
        <Creator
            title="Red Flag"
            text="Is There a corruption in your area "
            instruction="Create a complaint"
            user={user}
            type="red-flag"
        />
     );
}
 
export default RedFlag;