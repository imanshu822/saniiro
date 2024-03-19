import { Stack, Typography } from "@mui/material";
import React from "react";

const QuoteCard = () => {
  return (
    <Stack>
      <Stack
        width={{
          xs: "95%",
          sm: "90%",
          md: "85%",
          lg: "80%",
        }}
        border={"2px solid #E5E5E5"}
      >
        <Typography>
          Training was simple/smooth and the trainer really knows the product.
          He was able to answer all questions I had.
        </Typography>
        <hr
          style={{
            width: "100%",
            heigh: "1px",
          }}
        />

        <Typography>David Fauser,</Typography>
        <Typography>Director of Sales, CIMCO Refrigeration</Typography>
      </Stack>
    </Stack>
  );
};

export default QuoteCard;
