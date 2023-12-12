import React from "react";
import { useForm } from "react-hook-form";
import ButtonComponent from "../../components/ButtonComponent";
import {
  ASTERISK,
  COMPANY_NAME,
  CREATE_A_JOB,
  INDUSTRY,
  JOB_TITLE,
  LOCATION,
  NEXT,
  PLACEHOLDER_COMPANY_NAME,
  PLACEHOLDER_INDUSTRY,
  PLACEHOLDER_JOB_TITLE,
  PLACEHOLDER_LOCATION,
  PLACEHOLDER_REMOTE_TYPE,
  REMOTE_TYPE,
  STEP_1,
} from "../../constents";
import { errorInputStyles } from "../../utils";

function Step1Component({
  onNextHandler,
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
              <div className="text-base font-medium">{STEP_1}</div>
            </div>
            <div className="mb-3">
              <label
                className="block text-sm text-fontDark font-medium mb-0.5"
                htmlFor="jobTitle"
              >
                {JOB_TITLE}
                <span className="text-fontError">{ASTERISK}</span>
              </label>
              <input
                className={`w-full h-inputHeightCustom px-2 border rounded-md  placeholder-fontPlaceholder font-normal ${errorInputStyles(
                  errors?.jobTitle?.message
                )}`}
                type="text"
                id="jobTitle"
                placeholder={PLACEHOLDER_JOB_TITLE}
                {...register("jobTitle", {
                  required: {
                    value: true,
                    message: "Please fill the Job title.",
                  },
                })}
              />
              <p className="text-fontError">{errors?.jobTitle?.message}</p>
            </div>
            <div className="mb-3">
              <label
                className="block text-sm text-fontDark font-medium mb-0.5"
                htmlFor="companyName"
              >
                {COMPANY_NAME}
                <span className="text-fontError">{ASTERISK}</span>
              </label>
              <input
                className={`w-full h-inputHeightCustom px-2 border rounded-md  placeholder-fontPlaceholder font-normal ${errorInputStyles(
                  errors?.companyName?.message
                )}`}
                type="text"
                id="companyName"
                placeholder={PLACEHOLDER_COMPANY_NAME}
                {...register("companyName", {
                  required: {
                    value: true,
                    message: "Please fill the Company name.",
                  },
                })}
              />
              <p className="text-fontError">{errors?.companyName?.message}</p>
            </div>
            <div className="mb-3">
              <label
                className="block text-sm text-fontDark font-medium mb-0.5"
                htmlFor="industry"
              >
                {INDUSTRY}
                <span className="text-fontError">{ASTERISK}</span>
              </label>
              <input
                className={`w-full h-inputHeightCustom px-2 border rounded-md  placeholder-fontPlaceholder font-normal ${errorInputStyles(
                  errors?.industry?.message
                )}`}
                type="text"
                id="industry"
                placeholder={PLACEHOLDER_INDUSTRY}
                {...register("industry", {
                  required: {
                    value: true,
                    message: "Please fill the Industry.",
                  },
                })}
              />
              <p className="text-fontError">{errors?.industry?.message}</p>
            </div>
            <div className="mb-3 flex gap-3 w-full">
              <div className="w-full">
                <label
                  className="block text-sm text-fontDark font-medium mb-0.5"
                  htmlFor="location"
                >
                  {LOCATION}
                </label>
                <input
                  className="w-full h-inputHeightCustom px-2 border border-cardGray rounded-md focus:outline-none focus:border-primary placeholder-fontPlaceholder font-normal"
                  type="text"
                  id="location"
                  placeholder={PLACEHOLDER_LOCATION}
                  {...register("location")}
                />
              </div>
              <div className="w-full">
                <label
                  className="block text-sm text-fontDark font-medium mb-0.5"
                  htmlFor="remoteType"
                >
                  {REMOTE_TYPE}
                </label>
                <input
                  className="w-full h-inputHeightCustom px-2 border border-cardGray rounded-md focus:outline-none focus:border-primary placeholder-fontPlaceholder font-normal"
                  type="text"
                  id="remoteType"
                  placeholder={PLACEHOLDER_REMOTE_TYPE}
                  {...register("remoteType")}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <ButtonComponent
              text={NEXT}
              onClickHandler={handleSubmit(onNextHandler)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Step1Component;
