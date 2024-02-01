/* eslint-disable prettier/prettier */
import { Text,Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export const HomeScreen = ({navigation}) => {
   console.log(1111);
    return (
      <View>
      <Text style ={{backgroundColor : 'red' , width : 200, height : 300}}>This is's profile</Text>
      </View>
    );
  };
  export const ProfileScreen = ({navigation, route}) => {
    console.log(11117);
    return (
      <View style ={{ backgroundColor : 'green'}}>
         <SafeAreaView>
           <Text>1234</Text>
      </SafeAreaView>
      </View>
    );
    };