import React from "react";
import { useForm } from "react-hook-form";
import ButtonComponent from "../../components/ButtonComponent";
import {
  APPLY_TYPE,
  ASTERISK,
  CREATE_A_JOB,
  EXPERIENCE,
  EXTERNAL_APPLY,
  MAXIMUM,
  MINIMUM,
  PLACEHOLDER_TOTAL_EMPLOYEE,
  QUICK_APPLY,
  SALARY,
  SAVE,
  STEP_2,
  TOTAL_EMPLOYEE,
} from "../../constents";

function Step2Component({
  onSaveHandler,
  formData,
  width = "577px",
  height = "594px",
}) {
  const form = useForm({ defaultValues: formData?._id ? formData : {} });
  const { handleSubmit, register, formState } = form;
  const { errors } = formState;
  return (
    <div>
      <form className="w-full" noValidate>
        <div
          className="card p-4 flex flex-col justify-between"
          style={{ width, height }}
        >
          <div>
            <div className="flex justify-between pb-3">
              <div className="text-xl font-normal">{CREATE_A_JOB}</div>
              <div className="text-base font-medium">{STEP_2}</div>
            </div>
            <div className="mb-3 flex gap-3 w-full">
              <div className="w-full">
                <label
                  className="block text-sm text-fontDark font-medium mb-0.5"
                  htmlFor="minimum"
                >
                  {EXPERIENCE}
                </label>
                <input
                  className="w-full h-inputHeightCustom px-2 border border-cardGray rounded-md focus:outline-none focus:border-primary placeholder-fontPlaceholder font-normal"
                  type="number"
                  id="minimum"
                  placeholder={MINIMUM}
                  {...register("experience.minimum", {
                    valueAsNumber: true,
                  })}
                />
              </div>
              <div className="w-full">
                <label
                  className="text-sm text-fontDark font-medium mb-0.5 opacity-0 pointer-events-none"
                  htmlFor="maximum"
                >
                  {EXPERIENCE}
                </label>
                <input
                  className="w-full h-inputHeightCustom px-2 border border-cardGray rounded-md focus:outline-none focus:border-primary placeholder-fontPlaceholder font-normal"
                  type="number"
                  id="maximum"
                  placeholder={MAXIMUM}
                  {...register("experience.maximum", {
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div className="mb-3 flex gap-3 w-full">
              <div className="w-full">
                <label
                  className="block text-fontDark text-sm font-medium mb-0.5"
                  htmlFor="minimum"
                >
                  {SALARY}
                </label>
                <input
                  className="w-full h-inputHeightCustom px-2 border border-cardGray rounded-md focus:outline-none focus:border-primary placeholder-fontPlaceholder font-normal"
                  type="number"
                  id="minimum"
                  placeholder={MINIMUM}
                  {...register("salary.minimum", {
                    valueAsNumber: true,
                  })}
                />
              </div>
              <div className="w-full">
                <label
                  className="opacity-0 text-fontDark pointer-events-none text-sm font-medium mb-0.5"
                  htmlFor="maximum"
                >
                  {SALARY}
                </label>
                <input
                  className="w-full h-inputHeightCustom px-2 border border-cardGray rounded-md focus:outline-none focus:border-primary placeholder-fontPlaceholder font-normal"
                  type="number"
                  id="maximum"
                  placeholder={MAXIMUM}
                  {...register("salary.maximum", {
                    valueAsNumber: true,
                  })}
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                className="block text-fontDark text-sm font-medium mb-0.5"
                htmlFor="totalEmployee"
              >
                {TOTAL_EMPLOYEE}
              </label>
              <input
                className="w-full h-inputHeightCustom px-2 border border-cardGray rounded-md focus:outline-none focus:border-primary placeholder-fontPlaceholder font-normal"
                type="number"
                id="totalEmployee"
                placeholder={PLACEHOLDER_TOTAL_EMPLOYEE}
                {...register("totalEmployee", {
                  valueAsNumber: true,
                })}
              />
            </div>
            <div>
              <div className="mb-4">
                <label
                  className="block text-fontDark text-sm font-medium mb-0.5"
                  htmlFor="applyType"
                >
                  {APPLY_TYPE}
                  <span className="text-fontError">{ASTERISK}</span>
                </label>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="quickApply"
                    value="quickApply"
                    name="applyType"
                    className="mr-0.5 w-2 h-2"
                    {...register("applyType", {
                      required: {
                        value: true,
                        message: "Please select Apply type.",
                      },
                    })}
                  />
                  <label
                    htmlFor="quickApply"
                    className="mr-2  cursor-pointer text-fontPlaceholder"
                  >
                    {QUICK_APPLY}
                  </label>
                  <input
                    type="radio"
                    id="externalApply"
                    value="externalApply"
                    name="applyType"
                    className="mr-0.5 w-2 h-2"
                    {...register("applyType", {
                      required: {
                        value: true,
                        message: "Please select Apply type.",
                      },
                    })}
                  />
                  <label
                    htmlFor="externalApply"
                    className="cursor-pointer text-fontPlaceholder"
                  >
                    {EXTERNAL_APPLY}
                  </label>
                </div>
                <p className="text-fontError">{errors?.applyType?.message}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <ButtonComponent
              text={SAVE}
              onClickHandler={handleSubmit(onSaveHandler)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Step2Component;
