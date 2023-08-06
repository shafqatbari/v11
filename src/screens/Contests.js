import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../helper/colors";
import SvgImage from "../helper/SvgImage";
import { ArrowLeftDynamic } from "../helper/CommonImagesPath";

const Contests = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: colors.GrayD5D6D8 }}>
        {/* header  */}

        <View style={styles.header}>
          <SvgImage
            source={ArrowLeftDynamic}
            style={{ width: 20, height: 20, color: colors.White }}
          />
          <Text
            style={{
              fontSize: 30,
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              left: 10,
            }}
          >
            Contests
          </Text>
          <View style={{ left: 60 }}>
            <Text>USer</Text>
            <View style={{ right: 30 }}>
              <Text> Bal: 1350 PKR</Text>
              <Text> Rem. Bal: 1251 PKR</Text>
            </View>
          </View>
        </View>

        {/* Progres  bar  */}

        <View style={styles.progress}>
          {/* 1 */}

          <View style={{ marginLeft: 30, marginTop: 10 }}>
            <View style={styles.circle}>
              <Text style={{ fontWeight: "bold", textAlign: "center" }}>1</Text>
            </View>
          </View>
          <View style={{ position: "absolute", top: 45, left: 30 }}>
            <Text style={{ fontSize: 8, color: "black" }}>Select</Text>
            <Text style={{ fontSize: 8, color: "black" }}>Tournament</Text>
          </View>

          {/* 2 */}

          <View style={{ marginLeft: 110, marginTop: -30 }}>
            <View style={styles.circle}>
              <Text style={{ fontWeight: "bold", textAlign: "center" }}>2</Text>
            </View>
          </View>
          <View style={{ position: "absolute", top: 45, left: 110 }}>
            <Text style={{ fontSize: 8, color: "black" }}>Select</Text>
            <Text style={{ fontSize: 8, color: "black" }}>Mathces</Text>
          </View>

          {/* 3 */}

          <View style={{ marginLeft: 190, marginTop: -30 }}>
            <View style={styles.circle}>
              <Text style={{ fontWeight: "bold", textAlign: "center" }}>3</Text>
            </View>
          </View>
          <View style={{ position: "absolute", top: 45, left: 190 }}>
            <Text style={{ fontSize: 8, color: "black" }}>Select</Text>
            <Text style={{ fontSize: 8, color: "black" }}>Teams</Text>
          </View>

          {/* 4 */}

          <View style={{ marginLeft: 270, marginTop: -30 }}>
            <View style={styles.circle_left}>
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "black",
                }}
              >
                4
              </Text>
            </View>
          </View>
          <View style={{ position: "absolute", top: 45, left: 275 }}>
            <Text style={{ fontSize: 8, color: "black" }}>Enter</Text>
            <Text style={{ fontSize: 8, color: "black" }}>Contest</Text>
          </View>
        </View>

        {/*Mega  Text */}

        <View style={{ marginTop: 250, marginLeft: 50 }}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
            Mega Contests
          </Text>
          <Text style={{ fontSize: 15, color: "black" }}>
            Get ready for mega winnings!
          </Text>
        </View>

        {/* Mega Context */}

        <View style={styles.contest_outer}>
          <View>
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  position: "absolute",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    left: "120%",
                    top: "15%",
                  }}
                >
                  Prize Pool
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    left: "1320%",
                    top: "15%",
                  }}
                >
                  Entry
                </Text>
              </View>
              <View style={{ flex: 1, position: "absolute" }}>
                <Text
                  style={{
                    fontSize: 24,
                    color: "white",
                    top: "45%",
                    left: "17%",
                  }}
                >
                  PKR. 3000
                </Text>
                <View style={styles.entry}>
                  <Text style={{ textAlign: "right", fontSize: 18 }}>
                    PKR. 49
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 1, position: "absolute" }}>
              <View style={styles.bar}></View>
              <View style={styles.total_bar}></View>
            </View>
            <View style={styles.bar_text}>
              <Text style={{ fontSize: 12, color: "white" }}>
                Spots Left: 98
              </Text>
              <Text style={{ fontSize: 12, color: "white", marginLeft: "30%" }}>
                Total Spots: 250
              </Text>
            </View>
          </View>
          <View style={styles.contest_inner_bottom}>
            <View style={styles.icons}>
              <View style={{ flex: 1 }}>
                <Text>
                  Medal
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    left: "40%",
                    top: "-30%",
                  }}
                >
                  PKR 2000
                </Text>
              </View>

              <View style={{ flex: 1 }}>

                <Text>
                  Trophy
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    left: "35%",
                    top: "-30%",
                  }}
                >
                  50%
                </Text>
              </View>

              <View style={{ flex: 1 }}>

                <Text>
                  Ticket
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    left: "5%",
                    top: "-30%",
                  }}
                >
                  Upto 11 entries
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/*Beginners  Text */}

        <View style={{ marginTop: 220, marginLeft: 50 }}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
            Only For Beginners
          </Text>
          <Text style={{ fontSize: 15, color: "black" }}>
            Play your first contest now!
          </Text>
        </View>

        <View style={{ marginTop: 20, flex: 1 }}>
          {/* Mega Context */}

          <View style={styles.bg_contest_outer}>
            <View>
              <View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    position: "absolute",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 12,
                      left: "120%",
                      top: "15%",
                    }}
                  >
                    Prize Pool
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 12,
                      left: "1320%",
                      top: "15%",
                    }}
                  >
                    Entry
                  </Text>
                </View>
                <View style={{ flex: 1, position: "absolute" }}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: "white",
                      top: "45%",
                      left: "17%",
                    }}
                  >
                    PKR. 8000
                  </Text>
                  <View style={styles.entry}>
                    <Text style={{ textAlign: "right", fontSize: 18 }}>
                      PKR. 95
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, position: "absolute" }}>
                <View style={styles.bar}></View>
                <View style={styles.total_bar}></View>
              </View>
              <View style={styles.bar_text}>
                <Text style={{ fontSize: 12, color: "white" }}>
                  Spots Left: 98
                </Text>
                <Text
                  style={{ fontSize: 12, color: "white", marginLeft: "30%" }}
                >
                  Total Spots: 250
                </Text>
              </View>
            </View>
            <View style={styles.contest_inner_bottom}>
              <View style={styles.icons}>
                <View style={{ flex: 1 }}>
                  <Text>
                    Medal
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 14,
                      left: "40%",
                      top: "-30%",
                    }}
                  >
                    PKR 6000
                  </Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text>
                    Trophy
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 14,
                      left: "35%",
                      top: "-30%",
                    }}
                  >
                    50%
                  </Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text>
                    Ticket
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 14,
                      left: "5%",
                      top: "-30%",
                    }}
                  >
                    Upto 11 entries
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    // bottom: 40,
    backgroundColor: "#522F91",
    height: 125,
    width: 390,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  progress: {
    position: "absolute",
    top: 140,
    flex: 1,
    flexDirection: "column",
    borderColor: "white",
    height: 80,
    width: 340,
    borderRadius: 40,
    borderWidth: 1,
    marginLeft: 22,
    backgroundColor: "#F9F9F9",
  },
  circle: {
    // color: '#9972E0',
    backgroundColor: "#9972E0",
    height: 30,
    width: 30,
    borderRadius: 40,
    justifyContent: "center",
  },
  circle_left: {
    backgroundColor: "#9B9B9B",
    height: 30,
    width: 30,
    borderRadius: 40,
    justifyContent: "center",
  },
  contest_outer: {
    position: "absolute",
    top: 320,
    flex: 1,
    flexDirection: "column",
    borderColor: "transparent",
    height: 161,
    width: 340,
    borderRadius: 40,
    borderWidth: 1,
    marginLeft: 22,
    backgroundColor: "#533092",
  },
  contest_inner_bottom: {
    position: "absolute",
    top: 125,
    flex: 1,
    flexDirection: "column",
    borderColor: "white",
    height: 50,
    width: 338,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderWidth: 1,

    backgroundColor: "#F9F9F9",
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  entry: {
    flex: 1,
    flexDirection: "row",
    borderColor: "none",
    backgroundColor: "#82469C",
    height: 30,
    width: 85,
    borderRadius: 1,
    borderWidth: 1,
    right: "-390%",
  },
  // bar: {
  //   flex: 1,
  //   position: 'absolute',
  //   backgroundColor: '#AF599C',
  //   height: 10,
  //   width: 137,
  //   borderRadius: 5,
  //   borderWidth: 1,
  //   top: '50%',
  //   right: '-225%',
  // },
  total_bar: {
    flex: 1,
    // position: 'absolute',
    backgroundColor: "white",
    height: 10,
    width: 289,
    borderRadius: 5,
    borderWidth: 1,
    top: "750%",
    right: "-7%",
  },
  bar_text: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    marginTop: "27%",
    marginLeft: "10%",
    justifyContent: "space-between",
  },
  bg_contest_outer: {
    position: "absolute",
    // top: 320,
    flex: 1,
    flexDirection: "column",
    borderColor: "transparent",
    height: 161,
    width: 340,
    borderRadius: 40,
    borderWidth: 1,
    marginLeft: 22,
    backgroundColor: "#533092",
  },
});
export default Contests;
