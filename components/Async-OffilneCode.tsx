import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

// Function to save data locally
const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving data", error);
  }
};

// Function to load data locally
const loadData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error("Error loading data", error);
    return null;
  }
};

// Function to fetch data from an API
const fetchDataFromAPI = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    // Save data locally after fetching
    await saveData('myData', data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
};

// Function to fetch data
const fetchData = async () => {
  const state = await NetInfo.fetch();
  if (state.isConnected) {
    // If online, fetch data from API
    return await fetchDataFromAPI();
  } else {
    // If offline, load data from AsyncStorage
    return await loadData('myData');
  }
};
