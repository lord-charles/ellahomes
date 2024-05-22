import React, { useState } from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import InputAdornment from "@mui/material/InputAdornment";
import Iconify from "../components/iconify";
import CustomPopover, { usePopover } from "../components/custom-popover";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import toast, { Toaster } from "react-hot-toast";

export default function PaymentNewCardDialog({
  onClose,
  userData,
  getCards,
  ...other
}) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const popover = usePopover();

  const validate = () => {
    const newErrors = {};
    if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ""))) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    }
    if (!cardHolder) {
      newErrors.cardHolder = "Card holder name is required.";
    }
    if (!/^\d{2}\/\d{2}$/.test(expirationDate)) {
      newErrors.expirationDate = "Expiration date must be in MM/YY format.";
    }
    if (!/^\d{3}$/.test(cvv)) {
      newErrors.cvv = "CVV must be 3 digits.";
    }
    return newErrors;
  };

  const handleAdd = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      postCard();
    }
  };

  const postCard = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${base_url}cards`, {
        cardNumber,
        cardHolder,
        expirationDate,
        cvv,
        userId: userData?.userId,
      });
      console.log(res);
      await getCards(userData?.userId);
      toast.success("Success");
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Dialog maxWidth="sm" onClose={onClose} {...other}>
        <DialogTitle>New Card</DialogTitle>

        <DialogContent sx={{ overflow: "unset" }}>
          <Stack spacing={2.5}>
            <TextField
              autoFocus
              label="Card Number"
              placeholder="XXXX XXXX XXXX XXXX"
              InputLabelProps={{ shrink: true }}
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              error={!!errors.cardNumber}
              helperText={errors.cardNumber}
              autoComplete="cc-number"
            />

            <TextField
              label="Card Holder"
              placeholder="JOHN DOE"
              InputLabelProps={{ shrink: true }}
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              error={!!errors.cardHolder}
              helperText={errors.cardHolder}
            />

            <Stack spacing={2} direction="row">
              <TextField
                label="Expiration Date"
                placeholder="MM/YY"
                InputLabelProps={{ shrink: true }}
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                error={!!errors.expirationDate}
                helperText={errors.expirationDate}
                autoComplete="cc-exp"
              />
              <TextField
                label="CVV/CVC"
                placeholder="***"
                InputLabelProps={{ shrink: true }}
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                error={!!errors.cvv}
                helperText={errors.cvv}
                autoComplete="cc-csc"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        edge="end"
                        onClick={popover.onOpen}
                      >
                        <Iconify icon="eva:info-outline" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              sx={{ typography: "caption", color: "text.disabled" }}
            >
              <Iconify icon="carbon:locked" sx={{ mr: 0.5 }} />
              Your transaction is secured with SSL encryption
            </Stack>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button color="inherit" variant="outlined" onClick={onClose}>
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleAdd}
            color="inherit"
            className="text-green-500"
          >
            {loading ? "Adding..." : "Add"}
          </Button>
        </DialogActions>
      </Dialog>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="bottom-center"
        sx={{ maxWidth: 200, typography: "body2", textAlign: "center" }}
      >
        Three-digit number on the back of your VISA card
      </CustomPopover>
    </>
  );
}

PaymentNewCardDialog.propTypes = {
  onClose: PropTypes.func,
};
