import style from "./index.module.scss";

const LeaveTab = () => {
  return (
    <div className={style.leaveTab}>
      <img src='/images/officer.png' alt='' />
      <div className={style.info}>
        <div>
          <h5>{"Arjun Nayyar"}</h5>
          <p>
            <span>From:</span>
            26-11-2001
          </p>
          <p>
            <span>To:</span>
            26-11-2001
          </p>
        </div>
        <p className={style.leaveStatus}>{"Urgent"}</p>
      </div>
    </div>
  );
};

export default LeaveTab;
