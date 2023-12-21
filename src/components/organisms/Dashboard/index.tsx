import { Fragment, useMemo } from "react";
import Banner from "../../molecules/Banner";
import Card from "../../molecules/Card";
import style from "./index.module.scss";
import leaveList from "./../../../data/leaveList.json";
import DashboardMidSection from "../../molecules/DashboardMidSection";

const Dashboard = () => {
  const now = new Date();
  const hours = now.getHours();

  const greet = useMemo(() => {
    if (hours >= 12 && hours < 17) {
      return "Afternoon";
    } else if (hours >= 17 && hours <= 24) {
      return "Evening";
    } else {
      return "Morning";
    }
  }, [hours]);

  return (
    <div className={style.dashboardContainer}>
      <div className={style.leave}>
        <Banner heading={`Good ${greet}`} subHeading={"Ashish Jaryal"} />
        <div className={style.leaveCard}>
          {leaveList.leaveList.map((leave: any) => (
            <Fragment key={leave.leaveHeading}>
              <Card
                cardSubHeading={leave.leaveCount}
                cardHeading={leave.leaveHeading}
                cardIcon={leave.leaveIcon}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <DashboardMidSection />
    </div>
  );
};

export default Dashboard;
