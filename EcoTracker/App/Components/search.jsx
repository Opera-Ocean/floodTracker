import React, { useState, useEffect } from 'react';
import { 
    Appearance,
    View,
    TextInput,
    ActivityIndicator 
} from 'react-native';

import SearchResult from './searchResults';
import { DefaultIcon } from './icons';
import { Colors } from '../Constants/theme';
import style from '../styles';

const colorScheme = Appearance.getColorScheme();
const light = colorScheme === 'light';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  endpoint = "https://environment.data.gov.uk/flood-monitoring/id/floods?county="

  url = `${endpoint}${search}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(url);
        const data = await response.json();

        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      if (search.trim() !== '') {
        fetchData();
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [search]);

  return (
    <View style={style.searchContainer}>
      <DefaultIcon name='search' />
      <TextInput
        style={style.searchField}
        placeholder="Search Station"
        placeholderTextColor={light ? Colors.gray : Colors.gray}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      {loading && <ActivityIndicator size="small" color="#0000ff" />}
  
      <SearchResult result={searchResults} />

    </View>
  );
};

export default SearchBar;
