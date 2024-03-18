import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import lo from "../assets/lo.svg";
import { Link } from "react-router-dom";

const CaseStudyForm1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    phone: "",
    email: "",
    industry: "",
    companyIndustry: "",
    crmEdition: "",
    other: "",
  });

  // Update form data state as the user interacts with inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Log form data to the console
    // Add further logic here to submit the data
  };

  return (
    <Stack width={"100%"}>
      <Stack
        marginTop={"40px"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img width={"170px"} height={"40px"} src={lo} alt="logo" />
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "26px",
            letterSpacing: "0em",
            textAlign: "center",
            marginTop: "20px",
            opacity: 0.6,
          }}
        >
          Customer Story Form
        </Typography>
      </Stack>
      <Stack
        width={{
          xs: "95%",
          sm: "90%",
          md: "750px",
        }}
        margin={"0px auto"}
      >
        <form onSubmit={handleSubmit}>
          <hr
            style={{
              width: "100%",
              marginTop: "40px",
              border: "0.5px solid gray",
              backgroundColor: "gray",
            }}
          />
          <Typography
            width={"100%"}
            margin={"0px auto"}
            sx={{
              fontFamily: "Work Sans",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0em",
              textAlign: "center",
              marginTop: "15px",
              marginBottom: "15px",
              opacity: 0.6,
            }}
          >
            We're thrilled you are submitting your story! Just fill out the form
            below. Most questions are multiple choice and it will take only ten
            minutes. We'll get in touch with you soon. Thanks!
          </Typography>
          <hr
            style={{
              width: "100%",
              border: "0.5px solid gray",
              backgroundColor: "gray",
            }}
          />
          <Stack>
            <Stack gap={3} width={"95%"}>
              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                gap={4}
                margin={"0px auto"}
              >
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <label htmlFor="firstName">First Name*</label>
                  <Stack
                    width={{
                      xs: "275px",
                      sm: "310px",
                      md: "330px",
                    }}
                    height={{
                      xs: "45px",
                      sm: "55px",
                      md: "60px",
                    }}
                  >
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{
                        height: "100%",
                        width: "100%",
                        marginTop: "5px",
                        border: "1px solid #C4C4C4",
                        paddingLeft: "20px",
                        fontSize: "18px",
                      }}
                    />
                  </Stack>
                </Stack>
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <label htmlFor="company">Company*</label>
                  <Stack
                    width={{
                      xs: "275px",
                      sm: "310px",
                      md: "330px",
                    }}
                    height={{
                      xs: "45px",
                      sm: "55px",
                      md: "60px",
                    }}
                  >
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      style={{
                        height: "100%",
                        width: "100%",
                        marginTop: "5px",
                        border: "1px solid #C4C4C4",
                        paddingLeft: "20px",
                        fontSize: "18px",
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                gap={4}
                margin={"0px auto"}
              >
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <label htmlFor="phone">Phone*</label>
                  <Stack
                    width={{
                      xs: "275px",
                      sm: "310px",
                      md: "330px",
                    }}
                    height={{
                      xs: "45px",
                      sm: "55px",
                      md: "60px",
                    }}
                  >
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        height: "100%",
                        width: "100%",
                        marginTop: "5px",
                        border: "1px solid #C4C4C4",
                        paddingLeft: "20px",
                        fontSize: "18px",
                      }}
                    />
                  </Stack>
                </Stack>
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <label htmlFor="email">Email*</label>
                  <Stack
                    width={{
                      xs: "275px",
                      sm: "310px",
                      md: "330px",
                    }}
                    height={{
                      xs: "45px",
                      sm: "55px",
                      md: "60px",
                    }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        height: "100%",
                        width: "100%",
                        marginTop: "5px",
                        border: "1px solid #C4C4C4",
                        paddingLeft: "20px",
                        fontSize: "18px",
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <hr
              style={{
                width: "95%",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />
            <Stack marginTop={"40px"} gap={3}>
              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                gap={2}
                margin={"0px auto"}
              >
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <label htmlFor="industry">Industry</label>
                  <Stack
                    width={{
                      xs: "295px",
                      sm: "320px",
                      md: "350px",
                    }}
                    height={{
                      xs: "45px",
                      sm: "55px",
                      md: "60px",
                    }}
                  >
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      style={{
                        marginTop: "5px",
                        width: "100%",
                        height: "100%",
                        border: "1px solid #C4C4C4",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        fontSize: "18px",
                      }}
                    >
                      <option value="select">Select</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                    </select>
                  </Stack>
                </Stack>
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <label htmlFor="companyIndustry">Company Industry*</label>
                  <Stack
                    width={{
                      xs: "275px",
                      sm: "310px",
                      md: "330px",
                    }}
                    height={{
                      xs: "45px",
                      sm: "55px",
                      md: "60px",
                    }}
                  >
                    <input
                      type="text"
                      name="companyIndustry"
                      value={formData.companyIndustry}
                      onChange={handleChange}
                      style={{
                        height: "100%",
                        width: "100%",
                        marginTop: "5px",
                        border: "1px solid #C4C4C4",
                        paddingLeft: "20px",
                        fontSize: "18px",
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <hr
              style={{
                width: "100%",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />
            <Stack>
              <Typography>Which CRM edition are you on?</Typography>
              <Stack direction="column">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ marginY: "20px" }}
                >
                  <Stack direction="row" gap={2}>
                    <input
                      type="radio"
                      id="free"
                      name="crmEdition"
                      value="Free"
                      onChange={handleChange}
                    />
                    <Typography>
                      <label htmlFor="free">Free</label>
                    </Typography>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <input
                      type="radio"
                      id="professional"
                      name="crmEdition"
                      value="Professional"
                      onChange={handleChange}
                    />
                    <Typography>
                      <label htmlFor="professional">Professional</label>
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ marginY: "20px" }}
                >
                  <Stack direction="row" gap={2}>
                    <input
                      type="radio"
                      id="standard"
                      name="crmEdition"
                      value="Standard"
                      onChange={handleChange}
                    />
                    <Typography>
                      <label htmlFor="standard">Standard</label>
                    </Typography>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <input
                      type="radio"
                      id="enterprise"
                      name="crmEdition"
                      value="Enterprise"
                      onChange={handleChange}
                    />
                    <Typography>
                      <label htmlFor="enterprise">Enterprise</label>
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" gap={2} sx={{ marginY: "20px" }}>
                  <input
                    type="radio"
                    id="crmPlus"
                    name="crmEdition"
                    value="CRM Plus"
                    onChange={handleChange}
                  />
                  <Typography>
                    <label htmlFor="crmPlus">CRM Plus</label>
                  </Typography>
                </Stack>
                <Stack direction="row" gap={2} sx={{ marginY: "20px" }}>
                  <input
                    type="radio"
                    id="other"
                    name="crmEdition"
                    value="Others"
                    onChange={handleChange}
                  />
                  <Typography>
                    <label htmlFor="other">Others (Please specify)</label>
                  </Typography>
                </Stack>
              </Stack>
              <textarea
                style={{
                  width: "230px",
                  height: "80px",
                  marginLeft: "25px",
                  marginTop: "20px",
                  border: "1px solid #C4C4C4",
                  fontSize: "18px",
                  paddingLeft: "10px",
                }}
                name="other"
                value={formData.other}
                onChange={handleChange}
              />
            </Stack>
          </Stack>
          <Stack alignItems={"center"} mb={"40px"}>
            <Link
              to="/CaseStudyForm2"
              onClick={() => window.scrollTo(0, 0)}
              style={{ textDecoration: "none" }}
            >
              <Button
                type="submit"
                style={{
                  width: "140px",
                  height: "40px",
                  backgroundColor: "#F15B25",
                  marginTop: "40px",
                  borderRadius: "0px",
                  alignSelf: "center",
                }}
              >
                <Typography color={"white"}>NEXT</Typography>
              </Button>
            </Link>
          </Stack>
        </form>
        <Stack alignItems={"center"} mb={"40px"}>
          <Typography
            width={"100%"}
            margin={"0px auto"}
            sx={{
              fontFamily: "Work Sans",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0em",
              textAlign: "center",
              marginTop: "15px",
              marginBottom: "15px",
              opacity: 0.6,
            }}
          >
            The information collected through this survey will be used in
            accordance with our Privacy Policy
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CaseStudyForm1;
