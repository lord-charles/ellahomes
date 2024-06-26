import { format } from "date-fns";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import ListItemText from "@mui/material/ListItemText";
import TableContainer from "@mui/material/TableContainer";

import Label from "../label";
import Iconify from "../iconify";
import Scrollbar from "../scrollbar";
import { TableHeadCustom } from "../table";
import CustomPopover, { usePopover } from "../custom-popover";


export default function BookingDetails({ tableData, title, tableLabels }) {
  return (
    <Card>
      <CardHeader title={title} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: "unset" }}>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHeadCustom headLabel={tableLabels} />

            <TableBody>
              {tableData?.map((row) => (
                <BookingDetailsRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      <Divider sx={{ borderStyle: "dashed" }} />
    </Card>
  );
}

BookingDetails.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.array,
  tableLabels: PropTypes.array,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function BookingDetailsRow({ row }) {
  const theme = useTheme();

  const lightMode = theme.palette.mode === "light";

  const popover = usePopover();

  const handleDownload = () => {
    popover.onClose();
    console.info("DOWNLOAD", row.id);
  };

  const handlePrint = () => {
    popover.onClose();
    console.info("PRINT", row.id);
  };

  const handleShare = () => {
    popover.onClose();
    console.info("SHARE", row.id);
  };

  const handleDelete = () => {
    popover.onClose();
    console.info("DELETE", row.id);
  };
  return (
    <>
      <TableRow>
        <TableCell sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            variant="rounded"
            alt={row?.propertyId?.title}
            src={row.propertyId?.detailImage}
            sx={{ mr: 2, width: 48, height: 48 }}
          />
          {row?.propertyId?.title}
        </TableCell>

        <TableCell>
          <ListItemText
            primary={row?.userId?.firstname}
            secondary={row?.userId.mobile}
            primaryTypographyProps={{ typography: "body2", noWrap: true }}
            secondaryTypographyProps={{
              mt: 0.5,
              component: "span",
              typography: "caption",
            }}
          />
        </TableCell>

        <TableCell>
          <ListItemText
            primary={format(new Date(row?.checkinDate), "dd MMM yyyy")}
            secondary={format(new Date(row?.checkinDate), "p")}
            primaryTypographyProps={{ typography: "body2", noWrap: true }}
            secondaryTypographyProps={{
              mt: 0.5,
              component: "span",
              typography: "caption",
            }}
          />
        </TableCell>

        <TableCell>
          <ListItemText
            primary={format(new Date(row?.checkoutDate), "dd MMM yyyy")}
            secondary={format(new Date(row?.checkoutDate), "p")}
            primaryTypographyProps={{ typography: "body2", noWrap: true }}
            secondaryTypographyProps={{
              mt: 0.5,
              component: "span",
              typography: "caption",
            }}
          />
        </TableCell>
        <TableCell>
          <h2>{row?.paymentDetails?.invoice?.value}</h2>
        </TableCell>

        <TableCell>
          <Label
            variant={lightMode ? "soft" : "filled"}
            color={
              (row?.paymentDetails?.invoice?.state === "COMPLETE" &&
                "success") ||
              row.status === "PENDING" ||
              (row.status === "PROCESSING" && "warning") ||
              "error"
            }
          >
            {row?.paymentDetails?.invoice?.state}
          </Label>
        </TableCell>

        <TableCell align="right" sx={{ pr: 1 }}>
          <IconButton
            color={popover.open ? "inherit" : "default"}
            // onClick={popover.onOpen}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 160 }}
      >
        <MenuItem onClick={handleDownload}>
          <Iconify icon="eva:cloud-download-fill" />
          Download
        </MenuItem>

        <MenuItem onClick={handlePrint}>
          <Iconify icon="solar:printer-minimalistic-bold" />
          Print
        </MenuItem>

        <MenuItem onClick={handleShare}>
          <Iconify icon="solar:share-bold" />
          Share
        </MenuItem>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>
      </CustomPopover>
    </>
  );
}

BookingDetailsRow.propTypes = {
  row: PropTypes.object,
};
