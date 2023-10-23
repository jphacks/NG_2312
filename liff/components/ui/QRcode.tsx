import { QRCodeCanvas } from "qrcode.react";

type Props = {
  text: string;
};
const QRcode = ({ text }: Props) => {
  return (
    <div className="w-[200px] h-[200px]">
      <QRCodeCanvas
        value={text}
        size={200}
        bgColor={"#FFFFFF"}
        fgColor={"#003366"}
        level={"L"}
        includeMargin={true}
      />
    </div>
  );
};

export default QRcode;
