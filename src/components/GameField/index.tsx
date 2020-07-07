import React, { PureComponent } from "react";

// Components
import FieldItem from "./FieldItem";

// Types
import { Styles, State, DifficultyItem, FieldItemConfig } from "@typings";
import { Dispatch } from "redux";

// Selectors
import { fieldItems$ } from "@redux/selectors";

// Utils
import { connect } from "react-redux";

// Actions
import { paintField } from "@redux/actions";

export interface Props {
  selectedDifficulty: DifficultyItem;
  fieldItems: FieldItemConfig;
  paintField: (index: number) => void;
}

const styles: Styles = {
  fieldContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: "2rem auto",
  },
};

class GameField extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { fieldContainer } = styles;
    const {
      selectedDifficulty: { field },
    } = this.props;

    const calculatedWidth = field * 30;
    return (
      <div style={{ ...fieldContainer, width: calculatedWidth }}>
        {this.renderField()}
      </div>
    );
  }

  private renderField = () => {
    const { fieldItems: fieldItemsConfig, paintField } = this.props;

    return Object.values(fieldItemsConfig).map((itemConfig) => {
      return <FieldItem {...itemConfig} handleClick={paintField} />;
    });
  };
}

const mapStateToProps = (state: State) => ({
  fieldItems: fieldItems$(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  paintField: (index: number) => dispatch(paintField(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameField);
