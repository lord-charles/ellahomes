"use client";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import { _bookings } from "../_mock";
import BookingDetails from "../components/booking/booking-details";

export default function OverviewBookingView() {
  return (
    <Container className="h-fit">
      <Grid xs={12}>
        <BookingDetails
          title="Booking Details"
          tableData={_bookings}
          tableLabels={[
            { id: "destination", label: "Destination" },
            { id: "customer", label: "Customer" },
            { id: "checkIn", label: "Check In" },
            { id: "checkOut", label: "Check Out" },
            { id: "status", label: "Status" },
          ]}
        />
      </Grid>
    </Container>
  );
}
