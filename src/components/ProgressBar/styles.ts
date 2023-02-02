import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 56,
    bottom: 32,
    borderRadius: 32,
    paddingHorizontal: 16,
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "#29292e",
  },
  value: {
    color: "#c4c4cc",
    fontWeight: '400',
    fontSize: 16,
    marginRight: 7
  },
  tracker: {
    flex: 1,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#505059'
  },
  progress: {
    height: 3,
    backgroundColor: '#8287e5',
  },
  progressView: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})