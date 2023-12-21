import style from "./index.module.scss";
import FloatingInput from "../../atoms/FloatingInput";
import pageData from "./../../../data/leaveForm.json";
import { Button } from "react-bootstrap";

const LeaveForm = () => {
  return (
    <form className={style.leaveRequestForm}>
      <ul>
        <li>
          <span>{pageData?.employeeDetails?.question}</span>
          <div>
            <div className={style.inputGroup}>
              <FloatingInput
                label={pageData?.employeeDetails?.items?.[0]?.title}
                type={"text"}
              />
              <FloatingInput
                label={pageData?.employeeDetails?.items?.[1]?.title}
                type={"text"}
              />
            </div>
            <div className={style.inputGroup}>
              <FloatingInput
                label={pageData?.employeeDetails?.items?.[2]?.title}
                type={"text"}
              />
              <FloatingInput
                label={pageData?.employeeDetails?.items?.[3]?.title}
                type={"text"}
              />
            </div>
            <div className={style.inputGroup}>
              <FloatingInput
                label={pageData?.employeeDetails?.items?.[4]?.title}
                type={"text"}
              />
            </div>
          </div>
        </li>
        <li>
          <span>{pageData?.leaveDetails?.question}</span>
          <div>
            <div className={style.inputGroup}>
              <FloatingInput
                label={pageData?.leaveDetails?.items?.[1]?.title}
                type={"text"}
              />
              <FloatingInput
                label={pageData?.leaveDetails?.items?.[2]?.title}
                type={"text"}
              />
            </div>
            <FloatingInput
              label={pageData?.leaveDetails?.items?.[3]?.title}
              type={"text"}
            />
          </div>
        </li>
        <li>
          <span>{pageData?.additionalDetails?.question}</span>
          <div>
            <div className={style.inputGroup}>
              <FloatingInput
                label={pageData?.additionalDetails?.items?.[0]?.title}
                type={"text"}
              />
              <FloatingInput
                label={pageData?.additionalDetails?.items?.[1]?.title}
                type={"text"}
              />
            </div>
          </div>
        </li>
      </ul>
      <div className={style.btnContainer}>
        <Button variant='primary' type='submit'>
          submit
        </Button>
      </div>
    </form>
  );
};
export default LeaveForm;
