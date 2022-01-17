import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "../../services/mockApi";

export const getAllContacts = createAsyncThunk(
  "contacts/fetchAllContacts",
  async (_, thunkApi) => {
    try {
      const contacts = await fetchContacts();
      console.log('contacts :>> ', contacts);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (contacts, thunkApi) => {
    try {
      const contact = await addContact(contacts);
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { id } = await deleteContact(contactId);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
