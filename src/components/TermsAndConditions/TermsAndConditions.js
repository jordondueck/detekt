import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const TermsAndConditions = ({ setViewTerms }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setViewTerms(false);
    setShow(false);
  }
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3 style={{lineHeight: "1rem"}}>Introduction</h3>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>The Terms and Conditions written on this webpage shall manage your use of our website, detekt accessible at <a href="https://jordondueck.github.io/detekt/">https://jordondueck.github.io/detekt/</a>.</p>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. 
          You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p>

        <h3 style={{lineHeight: "1rem", marginTop: "1.5rem"}}>Intellectual Property Rights</h3>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>Other than the content you own and/or the image you load/scan, under these Terms, JNDK and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>You are granted limited license only for purposes of viewing the material contained on this Website.</p>

        <h3 style={{lineHeight: "1rem", marginTop: "1.5rem"}}>Restrictions</h3>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>You are specifically restricted from all of the following:</p>

          <ul style={{listStyle: "disc", paddingLeft: "2rem"}}>
            <li>publishing any Website material in any other media;</li>
            <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
            <li>publicly performing and/or showing any Website material;</li>
            <li>using this Website in any way that is or may be damaging to this Website;</li>
            <li>using this Website in any way that impacts user access to this Website;</li>
            <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
            <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
            <li>using this Website to engage in any advertising or marketing.</li>
          </ul>

        <h3 style={{lineHeight: "1rem", marginTop: "1.5rem"}}>No Warranties</h3>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>This Website is provided "as is," with all faults, and JNDK expresses no representations or warranties, of any kind, related to this Website or the materials contained on this Website. 
          Also, nothing contained on this Website shall be interpreted as advising you.</p>

        <h3 style={{lineHeight: "1rem", marginTop: "1.5rem"}}>Limitation of Liability</h3>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>In no event shall JNDK, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. 
          JNDK, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>

        <h3 style={{lineHeight: "1rem", marginTop: "1.5rem"}}>Indemnification</h3>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>You hereby indemnify to the fullest extent JNDK from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>
          
        <h3 style={{lineHeight: "1rem", marginTop: "1.5rem"}}>Severability</h3>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>

        <h3 style={{lineHeight: "1rem", marginTop: "1.5rem"}}>Variation of Terms</h3>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>JNDK is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p>

        <h3 style={{lineHeight: "1rem", marginTop: "1.5rem"}}>Entire Agreement</h3>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>These Terms constitute the entire agreement between JNDK and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p>

        <h3 style={{lineHeight: "1rem", marginTop: "1.5rem"}}>Governing Law & Jurisdiction</h3>

          <p style={{lineHeight: "1.5rem", marginTop: "1rem"}}>These Terms will be governed by and interpreted in accordance with the laws of the British Columbia, Canada, and you submit to the non-exclusive jurisdiction of the provincial and federal courts located in Canada for the resolution of any disputes.</p>
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
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

export default TermsAndConditions