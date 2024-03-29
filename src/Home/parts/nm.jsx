import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "./nm.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Stack } from "@mui/material";
const PhoneNumberInput = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value, country) => {
    // Update the state with the selected phone number and country code
    setPhone(value);
  };

  return (
    <Stack
      style={{ position: "relative" }}
      sx={{
        width: {
          xs: "220px",
          sm: "300px",
          md: "480px",
          lg: "385px",
          xl: "480px",
        },
        height: {
          xs: "45px",
          sm: "55px",
          md: "67px",
          lg: "57px",
          xl: "67px",
        },
      }}
      margin={"0 auto"}
    >
      <PhoneInput
        country={"+91"} // Default country code for India (+91)
        value={phone}
        placeholder="Phone Number"
        onChange={handlePhoneChange}
        inputProps={{
          name: "phone",
          id: "phoneInput",
        }}
      />
      <PhoneAndroidIcon
        style={{
          position: "absolute",
          top: "50%",
          right: "8px",
          transform: "translateY(-50%)",
          color: "#AAAAAA",
          fontSize: "40px",
        }}
      />
    </Stack>
  );
};

export default PhoneNumberInput;
