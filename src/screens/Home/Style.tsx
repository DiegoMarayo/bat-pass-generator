import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
appContainer: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
},
logoContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:60,
    paddingTop:20,
    paddingBottom:10,
},
inputContainer:{
    width:'80%',
    gap:15,
    flexDirection:'column',
    alignItems:'center',
}
});

export default styles;
