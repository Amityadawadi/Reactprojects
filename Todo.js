import { View, Text, StatusBar, TextInput, Button, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { openDatabase } from "react-native-sqlite-storage"

const db = openDatabase({
  name: "rn_sqlite",
})

const Todo = () => {
  const [Category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("table creted successfully");
        },
        error => {
          console.log("error on creating table " + error.message);
        }
      )
    })
  }

  const addCategory = () => {
    if (!Category) {
      Alert.alert("Enter category");
      return false;
    }

    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO categories (name) VALUES (?)`,
        [Category],
        (sqlTxn, res) => {
          console.log(`${Category} category added successfully`);
          getCategories();
          setCategories("");
        },
        error => {
          console.log("error on adding category " + error.message);
        }
      )
    })
  }


  const getCategories = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM categories ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("categories retrieved successfully");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, name: item.name });
            }

            setCategories(results);
          }
        },
        error => {
          console.log("error on getting categories " + error.message);
        },
      )
    })
  }

  const renderCategory = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 5,
        borderColor: "#ddd"
      }}>
        <Text style={{ marginRight: 10 }}>{item.id}</Text>
        <Text>{item.name}</Text>
      </View>
    )
  }


  useEffect(() => {
    const fetchData = async () => {
      await createTables();
      await getCategories();
    };
    fetchData();
  }, []);

  return (
    <View>
      <StatusBar backgroundColor="orange" />

      <TextInput
        placeholder='Enter Category'
        value={Category}
        onChangeText={setCategory}
        style={{
          marginHorizontal: 8,
          fontSize: 20
        }}
      />

      <Button title='Submit' onPress={addCategory} />

      <FlatList
        data={categories}
        renderItem={renderCategory}
        key={cat => cat.id}
      />
    </View>
  )
}

export default Todo