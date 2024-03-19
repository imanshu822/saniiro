import { Stack } from "@mui/material";
import React from "react";
import QuoteCard from "./QuoteCard";
import TweetCard from "./TweetCard";
const ContentSection = () => {
  return (
    <Stack
      width={{
        xs: "95%",
        sm: "90%",
        md: "85%",
        lg: "80%",
      }}
      margin={"0 auto"}
      direction={{
        xs: "column",
        md: "row",
      }}
    >
      <Stack
        width={{
          md: "50%",
        }}
      >
        <QuoteCard />
        <TweetCard />
      </Stack>
      <Stack
        width={{
          md: "50%",
        }}
      >
        <TweetCard />
        <QuoteCard />
      </Stack>
    </Stack>
  );
};

export default ContentSection;
