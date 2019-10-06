import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeDetail from "../CoffeeDetail";

import { getCoffeeShops } from "../../store/actions";
import { connect } from "react-redux";

class HomePage extends Component {
  async componentDidMount() {
    await this.props.getCoffeeShops();
  }

  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeDetail />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    coffeeShops: state.rootCoffee.coffeeShops
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCoffeeShops: () => dispatch(getCoffeeShops())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
