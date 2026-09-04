import huamingAvatar from "../assets/general/huaming.jpg";
import haolinAvatar from "../assets/general/haolin.jpg";
import jiawenAvatar from "../assets/general/jiawen.jpg";
import linghanAvatar from "../assets/general/linghan.jpg";
import liningAvatar from "../assets/general/lining.jpg";
import pengyueAvatar from "../assets/general/pengyue.jpg";
import qingwenAvatar from "../assets/general/qingwen.jpg";
import taozhaoAvatar from "../assets/general/taozhao.jpg";
import yitianAvatar from "../assets/general/yitian.jpg";
import zhaogeAvatar from "../assets/general/zhaoge.jpg";

const people = [
  {
    avatar: huamingAvatar,
    name: "Huaming Chen",
    direction: "Trustworthy AI Systems",
    avatarClassName: "member-avatar-huaming",
  },
  { avatar: jiawenAvatar, name: "Jiawen Wen", direction: "AI Software Security" },
  { avatar: pengyueAvatar, name: "Pengyue Yang", direction: "Trustworthy AI" },
  { avatar: linghanAvatar, name: "Linghan Huang", direction: "LLM Safety & Fuzzing" },
  { avatar: haolinAvatar, name: "Haolin Jin", direction: "AI in Software Engineering" },
  { avatar: qingwenAvatar, name: "Qingwen Zeng", direction: "LLM Recs & Forecasting" },
  { avatar: liningAvatar, name: "Lining Chen", direction: "LLM Recommendation Systems" },
  { avatar: zhaogeAvatar, name: "Zhaoge Bi", direction: "Forecasting AI Agents" },
  { avatar: yitianAvatar, name: "Yitian Yang", direction: "Trustworthy AI" },
  { avatar: taozhaoAvatar, name: "Taozhao Chen", direction: "Trustworthy Embodied AI" }
];

export const getMemberByName = (name) =>
  people.find((person) => person.name === name);

export const getMemberAvatar = (name) => getMemberByName(name)?.avatar;

export default people;
