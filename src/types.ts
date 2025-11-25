import * as React from "react";

type Style = {
  [key: string]: string | number | boolean;
};

export type Sex = "man" | "woman";
export type EarSize = "small" | "big";

// Extended hair styles
export type HairStyle =
  | "normal"
  | "thick"
  | "mohawk"
  | "womanLong"
  | "womanShort"
  | "curly"
  | "bald"
  | "afro"
  | "pixie"
  | "buzz"
  | "braids"
  | "longCurly";

export type HairStyleMan =
  | "normal"
  | "thick"
  | "mohawk"
  | "curly"
  | "bald"
  | "afro"
  | "buzz";

export type HairStyleWoman =
  | "normal"
  | "womanLong"
  | "womanShort"
  | "pixie"
  | "braids"
  | "longCurly"
  | "curly"
  | "afro"
  | "bald";

// Extended hat styles
export type HatStyle =
  | "beanie"
  | "none"
  | "cap"
  | "cowboy"
  | "headband"
  | "hijab"
  | "fedora";

// Extended eye styles
export type EyeStyle = "circle" | "oval" | "smile" | "shadow" | "wink";

// Extended glasses styles
export type GlassesStyle = "round" | "square" | "none" | "aviator" | "cyber";

// Extended nose styles
export type NoseStyle = "short" | "long" | "round" | "pointed" | "button";

// Extended mouth styles
export type MouthStyle =
  | "laugh"
  | "smile"
  | "peace"
  | "open"
  | "serious"
  | "smirk";

export type ShirtStyle = "hoody" | "short" | "polo" | "vneck" | "crew";
export type EyeBrowStyle = "up" | "upWoman" | "flat" | "angry";

// Earrings styles
export type EarringsStyle = "none" | "stud" | "hoop" | "drop";

export interface AvatarConfig {
  sex?: Sex;
  faceColor?: string;
  earSize?: EarSize;
  hairColor?: string;
  hairStyle?: HairStyle;
  hairColorRandom?: boolean;
  hatColor?: string;
  hatStyle?: HatStyle;
  eyeStyle?: EyeStyle;
  glassesStyle?: GlassesStyle;
  noseStyle?: NoseStyle;
  mouthStyle?: MouthStyle;
  shirtStyle?: ShirtStyle;
  shirtColor?: string;
  bgColor?: string;
  isGradient?: boolean;
  earringsStyle?: EarringsStyle;
  earringsColor?: string;
}

export interface AvatarFullConfig extends AvatarConfig {
  eyeBrowStyle?: EyeBrowStyle;
}

export interface NiceAvatarProps extends AvatarConfig {
  id?: string;
  className?: string;
  style?: Style;
  shape?: "circle" | "rounded" | "square";
}

export type GenConfigFunc = (
  config?: AvatarFullConfig | string
) => Required<AvatarFullConfig>;

export declare const genConfig: GenConfigFunc;

export default class ReactNiceAvatar extends React.Component<NiceAvatarProps> {}
