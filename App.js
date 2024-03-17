import React from "react";
import * as SystemUI from 'expo-system-ui';
import { SafeAreaView, FlatList, TextInput, Button } from "react-native";
import RazorpayCheckout from "react-native-razorpay";
let key = 'rzp_test_HKRrXYXoOWHaGa'
const App = () => {
  const amount = 100;
  const handlePayment = () => {
    var options = {
      description: "Credits towards consultation",
      image: "https://i.imgur.com/3g7nmJC.jpg",
      currency: "INR",
      key: key,
      amount: amount*100,
      name: "Acme Corp",
      order_id: '', 
      prefill: {
        email: "xyz@gmail.com",
        contact: "9191919191",
        name: "Gaurav Kumar",
      },
      theme: { color: "#53a20e" },
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <SafeAreaView style={{ marginTop: 80, padding: 20 }}>
      <Button
        style={{ marginTop: 120 }}
        title="Pay Now"
        onPress={handlePayment}
      />
    </SafeAreaView>
  );
};

export default App;
