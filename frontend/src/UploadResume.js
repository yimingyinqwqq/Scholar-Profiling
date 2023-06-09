import React, { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, InputGroup, Form, Dropdown } from 'react-bootstrap';

const UploadResume = () => {
    const hiddenFileInput = useRef(null);
    const [fileUploaded, setfileUploaded] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [resumeInfo, setResumeInfo] = useState(null);

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const handleUploadResume = (e) => {
        e.preventDefault();

        setfileUploaded(e.target.files[0]);

        if (e.target.files[0]) {
            setShowForm(true);

            const formData = new FormData();
            formData.append("resume", e.target.files[0]);

            fetch('/scan', {
                method: 'POST',
                mode: 'cors',
                body: formData
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }

                    return response.json();
                })
                .then(data => {
                    console.log("resume info is ", data);
                    setResumeInfo(data);
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    return (
        <div className="upload-container">
            <Button onClick={handleClick}> Upload Your Resume </Button>

            <input
                type="file"
                // accept="image/*"            /* only images can be uploaded */
                ref={hiddenFileInput}
                onChange={handleUploadResume}
                style={{ display: 'none' }}   /* do not display the input file */
            />

            <br />


            {resumeInfo &&
                <InputGroup className="mb-3 input-group-custom">
                    <InputGroup.Text id="basic-addon1"> Edit </InputGroup.Text>
                    <Form.Control
                        as="textarea"
                        style={{maxWidth: "80%", height: "20rem" }}
                        defaultValue={resumeInfo['receipt_text']}
                        aria-label="Resume"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            }

        </div>
    );
};

export default UploadResume;
