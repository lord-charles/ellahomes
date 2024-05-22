import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import Label from "../components/label";
import Iconify from "../components/iconify";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { base_url } from "@/utils/baseUrl";
import { runFireworks } from "../Success";

// ----------------------------------------------------------------------

export default function PaymentSummary({
  sx,
  phoneNumber,
  method,
  selectedCard,
  listing,
  days,
  propertyId,
  userData,
  date,
  date2,
  ...other
}) {
  // console.log(propertyId);

  const prices = listing?.findProduct?.prices;
  const hasValidPrices =
    prices && Object.keys(prices).some((key) => key !== "_id");
  const firstPrice = prices ? Object.values(prices)[0] : null;
  const ratePerNight = listing?.findProduct?.price;
  const [basePrice, setBasePrice] = useState(ratePerNight);
  const [status, setStatus] = useState("N/A");
  const [loading, setLoading] = useState(false);

  const paymentData = {
    phone_number: `254${phoneNumber}`,
    amount: "1",
  };

  const checkPaymentStatus = async (invoiceId) => {
    try {
      setLoading(true);
      const res = await axios.post(`${base_url}payment/status`, {
        invoice_id: invoiceId,
      });
      console.log(res.data.invoice.state);
      setStatus(res.data.invoice.state);

      switch (res.data.invoice.state) {
        case "PROCESSING":
        case "PENDING":
          setTimeout(() => {
            checkPaymentStatus(invoiceId);
          }, 20000);
          break;
        case "RETRY":
          return toast.error(`${res.data.invoice.failed_reason}`);
        case "COMPLETE":
          return (
            runFireworks(),
            setLoading(false),
            toast.success("Transaction completed.")
          );
        default:
          return toast.error("Something went wrong, please try again");
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.log(error);
    }
  };

  const book = async (invoiceId) => {
    try {
      const res = await axios.post(`${base_url}book/post`, {
        userId: userData?.userId || "",
        propertyId,
        checkinDate: date,
        checkoutDate: date2,
        invoiceId,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const payNow = async () => {
    if (!date || !date2) {
      return toast.error("Check-In & Check-Out dates are required!");
    }

    if (phoneNumber.length < 9 || phoneNumber.length > 9) {
      return toast.error("invalid phone number!");
    }
    try {
      const api = axios.create({
        baseURL: base_url,
      });

      const res = api.post(`/payment`, paymentData).then((response) => {
        console.log(response.data);
        if (response.data?.paymentData.invoice?.state === "PENDING") {
          book(response.data.paymentData.invoice.invoice_id);
          checkPaymentStatus(response.data.paymentData.invoice.invoice_id);
          return response.data;
        }
      });

      toast.promise(res, {
        loading: "Initializing stk push",
        success: "success, please enter mpesa pin",
        error: "Error occurred. Please try again",
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setBasePrice(ratePerNight);
  }, [ratePerNight]);

  const RenderPrice = () => {
    // State to handle the selected option
    const [selectedOption, setSelectedOption] = useState(
      hasValidPrices ? Object.keys(prices).find((key) => key !== "_id") : ""
    );

    const handleChangeCard = (event) => {
      const { value } = event.target;
      setSelectedOption(value);
      const selectedPriceDetails = JSON.parse(value);
      setBasePrice(selectedPriceDetails?.rate_per_night);
      console.log(selectedPriceDetails);
    };

    return (
      <Stack direction="row" justifyContent="flex-end">
        {hasValidPrices ? (
          <TextField
            select
            fullWidth
            onChange={handleChangeCard}
            value={selectedOption}
            SelectProps={{ native: true }}
          >
            {Object.keys(prices).map(
              (key) =>
                key !== "_id" && (
                  <option
                    key={key}
                    value={JSON.stringify({
                      rate_per_night: prices[key].rate_per_night,
                      max_guests: prices[key].max_guests,
                    })}
                  >
                    {key} - ${prices[key].rate_per_night} / night (Max Guests:{" "}
                    {prices[key].max_guests})
                  </option>
                )
            )}
          </TextField>
        ) : (
          <div className="items-center flex space-x-1">
            <Typography variant="h4">Ksh</Typography>
            <Typography variant="h3">
              {listing?.findProduct?.price?.toLocaleString() || "0.00"}
            </Typography>
            <Typography
              component="span"
              sx={{
                alignSelf: "center",
                color: "text.disabled",
                ml: 1,
                typography: "body2",
              }}
            >
              / night
            </Typography>
          </div>
        )}
      </Stack>
    );
  };

  return (
    <Box
      sx={{
        px: 5,
        borderRadius: 2,
        bgcolor: "background.neutral",
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h6" sx={{ mb: 5 }}>
        Summary
      </Typography>

      <Stack spacing={2.5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Property
          </Typography>

          <Label color="success">{listing?.findProduct?.title}</Label>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Property Type
          </Typography>

          <Label color="success">{listing?.findProduct?.propertyType}</Label>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Location
          </Typography>

          <Label color="success">{listing?.findProduct?.location?.name}</Label>
        </Stack>

        {RenderPrice(listing)}

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1">Total Billed</Typography>
          {hasValidPrices ? (
            <Typography variant="subtitle1">
              Ksh {(basePrice * days).toLocaleString() || "0.00"} *{days}
            </Typography>
          ) : (
            <Typography variant="subtitle1">
              Ksh{" "}
              {(listing?.findProduct?.price * days).toLocaleString() || "0.00"}{" "}
              *{days}
            </Typography>
          )}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />
      </Stack>

      {loading && (
        <Button
          fullWidth
          size="large"
          variant="contained"
          sx={{ mt: 1 }}
          color="inherit"
          className="text-green-600"
          onClick={() => payNow()}
        >
          <h2 className="text-black font-bold px-1">Status:</h2>
          <h2
            className={`${
              status === "PENDING"
                ? "text-yellow-500"
                : status === "COMPLETE"
                ? "text-green-500"
                : status === "PROCESSING"
                ? "text-orange-500"
                : status === "FAILED"
                ? "text-orange-500"
                : "text-black"
            } font-bold`}
          >
            {status}
          </h2>
        </Button>
      )}
      <Button
        fullWidth
        size="large"
        variant="contained"
        sx={{ mt: 1, mb: 3 }}
        color="inherit"
        className="text-green-600"
        onClick={() => payNow()}
      >
        Pay Now
      </Button>

      <Stack alignItems="center" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Iconify
            icon="solar:shield-check-bold"
            sx={{ color: "success.main" }}
          />
          <Typography variant="subtitle2">
            Secure credit card payment
          </Typography>
        </Stack>

        <Typography
          variant="caption"
          sx={{ color: "text.disabled", textAlign: "center" }}
        >
          This is a secure 128-bit SSL encrypted payment
        </Typography>
      </Stack>
    </Box>
  );
}

PaymentSummary.propTypes = {
  sx: PropTypes.object,
};
