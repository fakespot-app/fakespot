import React from "react";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import Container from "./index";

configure({ adapter: new Adapter() });

describe("<Container />", () => {
  test("should render", () => {
    const wrapper = shallow(<Container />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should render beforeMain", () => {
    const beforeMain = (
      <span>
        Hello
      </span>
    );

    const wrapper = shallow(
      <Container
        beforeMain={beforeMain}
      />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should render main", () => {
    const main = (
      <span>
        There
      </span>
    );

    const wrapper = shallow(
      <Container
        main={main}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should render afterMain", () => {
    const afterMain = (
      <span>
        Guys!
      </span>
    );

    const wrapper = shallow(
      <Container
        afterMain={afterMain}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should render children and main prop", () => {
    const beforeMain = (
      <span>
        Hello
      </span>
    );

    const main = (
      <span>
        There
      </span>
    );

    const afterMain = (
      <span>
        Guys!
      </span>
    );

    const wrapper = shallow(
      <Container
        beforeMain={beforeMain}
        main={main}
        afterMain={afterMain}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});