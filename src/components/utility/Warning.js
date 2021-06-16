const Warning = ({message, color}) => {

    return ( 
        <div className= {`bg-${color}`}>
            {message}
        </div>
     );
}
 
export default Warning;