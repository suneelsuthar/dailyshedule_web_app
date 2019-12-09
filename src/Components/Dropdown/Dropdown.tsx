import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 140
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState<{
    age: string | number;
    name: string;
  }>({
    age: "",
    name: "hai"
  });

  const handleChange = (name: keyof typeof state) => (
    event: React.ChangeEvent<{ value: any }>
  ) => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          value={state.age}
          name="age"
          onChange={handleChange("age")}
          inputProps={{ "aria-label": "age" }}
        >
          <option value="a" disabled={true}>
            Placeholder
          </option>
          <option value={10}>Today</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
