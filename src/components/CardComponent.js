import React from "react";
import { NETFLIX_ICON } from "../assets";
import ButtonComponent from "./ButtonComponent";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {
  APPLY_NOW,
  DELETE,
  EDIT,
  EMPLOYEES,
  EXPERIENCE,
  EXTERNAL_APPLY,
  INR,
  MONTH,
  TIME,
  YEARS,
} from "../constents";
function CardComponent({
  data,
  onEditHandler,
  onDeleteHandler,
  width = "840px",
  height = "352px",
}) {
  const {
    _id,
    jobTitle,
    companyName,
    industry,
    location,
    remoteType,
    totalEmployee,
    applyType,
    experience,
    salary,
  } = data;
  return (
    <div
      style={{ width, height }}
      className="bg-cardWhite px-3 py-2 border border-solid border-cardGray rounded-lg my-2"
    >
      <div className="flex justify-between">
        <div className="flex gap-1">
          <img
            src={NETFLIX_ICON}
            alt="icon-logo"
            className="w-12 h-12 rounded-md"
          />
          <div>
            <div className="pb-3">
              <div className="text-2xl font-normal">{jobTitle}</div>
              <div className="text-base font-normal">
                {`${companyName}-${industry}`}
              </div>
              <div className="text-base font-normal text-fontPlaceholder">
                {`${location}(${remoteType})`}
              </div>
            </div>
            <div className="pb-1">
              <div className="text-base font-normal text-fontSub">{TIME}</div>
            </div>
            <div className="pb-1">
              <div className="text-base font-normal text-fontSub">
                {`${EXPERIENCE} (${experience.minimum || 0} - ${
                  experience.maximum || 0
                } ${YEARS})`}
              </div>
            </div>
            <div className="pb-1">
              <div className="text-base font-normal text-fontSub">
                {INR} (&#8377;)
                {`${salary.minimum?.toLocaleString() || 0} - ${
                  salary.maximum?.toLocaleString() || 0
                } / ${MONTH}`}
              </div>
            </div>
            <div className="pb-3">
              <div className="text-base font-normal text-fontSub">{`51-${
                totalEmployee || 0
              } ${EMPLOYEES}`}</div>
            </div>
            <div className="flex gap-3">
              {applyType === "quickApply" ? (
                <ButtonComponent text={APPLY_NOW} />
              ) : (
                <ButtonComponent text={EXTERNAL_APPLY} variant="outlined" />
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-end items-center gap-1">
            <FaEdit
              size={30}
              className="fill-primary hover:cursor-pointer"
              title={EDIT}
              onClick={() => onEditHandler(data)}
            />
            <MdDeleteForever
              size={37}
              className="fill-fontError hover:cursor-pointer"
              title={DELETE}
              onClick={() => onDeleteHandler(_id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
