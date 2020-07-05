import React, { PureComponent } from "react";

// Components
import FieldItem from "./FieldItem";
import { Styles } from "../../typings";

export interface Props {
  selectedDifficulty: {
    field: number;
    delay: number;
  };
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
    const {
      selectedDifficulty: { field },
    } = this.props;

    const fieldItems: JSX.Element[] = [];

    for (let i = 0; i < field ** 2; i++) {
      fieldItems.push(
        <FieldItem
          key={i}
          clickable={false}
          state={{ pending: false, color: "transparent" }}
          winner={null}
          turn={i}
        />
      );
    }

    return fieldItems.map((item) => item);
  };
}

export default GameField;
