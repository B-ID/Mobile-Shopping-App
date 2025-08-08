import { Text } from "@/components/ui/rn-text";
import { ArrowLeftCircle } from "lucide-react-native";
import { FC, ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";
import Container from "../ui/container";

type Props = {
  title: string;
  onBackPressAction?(): void;
  showNavigation?: boolean;
  rightElement?: ReactNode;
};

const ScreenHeader: FC<Props> = ({
  onBackPressAction,
  title,
  showNavigation,
  rightElement,
}) => {
  return (
    <View>
      <Container>
        <View className="flex-row items-center justify-between py-2">
          <View className="flex-row items-center gap-4">
            {showNavigation && (
              <TouchableOpacity
                hitSlop={20}
                onPress={onBackPressAction}
                activeOpacity={0.7}
              >
                <ArrowLeftCircle size={30} color="#181818" />
              </TouchableOpacity>
            )}
            <Text variant="title_medium_semibold">{title}</Text>
          </View>
          {rightElement && <View>{rightElement}</View>}
        </View>
      </Container>
      <View className="border-b border-gray-100" />
    </View>
  );
};

export default ScreenHeader;
