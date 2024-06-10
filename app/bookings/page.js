"use client";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import { _bookings } from "../_mock";
import BookingDetails from "../components/booking/booking-details";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import axios from "axios";
import { base_url } from "@/utils/baseUrl";

export default function OverviewBookingView() {
  const [data, setData] = useState([]);

  const getBookings = async (userData) => {
    try {
      const res = await axios.post(`${base_url}book/get`, {
        userId: userData?.userId,
      });
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const decodedToken = jwtDecode(token);
      getBookings(decodedToken);
    } else {
      console.log("Token not found in cookie");
    }
  }, []);

  return (
    <Container className="h-fit">
      <Grid xs={12}>
        <BookingDetails
          title="Booking Details"
          tableData={data}
          tableLabels={[
            { id: "destination", label: "Destination" },
            { id: "customer", label: "Customer" },
            { id: "checkIn", label: "Check In" },
            { id: "checkOut", label: "Check Out" },
            { id: "Amount", label: "Amount" },
            { id: "status", label: "Status" },
          ]}
        />
      </Grid>
    </Container>
  );
}
