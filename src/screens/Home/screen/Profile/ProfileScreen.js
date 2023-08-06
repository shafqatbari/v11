import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Header from "../../../../components/choose-captain/header";
import colors from "../../../../helper/colors";
import { strings } from "../../../../helper/Localization";
import TextInputView from "../../../../components/TextInputView";

const ProfileScreen = () => {
  const header = "My Profile";
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header header={header} />
      </View>

      <View style={styles.ProfileStyle}>
        <View style={styles.container}>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
            }}
            style={{
              flex: 0.113,
              position: "absolute",
              width: 130,
              height: 130,
              borderRadius: 200 / 2,
              borderWidth: 1,
              borderColor: "black",
            }}
          />
          <View style={styles.Inner_Img}>
            <View
              style={{
                flex: 1,
                width: 38,
                height: 38,
                borderRadius: 200 / 2,
                borderWidth: 1,
                backgroundColor: "white",
                alignItems: "center",
                borderColor: "black",
              }}
            >
              <Image source={require("../../../../assets/images/cam.png")} />
            </View>
          </View>
          <View style={{ flex: 1, position: "absolute", top: "21%" }}>
            <View style={{ flex: 2, top: "87%", width: 135 }}>
              <TextInputView placeholder={strings.firstName} />
            </View>
            <View style={{ flex: 3, top: "76%", width: 180, right: -170 }}>
              <TextInputView placeholder={strings.lastName} />
            </View>
            <View style={{ flex: 4, top: "75%", width: 135 }}>
              <TextInputView placeholder={strings.gender} />
            </View>
            <View style={{ flex: 5, top: "64%", width: 180, right: -170 }}>
              <TextInputView placeholder={"+92 3000000000"} />
            </View>
            <View style={{ flex: 6, top: "63%", width: 350 }}>
              <TextInputView placeholder={strings.emailId} />
            </View>
            <View style={{ flex: 7, top: "65%", width: 350 }}>
              <TextInputView placeholder={strings.address} />
            </View>
            <View style={{ flex: 8, top: "65%", width: 175 }}>
              <TextInputView placeholder={strings.matchesPlayed} />
            </View>
            <View style={{ flex: 9, top: "54%", width: 163, right: -190 }}>
              <TextInputView placeholder={strings.win} />
            </View>
            <View style={{ flex: 10, top: "53%", width: 350 }}>
              <TextInputView placeholder={strings.currentBalance} />
            </View>
          </View>
          <View
            style={{ flex: 1, top: "83%", left: "7%", position: "absolute" }}
          >
            <Text style={{ fontWeight: "bold" }}>{strings.paymentMethods}</Text>
          </View>
          <View
            style={{
              flex: 1,
              position: "relative",
              flexDirection: "row",
              marginTop: "220%",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.Inner_Img}>
              <View
                style={{
                  flex: 1,
                  width: 50,
                  height: 50,
                  borderRadius: 200 / 2,
                  borderWidth: 1,
                  backgroundColor: "white",
                  alignItems: "center",
                  borderColor: "black",
                }}
              >
                <Image
                  source={require("../../../../assets/images/easypaisa.png")}
                />
              </View>
            </View>
            <View style={styles.Inner_Img}>
              <View
                style={{
                  flex: 1,
                  width: 50,
                  height: 50,
                  borderRadius: 200 / 2,
                  borderWidth: 1,
                  backgroundColor: "white",
                  alignItems: "center",
                  right: "-150%",
                  borderColor: "black",
                }}
              >
                <Image
                  source={require("../../../../assets/images/jazzcash.png")}
                />
              </View>
            </View>
            <View style={styles.Inner_Img}>
              <View
                style={{
                  flex: 1,
                  width: 50,
                  height: 50,
                  borderRadius: 200 / 2,
                  borderWidth: 1,
                  backgroundColor: "white",
                  alignItems: "center",
                  right: "-300%",
                  borderColor: "black",
                }}
              >
                <Image
                  source={require("../../../../assets/images/mastercard.png")}
                />
              </View>
            </View>
            <View style={styles.Inner_Img}>
              <View
                style={{
                  flex: 1,
                  width: 50,
                  height: 50,
                  borderRadius: 200 / 2,
                  borderWidth: 1,
                  backgroundColor: "white",
                  alignItems: "center",
                  right: "-450%",
                  borderColor: "black",
                }}
              >
                <Image source={require("../../../../assets/images/visa.png")} />
              </View>
            </View>
            <View style={styles.add_paymet}>
              <View
                style={{
                  flex: 1,
                  width: 50,
                  height: 50,
                  borderRadius: 200 / 2,
                  borderWidth: 1,
                  backgroundColor: colors.Purple522F91,
                  borderWidth: 3,
                  alignItems: "center",
                  right: "-600%",
                  borderColor: colors.White,
                }}
              >
                <Text style={{ fontSize: 30, color: colors.White }}>+</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ProfileStyle: {
    flex: 2.5,
    backgroundColor: colors.Purple522F91,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  container: {
    flex: 1,
    // position: "absolute",
    marginTop: "-150%",
    justifyContent: "center",
    alignItems: "center",
  },
  Inner_Img: {
    flex: 2,
    position: "absolute",
    right: "31%",
    top: "52%",
    justifyContent: "center",
    alignItems: "center",
  },
  add_paymet: {
    flex: 2,
    position: "absolute",
    right: "31%",
    top: "52%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProfileScreen;
