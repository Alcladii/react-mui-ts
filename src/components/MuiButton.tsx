import { Stack, Button } from "@mui/material";

export const MuiButton = () => {
  return (
    <Stack spacing={4} >
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Text
        </Button>
        <Button variant="contained" color="secondary">
          Contained
        </Button>
        <Button variant="contained" color="warning">
          Outlined
        </Button>
        <Button variant="contained" color="error">
          Text
        </Button>
        <Button variant="contained" color="info">
          Contained
        </Button>
        <Button variant="contained" color="success">
          Outlined
        </Button>
      </Stack>
    </Stack>
  );
};
