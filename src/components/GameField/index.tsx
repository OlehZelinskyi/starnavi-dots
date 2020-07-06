import React, { PureComponent } from "react";

// Components
import FieldItem from "./FieldItem";
import { Styles, State, DifficultyItem, FieldItemConfig } from "../../typings";
import { Dispatch } from "redux";
import { fieldItems$ } from "../../redux/selectors";
import { connect } from "react-redux";
import { paintField } from "../../redux/actions";

export interface Props {
  selectedDifficulty: DifficultyItem;
  fieldItems: FieldItemConfig;
  paintField: (index: number) => void;
}

const styles: Styles = {
  fieldContainer: {
    display: "flex",
    flexWrap: "wrap",
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
