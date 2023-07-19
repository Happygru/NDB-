const menuA = (props: any) => {
  return (
    <p className="  text-[#fff] font-[Suisse BP Int'l] display:text-[24px] table:text-xl phone:text-base text-sm font-semibold display:leading-8">
      {props.children}
    </p>
  );
};

const titleText = (props: any) => {
  return (
    <p
      style={{ color: props.color }}
      className=" !font-[Suisse BP Int'l] display:text-[72px] table:text-[60px] phone:text-[48px] text-[30px] !font-normal display:leading-[72px] table:leading-[60px] phone:leading-[48px] leading-[36px]  w-full"
    >
      {props.children}
    </p>
  );
};

const titleDText = (props: any) => {
  return (
    <p className="  text-[#A0A0A0] !font-[Suisse BP Int'l] display:text-[60px] table:text-[48px] phone:text-[30px] text-[24px] !font-light display:leading-[60px] table:leading-[56px] phone:leading-[42px] leading-[32px]  w-full">
      {props.children}
    </p>
  );
};

const NFont = {
  menuA: menuA,
  titleText: titleText,
  titleDText: titleDText,
};
export default NFont;
