import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
    id: number;
    label: string
}

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
const skillsOptions = skills.map((skill, index) => ({ id: index + 1, label: skill }));

export const MUIAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log(skill);

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        //getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        //getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};
