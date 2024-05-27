import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../utils/const";

export const getAllProducts = createAsyncThunk(
  "getData",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios(API_URL, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getProduct = createAsyncThunk(
  "getProduct",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios(`${API_URL}/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "addProduct",
  async (newProduct, { rejectWithValue }) => {
    try {
      const res = await axios.post(API_URL, newProduct);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
