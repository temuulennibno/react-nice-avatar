import { pickRandomFromList, genConfig, defaultOptions } from "../src/utils";
import {
  Sex,
  EarSize,
  HairStyle,
  HatStyle,
  EyeStyle,
  GlassesStyle,
  NoseStyle,
  MouthStyle,
  ShirtStyle,
  EarringsStyle,
  AvatarFullConfig,
} from "../src/types";

interface InputOpt {
  sex: Sex;
  faceColor: string;
  earSize: EarSize;
  hairColor: string;
  hairStyle: HairStyle;
  hatColor: string;
  hatStyle: HatStyle;
  eyeStyle: EyeStyle;
  glassesStyle: GlassesStyle;
  noseStyle: NoseStyle;
  mouthStyle: MouthStyle;
  shirtStyle: ShirtStyle;
  shirtColor: string;
  bgColor: string;
  earringsStyle?: EarringsStyle;
  earringsColor?: string;
}

describe("utils", () => {
  describe("pickRandomFromList", () => {
    it("should able to pick one from the list", () => {
      const data = [11, 22, 33];
      const output = pickRandomFromList(data);
      expect(data).toContain(output);
    });

    it("should able to filter out avoidList", () => {
      const data = [11, 22, 33];
      const output = pickRandomFromList(data, { avoidList: [11, undefined, 22] });
      expect(output).toBe(33);
    });

    it("should able to increase the ability of usually", () => {
      const data = [11, 22, 33];

      const outputs: number[] = [];
      for (let i = 0; i < 3; i++) {
        const output = pickRandomFromList(data, { usually: [33, undefined] });
        outputs.push(output);
      }
      expect(outputs).toContain(33);
    });
  });

  describe("genConfig", () => {
    it("should return same specified configurations", () => {
      const myConfig: InputOpt = {
        sex: "man",
        faceColor: "#AC6651",
        earSize: "big",
        hairColor: "#fff",
        hairStyle: "mohawk",
        hatColor: "#506AF4",
        hatStyle: "beanie",
        eyeStyle: "oval",
        glassesStyle: "square",
        noseStyle: "round",
        mouthStyle: "smile",
        shirtStyle: "polo",
        shirtColor: "#F4D150",
        bgColor: "#E0DDFF",
      };
      const output: AvatarFullConfig = genConfig(myConfig);
      // Remove auto-generated fields for comparison
      const compareOutput = { ...output };
      delete compareOutput.eyeBrowStyle;
      delete compareOutput.earringsStyle;
      delete compareOutput.earringsColor;
      expect(compareOutput).toEqual(myConfig);
    });

    it("should pick random opt if not supplied", () => {
      const output = genConfig({});
      expect(defaultOptions.sex).toContain(output.sex);
      expect(defaultOptions.faceColor).toContain(output.faceColor);
      expect(defaultOptions.earSize).toContain(output.earSize);
      expect(defaultOptions.eyeStyle).toContain(output.eyeStyle);
      expect(defaultOptions.noseStyle).toContain(output.noseStyle);
      expect(defaultOptions.mouthStyle).toContain(output.mouthStyle);
      expect(defaultOptions.shirtStyle).toContain(output.shirtStyle);
      expect(defaultOptions.glassesStyle).toContain(output.glassesStyle);
    });

    it("should not have hairColor #77311D for woman with faceColor[1]", () => {
      const output = genConfig({
        sex: "woman",
        faceColor: defaultOptions.faceColor[1],
      });
      expect(output.hairColor).not.toBe("#77311D");
    });

    it("should only return man hairStyle for men", () => {
      const output = genConfig({
        sex: "man",
      });
      expect(defaultOptions.hairStyleMan).toContain(output.hairStyle);
    });

    it("should only return woman hairStyle for women", () => {
      const output = genConfig({
        sex: "woman",
      });
      expect(defaultOptions.hairStyleWoman).toContain(output.hairStyle);
    });

    it("should return valid eyeBrowStyle for man", () => {
      const output = genConfig({
        sex: "man",
      });
      expect(defaultOptions.eyeBrowStyle).toContain(output.eyeBrowStyle);
    });

    it("should have different color between shirt and hair/hat", () => {
      const output = genConfig({
        hairColor: defaultOptions.shirtColor[0],
        hatColor: defaultOptions.shirtColor[0],
      });
      expect(output.shirtColor).not.toBe(defaultOptions.shirtColor[0]);
    });

    it("should have different color between background and shirt and hair/hat", () => {
      const output = genConfig({
        hairColor: defaultOptions.bgColor[0],
        hatColor: defaultOptions.bgColor[0],
        shirtColor: defaultOptions.bgColor[1],
      });
      expect(output.bgColor).not.toBe(defaultOptions.bgColor[0]);
      expect(output.bgColor).not.toBe(defaultOptions.bgColor[1]);
    });

    // New tests for added features
    it("should return valid earrings style for women", () => {
      const output = genConfig({
        sex: "woman",
      });
      expect(defaultOptions.earringsStyle).toContain(output.earringsStyle);
    });

    it("should return no earrings for men by default", () => {
      const output = genConfig({
        sex: "man",
      });
      expect(output.earringsStyle).toBe("none");
    });

    it("should allow custom earrings style override", () => {
      const output = genConfig({
        sex: "man",
        earringsStyle: "hoop",
      });
      expect(output.earringsStyle).toBe("hoop");
    });

    it("should generate deterministic config from seed", () => {
      const seed = "test@example.com";
      const output1 = genConfig(seed);
      const output2 = genConfig(seed);
      expect(output1).toEqual(output2);
    });

    it("should return different configs for different seeds", () => {
      const output1 = genConfig("user1@example.com");
      const output2 = genConfig("user2@example.com");
      // At least some properties should differ
      const hasDifference =
        output1.sex !== output2.sex ||
        output1.hairStyle !== output2.hairStyle ||
        output1.faceColor !== output2.faceColor ||
        output1.bgColor !== output2.bgColor;
      expect(hasDifference).toBe(true);
    });

    it("should include all new style options in defaultOptions", () => {
      // Hair styles
      expect(defaultOptions.hairStyleMan).toContain("curly");
      expect(defaultOptions.hairStyleMan).toContain("bald");
      expect(defaultOptions.hairStyleMan).toContain("afro");
      expect(defaultOptions.hairStyleMan).toContain("buzz");
      expect(defaultOptions.hairStyleWoman).toContain("pixie");
      expect(defaultOptions.hairStyleWoman).toContain("braids");
      expect(defaultOptions.hairStyleWoman).toContain("longCurly");

      // Hat styles
      expect(defaultOptions.hatStyle).toContain("cap");
      expect(defaultOptions.hatStyle).toContain("cowboy");
      expect(defaultOptions.hatStyle).toContain("headband");
      expect(defaultOptions.hatStyle).toContain("hijab");
      expect(defaultOptions.hatStyle).toContain("fedora");

      // Eye styles
      expect(defaultOptions.eyeStyle).toContain("shadow");
      expect(defaultOptions.eyeStyle).toContain("wink");

      // Glasses styles
      expect(defaultOptions.glassesStyle).toContain("aviator");
      expect(defaultOptions.glassesStyle).toContain("cyber");

      // Mouth styles
      expect(defaultOptions.mouthStyle).toContain("open");
      expect(defaultOptions.mouthStyle).toContain("serious");
      expect(defaultOptions.mouthStyle).toContain("smirk");

      // Nose styles
      expect(defaultOptions.noseStyle).toContain("pointed");
      expect(defaultOptions.noseStyle).toContain("button");

      // Shirt styles
      expect(defaultOptions.shirtStyle).toContain("vneck");
      expect(defaultOptions.shirtStyle).toContain("crew");

      // Earrings styles
      expect(defaultOptions.earringsStyle).toContain("stud");
      expect(defaultOptions.earringsStyle).toContain("hoop");
      expect(defaultOptions.earringsStyle).toContain("drop");
    });
  });
});
