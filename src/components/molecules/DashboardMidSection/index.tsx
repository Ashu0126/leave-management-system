import style from "./index.module.scss";
import LeaveTab from "../../atoms/LeaveTab";
import LeaveForm from "../LeaveForm";
import CarouselWrapper from "../../atoms/CarouselWrapper";
import Calender from "../../atoms/Calender";

const DashboardMidSection = () => {
  return (
    <div className={style.basicInfo}>
      <div className={style.announcement}>
        <h3>{"Announcement"}</h3>
        <CarouselWrapper />
      </div>
      <div className={style.teamLeave}>
        <h3>{"Team Leaves"}</h3>
        <section>
          <LeaveTab />
          <LeaveTab />
          <LeaveTab />
          <LeaveTab />
          <LeaveTab />
        </section>
      </div>
      <div className={style.leaveRequest}>
        <h3>{"Leave Request"}</h3>
        <LeaveForm />
      </div>
      <div className={style.leaveCalender}>
        <h3>{"Leave Calender"}</h3>
        <Calender nextBtn={false} prevBtn={false} />
      </div>
    </div>
  );
};

export default DashboardMidSection;
