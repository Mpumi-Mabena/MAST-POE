import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Reservations: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [partySize, setPartySize] = useState<number | string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleConfirmReservation = () => {
    if (!name || !phoneNumber || !partySize || !selectedDate) {
      Alert.alert('Error', 'Please fill in all fields before confirming your reservation.');
      return;
    }

    Alert.alert(
      'Reservation Confirmed',
      `Thank you, ${name}! Your table for ${partySize} is booked for ${selectedDate.toLocaleString()}.`,
    );

    // Reset fields
    setName('');
    setPhoneNumber('');
    setPartySize('');
    setSelectedDate(new Date());
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Make a Reservation</Text>

      {/* Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Phone Number */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Party Size */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Party Size</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the number of guests"
          keyboardType="numeric"
          value={partySize.toString()}
          onChangeText={(value) => setPartySize(value)}
        />
      </View>

      {/* Date and Time */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Select Date and Time</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
          <Text>
            {selectedDate
              ? selectedDate.toLocaleString()
              : 'Tap to select date and time'}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="datetime"
            display="default"
            onChange={(event, date) => {
              setShowDatePicker(false);
              if (date) setSelectedDate(date);
            }}
          />
        )}
      </View>

      {/* Confirm Button */}
      <Button title="Confirm Reservation" onPress={handleConfirmReservation} />

      {/* Optional: Display Reservations (example only, add logic to save/track reservations if needed) */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  datePicker: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default Reservations;
