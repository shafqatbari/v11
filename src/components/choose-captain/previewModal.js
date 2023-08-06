import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'

const PreviewModal = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <View style={{ height: "100%", marginTop: 40, flex: 1, alignItems: "center", }}>
            <TouchableOpacity
                style={{
                    height: '7%', width: '60%', backgroundColor: "grey",
                    borderRadius: 15, marginTop: 600
                }}
                onPress={() => { setShowModal(true) }}
            >
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, fontWeight: '600' }}>Preview Team </Text>
            </TouchableOpacity>
            <Modal visible={showModal} transparent={true}>
                <View style={{ flex: 1, }}>
                    <View style={{
                        backgroundColor: "#82469C", flex: 1,
                    }}>

                        <View style={styles.headerStyle}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity
                                    style={styles.backButton}
                                    onPress={() => {
                                        setShowModal(false)
                                    }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Back </Text>
                                </TouchableOpacity>
                                <View style={{ marginTop: 35, marginLeft: 60 }}>
                                    <Text style={styles.headerTitle}>
                                        Team Pakistan
                                    </Text>
                                </View>
                                <View style={{ marginTop: 35, marginLeft: 70 }}>
                                    <Text style={{ color: "white", fontSize: 20 }}>
                                        Icon
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <View style={{ marginTop: 25 }}>
                                <Text style={{ color: "white", fontSize: 20 }}>Icon </Text>
                            </View>
                            <View style={styles.roundShape}>
                                <View style={{ alignItems: "center" }}>
                                    <View style={{ marginTop: 50 }}>
                                        <Text style={{ color: "white", fontSize: 20 }}>Image </Text>
                                    </View>
                                    <View style={{
                                        marginTop: 10, height: "6%", borderRadius: 10,
                                        width: "40%", backgroundColor: "black"
                                    }}>
                                        <Text style={{
                                            color: "white", fontSize: 15,
                                            textAlign: "center", marginTop: 4
                                        }}>
                                            Shahid Afridi
                                        </Text>
                                    </View>
                                    <View style={styles.pitchStyle} >
                                        <View style={{ flexDirection: 'row', marginTop: 90 }}>
                                            <View style={{ marginLeft: -112 }}>
                                                <Text style={styles.imageStyle}>Image </Text>
                                            </View>
                                            <View style={styles.playerNameBackgroundStyle}>
                                                <Text style={styles.PlayerNameStyle}>
                                                    Shahid Afridi
                                                </Text>
                                            </View>
                                            <View style={{ marginLeft: 30 }}>
                                                <Text style={styles.imageStyle}>Image </Text>
                                            </View>
                                            <View style={styles.playerNameBackgroundStyle}>
                                                <Text style={styles.PlayerNameStyle}>
                                                    Shahid Afridi
                                                </Text>
                                            </View>
                                            <View style={{ marginLeft: 30 }}>
                                                <Text style={styles.imageStyle}>Image </Text>
                                            </View>
                                            <View style={styles.playerNameBackgroundStyle}>
                                                <Text style={styles.PlayerNameStyle}>
                                                    Shahid Afridi
                                                </Text>
                                            </View>
                                            <View style={{ marginLeft: 30 }}>
                                                <Text style={styles.imageStyle}>Image </Text>
                                            </View>
                                            <View style={styles.playerNameBackgroundStyle}>
                                                <Text style={styles.PlayerNameStyle}>
                                                    Shahid Afridi
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: -30 }}>
                                        <View>
                                            <View style={{ marginLeft: 15, marginTop: 11 }}>
                                                <Text style={styles.imageStyle}>Image </Text>
                                            </View>
                                            <View style={{ marginLeft: -2 }}>
                                                <View style={{
                                                    height: 20, marginTop: 15,
                                                    borderRadius: 10, width: 80, backgroundColor: "black"
                                                }}>
                                                    <Text style={styles.PlayerNameStyle}>
                                                        Shahid Afridi
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ marginLeft: 170, marginTop: -56 }}>
                                                <Text style={styles.imageStyle}>Image </Text>
                                            </View>
                                            <View style={{ marginLeft: 150 }}>
                                                <View style={{
                                                    height: 20, marginTop: 15,
                                                    borderRadius: 10, width: 80, backgroundColor: "black"
                                                }}>
                                                    <Text style={styles.PlayerNameStyle}>
                                                        Shahid Afridi
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 70 }}>
                                        <View style={{ flexDirection: 'row', marginHorizontal: 110 }}>
                                            <View style={{ marginLeft: -112 }}>
                                                <Text style={styles.imageStyle}>Image </Text>
                                            </View>
                                            <View style={{
                                                marginLeft: -65, height: "40%", marginTop: 35,
                                                borderRadius: 10, width: "80%", backgroundColor: "black"
                                            }}>
                                                <Text style={styles.PlayerNameStyle}>
                                                    Shahid Afridi
                                                </Text>
                                            </View>
                                            <View style={{ marginLeft: 30 }}>
                                                <Text style={styles.imageStyle}>Image </Text>
                                            </View>
                                            <View style={{
                                                marginLeft: -60, height: "40%", marginTop: 35,
                                                borderRadius: 10, width: "80%", backgroundColor: "black"
                                            }}>
                                                <Text style={styles.PlayerNameStyle}>
                                                    Shahid Afridi
                                                </Text>
                                            </View>
                                            <View style={{ marginLeft: 30 }}>
                                                <Text style={styles.imageStyle}>Image </Text>
                                            </View>
                                            <View style={{
                                                marginLeft: -60, height: "40%", marginTop: 35,
                                                borderRadius: 10, width: "80%", backgroundColor: "black"
                                            }}>
                                                <Text style={styles.PlayerNameStyle}>
                                                    Shahid Afridi
                                                </Text>
                                            </View>
                                            <View style={{ marginLeft: 30 }}>
                                                <Text style={styles.imageStyle}>Image </Text>
                                            </View>
                                            <View style={{
                                                marginLeft: -60, height: "40%", marginTop: 35,
                                                borderRadius: 10, width: "80%", backgroundColor: "black"
                                            }}>
                                                <Text style={styles.PlayerNameStyle}>
                                                    Shahid Afridi
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal >
        </View >
    )
}

export default PreviewModal

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#522F91",
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        height: 90,
    },
    backButton: {
        alignItems: 'center',
        marginTop: 35,
        backgroundColor: "skyblue",
        borderRadius: 10,
        width: "20%",
        marginLeft: 10,
    },
    headerTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "500"
    },
    roundShape: {
        borderWidth: 1,
        borderRadius: 450,
        width: "70%",
        height: "78%",
        borderColor: "white",
        marginTop: 30,
    },
    pitchStyle: {
        marginTop: 25,
        height: "50%",
        width: "35%",
        backgroundColor: "#41DC60"
    },
    imageStyle: {
        color: "white",
        fontSize: 15
    },
    PlayerNameStyle: {
        color: "white",
        fontSize: 10,
        textAlign: "center",
        marginTop: 2
    },
    playerNameBackgroundStyle: {
        marginLeft: -65,
        height: "40%",
        marginTop: 35,
        borderRadius: 10,
        width: "80%",
        backgroundColor: "black"
    },
})
