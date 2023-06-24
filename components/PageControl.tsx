import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";

interface PageControlProps {
  children: React.ReactNode;
}

const PageControl: React.FC<PageControlProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = React.Children.toArray(children).length;

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / Dimensions.get("window").width);
    setCurrentPage(page);
  };

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < pageCount; i++) {
      const dotStyle =
        i === currentPage ? styles.activeDot : styles.inactiveDot;
      dots.push(<View key={i} style={[styles.dot, dotStyle]} />);
    }
    return dots;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={200}
      >
        {React.Children.toArray(children).map((child, index) => (
          <View key={index} style={styles.pageContainer}>
            {child}
          </View>
        ))}
      </ScrollView>
      {React.Children.toArray.length > 1 && (
        <View style={styles.dotsContainer}>{renderDots()}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    width: Dimensions.get("window").width,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "blue",
  },
  inactiveDot: {
    backgroundColor: "lightgray",
  },
});

export default PageControl;
