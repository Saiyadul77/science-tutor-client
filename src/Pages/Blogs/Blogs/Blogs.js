import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Qusetion 1:  Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        Answer: <br />
                        Authorization: <br />
                        1. Authorization is the process of verifying what specific applicants, files and data a user has access to. <br />
                        2. Determines what users can and cannot access. <br />
                        3. Verifies whether access is allowed through policies and rules. <br />
                        4. Usually done after successful authentication. <br />
                        5. Generally, transmits info through an access token. <br />
                        6. Authorization is done after authentication

                        <br /> <br />
                        Authentication: <br />
                        1. Authentication is the process of verifying who someone is. <br />
                        2. Determines whether users are who they claim to be. <br />
                        3. Challenges the user to validate credentials. <br />
                        4. Usually done before authorization. <br />
                        5. Generally, transmits info through an ID token. <br />
                        6. Authentication factor can vary from one of the following: Single- factor authentication, two- factor authentication and multi-factor authentication
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Qusetion 2: Why are you using Firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Answer: <br /> We are using firebase. Because firebase manages all data real-time in the database. It is used for many purposes that can help my apps to develop, grow and make it a quality app. It can be used when I do not want to spend a lot of time developing my own backend. It can be used for rapid development. <br /><br />
                        The other options that I have to implement authentication are.... <br />
                        1. Password-based authentication, passwords are the most common methods of authentication. <br />
                        2. Multi-factor authentication <br />
                        3. Certificate-based authentication <br />
                        4. Biometric authentication <br />
                        5. Token-based authentication
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Qusetion 3: What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        Answer: <br /> There are many services which firebase provides. Most useful of them are... <br />
                        1. Cloud firestore. <br />
                        2. Cloud Functions <br />
                        3. Authentication <br />
                        4. Hosting <br />
                        5. Cloud Storage <br />
                        6. Google Analytics <br />
                        7. Predictions <br />
                        8. Cloud Messaging <br />
                        9. Dynamic links <br />
                        10. Remote Config
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;