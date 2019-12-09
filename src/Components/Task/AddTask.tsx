import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Textfield, Dropdown } from "./../index";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import "./AddTask.css";

interface IProps {
  superhero?: string;
}

interface IState {
  playOrPause?: string;
  view?: boolean;
}

export default class Home extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      playOrPause: "Play",
      view: true
    };
  }

  public handleClick = () => {
    this.setState({ view: false });
  };

  public render() {
    return (
      <Grid justify="center" container={true} style={{ marginTop: "50px" }}>
        <Grid
          className="container"
          item={true}
          xs={12}
          sm={6}
          md={6}
          lg={8}
          xl={8}
          container={true}
        >
          {/* summary section */}
          <Grid
            className="colm1"
            item={true}
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={4}
          >
            <Typography variant="h4" className="summary">
              {" "}
              Summary
            </Typography>
            <Dropdown />
            <div className="middle_section">
              {this.state.view ? (
                <div>
                  <Typography variant="h6" className="task">
                    {" "}
                    All things <span className="lable">0</span>
                  </Typography>
                  <Typography variant="h6" className="task">
                    Business<span className="lable">0</span>
                  </Typography>
                  <Typography variant="h6" className="task">
                    {" "}
                    Personal <span className="lable">0</span>
                  </Typography>
                  <Typography variant="h6" className="task">
                    Family<span className="lable">0</span>
                  </Typography>
                  <Typography variant="h6" className="task">
                    Work<span className="lable">0</span>
                  </Typography>
                  <p className="btn_section">
                    <Button className="view_task" onClick={this.handleClick}>
                      view task
                    </Button>
                  </p>
                </div>
              ) : (
                <div>
                  <div className="show_work_section">
                    <div className="reminder">
                      <span>
                      hello this is my first assignment 
                      </span>
                      <span className="icon_section">
                        <DeleteForeverRoundedIcon />
                        <EditRoundedIcon />
                      </span>
                    </div>
                  </div>
                  <p className="btn_section">
                    <Button className="view_task" onClick={this.handleClick}>
                      view summary
                    </Button>
                  </p>
                </div>
              )}
            </div>
          </Grid>

          {/* new task section */}
          <Grid
            className="colm2"
            item={true}
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={4}
          >
            <Typography variant="h4" className="summary">
              {" "}
              New Task
            </Typography>
            <div className="middle_section">
              <Textfield placeholder="what type of work" type="text" label="" />
              <Textfield
                placeholder="what i have to do?"
                type="text"
                label=""
              />
              <Textfield placeholder="where?" type="text" label="" />
              <Textfield
                placeholder="when?"
                type="datetime-local"
                label="when ?"
              />
              <p className="btn_section">
                <Button className="view_task">add task</Button>
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
