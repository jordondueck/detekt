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
  handleButtonReset,
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
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ isSubmitting, handleReset }) => (
        <Form className="form form--wide">
          <div className="form__content">
            <h2>Facial Recognition System</h2>
            <div className="form__inner">
              <FormGroup
                className="form-group--wide form-group--inline"
                controlId="imageurl"
              >
                {inputUrl === "" ? (
                  <div className="input_container form-control">
                    <Field name="imageUrl">
                      {({ field, meta }) => (
                        <FormControl
                          {...field}
                          className={
                            meta.error && meta.touched
                              ? "input--error form-control--clear"
                              : "form-control--clear"
                          }
                          type="text"
                          placeholder="https://example.com/images/example.jpg"
                        />
                      )}
                    </Field>
                  </div>
                ) : (
                  <div className="input_container input_container--grey form-control">
                    <Field name="imageUrl input_input">
                      {({ field, meta }) => (
                        <FormControl
                          {...field}
                          className={
                            meta.error && meta.touched
                              ? "input--error form-control--clear pr--75"
                              : "form-control--clear pr--75"
                          }
                          type="text"
                          placeholder="https://example.com/images/example.jpg"
                          readOnly
                        />
                      )}
                    </Field>
                    <i
                      className="fa fa-undo button--undo"
                      aria-hidden="true"
                      onClick={handleReset}
                    ></i>
                  </div>
                )}
                <div className="error__wrapper">
                  <ErrorMessage
                    className="error"
                    name="imageUrl"
                    component="span"
                  />
                </div>
              </FormGroup>
              {detectSelected ? (
                <Button
                  className="button--ml button--no-outline"
                  variant="danger"
                  type="reset"
                >
                  Clear
                </Button>
              ) : (
                <Button
                  className="button--ml button--no-outline"
                  variant={inputUrl === "" ? "primary" : "success"}
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
  );
};

export default ImageLinkForm;
