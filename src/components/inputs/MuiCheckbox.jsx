import React, { useState } from 'react';
import {
  Box,
  FormGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';

const MuiCheckbox = () => {
  const [skills, setSkills] = useState([]);

  console.log(skills);

  const handleSkillChange = (event) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      {/* <FormGroup>
        <FormControlLabel
          onChange={handleChange}
          control={<Checkbox checked={acceptInC} />}
          label="I accept terms and conditions"
        />
        <FormControlLabel
          onChange={handleChange}
          control={
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              checked={acceptInC}
            />
          }
        />
      </FormGroup> */}
      <FormControl>
        <FormLabel>Skills</FormLabel>
        <FormGroup row>
          <FormControlLabel
            label="HTML"
            control={
              <Checkbox
                onChange={handleSkillChange}
                value="HTML"
                checked={skills.includes('HTML')}
              />
            }
          />{' '}
          <FormControlLabel
            label="CSS"
            control={
              <Checkbox
                onChange={handleSkillChange}
                value="CSS"
                checked={skills.includes('CSS')}
              />
            }
          />{' '}
          <FormControlLabel
            label="JavaScript"
            control={
              <Checkbox
                onChange={handleSkillChange}
                value="JavaScript"
                checked={skills.includes('JavaScript')}
              />
            }
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default MuiCheckbox;
