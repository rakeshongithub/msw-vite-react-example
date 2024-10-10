import { Button, Stack } from "@mui/material";
import { decrement, increment } from "../redux/slices/counter-slice";
import { ReduxState, useDispatch, useSelector } from "../redux/store";

export const Counter = () => {
  const count = useSelector((state: ReduxState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Stack direction="row" spacing={4}>
        <Button variant="contained" onClick={handleIncrement}>
          Increment
        </Button>
        <Button variant="contained" onClick={handleDecrement}>
          Decrement
        </Button>
      </Stack>
    </div>
  );
};
