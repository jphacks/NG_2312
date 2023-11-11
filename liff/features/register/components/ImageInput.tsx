import { ChangeEvent } from "react";
import { readBarcode } from "../api/readBarcode";
import { BookInfo } from "../types";

type Props = {
  setBookInfos: (bookInfos: BookInfo[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: Error) => void;
};

const ImageInput = ({ setBookInfos, setIsLoading, setError }: Props) => {
  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    try {
      if (!event.target.files || !event.target.files[0]) {
        throw new Error("ファイルが存在しません");
      }
      const imgFile = event.target.files[0];

      const formData = new FormData();
      formData.append("image", imgFile);

      const resBookInfos = await readBarcode(formData);

      setBookInfos(resBookInfos);
    } catch (error) {
      setError(new Error("not barcode"));
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative w-2/3 border-b-2 border-main-color text-main-color text-base cursor-pointer">
      <input
        id="file-input"
        className="opacity-0 absolute top-0 left-0 z-10 w-full h-full"
        type="file"
        accept="image/*"
        name="barcodeImage"
        onChange={(e) => uploadImage(e)}
      />
      バーコード写真から本を登録
    </div>
  );
};

export default ImageInput;
