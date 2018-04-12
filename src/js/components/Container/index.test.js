import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Container from "./index";

configure({ adapter: new Adapter() });

describe("<Container />", () => {
  test("should render", () => {
    const wrapper = shallow(<Container />);

    expect(
      wrapper.hasClass("container") &&
      wrapper.childAt(0).hasClass("main"),
    ).toBe(true);
  });

  test("should render child", () => {
    const child = (
      <span>
        Hello
      </span>
    );

    const wrapper = shallow(
      <Container>
        {child}
      </Container>,
    );

    expect(wrapper.childAt(0).equals(child)).toBe(true);
  });

  test("should render main prop", () => {
    const main = (
      <span>
        There
      </span>
    );

    const wrapper = shallow(
      <Container main={main} />,
    );

    expect(wrapper.childAt(0).childAt(0).equals(main)).toBe(true);
  });

  test("should render children and main prop", () => {
    const child = (
      <span>
        Hello
      </span>
    );

    const main = (
      <span>
        There
      </span>
    );

    const wrapper = shallow(
      <Container main={main}>
        {child}
      </Container>,
    );

    expect(
      wrapper.childAt(0).equals(child) &&
      wrapper.childAt(1).childAt(0).equals(main),
    ).toBe(true);
  });
});