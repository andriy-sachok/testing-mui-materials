import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from '@mui/material';

const MuiRadioButton = () => {
  const logFormInput = (event) => {
    console.log(event.target.value);
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          onChange={logFormInput}
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          row
        >
          <FormControlLabel
            control={<Radio size="small" color="success" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="6-10"
            value="6-10"
          />
        </RadioGroup>
        <FormHelperText>Some helper text</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
