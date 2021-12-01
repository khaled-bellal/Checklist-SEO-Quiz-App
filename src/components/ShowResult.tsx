import React from "react";

import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const TextFieldStyled = styled(TextField)({
  width: "calc(min(500px, 95vw))",
  input: {
    height: "5em",
  },
  "*, *:hover": {
    color: "white !important",
    borderColor: "white !important",
  },
});

const ShowResult: React.FC<{
  answers: any;
  numberOfAllOptions: number;
}> = ({ answers, numberOfAllOptions }) => {
  const [loading, setLoading] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(true);

  const handleSendCRO = (e?: any) => {
    e && e.preventDefault();
    setLoading(true);
  };
  return !emailSent ? (
    <h2>
      <div>
        <h2>
          Your score:{" "}
          {`${(
            (answers.flat().filter((x: boolean) => x !== true).length * 100) /
            numberOfAllOptions
          ).toFixed(0)}% 🚀`}
          {/* star system here */}
        </h2>
        <br />
        Thanks for using the Rocket CRO tool <br />
        Enter your email to get the Audit + Results + List of action items
        <br />
      </div>
      <form className='form_cta' onSubmit={handleSendCRO}>
        <TextFieldStyled id='outlined-name' label='Name' variant='outlined' />
        <TextFieldStyled
          id='outlined-business-url'
          type='url'
          required={false}
          label='Business URL'
          variant='outlined'
        />
        <TextFieldStyled
          type='email'
          id='outlined-email'
          label='Work Email'
          variant='outlined'
        />

        <Button type='submit' disabled={loading} variant='contained'>
          Send Me!
        </Button>
      </form>
    </h2>
  ) : (
    <>
      <h2>
        <div>
          <h2>Go check your email 🚀 </h2>
          * we sent you score along with detailed guidelines and instructions on
          how to optimise your page Read through the CRO audit, and send it to
          your team <br />* Use the instructions and guidelines to optimise your
          page for maximum conversions
        </div>

        <h3
          style={{
            textAlign: "center",
            lineHeight: 1.6,
            marginTop: "1em",
            borderTop: "1px solid currentColor",
            paddingTop: ".5em",
          }}>
          Do you know anyone how could benefit from this CRO Audit tool? just
          click below to send them this link
        </h3>
        <Button
          variant='contained'
          sx={{
            width: "90vw",
            marginInline: "auto",
            maxWidth: "300px",
          }}>
          Share
        </Button>
      </h2>
    </>
  );
};

export default ShowResult;