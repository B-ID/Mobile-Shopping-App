import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../ui/rn-text";
import { LucideIcon } from "lucide-react-native"; 

type EmptyStateProps = {
  icon: LucideIcon;
  message?: string;
};

export const EmptyState: React.FC<EmptyStateProps> = ({ icon: Icon, message }) => {
  return (
    <View className="items-center justify-center p-5">
      <Icon size={48} color="#9CA3AF" /> 
      <Text variant="subtitle" style={styles.text}>{message || "No items found"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    marginTop: 12,
    textAlign: "center",
  },
});
