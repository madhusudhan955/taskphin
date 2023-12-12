import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../../components/ButtonComponent";
import CardComponent from "../../components/CardComponent";
import PopupComponent from "../../components/PopupComponent";
import { CREATE_A_JOB } from "../../constents";
import {
  createJobAsyncAction,
  deleteJobAsyncAction,
  getJobsAsyncAction,
  updateJobAsyncAction,
} from "../../store/actions/homeActions";
import Step1Component from "./Step1Component";
import Step2Component from "./Step2Component";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.homeReduxState);
  const openPopUp = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onCloseHandler = useCallback(() => {
    setFormData({});
    setStep(1);
    setIsOpen(false);
  }, []);
  const onNextHandler = useCallback(
    (data) => {
      setFormData({ ...formData, ...data });
      setStep(step + 1);
    },
    [formData, step]
  );
  const onSaveHandler = useCallback(
    (data) => {
      const newData = { ...formData, ...data };
      if (newData._id) {
        dispatch(updateJobAsyncAction(newData));
      } else {
        dispatch(createJobAsyncAction(newData));
      }
      setFormData({});
      setStep(1);
      setIsOpen(false);
    },
    [formData, dispatch]
  );
  const onEditHandler = (data) => {
    setFormData(data);
    setStep(1);
    setIsOpen(true);
  };
  const onDeleteHandler = useCallback(
    (id) => {
      dispatch(deleteJobAsyncAction(id));
    },
    [dispatch]
  );
  useEffect(() => {
    dispatch(getJobsAsyncAction());
  }, [dispatch]);
  return (
    <div className="bg-cardGray p-3">
      <ButtonComponent text={CREATE_A_JOB} onClickHandler={openPopUp} />
      <PopupComponent isOpen={isOpen} onClose={onCloseHandler}>
        {step === 1 ? (
          <Step1Component onNextHandler={onNextHandler} formData={formData} />
        ) : (
          <Step2Component onSaveHandler={onSaveHandler} formData={formData} />
        )}
      </PopupComponent>
      <div className="flex justify-evenly flex-wrap">
        {jobs?.map((e) => {
          return (
            <CardComponent
              data={e}
              key={e._id}
              onEditHandler={onEditHandler}
              onDeleteHandler={onDeleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
