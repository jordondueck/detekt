import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ImageUrlSchema } from "../ValidateForm/ValidateForm";
import { Button, FormControl, FormGroup } from "react-bootstrap";
import "./ImageLinkForm.css";

const ImageLinkForm = ({
  handleInputChange,
  handleButtonSubmit,
  inputUrl,
  detectSelected,
  handleButtonReset
}) => {
  return (
    <Formik
      initialValues={{ imageUrl: "" }}
      validationSchema={ImageUrlSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        inputUrl === ""
          ? handleInputChange(values.imageUrl)
          : handleButtonSubmit(values.imageUrl);
      }}
      onReset={(values, { setSubmitting, resetForm }) => {
        handleInputChange(values.imageUrl);
        handleButtonReset();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form form--wide">
          <div className="form__content">
            <h2>Facial Recognition System</h2>
            <div className="form__inner">
            <FormGroup
              className="form-group--wide form-group--inline"
              controlId="imageurl"
            >
              <Field name="imageUrl">
                {({ field, meta }) => (
                  <FormControl
                    {...field}
                    className={meta.error && meta.touched ? "input--error" : ""}
                    type="text"
                    placeholder="https://example.com/images/example.jpg"
                  />
                )}
              </Field>
              <div className="error__wrapper">
              <ErrorMessage className="error" name="imageUrl" component="span" />
              </div>
              </FormGroup>
              {detectSelected ? (
                <Button
                  className="button--ml button--no-outline"
                  variant="outline-dark"
                  type="reset"
                >
                  Clear
                </Button>
              ) : (
                <Button
                  className="button--ml button--no-outline"
                  variant="outline-dark"
                  type="submit"
                >
                  {inputUrl === "" ? "Load" : "Detect"}
                </Button>
              )}
              </div>
            
          </div>
        </Form>
      )}
    </Formik>

    // <form className="form form--wide">
    //   <div className="form__content">
    //   <h2>{"Facial Recognition System"}</h2>
    //     <FormGroup
    //       className="form-group--wide form-group--inline form-group--no-msg"
    //       controlId="imageurl"
    //     >
    //       <FormControl
    //         type="text"
    //         placeholder="https://example.com/images/example.jpg"
    //         onChange={handleInputChange}
    //       />
    //       <Button
    //         className="button--ml button--no-outline"
    //         variant="outline-dark"
    //         onClick={handleButtonSubmit}
    //       >
    //         {"Detect"}
    //       </Button>
    //     </FormGroup>
    //   </div>
    // </form>
  );
};

export default ImageLinkForm;
