import { StyleSheet, Appearance } from "react-native";

import {
    Colors,
    fontSizes,
    Spaces
} from "./Constants/theme";

const colorScheme = Appearance.getColorScheme();
const light = colorScheme === 'light';

const style = StyleSheet.create({
    screenTitle: {
        color: Colors.primary,
        fontWeight: "bold",
        fontSize: fontSizes.medium
    },

    searchContainer: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: light ? Colors.light : Colors.light,
      width: "80%",
      borderRadius: Spaces.medium,
      borderWidth: light ? fontSizes.small / 100 : null,
      borderColor: light ? Colors.gray : null,
      alignSelf: "center",
      alignItems: "center",
      marginVertical: "5%",
      paddingHorizontal: Spaces.small
    },

    searchField: {
      backgroundColor: light ? Colors.light : Colors.light,
      color: light ? Colors.light : Colors.dark,
      width: "70%"
    },

    title: {
      color: light ? Colors.gray : Colors.gray,
      fontSize: fontSizes.large,
      alignSelf: "center",
      margin: "10%",
      textAlign: "center"
    },

    subHeading: {
      color: light ? Colors.gray : Colors.gray,
      fontSize: fontSizes.medium,
      alignSelf: "center",
      margin: "10%",
      textAlign: "center"
    },

    paragraph: {
      color: light ? Colors.gray : Colors.gray,
      fontSize: fontSizes.medium
    },

    pickerContainer: {
      backgroundColor: Colors.secondary,
      width: "80%",
      alignSelf: "center",
      borderRadius: Spaces.small,
      marginVertical: "5%"
    },

    tabViewItem: {
      width: "100%",
      height: Spaces.xLarge / 1.65
    },

    detailScreen: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      padding: Spaces.large
    },

    table: {
      marginHorizontal: Spaces.medium,
      borderWidth: fontSizes.small / 40,
      borderColor: Colors.gray,
      borderRadius: Spaces.small / 4
    },

    tableColumn: {
      flex: 1,
      padding: Spaces.medium,
      textAlign: 'center',
      color: Colors.gray,
      fontSize: fontSizes.medium,
      fontWeight: "bold"
    },

    row: {
      flexDirection: 'row',
      borderBottomWidth: fontSizes.small / 40,
      borderColor: Colors.gray
    },

    cell: {
      flex: 1,
      padding: Spaces.medium,
      textAlign: 'center',
      color: Colors.gray
    },

    searchResultContainer: {
      flex: 1
    }

})

export default style;
