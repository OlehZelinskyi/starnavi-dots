import React, { PureComponent, ChangeEvent } from "react";
import Select from "react-select";
import { Difficulty, Option, State as GlobalState } from "../../typings";
import toNormalCase from "../../utils/toNormalCase";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { selectedOption$, gameOn$ } from "../../redux/selectors";
import { setSelectedOption, setUsername, startGame } from "../../redux/actions";
import Input from "../Input";
import Button from "../Button";

export interface Props {
  gameSettings: Difficulty;
  setSelectedOption: (selectedOption: Option) => void;
  selectedOption: Option;
  setUsername: (username: string) => void;
  startGame: () => void;
  gameOn: boolean;
}

export interface State {
  username: string;
}

class Settings extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      username: "",
    } as State;
  }

  render() {
    const { selectedOption, gameOn } = this.props;
    const { username } = this.state;
    return (
      <div>
        <Select
          value={selectedOption}
          onChange={this.handleSelect}
          options={this.getOptions()}
          isDisabled={gameOn}
        />
        <Input
          type={"text"}
          name={"username"}
          value={username}
          placeholder={"Enter your name"}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          disabled={gameOn}
        />
        <Button
          disabled={gameOn || !username.length}
          label={"PLAY"}
          type={"button"}
          handleClick={this.handleClick}
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
    const { setSelectedOption } = this.props;

    if (typeof setSelectedOption === "function") {
      setSelectedOption(selectedOption);
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
  selectedOption: selectedOption$(state),
  gameOn: gameOn$(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSelectedOption: (option: Option) => dispatch(setSelectedOption(option)),
  setUsername: (username: string) => dispatch(setUsername(username)),
  startGame: () => dispatch(startGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
