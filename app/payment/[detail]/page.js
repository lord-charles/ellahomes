"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import PaymentSummary from "../payment-summary";
import PaymentMethods from "../payment-methods";
import PaymentBillingAddress from "../payment-billing-address";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import axios from "axios";
import { base_url } from "@/utils/baseUrl";

const Payment = ({ params }) => {
  const { detail } = params;
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [cards, setCards] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [method, setMethod] = useState("Mpesa");
  const [selectedCard, setSelectedCard] = useState(null);

  console.log("card", selectedCard);
  console.log("phone", phoneNumber);

  const getCards = async (id) => {
    try {
      const res = await axios.get(`${base_url}cards/${id}`);
      setCards(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const decodedToken = jwtDecode(token);
      setAuthenticated(true);
      setUserData(decodedToken);
      getCards(decodedToken.userId);
    } else {
      console.log("Token not found in cookie");
    }
  }, []);
  return (
    <Container
      sx={{
        pt: 15,
        pb: 10,
        minHeight: 1,
      }}
    >
      <Typography variant="h3" align="center" sx={{ mb: 2 }}>
        {`Let's finish powering you up!`}
      </Typography>

      <Typography
        align="center"
        sx={{ color: "text.secondary", mb: 5 }}
        className="font-bold"
      >
        EllaHomes, STAY.RELAX.REPEAT.
      </Typography>

      <Grid
        container
        rowSpacing={{ xs: 5, md: 0 }}
        columnSpacing={{ xs: 0, md: 5 }}
      >
        <Grid xs={12} md={8}>
          <Box
            gap={5}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            sx={{
              p: { md: 5 },
              borderRadius: 2,
              border: (theme) => ({
                md: `dashed 1px ${theme.palette.divider}`,
              }),
            }}
          >
            <PaymentBillingAddress userData={userData} />

            <PaymentMethods
              userData={userData}
              cards={cards}
              getCards={getCards}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              method={method}
              setMethod={setMethod}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          </Box>
        </Grid>

        <Grid xs={12} md={4}>
          <PaymentSummary />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Payment;
