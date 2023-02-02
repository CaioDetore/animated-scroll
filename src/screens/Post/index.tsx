import React, { useState, useRef } from "react";
import { ScrollView, Text, View, useWindowDimensions } from "react-native";

import { ProgressBar } from "../../components/ProgressBar";

import { styles } from "./styles";

type ScrollProps = {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
};

export function Post() {
  const scrollRef = useRef<ScrollView>(null);

  const dimensions = useWindowDimensions();
  const [percentage, setPercentage] = useState(0);

  function scrollPercentage({
    contentSize,
    contentOffset,
    layoutMeasurement,
  }: ScrollProps) {
    const visibleContent = Math.ceil(
      (dimensions.height / contentSize.height) * 100
    );

    const value =
      ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;

    setPercentage(value <= visibleContent ? 0 : value);
  }

  function handleScrollMoveTop() {
    scrollRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ paddingVertical: 30 }}
        showsVerticalScrollIndicator={false}
        onScroll={(event) => scrollPercentage(event.nativeEvent)}
      >
        <Text style={styles.title}>Lorem Ipsum</Text>

        <View>
          <Text style={styles.paragraph}>
            Ex labore labore ipsum cupidatat commodo cillum minim et sit dolor
            exercitation nostrud incididunt adipisicing. Culpa laboris minim
            dolor culpa consequat proident dolore eiusmod irure sit aliqua qui.
            Sunt deserunt aliquip duis occaecat. Et ut consequat esse
            consectetur proident tempor aliqua proident. Cillum est excepteur id
            pariatur minim cupidatat ut culpa irure esse voluptate proident
            consectetur.
          </Text>

          <Text style={styles.paragraph}>
            Ex labore labore ipsum cupidatat commodo cillum minim et sit dolor
            exercitation nostrud incididunt adipisicing. Culpa laboris minim
            dolor culpa consequat proident dolore eiusmod irure sit aliqua qui.
            Sunt deserunt aliquip duis occaecat. Et ut consequat esse
            consectetur proident tempor aliqua proident. Cillum est excepteur id
            pariatur minim cupidatat ut culpa irure esse voluptate proident
            consectetur. Ex labore labore ipsum cupidatat commodo cillum minim
            et sit dolor exercitation nostrud incididunt adipisicing. Culpa
            laboris minim dolor culpa consequat proident dolore eiusmod irure
            sit aliqua qui. Sunt deserunt aliquip duis occaecat. Et ut consequat
            esse consectetur proident tempor aliqua proident. Cillum est
            excepteur id pariatur minim cupidatat ut culpa irure esse voluptate
            proident consectetur.
          </Text>

          <Text style={styles.paragraph}>
            Ex labore labore ipsum cupidatat commodo cillum minim et sit dolor
            exercitation nostrud incididunt adipisicing. Culpa laboris minim
            dolor culpa consequat proident dolore eiusmod irure sit aliqua qui.
            Sunt deserunt aliquip duis occaecat. Et ut consequat esse
            consectetur proident tempor aliqua proident. Cillum est excepteur id
            pariatur minim cupidatat ut culpa irure esse voluptate proident
            consectetur.
          </Text>

          <Text style={styles.paragraph}>
            Ex labore labore ipsum cupidatat commodo cillum minim et sit dolor
            exercitation nostrud incididunt adipisicing. Culpa laboris minim
            dolor culpa consequat proident dolore eiusmod irure sit aliqua qui.
            Sunt deserunt aliquip duis occaecat. Et ut consequat esse
            consectetur proident tempor aliqua proident. Cillum est excepteur id
            pariatur minim cupidatat ut culpa irure esse voluptate proident
            consectetur.
          </Text>

          <Text style={styles.paragraph}>
            Ex labore labore ipsum cupidatat commodo cillum minim et sit dolor
            exercitation nostrud incididunt adipisicing. Culpa laboris minim
            dolor culpa consequat proident dolore eiusmod irure sit aliqua qui.
            Sunt deserunt aliquip duis occaecat. Et ut consequat esse
            consectetur proident tempor aliqua proident. Cillum est excepteur id
            pariatur minim cupidatat ut culpa irure esse voluptate proident
            consectetur.
          </Text>

          <Text style={styles.paragraph}>
            Ex labore labore ipsum cupidatat commodo cillum minim et sit dolor
            exercitation nostrud incididunt adipisicing. Culpa laboris minim
            dolor culpa consequat proident dolore eiusmod irure sit aliqua qui.
            Sunt deserunt aliquip duis occaecat. Et ut consequat esse
            consectetur proident tempor aliqua proident. Cillum est excepteur id
            pariatur minim cupidatat ut culpa irure esse voluptate proident
            consectetur.
          </Text>
        </View>
      </ScrollView>
      <ProgressBar value={percentage} onMoveToTop={handleScrollMoveTop} />
    </View>
  );
}
