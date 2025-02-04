import NaijaStates from "naija-state-local-government";
import { Select } from "antd";
import usePropertyStore from "../../store/PropertyStore";

type Props = {
  className?: string;
};

export default function SelectState({ className }: Props) {
  const state = usePropertyStore((prev) => prev.state);
  const onChangeState = usePropertyStore((prev) => prev.onChangeState);

  return (
    <Select
      placeholder="Select states to search properties"
      options={NaijaStates.states()?.map((state: string) => {
        return {
          value: state,
          label: state,
        };
      })}
      allowClear
      showSearch
      optionFilterProp="label"
      style={{ height: "45px" }}
      defaultValue={NaijaStates.states()[24]}
      value={state}
      onChange={onChangeState}
      className={`select_input ${className}`}
    />
  );
}
