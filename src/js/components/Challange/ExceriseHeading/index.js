import React from "react";
import styles from "./style.sass";

export default class ExceriseHeading extends React.Component {
  render() {
    return (
      <div className={`${styles.questionHeader} leading-normal`}>
        Czy ta informacja jest prawdziwa czy fałszywa? <br />
        Znajdź odpowiedź, wynajdując w Internecie wiarygodne źródło
      </div>
    );
  }
}