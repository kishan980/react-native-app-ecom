import {View ,Text, Image,StyleSheet, TouchableOpacity} from "react-native"
import {React} from "react"
import {userData} from "../data/UserData"
import Layout from "../components/layout/Layout"
import AntDesign from "react-native-vector-icons/AntDesign";

const Account = ()=>{
  return(
    <Layout>
    <View style={styles.container}>
      <Image source={{uri:userData.profileUser}} style={styles.image}/>
       <View style={{justifyContent:"center", alignItems:"center"}}>
       <Text style={styles.name}>
        Hello 
        <Text style={{color:"green"}}>{userData.name}</Text>
        </Text>
        <Text>email:{userData.email}</Text>
        <Text>contact:{userData.contact}</Text>
       </View>
       <View style={styles.btnContainer}> 
          <Text style={styles.heading}>Account Setting</Text>
          <TouchableOpacity style={styles.btn}>
              <AntDesign name="edit" style={styles.btnText}/>
            <Text style={styles.btnText}>
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
              <AntDesign name="bars" style={styles.btnText}/>
            <Text style={styles.btnText}>
              My Orders
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
              <AntDesign name="bells" style={styles.btnText}/>
            <Text style={styles.btnText}>
              Notification
            </Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.btn}>
              <AntDesign name="windows" style={styles.btnText}/>
            <Text style={styles.btnText}>
              Admin Panel
            </Text>
          </TouchableOpacity>

       </View>
    </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
      container:{
        marginVertical:20,
      },
      image:{
        width:"100%",
        height:100,
        resizeMode:"contain"
      },
      name:{
        marginTop:10,
        fontSize:20
      },
      btnContainer:{
        padding:10,
        backgroundColor:"#ffffff",
        margin:1,
        marginVertical:20,
        elevation:5,
        borderRadius:10,
        paddingBottom:30
      },
      heading:{
        fontSize:20,
        fontWeight:"bold",
        paddingBottom:10,
        textAlign:"center",
        borderBottomWidth:1,
        borderColor:"lightgray"
      },
      btn:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10,
        padding:5
      },
      btnText:{
        fontSize:15,
        marginRight:10
      }
})

export default Account