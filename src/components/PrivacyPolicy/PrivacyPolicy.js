import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { withStyles, Button } from '@material-ui/core';

const styles = () => ({
  button: {
    padding: 0
  }
});

const PrivacyPolicy = ({ classes, handleViewTerms, setViewPrivacy }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setViewPrivacy(false);
    setShow(false);
  }
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p style={{lineHeight: "1.5rem"}}>JNDK operates the detekt website, which provides the SERVICE.</p>

        <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the detekt website.</p>

        <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. 
          We will not use or share your information with anyone except as described in this Privacy Policy.</p>

        <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>The terms used in this Privacy Policy have the same meanings as in our <Button className={classes.button} color="default" onClick={handleViewTerms}>Terms and Conditions</Button>, unless otherwise defined in this Privacy Policy.</p>

        <h3 style={{lineHeight: "1rem", marginTop: "1.5rem"}}>Information Collection and Use</h3>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name and email address.</p>

        <h3 style={{lineHeight: "1rem", marginTop: "1.5rem"}}>Security</h3>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. 
            But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

        <h3 style={{lineHeight: "1rem", marginTop: "1.5rem"}}>Changes to This Privacy Policy</h3>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. 
            These changes are effective immediately, after they are posted on this page.</p>
</Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default withStyles(styles)(PrivacyPolicy);