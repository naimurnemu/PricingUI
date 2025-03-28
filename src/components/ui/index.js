import MakeLazy from "../../lib/MakeLazy";

const Button = MakeLazy(() => import("./Button"));
const Tooltip = MakeLazy(() => import("./Tooltip"));
const Select = MakeLazy(() => import("./Select"));
const Subtitle = MakeLazy(() => import("./Subtitle"));
const Info = MakeLazy(() => import("./Info"));
const Title = MakeLazy(() => import("./Title"));
const Grid = MakeLazy(() => import("./Grid"));
const BillButtion = MakeLazy(() => import("./BillButton"));
const DiscountChip = MakeLazy(() => import("./DiscountChip"));
const Price = MakeLazy(() => import("./Price"));
const Chip = MakeLazy(() => import("./Chip"));
const Card = MakeLazy(() => import("./Card"));
const CardAction = MakeLazy(() => import("./CardAction"));
const CardBody = MakeLazy(() => import("./CardBody"));

export {
  Button,
  Tooltip,
  Select,
  Subtitle,
  Info,
  Title,
  Grid,
  BillButtion,
  DiscountChip,
  Price,
  Chip,
  Card,
  CardBody,
  CardAction,
};
