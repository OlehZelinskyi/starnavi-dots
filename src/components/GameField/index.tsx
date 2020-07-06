import React, { PureComponent } from "react";

// Components
import FieldItem from "./FieldItem";
import { Styles, State, DifficultyItem, FieldItemConfig } from "../../typings";
import { Dispatch } from "redux";
import { fieldItems$ } from "../../redux/selectors";
import { connect } from "react-redux";

export interface Props {
  selectedDifficulty: DifficultyItem;
  fieldItems: FieldItemConfig;
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
    const { fieldItems: fieldItemsConfig } = this.props;

    return Object.values(fieldItemsConfig).map((itemConfig) => {
      return <FieldItem {...itemConfig} />;
    });
  };
}

const mapStateToProps = (state: State) => ({
  fieldItems: fieldItems$(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => {};

export default connect(mapStateToProps, null)(GameField);
