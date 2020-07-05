import React, { PureComponent, ChangeEvent } from "react";
import Select from "react-select";
import {
  Difficulty,
  Option,
  State as GlobalState,
  Mode,
  Styles,
} from "../../typings";
import toNormalCase from "../../utils/toNormalCase";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { selectedOption$, gameOn$ } from "../../redux/selectors";
import { setDifficulty, setUsername, startGame } from "../../redux/actions";
import Input from "../Input";
import Button from "../Button";
import { DEFAULT_OPTION } from "../../redux/constants";

export interface Props {
  gameSettings: Difficulty;
  setDifficulty: (difficulty: Mode) => void;
  setUsername: (username: string) => void;
  startGame: () => void;
  gameOn: boolean;
}

export interface State {
  username: string;
  selectedOption: Option;
}

const styles: Styles = {
  settingsWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  input: {
    padding: "5px 10px",
    background: "#eee",
    fontSize: "14px",
    border: "none",
    fontFamily: "Arial",
    color: "#777",
    marginRight: 10,
  },
  button: {
    background: "#555",
    color: "#fff",
    borderRadius: "3px",
    padding: "5px 20px",
    border: "none",
  },
  selectWrapper: {
    width: 200,
    marginRight: 10,
  },
};

class Settings extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      username: "",
      selectedOption: null,
    } as State;
  }

  render() {
    const { gameOn } = this.props;
    const { username, selectedOption } = this.state;
    const { settingsWrapper, input, selectWrapper, button } = styles;

    return (
      <div style={settingsWrapper}>
        <div style={selectWrapper}>
          <Select
            value={selectedOption}
            onChange={this.handleSelect}
            options={this.getOptions()}
            isDisabled={gameOn}
          />
        </div>

        <Input
          type={"text"}
          name={"username"}
          value={username}
          placeholder={"Enter your name"}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          disabled={gameOn}
          styles={input}
        />
        <Button
          disabled={gameOn || !username.length || !selectedOption}
          label={"PLAY"}
          type={"button"}
          handleClick={this.handleClick}
          styles={button}
        />
      </div>
    );
  }

  private handleClick = () => {
    const { startGame } = this.props;

    if (typeof startGame === "function") {
      startGame();
    }
  };

  private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    this.setState({
      username: value,
    });
  };

  private handleBlur = () => {
    const { username } = this.state;
    const { setUsername } = this.props;

    if (typeof setUsername === "function") {
      setUsername(username);
    }
  };

  private handleSelect = (selectedOption: Option) => {
    const { setDifficulty } = this.props;
    this.setState({ selectedOption });
    if (typeof setDifficulty === "function") {
      setDifficulty(selectedOption.value as Mode);
    }
  };

  private getOptions = () => {
    const { gameSettings } = this.props;

    const options = Object.keys(gameSettings).map((key) => {
      return {
        label: toNormalCase(key),
        value: key,
      };
    });

    return options;
  };
}

const mapStateToProps = (state: GlobalState) => ({
  gameOn: gameOn$(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setDifficulty: (difficulty: Mode) => dispatch(setDifficulty(difficulty)),
  setUsername: (username: string) => dispatch(setUsername(username)),
  startGame: () => dispatch(startGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
