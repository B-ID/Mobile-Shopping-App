// import { Text } from "@/components/ui/rn-text";
// import { ArrowLeftCircle } from "lucide-react-native";
// import { FC } from "react";
// import { TouchableOpacity, View } from "react-native";
// import Container from "../ui/container";
// import GapComponent from "../ui/gap-component";

// type Props = {
//   title: string;
//   onBackPressAction?(): void;
//   showNavigation?: boolean;
// };

// const ScreenHeader: FC<Props> = ({ onBackPressAction, title, showNavigation}) => {

//   return (
//     <View>
//       <Container>
//         <View className={"flex-row items-center py-2 gap-4"}>
//           <>
//           {showNavigation && (
//             <TouchableOpacity onPress={onBackPressAction} activeOpacity={0.7}>
//               <ArrowLeftCircle size={24} color={"#000"} />
//             </TouchableOpacity>
//           )}
//             <Text variant={"title_medium_semibold"}>{title}</Text>
//           </>
//         </View>
//       </Container>
//       <View className={"border-b border-gray-100"} />
//       <GapComponent height={16} />
//     </View>
//   );
// };

// export default ScreenHeader;

import { Text } from "@/components/ui/rn-text";
import { ArrowLeftCircle } from "lucide-react-native";
import { FC, ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";
import Container from "../ui/container";
import GapComponent from "../ui/gap-component";

type Props = {
  title: string;
  onBackPressAction?(): void;
  showNavigation?: boolean;
  rightElement?: ReactNode; // 👈 New prop
};

const ScreenHeader: FC<Props> = ({ onBackPressAction, title, showNavigation, rightElement }) => {
  return (
    <View>
      <Container>
        <View className="flex-row items-center justify-between py-2">
          <View className="flex-row items-center gap-4">
            {showNavigation && (
              <TouchableOpacity onPress={onBackPressAction} activeOpacity={0.7}>
                <ArrowLeftCircle size={24} color="#000" />
              </TouchableOpacity>
            )}
            <Text variant="title_medium_semibold">{title}</Text>
          </View>
          {/* 👇 Right-side element */}
          {rightElement && <View>{rightElement}</View>}
        </View>
      </Container>
      <View className="border-b border-gray-100" />
      <GapComponent height={16} />
    </View>
  );
};

export default ScreenHeader;

