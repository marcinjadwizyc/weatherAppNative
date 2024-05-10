import { ReactNode } from "react";
import { ImageBackground, View } from "react-native";
import { containerStyles } from "./Container.styles";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  const image = {
    uri: "https://images.unsplash.com/photo-1491226669704-7d90b66ad115?q=80&w=600",
  };

  return (
    <View style={containerStyles.container}>
      <ImageBackground source={image} style={containerStyles.background}>
        <View style={containerStyles.content}>{children}</View>
      </ImageBackground>
    </View>
  );
};
