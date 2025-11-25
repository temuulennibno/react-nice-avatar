"use client";

import React, { forwardRef } from "react";

import type { NiceAvatarProps } from "./types";

import { genConfig, defaultOptions } from "./utils";

import Face from "./face";
import Hair from "./hair";
import Hat from "./hat";
import Ear from "./ear";
import Eyebrow from "./eyebrow";
import Eye from "./eyes";
import Glasses from "./glasses";
import Nose from "./nose";
import Mouth from "./mouth";
import Shirt from "./shirt";
import Earrings from "./earrings";

export interface AvatarProps extends Omit<NiceAvatarProps, 'style'> {
  /** HTML id attribute */
  id?: string;
  /** CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Avatar shape */
  shape?: "circle" | "rounded" | "square";
}

const ReactNiceAvatar = forwardRef<HTMLDivElement, AvatarProps>(
  function ReactNiceAvatar(props, ref) {
    const {
      id,
      className,
      style,
      shape = "circle",
      hairColorRandom = false,
      ...configProps
    } = props;

    const config = genConfig(configProps);

    // Background shape
    let borderRadius: string | number;
    switch (shape) {
      case "circle":
        borderRadius = "100%";
        break;
      case "rounded":
        borderRadius = "6px";
        break;
      case "square":
        borderRadius = 0;
        break;
      default:
        borderRadius = "100%";
    }

    return (
      <div
        ref={ref}
        id={id}
        className={className}
        style={{
          background: config.bgColor,
          overflow: "hidden",
          borderRadius,
          ...style,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "90%",
            }}
          >
            <Face color={config.faceColor} />
            <Hat color={config.hatColor} style={config.hatStyle} />
            {config.hatStyle === "none" && (
              <Hair
                color={config.hairColor}
                style={config.hairStyle}
                colorRandom={hairColorRandom}
              />
            )}

            {/* Face detail */}
            <div
              style={{
                position: "absolute",
                right: "-3%",
                top: "30%",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Eyebrow style={config.eyeBrowStyle} />
              <Eye style={config.eyeStyle} />
              <Glasses style={config.glassesStyle} />
              <Ear color={config.faceColor} size={config.earSize} />
              <Nose style={config.noseStyle} />
              <Mouth style={config.mouthStyle} />
            </div>

            <Shirt color={config.shirtColor} style={config.shirtStyle} />

            {config.earringsStyle && config.earringsStyle !== "none" && (
              <Earrings style={config.earringsStyle} color={config.earringsColor} />
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default ReactNiceAvatar;
export { genConfig, defaultOptions } from "./utils";
export type * from "./types";
