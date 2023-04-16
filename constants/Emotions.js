import { faFaceAngry } from "@fortawesome/free-regular-svg-icons/faFaceAngry";
import { faFaceFlushed } from "@fortawesome/free-regular-svg-icons/faFaceFlushed";
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons/faFaceFrown";
import { faFaceGrin } from "@fortawesome/free-regular-svg-icons/faFaceGrin";
import { faFaceKiss } from "@fortawesome/free-regular-svg-icons/faFaceKiss";
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons/faFaceLaugh";
import { faFaceMeh } from "@fortawesome/free-regular-svg-icons/faFaceMeh";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons/faFaceSadTear";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons/faFaceSmile";
import { faFaceSmileWink } from "@fortawesome/free-regular-svg-icons/faFaceSmileWink";
import { faFaceDizzy } from "@fortawesome/free-regular-svg-icons/faFaceDizzy";
import { faFaceSurprise } from "@fortawesome/free-regular-svg-icons/faFaceSurprise";

const emotions = [
  {
    icon: faFaceLaugh,
    color: "#454545",
    text: "Laugh",
    score: 14,
  },
  {
    icon: faFaceGrin,
    color: "#454545",
    text: "Grin",
    score: 13,
  },
  {
    icon: faFaceKiss,
    color: "#454545",
    text: "Pleasant",
    score: 12,
  },
  {
    icon: faFaceSurprise,
    color: "#454545",
    text: "Surprise",
    score: 10,
  },
  {
    icon: faFaceSmileWink,
    color: "#454545",
    text: "Excited",
    score: 9,
  },
  {
    icon: faFaceSmile,
    color: "#454545",
    text: "Smile",
    score: 8,
  },

  {
    icon: faFaceMeh,
    color: "#454545",
    text: "Confused",
    score: 6,
  },
  {
    icon: faFaceFlushed,
    color: "#454545",
    text: "Nauseous",
    score: 5,
  },
  {
    icon: faFaceDizzy,
    color: "#454545",
    text: "Dizzy",
    score: 4,
  },
  {
    icon: faFaceAngry,
    color: "#454545",
    text: "Angry",
    score: 3,
  },
  {
    icon: faFaceFrown,
    color: "#454545",
    text: "Frown",
    score: 2,
  },
  {
    icon: faFaceSadTear,
    color: "#454545",
    text: "Sad",
    score: 1,
  },
];

emotions.forEach((emotion) => emotion.color = `hsl(${-(emotion.score + 10) % 15 * 30}, 80%, 50%)"`);

export default emotions;