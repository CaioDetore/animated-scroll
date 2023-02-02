import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated, {
  BounceIn,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { styles } from "./styles";

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

interface ProgressBarProps {
  value: number;
  onMoveToTop: () => void;
}
export function ProgressBar({ value, onMoveToTop }: ProgressBarProps) {
  const widhtContainer = useSharedValue(200);

  const endReached = value >= 95;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widhtContainer.value,
    };
  });

  useEffect(() => {
    widhtContainer.value = withSpring(endReached ? 56 : 200, {
      mass: 0.4,
    });
  }, [value]);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {endReached ? (
        <TouchableOpacityAnimated
          entering={BounceIn}
          exiting={FadeOut}
          onPress={onMoveToTop}
        >
          <Feather name="arrow-up" size={24} color="#c4c4cc" />
        </TouchableOpacityAnimated>
      ) : (
        <Animated.View style={styles.progressView} entering={FadeIn}>
          <Text style={styles.value}>{value.toFixed(0)}%</Text>
          <View style={styles.tracker}>
            <View style={[styles.progress, { width: `${value}%` }]} />
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
}
