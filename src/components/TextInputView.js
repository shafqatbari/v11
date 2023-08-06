import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../helper/colors";
import { EmailIcon, EyeIcon } from "../helper/CommonImagesPath";
import FontsName from "../helper/FontsName";
import SvgImage from "../helper/SvgImage";
import { screenWidth } from "../helper/Util";

const TextInputView = React.forwardRef(
  (
    {
      onChangeText,
      value,
      placeholder,
      isBackGray,
      textInputBackColor,
      isShowPasswordIcon,
      returnKeyType,
      onSubmitEditing,
      keyboardType,
      title,
      leftIcon,
      editable,
      rightIcon,
    },
    ref
  ) => {
    const [isShowPassword, setIsShowPassword] = useState(true);
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            height: 50,
            borderBottomWidth: 1,
            borderColor: colors.Black212121,
            alignItems: "center",
            // backgroundColor: 'red'
          }}
        >
          <View
            style={{
              marginHorizontal: 5,
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <TextInput
              ref={ref}
              style={{
                width: "80%",
                color: colors.BlackColor,
                fontFamily: FontsName.SemiBold,
                fontSize: 14,
              }}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={isShowPasswordIcon ? isShowPassword : false}
              returnKeyType={returnKeyType ? returnKeyType : "default"}
              onSubmitEditing={onSubmitEditing && onSubmitEditing}
              placeholderTextColor={colors.gray76}
              keyboardType={keyboardType && keyboardType}
              editable={editable && editable}
            />
            {rightIcon ? (
              <View style={{ marginEnd: 5 }}>
                <SvgImage
                  source={rightIcon}
                  style={{ height: 20, width: 20 }}
                />
              </View>
            ) : null}


          </View>
        </View>
      </View>
    );
  }
)

export default TextInputView;
