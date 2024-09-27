import React, { useState, useEffect } from "react";
import { getUsers } from "../utils/appServices";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    getUsers().then((response: { data: React.SetStateAction<never[]> }) =>
      setUsers(response.data)
    );
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedUser(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, m: 5 }}>
      <Typography gutterBottom variant="h5" component="div">
        Mocked Users List
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedUser}
          label="Users List"
          onChange={handleChange}
        >
          {users?.map((user: { id: number; name: string }) => (
            <MenuItem key={user.id} value={user.name}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default UserList;
