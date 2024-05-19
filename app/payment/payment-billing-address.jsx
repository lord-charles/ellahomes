import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// ** Third Party Import
import DatePicker from "react-datepicker";

// ** Third Party Styles Imports
import "react-datepicker/dist/react-datepicker.css";

// ** Styled Components
import DatePickerWrapper from "../../utils/react-datepicker/index";
import { forwardRef, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
// ----------------------------------------------------------------------

export default function PaymentBillingAddress({ userData }) {
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);

  const CustomInput = forwardRef(function CustomInput(props, ref) {
    return <TextField inputRef={ref} label="Check-in Time" {...props} />;
  });
  CustomInput.displayName = "CustomInput";

  const CustomInput2 = forwardRef(function CustomInput2(props, ref) {
    return <TextField inputRef={ref} label="Check-out Time" {...props} />;
  });
  CustomInput2.displayName = "CustomInput2";

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
              onChange={(date) => setDate(date)}
            />
          </DatePickerWrapper>

          <DatePickerWrapper>
            <DatePicker
              selected={date2}
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
