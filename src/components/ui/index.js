import MakeLazy from "../../lib/MakeLazy";

const Button = MakeLazy(() => import("./Button"));
const Text = MakeLazy(() => import("./Text"));
const Tooltip = MakeLazy(() => import("./Tooltip"));
const SelectInput = MakeLazy(() => import("./SelectInput"));
const Subtitle = MakeLazy(() => import("./Subtitle"));
const Info = MakeLazy(() => import("./Info"));

export { Button, Text, Tooltip, SelectInput, Subtitle, Info };
