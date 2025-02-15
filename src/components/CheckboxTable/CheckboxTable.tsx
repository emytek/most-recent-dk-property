import { Checkbox } from "antd";

import classes from "./CheckboxTable.module.css";
import useCheckBoxStore from "../../store/CheckboxStore";

export default function CheckboxTable() {
  const isChecked1 = useCheckBoxStore((state) => state.isChecked1);
  const isChecked2 = useCheckBoxStore((state) => state.isChecked2);
  const isChecked3 = useCheckBoxStore((state) => state.isChecked3);
  const isChecked4 = useCheckBoxStore((state) => state.isChecked4);
  const isChecked5 = useCheckBoxStore((state) => state.isChecked5);
  const isChecked6 = useCheckBoxStore((state) => state.isChecked6);
  const isChecked7 = useCheckBoxStore((state) => state.isChecked7);
  const isChecked8 = useCheckBoxStore((state) => state.isChecked8);
  const onChangeChecked1 = useCheckBoxStore((state) => state.onChangeCheck1);
  const onChangeChecked2 = useCheckBoxStore((state) => state.onChangeCheck2);
  const onChangeChecked3 = useCheckBoxStore((state) => state.onChangeCheck3);
  const onChangeChecked4 = useCheckBoxStore((state) => state.onChangeCheck4);
  const onChangeChecked5 = useCheckBoxStore((state) => state.onChangeCheck5);
  const onChangeChecked6 = useCheckBoxStore((state) => state.onChangeCheck6);
  const onChangeChecked7 = useCheckBoxStore((state) => state.onChangeCheck7);
  const onChangeChecked8 = useCheckBoxStore((state) => state.onChangeCheck8);

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th className={classes.th} colSpan={4}>
            Prices
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={classes.td}>
            <Checkbox
              checked={isChecked1}
              onChange={onChangeChecked1}
              value="500k"
              className="font-outfit"
            >
              500k
            </Checkbox>
          </td>
          <td className={classes.td}>
            <Checkbox
              checked={isChecked2}
              onChange={onChangeChecked2}
              value="1M"
              className="font-outfit"
            >
              1M
            </Checkbox>
          </td>
          <td className={classes.td}>
            <Checkbox
              checked={isChecked3}
              onChange={onChangeChecked3}
              value="2.5M"
              className="font-outfit"
            >
              2.5M
            </Checkbox>
          </td>
          <td className={classes.td}>
            <Checkbox
              checked={isChecked4}
              onChange={onChangeChecked4}
              value="5M"
              className="font-outfit"
            >
              5M
            </Checkbox>
          </td>
        </tr>

        <tr>
          <td className={classes.td}>
            <Checkbox
              checked={isChecked5}
              onChange={onChangeChecked5}
              value="7.5M"
              className="font-outfit"
            >
              7.5M
            </Checkbox>
          </td>

          <td className={classes.td}>
            <Checkbox
              checked={isChecked6}
              onChange={onChangeChecked6}
              value="10M"
              className="font-outfit"
            >
              10M
            </Checkbox>
          </td>

          <td className={classes.td}>
            <Checkbox
              checked={isChecked7}
              onChange={onChangeChecked7}
              value="15M"
              className="font-outfit"
            >
              15M
            </Checkbox>
          </td>

          <td className={classes.td}>
            <Checkbox
              checked={isChecked8}
              onChange={onChangeChecked8}
              value="20M"
              className="font-outfit"
            >
              20M
            </Checkbox>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
