const menuIconButton = (props: any) => {
  return (
    <button {...props} className="w-full text-4xl text-white">
      {props.children}
    </button>
  );
};

const menuCrossIconButton = (props: any) => {
  return (
    <button {...props} className="w-full text-[24px] text-black">
      {props.children}
    </button>
  );
};

const titleGrayButton = (props: any) => {
  return (
    <a
      {...props}
      href="#"
      className="text-white rounded-[50px] bg-white/10 transition-all duration-200 hover:bg-white/25 display:px-[64px] table:px-[52px] phone:px-[40px] px-[24px] display:py-[12px] table:py-[10px] phone:py-[8px] py-[6px] display:text-[30px] table:text-[25px] phone:text-[20px] text-[14px] display:leading-[30px] table:leading-[25px] phone:leading-[20px] leading-[20px]"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      {props.children}
    </a>
  );
};

const NButton = {
  menuIconButton: menuIconButton,
  menuCrossIconButton: menuCrossIconButton,
  titleGrayButton: titleGrayButton,
};
export default NButton;
