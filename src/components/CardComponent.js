import React from "react";
import { NETFLIX_ICON } from "../assets";
import ButtonComponent from "./ButtonComponent";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
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
              <div className="text-base font-normal text-fontSub">
                {"Part-Time(9.00 am - 5.00 pm IST)"}
              </div>
            </div>
            <div className="pb-1">
              <div className="text-base font-normal text-fontSub">
                {`Experience (${experience.minimum || 0} - ${
                  experience.maximum || 0
                } Years)`}
              </div>
            </div>
            <div className="pb-1">
              <div className="text-base font-normal text-fontSub">
                INR (&#8377;)
                {`${salary.minimum?.toLocaleString() || 0} - ${
                  salary.maximum?.toLocaleString() || 0
                } / Month`}
              </div>
            </div>
            <div className="pb-3">
              <div className="text-base font-normal text-fontSub">{`51-${
                totalEmployee || 0
              } employees`}</div>
            </div>
            <div className="flex gap-3">
              {applyType === "quickApply" ? (
                <ButtonComponent text={"Apply Now"} />
              ) : (
                <ButtonComponent text={"External Apply"} variant="outlined" />
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-end items-center gap-1">
            <FaEdit
              size={30}
              className="fill-primary hover:cursor-pointer"
              title="Edit"
              onClick={() => onEditHandler(data)}
            />
            <MdDeleteForever
              size={37}
              className="fill-fontError hover:cursor-pointer"
              title="Delete"
              onClick={() => onDeleteHandler(_id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
