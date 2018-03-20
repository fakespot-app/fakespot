import React from "react";
import PropTypes from "prop-types";
import init from "./adobeFunctions";

export default class AnimateCC extends React.Component {
  static propTypes = {
    composition: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    getAnimationObject: PropTypes.func,
    paused: PropTypes.bool,
  }

  static defaultProps = {
    getAnimationObject: () => {},
    paused: false,
  }

  static hexToRgba = (color, opacity) => {
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  constructor(props) {
    super();
    const comp = AdobeAn.getComposition(props.composition);
    const { properties } = comp.getLibrary();

    this.properties = properties;
  }

  componentDidMount() {
    init(
      this.props.composition,
      this.props.fileName,
      this.canvas,
      this.animationContainer,
      this.domOverlayContainer,
      (l) => {
        this.props.getAnimationObject(l);
        this.lib = l;
        this.lib.tickEnabled = !this.props.paused;
      },
    );
  }

  componentWillReceiveProps({ paused }) {
    this.lib.tickEnabled = !paused;
  }

  render() {
    const color = AnimateCC.hexToRgba(this.properties.color, this.properties.opacity);

    return (
      <div>
        <div
          ref={(el) => { this.animationContainer = el; }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <canvas
            ref={(el) => { this.canvas = el; }}
            style={{
              position: "absolute",
              display: "block",
              width: "100%",
              height: "100%",
              backgroundColor: color,
            }}
          />
          <div
            ref={(el) => { this.domOverlayContainer = el; }}
            style={{
              pointerEvents: "none",
              overflow: "hidden",
              width: `${this.properties.width}px`,
              height: `${this.properties.height}px`,
              position: "absolute",
              left: "0px",
              top: "0px",
              display: "block",
            }}
          />
        </div>
      </div>
    );
  }
}
