import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api/products";
import { useEffect } from "react";
import { Button, Container } from "@mui/material";

export default function Admin() {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(products);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Color</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="product">
                  {product.name}
                </TableCell>
                <TableCell align="right">{product.brand}</TableCell>
                <TableCell align="right">{product.description}</TableCell>
                <TableCell align="right">
                  <img width={80} src={product.image} alt="img" />
                </TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.color}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="success">
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="warning">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
