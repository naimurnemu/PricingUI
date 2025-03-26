import MakeLazy from "../lib/MakeLazy";

const BillSelection = MakeLazy(() => import("./BillSelection"));
const BillTable = MakeLazy(() => import("./BillTable"));

export { BillSelection, BillTable };
