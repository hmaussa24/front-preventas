
import { Spinner } from "react-bootstrap";
const SpinerComponent = () => {
  return (
    <div className="modal-backdrop spiner" >
      <Spinner style={{zIndex: 1000}} animation="border" variant="dark" />
    </div>
  );
};

export default SpinerComponent;
