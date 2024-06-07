import React, { useEffect, useRef } from "react";
import AirDatepicker from "air-datepicker";
import Options from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import localeEn from "air-datepicker/locale/en";
interface DatePickerProps extends Partial<Options> {
  range?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const $input = useRef<HTMLInputElement>(null);
  const dp = useRef<AirDatepicker>();

  useEffect(() => {
    if ($input.current) {
      dp.current = new AirDatepicker($input.current, {
        ...props,
        locale: localeEn,
        dateFormat(date) {
          return date.toLocaleString("en-GB", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          });
        },
      });
    }
  }, [props]);

  useEffect(() => {
    if (dp.current) {
      dp.current.update({ ...props });
    }
  }, [props]);

  return (
    <div className="flex items-center  gap-2">
      <h2 className="text-black text-[16px] leading-4">Chọn ngày : </h2>
      <input
        ref={$input}
        className=" w-1/3 outline-none bg-primary text-black flex-1 text-[16px] leading-4"
      />
    </div>
  );
};

export default DatePicker;
