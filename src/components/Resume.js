import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import resume from "../Images/resume.png";

function Resume() {
  return (
    <Accordion>
      <Accordion.Header>Resume</Accordion.Header>
      <Accordion.Body>
        <Card>
          <img src={resume} alt="resume" />
          {/* <a href="https://docs.google.com/document/d/1CntHk6mmpYx8pr4L2TeZHbAdNhx9ARKIUIy34qvt_rs/edit?usp=sharing"></a> */}
        </Card>
      </Accordion.Body>
    </Accordion>
  );
}

export default Resume;
