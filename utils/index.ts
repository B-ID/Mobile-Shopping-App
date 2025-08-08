import { FONT } from "@/constants/font-family";
import { showMessage, MessageType } from "react-native-flash-message";

const toastConfig = {
  style: {
    paddingVertical: 20,
  },
  titleStyle: {
    fontFamily: FONT.MontserratSemiBold,
  },
  textStyle: {
    fontFamily: FONT.MontserratRegular,
    fontSize: 14,
  },
};

const showToast = ({
  title = "Notification",
  description,
  type = "default",
}: {
  title: string;
  description: string;
  type: MessageType;
}) => {
  return showMessage({
    message: title,
    description,
    type,
    duration: 3000,
    icon: "auto",
    ...toastConfig,
  });
};




const formatPrice = (price: number, currency: string = "USD"): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(price);
};




export { showToast, formatPrice };
