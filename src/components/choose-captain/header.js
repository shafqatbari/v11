import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SvgImage from '../../helper/SvgImage';
import colors from '../../helper/colors';
import { ArrowBack } from '../../helper/CommonImagesPath';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ position: "absolute", marginLeft: -170 }}>
            <TouchableOpacity style={{ height: 20, width: 20, }}>
              <SvgImage
                source={ArrowBack}
                style={{ height: 20, width: 20, color: colors.White, position: "absolute", }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ position: "absolute", marginLeft: -110, alignItems: 'center', marginTop: -18 }}>
            <Text style={styles.textStyle}>{props.header1}   </Text>
            <Text style={styles.textStyle}>{props.header2} </Text>
          </View>
          <View style={{ marginLeft: 130, position: "absolute", }}>
            <Text style={{ color: "white", marginTop: -3 }}>profile </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 125,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#522F91",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  textStyle: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
    marginTop: -5
  }
})
