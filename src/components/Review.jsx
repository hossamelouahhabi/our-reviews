import {
  Avatar,
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import reviews from "../Data";
import { useState } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];


  const prevPerson = () => {
    const newIndex = index - 1;

      if (newIndex < 0) {
        setIndex(reviews.length - 1);
      } else {
        setIndex(newIndex);
      }

  };

  const nextPerson = () => {
    const newIndex = index + 1;

      if (newIndex > reviews.length - 1) {
        setIndex(0);
      }else {
        setIndex(newIndex);
      }

  };

  const randomPerson = () => {
    const randomPerson = Math.floor(Math.random() * reviews.length);
    
      if (randomPerson === index) {
        setIndex(index + 1);
      }
      if (randomPerson > reviews.length - 1) {
        setIndex(0);
      }
      if (randomPerson < 0) {
        setIndex(reviews.length - 1) ;
      }else{
        setIndex(randomPerson)
      }
    

  };

  return (
    <Card
      sx={{
        mt: 3,
        borderRadius: "10px",
        boxShadow: "10px 5px 7px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <Badge
          badgeContent={
            <FormatQuoteIcon
              sx={{
                position: "absolute",
                marginRight: "17rem",
                marginTop: "3rem",
                background: "hsl(205, 78%, 60%)",
                width: "40px",
                height: "40px",
                color: "white",
                borderRadius: "50%",
              }}
            />
          }
        >
          <Avatar
            sx={{
              width: 150,
              height: 150,
              marginLeft: "auto",
              mb: 1,
              boxShadow: "5px -5px 0px 4px hsla(205, 78%, 60%, 1)",
            }}
            alt="Travis Howard"
            src={image}
          />
        </Badge>
        <Typography
          sx={{ fontWeight: "800" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography
          sx={{
            mt: "-10px",
            color: "hsl(205, 78%, 60%)",
            textTransform: "uppercase",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {job}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mt: "-20px",
        }}
      >
        <div>
          <IconButton sx={{ color: "hsl(205, 78%, 60%)" }} onClick={prevPerson}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton sx={{ color: "hsl(205, 78%, 60%)" }} onClick={nextPerson}>
            <ArrowForwardIosSharpIcon />
          </IconButton>
        </div>

        <Button
          sx={{ color: "hsl(205, 78%, 60%)", mb: 1, mt: 1 }}
          variant="outlined"
          onClick={randomPerson}
        >
          Random Review
        </Button>
      </CardActions>
    </Card>
  );
}
