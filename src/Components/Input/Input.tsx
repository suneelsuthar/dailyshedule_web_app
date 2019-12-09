import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";

import "./Input.css";

export interface Shedule {
  placeholder: string;
  type: any;
  label: string;
  // onChange: () => void;
}

export default class CustomizedInputs extends React.Component<Shedule> {
  public render() {
    return (
      <>
        <TextField
          id="outlined-size-small"
          className="input"
          placeholder={this.props.placeholder}
          variant="outlined"
          size="small"
          type={this.props.type}
          // onChange={e => this.props.onChange()}
        />
        <FormHelperText className="helper">{this.props.label}</FormHelperText>
      </>
    );
  }
}
