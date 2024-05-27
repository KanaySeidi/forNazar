import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../api/products";

function Add() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    description: "",
    image: "",
    price: "",
    color: "",
  });

  const dispatch = useDispatch();

  function resetFields() {
    setNewProduct({
      name: "",
      brand: "",
      description: "",
      image: "",
      price: "",
      color: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    for (const key in newProduct) {
      if (!newProduct[key]) {
        alert("fill in the fields");
        return;
      }
    }
    dispatch(addProduct(newProduct));
    resetFields();
  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            value={newProduct.name}
            onChange={(event) =>
              setNewProduct({ ...newProduct, name: event.target.value })
            }
            label="Add name"
            variant="filled"
          />
          <TextField
            fullWidth
            value={newProduct.brand}
            onChange={(event) =>
              setNewProduct({ ...newProduct, brand: event.target.value })
            }
            label="Add brand"
            variant="filled"
          />
          <TextField
            fullWidth
            value={newProduct.description}
            onChange={(event) =>
              setNewProduct({ ...newProduct, description: event.target.value })
            }
            label="Add description"
            variant="filled"
          />
          <TextField
            fullWidth
            value={newProduct.image}
            onChange={(event) =>
              setNewProduct({ ...newProduct, image: event.target.value })
            }
            label="Add image"
            variant="filled"
          />
          <TextField
            fullWidth
            value={newProduct.price}
            onChange={(event) =>
              setNewProduct({ ...newProduct, price: event.target.value })
            }
            label="Add price"
            variant="filled"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Add color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newProduct.color}
              label="color"
              onChange={(e) =>
                setNewProduct({ ...newProduct, color: e.target.value })
              }
            >
              <MenuItem value="white">White</MenuItem>
              <MenuItem value="gray">Gray</MenuItem>
              <MenuItem value="black">Black</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" fullWidth variant="contained">
            Add laptop
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Add;
