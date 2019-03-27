import React from 'react';

import {
  View, ScrollView, Text, TouchableOpacity,
} from 'react-native';

import styles from './styles';

const CategoryBar = ({ categories, current, onChange }) => (
  <View style={styles.container}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {
      categories.map(category => (
        <TouchableOpacity
          key={category.id}
          onPress={() => onChange(category)}
          style={styles.categoryView}
        >
          <Text style={[
            styles.categoryText,
            category.id === current.id ? styles.active : {},
          ]}
          >
            {category.title}
          </Text>
        </TouchableOpacity>
      ))
      }
    </ScrollView>
  </View>
);

export default CategoryBar;
