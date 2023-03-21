import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <Accordion>
      <Accordion.Header>Resume</Accordion.Header>
      <Accordion.Body>
        <Card>
          <img src="/Images/resume.png" alt="resume" />
        </Card>
      </Accordion.Body>
    </Accordion>
  );
}

export default BasicExample;
