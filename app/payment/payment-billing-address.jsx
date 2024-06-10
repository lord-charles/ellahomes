import React, { useState, useEffect, forwardRef } from "react";
import { Stack, TextField, Typography, Grid } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerWrapper from "../../utils/react-datepicker/index";
import { startOfDay } from "date-fns";

export default function PaymentBillingAddress({
  userData,
  days,
  setDays,
  date,
  setDate,
  date2,
  setDate2,
  bookedDates, // Pass booked dates as a prop
}) {
  const now = new Date(); // Get the current date and time
  const startOfDayTime = startOfDay(new Date());
  const CustomInput = forwardRef(function CustomInput(props, ref) {
    return <TextField inputRef={ref} label="Check-in Time" {...props} />;
  });
  CustomInput.displayName = "CustomInput";

  const CustomInput2 = forwardRef(function CustomInput2(props, ref) {
    return <TextField inputRef={ref} label="Check-out Time" {...props} />;
  });
  CustomInput2.displayName = "CustomInput2";

  useEffect(() => {
    if (date && date2) {
      const diffTime = date2.getTime() - date.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays > 0 ? diffDays : 1);
    }
  }, [date, date2]);

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999); // Set max time to end of the day

  // Convert booked dates to Date objects and generate array of all booked dates
  const allBookedDates = bookedDates.flatMap(
    ({ checkinDate, checkoutDate }) => {
      const dates = [];
      let currentDate = new Date(checkinDate);
      const endDate = new Date(checkoutDate);

      while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      return dates;
    }
  );

  return (
    <div>
      <Typography variant="h6">Billing Details</Typography>

      <Stack spacing={3} mt={5}>
        <Grid item xs={12} sm={6} className="py-[20px] gap-x-1 flex">
          <DatePickerWrapper>
            <DatePicker
              selected={date}
              showYearDropdown
              showMonthDropdown
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="MM-dd-yyyy h:mm aa"
              id="account-settings-date"
              placeholderText="MM-DD-YYYY hh:mm AM/PM"
              customInput={<CustomInput />}
              onChange={(date) => {
                setDate(date);
                setDate2(null);
              }}
              minDate={now}
              minTime={now}
              maxTime={endOfDay}
              filterTime={(time) => date || time.getTime() >= now.getTime()}
              excludeDates={allBookedDates}
            />
          </DatePickerWrapper>

          <DatePickerWrapper>
            <DatePicker
              selected={date2}
              minDate={date || now}
              showYearDropdown
              showMonthDropdown
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="MM-dd-yyyy h:mm aa"
              id="account-settings-date"
              placeholderText="MM-DD-YYYY hh:mm AM/PM"
              customInput={<CustomInput2 />}
              onChange={(date) => setDate2(date)}
              minTime={startOfDayTime}
              maxTime={endOfDay}
              filterTime={(time) => !date || time.getTime() > date.getTime()}
              excludeDates={allBookedDates}
            />
          </DatePickerWrapper>
        </Grid>
        <TextField
          fullWidth
          label={`${userData?.firstname} ${userData?.lastname}`}
          disabled
        />
        <TextField fullWidth label={userData?.mobile} disabled />
        <TextField fullWidth label={userData?.email} disabled />
      </Stack>
    </div>
  );
}
