export const TransitionComponent = () => {
  return (
    <>
      <div className="transitionBlock">
        <input className={"transitionCheck"} type={"checkbox"} />
        <div className="transitionItem transitionItemRed"></div>
        <div className="transitionItem transitionItemGreen"></div>
        <div className="transitionItem transitionItemBlue"></div>
        <div className="transitionItem transitionItemViolet"></div>
        <p className="transitionText">Магия вне хогвартса</p>
      </div>
    </>
  );
};
